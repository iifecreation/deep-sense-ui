"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  ArrowLeft,
  BriefcaseBusiness,
  CheckCircle2,
  AlertTriangle,
  FileCheck2,
  Lock,
  Download,
  MoreHorizontal,
  FileText,
  Search,
  MessageSquare,
  History,
  ShieldAlert,
  User,
  Paperclip,
  Share2,
  Image as ImageIcon
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";

const MOCK_AUDIT_LOG = [
  { id: 1, time: "10 mins ago", user: "Sarah Jenkins", action: "Attached Document", details: "Uploaded passport_scan.pdf to evidence locker.", type: "manual" },
  { id: 2, time: "2 hours ago", user: "System", action: "Status Changed", details: "Case status automatically updated to 'Investigating'.", type: "system" },
  { id: 3, time: "2 hours ago", user: "Sarah Jenkins", action: "Case Assigned", details: "Assigned case to self.", type: "manual" },
  { id: 4, time: "1 day ago", user: "System", action: "Case Created", details: "Case created via rule escalation: 'Velocity Fraud'.", type: "system" },
];

const MOCK_EVIDENCE = [
  { id: 1, name: "transaction_receipt.pdf", type: "PDF Document", size: "1.2 MB", date: "Oct 12, 2023" },
  { id: 2, name: "passport_scan.jpg", type: "Image", size: "3.4 MB", date: "Oct 12, 2023" },
  { id: 3, name: "device_fingerprint_log.json", type: "Data Log", size: "45 KB", date: "Oct 11, 2023" },
];

export default function CaseWorkspace() {
  const params = useParams();
  const caseId = params.caseId as string;
  const [note, setNote] = useState("");

  return (
    <div className="space-y-6 pb-8">
      {/* Detail Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div className="space-y-2">
          <Link href="/dashboard/cases" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full mb-2">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Queue
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">
              {caseId}
            </h1>
            <Badge variant="outline" className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide border-indigo-200 bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20">
              Investigating
            </Badge>
            <Badge variant="outline" className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide border-orange-200 bg-orange-50 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20">
              High Priority
            </Badge>
          </div>
          <p className="text-sm font-medium text-slate-500 flex items-center gap-2">
            <User className="w-4 h-4" /> Entity: Global Trade LLC (usr_11093)
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="font-semibold rounded-full shadow-sm">
            <Share2 className="w-4 h-4 mr-2" /> Share Case
          </Button>
          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 font-semibold shadow-sm rounded-full text-white">
            <CheckCircle2 className="w-4 h-4 mr-2" /> Resolve Case
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Main Workspace (Tabs) */}
        <div className="xl:col-span-2 space-y-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-xl border border-slate-200/60 dark:border-slate-800/60 w-full justify-start h-auto overflow-x-auto">
              <TabsTrigger value="overview" className="rounded-lg px-6 py-2.5 text-xs font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm shrink-0">Case Overview</TabsTrigger>
              <TabsTrigger value="evidence" className="rounded-lg px-6 py-2.5 text-xs font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm shrink-0 flex items-center gap-2">
                Evidence Locker <Badge variant="secondary" className="px-1.5 py-0 text-[9px] rounded-full">3</Badge>
              </TabsTrigger>
              <TabsTrigger value="audit" className="rounded-lg px-6 py-2.5 text-xs font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm shrink-0">Audit & Activity Log</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6 space-y-6">
              <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-sm font-bold flex items-center gap-2">
                    <FileText className="w-4 h-4 text-indigo-500" /> Executive Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    This case was automatically generated by the Rules Engine. The entity triggered the "Velocity Fraud" rule, which detects an unusually high volume of transactions across multiple geographic regions within a short time frame. 
                  </p>
                  <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-wider">Triggering Event</h5>
                    <div className="flex flex-col gap-1 text-sm font-mono text-slate-600 dark:text-slate-400">
                      <span>Event ID: evt_99812451</span>
                      <span>Rule: Velocity Fraud (RULE-8902)</span>
                      <span>Risk Score Increase: +40</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Investigator Notes */}
              <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
                <CardHeader className="pb-4 border-b border-slate-100/50 dark:border-slate-800/50">
                  <CardTitle className="text-sm font-bold flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-indigo-500" /> Add Forensic Note
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                  <Textarea 
                    placeholder="Document your findings, request more information, or summarize the investigation..."
                    className="min-h-[120px] bg-slate-50/50 dark:bg-slate-900/50 border-slate-200/60 dark:border-slate-800/60 resize-none"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                  <div className="flex justify-between items-center">
                    <Button variant="outline" size="sm" className="h-8 text-xs font-semibold rounded-full border-dashed">
                      <Paperclip className="w-3.5 h-3.5 mr-2" /> Attach File
                    </Button>
                    <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-8 px-4 rounded-full" disabled={!note}>
                      Save Note to Audit Log
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="evidence" className="mt-6 space-y-6">
              <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
                <CardHeader className="pb-4 border-b border-slate-100/50 dark:border-slate-800/50 flex flex-row items-center justify-between">
                  <CardTitle className="text-sm font-bold flex items-center gap-2">
                    <Lock className="w-4 h-4 text-indigo-500" /> Evidence Locker
                  </CardTitle>
                  <Button variant="outline" size="sm" className="h-8 text-xs font-semibold rounded-full bg-indigo-50 text-indigo-600 border-indigo-200 hover:bg-indigo-100">
                    <Plus className="w-3.5 h-3.5 mr-1" /> Upload Evidence
                  </Button>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-slate-100 dark:divide-slate-800">
                    {MOCK_EVIDENCE.map((item) => (
                      <div key={item.id} className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors group">
                        <div className="flex items-center gap-4">
                          <div className={`p-2.5 rounded-xl ${item.name.includes('.pdf') ? 'bg-red-50 text-red-500' : item.name.includes('.json') ? 'bg-amber-50 text-amber-500' : 'bg-blue-50 text-blue-500'}`}>
                            {item.name.includes('.jpg') ? <ImageIcon className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 transition-colors cursor-pointer">{item.name}</p>
                            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mt-0.5">
                              <span>{item.type}</span>
                              <span>•</span>
                              <span>{item.size}</span>
                              <span>•</span>
                              <span>{item.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-indigo-600">
                            <Download className="w-4 h-4" />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="rounded-xl">
                              <DropdownMenuItem className="text-xs cursor-pointer">Preview Document</DropdownMenuItem>
                              <DropdownMenuItem className="text-xs cursor-pointer text-red-600">Delete Evidence</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="audit" className="mt-6 space-y-6">
              <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
                <CardHeader className="pb-4 border-b border-slate-100/50 dark:border-slate-800/50">
                  <CardTitle className="text-sm font-bold flex items-center gap-2">
                    <History className="w-4 h-4 text-indigo-500" /> Chronological Activity Log
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="relative border-l-2 border-slate-100 dark:border-slate-800 ml-3 space-y-8">
                    {MOCK_AUDIT_LOG.map((log) => (
                      <div key={log.id} className="relative pl-6">
                        <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white dark:border-slate-950 ${log.type === 'system' ? 'bg-slate-300 dark:bg-slate-700' : 'bg-indigo-500'}`} />
                        <div className="flex flex-col gap-1 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-slate-900 dark:text-white">{log.action}</span>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{log.time}</span>
                          </div>
                          <p className="text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800 mt-1">
                            {log.details}
                          </p>
                          <span className="text-[10px] font-medium text-slate-400 mt-1 uppercase tracking-wider flex items-center gap-1">
                            <User className="w-3 h-3" /> By {log.user}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

          </Tabs>
        </div>

        {/* Sidebar Actions */}
        <div className="space-y-6">
          <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl overflow-hidden sticky top-6">
            <CardHeader className="bg-slate-50/50 dark:bg-slate-900/20 border-b border-slate-100/50 dark:border-slate-800/50 py-4">
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-slate-500" /> Resolution Panel
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5 space-y-6">
              
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Case Assignee</p>
                <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                      <User className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">Sarah Jenkins</span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-6 text-[10px] font-bold text-indigo-600">Reassign</Button>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <Button className="w-full text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-sm h-10">
                  <CheckCircle2 className="w-4 h-4 mr-2" /> Mark as Safe (Close Case)
                </Button>
                
                <Button variant="outline" className="w-full text-xs font-bold border-red-200 bg-red-50 text-red-700 hover:bg-red-100 hover:text-red-800 dark:bg-red-500/10 dark:border-red-500/20 dark:text-red-400 rounded-xl h-10">
                  <AlertTriangle className="w-4 h-4 mr-2" /> File Suspicious Activity Report (SAR)
                </Button>
                
                <Button variant="outline" className="w-full text-xs font-bold border-slate-200/60 dark:border-slate-800/60 rounded-xl h-10 shadow-sm bg-white dark:bg-slate-900 text-slate-600">
                  <Lock className="w-4 h-4 mr-2" /> Block Entity Globally
                </Button>
              </div>

            </CardContent>
          </Card>
        </div>
        
      </div>
    </div>
  );
}
