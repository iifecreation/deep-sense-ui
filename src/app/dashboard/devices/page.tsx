"use client";

import { 
  Smartphone, 
  Search, 
  Filter, 
  Download,
  ShieldCheck, 
  ShieldAlert, 
  ChevronRight,
  Zap,
  RefreshCcw,
  Plus,
  AlertCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useDevices } from "@/hooks";
import { useState } from "react";

export default function DevicesRegistry() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: devicesData, isLoading, isError, refetch } = useDevices({ search: searchQuery });

  if (isLoading) {
    return (
      <div className="space-y-6 pb-20">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Device Registry</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="rounded-xl shadow-sm border bg-white h-24 animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="space-y-6 pb-20">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Device Registry</h1>
        </div>
        <Card className="rounded-3xl border border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="text-red-600 h-5 w-5" />
              <div>
                <p className="font-semibold text-red-900">Failed to load devices</p>
                <p className="text-sm text-red-700">Please check your connection and try again.</p>
              </div>
            </div>
            <Button onClick={refetch} className="mt-4" variant="outline">
              <RefreshCcw className="w-4 h-4 mr-2" /> Retry
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const items = devicesData?.items || [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-black italic tracking-tighter text-neutral-900 uppercase leading-none mb-2">Device Registry.</h1>
          <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest italic font-black">Managed device fingerprints and forensic signals</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="font-semibold">
            <Download className="w-4 h-4 mr-2" /> Export
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-sm">
            <Plus className="w-4 h-4 mr-2" /> Register Device
          </Button>
        </div>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {([] as any[]).map((kpi, i) => (
          <Card key={i} className={`rounded-xl shadow-sm border ${kpi.color}`}>
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-white border border-white/20 shadow-sm flex items-center justify-center">
                {kpi.icon}
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{kpi.label}</p>
                <div className="text-xl font-bold text-slate-900">{kpi.value}</div>
                <p className="text-[10px] text-slate-400 font-medium">{kpi.subtext}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Device Table */}
      <Card className="rounded-xl shadow-sm border bg-white overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50/30 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input 
              placeholder="Search Device ID, Model, OS..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-white text-sm" 
            />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Button variant="outline" size="sm" className="h-9 px-3 text-xs font-semibold">
              <Filter className="w-4 h-4 mr-2" /> All Platforms
            </Button>
            <Button variant="outline" size="sm" className="h-9 px-3 text-xs font-semibold" onClick={refetch}>
               <RefreshCcw className="w-4 h-4 mr-2" /> Refresh
            </Button>
          </div>
        </div>
        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 pl-6">Fingerprint / ID</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Model / Platform</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 text-center">Risk Score</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 text-center">Accounts</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Last Seen</TableHead>
              <TableHead className="text-right pr-6"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((device: any) => (
              <TableRow key={device.id} className="group hover:bg-slate-50 transition-colors cursor-pointer">
                <TableCell className="pl-6 py-4">
                  <code className="text-[10px] font-mono font-bold text-slate-900">{device.id}</code>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{device.model || 'Unknown Model'}</div>
                      <div className="text-[10px] text-slate-400 font-medium uppercase">{device.platform || device.info?.os || 'Unknown OS'}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center font-bold text-slate-900">
                  <Badge variant="outline" className={`rounded-full px-2 py-0 border-none ${
                    (device.risk_score || device.riskScore || 0) > 80 ? 'bg-red-500 text-white' : (device.risk_score || device.riskScore || 0) > 40 ? 'bg-amber-500 text-white' : 'bg-emerald-500 text-white'
                  }`}>
                    {device.risk_score || device.riskScore || 0}
                  </Badge>
                </TableCell>
                <TableCell className="text-center text-xs font-bold text-slate-900">{device.linked_customers_count || device.accounts || 0}</TableCell>
                <TableCell className="text-xs font-medium text-slate-500">
                  {device.last_seen_at ? new Date(device.last_seen_at).toLocaleDateString() : (device.lastSeen || 'Unknown')}
                </TableCell>
                <TableCell className="text-right pr-6">
                  <Link href={`/dashboard/devices/${device.id}`}>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 group-hover:text-primary">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
            {items.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-10 text-slate-500">
                  No devices found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

