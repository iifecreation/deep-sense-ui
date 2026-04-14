"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Code as Github, Mail, ArrowRight, LoaderCircle as Loader2 } from "lucide-react";
import { useState } from "react";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid work email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginFormValues) {
    setIsLoading(true);
    // Simulate API call
    console.log("Login attempt:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <div className="mb-10">
        <h1 className="text-3xl font-bold font-heading mb-3 tracking-tight">Access Control</h1>
        <p className="text-muted-foreground text-[15px] leading-relaxed">
          Log in with your enterprise credentials to manage your fraud prevention infrastructure.
        </p>
      </div>

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
          <Input
            id="password"
            type="password"
            autoComplete="current-password"
            className="h-11 px-4 rounded-xl border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-[#D1F701]/20 transition-all duration-300"
            {...register("password")}
          />
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

        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-[0.2em]">
            <span className="bg-background px-4 text-muted-foreground/60">
              Enterprise SSO
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" type="button" className="h-11 rounded-xl border-border hover:bg-muted font-bold transition-all duration-300 group">
            <Github className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
            GitHub
          </Button>
          <Button variant="outline" type="button" className="h-11 rounded-xl border-border hover:bg-muted font-bold transition-all duration-300 group">
            <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
            Google
          </Button>
        </div>
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
