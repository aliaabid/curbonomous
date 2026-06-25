import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobility Hub Management Software | Multi-Modal Coordination — Curbonomous",
  description: "Curbonomous manages mobility hubs — coordinating robotaxis, drones, delivery robots, shuttles, and EVs in one unified infrastructure layer for airports, mixed-use developments, and campuses.",
  keywords: ["mobility hub management", "mobility hub software", "multimodal mobility hub", "mobility hub technology", "future mobility hub", "urban mobility hub"],
};

export default function MobilityHubsPage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#000008" }}>
      <Nav />
      <div className="pt-16">

        <section className="py-28 px-6 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,102,255,0.07) 0%, transparent 60%)", borderBottom: "1px solid rgba(0,212,255,0.1)" }}>
          <div className="max-w-screen-xl mx-auto relative">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#0066ff] mb-5">◈ MOBILITY HUB MANAGEMENT</div>
            <h1 className="font-black text-white mb-6" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.02em", maxWidth: "20ch" }}>
              The Coordination Layer for Multi-Modal Mobility Hubs
            </h1>
            <p style={{ fontSize: "1.15rem", color: "rgba(200,216,240,0.65)", lineHeight: 1.75, maxWidth: "52ch", marginBottom: "2.5rem" }}>
              Mobility hubs bring together robotaxis, drones, delivery robots, EV charging, shared bikes, and transit in one location. Curbonomous manages the coordination layer — ensuring every modal operates in harmony without conflict.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:demo@curbonomous.com" className="px-8 py-4 font-black text-xs tracking-widest uppercase rounded-sm" style={{ background: "linear-gradient(135deg, #0066ff, #00d4ff)", color: "#fff" }}>
                Schedule Hub Demo
              </a>
              <Link href="/solutions/digital-twin" className="px-8 py-4 font-bold text-xs tracking-widest uppercase rounded-sm" style={{ border: "1px solid rgba(0,102,255,0.35)", color: "#0066ff" }}>
                Digital Twin Platform →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#0066ff] mb-3">WHAT A CURBONOMOUS MOBILITY HUB MANAGES</div>
            <h2 className="font-black text-white mb-12" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>Every mode. One control layer.</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { mode: "Robotaxi / AV", desc: "Dedicated pickup/drop-off zones, queue management, and passenger transfer coordination for autonomous vehicle fleets.", color: "#7b2fff" },
                { mode: "Drone Delivery", desc: "Rooftop landing pads and air corridor management integrated into the hub's ground operations.", color: "#ff9a00" },
                { mode: "Delivery Robots", desc: "Sidewalk robot staging areas, route allocation, and handoff zones from drone to ground delivery.", color: "#00ff88" },
                { mode: "EV Fleet Charging", desc: "Smart EV charging coordination, fleet queuing, and charging session management for commercial vehicles.", color: "#0066ff" },
                { mode: "Transit & Shuttles", desc: "Bus, shuttle, and microtransit bay coordination with schedule adherence monitoring and passenger connection analytics.", color: "#00d4ff" },
                { mode: "Micromobility", desc: "Bike, scooter, and shared mobility dock management integrated into hub capacity planning.", color: "#ff3344" },
              ].map((m) => (
                <div key={m.mode} className="p-6" style={{ background: "rgba(5,12,25,0.8)", border: `1px solid ${m.color}18` }}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full" style={{ background: m.color }} />
                    <h3 className="font-black text-white text-sm">{m.mode}</h3>
                  </div>
                  <p className="text-sm" style={{ color: "rgba(200,216,240,0.55)", lineHeight: 1.7 }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6" style={{ background: "rgba(5,12,25,0.4)", borderTop: "1px solid rgba(0,212,255,0.06)" }}>
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#0066ff] mb-3">HUB ENVIRONMENTS</div>
            <h2 className="font-black text-white mb-12" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>Built for every hub context</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Airport Mobility Hub", desc: "Terminal curb, ground transportation center, rental car facility, and drone apron — all coordinated under one platform. The most complex mobility environment on earth, managed.", href: "/industries/airports", color: "#7b2fff" },
                { title: "Mixed-Use Development Hub", desc: "Residential, retail, and office occupants sharing a single curb layer. Resident permits, delivery zones, and AV access all dynamically managed.", href: "/industries/mixed-use", color: "#00ff88" },
                { title: "University Campus Hub", desc: "Autonomous campus shuttles, food delivery robots, bike sharing, and AV research vehicles — coordinated across a campus without conflicts.", href: "/industries/universities", color: "#00d4ff" },
                { title: "Transit Center Hub", desc: "Bus, rail, rideshare, AV, and micromobility convergence points managed for maximum passenger throughput and minimal congestion.", href: "/industries/cities", color: "#0066ff" },
              ].map((h) => (
                <Link key={h.title} href={h.href} className="p-6 block transition-all" style={{ background: "rgba(5,12,25,0.7)", border: `1px solid ${h.color}18` }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: h.color }} />
                    <h3 className="font-black text-white text-sm">{h.title}</h3>
                  </div>
                  <p className="text-sm mb-3" style={{ color: "rgba(200,216,240,0.5)", lineHeight: 1.65 }}>{h.desc}</p>
                  <span className="text-[10px] font-bold tracking-wider" style={{ color: h.color }}>Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="p-12 text-center" style={{ background: "rgba(5,12,25,0.9)", border: "1px solid rgba(0,102,255,0.2)" }}>
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#0066ff] mb-4">◈ DESIGN YOUR MOBILITY HUB</div>
              <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}>Ready to build a mobility hub?</h2>
              <p className="text-[#c8d8f0]/55 max-w-xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                Get a mobility hub design consultation. We&apos;ll evaluate your environment, map modal interactions, and build the infrastructure specification for your hub.
              </p>
              <a href="mailto:demo@curbonomous.com" className="px-10 py-4 font-black text-sm tracking-widest uppercase rounded-sm inline-block" style={{ background: "linear-gradient(135deg, #0066ff, #00d4ff)", color: "#fff" }}>
                Request Hub Consultation
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
