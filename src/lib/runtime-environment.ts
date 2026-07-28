export type RuntimeEnvironment = "sandbox" | "production";

const ENVIRONMENT_KEY = "deep_sense_runtime_environment";

export const getRuntimeEnvironment = (): RuntimeEnvironment => {
  if (typeof window === "undefined") return "sandbox";
  return localStorage.getItem(ENVIRONMENT_KEY) === "production" ? "production" : "sandbox";
};

export const setRuntimeEnvironment = (environment: RuntimeEnvironment): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem(ENVIRONMENT_KEY, environment);
  window.dispatchEvent(new CustomEvent("deepsense:environment", { detail: environment }));
};

export const getRuntimeApiUrl = (): string => {
  const sandbox =
    process.env.NEXT_PUBLIC_SANDBOX_API_URL ||
    (process.env.NODE_ENV === "production" ? "" : "http://localhost:8001");
  const production =
    process.env.NEXT_PUBLIC_PRODUCTION_API_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    (process.env.NODE_ENV === "production" ? "" : "http://localhost:8002");
  const value = getRuntimeEnvironment() === "sandbox" ? sandbox : production;
  if (!value) throw new Error("The selected runtime API URL is not configured");
  return value.replace(/\/$/, "");
};

export const getControlApiUrl = (): string => {
  const value =
    process.env.NEXT_PUBLIC_CONTROL_API_URL ||
    (process.env.NODE_ENV === "production" ? "" : "http://localhost:8000");
  if (!value) throw new Error("NEXT_PUBLIC_CONTROL_API_URL is not configured");
  return value.replace(/\/$/, "");
};

export const tokenStorageKey = (kind: "access" | "refresh"): string =>
  `deep_sense_${getRuntimeEnvironment()}_${kind}_token`;
