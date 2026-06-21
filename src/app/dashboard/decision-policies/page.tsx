"use client";

import React, { useState } from "react";
import { 
  Scale, 
  Plus, 
  Edit, 
  Trash2, 
  Copy, 
  CheckCircle2, 
  XCircle, 
  Clock,
  MoreVertical,
  RefreshCcw,
  Play,
  Pause,
  FileText,
  AlertTriangle,
  TrendingUp,
  Calendar,
  Users,
  Target,
  Settings,
  Eye,
  EyeOff
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
import { useDecisionPolicies } from "@/hooks";

export default function DecisionPoliciesPage() {
  const { data: policies, isLoading, isError, error, refetch } = useDecisionPolicies();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPolicies = policies?.filter((policy: any) =>
    policy.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    policy.description?.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20';
      case 'draft': return 'bg-slate-500/10 text-slate-500 border border-slate-500/20';
      case 'archived': return 'bg-amber-500/10 text-amber-500 border border-amber-500/20';
      default: return 'bg-slate-400/10 text-slate-400 border border-slate-400/20';
    }
  };

  const getRiskLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'high': return 'bg-red-500/10 text-red-500 border border-red-500/20';
      case 'medium': return 'bg-amber-500/10 text-amber-500 border border-amber-500/20';
      case 'low': return 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20';
      default: return 'bg-slate-400/10 text-slate-400 border border-slate-400/20';
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-10 pb-20">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-black italic tracking-tighter uppercase text-neutral-900 dark:text-white">
            Decision Policies<span className="text-brand-lime">.</span>
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

  if (isError) {
    return (
      <div className="flex flex-col gap-10 pb-20">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-black italic tracking-tighter uppercase text-neutral-900 dark:text-white">
            Decision Policies<span className="text-brand-lime">.</span>
          </h1>
        </div>
        <Card className="rounded-3xl border border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <XCircle className="text-red-600 h-5 w-5" />
              <div>
                <p className="font-semibold text-red-900">Failed to load decision policies</p>
                <p className="text-sm text-red-700">{error?.message || 'Please check your connection and try again.'}</p>
              </div>
            </div>
            <Button onClick={() => refetch()} className="mt-4" variant="outline">
              <RefreshCcw className="w-4 h-4 mr-2" /> Retry
            </Button>
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
              Decision Policies<span className="text-brand-lime">.</span>
            </h1>
            <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest italic font-black">
              Configure automated decision rules for fraud detection and risk assessment
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="h-10 px-4 text-xs font-bold uppercase tracking-widest italic">
              <FileText className="w-3.5 h-3.5 mr-2" />
              View Documentation
            </Button>
            <Button className="h-10 px-6 bg-brand-lime text-neutral-900 hover:scale-105 transition-all font-bold text-xs uppercase tracking-widest italic shadow-xl shadow-brand-lime/20">
              <Plus className="w-3.5 h-3.5 mr-2" />
              Create Policy
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="rounded-2xl border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Scale className="w-4 h-4" />
              Total Policies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black italic text-neutral-900 dark:text-white">
              {policies?.length || 0}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Play className="w-4 h-4" />
              Active
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black italic text-emerald-600">
              {policies?.filter((p: any) => p.status === 'active').length || 0}
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
              {policies?.length ? Math.round(policies.reduce((acc: number, p: any) => acc + (p.score || 0), 0) / policies.length) : 0}%
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              High Risk
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black italic text-red-600">
              {policies?.filter((p: any) => p.risk_level === 'high').length || 0}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Policies Table */}
      <Card className="rounded-2xl border">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-lg font-bold italic text-neutral-900 dark:text-white">
                Decision Policies
              </CardTitle>
              <CardDescription className="text-sm">
                Manage your automated decision rules and policies
              </CardDescription>
            </div>
            <div className="flex gap-3">
              <Input
                placeholder="Search policies..."
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
                <TableHead className="text-xs font-bold uppercase tracking-wider">Name</TableHead>
                <TableHead className="text-xs font-bold uppercase tracking-wider">Type</TableHead>
                <TableHead className="text-xs font-bold uppercase tracking-wider">Risk Level</TableHead>
                <TableHead className="text-xs font-bold uppercase tracking-wider">Score</TableHead>
                <TableHead className="text-xs font-bold uppercase tracking-wider">Status</TableHead>
                <TableHead className="text-xs font-bold uppercase tracking-wider">Last Updated</TableHead>
                <TableHead className="text-xs font-bold uppercase tracking-wider text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPolicies.map((policy: any) => (
                <TableRow key={policy.id}>
                  <TableCell className="font-bold text-sm">{policy.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">
                      {policy.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getRiskLevelColor(policy.risk_level)}>
                      {policy.risk_level}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-bold text-sm">{policy.score || 0}%</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(policy.status)}>
                      {policy.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {policy.updated_at || 'Never'}
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
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          {policy.status === 'active' ? (
                            <>
                              <Pause className="w-4 h-4 mr-2" />
                              Deactivate
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4 mr-2" />
                              Activate
                            </>
                          )}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Copy className="w-4 h-4 mr-2" />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
              {filteredPolicies.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                    {searchQuery ? 'No policies match your search' : 'No decision policies configured'}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
