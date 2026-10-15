"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ShieldCheck,
  ShieldAlert,
  ChevronRight,
  Share2,
  Lock,
  AlertCircle,
  RefreshCcw
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { useDevice } from "@/hooks";
import { devicesService } from "@/services/devices.service";

function formatDate(value?: string | null): string {
  if (!value) return "Never";
  return new Date(value).toLocaleString();
}

export default function DeviceDetailView() {
  const params = useParams();
  const deviceId = params.deviceId as string;

  const { data: device, isLoading, isError, refetch } = useDevice(deviceId);

  const [timeline, setTimeline] = useState<any[]>([]);
  const [linkedCustomers, setLinkedCustomers] = useState<any[]>([]);

  useEffect(() => {
    if (!deviceId) return;
    devicesService.getDeviceTimeline(deviceId).then((res) => setTimeline(res.items || [])).catch(() => setTimeline([]));
    devicesService.getLinkedCustomers(deviceId).then((res) => setLinkedCustomers(res.items || [])).catch(() => setLinkedCustomers([]));
  }, [deviceId]);

  const [pendingAction, setPendingAction] = useState<"trust" | "block" | null>(null);
  const [actionReason, setActionReason] = useState("");
  const [actionBusy, setActionBusy] = useState(false);

  const handleConfirmAction = async () => {
    if (!pendingAction) return;
    setActionBusy(true);
    try {
      if (pendingAction === "trust") {
        await devicesService.trustDevice(deviceId, actionReason.trim());
      } else {
        await devicesService.blockDevice(deviceId, actionReason.trim());
      }
      setPendingAction(null);
      setActionReason("");
      await refetch();
    } finally {
      setActionBusy(false);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-6 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-1">
            <div className="h-4 w-32 bg-slate-100 animate-pulse rounded mb-1" />
            <div className="h-8 w-64 bg-slate-100 animate-pulse rounded" />
            <div className="h-4 w-48 bg-slate-100 animate-pulse rounded mt-2" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="rounded-xl shadow-sm border bg-white h-24 animate-pulse" />
          ))}
        </div>
        <div className="h-96 bg-slate-100 animate-pulse rounded-xl" />
      </div>
    );
  }

  if (isError || !device) {
    return (
      <div className="space-y-6 pb-20">
        <Link href="/dashboard/devices" className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-1">
          <ArrowLeft className="w-3 h-3" /> Hardware Registry
        </Link>
        <Card className="rounded-3xl border border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="text-red-600 h-5 w-5" />
              <div>
                <p className="font-semibold text-red-900">Failed to load device details</p>
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

  const risk = device.risk || {};
  const riskScore = risk.risk_score != null ? risk.risk_score : null;
  const status = device.status || "unknown";

  const kpis = [
    { label: "Risk Score", value: riskScore != null ? riskScore.toFixed(2) : "N/A", subtext: risk.risk_tier || "Unknown tier", icon: <ShieldAlert className="w-5 h-5 text-red-500" />, color: "border-red-100" },
    { label: "Linked Customers", value: device.linked_customer_count ?? 0, subtext: "Accounts seen on this device", icon: <ShieldCheck className="w-5 h-5 text-blue-500" />, color: "border-blue-100" },
    { label: "Alerts / Cases", value: `${device.alert_count ?? 0} / ${device.case_count ?? 0}`, subtext: "Linked investigations", icon: <AlertCircle className="w-5 h-5 text-amber-500" />, color: "border-amber-100" },
  ];

  const hardwareInfo = [
    { label: "Fingerprint Hash", value: device.fingerprint_hash },
    { label: "User Agent Hash", value: device.user_agent_hash || "Not recorded" },
    { label: "First Seen", value: formatDate(device.first_seen_at) },
    { label: "Last Seen", value: formatDate(device.last_seen_at) },
  ];

  const riskInfo = [
    { label: "Risk Tier", value: risk.risk_tier || "Unknown" },
    { label: "Last Risk Reason", value: risk.last_risk_reason || "Not recorded" },
    { label: "Linked Transactions", value: String(device.linked_transaction_count ?? 0) },
    { label: "Notes", value: String(device.note_count ?? 0) },
  ];

  const riskDrivers: string[] = risk.risk_drivers || [];

  return (
    <div className="space-y-6">
      {/* Detail Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <Link href="/dashboard/devices" className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-1">
            <ArrowLeft className="w-3 h-3" /> Hardware Registry
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">{device.fingerprint_hash}</h1>
            <Badge variant="outline" className={`rounded-full px-2 py-0 text-[10px] font-bold uppercase tracking-wide border-none ${
              status === 'blocked' ? 'bg-red-500 text-white' : status === 'watchlisted' ? 'bg-amber-500 text-white' : 'bg-emerald-500 text-white'
            }`}>
              {status}
            </Badge>
          </div>
        </div>
        <div className="flex gap-2">
          <Button disabled={actionBusy} onClick={() => setPendingAction("trust")} className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-sm" size="sm">
            <ShieldCheck className="w-4 h-4 mr-2" /> Trust Hardware
          </Button>
          <Button disabled={actionBusy} onClick={() => setPendingAction("block")} variant="outline" className="border-rose-200 text-rose-600 font-semibold" size="sm">
            <Lock className="w-4 h-4 mr-2" /> Block ID
          </Button>
        </div>
      </div>

      {/* KPI Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {kpis.map((kpi, i) => (
          <Card key={i} className={`rounded-xl shadow-sm border ${kpi.color}`}>
            <CardContent className="p-4 flex gap-4 items-center">
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

      {/* Main Content Workspace */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <Tabs defaultValue="info" className="w-full">
            <TabsList className="bg-slate-100/50 p-1 rounded-lg border border-slate-200">
              <TabsTrigger value="info" className="rounded-md px-4 py-2 text-xs font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Device Info</TabsTrigger>
              <TabsTrigger value="signals" className="rounded-md px-4 py-2 text-xs font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Risk Drivers</TabsTrigger>
              <TabsTrigger value="history" className="rounded-md px-4 py-2 text-xs font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Device Timeline</TabsTrigger>
            </TabsList>

            <TabsContent value="info" className="mt-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="rounded-xl shadow-sm border bg-white p-6 leading-none">
                  <h4 className="text-sm font-bold text-slate-900 mb-6">Hardware Identity</h4>
                  <div className="space-y-4">
                    {hardwareInfo.map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                        <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest">{item.label}</span>
                        <span className="text-[11px] font-bold text-slate-900 truncate max-w-[180px]">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="rounded-xl shadow-sm border bg-white p-6 leading-none">
                  <h4 className="text-sm font-bold text-slate-900 mb-6">Risk Context</h4>
                  <div className="space-y-4">
                    {riskInfo.map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                        <span className="text-[11px] font-medium text-slate-400 uppercase tracking-widest">{item.label}</span>
                        <span className="text-[11px] font-bold text-slate-900 truncate max-w-[180px]">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="signals" className="mt-6">
              <Card className="rounded-xl shadow-sm border bg-white overflow-hidden">
                <Table>
                  <TableHeader className="bg-slate-50/50">
                    <TableRow>
                      <TableHead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 pl-6 h-10">Risk Driver</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {riskDrivers.map((driver, i) => (
                      <TableRow key={i} className="h-12">
                        <TableCell className="pl-6 text-xs font-bold text-slate-900">{driver}</TableCell>
                      </TableRow>
                    ))}
                    {riskDrivers.length === 0 && (
                      <TableRow>
                        <TableCell className="text-center py-8 text-slate-500 text-sm">
                          No risk drivers recorded for this device.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </Card>
            </TabsContent>

            <TabsContent value="history" className="mt-6">
              <Card className="rounded-xl shadow-sm border bg-white p-6">
                <div className="space-y-6">
                  {timeline.map((event: any) => (
                    <div key={event.id} className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <div>
                        <div className="text-sm font-bold text-slate-900">{event.summary || event.event_type}</div>
                        {event.reason && <div className="text-xs text-slate-500 mt-1">{event.reason}</div>}
                        <div className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest">{formatDate(event.created_at)}</div>
                      </div>
                    </div>
                  ))}
                  {timeline.length === 0 && (
                    <div className="text-center py-8 text-slate-500 text-sm">
                      No timeline events recorded.
                    </div>
                  )}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Action Panel Sidebar */}
        <div className="space-y-6">
          <Card className="rounded-xl shadow-sm border bg-white p-6 space-y-4">
            <h4 className="text-sm font-bold text-slate-900">Linked Customers</h4>
            <div className="space-y-3">
              {linkedCustomers.map((cust: any) => (
                <Link key={cust.id} href={`/dashboard/users/${cust.id}`} className="block p-4 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <div className="flex justify-between mb-1">
                    <span className="text-xs font-bold text-slate-900">{cust.display_name || cust.id}</span>
                    <Badge variant="outline" className="text-[8px] font-bold bg-emerald-100 text-emerald-700 border-none">{cust.risk_tier || "Low"}</Badge>
                  </div>
                  <p className="text-[10px] font-medium text-slate-400 uppercase">{cust.transaction_count} txns • {cust.alert_count} alerts</p>
                </Link>
              ))}
              {linkedCustomers.length === 0 && (
                <div className="text-center py-4 text-slate-500 text-xs">
                  No linked customers.
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>

      <Dialog open={pendingAction !== null} onOpenChange={(open) => { if (!open) { setPendingAction(null); setActionReason(""); } }}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{pendingAction === "trust" ? "Trust Hardware" : "Block Device"}</DialogTitle>
            <DialogDescription>
              {pendingAction === "trust" ? "Mark this device as trusted." : "Block this device from further transactions."} This action is audited.
            </DialogDescription>
          </DialogHeader>
          <input
            value={actionReason}
            onChange={(e) => setActionReason(e.target.value)}
            placeholder="Reason (optional)"
            className="w-full h-10 rounded-md border border-slate-200 px-3 text-sm"
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => { setPendingAction(null); setActionReason(""); }}>Cancel</Button>
            <Button disabled={actionBusy} onClick={() => void handleConfirmAction()} className={pendingAction === "block" ? "bg-rose-600 hover:bg-rose-700" : "bg-emerald-600 hover:bg-emerald-700"}>
              {actionBusy ? "Submitting..." : "Confirm"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
