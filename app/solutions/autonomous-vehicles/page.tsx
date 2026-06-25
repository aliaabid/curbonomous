import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Autonomous Vehicle Infrastructure & Curb Management | Robotaxi Zones — Curbonomous",
  description: "Purpose-built autonomous vehicle infrastructure for cities and properties. Robotaxi pickup zone management, AV staging, multi-fleet coordination, and compliance documentation.",
  keywords: ["autonomous vehicle infrastructure", "robotaxi infrastructure", "AV curb management", "autonomous vehicle pickup zone", "AV fleet management", "robotaxi zone management"],
};

const AV_SOLUTIONS = [
  {
    title: "Robotaxi Pickup Zone Management",
    color: "#00d4ff",
    desc: "Dedicated AV pickup and drop-off zones with dynamic capacity, queue management, and passenger transfer coordination. Compatible with Waymo, Zoox, Cruise, and all major AV operators.",
    outcomes: ["Dynamic zone capacity allocation", "Queue depth monitoring", "Passenger dwell optimization", "Multi-operator coordination"],
  },
  {
    title: "AV Staging & Pre-Positioning",
    color: "#7b2fff",
    desc: "Manage AV pre-staging areas, holding zones, and dispatch queues. Keep fleets ready without blocking active curb space.",
    outcomes: ["Remote staging coordination", "Dispatch trigger automation", "Fleet position tracking", "Holding zone management"],
  },
  {
    title: "Multi-Fleet Coordination",
    color: "#00ff88",
    desc: "When multiple AV operators deploy in the same city, Curbonomous provides a neutral coordination layer — managing shared curb access without giving any operator preferential treatment.",
    outcomes: ["Operator-agnostic zone sharing", "Time-slot allocation", "Conflict detection", "Fair-access enforcement"],
  },
  {
    title: "Compliance Documentation",
    color: "#ff9a00",
    desc: "Every AV curb interaction is timestamped, vehicle-identified, and stored in an immutable audit log. Full compliance documentation for city regulators and insurance.",
    outcomes: ["Immutable event ledger", "License plate verification", "Incident documentation", "Regulatory reporting"],
  },
  {
    title: "AV-Ready Zone Design",
    color: "#0066ff",
    desc: "Pre-deployment consulting to design AV-optimized curb zones — geometry, signage, camera placement, and access protocols — before your AV partner launches.",
    outcomes: ["Zone geometry optimization", "Camera placement design", "Signage specifications", "Access control integration"],
  },
  {
    title: "Real-Time Operator API",
    color: "#00d4ff",
    desc: "AV operators integrate with the Curbonomous API to receive real-time zone availability, receive dispatch instructions, and report vehicle status directly from the vehicle.",
    outcomes: ["REST and WebSocket APIs", "Zone availability feed", "Dispatch webhook integration", "Vehicle status ingestion"],
  },
];

const OPERATORS = ["Waymo", "Zoox", "Cruise", "Aurora", "Motional", "May Mobility", "Nuro", "Serve Robotics"];

export default function AutonomousVehiclesPage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#000008" }}>
      <Nav />
      <div className="pt-16">

        <section
          className="py-28 px-6 relative overflow-hidden"
          style={{
            background: "radial-gradient(ellipse at 70% 50%, rgba(123,47,255,0.08) 0%, transparent 60%)",
            borderBottom: "1px solid rgba(0,212,255,0.1)",
          }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "linear-gradient(rgba(123,47,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(123,47,255,0.02) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }} />
          <div className="max-w-screen-xl mx-auto relative">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#7b2fff] mb-5">◈ AUTONOMOUS VEHICLE INFRASTRUCTURE</div>
            <h1 className="font-black text-white mb-6" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.02em", maxWidth: "20ch" }}>
              The Infrastructure Autonomous Vehicles Need at the Curb
            </h1>
            <p style={{ fontSize: "1.15rem", color: "rgba(200,216,240,0.65)", lineHeight: 1.75, maxWidth: "52ch", marginBottom: "2.5rem" }}>
              Robotaxis are arriving. Curbonomous provides the dedicated infrastructure layer cities and properties need to manage autonomous vehicle pickups, coordinate multi-fleet operations, and document every interaction.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="mailto:demo@curbonomous.com" className="px-8 py-4 font-black text-xs tracking-widest uppercase rounded-sm" style={{ background: "linear-gradient(135deg, #7b2fff, #0066ff)", color: "#fff" }}>
                Schedule AV Infrastructure Demo
              </a>
              <Link href="/resources" className="px-8 py-4 font-bold text-xs tracking-widest uppercase rounded-sm" style={{ border: "1px solid rgba(123,47,255,0.35)", color: "#7b2fff" }}>
                AV Deployment Guide →
              </Link>
            </div>
            <div>
              <div className="text-[9px] font-bold tracking-widest uppercase mb-3" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>COMPATIBLE WITH</div>
              <div className="flex flex-wrap gap-3">
                {OPERATORS.map((op) => (
                  <span key={op} className="px-3 py-1.5 text-[9px] font-bold tracking-widest uppercase" style={{ border: "1px solid rgba(123,47,255,0.2)", color: "rgba(200,216,240,0.4)", fontFamily: "monospace" }}>
                    {op}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Urgency section */}
        <section className="py-16 px-6" style={{ background: "rgba(123,47,255,0.04)", borderBottom: "1px solid rgba(123,47,255,0.08)" }}>
          <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              { stat: "50+", label: "US cities with active AV deployments in 2025" },
              { stat: "847", label: "AV pickups per day at a single major airport terminal" },
              { stat: "0", label: "Cities with dedicated AV curb infrastructure before Curbonomous" },
            ].map((s) => (
              <div key={s.label} className="text-center p-6" style={{ border: "1px solid rgba(123,47,255,0.12)", background: "rgba(5,12,25,0.6)" }}>
                <div className="font-black text-[#7b2fff] mb-2" style={{ fontSize: "3rem", fontFamily: "monospace" }}>{s.stat}</div>
                <p style={{ color: "rgba(200,216,240,0.5)", fontSize: "0.85rem", lineHeight: 1.6 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Solutions grid */}
        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#7b2fff] mb-3">AV INFRASTRUCTURE SOLUTIONS</div>
            <h2 className="font-black text-white mb-12" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>
              Every layer the autonomous curb requires
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {AV_SOLUTIONS.map((sol) => (
                <div key={sol.title} className="p-6" style={{ background: "rgba(5,12,25,0.8)", border: `1px solid ${sol.color}18` }}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full" style={{ background: sol.color }} />
                    <h3 className="font-black text-white text-sm">{sol.title}</h3>
                  </div>
                  <p className="text-sm mb-4" style={{ color: "rgba(200,216,240,0.55)", lineHeight: 1.7 }}>{sol.desc}</p>
                  <div className="space-y-1.5">
                    {sol.outcomes.map((o) => (
                      <div key={o} className="flex items-center gap-2">
                        <span style={{ color: sol.color, fontSize: "0.65rem" }}>→</span>
                        <span className="text-[0.75rem] font-semibold" style={{ color: sol.color }}>{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For AV operators */}
        <section className="py-24 px-6" style={{ background: "rgba(5,12,25,0.4)", borderTop: "1px solid rgba(0,212,255,0.06)" }}>
          <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#7b2fff] mb-3">FOR AV OPERATORS</div>
              <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>
                Expand deployment faster with pre-built infrastructure
              </h2>
              <p style={{ color: "rgba(200,216,240,0.6)", lineHeight: 1.75, fontSize: "0.95rem", marginBottom: "2rem" }}>
                When a city or property has Curbonomous deployed, your vehicles arrive to managed zones, clear pickup areas, and integrated dispatch APIs. No custom infrastructure negotiation. No site-by-site setup. Just deploy.
              </p>
              <div className="space-y-3">
                {[
                  "Pre-certified AV pickup zones at partner locations",
                  "Real-time zone availability via API",
                  "Compliance documentation auto-generated",
                  "Passenger handoff coordination",
                  "Conflict-free shared access with other operators",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: "#7b2fff" }} />
                    <span style={{ color: "rgba(200,216,240,0.65)", fontSize: "0.9rem" }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/industries/autonomous-vehicle-companies" className="px-6 py-3 font-bold text-xs tracking-widest uppercase rounded-sm inline-block" style={{ border: "1px solid rgba(123,47,255,0.4)", color: "#7b2fff" }}>
                  AV Operator Partnership Program →
                </Link>
              </div>
            </div>
            <div className="p-6" style={{ background: "rgba(5,12,25,0.9)", border: "1px solid rgba(123,47,255,0.2)" }}>
              <div className="text-[9px] font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(123,47,255,0.5)", fontFamily: "monospace" }}>AV OPERATOR API</div>
              <div className="space-y-2 font-mono text-xs" style={{ color: "rgba(0,212,255,0.7)", background: "rgba(0,0,8,0.6)", padding: "1rem", border: "1px solid rgba(0,212,255,0.08)" }}>
                <div style={{ color: "rgba(200,216,240,0.3)" }}>// Request zone availability</div>
                <div>GET /api/v1/zones?type=av_pickup</div>
                <div style={{ color: "rgba(200,216,240,0.3)" }}>&nbsp;</div>
                <div style={{ color: "rgba(200,216,240,0.3)" }}>// Reserve zone slot</div>
                <div>POST /api/v1/zones/Z-4A/reserve</div>
                <div style={{ color: "rgba(200,216,240,0.3)" }}>&nbsp;</div>
                <div style={{ color: "rgba(200,216,240,0.3)" }}>// Report vehicle arrival</div>
                <div>POST /api/v1/arrivals</div>
                <div style={{ color: "rgba(200,216,240,0.3)" }}>&#123; vehicle_id, zone_id, eta &#125;</div>
              </div>
              <div className="mt-4 text-[9px]" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>REST + WebSocket · OpenAPI 3.0 · JWT Auth</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="p-12 text-center" style={{ background: "rgba(5,12,25,0.9)", border: "1px solid rgba(123,47,255,0.2)" }}>
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#7b2fff] mb-4">◈ DEPLOY AV INFRASTRUCTURE</div>
              <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}>
                Is your city ready for robotaxis?
              </h2>
              <p className="text-[#c8d8f0]/55 max-w-xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                Get an AV infrastructure readiness assessment. We&apos;ll evaluate your current curb infrastructure and model what dedicated AV zones would require.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:demo@curbonomous.com" className="px-10 py-4 font-black text-sm tracking-widest uppercase rounded-sm" style={{ background: "linear-gradient(135deg, #7b2fff, #0066ff)", color: "#fff" }}>
                  Get AV Readiness Assessment
                </a>
                <Link href="/industries/cities" className="px-10 py-4 font-bold text-sm tracking-widest uppercase rounded-sm" style={{ border: "1px solid rgba(123,47,255,0.35)", color: "#7b2fff" }}>
                  Cities & Municipalities →
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
