"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, Code as Github, Mail, ArrowRight, LoaderCircle as Loader2, BadgeInfo as Info, AlertCircle } from "lucide-react";
import { useState } from "react";
import { signupSchema, type SignupInput } from "@/schemas";
import { authService } from "@/services/auth.service";
import { ApiError } from "@/lib/api/client";

const registerSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  companyName: z.string().min(2, "Company name is required"),
  companySlug: z.string().min(3, "Company slug must be at least 3 characters").regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens"),
  country: z.string().min(2, "Country is required"),
  services: z.array(z.string()).min(1, "At least one service must be selected"),
  email: z.string().email("Please enter a valid work email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  agree: z.literal(true, {
    message: "You must agree to the Terms of Service",
  }),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      agree: false as unknown as true,
      services: [],
      country: 'US',
    }
  });

  async function onSubmit(data: RegisterFormValues) {
    setIsLoading(true);
    setError(null);

    try {
      const signupData: SignupInput = {
        organization_name: data.companyName,
        organization_slug: data.companySlug,
        country: data.country,
        services: data.services,
        email: data.email,
        password: data.password,
        full_name: data.fullName,
      };

      await authService.signup(signupData);
      router.push('/dashboard');
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <div className="mb-10">
        <h1 className="text-3xl font-bold font-heading mb-3 tracking-tight text-foreground">Create Account</h1>
        <p className="text-muted-foreground text-[15px] leading-relaxed">
          Initialize your enterprise security suite. Start your 14-day comprehensive trial today.
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           <div className="grid gap-2">
            <Label htmlFor="fullName" className="text-zinc-600 dark:text-zinc-400 font-semibold ml-0.5">
              Full Name
            </Label>
            <Input
              id="fullName"
              placeholder="Elon Musk"
              autoComplete="name"
              className="h-11 px-4 rounded-xl border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-[#D1F701]/20 transition-all duration-300 placeholder:text-muted-foreground/40"
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className="text-xs text-destructive mt-1 ml-0.5 font-medium">
                {errors.fullName.message}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="companyName" className="text-zinc-600 dark:text-zinc-400 font-semibold ml-0.5">
              Enterprise
            </Label>
            <Input
              id="companyName"
              placeholder="DeepMind"
              autoComplete="organization"
              className="h-11 px-4 rounded-xl border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-[#D1F701]/20 transition-all duration-300 placeholder:text-muted-foreground/40"
              {...register("companyName")}
            />
            {errors.companyName && (
              <p className="text-xs text-destructive mt-1 ml-0.5 font-medium">
                {errors.companyName.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="companySlug" className="text-zinc-600 dark:text-zinc-400 font-semibold ml-0.5">
              Organization Slug
            </Label>
            <Input
              id="companySlug"
              placeholder="deepmind"
              autoComplete="organization-slug"
              className="h-11 px-4 rounded-xl border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-[#D1F701]/20 transition-all duration-300 placeholder:text-muted-foreground/40"
              {...register("companySlug")}
            />
            {errors.companySlug && (
              <p className="text-xs text-destructive mt-1 ml-0.5 font-medium">
                {errors.companySlug.message}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="country" className="text-zinc-600 dark:text-zinc-400 font-semibold ml-0.5">
              Country
            </Label>
            <select
              id="country"
              {...register("country")}
              className="h-11 px-4 rounded-xl border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-[#D1F701]/20 transition-all duration-300 text-sm"
            >
              <option value="US">United States</option>
              <option value="GB">United Kingdom</option>
              <option value="CA">Canada</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
              <option value="AU">Australia</option>
              <option value="SG">Singapore</option>
              <option value="JP">Japan</option>
            </select>
            {errors.country && (
              <p className="text-xs text-destructive mt-1 ml-0.5 font-medium">
                {errors.country.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-2">
          <Label className="text-zinc-600 dark:text-zinc-400 font-semibold ml-0.5">
            Services (select at least one)
          </Label>
          <div className="grid grid-cols-2 gap-3">
            {['fraud_detection', 'aml', 'screening', 'risk_assessment'].map((service) => (
              <label key={service} className="flex items-center gap-2 p-3 rounded-lg border border-border bg-muted/30 hover:bg-muted/50 cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  value={service}
                  {...register("services")}
                  className="w-4 h-4 rounded border-border"
                />
                <span className="text-sm font-medium capitalize">{service.replace('_', ' ')}</span>
              </label>
            ))}
          </div>
          {errors.services && (
            <p className="text-xs text-destructive mt-1 ml-0.5 font-medium">
              {errors.services.message}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email" className="text-zinc-600 dark:text-zinc-400 font-semibold ml-0.5">
            Work Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@acme.com"
            autoComplete="email"
            className="h-11 px-4 rounded-xl border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-[#D1F701]/20 transition-all duration-300 placeholder:text-muted-foreground/40"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-destructive mt-1 ml-0.5 font-medium">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="password" title="Password" className="text-zinc-600 dark:text-zinc-400 font-semibold ml-0.5">
            Create Password
          </Label>
          <Input
            id="password"
            type="password"
            autoComplete="new-password"
            className="h-11 px-4 rounded-xl border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-[#D1F701]/20 transition-all duration-300 shadow-sm"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-xs text-destructive mt-1 ml-0.5 font-medium">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3 py-2">
            <div className="flex items-start gap-3">
                <Controller
                    name="agree"
                    control={control}
                    render={({ field }) => (
                        <Checkbox 
                            id="agree" 
                            className="mt-1 border-border ring-offset-background"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                        />
                    )}
                />
                <Label htmlFor="agree" className="text-xs text-muted-foreground leading-relaxed font-medium select-none">
                    I acknowledge that data Processing is subject to our <Link href="/privacy" className="text-primary font-bold hover:underline underline-offset-4">Privacy Framework</Link> and agree to the global <Link href="/terms" className="text-primary font-bold hover:underline underline-offset-4">Terms of Infrastructure</Link>.
                </Label>
            </div>
            {errors.agree && (
              <p className="text-xs text-destructive ml-8 font-semibold animate-in fade-in slide-in-from-left-2">
                {errors.agree.message}
              </p>
            )}
        </div>

        <div className="pt-2">
            <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full h-12 bg-primary dark:bg-zinc-100 text-primary-foreground dark:text-zinc-950 hover:bg-primary/90 dark:hover:bg-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-primary/10 dark:shadow-none translate-y-0 active:scale-[0.98]"
            >
                {isLoading ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                    <>
                    Initialize Cloud Environment
                    <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                )}
            </Button>
        </div>

        <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg border border-border/50 text-[10px] text-muted-foreground/80 font-medium">
            <Info className="w-3 h-3 shrink-0 mt-0.5 text-blue-400" />
            <span>Registration automatically creates a secure tenant on our US-East region by default. You can modify this in compliance settings later.</span>
        </div>
      </form>

      <div className="mt-10 text-center">
        <p className="text-[15px] font-medium text-muted-foreground/80">
          Existing infrastructure?{" "}
          <Link 
            href="/login" 
            className="text-primary font-bold hover:underline underline-offset-4 decoration-2 transition-all"
          >
            Access Console
          </Link>
        </p>
      </div>
    </div>
  );
}
