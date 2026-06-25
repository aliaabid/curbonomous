import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Urban Digital Twin Platform | Real-Time City Intelligence — Curbonomous",
  description: "Curbonomous builds real-time digital twins of urban mobility environments. Synchronize physical curb infrastructure with a live digital model for cities, airports, and properties.",
  keywords: ["urban digital twin", "city digital twin", "digital twin platform", "digital twin transportation", "real-time digital twin", "smart city digital twin"],
};

const CAPABILITIES = [
  { title: "Real-Time Physical Sync", desc: "Every vehicle, zone status, and infrastructure event updates the digital twin within 100ms. The model is never stale.", color: "#00d4ff" },
  { title: "Predictive Simulation", desc: "Run simulations against the live twin — model congestion patterns, test zone configurations, and predict demand before making physical changes.", color: "#7b2fff" },
  { title: "Historical Replay", desc: "Replay any moment in the digital twin's history. Investigate incidents, analyze patterns, and audit compliance against the immutable record.", color: "#00ff88" },
  { title: "Multi-Layer Visualization", desc: "Visualize vehicle flows, zone occupancy, sensor coverage, air corridors, and pedestrian movement simultaneously across any time window.", color: "#ff9a00" },
  { title: "API & Data Export", desc: "The digital twin exposes a full API for integration with city dashboards, building management systems, and third-party analytics platforms.", color: "#0066ff" },
  { title: "Anomaly Detection", desc: "AI continuously monitors the twin for deviations from expected patterns — detecting incidents, infrastructure failures, or emerging congestion before they escalate.", color: "#00d4ff" },
];

export default function DigitalTwinPage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#000008" }}>
      <Nav />
      <div className="pt-16">

        <section
          className="py-28 px-6 relative overflow-hidden"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(0,255,136,0.06) 0%, transparent 60%)",
            borderBottom: "1px solid rgba(0,212,255,0.1)",
          }}
        >
          <div className="max-w-screen-xl mx-auto relative">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00ff88] mb-5">◈ URBAN DIGITAL TWIN</div>
            <h1 className="font-black text-white mb-6" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.02em", maxWidth: "20ch" }}>
              A Living Digital Model of Your Physical World
            </h1>
            <p style={{ fontSize: "1.15rem", color: "rgba(200,216,240,0.65)", lineHeight: 1.75, maxWidth: "52ch", marginBottom: "2.5rem" }}>
              Curbonomous builds and maintains real-time digital twins of urban mobility environments. Every curb zone, every vehicle, every event — synchronized to a live model you can query, visualize, simulate, and act on.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:demo@curbonomous.com" className="px-8 py-4 font-black text-xs tracking-widest uppercase rounded-sm" style={{ background: "linear-gradient(135deg, #00ff88, #00d4ff)", color: "#000" }}>
                Request Digital Twin Demo
              </a>
              <Link href="/technology" className="px-8 py-4 font-bold text-xs tracking-widest uppercase rounded-sm" style={{ border: "1px solid rgba(0,255,136,0.3)", color: "#00ff88" }}>
                Technology Architecture →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00ff88] mb-3">TWIN CAPABILITIES</div>
            <h2 className="font-black text-white mb-12" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>
              More than a map. A living model.
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

        {/* Use cases by type */}
        <section className="py-24 px-6" style={{ background: "rgba(5,12,25,0.4)", borderTop: "1px solid rgba(0,212,255,0.06)" }}>
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00ff88] mb-3">DIGITAL TWIN BY ENVIRONMENT</div>
            <h2 className="font-black text-white mb-12" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>
              Built for every physical environment
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "City Digital Twin", desc: "Model every curb zone, traffic corridor, and autonomous vehicle deployment area across an entire city. Used by transportation departments for planning, enforcement, and AV policy.", href: "/industries/cities", color: "#00d4ff" },
                { title: "Airport Digital Twin", desc: "Real-time model of every terminal curbside zone, ground vehicle, and drone corridor. Used by airport operations teams for capacity planning and incident response.", href: "/industries/airports", color: "#7b2fff" },
                { title: "Campus Digital Twin", desc: "Map of all shuttle routes, delivery zones, and pedestrian corridors across a university or corporate campus. Enables autonomous vehicle routing optimization.", href: "/industries/universities", color: "#00ff88" },
                { title: "Property Digital Twin", desc: "Building-level model of all curb access points, loading zones, and delivery areas. Used by property managers for tenant coordination and infrastructure planning.", href: "/industries/commercial-real-estate", color: "#ff9a00" },
              ].map((uc) => (
                <Link key={uc.title} href={uc.href} className="p-6 block transition-all" style={{ background: "rgba(5,12,25,0.7)", border: `1px solid ${uc.color}18` }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: uc.color }} />
                    <h3 className="font-black text-white text-sm">{uc.title}</h3>
                  </div>
                  <p className="text-sm mb-3" style={{ color: "rgba(200,216,240,0.5)", lineHeight: 1.65 }}>{uc.desc}</p>
                  <span className="text-[10px] font-bold tracking-wider" style={{ color: uc.color }}>Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="p-12 text-center" style={{ background: "rgba(5,12,25,0.9)", border: "1px solid rgba(0,255,136,0.2)" }}>
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#00ff88] mb-4">◈ BUILD YOUR DIGITAL TWIN</div>
              <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}>
                See your physical world in real time
              </h2>
              <p className="text-[#c8d8f0]/55 max-w-xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                Schedule a digital twin demo and see how your existing infrastructure maps to a live model. We can have your environment in the twin within 4 weeks.
              </p>
              <a href="mailto:demo@curbonomous.com" className="px-10 py-4 font-black text-sm tracking-widest uppercase rounded-sm inline-block" style={{ background: "linear-gradient(135deg, #00ff88, #00d4ff)", color: "#000" }}>
                Request Digital Twin Demo
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
