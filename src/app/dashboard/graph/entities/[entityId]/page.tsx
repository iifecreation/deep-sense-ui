"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft, ShieldAlert, Loader2, AlertCircle, Share2 } from "lucide-react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  graphRingsService,
  ENTITY_TYPES,
  GraphEntityType,
  EntityRiskAssessment,
  EntityPathCollection,
} from "@/services/graph-rings.service";

export default function EntityDetailPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const entityId = params.entityId as string;
  const initialType = (searchParams.get("type") as GraphEntityType) || "customer";

  const [entityType, setEntityType] = useState<GraphEntityType>(initialType);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [risk, setRisk] = useState<EntityRiskAssessment | null>(null);
  const [paths, setPaths] = useState<EntityPathCollection | null>(null);

  const load = async (type: GraphEntityType) => {
    setLoading(true);
    setError(null);
    setRisk(null);
    setPaths(null);
    try {
      const [riskRes, pathsRes] = await Promise.all([
        graphRingsService.getEntityRisk(type, entityId),
        graphRingsService.getEntityPaths(type, entityId),
      ]);
      setRisk(riskRes);
      setPaths(pathsRes);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Entity lookup failed.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load(entityType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entityId]);

  return (
    <div className="flex flex-col gap-8 pb-20">
      <div className="space-y-1">
        <Link href="/dashboard/graph" className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-muted-foreground hover:text-neutral-900 transition-colors italic mb-2">
          <ArrowLeft className="w-3 h-3" /> Graph Intel
        </Link>
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-black italic tracking-tighter uppercase leading-none font-mono">{entityId}</h1>
        </div>
        <div className="flex items-center gap-2 pt-2">
          <span className="text-xs text-muted-foreground">Entity type:</span>
          <Select value={entityType} onValueChange={(v) => { const t = v as GraphEntityType; setEntityType(t); void load(t); }}>
            <SelectTrigger className="w-40 h-8"><SelectValue /></SelectTrigger>
            <SelectContent>
              {ENTITY_TYPES.map((t) => <SelectItem key={t} value={t} className="capitalize">{t}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      {loading ? (
        <div className="py-20 flex justify-center"><Loader2 className="w-6 h-6 animate-spin text-neutral-300" /></div>
      ) : error ? (
        <div className="p-6 bg-red-50 text-red-700 rounded-2xl text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4" /> {error}
        </div>
      ) : risk ? (
        <>
          <div className="p-10 bg-neutral-900 text-white rounded-[40px] space-y-8">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/40">{risk.entity_type}</p>
                <p className="font-mono text-sm break-all">{risk.entity_id}</p>
              </div>
              <Badge className={risk.known_fraud ? "bg-rose-500 text-white" : "bg-white/10 text-white"}>
                {risk.known_fraud ? "Known Fraud" : "Clean"}
              </Badge>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div><p className="text-[9px] uppercase text-white/40">Risk Score</p><p className="text-3xl font-black italic text-rose-400">{(risk.risk_score * 100).toFixed(1)}</p></div>
              <div><p className="text-[9px] uppercase text-white/40">Fraud Proximity</p><p className="text-3xl font-black italic">{(risk.fraud_proximity_score * 100).toFixed(1)}</p></div>
              <div><p className="text-[9px] uppercase text-white/40">Centrality</p><p className="text-3xl font-black italic">{risk.centrality_score.toFixed(2)}</p></div>
              <div><p className="text-[9px] uppercase text-white/40">Component Size</p><p className="text-3xl font-black italic">{risk.connected_component_size}</p></div>
            </div>
            {risk.mule_cluster_detected && (
              <p className="text-xs text-amber-300 flex items-center gap-2"><ShieldAlert className="w-4 h-4" /> Mule cluster detected (confidence {(risk.fraud_ring_confidence_score * 100).toFixed(0)}%)</p>
            )}
            {risk.shared_entity_clusters.length > 0 && (
              <div className="pt-6 border-t border-white/10 space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-white/40">Shared clusters</p>
                {risk.shared_entity_clusters.map((c, i) => (
                  <div key={i} className="flex justify-between text-xs"><span>{c.cluster_type}</span><span>{(c.risk_score * 100).toFixed(0)} risk / {(c.confidence * 100).toFixed(0)}% conf.</span></div>
                ))}
              </div>
            )}
          </div>

          {paths && (
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                {paths.total_paths} path{paths.total_paths === 1 ? "" : "s"} to known fraud entities
              </p>
              {paths.paths.length === 0 ? (
                <p className="text-sm text-neutral-400 italic">No paths found.</p>
              ) : (
                paths.paths.map((p, i) => (
                  <div key={i} className="p-4 bg-white dark:bg-neutral-900 border border-border/50 rounded-2xl">
                    <div className="flex items-center gap-2 flex-wrap text-xs">
                      {p.hops.map((hop, j) => (
                        <React.Fragment key={j}>
                          {j > 0 && <Share2 className="w-3 h-3 text-neutral-300" />}
                          <span className="font-mono bg-zinc-50 border border-border/50 rounded-lg px-2 py-1">{hop.display_label || hop.entity_key}</span>
                        </React.Fragment>
                      ))}
                    </div>
                    <p className="mt-2 text-[10px] text-neutral-400">{p.path_length} hops · {p.path_found ? "path found" : "no path"}</p>
                  </div>
                ))
              )}
            </div>
          )}
        </>
      ) : null}
    </div>
  );
}
