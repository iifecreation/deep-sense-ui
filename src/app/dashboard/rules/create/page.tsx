"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft,
  Settings, 
  Play, 
  Save,
  Plus,
  Trash2,
  ChevronDown,
  AlertCircle,
  Copy,
  GitBranch,
  ShieldAlert,
  Zap,
  Activity,
  CheckCircle2,
  ListFilter
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type Condition = {
  id: string;
  field: string;
  operator: string;
  value: string;
};

export default function RuleBuilder() {
  const [ruleName, setRuleName] = useState("Untitled Rule");
  const [ruleDescription, setRuleDescription] = useState("");
  const [conditions, setConditions] = useState<Condition[]>([
    { id: "1", field: "transaction.amount", operator: "greater_than", value: "1000" }
  ]);
  const [action, setAction] = useState("block");
  const [riskScoreModifier, setRiskScoreModifier] = useState("+50");
  
  const [testPayload, setTestPayload] = useState('{\n  "transaction": {\n    "amount": 1500,\n    "currency": "USD",\n    "type": "card_not_present"\n  },\n  "user": {\n    "id": "usr_98213",\n    "ip_country": "RU",\n    "billing_country": "US",\n    "age_days": 2\n  }\n}');
  const [testResult, setTestResult] = useState<null | { triggered: boolean, message: string }>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const addCondition = () => {
    setConditions([
      ...conditions, 
      { id: Date.now().toString(), field: "", operator: "equals", value: "" }
    ]);
  };

  const updateCondition = (id: string, field: keyof Condition, value: string) => {
    setConditions(conditions.map(c => c.id === id ? { ...c, [field]: value } : c));
  };

  const removeCondition = (id: string) => {
    setConditions(conditions.filter(c => c.id !== id));
  };

  const runSimulation = () => {
    setIsSimulating(true);
    setTestResult(null);
    
    // Fake simulation delay
    setTimeout(() => {
      setIsSimulating(false);
      try {
        const payload = JSON.parse(testPayload);
        // Extremely simple mock logic for demonstration
        if (payload?.transaction?.amount > 1000) {
          setTestResult({ triggered: true, message: "Rule triggered successfully based on test payload." });
        } else {
          setTestResult({ triggered: false, message: "Rule did not trigger for this payload." });
        }
      } catch (e) {
        setTestResult({ triggered: false, message: "Invalid JSON payload provided for test." });
      }
    }, 800);
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Detail Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div className="space-y-2">
          <Link href="/dashboard/rules" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full mb-2">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Rules Engine
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">
              Rule Builder
            </h1>
            <Badge variant="outline" className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide border-indigo-200 bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20">
              Draft
            </Badge>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="font-semibold rounded-full shadow-sm">
            <Settings className="w-4 h-4 mr-2" /> Settings
          </Button>
          <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 font-semibold shadow-sm rounded-full text-white">
            <Save className="w-4 h-4 mr-2" /> Save & Deploy
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Main Canvas */}
        <div className="xl:col-span-2 space-y-6">
          
          {/* Metadata Card */}
          <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <PenTool className="w-4 h-4 text-indigo-500" /> Rule Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Rule Name</label>
                <Input 
                  value={ruleName} 
                  onChange={(e) => setRuleName(e.target.value)} 
                  className="font-bold text-lg bg-white/50 dark:bg-slate-900/50"
                  placeholder="e.g. Velocity Check - High Value"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Description</label>
                <Input 
                  value={ruleDescription} 
                  onChange={(e) => setRuleDescription(e.target.value)} 
                  className="bg-white/50 dark:bg-slate-900/50"
                  placeholder="Describe what this rule is intended to catch..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Logic Builder Card */}
          <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl overflow-visible relative">
            <CardHeader className="pb-4 border-b border-slate-100/50 dark:border-slate-800/50">
              <div className="flex justify-between items-center">
                <CardTitle className="text-sm font-bold flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-indigo-500" /> Logic Conditions (IF)
                </CardTitle>
                <Badge variant="outline" className="font-mono text-xs bg-slate-50 dark:bg-slate-800">Match ALL conditions (AND)</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4 bg-slate-50/30 dark:bg-slate-900/20">
              
              <div className="space-y-3">
                {conditions.map((condition, index) => (
                  <div key={condition.id} className="relative flex flex-col sm:flex-row items-center gap-2 bg-white dark:bg-slate-900 p-2 rounded-xl shadow-sm border border-slate-200/60 dark:border-slate-800/60 group">
                    {index > 0 && (
                      <div className="absolute -top-3 left-6 px-2 bg-slate-100 dark:bg-slate-800 text-[9px] font-bold text-slate-500 rounded border border-slate-200 dark:border-slate-700 z-10 uppercase">
                        AND
                      </div>
                    )}
                    
                    <div className="w-full sm:w-1/3">
                      <Input 
                        placeholder="e.g. transaction.amount" 
                        value={condition.field}
                        onChange={(e) => updateCondition(condition.id, "field", e.target.value)}
                        className="h-9 font-mono text-xs bg-slate-50 dark:bg-slate-950 border-0 focus-visible:ring-1"
                      />
                    </div>
                    
                    <div className="w-full sm:w-1/4">
                      <Select value={condition.operator} onValueChange={(val) => updateCondition(condition.id, "operator", val)}>
                        <SelectTrigger className="h-9 text-xs font-semibold bg-slate-50 dark:bg-slate-950 border-0 focus:ring-1">
                          <SelectValue placeholder="Operator" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl shadow-xl">
                          <SelectItem value="equals">Equals (==)</SelectItem>
                          <SelectItem value="not_equals">Not Equals (!=)</SelectItem>
                          <SelectItem value="greater_than">Greater Than (&gt;)</SelectItem>
                          <SelectItem value="less_than">Less Than (&lt;)</SelectItem>
                          <SelectItem value="contains">Contains</SelectItem>
                          <SelectItem value="in_list">In List</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="w-full sm:w-1/3">
                      <Input 
                        placeholder="Value" 
                        value={condition.value}
                        onChange={(e) => updateCondition(condition.id, "value", e.target.value)}
                        className="h-9 font-mono text-xs bg-slate-50 dark:bg-slate-950 border-0 focus-visible:ring-1"
                      />
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-9 w-9 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 shrink-0"
                      onClick={() => removeCondition(condition.id)}
                      disabled={conditions.length === 1}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button 
                  onClick={addCondition} 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-dashed border-slate-300 dark:border-slate-700 text-slate-500 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
                >
                  <Plus className="w-4 h-4 mr-2" /> Add Condition
                </Button>
              </div>

            </CardContent>
          </Card>

          {/* Outcome Action Card */}
          <Card className="rounded-2xl border-slate-200/60 shadow-sm bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl">
            <CardHeader className="pb-4 border-b border-slate-100/50 dark:border-slate-800/50">
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-indigo-500" /> Outcomes & Actions (THEN)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Primary Action</label>
                  <Select value={action} onValueChange={setAction}>
                    <SelectTrigger className="h-10 font-bold bg-white dark:bg-slate-900 rounded-xl">
                      <SelectValue placeholder="Select outcome action" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl shadow-xl">
                      <SelectItem value="block" className="text-red-600 font-semibold focus:text-red-700">Hard Block</SelectItem>
                      <SelectItem value="challenge" className="text-orange-600 font-semibold focus:text-orange-700">Challenge (MFA/3DS)</SelectItem>
                      <SelectItem value="review" className="text-amber-600 font-semibold focus:text-amber-700">Send to Manual Review</SelectItem>
                      <SelectItem value="monitor" className="text-blue-600 font-semibold focus:text-blue-700">Monitor Only (Silent)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Risk Score Modifier</label>
                  <div className="flex items-center gap-2">
                    <Input 
                      value={riskScoreModifier}
                      onChange={(e) => setRiskScoreModifier(e.target.value)}
                      className="h-10 font-mono font-bold bg-white dark:bg-slate-900 rounded-xl" 
                      placeholder="+50" 
                    />
                    <Badge variant="outline" className="h-10 px-3 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700">Points</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Simulator */}
        <div className="space-y-6">
          <Card className="rounded-2xl border-slate-200/60 shadow-lg bg-indigo-950 text-white overflow-hidden relative sticky top-6">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <Activity className="w-24 h-24" />
            </div>
            
            <CardHeader className="border-b border-white/10 pb-4 relative z-10">
              <CardTitle className="text-sm font-bold flex items-center gap-2 text-indigo-50">
                <Play className="w-4 h-4 text-indigo-400" /> Simulation Sandbox
              </CardTitle>
              <CardDescription className="text-indigo-200/60 text-xs">Test your logic against mock JSON payloads.</CardDescription>
            </CardHeader>
            
            <CardContent className="p-0 relative z-10 flex flex-col h-[500px]">
              <div className="p-4 bg-black/40 border-b border-white/10 flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-300">Test Payload (JSON)</span>
                <Button variant="ghost" size="icon" className="h-6 w-6 text-indigo-300 hover:text-white hover:bg-white/10">
                  <Copy className="w-3.5 h-3.5" />
                </Button>
              </div>
              
              <textarea 
                value={testPayload}
                onChange={(e) => setTestPayload(e.target.value)}
                className="flex-1 w-full bg-black/20 text-indigo-100 font-mono text-xs p-4 resize-none focus:outline-none focus:ring-inset focus:ring-1 focus:ring-indigo-500/50 selection:bg-indigo-500/30"
                spellCheck={false}
              />
              
              <div className="p-4 bg-indigo-900/50 border-t border-white/10 space-y-4">
                {testResult && (
                  <div className={`p-3 rounded-xl border flex items-start gap-3 ${
                    testResult.triggered 
                      ? 'bg-red-500/20 border-red-500/30 text-red-100' 
                      : 'bg-emerald-500/20 border-emerald-500/30 text-emerald-100'
                  }`}>
                    {testResult.triggered ? (
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    )}
                    <div className="space-y-1">
                      <p className="text-xs font-bold uppercase tracking-wider">{testResult.triggered ? 'Rule Triggered' : 'Rule Bypassed'}</p>
                      <p className="text-xs opacity-80 leading-relaxed">{testResult.message}</p>
                    </div>
                  </div>
                )}
                
                <Button 
                  onClick={runSimulation}
                  disabled={isSimulating}
                  className="w-full bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-xl shadow-lg border border-indigo-400"
                >
                  {isSimulating ? (
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Play className="w-4 h-4 mr-2" />
                  )}
                  {isSimulating ? 'Running...' : 'Run Simulation'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
      </div>
    </div>
  );
}
