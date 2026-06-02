"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, LoaderCircle as Loader2, AlertCircle, Eye, EyeOff } from "lucide-react";
import { useState, useEffect } from "react";
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

function ResetPasswordFormContent() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordInput>({
    resolver: zodResolver(resetPasswordSchema),
  });

  useEffect(() => {
    if (!token) {
      setError("Invalid or missing reset token. Please request a new password reset link.");
    }
  }, [token]);

  async function onSubmit(data: ResetPasswordInput) {
    if (!token) return;
    
    setIsLoading(true);
    setError(null);

    try {
      await authService.resetPassword({ token, new_password: data.password });
      router.push('/login?reset=success');
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message || 'Failed to reset password. The link might be expired.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <div className="mb-10">
        <h1 className="text-3xl font-bold font-heading mb-3 tracking-tight">Set New Password</h1>
        <p className="text-muted-foreground text-[15px] leading-relaxed">
          Please enter your new password below.
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
          <Label htmlFor="password" className="text-zinc-600 dark:text-zinc-400 font-semibold ml-0.5">
            New Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              className="h-11 px-4 pr-10 rounded-xl border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-[#D1F701]/20 transition-all duration-300"
              {...register("password")}
              disabled={!token}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
              disabled={!token}
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
          <div className="relative">
            <Input
              id="confirmPassword"
              type={showPassword ? "text" : "password"}
              className="h-11 px-4 pr-10 rounded-xl border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-[#D1F701]/20 transition-all duration-300"
              {...register("confirmPassword")}
              disabled={!token}
            />
          </div>
          {errors.confirmPassword && (
            <p className="text-sm text-destructive mt-1 ml-0.5 font-medium animate-in fade-in slide-in-from-top-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isLoading || !token}
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
    </div>
  );
}

export default function ResetPasswordForm() {
  return <ResetPasswordFormContent />;
}
