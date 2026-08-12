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
  RefreshCw,
  Activity,
  CreditCard,
  Building2,
  FileCheck2,
  Search,
  CheckCircle2,
  XCircle,
  MoreHorizontal
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
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
          <div className="h-8 w-64 bg-slate-100 dark:bg-slate-800 animate-pulse rounded-lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
              <CardContent className="p-6">
                <div className="h-16 bg-slate-100 dark:bg-slate-800 animate-pulse rounded-xl" />
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
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Customer Risk Profile</h1>
        </div>
        <Card className="rounded-2xl shadow-sm border border-red-200 bg-red-50/50 backdrop-blur-xl">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="text-red-600 h-5 w-5" />
              <div>
                <p className="font-semibold text-red-900">Failed to load customer profile</p>
                <p className="text-sm text-red-700">{error?.message || 'Please check your connection and try again.'}</p>
              </div>
            </div>
            <Button onClick={() => refetch()} className="mt-4" variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" /> Retry Connection
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getRiskTierColor = (tier: string) => {
    switch (tier.toLowerCase()) {
      case 'critical': return 'bg-red-500/10 text-red-500 border-red-500/20';
      case 'high': return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
      case 'medium': return 'bg-amber-500/10 text-amber-500 border-amber-500/20';
      case 'low': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      default: return 'bg-slate-500/10 text-slate-500 border-slate-500/20';
    }
  };

  // Mock metadata for visual presentation
  const metadata = [
    { icon: <User className="w-3.5 h-3.5" />, label: "Date of Birth", value: "Oct 12, 1985" },
    { icon: <MapPin className="w-3.5 h-3.5" />, label: "Primary Address", value: "San Francisco, CA (US)" },
    { icon: <Globe className="w-3.5 h-3.5" />, label: "Nationality", value: "United States" },
    { icon: <CreditCard className="w-3.5 h-3.5" />, label: "Tax ID (SSN)", value: "***-**-1234" },
    { icon: <Building2 className="w-3.5 h-3.5" />, label: "Employer", value: "Acme Corp Intl." }
  ];

  const screeningPerimeter = [
    { icon: <ShieldAlert className="text-blue-500 w-4 h-4" />, label: "Global Sanctions (OFAC, UN, EU)", status: "Clear" },
    { icon: <Activity className="text-orange-500 w-4 h-4" />, label: "Politically Exposed Persons (PEP)", status: "Clear" },
    { icon: <AlertCircle className="text-red-500 w-4 h-4" />, label: "Adverse Media Network", status: "1 Match" },
    { icon: <FileCheck2 className="text-emerald-500 w-4 h-4" />, label: "Internal Watchlists", status: "Clear" },
  ];

  // Derive risk score visually
  const riskScore = customer?.risk_score || 0;
  const riskScoreColor = riskScore > 80 ? "text-red-500" : riskScore > 50 ? "text-orange-500" : "text-emerald-500";
  const riskScoreBg = riskScore > 80 ? "bg-red-500/10 border-red-500/20" : riskScore > 50 ? "bg-orange-500/10 border-orange-500/20" : "bg-emerald-500/10 border-emerald-500/20";

  return (
    <div className="space-y-6 pb-8">
      {/* Detail Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div className="space-y-2">
          <Link href="/dashboard/customer-risk" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full mb-2">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Registry
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">
              {customerDisplayName}
            </h1>
            <Badge variant="outline" className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide border ${getRiskTierColor(customer?.risk_tier || 'unknown')}`}>
              {(customer?.risk_tier || 'Unknown')} Risk
            </Badge>
            <Badge variant="outline" className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20">
              {customer?.status || 'Unknown'}
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground font-mono font-medium flex items-center gap-2">
            ID: {customer?.customer_id || customerId}
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="uppercase font-sans font-bold tracking-wider text-[10px] text-slate-500">{customerClassification}</span>
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="font-semibold rounded-full shadow-sm">
            <ShieldAlert className="w-4 h-4 mr-2" /> Start EDD
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 font-semibold shadow-sm rounded-full text-white">
                Actions <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 font-semibold rounded-xl shadow-xl">
              <DropdownMenuLabel className="text-xs text-slate-500">Risk Mitigation</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-rose-600 focus:bg-rose-50 focus:text-rose-700 cursor-pointer">
                <Lock className="w-4 h-4 mr-2" /> Restrict Account
              </DropdownMenuItem>
              <DropdownMenuItem className="text-emerald-600 focus:bg-emerald-50 focus:text-emerald-700 cursor-pointer">
                <CheckCircle2 className="w-4 h-4 mr-2" /> Clear Risk Flags
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <Search className="w-4 h-4 mr-2" /> Request Documentation
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* KPI Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className={`rounded-2xl shadow-sm border backdrop-blur-2xl ${riskScoreBg}`}>
          <CardContent className="p-5 flex gap-5 items-center">
            <div className="w-12 h-12 rounded-xl bg-white/50 dark:bg-black/20 shadow-sm flex items-center justify-center">
              <Zap className={`w-6 h-6 ${riskScoreColor}`} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Entity Risk Index</p>
              <div className={`text-2xl font-black mt-1 ${riskScoreColor}`}>{riskScore}</div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
          <CardContent className="p-5 flex gap-5 items-center">
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-500/10 shadow-sm flex items-center justify-center">
              <AlertCircle className="text-amber-500 w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Active Alerts</p>
              <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">{customer?.linked_alerts_count || 0}</div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
          <CardContent className="p-5 flex gap-5 items-center">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 shadow-sm flex items-center justify-center">
              <ShieldAlert className="text-blue-500 w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Screening Status</p>
              <div className="text-xl font-black text-slate-900 dark:text-white mt-1 truncate">
                {riskData?.screening_status || 'Pending'}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Workspace */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 space-y-6">
          <Tabs defaultValue="risk" className="w-full">
            <TabsList className="bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-xl border border-slate-200/60 dark:border-slate-800/60 w-full justify-start h-auto">
              <TabsTrigger value="risk" className="rounded-lg px-6 py-2.5 text-xs font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm">Risk Engineering</TabsTrigger>
              <TabsTrigger value="screening" className="rounded-lg px-6 py-2.5 text-xs font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm">AML Screening</TabsTrigger>
              <TabsTrigger value="timeline" className="rounded-lg px-6 py-2.5 text-xs font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-sm">Activity Timeline</TabsTrigger>
            </TabsList>

            <TabsContent value="risk" className="mt-6 space-y-6">
              {/* Risk Explanation Card */}
              <Card className="rounded-2xl shadow-lg border-0 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 relative overflow-hidden group">
                <div className="absolute right-[-10%] top-[-20%] w-[50%] h-[150%] bg-white/10 blur-3xl rounded-full pointer-events-none" />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md">
                        <Info className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-blue-200">Decision Logic Engine</p>
                        <h4 className="text-xl font-bold mt-1">Why is this customer flagged?</h4>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-white/30 text-white bg-white/10 font-mono">Model v2.4.1</Badge>
                  </div>
                  <p className="text-sm font-medium leading-relaxed text-blue-50/90 max-w-2xl">
                    Calculated score of <strong className="text-white text-base">{riskScore}</strong> is primarily driven by risk factors 
                    identified in the latest continuous evaluation cycle. DeepSense ML models have evaluated the customer profile 
                    against known risk typologies.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-4 border-t border-white/10">
                    {riskData?.risk_factors?.map((driver: RiskFactor, i: number) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-xs font-bold text-blue-100">
                          <span>{driver.label || 'Risk Factor'}</span>
                          <span className="font-mono">{driver.value || 0}/100</span>
                        </div>
                        <div className="h-1.5 w-full bg-black/20 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${
                              (driver.value || 0) > 80 ? 'bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.5)]' : 
                              (driver.value || 0) > 50 ? 'bg-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.5)]' : 
                              'bg-emerald-400'
                            }`}
                            style={{ width: `${driver.value || 0}%` }} 
                          />
                        </div>
                      </div>
                    )) || (
                      <div className="col-span-2 flex items-center gap-2 text-blue-200 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        No significant risk factors identified by the engine.
                      </div>
                    )}
                  </div>
                </div>
              </Card>

              {/* Profile & Metadata */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-sm font-bold flex items-center gap-2">
                      <User className="w-4 h-4 text-blue-500" /> Identity Core
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {metadata.map((item, i) => (
                        <div key={i} className="flex justify-between items-center py-2.5 border-b border-slate-100 dark:border-slate-800/50 last:border-0 last:pb-0">
                          <span className="text-xs font-semibold text-slate-500 flex items-center gap-2.5">
                            <span className="p-1 rounded bg-slate-100 dark:bg-slate-800">{item.icon}</span>
                            {item.label}
                          </span>
                          <span className="text-xs font-bold text-slate-900 dark:text-slate-100">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-sm font-bold flex items-center gap-2">
                      <Activity className="w-4 h-4 text-blue-500" /> Status Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 flex items-center gap-4 border border-slate-200/50 dark:border-slate-800/50">
                      <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm">
                        <User className="w-6 h-6 text-slate-500" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white capitalize">{customerClassification.toLowerCase()}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Classification</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold uppercase tracking-wider text-slate-500">Account Status</span>
                        <Badge variant="outline" className="border-emerald-200 bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20 font-bold">
                          {customer?.status || 'Active'}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold uppercase tracking-wider text-slate-500">Last Review</span>
                        <span className="font-mono font-bold text-slate-900 dark:text-slate-100">4 days ago</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar Actions & Compliance */}
        <div className="space-y-6 mt-1">
          <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl overflow-hidden">
            <CardHeader className="bg-slate-50/50 dark:bg-slate-900/20 border-b border-slate-100/50 dark:border-slate-800/50 py-4">
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <Globe className="w-4 h-4 text-slate-500" /> AML Perimeter
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5 space-y-5">
              <div className="space-y-3">
                {screeningPerimeter.map((check, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-900 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800">
                        {check.icon}
                      </div>
                      <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">{check.label}</span>
                    </div>
                    <Badge variant="outline" className={\`text-[10px] font-bold uppercase tracking-wide \${check.status === 'Clear' ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400' : 'bg-red-50 text-red-700 border-red-200 dark:bg-red-500/10 dark:text-red-400'}\`}>
                      {check.status}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full text-xs font-bold rounded-xl border-slate-200/60 dark:border-slate-800/60 shadow-sm">
                Open Manual Screening Hub
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg border border-slate-800 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
              <Lock className="w-32 h-32" />
            </div>
            <CardHeader className="relative z-10 pb-4">
              <CardTitle className="text-sm font-bold">Institutional Control</CardTitle>
              <CardDescription className="text-slate-400 text-[11px] mt-1">Governance override for high-exposure entities.</CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 space-y-3">
              <Button className="w-full h-10 bg-red-600 hover:bg-red-700 text-xs font-bold rounded-xl shadow-md border border-red-500">
                <Lock className="w-4 h-4 mr-2" /> Freeze Assets immediately
              </Button>
              <Button variant="outline" className="w-full h-10 border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-xs font-bold rounded-xl text-slate-200">
                <MessageSquare className="w-4 h-4 mr-2" /> Add Forensic Note
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
