import Navbar from "@/components/landing-page/Navbar";
import Hero from "@/components/landing-page/Hero";
import TrustedBy from "@/components/landing-page/TrustedBy";
import HowItWorks from "@/components/landing-page/HowItWorks";
import Features from "@/components/landing-page/Features";
import FAQ from "@/components/landing-page/FAQ";
import InternationalTransfers from "@/components/landing-page/InternationalTransfers";
import BottomCTA from "@/components/landing-page/BottomCTA";
import Footer from "@/components/landing-page/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        <Hero />
        <TrustedBy />
        <HowItWorks />
        <Features />
        <FAQ />
        <InternationalTransfers />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
