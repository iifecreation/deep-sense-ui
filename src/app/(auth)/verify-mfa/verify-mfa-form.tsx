"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowRight, LoaderCircle as Loader2, AlertCircle, ShieldCheck } from "lucide-react";
import { useState } from "react";
import * as z from "zod";
import { authService } from "@/services/auth.service";
import { ApiError } from "@/lib/api/client";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const verifyMfaSchema = z.object({
  code: z.string().min(6, "Verification code must be 6 digits"),
});

type VerifyMfaInput = z.infer<typeof verifyMfaSchema>;

export default function VerifyMfaForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<VerifyMfaInput>({
    resolver: zodResolver(verifyMfaSchema),
    defaultValues: { code: "" }
  });

  const codeValue = watch("code");

  async function onSubmit(data: VerifyMfaInput) {
    setIsLoading(true);
    setError(null);

    try {
      const challenge = typeof window !== 'undefined' ? localStorage.getItem('deep_sense_2fa_challenge') : null;
      await authService.verify2fa(data.code, challenge || undefined);
      if (typeof window !== 'undefined') {
        localStorage.removeItem('deep_sense_2fa_challenge');
      }
      router.push('/dashboard');
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message || 'Invalid verification code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <div className="mb-10 text-center flex flex-col items-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
          <ShieldCheck className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold font-heading mb-3 tracking-tight">Two-Factor Auth</h1>
        <p className="text-muted-foreground text-[15px] leading-relaxed">
          Please enter the 6-digit code from your authenticator app.
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col items-center gap-2">
          <Label htmlFor="code" className="sr-only">
            Verification Code
          </Label>
          <InputOTP
            maxLength={6}
            value={codeValue}
            onChange={(val) => setValue("code", val, { shouldValidate: true })}
            className="gap-2"
          >
            <InputOTPGroup className="gap-2">
              <InputOTPSlot index={0} className="w-12 h-14 text-lg font-bold rounded-md border-border" />
              <InputOTPSlot index={1} className="w-12 h-14 text-lg font-bold rounded-md border-border" />
              <InputOTPSlot index={2} className="w-12 h-14 text-lg font-bold rounded-md border-border" />
              <InputOTPSlot index={3} className="w-12 h-14 text-lg font-bold rounded-md border-border" />
              <InputOTPSlot index={4} className="w-12 h-14 text-lg font-bold rounded-md border-border" />
              <InputOTPSlot index={5} className="w-12 h-14 text-lg font-bold rounded-md border-border" />
            </InputOTPGroup>
          </InputOTP>
          {errors.code && (
            <p className="text-sm text-destructive mt-2 font-medium animate-in fade-in slide-in-from-top-1">
              {errors.code.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isLoading || codeValue?.length < 6}
          className="w-full h-12 bg-primary dark:bg-zinc-100 text-primary-foreground dark:text-zinc-950 hover:bg-primary/90 dark:hover:bg-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-primary/10 dark:shadow-none translate-y-0 active:scale-[0.98]"
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <>
              Verify Code
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
