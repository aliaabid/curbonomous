import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import PublicInfrastructure from "@/components/sections/PublicInfrastructure";
import DemoSection from "@/components/sections/DemoSection";

const SOLUTIONS = [
  {
    title: "Smart Curb Management",
    color: "#00d4ff",
    outcomes: ["30% reduction in loading zone violations", "25% improvement in curb turnover", "Real-time occupancy across all zones"],
    desc: "Transform every curb foot into a digital asset. Know who is parked where, for how long, and whether they belong there — in real time.",
  },
  {
    title: "Bike Lane Monitoring",
    color: "#00ff88",
    outcomes: ["Automated blockage detection", "Photographic evidence capture", "Integration with citation workflows"],
    desc: "AI-powered bike lane protection that flags vehicles the moment they block cycling infrastructure — with image evidence for enforcement.",
  },
  {
    title: "Bus Lane Enforcement",
    color: "#ff6b35",
    outcomes: ["Transit speed improvement", "Automated violation detection", "Court-admissible evidence"],
    desc: "Protect transit investment. Keep bus lanes clear with computer vision that identifies and documents every violation automatically.",
  },
  {
    title: "Loading Zone Optimization",
    color: "#7b2fff",
    outcomes: ["Dynamic time windows by demand", "Commercial delivery compliance", "Revenue optimization"],
    desc: "Turn loading zones from a source of chaos into a managed, revenue-generating city asset with dynamic allocation and enforcement.",
  },
  {
    title: "Congestion Analytics",
    color: "#ffd700",
    outcomes: ["Real-time network visibility", "Predictive congestion modeling", "Incident detection < 60 seconds"],
    desc: "Understand how your network is functioning at every moment — with predictive analytics to prevent gridlock before it forms.",
  },
  {
    title: "Autonomous Mobility Readiness",
    color: "#00d4ff",
    outcomes: ["AV pickup zone management", "Robotaxi infrastructure", "Regulatory compliance framework"],
    desc: "Future-proof your transportation infrastructure today. Curbonomous prepares cities for the autonomous vehicle era — now.",
  },
];

const CASE_STUDIES = [
  {
    city: "Metro Atlanta",
    type: "Downtown Loading Zone Optimization",
    outcome: "31% increase in curb turnover · $2.1M annual revenue gain",
    color: "#00d4ff",
  },
  {
    city: "Phoenix Sky Harbor Airport",
    type: "Curbside Intelligence Deployment",
    outcome: "94% ride-hailing compliance · 40% reduction in terminal congestion",
    color: "#7b2fff",
  },
  {
    city: "City of Austin",
    type: "Bike Lane & Bus Lane Protection",
    outcome: "67% reduction in bike lane blockages · Improved transit speeds 12%",
    color: "#00ff88",
  },
];

export default function GovernmentPage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#000008" }}>
      <Nav />
      <div className="pt-16">

        {/* Hero */}
        <div
          className="py-24 px-6"
          style={{
            background: "radial-gradient(ellipse at 30% 60%, rgba(0,102,255,0.1) 0%, transparent 60%)",
            borderBottom: "1px solid rgba(0,102,255,0.1)",
          }}
        >
          <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#0066ff] mb-4">
                ◈ GOVERNMENT & PUBLIC AGENCIES
              </div>
              <h1
                className="font-black text-white mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
              >
                The Platform Cities<br />
                <span style={{ color: "#0066ff" }}>Are Choosing</span>
              </h1>
              <p style={{ fontSize: "1.1rem", color: "rgba(200,216,240,0.65)", lineHeight: 1.75, maxWidth: "44ch" }}>
                Curbonomous helps transportation directors, public works departments,
                transit agencies, and smart city programs deliver measurable outcomes
                — not just technology.
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href="#demo"
                  className="px-8 py-4 font-black text-xs tracking-widest uppercase rounded-sm"
                  style={{ background: "linear-gradient(135deg, #0066ff, #00d4ff)", color: "#000" }}
                >
                  Request Government Demo
                </a>
                <a
                  href="#procurement"
                  className="px-8 py-4 font-bold text-xs tracking-widest uppercase rounded-sm"
                  style={{ border: "1px solid rgba(0,102,255,0.4)", color: "#0066ff" }}
                >
                  RFP Support →
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50+", label: "City Deployments", color: "#00d4ff" },
                { value: "12,000+", label: "Cameras Managed", color: "#00ff88" },
                { value: "99.97%", label: "Platform Uptime", color: "#7b2fff" },
                { value: "90 Days", label: "Deployment Time", color: "#ff6b35" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 text-center"
                  style={{ background: "rgba(5,12,25,0.8)", border: `1px solid ${stat.color}22` }}
                >
                  <div className="font-black text-white mb-1" style={{ fontSize: "2rem", letterSpacing: "-0.02em" }}>
                    {stat.value}
                  </div>
                  <div className="text-[8px] font-bold tracking-widest uppercase" style={{ color: stat.color, fontFamily: "monospace" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Solution areas */}
        <section className="py-20 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-8">
              SOLUTION AREAS
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SOLUTIONS.map((sol) => (
                <div
                  key={sol.title}
                  className="p-6"
                  style={{ background: "rgba(5,12,25,0.7)", border: `1px solid ${sol.color}18` }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full" style={{ background: sol.color }} />
                    <span className="font-black text-white text-sm">{sol.title}</span>
                  </div>
                  <p className="text-[0.82rem] mb-4" style={{ color: "rgba(200,216,240,0.55)", lineHeight: 1.7 }}>{sol.desc}</p>
                  <div className="space-y-1.5">
                    {sol.outcomes.map((o) => (
                      <div key={o} className="flex items-center gap-2">
                        <span style={{ color: sol.color, fontSize: "0.7rem" }}>→</span>
                        <span className="text-[0.75rem] font-semibold" style={{ color: sol.color }}>{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section
          className="py-20 px-6"
          style={{ background: "rgba(5,12,25,0.4)", borderTop: "1px solid rgba(0,212,255,0.06)" }}
        >
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-8">
              DEPLOYMENTS
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {CASE_STUDIES.map((cs) => (
                <div
                  key={cs.city}
                  className="p-6"
                  style={{ background: "rgba(5,12,25,0.9)", border: `1px solid ${cs.color}22` }}
                >
                  <div className="text-[9px] font-bold tracking-widest uppercase mb-1" style={{ color: cs.color, fontFamily: "monospace" }}>
                    DEPLOYMENT
                  </div>
                  <h3 className="font-black text-white text-lg mb-1">{cs.city}</h3>
                  <p className="text-[0.8rem] mb-4" style={{ color: "rgba(200,216,240,0.5)" }}>{cs.type}</p>
                  <div
                    className="p-3"
                    style={{ background: `${cs.color}0a`, border: `1px solid ${cs.color}22` }}
                  >
                    <span className="text-[0.8rem] font-bold" style={{ color: cs.color }}>{cs.outcome}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PublicInfrastructure />
        <DemoSection />
      </div>
      <Footer />
    </main>
  );
}
