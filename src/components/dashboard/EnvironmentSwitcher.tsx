"use client";

import { useState } from "react";
import {
  RuntimeEnvironment,
  setRuntimeEnvironment,
} from "@/lib/runtime-environment";
import { useRuntimeEnvironment } from "@/hooks/use-runtime-environment";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function EnvironmentSwitcher() {
  const environment = useRuntimeEnvironment();
  const [showModal, setShowModal] = useState(false);

  const select = (next: RuntimeEnvironment) => {
    if (next === environment) return;

    if (next === "production") {
      const prodToken = localStorage.getItem("deep_sense_production_access_token");
      if (!prodToken) {
        setShowModal(true);
        return;
      }
    }

    setRuntimeEnvironment(next);
    window.location.reload();
  };

  return (
    <>
      <div
        aria-label="Runtime environment"
        className="flex items-center rounded-lg border border-slate-200 bg-slate-100 p-1"
      >
        {(["sandbox", "production"] as const).map((value) => (
          <button
            key={value}
            type="button"
            aria-pressed={environment === value}
            onClick={() => select(value)}
            className={`rounded-md px-3 py-1.5 text-xs font-bold capitalize transition ${
              environment === value
                ? value === "sandbox"
                  ? "bg-amber-100 text-amber-900 shadow-sm"
                  : "bg-emerald-700 text-white shadow-sm"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            {value}
          </button>
        ))}
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Production Access Required</DialogTitle>
            <DialogDescription>
              Production access is not yet enabled for this workspace. To switch to the production environment and process real traffic, you must first complete the production access application.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-slate-600">
              Please go to <strong className="font-semibold text-slate-900">Settings</strong> &gt; <strong className="font-semibold text-slate-900">Production Access</strong> in your sandbox dashboard to submit your application.
            </p>
          </div>
          <DialogFooter>
            <Button onClick={() => setShowModal(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
