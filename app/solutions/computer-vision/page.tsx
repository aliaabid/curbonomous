import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Computer Vision Infrastructure for Cities | AI Urban Sensing — Curbonomous",
  description: "Enterprise computer vision infrastructure for smart cities, airports, and autonomous vehicle deployments. Edge-AI cameras with real-time urban sensing, vehicle detection, and 99.4% accuracy.",
  keywords: ["computer vision infrastructure", "computer vision smart city", "urban computer vision", "AI computer vision cities", "edge AI urban", "computer vision platform"],
};

const CAPABILITIES = [
  { title: "Vehicle Classification", desc: "Identify vehicle type, make, model, color, and license plate in real time. Distinguish autonomous vehicles, delivery robots, drones, and standard vehicles.", color: "#00d4ff" },
  { title: "Dwell Time Measurement", desc: "Millisecond-precision occupancy tracking for every curb zone. Know exactly how long every vehicle stays, triggering automated responses at threshold.", color: "#7b2fff" },
  { title: "Pedestrian & Cyclist Tracking", desc: "Multi-modal scene understanding tracks pedestrians, cyclists, and micromobility alongside vehicles for complete curb-zone intelligence.", color: "#00ff88" },
  { title: "Behavioral Analytics", desc: "Detect double parking, illegal standing, dangerous drop-offs, and unauthorized zone access. AI classifies hundreds of behavioral patterns.", color: "#ff9a00" },
  { title: "Night & Adverse Conditions", desc: "Infrared sensors and all-weather optics maintain 99%+ detection accuracy through rain, fog, night, and direct sunlight.", color: "#0066ff" },
  { title: "Edge Processing", desc: "AI inference runs on-device at under 100ms latency. No cloud round-trip required for enforcement decisions. Resilient even during connectivity gaps.", color: "#00d4ff" },
];

const TECH_SPECS = [
  { label: "Detection Accuracy", value: "99.4%" },
  { label: "Inference Latency", value: "<100ms" },
  { label: "Camera Resolution", value: "Up to 4K" },
  { label: "Frame Rate", value: "30–60 FPS" },
  { label: "Operating Temp", value: "-40°C to 70°C" },
  { label: "Data Retention", value: "Configurable" },
  { label: "Uptime SLA", value: "99.97%" },
  { label: "Power Draw", value: "<18W per unit" },
];

export default function ComputerVisionPage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#000008" }}>
      <Nav />
      <div className="pt-16">

        <section
          className="py-28 px-6 relative overflow-hidden"
          style={{
            background: "radial-gradient(ellipse at 30% 50%, rgba(0,102,255,0.08) 0%, transparent 60%)",
            borderBottom: "1px solid rgba(0,212,255,0.1)",
          }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "linear-gradient(rgba(0,102,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,0.025) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }} />
          <div className="max-w-screen-xl mx-auto relative grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-5">◈ COMPUTER VISION INFRASTRUCTURE</div>
              <h1 className="font-black text-white mb-6" style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.8rem)", lineHeight: 1, letterSpacing: "-0.02em" }}>
                The Eyes of the Autonomous City
              </h1>
              <p style={{ fontSize: "1.1rem", color: "rgba(200,216,240,0.65)", lineHeight: 1.75, maxWidth: "48ch", marginBottom: "2.5rem" }}>
                Curbonomous deploys enterprise-grade computer vision infrastructure at city scale — edge-AI cameras that see, understand, and act on every curb event in real time.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:demo@curbonomous.com" className="px-8 py-4 font-black text-xs tracking-widest uppercase rounded-sm" style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)", color: "#000" }}>
                  Request Infrastructure Assessment
                </a>
                <Link href="/technology" className="px-8 py-4 font-bold text-xs tracking-widest uppercase rounded-sm" style={{ border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff" }}>
                  View Technology Stack →
                </Link>
              </div>
            </div>

            {/* Tech specs panel */}
            <div className="p-6" style={{ background: "rgba(5,12,25,0.9)", border: "1px solid rgba(0,212,255,0.15)" }}>
              <div className="text-[9px] font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(0,212,255,0.5)", fontFamily: "monospace" }}>HARDWARE SPECIFICATIONS</div>
              <div className="grid grid-cols-2 gap-3">
                {TECH_SPECS.map((s) => (
                  <div key={s.label} className="p-3" style={{ background: "rgba(0,0,8,0.6)", border: "1px solid rgba(0,212,255,0.08)" }}>
                    <div className="font-black text-[#00d4ff] mb-0.5" style={{ fontSize: "1.2rem", fontFamily: "monospace" }}>{s.value}</div>
                    <div className="text-[8px] tracking-widest uppercase" style={{ color: "rgba(200,216,240,0.35)", fontFamily: "monospace" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-3">SENSING CAPABILITIES</div>
            <h2 className="font-black text-white mb-12" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>
              What our cameras understand
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {CAPABILITIES.map((c) => (
                <div key={c.title} className="p-6" style={{ background: "rgba(5,12,25,0.8)", border: `1px solid ${c.color}18` }}>
                  <div className="w-2 h-2 rounded-full mb-3" style={{ background: c.color, boxShadow: `0 0 8px ${c.color}` }} />
                  <h3 className="font-black text-white text-sm mb-2">{c.title}</h3>
                  <p className="text-sm" style={{ color: "rgba(200,216,240,0.55)", lineHeight: 1.7 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="py-24 px-6" style={{ background: "rgba(5,12,25,0.4)", borderTop: "1px solid rgba(0,212,255,0.06)" }}>
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-3">SYSTEM ARCHITECTURE</div>
            <h2 className="font-black text-white mb-12" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>
              Edge AI, cloud scale
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  layer: "Edge Layer",
                  color: "#00d4ff",
                  items: ["4K edge-AI cameras", "On-device neural inference", "Local storage buffer", "Encrypted data transmission", "Autonomous operation during outages"],
                },
                {
                  layer: "Processing Layer",
                  color: "#7b2fff",
                  items: ["Real-time event stream processing", "Cross-camera correlation", "Zone state management", "Enforcement trigger logic", "Fleet coordination signals"],
                },
                {
                  layer: "Intelligence Layer",
                  color: "#00ff88",
                  items: ["Digital twin synchronization", "Predictive analytics", "Revenue optimization engine", "Compliance reporting", "API integrations"],
                },
              ].map((layer) => (
                <div key={layer.layer} className="p-6" style={{ background: "rgba(5,12,25,0.8)", border: `1px solid ${layer.color}22` }}>
                  <div className="text-[9px] font-bold tracking-widest uppercase mb-4" style={{ color: layer.color, fontFamily: "monospace" }}>{layer.layer}</div>
                  <div className="space-y-2">
                    {layer.items.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: layer.color }} />
                        <span className="text-sm" style={{ color: "rgba(200,216,240,0.6)" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="p-12 text-center" style={{ background: "rgba(5,12,25,0.9)", border: "1px solid rgba(0,212,255,0.2)" }}>
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-4">◈ DEPLOY COMPUTER VISION</div>
              <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}>
                See your curb in real time
              </h2>
              <p className="text-[#c8d8f0]/55 max-w-xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                Get a free infrastructure assessment. We&apos;ll map camera placement, estimate coverage, and model expected outcomes for your specific environment.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:demo@curbonomous.com" className="px-10 py-4 font-black text-sm tracking-widest uppercase rounded-sm" style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)", color: "#000" }}>
                  Get Infrastructure Assessment
                </a>
                <Link href="/solutions/curb-management" className="px-10 py-4 font-bold text-sm tracking-widest uppercase rounded-sm" style={{ border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff" }}>
                  Curb Management Platform →
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
