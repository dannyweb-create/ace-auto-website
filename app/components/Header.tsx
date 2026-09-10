"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/80 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-black tracking-widest text-lg text-white">
            ACE<span className="text-cyan-400">AUTOMOTIVE</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Services", "About", "Why Ace", "FAQ"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium text-white/70 hover:text-cyan-300 transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+61258060362"
            className="flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
          >
            <Phone size={16} className="text-cyan-400" />
            (02) 5806 0362
          </a>
          <Link
            href="#booking"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-2xl hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 border border-cyan-400/30"
          >
            BOOK A SERVICE
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white/80 hover:text-white bg-cyan-950/50 p-2 rounded-xl border border-cyan-500/20"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-4 right-4 bg-zinc-950/90 backdrop-blur-2xl border border-cyan-500/30 rounded-3xl p-6 md:hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            <div className="flex flex-col gap-4">
              {["Home", "Services", "About", "Why Ace", "FAQ"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-white/80 hover:text-cyan-400 transition-colors py-1"
                >
                  {item}
                </Link>
              ))}
              <div className="h-px w-full bg-cyan-500/20 my-2" />
              <a
                href="tel:+61258060362"
                className="flex items-center justify-center gap-2 bg-cyan-950/60 text-white text-sm font-semibold px-5 py-3.5 rounded-2xl border border-cyan-500/30"
              >
                <Phone size={16} className="text-cyan-400" />
                CALL NOW
              </a>
              <Link
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold px-5 py-3.5 rounded-2xl shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                BOOK A SERVICE
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}