"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Binary,
  Activity,
  TrendingUp,
  ArrowRight,
  Cpu,
  RotateCcw,
  Loader2,
  AlertCircle
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModels, useModelMetrics } from "@/hooks/use-models";
import { MLModel, modelsService } from "@/services/models.service";

function ModelBar({ model }: { model: MLModel }) {
  const { data: metrics, isLoading } = useModelMetrics(model.id);
  const pct = typeof metrics?.precision === "number" ? Math.round(metrics.precision * 100) : null;
  return (
    <div className="flex-1 space-y-1 group/tick flex flex-col items-center min-w-0">
      <div className="w-full flex-1 flex items-end">
        <div
          style={{ height: isLoading || pct == null ? "4%" : `${Math.max(4, pct)}%` }}
          className="w-full bg-white/5 rounded-full group-hover/tick:bg-brand-lime transition-all cursor-crosshair shadow-sm relative"
          title={`${model.name}: ${pct != null ? pct + "%" : "N/A"} precision`}
        />
      </div>
      <span className="text-[7px] font-black text-white/20 uppercase tracking-widest mt-2 italic truncate max-w-full">{model.name}</span>
    </div>
  );
}

function ModelCard({ model }: { model: MLModel }) {
  const { data: metrics, isLoading } = useModelMetrics(model.id);
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/dashboard/models/${model.id}`)}
      className="group p-10 bg-white rounded-[56px] border border-neutral-100 hover:shadow-2xl transition-all shadow-xl cursor-pointer relative overflow-hidden flex flex-col justify-between font-bold italic">
      <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform">
         <Binary className="w-32 h-32 text-neutral-900" />
      </div>
      <div className="relative z-10 space-y-10">
         <div className="flex items-center justify-between">
            <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center text-neutral-400 border border-neutral-200 group-hover:border-brand-lime transition-all">
               <Cpu className="w-6 h-6 flex-shrink-0" />
            </div>
            <div className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border ${
               model.status === "ACTIVE" || model.status === "active" ? "bg-brand-lime/10 border-brand-lime/20 text-neutral-900 shadow-sm" : "bg-neutral-50 border-neutral-100 text-neutral-300"
            }`}>
               {model.status}
            </div>
         </div>
         
         <div className="space-y-4">
            <h4 className="text-3xl font-black italic tracking-tighter text-neutral-900 uppercase leading-none group-hover:text-brand-lime transition-all">{model.name}</h4>
            <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold italic leading-none">{model.model_type} • {model.description}</p>
         </div>

         <div className="grid grid-cols-2 gap-8 pt-10 border-t border-neutral-100">
            <div>
               <p className="text-[8px] font-black uppercase tracking-widest text-neutral-300 mb-2 italic">Precision</p>
               <div className="text-2xl font-black text-neutral-900 italic leading-none">
                 {isLoading ? <Loader2 className="w-4 h-4 animate-spin text-zinc-300" /> : typeof metrics?.precision === 'number' ? `${(metrics.precision * 100).toFixed(1)}%` : 'N/A'}
               </div>
            </div>
            <div>
               <p className="text-[8px] font-black uppercase tracking-widest text-neutral-300 mb-2 italic">Latency</p>
               <div className="text-2xl font-black text-emerald-600 italic leading-none">
                 {isLoading ? <Loader2 className="w-4 h-4 animate-spin text-emerald-200" /> : typeof metrics?.average_latency_ms === 'number' ? `${metrics.average_latency_ms}ms` : 'N/A'}
               </div>
            </div>
         </div>
      </div>

      <div className="relative z-10 mt-12 flex items-center justify-between pt-8 border-t border-neutral-100 italic">
         <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-all group/btn">
            Details <ArrowRight className="w-4 h-4 text-brand-lime group-hover/btn:translate-x-2 transition-all" />
         </button>
         <div className="w-2 h-2 rounded-full bg-brand-lime animate-pulse shadow-[0_0_8px_#D1F701]" />
      </div>
    </div>
  );
}

export default function ModelsPage() {
  const { data: models, isLoading, isError, refetch } = useModels();
  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState("");
  const [newModelType, setNewModelType] = useState("fraud_classifier");
  const [newDescription, setNewDescription] = useState("");
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);
  const [retraining, setRetraining] = useState(false);
  const [retrainMessage, setRetrainMessage] = useState<string | null>(null);

  const handleRetrain = async () => {
    const activeModel = models?.find((m) => m.status.toUpperCase() === "ACTIVE");
    if (!activeModel) return;
    setRetraining(true);
    setRetrainMessage(null);
    try {
      await modelsService.requestRetrain(activeModel.id);
      setRetrainMessage(`Retraining requested for ${activeModel.name}.`);
    } catch (err) {
      setRetrainMessage(err instanceof Error ? err.message : "Failed to request retraining.");
    } finally {
      setRetraining(false);
    }
  };

  const handleCreateModel = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;
    setCreating(true);
    setCreateError(null);
    try {
      const slug = newName.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      await modelsService.registerModel({
        name: newName.trim(),
        slug,
        model_type: newModelType,
        description: newDescription.trim() || undefined,
      });
      setShowCreate(false);
      setNewName("");
      setNewDescription("");
      await refetch();
    } catch (err) {
      setCreateError(err instanceof Error ? err.message : "Failed to register model.");
    } finally {
      setCreating(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center pt-48 pb-24">
        <Loader2 className="w-12 h-12 animate-spin text-brand-lime" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center pt-48 pb-24 text-center">
        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
        <h2 className="text-2xl font-black italic tracking-tighter uppercase text-neutral-900">Failed to load models</h2>
        <p className="text-zinc-500 max-w-md mt-2">There was an issue fetching the machine learning models. Please try again later.</p>
      </div>
    );
  }

  const activeCount = models.filter(m => m.status.toUpperCase() === 'ACTIVE').length;

  return (
    <div className="space-y-12 pb-20">
      {/* 1. HEADER */}
      <div className="flex flex-col lg:row justify-between items-start lg:items-center gap-8">
        <div>
           <h1 className="text-4xl font-black italic tracking-tighter text-neutral-900 uppercase leading-tight mb-2 flex items-center gap-4">
             Models.
           </h1>
           <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest italic font-black">Core ML Intelligence • {activeCount} Active Variants</p>
        </div>
        <div className="flex gap-4">
           <button
             onClick={() => setShowCreate(true)}
             className="px-10 py-4 bg-brand-lime text-neutral-900 rounded-2xl font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl active:scale-95 flex items-center gap-3 italic"
           >
              Train New Variant <Cpu className="w-4 h-4" />
           </button>
        </div>
      </div>

      {/* 2. MODEL GRID */}
      {models.length === 0 ? (
        <div className="p-12 bg-zinc-50 border border-zinc-100 rounded-[40px] flex flex-col items-center justify-center text-center space-y-4">
          <Activity className="w-10 h-10 text-zinc-300" />
          <div>
            <h2 className="text-xl font-black italic tracking-tighter uppercase text-neutral-900">No Models Configured</h2>
            <p className="text-zinc-500 mt-2 text-sm">You haven&apos;t trained or deployed any custom models for this tenant yet.</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {models.map(model => (
             <ModelCard key={model.id} model={model} />
           ))}
        </div>
      )}

      {models.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
           {/* 3. PERFORMANCE MATRIX (VISUAL) */}
           <div className="lg:col-span-8 bg-black rounded-[56px] p-12 lg:p-20 space-y-16 relative overflow-hidden group shadow-3xl">
              <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
              <div className="flex items-center justify-between relative z-10 font-bold italic">
                 <h3 className="text-2xl lg:text-5xl font-black uppercase tracking-tighter text-white opacity-10 leading-none">Telemetry Core.</h3>
                 <div className="flex gap-4">
                    <span className="flex items-center gap-2 text-[10px] font-black text-brand-lime uppercase tracking-widest"><TrendingUp className="w-3.5 h-3.5 shadow-[0_0_8px_#D1F701]" /> Precision by Model</span>
                 </div>
              </div>

              <div className="relative z-10 space-y-12 h-[300px] flex items-end gap-2 px-4">
                 {models.map((m) => (
                   <ModelBar key={m.id} model={m} />
                 ))}
              </div>
           </div>

           {/* 4. RETRAIN & EXPERIMENT DOCK */}
           <div className="lg:col-span-4 bg-white rounded-[56px] border border-neutral-100 p-12 space-y-12 shadow-xl overflow-hidden group relative italic font-bold">
              <div className="relative z-10 space-y-12">
                 <div className="space-y-4">
                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 italic">Training Pipeline</h5>
                    <h3 className="text-3xl font-black italic tracking-tighter text-neutral-900 leading-tight uppercase group-hover:text-brand-lime transition-all">Rapid <br />Iterative <br />Learning.</h3>
                 </div>
                 
                 <div className="p-8 bg-zinc-50 rounded-[40px] border border-neutral-100 space-y-8 italic">
                    <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-widest text-neutral-300">
                       <span>Target Model</span>
                       <span>{models.find((m) => m.status.toUpperCase() === "ACTIVE")?.name || "No active model"}</span>
                    </div>
                    {retrainMessage ? (
                      <p className="text-[9px] font-bold text-neutral-500 italic normal-case">{retrainMessage}</p>
                    ) : null}
                    <button
                      onClick={() => void handleRetrain()}
                      disabled={retraining || !models.some((m) => m.status.toUpperCase() === "ACTIVE")}
                      className="w-full py-5 bg-neutral-900 text-white rounded-[32px] font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-brand-lime hover:text-neutral-900 hover:scale-105 transition-all italic shadow-xl disabled:opacity-40 disabled:hover:scale-100"
                    >
                       {retraining ? "Requesting..." : "Initiate Retrain"} <RotateCcw className={`w-4 h-4 transition-transform duration-1000 ${retraining ? "animate-spin" : "group-hover:rotate-180"}`} />
                    </button>
                 </div>
              </div>
           </div>
        </div>
      )}

      <Dialog open={showCreate} onOpenChange={setShowCreate}>
        <DialogContent className="sm:max-w-md">
          <form onSubmit={handleCreateModel}>
            <DialogHeader>
              <DialogTitle>Register Model</DialogTitle>
              <DialogDescription>Add a new model variant to the registry.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <label className="space-y-1 text-xs font-semibold text-neutral-600 block">
                Name
                <input
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  required
                  placeholder="e.g. Transaction Risk v2"
                  className="w-full h-10 rounded-md border border-neutral-200 px-3 text-sm"
                />
              </label>
              <label className="space-y-1 text-xs font-semibold text-neutral-600 block">
                Model Type
                <select
                  value={newModelType}
                  onChange={(e) => setNewModelType(e.target.value)}
                  className="w-full h-10 rounded-md border border-neutral-200 px-3 text-sm"
                >
                  <option value="fraud_classifier">Fraud Classifier</option>
                  <option value="anomaly_detector">Anomaly Detector</option>
                  <option value="risk_scoring">Risk Scoring</option>
                  <option value="other">Other</option>
                </select>
              </label>
              <label className="space-y-1 text-xs font-semibold text-neutral-600 block">
                Description (optional)
                <textarea
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="w-full min-h-16 rounded-md border border-neutral-200 p-3 text-sm"
                />
              </label>
              {createError && <p className="text-xs text-red-600">{createError}</p>}
            </div>
            <DialogFooter>
              <button type="button" onClick={() => setShowCreate(false)} className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-all">Cancel</button>
              <button type="submit" disabled={creating || !newName.trim()} className="px-6 py-2 bg-neutral-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-lime hover:text-neutral-900 transition-all shadow-lg disabled:opacity-50">
                {creating ? "Registering..." : "Register"}
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
