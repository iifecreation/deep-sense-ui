import Navbar from "@/components/landing-page/Navbar";
import Hero from "@/components/landing-page/Hero";
import Problem from "@/components/landing-page/Problem";
import Solution from "@/components/landing-page/Solution";
import HowItWorks from "@/components/landing-page/HowItWorks";
import Features from "@/components/landing-page/Features";
import DashboardPreview from "@/components/landing-page/DashboardPreview";
import UseCases from "@/components/landing-page/UseCases";
import SecurityTrust from "@/components/landing-page/SecurityTrust";
import Performance from "@/components/landing-page/Performance";
import TrustedBy from "@/components/landing-page/TrustedBy";
import CTASection from "@/components/landing-page/CTASection";
import FAQ from "@/components/landing-page/FAQ";
import BottomCTA from "@/components/landing-page/BottomCTA";
import Footer from "@/components/landing-page/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <DashboardPreview />
        <UseCases />
        <SecurityTrust />
        <Performance />
        <TrustedBy />
        <CTASection />
        <FAQ />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
