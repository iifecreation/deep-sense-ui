"use client";

import {
  RuntimeEnvironment,
  setRuntimeEnvironment,
} from "@/lib/runtime-environment";
import { useRuntimeEnvironment } from "@/hooks/use-runtime-environment";

export default function EnvironmentSwitcher() {
  const environment = useRuntimeEnvironment();

  const select = (next: RuntimeEnvironment) => {
    if (next === environment) return;
    setRuntimeEnvironment(next);
    window.location.reload();
  };

  return (
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
  );
}
