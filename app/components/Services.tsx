import { Wrench, Cpu, ShieldAlert, ThermometerSnowflake, Car, BatteryCharging } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Logbook Servicing",
      desc: "Maintain your statutory factory warranty with comprehensive, manufacturer-approved logbook servicing and premium fluids.",
    },
    {
      icon: Cpu,
      title: "Advanced Diagnostics",
      desc: "State-of-the-art computer diagnostics to accurately pinpoint and resolve complex engine management and electrical faults.",
    },
    {
      icon: ShieldAlert,
      title: "Brakes & Suspension",
      desc: "Critical safety inspections, pad replacements, rotor machining, and complete suspension overhauls for optimal handling.",
    },
    {
      icon: ThermometerSnowflake,
      title: "Air Conditioning",
      desc: "Complete AC system testing, environmentally safe re-gassing, leak detection, and compressor repairs.",
    },
    {
      icon: Car,
      title: "Clutch & Transmission",
      desc: "Expert clutch replacements, gearbox servicing, and automatic transmission flushing for smooth shifting.",
    },
    {
      icon: BatteryCharging,
      title: "Auto Electrical",
      desc: "Battery testing and replacement, alternator repairs, and auxiliary lighting installations.",
    }
  ];

  return (
    <section id="services" className="px-6 py-28 max-w-7xl mx-auto border-b border-cyan-500/10">
      <div className="mb-16 md:flex md:justify-between md:items-end">
        <div className="max-w-2xl">
          <h2 className="text-sm font-bold text-cyan-400 tracking-widest uppercase mb-3 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            Engineered For <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-200">Peak Performance.</span>
          </h3>
        </div>
        <p className="text-white/70 mt-6 md:mt-0 max-w-md text-base leading-relaxed font-light">
          From routine maintenance to complex mechanical overhauls, our facility is equipped to handle your vehicle with exact precision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div 
            key={i} 
            className="group bg-cyan-950/20 hover:bg-cyan-900/30 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/50 p-8 rounded-3xl transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.37)] hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
          >
            <div className="w-14 h-14 bg-cyan-950/60 border border-cyan-500/30 rounded-2xl flex items-center justify-center mb-6 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300">
              <service.icon size={26} className="text-cyan-400 transition-colors" />
            </div>
            <h4 className="font-semibold text-xl mb-3 text-white">{service.title}</h4>
            <p className="text-white/70 text-sm leading-relaxed font-light">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}