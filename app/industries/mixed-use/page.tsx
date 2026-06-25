import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mixed-Use Development Autonomous Mobility Infrastructure — Curbonomous",
  description: "Curbonomous manages the complex multi-modal curb environments of mixed-use developments — coordinating residential, retail, and office curb access with AV zones and drone delivery.",
  keywords: ["mixed-use development autonomous infrastructure", "mixed-use mobility hub", "smart mixed-use development", "mixed use curb management", "autonomous mixed use"],
};

export default function MixedUsePage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#000008" }}>
      <Nav />
      <div className="pt-16">
        <section className="py-28 px-6 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.07) 0%, transparent 60%)", borderBottom: "1px solid rgba(0,212,255,0.1)" }}>
          <div className="max-w-screen-xl mx-auto relative">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-5">◈ MIXED-USE DEVELOPMENTS</div>
            <h1 className="font-black text-white mb-6" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.02em", maxWidth: "22ch" }}>
              One Curb. Multiple Tenants. Zero Conflicts.
            </h1>
            <p style={{ fontSize: "1.15rem", color: "rgba(200,216,240,0.65)", lineHeight: 1.75, maxWidth: "52ch", marginBottom: "2.5rem" }}>
              Mixed-use developments are the most complex curb environments in modern real estate — residential, retail, office, and hospitality all competing for the same curb space. Curbonomous manages it all in one system.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:partnerships@curbonomous.com" className="px-8 py-4 font-black text-xs tracking-widest uppercase rounded-sm" style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)", color: "#000" }}>
                Schedule Demo
              </a>
              <Link href="/solutions/mobility-hubs" className="px-8 py-4 font-bold text-xs tracking-widest uppercase rounded-sm" style={{ border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff" }}>
                Mobility Hub Platform →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-3">WHAT WE MANAGE</div>
            <h2 className="font-black text-white mb-12" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>Every curb use case in one development</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "Resident Permit Management", desc: "Digital resident curb permits with automated enforcement. Residents get guaranteed access; visitors get time-limited zones.", color: "#00d4ff" },
                { title: "Retail Curbside Pickup", desc: "Designated pickup zones for retail tenants with dwell time limits, compliance monitoring, and turnover optimization.", color: "#7b2fff" },
                { title: "Commercial Delivery Coordination", desc: "Loading zone management for commercial deliveries serving multiple tenants — time windows, carrier scheduling, and dwell enforcement.", color: "#ff9a00" },
                { title: "AV Pickup Zones", desc: "Dedicated robotaxi zones for residents and office tenants. Generate revenue from AV operator access fees.", color: "#00ff88" },
                { title: "Drone Landing Infrastructure", desc: "Rooftop drone ports serving all development tenants. One infrastructure investment, multiple operator revenue streams.", color: "#ff9a00" },
                { title: "Office Fleet Access", desc: "Managed access for corporate fleet vehicles, employee shuttles, and valet operations serving office tenants.", color: "#0066ff" },
              ].map((sol) => (
                <div key={sol.title} className="p-6" style={{ background: "rgba(5,12,25,0.8)", border: `1px solid ${sol.color}18` }}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full" style={{ background: sol.color }} />
                    <h3 className="font-black text-white text-sm">{sol.title}</h3>
                  </div>
                  <p className="text-sm" style={{ color: "rgba(200,216,240,0.55)", lineHeight: 1.7 }}>{sol.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6" style={{ background: "rgba(5,12,25,0.4)", borderTop: "1px solid rgba(0,212,255,0.06)" }}>
          <div className="max-w-screen-xl mx-auto">
            <div className="p-12 text-center" style={{ background: "rgba(5,12,25,0.9)", border: "1px solid rgba(0,212,255,0.2)" }}>
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-4">◈ MIXED-USE ASSESSMENT</div>
              <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}>Build the autonomous mixed-use development</h2>
              <p className="text-[#c8d8f0]/55 max-w-xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                Get a free curb infrastructure assessment for your mixed-use development — existing or in planning. We design for the tenant mix you have and the autonomous future you&apos;re building toward.
              </p>
              <a href="mailto:partnerships@curbonomous.com" className="px-10 py-4 font-black text-sm tracking-widest uppercase rounded-sm inline-block" style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)", color: "#000" }}>
                Get Development Assessment
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
