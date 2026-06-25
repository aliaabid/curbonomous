import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

const COMPETITORS: Record<string, {
  name: string;
  tagline: string;
  focus: string;
  color: string;
  theyDo: string[];
  theyDontDo: string[];
  curbonomousDoes: string[];
  verdict: string;
}> = {
  "automotus": {
    name: "Automotus",
    tagline: "Curb analytics platform",
    focus: "Curb data collection and analytics for parking and loading zones",
    color: "#00d4ff",
    theyDo: ["Curb occupancy data collection", "Analytics dashboards", "City reporting tools", "Sensor hardware"],
    theyDontDo: ["Autonomous vehicle zone management", "Drone infrastructure", "Delivery robot coordination", "Digital twin platform", "Multi-operator AV coordination", "Dynamic zone reprogramming"],
    curbonomousDoes: ["Full AV zone management and coordination", "Drone landing infrastructure", "Delivery robot staging and compliance", "Real-time digital twin", "Multi-operator neutral platform", "Dynamic zone allocation", "Revenue optimization engine", "API for AV operators"],
    verdict: "Automotus focuses on data collection and reporting for traditional curb management. Curbonomous is built for the autonomous era — managing not just data but active coordination of AVs, drones, and delivery robots.",
  },
  "numina": {
    name: "Numina",
    tagline: "Urban sensing platform",
    focus: "Pedestrian and vehicle counting for urban planning",
    color: "#7b2fff",
    theyDo: ["Pedestrian counting", "Vehicle volume measurement", "Urban planning analytics", "Privacy-first sensing"],
    theyDontDo: ["Curb enforcement", "AV zone management", "Drone infrastructure", "Delivery robot management", "Revenue optimization", "Real-time enforcement actions"],
    curbonomousDoes: ["Active curb zone enforcement", "AV pickup zone management", "Drone landing infrastructure", "Real-time violation detection", "Revenue generation", "Immutable compliance documentation"],
    verdict: "Numina collects aggregate urban mobility data for planning purposes. Curbonomous manages active curb operations — enforcement, AV coordination, and revenue — in real time.",
  },
  "urban-sdk": {
    name: "Urban SDK",
    tagline: "Mobility analytics platform",
    focus: "Transportation data analytics and visualization for cities",
    color: "#00ff88",
    theyDo: ["Transportation data analytics", "GIS integration", "City dashboard tools", "Traffic pattern analysis"],
    theyDontDo: ["Physical curb management", "AV infrastructure", "Drone management", "Enforcement automation", "Hardware deployment", "AV operator coordination"],
    curbonomousDoes: ["Physical curb infrastructure deployment", "AV zone management with hardware", "Drone landing infrastructure", "Automated enforcement", "Edge-AI camera deployment", "Active zone management"],
    verdict: "Urban SDK is a software analytics layer without physical infrastructure. Curbonomous deploys hardware and software together to actively manage the physical curb — not just analyze it.",
  },
  "placer-ai": {
    name: "Placer.ai",
    tagline: "Location analytics platform",
    focus: "Foot traffic and retail location analytics",
    color: "#ff9a00",
    theyDo: ["Foot traffic analytics", "Retail location intelligence", "Competitive benchmarking", "Consumer behavior data"],
    theyDontDo: ["Curb management", "AV infrastructure", "Drone management", "Urban mobility management", "Enforcement tools", "Autonomous vehicle coordination"],
    curbonomousDoes: ["Complete curb zone management", "Autonomous vehicle infrastructure", "Drone landing zones", "Real-time mobility management", "Revenue optimization", "Compliance documentation"],
    verdict: "Placer.ai provides consumer location analytics for retail decisions. Curbonomous manages physical autonomous infrastructure. These are entirely different products serving different buyers.",
  },
  "density": {
    name: "Density",
    tagline: "Indoor space intelligence",
    focus: "Real-time occupancy sensing for indoor spaces",
    color: "#0066ff",
    theyDo: ["Indoor occupancy sensing", "Space utilization analytics", "Meeting room management", "Building operations data"],
    theyDontDo: ["Outdoor curb management", "AV zone management", "Drone infrastructure", "Vehicle detection", "Enforcement", "Autonomous mobility coordination"],
    curbonomousDoes: ["Outdoor curb and mobility zone management", "Vehicle detection and classification", "AV zone coordination", "Drone landing management", "Active enforcement", "City-scale deployment"],
    verdict: "Density manages indoor physical spaces. Curbonomous manages outdoor mobility infrastructure. They operate at different layers of the built environment — indoors vs. the curb.",
  },
};

export async function generateStaticParams() {
  return Object.keys(COMPETITORS).map((competitor) => ({ competitor }));
}

export async function generateMetadata({ params }: { params: Promise<{ competitor: string }> }): Promise<Metadata> {
  const { competitor } = await params;
  const comp = COMPETITORS[competitor];
  if (!comp) return { title: "Comparison Not Found — Curbonomous" };
  return {
    title: `Curbonomous vs ${comp.name} | Autonomous Infrastructure Comparison`,
    description: `Compare Curbonomous and ${comp.name}. See how Curbonomous's autonomous vehicle infrastructure, drone management, and curb intelligence platform compares to ${comp.name}.`,
    keywords: [`curbonomous vs ${comp.name.toLowerCase()}`, `${comp.name.toLowerCase()} alternative`, `autonomous infrastructure comparison`, `curb management vs ${comp.name.toLowerCase()}`],
  };
}

export default async function CompetitorPage({ params }: { params: Promise<{ competitor: string }> }) {
  const { competitor } = await params;
  const comp = COMPETITORS[competitor];

  if (!comp) {
    return (
      <main className="relative min-h-screen" style={{ background: "#000008" }}>
        <Nav />
        <div className="pt-32 text-center px-6">
          <h1 className="font-black text-white text-4xl mb-4">Comparison not found</h1>
          <Link href="/" className="text-[#00d4ff]">← Back to Home</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="relative min-h-screen" style={{ background: "#000008" }}>
      <Nav />
      <div className="pt-16">

        <section className="py-24 px-6 relative overflow-hidden" style={{ background: `radial-gradient(ellipse at 50% 0%, ${comp.color}07 0%, transparent 60%)`, borderBottom: "1px solid rgba(0,212,255,0.1)" }}>
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase mb-4" style={{ color: comp.color }}>◈ PLATFORM COMPARISON</div>
            <h1 className="font-black text-white mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1, letterSpacing: "-0.02em" }}>
              Curbonomous vs {comp.name}
            </h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(200,216,240,0.6)", lineHeight: 1.75, maxWidth: "56ch", marginBottom: "2rem" }}>
              <strong style={{ color: "rgba(200,216,240,0.8)" }}>{comp.name}:</strong> {comp.focus}
            </p>
            <div className="inline-block p-4" style={{ background: "rgba(5,12,25,0.9)", border: `1px solid ${comp.color}22` }}>
              <p style={{ color: "rgba(200,216,240,0.7)", lineHeight: 1.7, maxWidth: "56ch", fontSize: "0.95rem" }}>{comp.verdict}</p>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-20 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-8">FEATURE COMPARISON</div>
            <div className="grid md:grid-cols-3 gap-6">

              {/* What they do */}
              <div className="p-6" style={{ background: "rgba(5,12,25,0.8)", border: `1px solid ${comp.color}22` }}>
                <div className="text-[9px] font-bold tracking-widest uppercase mb-4" style={{ color: comp.color, fontFamily: "monospace" }}>{comp.name.toUpperCase()} COVERS</div>
                <div className="space-y-2">
                  {comp.theyDo.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span style={{ color: comp.color, flexShrink: 0, marginTop: "2px" }}>✓</span>
                      <span className="text-sm" style={{ color: "rgba(200,216,240,0.65)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What they don't do */}
              <div className="p-6" style={{ background: "rgba(5,12,25,0.8)", border: "1px solid rgba(255,51,68,0.15)" }}>
                <div className="text-[9px] font-bold tracking-widest uppercase mb-4" style={{ color: "#ff3344", fontFamily: "monospace" }}>{comp.name.toUpperCase()} DOESN&apos;T COVER</div>
                <div className="space-y-2">
                  {comp.theyDontDo.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span style={{ color: "#ff3344", flexShrink: 0, marginTop: "2px" }}>✕</span>
                      <span className="text-sm" style={{ color: "rgba(200,216,240,0.65)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curbonomous */}
              <div className="p-6" style={{ background: "rgba(5,12,25,0.8)", border: "1px solid rgba(0,212,255,0.22)" }}>
                <div className="text-[9px] font-bold tracking-widest uppercase mb-4" style={{ color: "#00d4ff", fontFamily: "monospace" }}>CURBONOMOUS COVERS</div>
                <div className="space-y-2">
                  {comp.curbonomousDoes.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span style={{ color: "#00d4ff", flexShrink: 0, marginTop: "2px" }}>✓</span>
                      <span className="text-sm" style={{ color: "rgba(200,216,240,0.65)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Other comparisons */}
        <section className="py-16 px-6" style={{ background: "rgba(5,12,25,0.4)", borderTop: "1px solid rgba(0,212,255,0.06)" }}>
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[9px] font-bold tracking-widest uppercase mb-6" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>MORE COMPARISONS</div>
            <div className="flex flex-wrap gap-3">
              {Object.entries(COMPETITORS).filter(([k]) => k !== competitor).map(([k, c]) => (
                <Link key={k} href={`/compare/${k}`} className="px-4 py-2 text-xs font-bold tracking-widest uppercase" style={{ border: "1px solid rgba(0,212,255,0.15)", color: "rgba(200,216,240,0.5)" }}>
                  vs {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="p-12 text-center" style={{ background: "rgba(5,12,25,0.9)", border: "1px solid rgba(0,212,255,0.2)" }}>
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-4">◈ SEE THE DIFFERENCE</div>
              <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}>
                See Curbonomous in action
              </h2>
              <p className="text-[#c8d8f0]/55 max-w-xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                Schedule a demo and see how Curbonomous manages autonomous vehicles, drones, and delivery robots — capabilities that no other platform offers.
              </p>
              <a href="mailto:demo@curbonomous.com" className="px-10 py-4 font-black text-sm tracking-widest uppercase rounded-sm inline-block" style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)", color: "#000" }}>
                Schedule Demo
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
