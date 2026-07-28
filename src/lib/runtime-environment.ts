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

export const normalizeApiOrigin = (rawValue: string, variableName: string): string => {
  let parsed: URL;
  try {
    parsed = new URL(rawValue);
  } catch {
    throw new Error(`${variableName} must be an absolute HTTP(S) URL`);
  }
  if (!["http:", "https:"].includes(parsed.protocol)) {
    throw new Error(`${variableName} must use HTTP or HTTPS`);
  }
  if (parsed.hostname === "0.0.0.0") {
    throw new Error(`${variableName} cannot use 0.0.0.0 as a browser destination; use localhost or a routable host`);
  }
  if (parsed.search || parsed.hash) {
    throw new Error(`${variableName} must not contain a query string or fragment`);
  }
  const path = parsed.pathname.replace(/\/+$/, "");
  if (path && path !== "/api/v1") {
    throw new Error(`${variableName} must be an API origin or end with /api/v1`);
  }
  return parsed.origin;
};

const configuredUrl = (value: string | undefined, variableName: string): string =>
  value ? normalizeApiOrigin(value, variableName) : "";

export const getRuntimeApiUrl = (): string => {
  const sandbox =
    configuredUrl(process.env.NEXT_PUBLIC_SANDBOX_API_URL, "NEXT_PUBLIC_SANDBOX_API_URL") ||
    (process.env.NODE_ENV === "production" ? "" : "http://localhost:8000");
  const production =
    configuredUrl(process.env.NEXT_PUBLIC_PRODUCTION_API_URL, "NEXT_PUBLIC_PRODUCTION_API_URL") ||
    (process.env.NODE_ENV === "production" ? "" : "http://localhost:8000");
  const value = getRuntimeEnvironment() === "sandbox" ? sandbox : production;
  if (!value) throw new Error("The selected runtime API URL is not configured");
  return value;
};

export const getControlApiUrl = (): string => {
  const value =
    configuredUrl(process.env.NEXT_PUBLIC_CONTROL_API_URL, "NEXT_PUBLIC_CONTROL_API_URL") ||
    (process.env.NODE_ENV === "production" ? "" : "http://localhost:8000");
  if (!value) throw new Error("NEXT_PUBLIC_CONTROL_API_URL is not configured");
  return value;
};

export const tokenStorageKey = (kind: "access" | "refresh"): string =>
  `deep_sense_${getRuntimeEnvironment()}_${kind}_token`;
