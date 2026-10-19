"use client";

import React, { useEffect, useState } from "react";
import {
  Search,
  RefreshCw,
  ShieldAlert,
  Loader2,
  Network,
  Boxes,
  Share2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  graphRingsService,
  ENTITY_TYPES,
  GraphEntityType,
  FraudRing,
  GraphCluster,
  EntityRiskAssessment,
  EntityPathCollection,
} from "@/services/graph-rings.service";

function formatDate(value?: string | null): string {
  if (!value) return "Unknown";
  return new Date(value).toLocaleString();
}

function RingsTab() {
  const [rings, setRings] = useState<FraudRing[]>([]);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await graphRingsService.listRings({ page: 1, page_size: 50 });
      setRings(res.items);
      setTotal(res.total);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load fraud rings.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
  }, []);

  const filtered = rings.filter((r) =>
    !search ||
    r.fingerprint.toLowerCase().includes(search.toLowerCase()) ||
    (r.summary || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Input
          placeholder="Filter by fingerprint or summary..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
        <span className="text-xs text-muted-foreground">{total} total rings</span>
      </div>
      {loading ? (
        <div className="py-12 flex justify-center"><Loader2 className="w-6 h-6 animate-spin text-neutral-300" /></div>
      ) : error ? (
        <div className="p-6 bg-red-50 text-red-700 rounded-2xl text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4" /> {error}
        </div>
      ) : filtered.length === 0 ? (
        <p className="text-sm text-neutral-400 italic py-8 text-center">No fraud rings detected.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {filtered.map((ring) => (
            <div key={ring.id} className="p-6 bg-white dark:bg-neutral-900 rounded-[32px] border border-border/50 shadow-sm space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-xs text-neutral-400">{ring.fingerprint}</p>
                  <p className="font-black italic text-lg">{ring.detection_kind.replaceAll("_", " ")}</p>
                </div>
                <Badge className={ring.status === "active" ? "bg-rose-500 text-white" : "bg-neutral-200 text-neutral-600"}>
                  {ring.status}
                </Badge>
              </div>
              <p className="text-sm text-neutral-600">{ring.summary || "No summary available."}</p>
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-neutral-400">
                <span>{ring.member_count} members</span>
                <span className="text-rose-500">Ring score {(ring.ring_score * 100).toFixed(0)}</span>
              </div>
              {ring.members_json.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/50">
                  {ring.members_json.slice(0, 6).map((m, i) => (
                    <span key={i} className="font-mono text-[10px] bg-zinc-50 border border-border/50 rounded-lg px-2 py-1">{m}</span>
                  ))}
                  {ring.members_json.length > 6 && (
                    <span className="text-[10px] text-neutral-400">+{ring.members_json.length - 6} more</span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ClustersTab() {
  const [clusters, setClusters] = useState<GraphCluster[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await graphRingsService.listClusters({ page: 1, page_size: 50 });
      setClusters(res.items);
      setTotal(res.total);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load clusters.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
  }, []);

  return (
    <div className="space-y-4">
      <span className="text-xs text-muted-foreground">{total} total clusters</span>
      {loading ? (
        <div className="py-12 flex justify-center"><Loader2 className="w-6 h-6 animate-spin text-neutral-300" /></div>
      ) : error ? (
        <div className="p-6 bg-red-50 text-red-700 rounded-2xl text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4" /> {error}
        </div>
      ) : clusters.length === 0 ? (
        <p className="text-sm text-neutral-400 italic py-8 text-center">No clusters recorded yet.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {clusters.map((c) => (
            <div key={c.id} className="p-6 bg-white dark:bg-neutral-900 rounded-[32px] border border-border/50 shadow-sm space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-xs text-neutral-400">{c.cluster_key}</p>
                  <p className="font-black italic text-lg">{c.cluster_type.replaceAll("_", " ")}</p>
                </div>
                <Badge variant="outline">{c.status}</Badge>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div><span className="text-neutral-400">Nodes</span><div className="font-bold text-lg">{c.node_count}</div></div>
                <div><span className="text-neutral-400">Edges</span><div className="font-bold text-lg">{c.edge_count}</div></div>
              </div>
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-neutral-400">
                <span>Confidence {(c.confidence * 100).toFixed(0)}%</span>
                <span className="text-rose-500">Risk {(c.risk_score * 100).toFixed(0)}</span>
              </div>
              <p className="text-[10px] text-neutral-400">
                Last seen {formatDate(c.last_seen_at)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function EntityLookupTab() {
  const [entityType, setEntityType] = useState<GraphEntityType>("customer");
  const [entityId, setEntityId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [risk, setRisk] = useState<EntityRiskAssessment | null>(null);
  const [paths, setPaths] = useState<EntityPathCollection | null>(null);

  const lookup = async () => {
    if (!entityId.trim()) return;
    setLoading(true);
    setError(null);
    setRisk(null);
    setPaths(null);
    try {
      const [riskRes, pathsRes] = await Promise.all([
        graphRingsService.getEntityRisk(entityType, entityId.trim()),
        graphRingsService.getEntityPaths(entityType, entityId.trim()),
      ]);
      setRisk(riskRes);
      setPaths(pathsRes);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Entity lookup failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-3">
        <Select value={entityType} onValueChange={(v) => setEntityType(v as GraphEntityType)}>
          <SelectTrigger className="w-full sm:w-48"><SelectValue /></SelectTrigger>
          <SelectContent>
            {ENTITY_TYPES.map((t) => <SelectItem key={t} value={t} className="capitalize">{t}</SelectItem>)}
          </SelectContent>
        </Select>
        <Input
          placeholder="Entity ID (UUID)"
          value={entityId}
          onChange={(e) => setEntityId(e.target.value)}
          className="flex-1"
        />
        <Button onClick={() => void lookup()} disabled={loading || !entityId.trim()}>
          {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Search className="w-4 h-4 mr-2" />}
          Look Up
        </Button>
      </div>

      {error && (
        <div className="p-6 bg-red-50 text-red-700 rounded-2xl text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4" /> {error}
        </div>
      )}

      {risk && (
        <div className="p-8 bg-neutral-900 text-white rounded-[40px] space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/40">{risk.entity_type}</p>
              <p className="font-mono text-sm">{risk.entity_id}</p>
            </div>
            <Badge className={risk.known_fraud ? "bg-rose-500 text-white" : "bg-white/10 text-white"}>
              {risk.known_fraud ? "Known Fraud" : "Clean"}
            </Badge>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div><p className="text-[9px] uppercase text-white/40">Risk Score</p><p className="text-2xl font-black italic text-rose-400">{(risk.risk_score * 100).toFixed(1)}</p></div>
            <div><p className="text-[9px] uppercase text-white/40">Fraud Proximity</p><p className="text-2xl font-black italic">{(risk.fraud_proximity_score * 100).toFixed(1)}</p></div>
            <div><p className="text-[9px] uppercase text-white/40">Centrality</p><p className="text-2xl font-black italic">{risk.centrality_score.toFixed(2)}</p></div>
            <div><p className="text-[9px] uppercase text-white/40">Component Size</p><p className="text-2xl font-black italic">{risk.connected_component_size}</p></div>
          </div>
          {risk.mule_cluster_detected && (
            <p className="text-xs text-amber-300 flex items-center gap-2"><ShieldAlert className="w-4 h-4" /> Mule cluster detected (confidence {(risk.fraud_ring_confidence_score * 100).toFixed(0)}%)</p>
          )}
          {risk.shortest_path_to_known_fraud != null && (
            <p className="text-xs text-white/60">Shortest path to known fraud: {risk.shortest_path_to_known_fraud} hops</p>
          )}
          {risk.shared_entity_clusters.length > 0 && (
            <div className="pt-4 border-t border-white/10 space-y-2">
              <p className="text-[10px] uppercase tracking-widest text-white/40">Shared clusters</p>
              {risk.shared_entity_clusters.map((c, i) => (
                <div key={i} className="flex justify-between text-xs"><span>{c.cluster_type}</span><span>{(c.risk_score * 100).toFixed(0)} risk / {(c.confidence * 100).toFixed(0)}% conf.</span></div>
              ))}
            </div>
          )}
        </div>
      )}

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
    </div>
  );
}

export default function GraphIntelPage() {
  const [rebuilding, setRebuilding] = useState(false);
  const [rebuildMessage, setRebuildMessage] = useState<string | null>(null);

  const handleRebuild = async () => {
    setRebuilding(true);
    setRebuildMessage(null);
    try {
      const res = await graphRingsService.rebuild();
      setRebuildMessage(`Rebuild complete: ${JSON.stringify(res.stats)}`);
    } catch (e) {
      setRebuildMessage(e instanceof Error ? e.message : "Rebuild failed.");
    } finally {
      setRebuilding(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 pb-20">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black italic tracking-tighter text-neutral-900 uppercase leading-tight mb-2">Graph Intel.</h1>
          <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest italic">Mapping Relational Risk Dynamics</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <Button onClick={() => void handleRebuild()} disabled={rebuilding} className="bg-brand-lime text-neutral-900 hover:scale-105 transition-all font-bold text-xs uppercase tracking-widest italic">
            {rebuilding ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <RefreshCw className="w-4 h-4 mr-2" />}
            Rebuild Graph
          </Button>
          {rebuildMessage && <p className="text-[10px] text-neutral-500 max-w-xs text-right">{rebuildMessage}</p>}
        </div>
      </div>

      <Tabs defaultValue="rings" className="w-full">
        <TabsList className="bg-muted p-1 rounded-2xl border border-border/50 h-12 mb-8">
          <TabsTrigger value="rings" className="rounded-xl px-6 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">
            <Network className="w-3.5 h-3.5 mr-2" /> Fraud Rings
          </TabsTrigger>
          <TabsTrigger value="clusters" className="rounded-xl px-6 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">
            <Boxes className="w-3.5 h-3.5 mr-2" /> Clusters
          </TabsTrigger>
          <TabsTrigger value="lookup" className="rounded-xl px-6 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">
            <Search className="w-3.5 h-3.5 mr-2" /> Entity Lookup
          </TabsTrigger>
        </TabsList>
        <TabsContent value="rings"><RingsTab /></TabsContent>
        <TabsContent value="clusters"><ClustersTab /></TabsContent>
        <TabsContent value="lookup"><EntityLookupTab /></TabsContent>
      </Tabs>
    </div>
  );
}
