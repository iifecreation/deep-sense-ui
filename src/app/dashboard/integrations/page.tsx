"use client";

import { useState } from "react";
import Link from "next/link";
import {
  TerminalSquare,
  Copy,
  RefreshCw,
  Plus,
  ShieldCheck,
  Activity,
  AlertTriangle,
  Code2,
  Webhook,
  Loader2,
  Network,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useIntegrations } from "@/hooks/use-integrations";
import { integrationsService } from "@/services/integrations.service";

const INTEGRATION_TYPES = ["core_banking", "payments", "kyc_provider", "fraud_data", "other"];

export default function IntegrationsDashboard() {
  const { data: integrations, isLoading, isError, refetch } = useIntegrations();

  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState("");
  const [newType, setNewType] = useState(INTEGRATION_TYPES[0]);
  const [newEnvironment, setNewEnvironment] = useState("sandbox");
  const [newBaseUrl, setNewBaseUrl] = useState("");
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;
    setCreating(true);
    setCreateError(null);
    try {
      await integrationsService.create({
        name: newName.trim(),
        integration_type: newType,
        environment: newEnvironment,
        base_url: newBaseUrl.trim() || undefined,
      });
      setShowCreate(false);
      setNewName("");
      setNewBaseUrl("");
      await refetch();
    } catch (err) {
      setCreateError(err instanceof Error ? err.message : "Failed to register integration.");
    } finally {
      setCreating(false);
    }
  };

  const list = integrations || [];
  const activeCount = list.filter((i: any) => i.status === "active").length;
  const errorCount = list.reduce((sum: number, i: any) => sum + (i.error_count || 0), 0);

  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">
            Integrations
          </h1>
          <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
            <Network className="h-4 w-4 text-indigo-500" />
            Core banking, payment, and data provider connections.
          </p>
        </div>
        <div className="flex gap-2">
          <Link href="/dashboard/integrations/webhooks">
            <Button variant="outline" size="sm" className="font-semibold rounded-full shadow-sm">
              <Webhook className="w-4 h-4 mr-2" /> Webhooks
            </Button>
          </Link>
          <Button size="sm" onClick={() => setShowCreate(true)} className="bg-indigo-600 hover:bg-indigo-700 font-semibold shadow-sm rounded-full text-white">
            <Plus className="w-4 h-4 mr-1" /> Register Integration
          </Button>
        </div>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
          <CardContent className="p-5 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center">
              <Network className="text-indigo-500 w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Total Integrations</p>
              <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">{list.length}</div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
          <CardContent className="p-5 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center">
              <ShieldCheck className="text-emerald-500 w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Active</p>
              <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">{activeCount}</div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
          <CardContent className="p-5 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center">
              <AlertTriangle className="text-red-500 w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Recorded Errors</p>
              <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">{errorCount}</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Integrations Table */}
        <div className="xl:col-span-2 space-y-6">
          <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl overflow-hidden">
            <CardHeader className="pb-4 border-b border-slate-100/50 dark:border-slate-800/50 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg font-bold flex items-center gap-2">
                  <Network className="w-5 h-5 text-indigo-500" /> Integration Registry
                </CardTitle>
                <CardDescription className="text-xs mt-1">Core banking, payments, KYC, and data provider connections for this organization.</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {isLoading ? (
                <div className="p-10 flex justify-center"><Loader2 className="w-6 h-6 animate-spin text-slate-300" /></div>
              ) : isError ? (
                <div className="p-10 text-center text-red-500 text-sm">Failed to load integrations.</div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader className="bg-slate-50/50 dark:bg-slate-900/20">
                      <TableRow className="border-slate-100/50 dark:border-slate-800/50">
                        <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500 pl-6">Name & Type</TableHead>
                        <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Environment</TableHead>
                        <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Status</TableHead>
                        <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500 pr-6">Last Tested</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {list.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={4} className="text-center py-10 text-slate-400">No integrations registered yet.</TableCell>
                        </TableRow>
                      ) : list.map((integration: any) => (
                        <TableRow key={integration.id} className="group hover:bg-slate-50/80 dark:hover:bg-slate-900/50 transition-colors border-slate-100/50 dark:border-slate-800/50">
                          <TableCell className="pl-6 py-4">
                            <Link href={`/dashboard/integrations/${integration.id}`} className="flex flex-col gap-1">
                              <span className="text-sm font-bold text-slate-900 dark:text-slate-100 hover:underline">{integration.name}</span>
                              <Badge variant="outline" className="w-fit rounded-full px-2 py-0 text-[9px] font-bold uppercase border-indigo-200 bg-indigo-50 text-indigo-700">
                                {integration.integration_type}
                              </Badge>
                            </Link>
                          </TableCell>
                          <TableCell>
                            <span className="text-xs text-slate-600 dark:text-slate-400">{integration.environment || "—"}</span>
                          </TableCell>
                          <TableCell>
                            <Badge className={`text-[9px] font-bold uppercase ${integration.status === 'active' ? 'bg-emerald-500 text-white' : integration.status === 'error' ? 'bg-red-500 text-white' : 'bg-slate-200 text-slate-600'}`}>
                              {integration.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="pr-6 text-xs text-slate-500">
                            {integration.last_tested_at ? new Date(integration.last_tested_at).toLocaleDateString() : "Never"}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Quickstart Snippets */}
        <div className="space-y-6">
          <Card className="rounded-2xl border-slate-200/60 shadow-lg bg-indigo-950 text-white overflow-hidden relative">
            <CardHeader className="border-b border-white/10 pb-4 relative z-10">
              <CardTitle className="text-sm font-bold flex items-center gap-2 text-indigo-50">
                <Code2 className="w-4 h-4 text-indigo-400" /> Quickstart Integration
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 relative z-10">
              <Tabs defaultValue="curl" className="w-full">
                <TabsList className="bg-black/20 w-full justify-start rounded-none border-b border-white/10">
                  <TabsTrigger value="curl" className="rounded-none text-xs data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-indigo-400 data-[state=active]:text-white text-indigo-300">cURL</TabsTrigger>
                  <TabsTrigger value="node" className="rounded-none text-xs data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-indigo-400 data-[state=active]:text-white text-indigo-300">Node.js</TabsTrigger>
                </TabsList>

                <TabsContent value="curl" className="m-0">
                  <div className="p-4 bg-black/40 font-mono text-xs text-indigo-200 overflow-x-auto">
                    <pre className="leading-relaxed text-indigo-300">
<span className="text-pink-400">curl</span> -X POST https://api.deepsense.ai/v1/score \
  -H <span className="text-green-300">"Authorization: Bearer ds_live_YOUR_KEY"</span> \
  -H <span className="text-green-300">"Content-Type: application/json"</span> \
  -d <span className="text-green-300">'{'{'}
    "transaction": {'{'}
      "amount": 150.00,
      "currency": "USD"
    {'}'}
  {'}'}'</span>
                    </pre>
                  </div>
                  <div className="p-3 bg-indigo-900/50 border-t border-white/10 flex justify-end">
                    <Button variant="ghost" size="sm" className="h-7 text-[10px] text-indigo-200 hover:text-white">
                      <Copy className="w-3 h-3 mr-1" /> Copy Snippet
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="node" className="m-0">
                  <div className="p-4 bg-black/40 font-mono text-xs text-indigo-200 overflow-x-auto">
                    <pre className="leading-relaxed text-indigo-300">
<span className="text-purple-400">const</span> deepsense = <span className="text-blue-300">require</span>(<span className="text-green-300">'@deepsense/node'</span>);

<span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> deepsense.<span className="text-yellow-200">Client</span>(<span className="text-green-300">'ds_live_YOUR_KEY'</span>);

<span className="text-purple-400">const</span> score = <span className="text-purple-400">await</span> client.fraud.<span className="text-blue-300">scoreTransaction</span>({'{'}
  amount: <span className="text-orange-300">150.00</span>,
  currency: <span className="text-green-300">'USD'</span>
{'}'});
                    </pre>
                  </div>
                  <div className="p-3 bg-indigo-900/50 border-t border-white/10 flex justify-end">
                    <Button variant="ghost" size="sm" className="h-7 text-[10px] text-indigo-200 hover:text-white">
                      <Copy className="w-3 h-3 mr-1" /> Copy Snippet
                    </Button>
                  </div>
                </TabsContent>

              </Tabs>
            </CardContent>
          </Card>
          <p className="text-xs text-muted-foreground px-1">
            Looking for API keys? Manage them under <Link href="/dashboard/settings" className="underline font-semibold">Settings → API Keys</Link>.
          </p>
        </div>

      </div>

      <Dialog open={showCreate} onOpenChange={setShowCreate}>
        <DialogContent className="sm:max-w-md">
          <form onSubmit={handleCreate}>
            <DialogHeader>
              <DialogTitle>Register Integration</DialogTitle>
              <DialogDescription>Connect a core banking, payment, or data provider system.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <label className="space-y-1 text-xs font-semibold text-neutral-600 block">
                Name
                <input
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  required
                  placeholder="e.g. Core Banking – Finacle"
                  className="w-full h-10 rounded-md border border-neutral-200 px-3 text-sm"
                />
              </label>
              <label className="space-y-1 text-xs font-semibold text-neutral-600 block">
                Type
                <select
                  value={newType}
                  onChange={(e) => setNewType(e.target.value)}
                  className="w-full h-10 rounded-md border border-neutral-200 px-3 text-sm"
                >
                  {INTEGRATION_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </label>
              <label className="space-y-1 text-xs font-semibold text-neutral-600 block">
                Environment
                <select
                  value={newEnvironment}
                  onChange={(e) => setNewEnvironment(e.target.value)}
                  className="w-full h-10 rounded-md border border-neutral-200 px-3 text-sm"
                >
                  <option value="sandbox">Sandbox</option>
                  <option value="production">Production</option>
                </select>
              </label>
              <label className="space-y-1 text-xs font-semibold text-neutral-600 block">
                Base URL (optional)
                <input
                  value={newBaseUrl}
                  onChange={(e) => setNewBaseUrl(e.target.value)}
                  placeholder="https://api.provider.example.com"
                  className="w-full h-10 rounded-md border border-neutral-200 px-3 text-sm"
                />
              </label>
              {createError && <p className="text-xs text-red-600">{createError}</p>}
            </div>
            <DialogFooter>
              <button type="button" onClick={() => setShowCreate(false)} className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-all">Cancel</button>
              <button type="submit" disabled={creating || !newName.trim()} className="px-6 py-2 bg-neutral-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-lg disabled:opacity-50">
                {creating ? "Registering..." : "Register"}
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
