"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  TerminalSquare, 
  Key, 
  Copy, 
  RefreshCw, 
  Trash2, 
  Plus, 
  ShieldCheck, 
  Activity, 
  AlertTriangle,
  Code2,
  Webhook
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const MOCK_API_KEYS = [
  { id: "key_prod_99812", name: "Production Backend Server", environment: "Production", prefix: "ds_live_********", created: "Oct 01, 2023", lastUsed: "2 mins ago" },
  { id: "key_test_55123", name: "Staging Env (Testing)", environment: "Test", prefix: "ds_test_********", created: "Sep 15, 2023", lastUsed: "1 day ago" },
  { id: "key_test_11092", name: "Developer Local (Sarah)", environment: "Test", prefix: "ds_test_********", created: "Oct 10, 2023", lastUsed: "Never" },
];

export default function IntegrationsDashboard() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (keyId: string) => {
    setCopiedKey(keyId);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">
            Developer Hub
          </h1>
          <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
            <TerminalSquare className="h-4 w-4 text-indigo-500" />
            API Keys, Webhooks, and Integration Health.
          </p>
        </div>
        <div className="flex gap-2">
          <Link href="/dashboard/integrations/webhooks">
            <Button variant="outline" size="sm" className="font-semibold rounded-full shadow-sm">
              <Webhook className="w-4 h-4 mr-2" /> Webhooks
            </Button>
          </Link>
          <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 font-semibold shadow-sm rounded-full text-white">
            <Plus className="w-4 h-4 mr-1" /> Generate API Key
          </Button>
        </div>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
          <CardContent className="p-5 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center">
              <Activity className="text-indigo-500 w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">API Requests (30d)</p>
              <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">1.2M</div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
          <CardContent className="p-5 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center">
              <ShieldCheck className="text-emerald-500 w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Avg Latency (p95)</p>
              <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">42ms</div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
          <CardContent className="p-5 flex items-center gap-5">
            <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center">
              <AlertTriangle className="text-red-500 w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">API Error Rate (4xx/5xx)</p>
              <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">0.01%</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* API Keys Table */}
        <div className="xl:col-span-2 space-y-6">
          <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl overflow-hidden">
            <CardHeader className="pb-4 border-b border-slate-100/50 dark:border-slate-800/50 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg font-bold flex items-center gap-2">
                  <Key className="w-5 h-5 text-indigo-500" /> Standard API Keys
                </CardTitle>
                <CardDescription className="text-xs mt-1">Manage credentials used to authenticate requests to the DeepSense API.</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-slate-50/50 dark:bg-slate-900/20">
                    <TableRow className="border-slate-100/50 dark:border-slate-800/50">
                      <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500 pl-6">Name & Env</TableHead>
                      <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Key Prefix</TableHead>
                      <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Created / Last Used</TableHead>
                      <TableHead className="text-right pr-6">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {MOCK_API_KEYS.map((key) => (
                      <TableRow key={key.id} className="group hover:bg-slate-50/80 dark:hover:bg-slate-900/50 transition-colors border-slate-100/50 dark:border-slate-800/50">
                        <TableCell className="pl-6 py-4">
                          <div className="flex flex-col gap-1">
                            <span className="text-sm font-bold text-slate-900 dark:text-slate-100">{key.name}</span>
                            <Badge variant="outline" className={`w-fit rounded-full px-2 py-0 text-[9px] font-bold uppercase ${key.environment === 'Production' ? 'border-red-200 bg-red-50 text-red-700' : 'border-indigo-200 bg-indigo-50 text-indigo-700'}`}>
                              {key.environment}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <code className="text-xs font-mono bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-slate-600 dark:text-slate-400">
                            {key.prefix}
                          </code>
                        </TableCell>
                        <TableCell className="text-xs text-slate-500 font-medium">
                          <div className="flex flex-col gap-0.5">
                            <span>Created: {key.created}</span>
                            <span>Last used: {key.lastUsed}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right pr-6">
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="ghost" size="sm" className="h-8 px-3 text-xs font-semibold text-slate-600 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900" onClick={() => handleCopy(key.id)}>
                              {copiedKey === key.id ? <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 mr-1.5" />}
                              {copiedKey === key.id ? "Copied ID" : "Copy ID"}
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-red-600 hover:bg-red-50">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
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
        </div>
        
      </div>
    </div>
  );
}
