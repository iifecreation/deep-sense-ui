"use client";

import React, { useState, useEffect } from "react";
import {
  FileText,
  Plus,
  Download,
  CheckCircle2,
  XCircle,
  MoreVertical,
  RefreshCcw,
  Eye,
  Copy,
  Share2,
  TrendingUp,
  FileCheck,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { complianceReportsService } from "@/services/compliance-reports.service";
import { describeApiError, type ApiErrorDescription } from "@/lib/api/describe-error";
import type { ComplianceFrameworkSummary, ComplianceReportRunRead } from "@/lib/api-client/api";

function formatDate(value?: string | null): string {
  if (!value) return "N/A";
  return new Date(value).toLocaleDateString();
}

export default function ComplianceReportsPage() {
  const [runs, setRuns] = useState<ComplianceReportRunRead[]>([]);
  const [frameworks, setFrameworks] = useState<ComplianceFrameworkSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<ApiErrorDescription | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("runs");

  const [showGenerate, setShowGenerate] = useState(false);
  const [genFramework, setGenFramework] = useState("");
  const [genTitle, setGenTitle] = useState("");
  const [generating, setGenerating] = useState(false);
  const [genError, setGenError] = useState<string | null>(null);

  const load = async () => {
    setIsLoading(true);
    setLoadError(null);
    try {
      const [runsRes, frameworksRes] = await Promise.all([
        complianceReportsService.listRuns(),
        complianceReportsService.listFrameworks(),
      ]);
      setRuns(runsRes.runs || []);
      setFrameworks(frameworksRes || []);
      if ((frameworksRes || []).length > 0) setGenFramework(frameworksRes[0].framework);
    } catch (err) {
      setLoadError(describeApiError(err, "compliance reports"));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!genFramework) return;
    setGenerating(true);
    setGenError(null);
    try {
      await complianceReportsService.generateReport({ framework: genFramework, title: genTitle.trim() || undefined });
      setShowGenerate(false);
      setGenTitle("");
      await load();
    } catch (err) {
      setGenError(err instanceof Error ? err.message : "Failed to generate report.");
    } finally {
      setGenerating(false);
    }
  };

  const refetch = load;

  const filteredReports = runs.filter((report) =>
    report.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    report.framework?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const scoresAvailable = filteredReports
    .map((r) => r.metrics_json?.compliance_score ?? r.metrics_json?.score)
    .filter((s) => typeof s === 'number');
  const avgScore = scoresAvailable.length > 0 ? Math.round(scoresAvailable.reduce((a: number, b: number) => a + b, 0) / scoresAvailable.length) : null;
  const completedCount = filteredReports.filter((r) => (r.status === 'completed' || r.status === 'generated')).length;
  const complianceRate = filteredReports.length > 0 ? Math.round((completedCount / filteredReports.length) * 100) : null;

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed': case 'generated': return 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20';
      case 'running': return 'bg-blue-500/10 text-blue-500 border border-blue-500/20';
      case 'failed': return 'bg-red-500/10 text-red-500 border border-red-500/20';
      case 'pending': return 'bg-amber-500/10 text-amber-500 border border-amber-500/20';
      default: return 'bg-slate-400/10 text-slate-400 border border-slate-400/20';
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-10 pb-20">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-black italic tracking-tighter uppercase text-neutral-900 dark:text-white">
            Compliance Reports<span className="text-brand-lime">.</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="rounded-2xl border">
              <CardContent className="p-6">
                <div className="h-32 bg-slate-100 animate-pulse rounded" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="flex flex-col gap-10 pb-20">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-black italic tracking-tighter uppercase text-neutral-900 dark:text-white">
            Compliance Reports<span className="text-brand-lime">.</span>
          </h1>
        </div>
        <Card
          className={`rounded-3xl border ${loadError.retryable ? "border-red-200 bg-red-50" : "border-slate-200 bg-slate-50"}`}
          data-error-kind={loadError.kind}
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <XCircle className={`h-5 w-5 ${loadError.retryable ? "text-red-600" : "text-slate-500"}`} />
              <div>
                <p className={`font-semibold ${loadError.retryable ? "text-red-900" : "text-slate-900"}`}>{loadError.title}</p>
                <p className={`text-sm ${loadError.retryable ? "text-red-700" : "text-slate-600"}`}>{loadError.detail}</p>
              </div>
            </div>
            {loadError.retryable && (
              <Button onClick={() => refetch()} className="mt-4" variant="outline">
                <RefreshCcw className="w-4 h-4 mr-2" /> Retry
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* Page Header */}
      <section className="sticky top-0 z-40 -mx-6 px-6 py-6 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black italic tracking-tighter uppercase text-neutral-900 dark:text-white">
              Compliance Reports<span className="text-brand-lime">.</span>
            </h1>
            <p className="text-muted-foreground text-sm font-medium">
              Generate and manage regulatory compliance reports.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="h-10 px-4 text-xs font-bold uppercase tracking-widest italic">
              <FileCheck className="w-3.5 h-3.5 mr-2" />
              View Templates
            </Button>
            <Button onClick={() => setShowGenerate(true)} className="h-10 px-6 bg-brand-lime text-neutral-900 hover:scale-105 transition-all font-bold text-xs uppercase tracking-widest italic shadow-xl shadow-brand-lime/20">
              <Plus className="w-3.5 h-3.5 mr-2" />
              Generate Report
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="rounded-2xl border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Total Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black italic text-neutral-900 dark:text-white">
              {filteredReports.length || 0}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Completed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black italic text-emerald-600">
              {filteredReports.filter((r) => (r.status === 'completed' || r.status === 'generated')).length || 0}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Avg. Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black italic text-neutral-900 dark:text-white">
              {avgScore != null ? `${avgScore}%` : "N/A"}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Completion Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black italic text-emerald-600">
              {complianceRate != null ? `${complianceRate}%` : "N/A"}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="runs">Report Runs</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
        </TabsList>

        <TabsContent value="runs" className="space-y-6">
          <Card className="rounded-2xl border">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-lg font-bold italic">Report Runs</CardTitle>
                  <CardDescription className="text-sm">View and manage compliance report executions</CardDescription>
                </div>
                <div className="flex gap-3">
                  <Input
                    placeholder="Search reports..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 h-9 text-sm"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs font-bold uppercase tracking-wider">Report ID</TableHead>
                    <TableHead className="text-xs font-bold uppercase tracking-wider">Title</TableHead>
                    <TableHead className="text-xs font-bold uppercase tracking-wider">Framework</TableHead>
                    <TableHead className="text-xs font-bold uppercase tracking-wider">Period</TableHead>
                    <TableHead className="text-xs font-bold uppercase tracking-wider">Score</TableHead>
                    <TableHead className="text-xs font-bold uppercase tracking-wider">Status</TableHead>
                    <TableHead className="text-xs font-bold uppercase tracking-wider text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredReports.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell className="font-mono text-xs">{report.id}</TableCell>
                      <TableCell className="font-bold text-sm">{report.title}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-xs">
                          {report.framework}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {report.period_start ? `${formatDate(report.period_start)} – ${formatDate(report.period_end)}` : 'N/A'}
                      </TableCell>
                      <TableCell className="font-bold text-sm">
                        {(report.metrics_json?.compliance_score ?? report.metrics_json?.score) != null
                          ? `${report.metrics_json?.compliance_score ?? report.metrics_json?.score}%`
                          : "N/A"}
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(report.status)}>
                          {report.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download className="w-4 h-4 mr-2" />
                              Export
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Copy className="w-4 h-4 mr-2" />
                              Duplicate
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Share2 className="w-4 h-4 mr-2" />
                              Share
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredReports.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                        {searchQuery ? 'No reports match your search' : 'No compliance reports generated'}
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <Card className="rounded-2xl border">
            <CardHeader>
              <CardTitle className="text-lg font-bold italic">Report Templates</CardTitle>
              <CardDescription className="text-sm">Pre-configured report templates for common compliance frameworks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="font-semibold">Report Templates</p>
                <p className="text-sm mt-2">Template management will be available here.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="frameworks" className="space-y-6">
          <Card className="rounded-2xl border">
            <CardHeader>
              <CardTitle className="text-lg font-bold italic">Compliance Frameworks</CardTitle>
              <CardDescription className="text-sm">Supported regulatory frameworks and standards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {frameworks.length === 0 ? (
                  <p className="text-sm text-muted-foreground col-span-2 text-center py-8">No frameworks available.</p>
                ) : frameworks.map((framework, i) => (
                  <div key={i} className="p-4 border rounded-xl hover:bg-muted/50 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-sm">{framework.display_name}</h4>
                      <Badge className={framework.available ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-slate-400/10 text-slate-400 border border-slate-400/20'}>
                        {framework.available ? 'Available' : 'Unavailable'}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{framework.description}</p>
                    <p className="text-[10px] text-muted-foreground mt-2 uppercase tracking-wide">{framework.total_requirements} requirements</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Dialog open={showGenerate} onOpenChange={setShowGenerate}>
        <DialogContent className="sm:max-w-md">
          <form onSubmit={handleGenerate}>
            <DialogHeader>
              <DialogTitle>Generate Compliance Report</DialogTitle>
              <DialogDescription>Run a compliance assessment against a regulatory framework.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <label className="space-y-1 text-xs font-semibold text-neutral-600 block">
                Framework
                <select
                  value={genFramework}
                  onChange={(e) => setGenFramework(e.target.value)}
                  className="w-full h-10 rounded-md border border-neutral-200 px-3 text-sm"
                >
                  {frameworks.map((f) => <option key={f.framework} value={f.framework}>{f.display_name}</option>)}
                </select>
              </label>
              <label className="space-y-1 text-xs font-semibold text-neutral-600 block">
                Title (optional)
                <input
                  value={genTitle}
                  onChange={(e) => setGenTitle(e.target.value)}
                  placeholder="e.g. Q4 2026 SOC2 Assessment"
                  className="w-full h-10 rounded-md border border-neutral-200 px-3 text-sm"
                />
              </label>
              {genError && <p className="text-xs text-red-600">{genError}</p>}
            </div>
            <DialogFooter>
              <button type="button" onClick={() => setShowGenerate(false)} className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-all">Cancel</button>
              <button type="submit" disabled={generating || !genFramework} className="px-6 py-2 bg-neutral-900 text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-lime hover:text-neutral-900 transition-all shadow-lg disabled:opacity-50">
                {generating ? "Generating..." : "Generate"}
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
