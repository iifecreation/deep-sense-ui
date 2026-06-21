"use client";

import React from "react";
import { ShieldAlert, KeyRound, Search, ServerCrash, WifiOff, RefreshCw, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export type ErrorType = "403" | "401" | "404" | "500" | "offline" | "unknown";

interface ErrorStatePanelProps {
  type?: ErrorType;
  statusCode?: number;
  title?: string;
  message?: string;
  onRetry?: () => void;
  onBack?: () => void;
}

export default function ErrorStatePanel({
  type,
  statusCode,
  title,
  message,
  onRetry,
  onBack,
}: ErrorStatePanelProps) {
  // Determine error type from status code if not explicitly provided
  let errorType: ErrorType = type || "unknown";
  if (!type && statusCode) {
    if (statusCode === 403) errorType = "403";
    else if (statusCode === 401) errorType = "401";
    else if (statusCode === 404) errorType = "404";
    else if (statusCode >= 500) errorType = "500";
  }

  // Detect offline status if not specified
  if (typeof window !== "undefined" && !navigator.onLine && errorType === "unknown") {
    errorType = "offline";
  }

  // Get assets for each state
  const stateConfigs = {
    "403": {
      icon: <ShieldAlert className="h-10 w-10 text-rose-400" />,
      glowColor: "from-rose-500/20 to-red-500/10",
      defaultTitle: "Access Denied",
      defaultMessage: "You don't have permission to access this resource. If you are a tenant, you may be locked to your own UUID context.",
      iconBg: "bg-rose-500/10 border-rose-500/20",
    },
    "401": {
      icon: <KeyRound className="h-10 w-10 text-amber-400" />,
      glowColor: "from-amber-500/20 to-yellow-500/10",
      defaultTitle: "Session Expired",
      defaultMessage: "Your authentication session has expired or is invalid. Please sign in again to recover access.",
      iconBg: "bg-amber-500/10 border-amber-500/20",
    },
    "404": {
      icon: <Search className="h-10 w-10 text-zinc-400" />,
      glowColor: "from-zinc-500/20 to-slate-500/10",
      defaultTitle: "Resource Not Found",
      defaultMessage: "The requested object, ledger, or analytics data could not be found in our directory database.",
      iconBg: "bg-zinc-500/10 border-zinc-500/20",
    },
    "500": {
      icon: <ServerCrash className="h-10 w-10 text-red-500" />,
      glowColor: "from-red-600/20 to-orange-500/10",
      defaultTitle: "System Error",
      defaultMessage: "An unexpected runtime failure occurred on the core intelligence API. Our operations team has been notified.",
      iconBg: "bg-red-500/10 border-red-500/20",
    },
    "offline": {
      icon: <WifiOff className="h-10 w-10 text-orange-400" />,
      glowColor: "from-orange-500/20 to-yellow-500/10",
      defaultTitle: "Connection Failure",
      defaultMessage: "You are currently offline or unable to reach our systems. Please check your network connection.",
      iconBg: "bg-orange-500/10 border-orange-500/20",
    },
    "unknown": {
      icon: <ShieldAlert className="h-10 w-10 text-brand-lime" />,
      glowColor: "from-brand-lime/20 to-emerald-500/10",
      defaultTitle: "Something Went Wrong",
      defaultMessage: "An unknown application error occurred. Please try again or return to safety.",
      iconBg: "bg-brand-lime/10 border-brand-lime/20",
    },
  };

  const config = stateConfigs[errorType];

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/80 p-1 shadow-2xl backdrop-blur-xl">
      {/* Background Neon Glow Effect */}
      <div className={`absolute -inset-10 bg-gradient-to-r ${config.glowColor} blur-2xl opacity-40 select-none pointer-events-none`} />

      <Card className="border-0 bg-transparent text-zinc-100 shadow-none">
        <CardHeader className="text-center pt-8">
          {/* Animated Icon Container */}
          <div className="relative flex justify-center mb-6">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-20 w-20 animate-ping rounded-full bg-zinc-800/30 opacity-75" />
            </div>
            <div className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border ${config.iconBg} shadow-inner`}>
              {config.icon}
            </div>
          </div>

          <CardTitle className="text-2xl font-bold tracking-tight text-white">
            {title || config.defaultTitle}
          </CardTitle>
          {statusCode && (
            <span className="mt-1 inline-block text-xs font-mono font-semibold tracking-wider text-zinc-500">
              HTTP CODE: {statusCode}
            </span>
          )}
          <CardDescription className="mx-auto mt-4 max-w-sm text-sm text-zinc-400 leading-relaxed">
            {message || config.defaultMessage}
          </CardDescription>
        </CardHeader>

        <CardContent className="px-6 pb-6 pt-2">
          {/* Decorative Divider */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </CardContent>

        <CardFooter className="flex flex-col sm:flex-row gap-3 px-8 pb-8">
          {onRetry && (
            <Button
              onClick={onRetry}
              className="w-full sm:flex-1 bg-brand-lime text-black hover:bg-brand-lime-hover font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <RefreshCw className="mr-2 h-4 w-4 animate-spin-slow" />
              Try Again
            </Button>
          )}

          {onBack && (
            <Button
              onClick={onBack}
              variant="outline"
              className="w-full sm:flex-1 border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:bg-zinc-800 hover:text-white font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          )}

          <Button
            onClick={() => {
              if (typeof window !== "undefined") {
                window.location.href = "/dashboard";
              }
            }}
            variant={onBack || onRetry ? "ghost" : "outline"}
            className={`w-full sm:flex-1 font-medium ${
              onBack || onRetry 
                ? "text-zinc-400 hover:text-white hover:bg-zinc-800/50" 
                : "border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:bg-zinc-800 hover:text-white"
            }`}
          >
            <Home className="mr-2 h-4 w-4" />
            Return Home
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
