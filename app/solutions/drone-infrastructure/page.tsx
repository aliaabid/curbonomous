import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Urban Drone Infrastructure Management | Drone Landing Zone Platform — Curbonomous",
  description: "Manage drone landing zones, air corridors, and urban delivery operations with Curbonomous. Purpose-built drone infrastructure for cities, airports, rooftops, and mixed-use developments.",
  keywords: ["urban drone infrastructure", "drone landing zone management", "drone delivery infrastructure", "urban air mobility infrastructure", "drone management platform", "UAM infrastructure"],
};

const DRONE_SOLUTIONS = [
  { title: "Landing Zone Management", desc: "Designate, activate, and control drone landing pads on rooftops, parking structures, and ground-level sites. Automated clearance protocols and real-time status.", color: "#ff9a00" },
  { title: "Air Corridor Coordination", desc: "Define and monitor low-altitude flight corridors between landing zones. Integrate with UTM systems for conflict-free airspace coordination.", color: "#00d4ff" },
  { title: "Cargo Transfer Automation", desc: "Package handoff protocols, ground robot coordination, and delivery handshake automation. Seamless transfer from air to last-mile delivery.", color: "#7b2fff" },
  { title: "FAA Compliance Documentation", desc: "Automated logging of all drone operations — operator credentials, flight timestamps, payloads, and airspace classifications. BVLOS-ready documentation.", color: "#00ff88" },
  { title: "Property Integration", desc: "Rooftop drone port management for commercial buildings, warehouses, hotels, and logistics centers. Tenant access control and usage billing.", color: "#ff9a00" },
  { title: "Emergency Response", desc: "Priority access protocols for emergency medical drone deliveries. Automatic corridor clearance and landing zone reservation for priority flights.", color: "#ff3344" },
];

const OPERATORS = ["Wing", "Zipline", "Amazon Prime Air", "UPS Flight Forward", "FedEx", "Joby Aviation", "Archer Aviation", "Wisk Aero"];

export default function DroneInfrastructurePage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#000008" }}>
      <Nav />
      <div className="pt-16">

        <section
          className="py-28 px-6 relative overflow-hidden"
          style={{
            background: "radial-gradient(ellipse at 60% 30%, rgba(255,154,0,0.07) 0%, transparent 60%)",
            borderBottom: "1px solid rgba(0,212,255,0.1)",
          }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "linear-gradient(rgba(255,154,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,154,0,0.02) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }} />
          <div className="max-w-screen-xl mx-auto relative">
            <div className="text-[10px] font-bold tracking-widest uppercase mb-5" style={{ color: "#ff9a00" }}>◈ DRONE INFRASTRUCTURE PLATFORM</div>
            <h1 className="font-black text-white mb-6" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.02em", maxWidth: "20ch" }}>
              Urban Drone Infrastructure for the Delivery Era
            </h1>
            <p style={{ fontSize: "1.15rem", color: "rgba(200,216,240,0.65)", lineHeight: 1.75, maxWidth: "52ch", marginBottom: "2.5rem" }}>
              Drones are landing in cities. Curbonomous provides the ground infrastructure layer — landing zone management, air corridor coordination, and cargo handoff automation — that makes urban drone operations safe, scalable, and compliant.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="mailto:demo@curbonomous.com" className="px-8 py-4 font-black text-xs tracking-widest uppercase rounded-sm" style={{ background: "linear-gradient(135deg, #ff9a00, #ff6b00)", color: "#000" }}>
                Request Drone Infrastructure Demo
              </a>
              <Link href="/resources" className="px-8 py-4 font-bold text-xs tracking-widest uppercase rounded-sm" style={{ border: "1px solid rgba(255,154,0,0.3)", color: "#ff9a00" }}>
                Drone Deployment Guide →
              </Link>
            </div>
            <div>
              <div className="text-[9px] font-bold tracking-widest uppercase mb-3" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>COMPATIBLE OPERATORS</div>
              <div className="flex flex-wrap gap-3">
                {OPERATORS.map((op) => (
                  <span key={op} className="px-3 py-1.5 text-[9px] font-bold tracking-widest uppercase" style={{ border: "1px solid rgba(255,154,0,0.2)", color: "rgba(200,216,240,0.4)", fontFamily: "monospace" }}>
                    {op}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why now */}
        <section className="py-16 px-6" style={{ background: "rgba(255,154,0,0.03)", borderBottom: "1px solid rgba(255,154,0,0.06)" }}>
          <div className="max-w-screen-xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { stat: "$32B", label: "Global drone delivery market by 2030" },
                { stat: "0", label: "Cities with standardized urban drone landing infrastructure" },
                { stat: "7 min", label: "Average drone delivery time vs 45 min ground delivery" },
              ].map((s) => (
                <div key={s.label} className="p-6" style={{ border: "1px solid rgba(255,154,0,0.12)", background: "rgba(5,12,25,0.6)" }}>
                  <div className="font-black mb-2" style={{ fontSize: "3rem", fontFamily: "monospace", color: "#ff9a00" }}>{s.stat}</div>
                  <p style={{ color: "rgba(200,216,240,0.5)", fontSize: "0.85rem", lineHeight: 1.6 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: "#ff9a00" }}>DRONE INFRASTRUCTURE SOLUTIONS</div>
            <h2 className="font-black text-white mb-12" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>
              Ground infrastructure for the air mobility era
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {DRONE_SOLUTIONS.map((sol) => (
                <div key={sol.title} className="p-6" style={{ background: "rgba(5,12,25,0.8)", border: `1px solid ${sol.color}18` }}>
                  <div className="w-2 h-2 rounded-full mb-3" style={{ background: sol.color, boxShadow: `0 0 8px ${sol.color}` }} />
                  <h3 className="font-black text-white text-sm mb-2">{sol.title}</h3>
                  <p className="text-sm" style={{ color: "rgba(200,216,240,0.55)", lineHeight: 1.7 }}>{sol.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Property owners */}
        <section className="py-24 px-6" style={{ background: "rgba(5,12,25,0.4)", borderTop: "1px solid rgba(0,212,255,0.06)" }}>
          <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: "#ff9a00" }}>FOR PROPERTY OWNERS</div>
              <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>
                Your rooftop is the new last-mile logistics hub
              </h2>
              <p style={{ color: "rgba(200,216,240,0.6)", lineHeight: 1.75, fontSize: "0.95rem", marginBottom: "2rem" }}>
                Buildings with Curbonomous-managed drone landing infrastructure attract drone delivery operators as tenants and generate new revenue streams from air rights and landing fees. The earliest movers are already signing operator agreements.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Rooftop drone port design and certification support",
                  "Operator tenant agreements and fee structures",
                  "FAA coordination and Part 107 compliance",
                  "Safety protocols and emergency procedures",
                  "Insurance documentation and liability management",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: "#ff9a00" }} />
                    <span style={{ color: "rgba(200,216,240,0.65)", fontSize: "0.9rem" }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/industries/commercial-real-estate" className="px-6 py-3 font-bold text-xs tracking-widest uppercase rounded-sm inline-block" style={{ border: "1px solid rgba(255,154,0,0.4)", color: "#ff9a00" }}>
                Real Estate Drone Infrastructure →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Monthly Landing Revenue", value: "$8–24k", unit: "per rooftop port" },
                { label: "Operator Agreements", value: "3–6", unit: "per active port" },
                { label: "Deployment Timeline", value: "8–12 wk", unit: "to operational" },
                { label: "FAA Compliance", value: "Full", unit: "Part 107 ready" },
              ].map((m) => (
                <div key={m.label} className="p-5" style={{ background: "rgba(5,12,25,0.9)", border: "1px solid rgba(255,154,0,0.15)" }}>
                  <div className="font-black mb-0.5" style={{ fontSize: "1.6rem", color: "#ff9a00", fontFamily: "monospace" }}>{m.value}</div>
                  <div className="text-[9px] tracking-widest uppercase mb-1" style={{ color: "#ff9a00", fontFamily: "monospace", opacity: 0.6 }}>{m.unit}</div>
                  <div className="text-[9px] tracking-wider" style={{ color: "rgba(200,216,240,0.4)", fontFamily: "monospace" }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="p-12 text-center" style={{ background: "rgba(5,12,25,0.9)", border: "1px solid rgba(255,154,0,0.2)" }}>
              <div className="text-[10px] font-bold tracking-widest uppercase mb-4" style={{ color: "#ff9a00" }}>◈ DRONE INFRASTRUCTURE ASSESSMENT</div>
              <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}>
                Is your property drone-ready?
              </h2>
              <p className="text-[#c8d8f0]/55 max-w-xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                Get a free drone infrastructure assessment for your rooftop, campus, or logistics facility. We&apos;ll evaluate feasibility, model revenue potential, and map FAA requirements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:demo@curbonomous.com" className="px-10 py-4 font-black text-sm tracking-widest uppercase rounded-sm" style={{ background: "linear-gradient(135deg, #ff9a00, #ff6b00)", color: "#000" }}>
                  Get Drone Assessment
                </a>
                <Link href="/solutions/mobility-hubs" className="px-10 py-4 font-bold text-sm tracking-widest uppercase rounded-sm" style={{ border: "1px solid rgba(255,154,0,0.3)", color: "#ff9a00" }}>
                  Mobility Hub Platform →
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
