import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AV Infrastructure for Autonomous Vehicle Companies | Fleet Deployment — Curbonomous",
  description: "Curbonomous accelerates autonomous vehicle deployment by providing pre-built curb infrastructure, pickup zone management, and compliance documentation at scale across American cities.",
  keywords: ["autonomous vehicle deployment", "AV infrastructure partner", "robotaxi deployment infrastructure", "AV fleet management", "autonomous vehicle curb API", "AV operator platform"],
};

export default function AVCompaniesPage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#000008" }}>
      <Nav />
      <div className="pt-16">

        <section className="py-28 px-6 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 70% 40%, rgba(123,47,255,0.08) 0%, transparent 60%)", borderBottom: "1px solid rgba(0,212,255,0.1)" }}>
          <div className="max-w-screen-xl mx-auto relative">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#7b2fff] mb-5">◈ AUTONOMOUS VEHICLE COMPANIES</div>
            <h1 className="font-black text-white mb-6" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.02em", maxWidth: "22ch" }}>
              Deploy Faster with Pre-Built Curb Infrastructure
            </h1>
            <p style={{ fontSize: "1.15rem", color: "rgba(200,216,240,0.65)", lineHeight: 1.75, maxWidth: "52ch", marginBottom: "2.5rem" }}>
              Every city where Curbonomous is deployed is a city where your vehicles arrive to managed pickup zones, clear documentation, and integrated dispatch APIs. No site-by-site infrastructure negotiation. Just deploy.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:partnerships@curbonomous.com" className="px-8 py-4 font-black text-xs tracking-widest uppercase rounded-sm" style={{ background: "linear-gradient(135deg, #7b2fff, #0066ff)", color: "#fff" }}>
                Become an Integration Partner
              </a>
              <Link href="/solutions/autonomous-vehicles" className="px-8 py-4 font-bold text-xs tracking-widest uppercase rounded-sm" style={{ border: "1px solid rgba(123,47,255,0.35)", color: "#7b2fff" }}>
                AV Infrastructure Platform →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#7b2fff] mb-3">THE AV OPERATOR PROBLEM</div>
            <h2 className="font-black text-white mb-8" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>Every new city deployment starts from zero</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <p style={{ color: "rgba(200,216,240,0.65)", lineHeight: 1.8, fontSize: "0.95rem" }}>
                  Without dedicated curb infrastructure, every AV deployment requires months of negotiation with cities, properties, and other operators — just to access the curbside. Curbonomous creates pre-built zones that any AV operator can activate, reducing time-to-deployment and eliminating infrastructure bottlenecks.
                </p>
              </div>
              <div className="space-y-3">
                {["Months of city negotiation per deployment site", "Custom infrastructure builds at each location", "No shared framework with other AV operators", "Manual compliance documentation", "No neutral platform for zone coordination"].map((p) => (
                  <div key={p} className="flex items-start gap-3 p-3" style={{ background: "rgba(255,51,68,0.05)", border: "1px solid rgba(255,51,68,0.1)" }}>
                    <span style={{ color: "#ff3344", flexShrink: 0 }}>✕</span>
                    <span className="text-sm" style={{ color: "rgba(200,216,240,0.6)" }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[10px] font-bold tracking-widest uppercase text-[#7b2fff] mb-3">WITH CURBONOMOUS</div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "Pre-Certified AV Zones", desc: "Arrive to pickup zones that are already designated, camera-monitored, and ready for activation. No setup required per location.", color: "#7b2fff" },
                { title: "Real-Time Zone API", desc: "Query zone availability, reserve slots, and report vehicle arrivals via a standardized REST API. Works across all Curbonomous partner locations.", color: "#00d4ff" },
                { title: "Automated Compliance Docs", desc: "Every pickup and drop-off generates compliant documentation automatically. Regulatory reporting without operational overhead.", color: "#00ff88" },
                { title: "Multi-Operator Coordination", desc: "Coordinate zone access with other AV operators through a neutral platform. No conflicts, no preferential treatment, fair queue management.", color: "#ff9a00" },
                { title: "Incident Documentation", desc: "Any curbside incident is automatically documented with video evidence, timestamps, and classification. Insurance and liability protection built in.", color: "#0066ff" },
                { title: "City Partner Network", desc: "Each new Curbonomous city deployment becomes available to all AV operator partners immediately. Scale your deployment network with each new city added.", color: "#7b2fff" },
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
            <div className="p-12 text-center" style={{ background: "rgba(5,12,25,0.9)", border: "1px solid rgba(123,47,255,0.2)" }}>
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#7b2fff] mb-4">◈ INTEGRATION PARTNERSHIP</div>
              <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}>Join the Curbonomous AV Partner Network</h2>
              <p className="text-[#c8d8f0]/55 max-w-xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                API integration, co-marketing, and priority access to new city deployments. Contact our partnerships team to discuss integration.
              </p>
              <a href="mailto:partnerships@curbonomous.com" className="px-10 py-4 font-black text-sm tracking-widest uppercase rounded-sm inline-block" style={{ background: "linear-gradient(135deg, #7b2fff, #0066ff)", color: "#fff" }}>
                Contact Partnerships Team
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
