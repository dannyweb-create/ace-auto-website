"use client";

import { Phone, MapPin } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Services from "./components/Services";
import WhyAce from "./components/WhyAce";
import BookingForm from "./components/BookingForm";
import Reviews from "./components/Reviews";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-blue-600 selection:text-white pb-20 md:pb-0">
      
      <Header />
      <Hero />
      <TrustStrip />
      <Services />
      <WhyAce />
      <BookingForm />
      <Reviews />
      <Faq />
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-900 z-50 md:hidden">
        <div className="max-w-md mx-auto flex gap-3">
          <a href="tel:+61258060362" className="flex-1 bg-blue-600 text-white py-3.5 px-4 rounded-sm font-semibold text-center flex items-center justify-center gap-2 text-sm">
            <Phone size={16} /> Call Now
          </a>
          <a href="https://maps.google.com/?cid=15055765011888962767" target="_blank" rel="noopener noreferrer" className="bg-zinc-900 border border-zinc-800 text-white py-3.5 px-4 rounded-sm font-semibold flex items-center justify-center gap-2 text-sm">
            <MapPin size={16} /> Map
          </a>
        </div>
      </div>
    </main>
  );
}