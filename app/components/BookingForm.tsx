"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1500); 
  };

  return (
    <section id="booking" className="px-6 py-28 max-w-7xl mx-auto border-b border-cyan-500/10">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Secure Your Spot.</h2>
          <p className="text-white/70 mb-8 leading-relaxed font-light">
            Fill out the details below and our team will get back to you promptly to confirm your booking time and date.
          </p>
          <div className="bg-cyan-950/20 backdrop-blur-xl border border-cyan-500/30 p-8 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
            <h4 className="text-white font-semibold mb-2 text-lg">Need immediate assistance?</h4>
            <p className="text-white/70 text-sm mb-4 font-light">Call our workshop directly during business hours.</p>
            <a href="tel:+61258060362" className="inline-block text-cyan-400 font-bold text-lg hover:text-cyan-300 transition-colors drop-shadow-[0_0_10px_rgba(6,182,212,0.4)]">
              (02) 5806 0362
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="bg-cyan-950/20 backdrop-blur-2xl border border-cyan-500/30 p-8 md:p-10 rounded-3xl space-y-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">Full Name</label>
                <input required type="text" id="name" className="w-full bg-zinc-950/70 border border-cyan-500/30 rounded-2xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all shadow-inner" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">Phone Number</label>
                <input required type="tel" id="phone" className="w-full bg-zinc-950/70 border border-cyan-500/30 rounded-2xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all shadow-inner" placeholder="0400 000 000" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="vehicle" className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">Vehicle Make & Model</label>
                <input required type="text" id="vehicle" placeholder="e.g. Toyota Hilux 2019" className="w-full bg-zinc-950/70 border border-cyan-500/30 rounded-2xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all shadow-inner" />
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">Service Required</label>
                <select id="service" className="w-full bg-zinc-950/70 border border-cyan-500/30 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all shadow-inner">
                  <option value="logbook" className="bg-zinc-950 text-white">Logbook Service</option>
                  <option value="repair" className="bg-zinc-950 text-white">General Repair</option>
                  <option value="brakes" className="bg-zinc-950 text-white">Brakes & Suspension</option>
                  <option value="diagnostic" className="bg-zinc-950 text-white">Diagnostic Check</option>
                  <option value="other" className="bg-zinc-950 text-white">Other</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="notes" className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">Additional Notes (Optional)</label>
              <textarea id="notes" rows={4} placeholder="Describe any specific issues..." className="w-full bg-zinc-950/70 border border-cyan-500/30 rounded-2xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all resize-none shadow-inner"></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-4 rounded-2xl hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 disabled:opacity-70 border border-cyan-400/30"
            >
              {isSubmitting ? "SENDING REQUEST..." : "REQUEST BOOKING"}
              {!isSubmitting && <Send size={18} />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}