import { Toaster } from "@/components/ui/sonner";

export default function VerificationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster richColors position="top-right" />
    </>
  );
}
