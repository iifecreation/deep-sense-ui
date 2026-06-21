"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, LoaderCircle as Loader2, AlertCircle, Eye, EyeOff, CheckCircle2, ArrowLeft } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import * as z from "zod";
import { authService } from "@/services/auth.service";
import { ApiError } from "@/lib/api/client";

const resetPasswordSchema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;

export default function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlEmail = searchParams.get('email') || "";

  const [email, setEmail] = useState(urlEmail);
  const [pin, setPin] = useState<string[]>(Array(6).fill(""));
  const [isEditingEmail, setIsEditingEmail] = useState(!urlEmail);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (urlEmail) {
      setEmail(urlEmail);
      setIsEditingEmail(false);
    }
  }, [urlEmail]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordInput>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const handlePinChange = (value: string, index: number) => {
    const cleaned = value.replace(/\D/g, "");
    if (!cleaned) {
      const newPin = [...pin];
      newPin[index] = "";
      setPin(newPin);
      return;
    }

    const newPin = [...pin];
    if (cleaned.length > 1) {
      const digits = cleaned.split("").slice(0, 6 - index);
      for (let i = 0; i < digits.length; i++) {
        newPin[index + i] = digits[i];
      }
      setPin(newPin);
      const nextIndex = Math.min(index + digits.length, 5);
      inputRefs.current[nextIndex]?.focus();
    } else {
      newPin[index] = cleaned;
      setPin(newPin);
      if (index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      if (!pin[index] && index > 0) {
        const newPin = [...pin];
        newPin[index - 1] = "";
        setPin(newPin);
        inputRefs.current[index - 1]?.focus();
      } else {
        const newPin = [...pin];
        newPin[index] = "";
        setPin(newPin);
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pastedData) return;

    const newPin = Array(6).fill("");
    for (let i = 0; i < pastedData.length; i++) {
      newPin[i] = pastedData[i];
    }
    setPin(newPin);
    const focusIndex = Math.min(pastedData.length, 5);
    inputRefs.current[focusIndex]?.focus();
  };

  async function onSubmit(data: ResetPasswordInput) {
    setError(null);
    setSuccess(null);

    const pinString = pin.join("");
    if (!email) {
      setError("Please provide your email address.");
      return;
    }
    if (pinString.length < 6) {
      setError("Please enter the complete 6-digit reset code.");
      return;
    }

    setIsLoading(true);

    try {
      await authService.resetPassword({
        email,
        token: pinString,
        new_password: data.password,
      });
      setSuccess("Your password has been successfully reset!");
      setTimeout(() => {
        router.push('/login?reset=success');
      }, 2000);
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message || 'Failed to reset password. The code may be invalid or expired.');
    } finally {
      setIsLoading(false);
    }
  }

  if (success && !isLoading) {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
        </div>
        <h1 className="text-3xl font-bold font-heading mb-3 tracking-tight">Password Reset!</h1>
        <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">
          {success} You will be redirected to the login page momentarily.
        </p>
        <Button asChild className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90">
          <Link href="/login">Go to Login</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-heading mb-3 tracking-tight">Set New Password</h1>
        <p className="text-muted-foreground text-[15px] leading-relaxed">
          Please enter the 6-digit verification code sent to your email along with your new password.
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {isEditingEmail ? (
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-zinc-600 dark:text-zinc-400 font-semibold ml-0.5">
              Email Address
            </Label>
            <div className="flex gap-2">
              <Input
                id="email"
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 px-4 rounded-xl border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-[#D1F701]/20 transition-all duration-300 placeholder:text-muted-foreground/40"
              />
              {urlEmail && (
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => {
                    setEmail(urlEmail);
                    setIsEditingEmail(false);
                  }}
                  className="rounded-xl px-4 h-11 border-zinc-200"
                >
                  Cancel
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-xl border border-border bg-muted/20 flex items-center justify-between">
            <div className="overflow-hidden mr-2">
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Resetting password for</p>
              <p className="text-[15px] font-bold text-zinc-800 dark:text-zinc-200 mt-0.5 truncate">{email}</p>
            </div>
            <button
              type="button"
              onClick={() => setIsEditingEmail(true)}
              className="text-xs font-bold text-primary hover:underline underline-offset-2 shrink-0"
            >
              Change Email
            </button>
          </div>
        )}

        <div className="space-y-3">
          <Label className="text-zinc-600 dark:text-zinc-400 font-semibold ml-0.5 block">
            Reset PIN (6 digits)
          </Label>
          <div className="flex justify-between gap-2 sm:gap-3" onPaste={handlePaste}>
            {pin.map((digit, idx) => (
              <input
                key={idx}
                type="text"
                maxLength={1}
                value={digit}
                ref={(el) => { inputRefs.current[idx] = el; }}
                onChange={(e) => handlePinChange(e.target.value, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className="w-12 h-14 text-center text-xl font-bold rounded-xl border border-zinc-200 dark:border-zinc-800 bg-muted/30 focus:bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300"
              />
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="password" className="text-zinc-600 dark:text-zinc-400 font-semibold ml-0.5">
            New Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              className="h-11 px-4 pr-10 rounded-xl border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-[#D1F701]/20 transition-all duration-300"
              {...register("password")}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-muted-foreground" />
              ) : (
                <Eye className="h-4 w-4 text-muted-foreground" />
              )}
            </Button>
          </div>
          {errors.password && (
            <p className="text-sm text-destructive mt-1 ml-0.5 font-medium animate-in fade-in slide-in-from-top-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="confirmPassword" className="text-zinc-600 dark:text-zinc-400 font-semibold ml-0.5">
            Confirm Password
          </Label>
          <Input
            id="confirmPassword"
            type={showPassword ? "text" : "password"}
            className="h-11 px-4 rounded-xl border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-[#D1F701]/20 transition-all duration-300"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-sm text-destructive mt-1 ml-0.5 font-medium animate-in fade-in slide-in-from-top-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isLoading || pin.join("").length < 6}
          className="w-full h-12 bg-primary dark:bg-zinc-100 text-primary-foreground dark:text-zinc-950 hover:bg-primary/90 dark:hover:bg-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-primary/10 dark:shadow-none translate-y-0 active:scale-[0.98]"
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <>
              Reset Password
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>

      <div className="mt-8 text-center">
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to access control
        </Link>
      </div>
    </div>
  );
}
