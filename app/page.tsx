"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Clock, Wrench, ShieldCheck, PenTool, Star, CheckCircle2, Menu, X, ChevronDown, Award, ArrowRight } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Do I need an appointment for a logbook service?", a: "While walk-ins are welcome depending on workshop load, we recommend calling ahead to secure your spot." },
    { q: "Will servicing my car here void my new car manufacturer warranty?", a: "No! As licensed professional mechanics, our logbook services fully preserve your statutory factory warranty." },
    { q: "Where are you located in Dubbo?", a: "We are conveniently located right at 5 Mansour St, Dubbo NSW 2830." }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500 selection:text-slate-950 relative overflow-hidden pb-32">
      
      {/* Liquid Glass Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/15 blur-[160px] rounded-full pointer-events-none" />

      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-cyan-500/20 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Wrench size={20} />
          </div>
          <span className="font-extrabold tracking-wider text-lg bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
            ACE AUTO
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
          <a href="#reviews" className="hover:text-cyan-400 transition-colors">Reviews</a>
          <a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a>
        </div>

        <div className="hidden md:block">
          <a href="tel:+61258060362" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold px-5 py-2.5 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] transition-all">
            Call Now
          </a>
        </div>

        {/* Liquid Light 3 Mobile Menu Lines */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 focus:outline-none flex flex-col gap-1.5 w-11 h-11 items-center justify-center relative shadow-[0_0_15px_rgba(6,182,212,0.2)]"
        >
          <span className={`w-6 h-0.5 bg-cyan-400 rounded-full transition-transform duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-cyan-400 rounded-full transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-cyan-400 rounded-full transition-transform duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[73px] z-40 bg-slate-950/90 backdrop-blur-2xl border-b border-cyan-500/20 p-6 flex flex-col gap-4 text-center md:hidden shadow-2xl"
          >
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-200 py-2 hover:text-cyan-400">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-200 py-2 hover:text-cyan-400">About</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-200 py-2 hover:text-cyan-400">Services</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-200 py-2 hover:text-cyan-400">Reviews</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-200 py-2 hover:text-cyan-400">FAQ</a>
            <a href="tel:+61258060362" className="mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold py-3 rounded-xl shadow-lg">
              Call (02) 5806 0362
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Home / Hero Section */}
      <section id="home" className="px-6 pt-16 pb-12 text-center max-w-3xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            Dubbo&apos;s Premier Independent Auto Workshop
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight text-white">
            Precision Care For <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Your Vehicle</span>
          </h1>

          <p className="text-slate-300 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Experience next-generation mechanical transparency. Fast diagnostics, skilled craftsmanship, and premium service standards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+61258060362" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold px-8 py-4 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.7)] active:scale-95 transition-all">
              Book Service / Call Now
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-16 max-w-4xl mx-auto relative z-10">
        <div className="bg-slate-900/40 backdrop-blur-xl border border-cyan-500/20 p-8 md:p-12 rounded-3xl shadow-[0_0_40px_rgba(6,182,212,0.05)]">
          <div className="text-center md:text-left flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">About Ace Automotive</h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                Located right at 5 Mansour St in Dubbo, Ace Automotive has built its reputation on strict honesty, clear communication, and elite technical skill. We treat every vehicle like our own, ensuring absolute road safety without hidden invoice surprises.
              </p>
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="flex items-center gap-2 text-xs text-cyan-300">
                  <CheckCircle2 size={16} className="text-cyan-400" /> Fully Licensed
                </div>
                <div className="flex items-center gap-2 text-xs text-cyan-300">
                  <CheckCircle2 size={16} className="text-cyan-400" /> Advanced Tools
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 p-6 rounded-2xl text-center min-w-[200px] backdrop-blur-md">
              <Award size={36} className="text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-black text-white">5-Star</div>
              <div className="text-xs text-slate-400">Local Reputation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-16 max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Our Core Services</h2>
          <p className="text-slate-400 text-sm">Engineered for absolute performance and reliability</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 p-6 rounded-3xl hover:border-cyan-500/50 transition-all hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] group">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-white">Logbook Servicing</h3>
            <p className="text-slate-400 text-xs leading-relaxed">Official servicing that preserves your brand new car warranty safely.</p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 p-6 rounded-3xl hover:border-cyan-500/50 transition-all hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] group">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
              <PenTool size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-white">Diagnostics & Repair</h3>
            <p className="text-slate-400 text-xs leading-relaxed">State-of-the-art computer scanning to clear dashboard faults swiftly.</p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 p-6 rounded-3xl hover:border-cyan-500/50 transition-all hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] group">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
              <Wrench size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-white">Brakes & Suspension</h3>
            <p className="text-slate-400 text-xs leading-relaxed">Complete checks and replacements ensuring secure stopping power.</p>
          </div>
        </div>
      </section>

      {/* Reviews Section - 3 Circular Liquid Glass Circles in a Triangle Layout */}
      <section id="reviews" className="px-6 py-16 max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Client Reviews</h2>
        <p className="text-slate-400 text-sm mb-12">Real verified feedback from Google Maps</p>

        {/* Triangle Layout Grid */}
        <div className="flex flex-col items-center gap-8">
          {/* Top Review Circle */}
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-slate-900/60 backdrop-blur-2xl border border-cyan-500/30 p-8 flex flex-col justify-center items-center text-center shadow-[0_0_35px_rgba(6,182,212,0.15)] hover:border-cyan-400 transition-all">
            <div className="flex gap-1 text-cyan-400 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <p className="text-xs md:text-sm text-slate-200 italic mb-3 leading-relaxed">
              &quot;Fantastic service, honest mechanics, and fair pricing. Sorted out my engine issue quickly!&quot;
            </p>
            <span className="text-xs font-bold text-cyan-300">— Local Customer</span>
          </div>

          {/* Bottom Two Review Circles side by side */}
          <div className="flex flex-col md:flex-row gap-8 justify-center w-full">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-slate-900/60 backdrop-blur-2xl border border-cyan-500/30 p-8 flex flex-col justify-center items-center text-center shadow-[0_0_35px_rgba(6,182,212,0.15)] hover:border-cyan-400 transition-all mx-auto">
              <div className="flex gap-1 text-cyan-400 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-xs md:text-sm text-slate-200 italic mb-3 leading-relaxed">
                &quot;Reliable and extremely professional. Best mechanic experience in Dubbo by far.&quot;
              </p>
              <span className="text-xs font-bold text-cyan-300">— Verified Motorist</span>
            </div>

            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-slate-900/60 backdrop-blur-2xl border border-cyan-500/30 p-8 flex flex-col justify-center items-center text-center shadow-[0_0_35px_rgba(6,182,212,0.15)] hover:border-cyan-400 transition-all mx-auto">
              <div className="flex gap-1 text-cyan-400 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-xs md:text-sm text-slate-200 italic mb-3 leading-relaxed">
                &quot;Straightforward advice, no unnecessary upsells, and super fast turnaround time.&quot;
              </p>
              <span className="text-xs font-bold text-cyan-300">— Dubbo Resident</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-6 py-16 max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">Frequently Asked Questions</h2>
          <p className="text-slate-400 text-sm">Everything you need to know before booking</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-5 text-left font-semibold flex justify-between items-center text-slate-200 hover:text-cyan-400 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown size={18} className={`transition-transform duration-300 ${openFaq === index ? "rotate-180 text-cyan-400" : ""}`} />
              </button>
              {openFaq === index && (
                <div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-cyan-500/10 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Sticky Mobile Call & Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-slate-950/80 backdrop-blur-2xl border-t border-cyan-500/20 z-50 md:hidden shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <div className="max-w-md mx-auto flex gap-3">
          <a 
            href="tel:+61258060362" 
            className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 py-3.5 px-4 rounded-2xl font-extrabold text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-95 transition-all text-sm"
          >
            <Phone size={18} />
            Call Now
          </a>
          <a 
            href="https://maps.google.com/?cid=15055765011888962767" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-slate-900/80 border border-cyan-500/30 text-cyan-300 py-3.5 px-4 rounded-2xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-all text-sm backdrop-blur-md"
          >
            <MapPin size={18} />
            Map
          </a>
        </div>
      </div>

    </main>
  );
}