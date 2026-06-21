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
import { Shield, Mail, ArrowRight, ArrowLeft, LoaderCircle as Loader2, BadgeInfo as Info, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { authService } from "@/services/auth.service";
import { ApiError } from "@/lib/api/client";
import { AvailableCountry, AvailableService } from "@/types";

const registerSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  companyName: z.string().min(2, "Company name is required"),
  companySlug: z.string().min(3, "Company slug must be at least 3 characters").regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens"),
  country: z.string().min(2, "Country is required"),
  industry: z.string().min(2, "Industry is required"),
  services: z.array(z.string()).min(1, "At least one service must be selected"),
  email: z.string().email("Please enter a valid work email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  agree: z.literal(true, {
    message: "You must agree to the Terms of Service",
  }),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

const INDUSTRIES = [
  "Finance / Fintech",
  "E-commerce / Retail",
  "SaaS / Software",
  "Healthcare / Biotech",
  "Gaming / Entertainment",
  "Logistics / Supply Chain",
  "Cybersecurity",
  "Telecommunications",
  "Other"
];

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingData, setIsFetchingData] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState<1 | 2>(1);
  const [countries, setCountries] = useState<AvailableCountry[]>([]);
  const [services, setServices] = useState<AvailableService[]>([]);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    trigger,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      agree: false as unknown as true,
      services: [],
      country: "",
      industry: "",
    }
  });

  // Fetch countries and services dynamically on mount
  useEffect(() => {
    async function loadData() {
      try {
        const [fetchedCountries, fetchedServices] = await Promise.all([
          authService.getAvailableCountries(),
          authService.getAvailableServices(),
        ]);
        setCountries(fetchedCountries);
        setServices(fetchedServices);

        // Find default country to select (US if present, else first available)
        const hasUS = fetchedCountries.some(c => c.iso_code === "US");
        const defaultCountry = hasUS ? "US" : (fetchedCountries[0]?.iso_code || "");
        setValue("country", defaultCountry);
      } catch (err) {
        console.error("Failed to load registration lookup data:", err);
        setError("Could not load available countries or service directories from server.");
      } finally {
        setIsFetchingData(false);
      }
    }
    loadData();
  }, [setValue]);

  const handleNextStep = async () => {
    // Validate Step 1 fields before proceeding
    const isStep1Valid = await trigger([
      "fullName",
      "companyName",
      "companySlug",
      "email",
      "password",
      "country",
      "industry"
    ]);
    if (isStep1Valid) {
      setStep(2);
    }
  };

  async function onSubmit(data: RegisterFormValues) {
    setIsLoading(true);
    setError(null);

    try {
      await authService.signup({
        organization_name: data.companyName,
        organization_slug: data.companySlug,
        country: data.country,
        industry: data.industry,
        services: data.services,
        email: data.email,
        password: data.password,
        full_name: data.fullName,
      });
      router.push(`/verify-email?email=${encodeURIComponent(data.email)}&status=unverified`);
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  if (isFetchingData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] py-12">
        <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
        <p className="text-sm text-muted-foreground animate-pulse">
          Connecting to security gateway...
        </p>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-3xl font-bold font-heading tracking-tight text-foreground">
            {step === 1 ? "Create Account" : "Select Services"}
          </h1>
          <span className="text-xs font-mono font-semibold text-muted-foreground/60 bg-muted px-2.5 py-1 rounded-full border border-border/40">
            STEP {step} OF 2
          </span>
        </div>
        <p className="text-muted-foreground text-[15px] leading-relaxed">
          {step === 1
            ? "Initialize your enterprise security suite. Start your 14-day comprehensive trial today."
            : "Choose the target capabilities to activate on your cloud tenant environment."}
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <p className="text-sm text-red-800 dark:text-red-400 font-medium">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {step === 1 && (
          <div className="space-y-5 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="fullName" className="text-zinc-600 dark:text-zinc-400 font-semibold ml-0.5">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  placeholder="Elon Musk"
                  autoComplete="name"
                  className="h-11 px-4 rounded-xl border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-[#D1F701]/20 transition-all duration-300 placeholder:text-muted-foreground/40 text-sm"
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
                  className="h-11 px-4 rounded-xl border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-[#D1F701]/20 transition-all duration-300 placeholder:text-muted-foreground/40 text-sm"
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
                  className="h-11 px-4 rounded-xl border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-[#D1F701]/20 transition-all duration-300 placeholder:text-muted-foreground/40 text-sm"
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
                  className="h-11 px-4 rounded-xl border border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-[#D1F701]/20 transition-all duration-300 text-sm w-full outline-none text-foreground bg-card"
                >
                  {countries.map((c) => (
                    <option key={c.id} value={c.iso_code}>
                      {c.name} ({c.iso_code})
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <p className="text-xs text-destructive mt-1 ml-0.5 font-medium">
                    {errors.country.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="industry" className="text-zinc-600 dark:text-zinc-400 font-semibold ml-0.5">
                Industry
              </Label>
              <select
                id="industry"
                {...register("industry")}
                className="h-11 px-4 rounded-xl border border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-[#D1F701]/20 transition-all duration-300 text-sm w-full outline-none text-foreground bg-card"
              >
                <option value="">Select industry...</option>
                {INDUSTRIES.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
              {errors.industry && (
                <p className="text-xs text-destructive mt-1 ml-0.5 font-medium">
                  {errors.industry.message}
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
                className="h-11 px-4 rounded-xl border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-[#D1F701]/20 transition-all duration-300 placeholder:text-muted-foreground/40 text-sm"
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
                className="h-11 px-4 rounded-xl border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-[#D1F701]/20 transition-all duration-300 shadow-sm text-sm"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-xs text-destructive mt-1 ml-0.5 font-medium">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="pt-4">
              <Button
                type="button"
                onClick={handleNextStep}
                className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-xl transition-all duration-300 shadow-lg shadow-primary/10 translate-y-0 active:scale-[0.98] flex items-center justify-center"
              >
                Choose Target Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="grid gap-3">
              <Label className="text-zinc-600 dark:text-zinc-400 font-semibold ml-0.5">
                Available Capabilities (Select at least one)
              </Label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[320px] overflow-y-auto pr-1 no-scrollbar border border-border/40 p-2 rounded-xl bg-muted/20">
                {services.map((service) => (
                  <label
                    key={service.key}
                    className="flex items-start gap-3 p-3.5 rounded-xl border border-border bg-card hover:bg-muted/30 hover:border-zinc-300 dark:hover:border-zinc-700 cursor-pointer transition-all duration-200 select-none relative group"
                  >
                    <input
                      type="checkbox"
                      value={service.key}
                      {...register("services")}
                      className="w-4 h-4 rounded border-border mt-0.5 accent-primary text-black"
                    />
                    <div className="flex-1">
                      <span className="text-xs font-bold text-foreground block group-hover:text-primary transition-colors">
                        {service.label}
                      </span>
                      <span className="text-[10px] text-muted-foreground mt-0.5 block leading-normal font-medium">
                        {service.description}
                      </span>
                    </div>
                  </label>
                ))}
              </div>

              {errors.services && (
                <p className="text-xs text-destructive mt-1 ml-0.5 font-semibold">
                  {errors.services.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3 py-2 border-t border-border/40 pt-4">
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
                <Label htmlFor="agree" className="text-xs text-muted-foreground leading-relaxed font-medium select-none inline">
                  I acknowledge that data Processing is subject to our <Link href="/privacy" className="text-primary font-bold hover:underline underline-offset-4 inline">Privacy Framework</Link> and agree to the global <Link href="/terms" className="text-primary font-bold hover:underline underline-offset-4 inline">Terms of Infrastructure</Link>.
                </Label>
              </div>
              {errors.agree && (
                <p className="text-xs text-destructive ml-8 font-semibold animate-in fade-in slide-in-from-left-2">
                  {errors.agree.message}
                </p>
              )}
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(1)}
                className="h-12 border-border bg-zinc-900/5 hover:bg-zinc-900/10 text-foreground dark:bg-zinc-900/50 dark:hover:bg-zinc-800 font-semibold rounded-xl flex-1"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Button>

              <Button
                type="submit"
                disabled={isLoading}
                className="h-12 bg-primary dark:bg-zinc-100 text-primary-foreground dark:text-zinc-950 hover:bg-primary/90 dark:hover:bg-white font-bold rounded-xl flex-[2] transition-all duration-300 shadow-lg shadow-primary/10 dark:shadow-none translate-y-0 active:scale-[0.98]"
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
          </div>
        )}

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
