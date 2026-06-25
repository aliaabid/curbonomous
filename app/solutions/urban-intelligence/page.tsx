import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Urban Intelligence Platform | AI Infrastructure for Cities — Curbonomous",
  description: "Curbonomous is the urban intelligence platform for autonomous cities. AI-powered analytics, real-time monitoring, predictive infrastructure management, and physical-world AI for modern cities.",
  keywords: ["urban intelligence platform", "AI infrastructure cities", "city AI platform", "smart city AI", "physical AI cities", "urban AI platform"],
};

export default function UrbanIntelligencePage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#000008" }}>
      <Nav />
      <div className="pt-16">

        <section className="py-28 px-6 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(0,212,255,0.07) 0%, transparent 65%)", borderBottom: "1px solid rgba(0,212,255,0.1)" }}>
          <div className="max-w-screen-xl mx-auto relative">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-5">◈ URBAN INTELLIGENCE PLATFORM</div>
            <h1 className="font-black text-white mb-6" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.02em", maxWidth: "18ch" }}>
              The Operating System for the Physical World
            </h1>
            <p style={{ fontSize: "1.15rem", color: "rgba(200,216,240,0.65)", lineHeight: 1.75, maxWidth: "52ch", marginBottom: "2.5rem" }}>
              Curbonomous is not just curb management. It is the unified intelligence layer that makes physical urban environments understandable, manageable, and optimizable — in real time, at city scale, across every autonomous system operating within it.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:demo@curbonomous.com" className="px-8 py-4 font-black text-xs tracking-widest uppercase rounded-sm" style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)", color: "#000" }}>
                Request Platform Demo
              </a>
              <Link href="/technology" className="px-8 py-4 font-bold text-xs tracking-widest uppercase rounded-sm" style={{ border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff" }}>
                Technology Architecture →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-3">THE INTELLIGENCE STACK</div>
            <h2 className="font-black text-white mb-12" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>Four layers. One platform.</h2>
            <div className="space-y-4">
              {[
                { layer: "01 — Sense", title: "Physical World Ingestion", desc: "Edge-AI cameras, sensors, and IoT devices capture everything happening at the curb and in the surrounding physical environment. Every vehicle, every person, every drone, every robot — seen and classified in real time.", color: "#00d4ff" },
                { layer: "02 — Understand", title: "AI Interpretation Layer", desc: "Machine learning models translate raw sensor data into structured intelligence — dwell times, occupancy rates, behavioral classifications, anomaly detection, and predictive demand modeling.", color: "#7b2fff" },
                { layer: "03 — Act", title: "Automated Coordination", desc: "The platform takes action based on real-time conditions — reassigning zones, triggering enforcement, dispatching vehicles, alerting operators, and adjusting pricing without human intervention.", color: "#00ff88" },
                { layer: "04 — Learn", title: "Continuous Optimization", desc: "Every action generates new training data. The platform continuously improves zone allocation, pricing models, and enforcement accuracy as it observes more of your specific environment.", color: "#ff9a00" },
              ].map((l) => (
                <div key={l.layer} className="p-6 grid md:grid-cols-4 gap-6 items-start" style={{ background: "rgba(5,12,25,0.7)", border: `1px solid ${l.color}18` }}>
                  <div>
                    <div className="text-[9px] font-bold tracking-widest uppercase mb-1" style={{ color: l.color, fontFamily: "monospace" }}>{l.layer}</div>
                    <h3 className="font-black text-white text-lg">{l.title}</h3>
                  </div>
                  <p className="md:col-span-3 text-sm" style={{ color: "rgba(200,216,240,0.6)", lineHeight: 1.75 }}>{l.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6" style={{ background: "rgba(5,12,25,0.4)", borderTop: "1px solid rgba(0,212,255,0.06)" }}>
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-3">PLATFORM SOLUTIONS</div>
            <h2 className="font-black text-white mb-10" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>Everything the autonomous city requires</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Curb Management", href: "/solutions/curb-management", color: "#00d4ff" },
                { label: "Computer Vision", href: "/solutions/computer-vision", color: "#0066ff" },
                { label: "Autonomous Vehicles", href: "/solutions/autonomous-vehicles", color: "#7b2fff" },
                { label: "Drone Infrastructure", href: "/solutions/drone-infrastructure", color: "#ff9a00" },
                { label: "Delivery Robots", href: "/solutions/delivery-robots", color: "#00ff88" },
                { label: "Digital Twin", href: "/solutions/digital-twin", color: "#00ff88" },
                { label: "Mobility Hubs", href: "/solutions/mobility-hubs", color: "#0066ff" },
                { label: "Urban Intelligence", href: "/solutions/urban-intelligence", color: "#00d4ff" },
              ].map((s) => (
                <Link key={s.label} href={s.href} className="p-4 text-center transition-all" style={{ background: "rgba(5,12,25,0.8)", border: `1px solid ${s.color}22` }}>
                  <div className="w-2 h-2 rounded-full mx-auto mb-2" style={{ background: s.color }} />
                  <div className="font-black text-white text-sm">{s.label}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="p-12 text-center" style={{ background: "rgba(5,12,25,0.9)", border: "1px solid rgba(0,212,255,0.2)" }}>
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-4">◈ BUILD THE FUTURE</div>
              <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}>Make your city intelligent</h2>
              <p className="text-[#c8d8f0]/55 max-w-xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                The autonomous city is not a future vision. It is arriving now. Curbonomous is the infrastructure layer that makes it manageable.
              </p>
              <a href="mailto:demo@curbonomous.com" className="px-10 py-4 font-black text-sm tracking-widest uppercase rounded-sm inline-block" style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)", color: "#000" }}>
                Schedule Platform Demo
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
