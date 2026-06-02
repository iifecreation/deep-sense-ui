"use client";

import React, { useState } from "react";
import { 
  ShieldAlert, 
  Plus, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  XCircle, 
  Clock,
  MoreVertical,
  RefreshCcw,
  Brain,
  Fingerprint,
  CreditCard,
  Smartphone,
  Globe,
  AlertTriangle,
  TrendingUp,
  Calendar,
  Users,
  Target,
  Zap,
  FileText,
  Search,
  Filter,
  Settings
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

export default function AdvancedFraudPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for demonstration - in production this would come from hooks
  const fraudFeatures = [
    { id: 1, name: "Deepfake Detection", type: "AI/ML", status: "active", risk_level: "high", score: 92, detections: 1247 },
    { id: 2, name: "Synthetic Identity", type: "Identity", status: "active", risk_level: "high", score: 88, detections: 856 },
    { id: 3, name: "Friendly Fraud", type: "Dispute", status: "active", risk_level: "medium", score: 75, detections: 432 },
    { id: 4, name: "CNP Advanced", type: "Transaction", status: "active", risk_level: "high", score: 85, detections: 2103 },
    { id: 5, name: "App Scams", type: "Behavioral", status: "draft", risk_level: "medium", score: 0, detections: 0 },
    { id: 6, name: "Fraud Domains", type: "Network", status: "active", risk_level: "low", score: 95, detections: 5678 },
    { id: 7, name: "Dispute Intelligence", type: "Analytics", status: "active", risk_level: "medium", score: 72, detections: 234 },
    { id: 8, name: "Identity Reputation", type: "Identity", status: "active", risk_level: "high", score: 89, detections: 1567 },
    { id: 9, name: "Card Intelligence", type: "Payment", status: "active", risk_level: "medium", score: 78, detections: 892 },
    { id: 10, name: "Consortium", type: "Network", status: "active", risk_level: "high", score: 91, detections: 3456 },
  ];

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

  const filteredFeatures = fraudFeatures.filter((feature) =>
    feature.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    feature.type?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* Page Header */}
      <section className="sticky top-0 z-40 -mx-6 px-6 py-6 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black italic tracking-tighter uppercase text-neutral-900 dark:text-white">
              Advanced Fraud<span className="text-brand-lime">.</span>
            </h1>
            <p className="text-muted-foreground text-sm font-medium">
              AI-powered fraud detection and prevention capabilities.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="h-10 px-4 text-xs font-bold uppercase tracking-widest italic">
              <FileText className="w-3.5 h-3.5 mr-2" />
              Documentation
            </Button>
            <Button className="h-10 px-6 bg-brand-lime text-neutral-900 hover:scale-105 transition-all font-bold text-xs uppercase tracking-widest italic shadow-xl shadow-brand-lime/20">
              <Plus className="w-3.5 h-3.5 mr-2" />
              Configure Feature
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="rounded-2xl border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <ShieldAlert className="w-4 h-4" />
              Active Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black italic text-neutral-900 dark:text-white">
              {fraudFeatures.filter(f => f.status === 'active').length}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Total Detections
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black italic text-neutral-900 dark:text-white">
              {fraudFeatures.reduce((acc, f) => acc + f.detections, 0).toLocaleString()}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Avg. Accuracy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black italic text-emerald-600">
              {Math.round(fraudFeatures.filter(f => f.status === 'active').reduce((acc, f) => acc + f.score, 0) / Math.max(fraudFeatures.filter(f => f.status === 'active').length, 1))}%
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
              {fraudFeatures.filter(f => f.risk_level === 'high').length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="rounded-2xl border">
              <CardHeader>
                <CardTitle className="text-lg font-bold italic flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  AI/ML Detection
                </CardTitle>
                <CardDescription>Machine learning powered fraud detection</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Deepfake Detection</span>
                    <Badge className={getStatusColor('active')}>Active</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Synthetic Identity</span>
                    <Badge className={getStatusColor('active')}>Active</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Behavioral Analysis</span>
                    <Badge className={getStatusColor('draft')}>Draft</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border">
              <CardHeader>
                <CardTitle className="text-lg font-bold italic flex items-center gap-2">
                  <Fingerprint className="w-5 h-5" />
                  Identity Verification
                </CardTitle>
                <CardDescription>Advanced identity fraud prevention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Identity Reputation</span>
                    <Badge className={getStatusColor('active')}>Active</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Synthetic Identity</span>
                    <Badge className={getStatusColor('active')}>Active</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Biometric Analysis</span>
                    <Badge className={getStatusColor('draft')}>Draft</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border">
              <CardHeader>
                <CardTitle className="text-lg font-bold italic flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Payment Fraud
                </CardTitle>
                <CardDescription>Transaction and payment fraud detection</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">CNP Advanced</span>
                    <Badge className={getStatusColor('active')}>Active</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Card Intelligence</span>
                    <Badge className={getStatusColor('active')}>Active</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Friendly Fraud</span>
                    <Badge className={getStatusColor('active')}>Active</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border">
              <CardHeader>
                <CardTitle className="text-lg font-bold italic flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Network Intelligence
                </CardTitle>
                <CardDescription>Network-based fraud detection</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Fraud Domains</span>
                    <Badge className={getStatusColor('active')}>Active</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Consortium</span>
                    <Badge className={getStatusColor('active')}>Active</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">IP Reputation</span>
                    <Badge className={getStatusColor('draft')}>Draft</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="features" className="space-y-6">
          <Card className="rounded-2xl border">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-lg font-bold italic">Fraud Detection Features</CardTitle>
                  <CardDescription className="text-sm">Configure and manage advanced fraud detection capabilities</CardDescription>
                </div>
                <div className="flex gap-3">
                  <Input
                    placeholder="Search features..."
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
                    <TableHead className="text-xs font-bold uppercase tracking-wider">Feature</TableHead>
                    <TableHead className="text-xs font-bold uppercase tracking-wider">Type</TableHead>
                    <TableHead className="text-xs font-bold uppercase tracking-wider">Risk Level</TableHead>
                    <TableHead className="text-xs font-bold uppercase tracking-wider">Accuracy</TableHead>
                    <TableHead className="text-xs font-bold uppercase tracking-wider">Detections</TableHead>
                    <TableHead className="text-xs font-bold uppercase tracking-wider">Status</TableHead>
                    <TableHead className="text-xs font-bold uppercase tracking-wider text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredFeatures.map((feature) => (
                    <TableRow key={feature.id}>
                      <TableCell className="font-bold text-sm">{feature.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-xs">
                          {feature.type}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={getRiskLevelColor(feature.risk_level)}>
                          {feature.risk_level}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-bold text-sm">{feature.score}%</TableCell>
                      <TableCell className="font-bold text-sm">{feature.detections.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(feature.status)}>
                          {feature.status}
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
                              <Settings className="w-4 h-4 mr-2" />
                              Configure
                            </DropdownMenuItem>
                            {feature.status === 'active' ? (
                              <DropdownMenuItem>
                                <EyeOff className="w-4 h-4 mr-2" />
                                Disable
                              </DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem>
                                <Zap className="w-4 h-4 mr-2" />
                                Enable
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredFeatures.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                        {searchQuery ? 'No features match your search' : 'No fraud detection features configured'}
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card className="rounded-2xl border">
            <CardHeader>
              <CardTitle className="text-lg font-bold italic">Analytics Dashboard</CardTitle>
              <CardDescription className="text-sm">Fraud detection performance metrics and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="font-semibold">Analytics Dashboard</p>
                <p className="text-sm mt-2">Detailed analytics and reporting will be available here.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
