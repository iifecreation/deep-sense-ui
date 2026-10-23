"use client";

import React, { useState } from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  CheckCircle2, 
  Send,
  Loader2,
} from "lucide-react";
import { useContentPage } from "@/hooks";
import { contentService } from "@/services/content.service";
import { bodyParagraphs, plainText } from "@/lib/text/body-paragraphs";

export default function ContactPage() {
  // CMS copy is optional: the form must work even when no "contact" page has been published.
  const { data: pageData } = useContentPage("contact");
  const intro = bodyParagraphs(pageData?.body);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    size: "Startup",
    useCase: "Banking",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    try {
      // The API takes {name, email, company, subject, message}; fold the extra fields in.
      const details = [
        formData.title && `Role: ${formData.title}`,
        formData.size && `Company size: ${formData.size}`,
        formData.useCase && `Use case: ${formData.useCase}`,
      ].filter(Boolean);
      await contentService.submitContact({
        name: formData.name,
        email: formData.email,
        company: formData.company || null,
        subject: formData.useCase ? `Contact: ${formData.useCase}` : "Contact: general inquiry",
        message: details.length ? `${formData.message}\n\n${details.join("\n")}` : formData.message,
      });
      setIsSubmitted(true);
    } catch (err: unknown) {
      console.error("Failed to submit contact form:", err);
      setSubmitError(err instanceof Error && err.message ? err.message : "Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-lime/5 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[850px] mx-auto relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               Get in Touch
             </div>
             <h1 className="text-6xl lg:text-[100px] font-bold leading-[0.9] mb-10 tracking-tight text-neutral-900 uppercase italic">
               {plainText(pageData?.title) || "Talk to DeepSense"}
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[650px] mx-auto">
               {plainText(pageData?.excerpt) || "Tell us about your institution and we'll set up a walkthrough of verification, screening and monitoring for your use case."}
             </p>
          </div>
        </section>

        {/* 📩 CONTACT FORM (CORE SECTION) */}
        <section className="py-24 bg-zinc-50 border-y border-gray-100 relative">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-start relative z-10">
              <div className="space-y-12 h-full flex flex-col justify-center">
                 <h2 className="text-4xl lg:text-7xl font-bold font-manrope uppercase italic tracking-tighter leading-tight underline decoration-brand-lime decoration-8 underline-offset-16">Request a Demo.</h2>
                 
                 {intro.length > 0 && (
                   <div className="prose prose-lg">
                     {intro.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                   </div>
                 )}
              </div>

              <div className="relative">
                 <div className="absolute inset-0 bg-brand-lime/10 blur-[120px] rounded-full pointer-events-none" />
                 <div className="bg-white rounded-[72px] p-12 lg:p-20 shadow-3xl border border-gray-100 relative">
                    {isSubmitted ? (
                      <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                         <div className="w-24 h-24 bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl">
                            <CheckCircle2 className="w-12 h-12 text-neutral-900" />
                         </div>
                         <h3 className="text-4xl font-bold italic uppercase tracking-tight mb-8">Request Received!</h3>
                         <p className="text-lg text-zinc-400 font-inter max-w-[350px] mx-auto italic leading-relaxed">Our team will review your request and reach out within 24–48 hours to schedule your demo.</p>
                         <button 
                          onClick={() => setIsSubmitted(false)}
                          className="mt-12 text-zinc-300 hover:text-neutral-900 font-bold uppercase text-[10px] tracking-widest decoration-1 hover:underline"
                        >
                          Send Another Message
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-10 group/form">
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            <div className="space-y-4">
                               <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 px-4">Full Name</label>
                               <input 
                                required
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Jane Cooper" 
                                className="w-full px-8 py-6 bg-gray-50 border border-gray-100 rounded-3xl outline-none focus:ring-2 focus:ring-brand-lime transition-all font-inter text-sm"
                               />
                            </div>
                            <div className="space-y-4">
                               <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 px-4">Work Email</label>
                               <input 
                                required
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="jane@company.com" 
                                className="w-full px-8 py-6 bg-gray-50 border border-gray-100 rounded-3xl outline-none focus:ring-2 focus:ring-brand-lime transition-all font-inter text-sm"
                               />
                            </div>
                         </div>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            <div className="space-y-4">
                               <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 px-4">Company Name</label>
                               <input 
                                required
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Acme Inc." 
                                className="w-full px-8 py-6 bg-gray-50 border border-gray-100 rounded-3xl outline-none focus:ring-2 focus:ring-brand-lime transition-all font-inter text-sm"
                               />
                            </div>
                            <div className="space-y-4">
                               <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 px-4">Job Title</label>
                               <input 
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="VP of Fraud Operations" 
                                className="w-full px-8 py-6 bg-gray-50 border border-gray-100 rounded-3xl outline-none focus:ring-2 focus:ring-brand-lime transition-all font-inter text-sm"
                               />
                            </div>
                         </div>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            <div className="space-y-4">
                               <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 px-4">Company Size</label>
                               <select 
                                name="size"
                                value={formData.size}
                                onChange={handleChange}
                                className="w-full px-8 py-6 bg-gray-50 border border-gray-100 rounded-3xl outline-none focus:ring-2 focus:ring-brand-lime transition-all font-inter text-sm appearance-none cursor-pointer"
                               >
                                  <option>Startup</option>
                                  <option>Growth Stage</option>
                                  <option>Enterprise</option>
                               </select>
                            </div>
                            <div className="space-y-4">
                               <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 px-4">Use Case</label>
                               <select 
                                name="useCase"
                                value={formData.useCase}
                                onChange={handleChange}
                                className="w-full px-8 py-6 bg-gray-50 border border-gray-100 rounded-3xl outline-none focus:ring-2 focus:ring-brand-lime transition-all font-inter text-sm appearance-none cursor-pointer"
                               >
                                  <option>Banking</option>
                                  <option>Fintech Platform</option>
                                  <option>Payment Provider</option>
                                  <option>E-commerce</option>
                                  <option>Other</option>
                               </select>
                            </div>
                         </div>
                         <div className="space-y-4">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 px-4">Message (Optional)</label>
                            <textarea 
                             name="message"
                             value={formData.message}
                             onChange={handleChange}
                             placeholder="How can we help you today?" 
                             rows={4}
                             className="w-full px-8 py-6 bg-gray-50 border border-gray-100 rounded-3xl outline-none focus:ring-2 focus:ring-brand-lime transition-all font-inter text-sm resize-none"
                            ></textarea>
                         </div>
                         
                         {submitError && (
                           <div className="text-red-500 text-sm font-bold text-center px-4">
                             {submitError}
                           </div>
                         )}
                         
                         <button 
                          disabled={isSubmitting}
                          className="w-full py-8 bg-neutral-900 text-white rounded-full font-bold text-xl hover:bg-brand-lime hover:text-neutral-900 transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-4 group disabled:opacity-50"
                         >
                            {isSubmitting ? (
                              <Loader2 className="w-6 h-6 animate-spin" />
                            ) : (
                              <>
                                Request Demo
                                <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                              </>
                            )}
                         </button>
                         <p className="text-center text-zinc-300 font-bold uppercase text-[9px] tracking-widest px-8 leading-relaxed italic">By submitting, you agree to our privacy policy and data handling standards.</p>
                      </form>
                    )}
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
