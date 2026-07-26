"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Code as Github, Mail, ArrowRight, LoaderCircle as Loader2, AlertCircle, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { loginSchema, type LoginInput } from "@/schemas";
import { authService } from "@/services/auth.service";
import { ApiError } from "@/lib/api/client";

function LoginFormContent({ redirect }: { redirect: string | null }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginInput) {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authService.login(data);

      if (response.requires_2fa) {
        if (response.challenge && typeof window !== 'undefined') {
          localStorage.setItem('deep_sense_2fa_challenge', response.challenge);
        }
        router.push('/verify-mfa');
        return;
      }

      // Redirect to intended destination or dashboard
      if (redirect) {
        router.push(decodeURIComponent(redirect));
      } else {
        router.push('/dashboard');
      }
    } catch (err) {
      const apiError = err as ApiError;
      if (apiError.statusCode === 403 && apiError.message === 'Email not verified') {
        router.push(`/verify-email?email=${encodeURIComponent(data.email)}&status=unverified`);
        return;
      }
      setError(apiError.message || 'Login failed. Please check your credentials and try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <div className="mb-10">
        <h1 className="text-3xl font-bold font-heading mb-3 tracking-tight">Welcome Back</h1>
        <p className="text-muted-foreground text-[15px] leading-relaxed">
          Enter your details to access the dashboard.
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
            className="h-11 px-4 rounded-xl border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-[#D1F701]/20 transition-all duration-300 placeholder:text-muted-foreground/40"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-destructive mt-1 ml-0.5 font-medium animate-in fade-in slide-in-from-top-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <div className="flex items-center justify-between ml-0.5">
            <Label htmlFor="password" title="Password" className="text-zinc-600 dark:text-zinc-400 font-semibold">
              Secure Password
            </Label>
            <Link
              href="/forgot-password"
              className="text-sm font-semibold text-primary/80 hover:text-primary transition-colors hover:underline underline-offset-4"
            >
              Forgot secret?
            </Link>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              className="h-11 px-4 pr-10 rounded-xl border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-[#D1F701]/20 transition-all duration-300"
              {...register("password")}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
          {errors.password && (
            <p className="text-sm text-destructive mt-1 ml-0.5 font-medium animate-in fade-in slide-in-from-top-1">
              {errors.password.message}
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
              Sign into Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>

      <div className="mt-12 text-center">
        <p className="text-[15px] font-medium text-muted-foreground/80">
          New to the platform?{" "}
          <Link
            href="/register"
            className="text-primary font-bold hover:underline underline-offset-4 decoration-2 transition-all"
          >
            Create an enterprise account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function LoginForm() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect');
  return <LoginFormContent redirect={redirect} />;
}
