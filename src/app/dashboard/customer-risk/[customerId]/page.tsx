"use client";

import { 
  ArrowLeft, 
  ShieldCheck, 
  ShieldAlert, 
  User, 
  Zap, 
  ChevronRight, 
  MessageSquare,
  Info,
  Globe,
  Calendar,
  Lock,
  MapPin,
  AlertCircle,
  RefreshCw
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useCustomer, useCustomerRisk } from "@/hooks/use-customers";

type RiskFactor = {
  label?: string;
  value?: number;
};

export default function CustomerRiskProfile() {
  const params = useParams();
  const customerId = params.customerId as string;
  const { data: customer, isLoading, isError, error, refetch } = useCustomer(customerId);
  const { data: riskData, isLoading: riskLoading } = useCustomerRisk(customerId);
  const customerDisplayName = customer?.full_name || 'Unknown Customer';
  const customerClassification = customer?.kyc_status || customer?.screening_status || 'Unknown';

  if (isLoading || riskLoading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Loading customer...</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="rounded-xl shadow-sm border">
              <CardContent className="p-4">
                <div className="h-20 bg-slate-100 animate-pulse rounded" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Customer Risk Profile</h1>
        </div>
        <Card className="rounded-xl shadow-sm border border-red-200 bg-red-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="text-red-600 h-5 w-5" />
              <div>
                <p className="font-semibold text-red-900">Failed to load customer</p>
                <p className="text-sm text-red-700">{error?.message || 'Please check your connection and try again.'}</p>
              </div>
            </div>
            <Button onClick={() => refetch()} className="mt-4" variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" /> Retry
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getRiskTierColor = (tier: string) => {
    switch (tier.toLowerCase()) {
      case 'critical': return 'bg-red-100 text-red-700';
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-amber-100 text-amber-700';
      case 'low': return 'bg-emerald-100 text-emerald-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Detail Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-1">
          <Link href="/dashboard/customer-risk" className="flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors mb-1">
            <ArrowLeft className="w-3 h-3" /> Back to Registry
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">{customerDisplayName}</h1>
            <Badge variant="outline" className={`rounded-full px-2 py-0 text-[10px] font-bold uppercase tracking-wide border-none ${getRiskTierColor(customer?.risk_tier || 'unknown')}`}>
              {(customer?.risk_tier || 'Unknown')} Risk
            </Badge>
            <Badge variant="outline" className="rounded-full px-2 py-0 text-[10px] font-bold uppercase tracking-wide bg-blue-50 text-blue-700 border-none">
              {customer?.status || 'Unknown'}
            </Badge>
          </div>
          <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">{customer?.customer_id || customerId} • {customerClassification}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="font-semibold">
            <ShieldAlert className="w-4 h-4 mr-2" /> Start EDD
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 font-semibold shadow-sm">
                Perform Action <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 font-semibold">
              <DropdownMenuItem className="text-rose-600">Restrict Account</DropdownMenuItem>
              <DropdownMenuItem className="text-emerald-600">Clear Risk</DropdownMenuItem>
              <DropdownMenuItem>Add to Watchlist</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* KPI Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-xl shadow-sm border border-red-100 bg-red-50/20">
          <CardContent className="p-4 flex gap-4 items-center">
            <div className="w-10 h-10 rounded-lg bg-white border border-white/20 shadow-sm flex items-center justify-center">
              <Zap className="text-red-500" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Entity Risk Index</p>
              <div className="text-xl font-bold text-slate-900">{customer?.risk_score || 0}</div>
              <p className="text-[10px] text-slate-400 font-medium">Current score</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-sm border border-amber-100 bg-amber-50/20">
          <CardContent className="p-4 flex gap-4 items-center">
            <div className="w-10 h-10 rounded-lg bg-white border border-white/20 shadow-sm flex items-center justify-center">
              <AlertCircle className="text-amber-500" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Active Alerts</p>
              <div className="text-xl font-bold text-slate-900">{customer?.linked_alerts_count || 0}</div>
              <p className="text-[10px] text-slate-400 font-medium">Total alerts</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-sm border border-blue-100 bg-blue-50/20">
          <CardContent className="p-4 flex gap-4 items-center">
            <div className="w-10 h-10 rounded-lg bg-white border border-white/20 shadow-sm flex items-center justify-center">
              <ShieldAlert className="text-blue-500" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Screening Status</p>
              <div className="text-xl font-bold text-slate-900">
                {riskData?.screening_status || 'Unknown'}
              </div>
              <p className="text-[10px] text-slate-400 font-medium">AML check</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Workspace */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <Tabs defaultValue="risk" className="w-full">
            <TabsList className="bg-slate-100/50 p-1 rounded-lg border border-slate-200">
              <TabsTrigger value="risk" className="rounded-md px-4 py-2 text-xs font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Risk Engineering</TabsTrigger>
              <TabsTrigger value="screening" className="rounded-md px-4 py-2 text-xs font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">AML Screening</TabsTrigger>
              <TabsTrigger value="timeline" className="rounded-md px-4 py-2 text-xs font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">Activity Timeline</TabsTrigger>
            </TabsList>

            <TabsContent value="risk" className="mt-6 space-y-6">
              {/* Risk Explanation Card */}
              <Card className="rounded-xl shadow-sm border bg-blue-600 text-white p-6 relative overflow-hidden group">
                <div className="absolute right-[-10%] top-[-20%] w-[50%] h-[150%] bg-white/5 blur-3xl rounded-full" />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                      <Info className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-blue-100">Decision Logic</p>
                      <h4 className="text-lg font-bold">Why is this customer flagged?</h4>
                    </div>
                  </div>
                  <p className="text-sm font-medium leading-relaxed text-blue-50">
                    Calculated score of {customer?.risk_score || 0} is primarily driven by risk factors 
                    identified in the risk assessment. ML models have evaluated the customer profile 
                    against known risk patterns.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {riskData?.risk_factors?.map((driver: RiskFactor, i: number) => (
                      <div key={i} className="space-y-1.5">
                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-blue-100">
                          <span>{driver.label || 'Factor'}</span>
                          <span>{driver.value || 0}</span>
                        </div>
                        <Progress value={driver.value || 0} className="h-1 bg-white/10" />
                      </div>
                    )) || <p className="text-blue-200 text-sm">No risk factors available</p>}
                  </div>
                </div>
              </Card>

              {/* Profile & Metadata */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="rounded-xl shadow-sm border bg-white p-6">
                  <h4 className="text-sm font-bold text-slate-900 mb-4">Core Metadata</h4>
                  <div className="space-y-4">
                    {[
                      { label: "Entity Name", value: customerDisplayName, icon: <User className="w-4 h-4" /> },
                      { label: "Email Address", value: customer?.email || 'N/A', icon: <Globe className="w-4 h-4" /> },
                      { label: "Location", value: customer?.nationality || 'N/A', icon: <MapPin className="w-4 h-4" /> },
                      { label: "Joined", value: customer?.created_at ? new Date(customer.created_at).toLocaleDateString() : 'N/A', icon: <Calendar className="w-4 h-4" /> },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                        <span className="text-[11px] font-medium text-slate-400 flex items-center gap-2">{item.icon} {item.label}</span>
                        <span className="text-[11px] font-bold text-slate-900">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="rounded-xl shadow-sm border bg-white p-6">
                  <h4 className="text-sm font-bold text-slate-900 mb-4">Customer Type</h4>
                  <div className="bg-slate-50 rounded-lg p-4 flex items-center gap-4 border border-slate-100 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                      <User className="w-5 h-5 text-slate-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">{customerClassification}</p>
                      <p className="text-[10px] font-medium text-slate-400 uppercase">Customer classification</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      <span>Status</span>
                      <span className="text-slate-900">{customer?.status || 'Unknown'}</span>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar Actions & Compliance */}
        <div className="space-y-6">
          <Card className="rounded-xl shadow-sm border bg-white p-6 space-y-6">
            <h4 className="text-sm font-bold text-slate-900">AML Screening Perimeter</h4>
            <div className="space-y-2">
              {[
                { label: "Sanctions", status: riskData?.sanctions_status || 'Unknown', icon: <ShieldCheck className="text-emerald-500" /> },
                { label: "PEP List", status: riskData?.pep_status || 'Unknown', icon: <ShieldAlert className="text-amber-500" /> },
                { label: "Watchlist", status: riskData?.watchlist_status || 'Unknown', icon: <Globe className="text-emerald-500" /> },
              ].map((check, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-slate-100 bg-slate-50/50">
                  <div className="flex items-center gap-3">
                    {check.icon}
                    <span className="text-[11px] font-semibold text-slate-600">{check.label}</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-900">{check.status}</span>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full text-xs font-bold border-slate-200">
              Manual Screening Hub
            </Button>
          </Card>

          <Card className="rounded-xl shadow-sm border bg-slate-900 text-white p-6 space-y-6">
            <div className="space-y-1">
              <h4 className="text-sm font-bold">Institutional Control</h4>
              <p className="text-[11px] text-slate-400 font-medium">Governance override for high-exposure entities.</p>
            </div>
            <div className="space-y-3">
              <Button className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-xs font-bold">
                <Lock className="w-4 h-4 mr-2" /> Freeze Assets
              </Button>
              <Button variant="outline" className="w-full h-10 border-white/10 bg-white/5 hover:bg-white/10 text-xs font-bold">
                <MessageSquare className="w-4 h-4 mr-2" /> Add Forensic Note
              </Button>
            </div>
          </Card>

          <Card className="rounded-xl shadow-sm border bg-white p-6 space-y-4">
            <h4 className="text-sm font-bold text-slate-900">Related Alerts</h4>
            <div className="space-y-3">
              {[
                { id: "ALT-9921", type: "Velocity Breach", score: 84 },
                { id: "ALT-8812", type: "Multiple IP Ingress", score: 62 },
              ].map((alt, i) => (
                <div key={i} className="flex justify-between items-center p-3 rounded-lg border border-slate-50 bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer group">
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-bold text-slate-900">{alt.id}</p>
                    <p className="text-[10px] font-medium text-slate-400 uppercase">{alt.type}</p>
                  </div>
                  <Badge variant="outline" className="text-[9px] font-bold text-red-600 bg-red-50 border-none">{alt.score}</Badge>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full text-[11px] font-bold text-blue-600">Full Incident Archive</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
