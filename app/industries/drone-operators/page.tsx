import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drone Operator Infrastructure & Urban Deployment | Robotics Companies — Curbonomous",
  description: "Curbonomous provides the ground infrastructure for drone delivery operators and robotics companies deploying in US cities. Landing zones, FAA compliance, and city coordination built in.",
  keywords: ["drone operator infrastructure", "urban drone deployment", "drone delivery infrastructure partner", "robotics company infrastructure", "drone landing zone", "urban drone operations"],
};

export default function DroneOperatorsPage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#000008" }}>
      <Nav />
      <div className="pt-16">
        <section className="py-28 px-6 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 60% 30%, rgba(255,154,0,0.07) 0%, transparent 60%)", borderBottom: "1px solid rgba(0,212,255,0.1)" }}>
          <div className="max-w-screen-xl mx-auto relative">
            <div className="text-[10px] font-bold tracking-widest uppercase mb-5" style={{ color: "#ff9a00" }}>◈ DRONE OPERATORS & ROBOTICS COMPANIES</div>
            <h1 className="font-black text-white mb-6" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.02em", maxWidth: "22ch" }}>
              Ground Infrastructure for Urban Drone Operations
            </h1>
            <p style={{ fontSize: "1.15rem", color: "rgba(200,216,240,0.65)", lineHeight: 1.75, maxWidth: "52ch", marginBottom: "2.5rem" }}>
              For drone delivery operators and robotics companies, Curbonomous provides the city-side ground infrastructure that makes urban operations scalable — landing zones, compliance documentation, and city coordination, without building it yourself.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:partnerships@curbonomous.com" className="px-8 py-4 font-black text-xs tracking-widest uppercase rounded-sm" style={{ background: "linear-gradient(135deg, #ff9a00, #ff6b00)", color: "#000" }}>
                Operator Partnership Program
              </a>
              <Link href="/solutions/drone-infrastructure" className="px-8 py-4 font-bold text-xs tracking-widest uppercase rounded-sm" style={{ border: "1px solid rgba(255,154,0,0.3)", color: "#ff9a00" }}>
                Drone Infrastructure Platform →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: "#ff9a00" }}>WHAT OPERATORS GET</div>
            <h2 className="font-black text-white mb-12" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>Pre-built city infrastructure for your operations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Landing Zone Network", desc: "Access a growing network of pre-certified landing zones at commercial buildings, parking structures, and dedicated ground pads. No site-by-site negotiation.", color: "#ff9a00" },
                { title: "FAA Compliance Documentation", desc: "Automated flight logging, airspace classification verification, and regulatory documentation. BVLOS-ready audit trail for every operation.", color: "#00d4ff" },
                { title: "City Coordination API", desc: "Real-time integration with city transportation management systems. Compliance signals, route approvals, and corridor clearances via API.", color: "#7b2fff" },
                { title: "Ground-Air Handoff", desc: "Coordination between drone operations and ground delivery robots, couriers, and receiving facilities. Seamless last-mile continuity.", color: "#00ff88" },
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
            <div className="p-12 text-center" style={{ background: "rgba(5,12,25,0.9)", border: "1px solid rgba(255,154,0,0.2)" }}>
              <div className="text-[10px] font-bold tracking-widest uppercase mb-4" style={{ color: "#ff9a00" }}>◈ BECOME AN OPERATOR PARTNER</div>
              <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}>Scale urban operations faster</h2>
              <p className="text-[#c8d8f0]/55 max-w-xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                Join the Curbonomous operator partner network and deploy in cities with pre-built infrastructure, faster permitting, and integrated city coordination.
              </p>
              <a href="mailto:partnerships@curbonomous.com" className="px-10 py-4 font-black text-sm tracking-widest uppercase rounded-sm inline-block" style={{ background: "linear-gradient(135deg, #ff9a00, #ff6b00)", color: "#000" }}>
                Join Operator Network
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
