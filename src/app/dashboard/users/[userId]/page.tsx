"use client";

import React from "react";
import { 
  ArrowLeft, 
  User, 
  ShieldCheck, 
  ShieldAlert,
  Clock, 
  MapPin, 
  Activity,
  Smartphone,
  CreditCard,
  History,
  Mail,
  Phone,
  Calendar,
  MoreHorizontal,
  ChevronRight,
  Share2,
  Lock,
  Zap,
  Fingerprint,
  Users,
  Globe,
  Briefcase,
  AlertTriangle,
  FileText,
  BadgeCheck
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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

export default function UserDetailPage() {
  const params = useParams();
  const userId = params.userId as string;

  // Mock data for high-fidelity view
  const user = {
    id: userId,
    name: "Sarah Jenkins",
    status: "Active",
    segment: "Premium Institutional",
    riskProfile: "Low",
    joined: "Feb 14, 2024",
    profile: {
      email: "sarah.j@enterprise.co",
      phone: "+44 7700 900341",
      location: "London, United Kingdom",
      dob: "July 12, 1988",
      kyc: "Verified (Level 3)"
    },
    accounts: [
      { id: "ACC-9921-X", type: "Settlement", balance: "$4.2M", status: "Active" },
      { id: "ACC-8812-Y", type: "Operational", balance: "$150k", status: "Active" }
    ],
    devices: [
      { id: "DEV-1122", name: "iPhone 15 Pro", lastUsed: "now" },
      { id: "DEV-4491", name: "MacBook Pro M3", lastUsed: "2h ago" }
    ],
    transactions: [
      { id: "TXN-88219", amount: "$42,250.00", status: "Approved", date: "Oct 15, 2026" },
      { id: "TXN-88102", amount: "$8,150.00", status: "Approved", date: "Oct 12, 2026" }
    ],
    alerts: [
      { id: "ALT-4421", type: "Login Anomaly", status: "Resolved", severity: "Low" }
    ],
    timeline: [
      { event: "Account Login", time: "19:32:11", detail: "Session initiated from London, UK" },
      { event: "Compliance Review", time: "Oct 12", detail: "Annual KYC refresh completed" },
      { event: "Limit Increase", time: "Sep 22", detail: "Daily threshold raised to $10M" }
    ]
  };

  return (
    <div className="flex flex-col gap-8 pb-20">
      {/* HEADER SECTION */}
      <section className="bg-background/80 backdrop-blur-md sticky top-0 z-40 -mx-6 px-6 py-6 border-b border-border transition-all">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <Link href="/dashboard/users" className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-muted-foreground hover:text-neutral-900 transition-colors italic mb-2">
               <ArrowLeft className="w-3 h-3" /> Entity Directory
            </Link>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-brand-lime font-black italic shadow-xl">SJ</div>
              <h1 className="text-3xl font-black italic tracking-tighter uppercase leading-none">{user.name}</h1>
              <Badge className="bg-brand-lime text-black border-none h-6 px-4 text-[9px] font-black uppercase italic tracking-widest">
                {user.segment}
              </Badge>
              <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-lg border border-border">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-[9px] font-black uppercase italic tracking-widest text-neutral-900">{user.status}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
             <Button variant="outline" className="h-10 px-4 text-[9px] font-black uppercase tracking-widest italic border-neutral-200 dark:border-neutral-800">
                <Share2 className="w-3.5 h-3.5 mr-2 text-muted-foreground" />
                Export Profile
             </Button>
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                   <Button className="h-10 px-6 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:scale-[1.03] transition-all font-black uppercase tracking-widest italic shadow-xl">
                      Account Action
                      <ChevronRight className="w-4 h-4 ml-2" />
                   </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white rounded-2xl border-border shadow-2xl font-bold">
                   <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4">
                      Create Case
                   </DropdownMenuItem>
                   <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4 text-rose-500">
                      Flag for Review
                   </DropdownMenuItem>
                   <DropdownMenuItem className="text-[10px] font-black uppercase italic tracking-widest h-11 px-4">
                      Add Internal Note
                   </DropdownMenuItem>
                </DropdownMenuContent>
             </DropdownMenu>
          </div>
        </div>
      </section>

      {/* KPI GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
         {[
           { label: "Entity Trust Score", value: "98.2", delta: "Top 1%", icon: <ShieldCheck className="text-brand-lime" />, color: "text-brand-lime" },
           { label: "Total Assets", value: "$4.35M", delta: "USD Segment", icon: <CreditCard className="text-muted-foreground" /> },
           { label: "Active Devices", value: user.devices.length, delta: "Verified: 02", icon: <Smartphone className="text-indigo-500" /> },
           { label: "Institutional KYC", value: "Level 3", delta: "Verified", icon: <BadgeCheck className="text-brand-lime" /> },
         ].map((kpi, i) => (
           <div key={i} className="p-5 bg-white dark:bg-neutral-900 rounded-[32px] border border-border/50 shadow-sm flex flex-col gap-4">
              <div className="flex items-center justify-between">
                 <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center">{kpi.icon}</div>
                 <Badge variant="outline" className="text-[8px] font-black uppercase tracking-widest italic border-none px-0">{kpi.delta}</Badge>
              </div>
              <div>
                 <div className={`text-2xl font-black italic tracking-tighter leading-none ${kpi.color || 'text-neutral-900 dark:text-white'}`}>{kpi.value}</div>
                 <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground italic mt-1">{kpi.label}</div>
              </div>
           </div>
         ))}
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
         <div className="xl:col-span-2 space-y-8">
            <Tabs defaultValue="profile" className="w-full">
               <TabsList className="bg-muted p-1 rounded-2xl border border-border/50 h-12 mb-8">
                  <TabsTrigger value="profile" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Profile Info</TabsTrigger>
                  <TabsTrigger value="accounts" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Accounts</TabsTrigger>
                  <TabsTrigger value="transactions" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Transactions</TabsTrigger>
                  <TabsTrigger value="risk" className="rounded-xl px-8 text-[10px] font-black uppercase italic tracking-widest data-[state=active]:bg-neutral-900 data-[state=active]:text-white">Risk Core</TabsTrigger>
               </TabsList>

               <TabsContent value="profile" className="m-0 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
                        <CardHeader className="p-0 mb-10">
                           <div className="flex items-center justify-between">
                              <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Personal Intelligence</CardTitle>
                              <User className="w-8 h-8 text-muted-foreground/10" />
                           </div>
                        </CardHeader>
                        <CardContent className="p-0 space-y-6">
                           {[
                             { label: "Email Address", value: user.profile.email, icon: <Mail className="w-4 h-4" /> },
                             { label: "Mobile Node", value: user.profile.phone, icon: <Phone className="w-4 h-4" /> },
                             { label: "Date of Birth", value: user.profile.dob, icon: <Calendar className="w-4 h-4" /> },
                             { label: "Residency", value: user.profile.location, icon: <MapPin className="w-4 h-4" /> },
                             { label: "Joined Registry", value: user.joined, icon: <Clock className="w-4 h-4" /> },
                           ].map((item, i) => (
                             <div key={i} className="flex justify-between items-center text-[11px] font-black uppercase italic tracking-widest border-b border-border/50 pb-4 last:border-0">
                                <span className="text-muted-foreground flex items-center gap-2">{item.icon} {item.label}</span>
                                <span className="text-neutral-900">{item.value}</span>
                             </div>
                           ))}
                        </CardContent>
                     </Card>

                     <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
                        <CardHeader className="p-0 mb-10">
                           <div className="flex items-center justify-between">
                              <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">KYC & Compliance</CardTitle>
                              <ShieldCheck className="w-8 h-8 text-brand-lime/20" />
                           </div>
                        </CardHeader>
                        <CardContent className="p-0 space-y-8">
                           <div className="p-6 bg-zinc-50 rounded-[32px] border border-border/50">
                              <div className="flex justify-between items-center mb-4">
                                 <span className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground">Verification Health</span>
                                 <Badge className="bg-brand-lime text-black border-none text-[8px] font-black uppercase italic">COMPLETE</Badge>
                              </div>
                              <h4 className="text-xl font-black italic tracking-tighter text-neutral-900">{user.profile.kyc}</h4>
                              <p className="text-[10px] text-muted-foreground italic font-medium mt-2">ID, PoR, and Biometrics verified via Automated Intelligence.</p>
                           </div>
                           <div className="space-y-4">
                              <div className="flex justify-between items-center text-[10px] font-black uppercase italic tracking-widest">
                                 <span>PEP Screening</span>
                                 <span className="text-brand-lime">CLEAR</span>
                              </div>
                              <div className="flex justify-between items-center text-[10px] font-black uppercase italic tracking-widest">
                                 <span>Sanctions (OFAC/EU)</span>
                                 <span className="text-brand-lime">CLEAR</span>
                              </div>
                              <div className="flex justify-between items-center text-[10px] font-black uppercase italic tracking-widest">
                                 <span>Adverse Media</span>
                                 <span className="text-neutral-900 italic font-black">NO HITS</span>
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                  </div>
               </TabsContent>

               <TabsContent value="accounts" className="m-0 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {user.accounts.map((acc, i) => (
                        <Card key={i} className="rounded-[40px] border-border/50 shadow-md p-10 bg-white group hover:border-neutral-900 transition-colors">
                           <CardHeader className="p-0 mb-8 flex flex-row items-center justify-between">
                              <div className="flex flex-col">
                                 <span className="text-[10px] font-black uppercase italic tracking-widest text-muted-foreground">{acc.type} Node</span>
                                 <CardTitle className="text-xl font-black italic uppercase tracking-tighter">{acc.id}</CardTitle>
                              </div>
                              <Badge className="bg-brand-lime text-black border-none text-[8px] font-black uppercase italic">{acc.status}</Badge>
                           </CardHeader>
                           <CardContent className="p-0">
                              <div className="text-3xl font-black italic tracking-tighter text-neutral-900 mb-6">{acc.balance}</div>
                              <div className="flex gap-4">
                                 <Button variant="outline" className="flex-1 rounded-2xl text-[9px] font-black uppercase italic border-border">Statements</Button>
                                 <Button variant="outline" className="flex-1 rounded-2xl text-[9px] font-black uppercase italic border-border">Settings</Button>
                              </div>
                           </CardContent>
                        </Card>
                     ))}
                  </div>
               </TabsContent>

               <TabsContent value="transactions" className="m-0 space-y-8">
                  <Card className="rounded-[40px] border-border/50 shadow-md overflow-hidden bg-white">
                     <CardHeader className="p-10 border-b border-border/50">
                        <CardTitle className="text-2xl font-black italic uppercase tracking-tighter">Activity Ingress</CardTitle>
                     </CardHeader>
                     <CardContent className="p-0">
                        <Table>
                           <TableHeader className="bg-muted px-10">
                              <TableRow className="hover:bg-transparent border-none">
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 px-10 text-neutral-400">Transaction ID</TableHead>
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-neutral-400">Date Node</TableHead>
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-center text-neutral-400">Quantity</TableHead>
                                 <TableHead className="text-[10px] font-black uppercase tracking-widest italic h-12 text-right px-10 text-neutral-400">Status</TableHead>
                              </TableRow>
                           </TableHeader>
                           <TableBody>
                              {user.transactions.map((txn, i) => (
                                <TableRow key={i} className="group hover:bg-muted/50 transition-colors border-b border-border/50 last:border-0 h-20 cursor-pointer" onClick={() => window.location.href=`/dashboard/transactions/${txn.id}`}>
                                   <TableCell className="px-10 py-5">
                                      <span className="text-[13px] font-black italic tracking-tighter uppercase text-neutral-900">{txn.id}</span>
                                   </TableCell>
                                   <TableCell className="text-[11px] font-black italic text-neutral-400 uppercase">{txn.date}</TableCell>
                                   <TableCell className="text-center text-[13px] font-black italic text-neutral-900">{txn.amount}</TableCell>
                                   <TableCell className="px-10 text-right">
                                      <Badge variant="outline" className="text-[8px] font-black uppercase italic tracking-widest border-none text-brand-lime">
                                         {txn.status}
                                      </Badge>
                                   </TableCell>
                                </TableRow>
                              ))}
                           </TableBody>
                        </Table>
                     </CardContent>
                  </Card>
               </TabsContent>

               <TabsContent value="risk" className="m-0">
                  <div className="bg-rose-500 rounded-[40px] p-24 text-white flex flex-col items-center justify-center text-center gap-8 shadow-2xl overflow-hidden relative group">
                     <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity" />
                     <ShieldAlert className="w-16 h-16 text-white mb-2" />
                     <div className="space-y-4 relative z-10">
                        <h3 className="text-3xl font-black italic uppercase tracking-tighter">Institutional Risk View</h3>
                        <p className="text-white/80 text-sm max-w-sm italic">Accessing high-fidelity risk engineering view for SARAH JENKINS. Requires Analyst Tier 2 clearance.</p>
                     </div>
                     <Button className="bg-white text-rose-500 font-black uppercase italic tracking-widest text-[10px] px-8 h-14 rounded-3xl hover:scale-105 transition-all">Elevate Clearance</Button>
                  </div>
               </TabsContent>
            </Tabs>
         </div>

         {/* SIDEBAR OPS */}
         <div className="space-y-8">
            {/* DEVICES */}
            <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
               <CardHeader className="p-0 mb-8 flex flex-row items-center justify-between">
                  <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Verified Devices</CardTitle>
                  <Smartphone className="w-6 h-6 text-muted-foreground/20" />
               </CardHeader>
               <CardContent className="p-0 space-y-4">
                  {user.devices.map((dev, i) => (
                    <Link key={i} href={`/dashboard/devices/${dev.id}`} className="block p-5 bg-muted/20 border border-border rounded-[28px] group hover:bg-muted transition-all">
                       <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-black italic text-neutral-900">{dev.name}</span>
                          <Badge className="bg-brand-lime text-black border-none text-[7px] font-black uppercase italic">TRUSTED</Badge>
                       </div>
                       <div className="flex justify-between items-center pt-2 border-t border-border/50">
                          <span className="text-[9px] font-black uppercase italic text-muted-foreground">Used {dev.lastUsed}</span>
                          <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                       </div>
                    </Link>
                  ))}
               </CardContent>
            </Card>

            {/* TIMELINE */}
            <Card className="rounded-[40px] border-border/50 shadow-md p-10 bg-white">
               <CardHeader className="p-0 mb-8 flex flex-row items-center justify-between">
                  <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Event Timeline</CardTitle>
                  <History className="w-5 h-5 text-muted-foreground/20" />
               </CardHeader>
               <CardContent className="p-0 space-y-6">
                  {user.timeline.map((step, i) => (
                    <div key={i} className="flex gap-4 relative">
                       {i !== user.timeline.length - 1 && <div className="absolute left-2 top-4 bottom-[-24px] w-px bg-border" />}
                       <div className="w-4 h-4 rounded-full bg-neutral-900 border-4 border-white shrink-0 relative z-10" />
                       <div className="space-y-1">
                          <div className="text-[11px] font-black italic text-neutral-900">{step.event}</div>
                          <div className="text-[9px] text-muted-foreground italic uppercase font-black">{step.time} • {step.detail}</div>
                       </div>
                    </div>
                  ))}
               </CardContent>
            </Card>

            {/* ACTION RAIL */}
            <Card className="rounded-[40px] border border-neutral-900 bg-neutral-900 text-white p-10 space-y-10 shadow-3xl">
               <div className="space-y-4">
                  <h4 className="text-xl font-black italic uppercase tracking-tighter text-brand-lime">Admin Control</h4>
                  <p className="text-white/30 text-[10px] uppercase italic tracking-widest leading-relaxed">Direct entity state manipulation and administrative override.</p>
               </div>
               <div className="space-y-3">
                  <Button className="w-full h-14 bg-brand-lime text-black rounded-3xl text-[10px] font-black uppercase italic hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-brand-lime/10">
                     <Lock className="w-4 h-4 mr-2" />
                     Force Password Reset
                  </Button>
                  <Button variant="outline" className="w-full h-14 border-white/10 text-white rounded-3xl text-[10px] font-black uppercase italic hover:bg-white/5 transition-all">
                     <FileText className="w-4 h-4 mr-2" />
                     Account Audit Export
                  </Button>
                  <Button variant="outline" className="w-full h-14 border-rose-500/50 text-rose-500 rounded-3xl text-[10px] font-black uppercase italic hover:bg-rose-500/5 transition-all">
                     <AlertTriangle className="w-4 h-4 mr-2" />
                     Suspend All Access
                  </Button>
               </div>
            </Card>
         </div>
      </div>
    </div>
  );
}
