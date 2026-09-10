"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-zinc-950"
    >
      {/* Google Maps Real Image Background with dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh5.googleusercontent.com/p/AF1QipN3-W57k_uC1G8j5S2V2fFv5lF6Z1uX6F8Q5Yv-=w1080-k-no"
          alt="Ace Automotive Dubbo Workshop"
          fill
          priority
          className="object-cover opacity-40 scale-105 blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/80" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Liquid Glass Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-md text-cyan-200 text-xs font-medium mb-8 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Premium Automotive Servicing in Dubbo
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white leading-[1.1]">
            Precision Engineering.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              Honest Service.
            </span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl leading-relaxed font-light">
            Professional vehicle diagnostics, logbook servicing, and mechanical repairs. We treat your vehicle with exact precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#booking" 
              className="group flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-4 rounded-2xl hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 border border-cyan-400/30"
            >
              BOOK A SERVICE
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="tel:+61258060362" 
              className="flex items-center justify-center bg-cyan-950/40 backdrop-blur-xl text-white font-semibold px-8 py-4 rounded-2xl border border-cyan-500/30 hover:bg-cyan-900/40 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.37)]"
            >
              CALL ACE AUTOMOTIVE
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}