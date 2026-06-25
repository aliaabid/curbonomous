import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Real Estate Autonomous Infrastructure | AV-Ready Buildings — Curbonomous",
  description: "Curbonomous makes commercial real estate AV-ready. Curb management for office buildings, mixed-use properties, and development projects preparing for robotaxis, drone delivery, and autonomous fleets.",
  keywords: ["AV ready real estate", "commercial real estate autonomous infrastructure", "smart building curb management", "autonomous vehicle real estate", "proptech curb management", "building AV infrastructure"],
};

export default function CommercialRealEstatePage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#000008" }}>
      <Nav />
      <div className="pt-16">

        <section className="py-28 px-6 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 60% 30%, rgba(255,215,0,0.06) 0%, transparent 60%)", borderBottom: "1px solid rgba(0,212,255,0.1)" }}>
          <div className="max-w-screen-xl mx-auto relative">
            <div className="text-[10px] font-bold tracking-widest uppercase mb-5" style={{ color: "#ffd700" }}>◈ COMMERCIAL REAL ESTATE</div>
            <h1 className="font-black text-white mb-6" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.02em", maxWidth: "22ch" }}>
              Make Your Property Autonomous-Ready
            </h1>
            <p style={{ fontSize: "1.15rem", color: "rgba(200,216,240,0.65)", lineHeight: 1.75, maxWidth: "52ch", marginBottom: "2.5rem" }}>
              Robotaxis, delivery drones, and autonomous fleets are already operating at commercial properties in major US cities. Curbonomous gives property owners and developers the infrastructure to manage this new reality — and monetize it.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:partnerships@curbonomous.com" className="px-8 py-4 font-black text-xs tracking-widest uppercase rounded-sm" style={{ background: "linear-gradient(135deg, #ffd700, #ff9a00)", color: "#000" }}>
                Request Property Assessment
              </a>
              <Link href="/resources" className="px-8 py-4 font-bold text-xs tracking-widest uppercase rounded-sm" style={{ border: "1px solid rgba(255,215,0,0.3)", color: "#ffd700" }}>
                AV-Ready Property Guide →
              </Link>
            </div>
          </div>
        </section>

        {/* Why now */}
        <section className="py-20 px-6" style={{ background: "rgba(5,12,25,0.4)", borderBottom: "1px solid rgba(0,212,255,0.06)" }}>
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: "#ffd700" }}>THE OPPORTUNITY</div>
            <h2 className="font-black text-white mb-8" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>Properties that prepare now will command premium rents</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { value: "35%", label: "Premium rents at AV-ready properties in early deployment cities", color: "#ffd700" },
                { value: "$180k", label: "Annual revenue potential from AV access fees at a single commercial building", color: "#00d4ff" },
                { value: "2 yrs", label: "Window to establish AV infrastructure advantage before it becomes standard", color: "#00ff88" },
              ].map((s) => (
                <div key={s.label} className="p-6 text-center" style={{ background: "rgba(5,12,25,0.8)", border: `1px solid ${s.color}22` }}>
                  <div className="font-black mb-2" style={{ fontSize: "3rem", fontFamily: "monospace", color: s.color }}>{s.value}</div>
                  <p style={{ color: "rgba(200,216,240,0.5)", fontSize: "0.85rem", lineHeight: 1.6 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What CRE gets */}
        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: "#ffd700" }}>CURBONOMOUS FOR COMMERCIAL REAL ESTATE</div>
            <h2 className="font-black text-white mb-12" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>From passive curb to active revenue asset</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "Curb Zone Management", desc: "Manage loading zones, rideshare areas, AV pickup zones, and delivery areas from one platform. Know what is happening at your curb in real time.", color: "#00d4ff", href: "/solutions/curb-management" },
                { title: "AV Pickup Zone Design", desc: "Designate and certify dedicated autonomous vehicle pickup zones that AV operators can book. Generate fee revenue per pickup.", color: "#7b2fff", href: "/solutions/autonomous-vehicles" },
                { title: "Drone Landing Infrastructure", desc: "Rooftop drone port design, certification, and operator agreements. Position your building as a last-mile drone delivery hub.", color: "#ff9a00", href: "/solutions/drone-infrastructure" },
                { title: "Delivery Management", desc: "Coordinate last-mile deliveries, delivery robot staging, and package handling at the building curb. Reduce lobby congestion.", color: "#00ff88", href: "/solutions/delivery-robots" },
                { title: "Property Digital Twin", desc: "Real-time digital model of all curb activity at your property. Used for tenant reporting, incident documentation, and infrastructure planning.", color: "#0066ff", href: "/solutions/digital-twin" },
                { title: "Revenue Analytics", desc: "Per-zone, per-carrier, per-hour revenue reporting. Understand curb utilization, optimize pricing, and benchmark against comparable properties.", color: "#ffd700", href: "/solutions/curb-management" },
              ].map((sol) => (
                <Link key={sol.title} href={sol.href} className="p-6 block transition-all" style={{ background: "rgba(5,12,25,0.8)", border: `1px solid ${sol.color}18` }}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full" style={{ background: sol.color }} />
                    <h3 className="font-black text-white text-sm">{sol.title}</h3>
                  </div>
                  <p className="text-sm mb-3" style={{ color: "rgba(200,216,240,0.55)", lineHeight: 1.7 }}>{sol.desc}</p>
                  <span className="text-[10px] font-bold tracking-wider" style={{ color: sol.color }}>Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Property types */}
        <section className="py-24 px-6" style={{ background: "rgba(5,12,25,0.4)", borderTop: "1px solid rgba(0,212,255,0.06)" }}>
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: "#ffd700" }}>BY PROPERTY TYPE</div>
            <h2 className="font-black text-white mb-10" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>Built for every CRE asset class</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { type: "Class A Office", desc: "Manage executive drop-offs, AV corporate fleet access, food delivery, and package management at high-rise office buildings.", color: "#00d4ff" },
                { type: "Multifamily / Residential", desc: "Resident AV permits, last-mile delivery coordination, drone port revenue, and guest vehicle management for apartment towers.", color: "#7b2fff" },
                { type: "Retail & Mixed-Use", desc: "Customer curb access, curbside pickup zones, delivery management, and autonomous vehicle parking for retail-anchored developments.", color: "#ffd700" },
                { type: "Parking & Garages", desc: "Transform underutilized parking into mobility hubs. EV charging, AV staging, delivery consolidation, and new revenue streams.", color: "#00ff88" },
              ].map((p) => (
                <div key={p.type} className="p-6" style={{ background: "rgba(5,12,25,0.7)", border: `1px solid ${p.color}18` }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
                    <h3 className="font-black text-white text-sm">{p.type}</h3>
                  </div>
                  <p className="text-sm" style={{ color: "rgba(200,216,240,0.5)", lineHeight: 1.65 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="p-12 text-center" style={{ background: "rgba(5,12,25,0.9)", border: "1px solid rgba(255,215,0,0.2)" }}>
              <div className="text-[10px] font-bold tracking-widest uppercase mb-4" style={{ color: "#ffd700" }}>◈ FREE PROPERTY ASSESSMENT</div>
              <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}>Is your property AV-ready?</h2>
              <p className="text-[#c8d8f0]/55 max-w-xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                We&apos;ll assess your property&apos;s curb infrastructure, identify AV revenue opportunities, and model the investment required to become autonomous-ready.
              </p>
              <a href="mailto:partnerships@curbonomous.com" className="px-10 py-4 font-black text-sm tracking-widest uppercase rounded-sm inline-block" style={{ background: "linear-gradient(135deg, #ffd700, #ff9a00)", color: "#000" }}>
                Get Free Property Assessment
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
