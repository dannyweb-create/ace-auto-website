import { Star } from "lucide-react";

export default function Reviews() {
  return (
    <section id="reviews" className="px-6 py-28 max-w-4xl mx-auto text-center border-b border-cyan-500/10">
      <h2 className="text-3xl font-bold text-white mb-4">Trusted By Drivers</h2>
      <p className="text-white/70 mb-12 font-light">Real experiences from customers who have chosen Ace Automotive.</p>
      <div className="bg-cyan-950/20 backdrop-blur-xl border border-cyan-500/30 p-12 rounded-3xl flex flex-col items-center shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
        <div className="flex gap-1 text-cyan-400 mb-4 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
        </div>
        <p className="text-white/80 italic mb-6 text-lg font-light">"Customer testimonials will appear here once connected to Google Reviews."</p>
        <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">Awaiting Verified Reviews</span>
      </div>
    </section>
  );
}