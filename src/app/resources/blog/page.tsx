"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  Search, 
  ArrowRight, 
  Clock, 
  Tag, 
  Calendar, 
  TrendingUp,
  Newspaper,
  ChevronRight
} from "lucide-react";

const blogCategories = [
  "All",
  "Fraud Detection",
  "Fintech Security",
  "Payment Fraud",
  "Account Security",
  "AI & Risk"
];

const blogPosts = [
  {
    title: "The Evolution of Account Takeover: Detection Strategies",
    excerpt: "Learn how sophisticated fraud rings are bypassing traditional MFA and what you can do to protect your users in real-time.",
    category: "Account Security",
    date: "March 28, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Scaling Risk Intelligence for High-Growth Fintechs",
    excerpt: "As your transaction volume doubles, your fraud risk grows exponentially. Here is the blueprint for scaling securely.",
    category: "Fintech Security",
    date: "March 22, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop"
  },
  {
    title: "Machine Learning vs. Static Rules: The New Standard",
    excerpt: "Why static rules are the biggest bottleneck for modern fraud teams and how to transition to predictive modeling.",
    category: "AI & Risk",
    date: "March 15, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop"
  }
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 1. 🔥 HERO */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[1100px] mx-auto relative z-10 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <Newspaper className="w-3.5 h-3.5" />
               Deep Sense Insights
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Risk <br />
               <span className="text-zinc-300 italic">Intelligence.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[800px] mx-auto mb-14">
                Stay updated with the latest trends, strategies, and insights in fraud detection, financial security, and predictive risk management.
             </p>
          </div>
        </section>

        {/* 2. 🧠 FEATURED POST */}
        <section className="max-w-[1440px] mx-auto px-8 mb-40">
           <div className="bg-neutral-900 rounded-[80px] p-12 lg:p-24 relative overflow-hidden group border border-white/5 shadow-3xl flex flex-col lg:row gap-16 items-center">
              <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
              <div className="w-full lg:w-1/2 relative z-10">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-lime text-neutral-900 rounded-full text-[10px] font-bold uppercase tracking-widest mb-10">
                   Featured Post
                 </div>
                 <h2 className="text-4xl lg:text-7xl font-bold text-white tracking-tighter italic uppercase leading-none mb-10">Detecting Fraud <br />in the Age of AI.</h2>
                 <p className="text-white/50 text-xl font-inter italic leading-relaxed mb-12">How generative models are being weaponized for social engineering and the defensive posture required to stay ahead.</p>
                 <div className="flex items-center gap-10 text-white/30 text-xs font-bold uppercase tracking-widest mb-14">
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 15 MIN READ</span>
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> APRIL 1, 2026</span>
                 </div>
                 <button className="px-10 py-5 bg-white text-neutral-900 rounded-full font-bold text-lg hover:bg-brand-lime transition-all flex items-center gap-3">
                   Read Full Article
                   <ChevronRight className="w-5 h-5" />
                 </button>
              </div>
              <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] rounded-[60px] overflow-hidden group-hover:scale-[1.02] transition-transform duration-1000">
                 <img 
                   src="https://images.unsplash.com/photo-1558494949-ef0109404d45?q=80&w=2684&auto=format&fit=crop" 
                   alt="Featured Blog" 
                   className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-1000"
                 />
                 <div className="absolute inset-0 bg-neutral-900/40 mix-blend-overlay" />
              </div>
           </div>
        </section>

        {/* 3. 🗂️ CATEGORIES + 📄 BLOG LIST */}
        <section className="max-w-[1440px] mx-auto px-8 mb-40">
           <div className="flex flex-col md:row justify-between items-end mb-24 gap-12">
              <div className="space-y-6">
                 <h3 className="text-5xl font-bold italic uppercase tracking-tighter text-neutral-900">Latest Insights.</h3>
                 <div className="flex flex-wrap gap-4">
                    {blogCategories.map((cat, i) => (
                      <button 
                        key={i} 
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${
                          activeCategory === cat ? "bg-neutral-900 text-brand-lime border-neutral-900" : "bg-white text-zinc-400 border-gray-100 hover:border-zinc-300"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                 </div>
              </div>
              <div className="relative w-full max-w-[400px]">
                 <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                 <input 
                   type="text" 
                   placeholder="Search articles..."
                   className="w-full pl-14 pr-8 py-5 bg-zinc-50 border border-gray-100 rounded-full text-sm font-bold focus:outline-none focus:ring-2 focus:ring-brand-lime/20 transition-all italic"
                 />
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {blogPosts.map((post, i) => (
                <div key={i} className="group cursor-pointer">
                   <div className="relative h-[350px] rounded-[56px] overflow-hidden mb-10 shadow-sm group-hover:shadow-3xl transition-all duration-700">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                      />
                      <div className="absolute top-8 right-8 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-900 shadow-xl">
                        {post.category}
                      </div>
                   </div>
                   <div className="space-y-6 px-4">
                      <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-300">
                         <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</span>
                         <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
                      </div>
                      <h4 className="text-2xl font-bold italic uppercase tracking-tight group-hover:text-brand-lime transition-colors leading-tight italic">{post.title}</h4>
                      <p className="text-sm text-zinc-400 font-inter leading-relaxed italic">{post.excerpt}</p>
                      <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-neutral-900 group-hover:gap-6 transition-all italic">
                        Read Story <ArrowRight className="w-4 h-4 text-brand-lime" />
                      </button>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* 6. 📣 CTA */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 text-center italic">
           <div className="bg-neutral-900 rounded-[80px] p-12 md:p-32 relative overflow-hidden group border border-white/10 shadow-3xl">
              <div className="absolute inset-0 bg-brand-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              <div className="relative z-10 space-y-12">
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase text-white font-manrope">Stop Fraud <br /><span className="text-white/20">Faster.</span></h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-manrope italic text-white italic">Learn how Deep Sense can protect your ecosystem from sophisticated bad actors.</p>
                 <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl font-manrope">
                      Request Demo
                    </button>
                    <button className="px-14 py-7 bg-white text-neutral-900 border border-transparent rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl active:scale-95 font-manrope">
                      Talk to Sales
                    </button>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}
