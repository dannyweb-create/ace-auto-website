import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-cyan-500/20 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-black tracking-widest text-lg text-white">
                ACE<span className="text-cyan-400">AUTOMOTIVE</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 font-light">
              Premium automotive servicing, diagnostics, and repairs in Dubbo. Engineered for reliability.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+61258060362" className="flex items-start gap-3 text-white/70 hover:text-cyan-300 transition-colors text-sm font-light">
                  <Phone size={18} className="shrink-0 text-cyan-400 mt-0.5" />
                  (02) 5806 0362
                </a>
              </li>
              <li>
                <a href="https://maps.google.com/?cid=15055765011888962767" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white/70 hover:text-cyan-300 transition-colors text-sm font-light">
                  <MapPin size={18} className="shrink-0 text-cyan-400 mt-0.5" />
                  <span>5 Mansour St,<br />Dubbo NSW 2830</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Business Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70 text-sm font-light">
                <Clock size={18} className="shrink-0 text-cyan-400 mt-0.5" />
                <div className="w-full flex justify-between">
                  <span>Mon - Fri</span>
                  <span className="text-white">8:00 AM - 5:00 PM</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm font-light">
                <div className="w-6 shrink-0" />
                <div className="w-full flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white/50">By Appointment</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm font-light">
                <div className="w-6 shrink-0" />
                <div className="w-full flex justify-between">
                  <span>Sunday</span>
                  <span className="text-white/50">Closed</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "Why Ace", "FAQ"].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-white/70 hover:text-cyan-300 transition-colors text-sm font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-cyan-500/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-light">
            © 2026 Ace Automotive. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-cyan-400/80 text-xs font-medium px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              Licenced Motor Vehicle Repairer
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}