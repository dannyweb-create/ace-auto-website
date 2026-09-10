"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Do I need an appointment for a logbook service?", a: "While walk-ins are welcome depending on workshop load, we recommend calling ahead to secure your spot." },
    { q: "Will servicing my car here void my new car manufacturer warranty?", a: "No! As licensed professional mechanics, our logbook services fully preserve your statutory factory warranty." },
    { q: "Where are you located in Dubbo?", a: "We are conveniently located right at 5 Mansour St, Dubbo NSW 2830." }
  ];

  return (
    <section id="faq" className="px-6 py-28 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        <p className="text-white/70 font-light">Everything you need to know about our services.</p>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-cyan-950/20 backdrop-blur-xl border border-cyan-500/30 rounded-3xl overflow-hidden transition-all hover:border-cyan-400/50 shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
            <button 
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              className="w-full p-6 text-left font-medium flex justify-between items-center text-white hover:text-cyan-300 transition-colors"
            >
              <span>{faq.q}</span>
              <ChevronDown size={18} className={`transition-transform duration-300 ${openFaq === index ? "rotate-180 text-cyan-400" : "text-white/50"}`} />
            </button>
            {openFaq === index && (
              <div className="px-6 pb-6 text-sm text-white/70 leading-relaxed border-t border-cyan-500/20 pt-4 font-light">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}