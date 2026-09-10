import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function WhyAce() {
  const guarantees = [
    "Fully licensed and insured mechanics",
    "Transparent pricing with no hidden fees",
    "Premium quality parts and oils used",
    "Direct communication with the mechanic working on your car"
  ];

  return (
    <section id="why-ace" className="px-6 py-28 max-w-7xl mx-auto border-b border-cyan-500/10 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm font-bold text-cyan-400 tracking-widest uppercase mb-3 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">The Ace Standard</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            We don't just fix cars. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">We engineer reliability.</span>
          </h3>
          <p className="text-white/80 text-lg mb-8 leading-relaxed font-light">
            At Ace Automotive, we understand that your vehicle is essential to your daily life. Our approach strips away the typical workshop runaround, providing you with honest diagnostics, commercial-grade servicing, and absolute transparency.
          </p>
          
          <ul className="space-y-4 mb-10">
            {guarantees.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 size={22} className="text-cyan-400 shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                <span className="text-white/90 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Real Google Maps Image with Curved Liquid Glass Frame */}
        <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)] bg-cyan-950/30 backdrop-blur-xl">
          <Image
            src="https://lh5.googleusercontent.com/p/AF1QipN3-W57k_uC1G8j5S2V2fFv5lF6Z1uX6F8Q5Yv-=w1080-k-no"
            alt="Ace Automotive Workshop Dubbo"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-zinc-950/60 backdrop-blur-md border border-cyan-500/30 text-white text-xs font-semibold tracking-wider uppercase text-center">
            5 Mansour St, Dubbo NSW 2830
          </div>
        </div>
      </div>
    </section>
  );
}