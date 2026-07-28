"use client";

import { useSyncExternalStore } from "react";
import {
  getRuntimeEnvironment,
  RuntimeEnvironment,
} from "@/lib/runtime-environment";

const subscribe = (onStoreChange: () => void): (() => void) => {
  const notify = () => onStoreChange();
  window.addEventListener("storage", notify);
  window.addEventListener("deepsense:environment", notify);
  return () => {
    window.removeEventListener("storage", notify);
    window.removeEventListener("deepsense:environment", notify);
  };
};

export const useRuntimeEnvironment = (): RuntimeEnvironment =>
  useSyncExternalStore(subscribe, getRuntimeEnvironment, () => "sandbox");
