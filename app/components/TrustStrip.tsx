import { ShieldCheck, Wrench, Clock, MapPin } from "lucide-react";

export default function TrustStrip() {
  const features = [
    { icon: ShieldCheck, title: "Professional Service", desc: "Licensed & Qualified" },
    { icon: Wrench, title: "Modern Diagnostics", desc: "Accurate Fault Finding" },
    { icon: Clock, title: "Transparent Care", desc: "No Hidden Surprises" },
    { icon: MapPin, title: "Local Workshop", desc: "5 Mansour St, Dubbo" },
  ];

  return (
    <div className="border-b border-zinc-900 bg-zinc-950 relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-x divide-zinc-900">
          {features.map((feature, idx) => (
            <div key={idx} className={`flex flex-col items-center md:items-start text-center md:text-left ${idx !== 0 ? 'md:pl-8' : ''}`}>
              <feature.icon size={24} className="text-blue-600 mb-3" />
              <h3 className="text-white text-sm font-semibold mb-1">{feature.title}</h3>
              <p className="text-zinc-500 text-xs">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}