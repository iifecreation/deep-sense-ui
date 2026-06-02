"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, LoaderCircle as Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import * as z from "zod";
import { authService } from "@/services/auth.service";
import { ApiError } from "@/lib/api/client";

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  async function onSubmit(data: ForgotPasswordInput) {
    setIsLoading(true);
    setError(null);

    try {
      await authService.forgotPassword(data);
      setSuccess(true);
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message || 'Failed to send reset link. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  if (success) {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
        </div>
        <h1 className="text-3xl font-bold font-heading mb-3 tracking-tight">Check Your Email</h1>
        <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">
          We have sent a password reset link to your email. Please check your inbox and spam folder.
        </p>
        <Button asChild className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90">
          <Link href="/login">Return to Login</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <div className="mb-10">
        <h1 className="text-3xl font-bold font-heading mb-3 tracking-tight">Reset Password</h1>
        <p className="text-muted-foreground text-[15px] leading-relaxed">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-2">
          <Label htmlFor="email" className="text-zinc-600 dark:text-zinc-400 font-semibold ml-0.5">
            Work Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="name@company.com"
            autoComplete="email"
            className="h-11 px-4 rounded-xl border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-[#D1F701]/20 transition-all duration-300"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-destructive mt-1 ml-0.5 font-medium animate-in fade-in slide-in-from-top-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 bg-primary dark:bg-zinc-100 text-primary-foreground dark:text-zinc-950 hover:bg-primary/90 dark:hover:bg-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-primary/10 dark:shadow-none translate-y-0 active:scale-[0.98]"
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <>
              Send Reset Link
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>

      <div className="mt-12 text-center">
        <p className="text-[15px] font-medium text-muted-foreground/80">
          Remember your password?{" "}
          <Link
            href="/login"
            className="text-primary font-bold hover:underline underline-offset-4 decoration-2 transition-all"
          >
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}
