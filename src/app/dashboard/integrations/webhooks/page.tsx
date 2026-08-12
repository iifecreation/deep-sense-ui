"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft,
  Webhook,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Plus,
  RefreshCw,
  MoreHorizontal,
  Trash2,
  Settings,
  Code2
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MOCK_ENDPOINTS = [
  { id: "endp_991", url: "https://api.acme.com/v1/webhooks/deepsense", status: "Active", events: ["transaction.blocked", "case.escalated"], failures: 0 },
  { id: "endp_992", url: "https://staging.acme.com/hooks/ds", status: "Failing", events: ["*"], failures: 12 },
];

const MOCK_DELIVERY_LOGS = [
  { id: "evt_109283", event: "transaction.blocked", target: "https://api.acme.com/v1/webhooks/deepsense", status: 200, time: "2 mins ago", latency: "124ms" },
  { id: "evt_109282", event: "case.escalated", target: "https://api.acme.com/v1/webhooks/deepsense", status: 200, time: "15 mins ago", latency: "89ms" },
  { id: "evt_109281", event: "transaction.challenged", target: "https://staging.acme.com/hooks/ds", status: 502, time: "1 hour ago", latency: "5021ms" },
  { id: "evt_109280", event: "rule.triggered", target: "https://staging.acme.com/hooks/ds", status: 502, time: "2 hours ago", latency: "5010ms" },
];

export default function WebhooksDashboard() {
  const [selectedLog, setSelectedLog] = useState<string | null>("evt_109283");

  return (
    <div className="space-y-6 pb-8">
      {/* Detail Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div className="space-y-2">
          <Link href="/dashboard/integrations" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full mb-2">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Developer Hub
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">
              Webhooks & Events
            </h1>
          </div>
          <p className="text-sm font-medium text-slate-500">
            Configure endpoints to receive real-time intelligence events.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="font-semibold rounded-full shadow-sm">
            <RefreshCw className="w-4 h-4 mr-2" /> Retry Failed Events
          </Button>
          <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 font-semibold shadow-sm rounded-full text-white">
            <Plus className="w-4 h-4 mr-2" /> Add Endpoint
          </Button>
        </div>
      </div>

      <Tabs defaultValue="logs" className="w-full space-y-6">
        <TabsList className="bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-xl border border-slate-200/60 dark:border-slate-800/60 w-full justify-start h-auto overflow-x-auto">
          <TabsTrigger value="endpoints" className="rounded-lg px-6 py-2.5 text-xs font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm shrink-0">Configured Endpoints</TabsTrigger>
          <TabsTrigger value="logs" className="rounded-lg px-6 py-2.5 text-xs font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm shrink-0 flex items-center gap-2">
            Delivery Logs <Badge variant="destructive" className="px-1.5 py-0 text-[9px] rounded-full">2 Failing</Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="endpoints" className="mt-0 space-y-6">
          <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-slate-50/50 dark:bg-slate-900/20">
                  <TableRow className="border-slate-100/50 dark:border-slate-800/50">
                    <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500 pl-6">Endpoint URL</TableHead>
                    <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Status</TableHead>
                    <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Subscribed Events</TableHead>
                    <TableHead className="text-right pr-6">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_ENDPOINTS.map((endpoint) => (
                    <TableRow key={endpoint.id} className="group hover:bg-slate-50/80 dark:hover:bg-slate-900/50 transition-colors border-slate-100/50 dark:border-slate-800/50">
                      <TableCell className="pl-6 py-4">
                        <div className="flex flex-col gap-1">
                          <code className="text-xs font-mono font-bold text-slate-900 dark:text-slate-100">{endpoint.url}</code>
                          <span className="text-[10px] text-slate-500">ID: {endpoint.id}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase ${endpoint.status === 'Active' ? 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400' : 'border-red-200 bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400'}`}>
                          {endpoint.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1 max-w-[200px]">
                          {endpoint.events.map(ev => (
                            <Badge key={ev} variant="secondary" className="text-[9px] px-1.5 py-0 rounded font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                              {ev}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="text-right pr-6">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-indigo-600">
                            <Settings className="w-4 h-4" />
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
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs" className="mt-0">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            
            {/* Logs Table */}
            <div className="xl:col-span-2">
              <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl overflow-hidden h-full">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader className="bg-slate-50/50 dark:bg-slate-900/20">
                      <TableRow className="border-slate-100/50 dark:border-slate-800/50">
                        <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500 pl-6">Status</TableHead>
                        <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Event</TableHead>
                        <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Time</TableHead>
                        <TableHead className="text-right pr-6">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {MOCK_DELIVERY_LOGS.map((log) => (
                        <TableRow 
                          key={log.id} 
                          onClick={() => setSelectedLog(log.id)}
                          className={`cursor-pointer transition-colors border-slate-100/50 dark:border-slate-800/50 ${selectedLog === log.id ? 'bg-indigo-50 dark:bg-indigo-900/20' : 'hover:bg-slate-50/80 dark:hover:bg-slate-900/50'}`}
                        >
                          <TableCell className="pl-6 py-4">
                            <Badge className={`rounded px-1.5 py-0.5 text-[10px] font-mono font-bold ${log.status === 200 ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-red-100 text-red-700 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400'}`}>
                              {log.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col gap-1">
                              <span className="text-sm font-bold font-mono text-slate-900 dark:text-slate-100">{log.event}</span>
                              <span className="text-[10px] text-slate-500 truncate max-w-[200px]">{log.target}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-xs text-slate-500 font-medium">
                            <div className="flex flex-col gap-0.5">
                              <span>{log.time}</span>
                              <span className="text-[10px] flex items-center gap-1"><Clock className="w-3 h-3" /> {log.latency}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-right pr-6">
                            <Button variant="ghost" size="sm" className="h-8 text-xs font-semibold text-indigo-600">
                              View Payload
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            {/* Payload Inspector Sidebar */}
            <div className="space-y-6 h-full">
              {selectedLog ? (
                <Card className="rounded-2xl border-slate-200/60 shadow-lg bg-indigo-950 text-white overflow-hidden h-full min-h-[500px] flex flex-col">
                  <CardHeader className="border-b border-white/10 pb-4 shrink-0">
                    <CardTitle className="text-sm font-bold flex items-center gap-2 text-indigo-50">
                      <Code2 className="w-4 h-4 text-indigo-400" /> Payload Inspector
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge className="bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/20 text-[10px] font-mono">200 OK</Badge>
                      <span className="text-xs font-mono text-indigo-300">evt_109283</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 flex-1 flex flex-col">
                    <div className="p-3 bg-black/40 border-b border-white/10 flex justify-between items-center shrink-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300">Request Payload</span>
                    </div>
                    <div className="flex-1 p-4 bg-black/20 overflow-y-auto">
                      <pre className="text-[11px] font-mono text-indigo-200 leading-relaxed">
{`{
  "event": "transaction.blocked",
  "created_at": "2023-10-12T14:32:21Z",
  "data": {
    "transaction_id": "tx_99812",
    "amount": 150.00,
    "currency": "USD",
    "risk_score": 92,
    "rules_triggered": [
      "RULE-8901",
      "RULE-8902"
    ]
  }
}`}
                      </pre>
                    </div>
                    
                    <div className="p-3 bg-black/40 border-y border-white/10 flex justify-between items-center shrink-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300">Response from Server</span>
                    </div>
                    <div className="h-32 p-4 bg-black/20 overflow-y-auto shrink-0">
                      <pre className="text-[11px] font-mono text-emerald-300/80 leading-relaxed">
{`{
  "received": true,
  "processed": true
}`}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl h-full flex items-center justify-center min-h-[500px]">
                  <div className="text-center">
                    <Code2 className="w-10 h-10 text-slate-300 dark:text-slate-700 mx-auto mb-3" />
                    <p className="text-sm font-bold text-slate-500">Select a log to view payload</p>
                  </div>
                </Card>
              )}
            </div>

          </div>
        </TabsContent>

      </Tabs>
    </div>
  );
}
