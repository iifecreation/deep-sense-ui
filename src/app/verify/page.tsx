import type { Metadata } from "next";
import { Suspense } from "react";
import { ApplicantVerification } from "./ApplicantVerification";

export const metadata: Metadata = {
  title: "Verify your identity",
  robots: { index: false, follow: false },
  // The URL carries a one-time code until it is exchanged; never leak it via Referer.
  referrer: "no-referrer",
};

export default function VerifyPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-slate-900 flex justify-center px-4 py-10">
      <div className="w-full max-w-xl">
        <Suspense fallback={<div className="h-40 rounded-3xl bg-white border animate-pulse" />}>
          <ApplicantVerification />
        </Suspense>
      </div>
    </main>
  );
}
