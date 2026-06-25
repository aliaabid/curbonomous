import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Curb Management Software | Intelligent Curb Intelligence Platform — Curbonomous",
  description: "Curbonomous is the leading intelligent curb management platform for cities, airports, and properties. Real-time curb occupancy detection, autonomous zone management, and AI-powered enforcement.",
  keywords: ["curb management software", "intelligent curb management", "curb management platform", "curb occupancy detection", "smart curb technology", "autonomous curb management"],
};

const FEATURES = [
  {
    title: "Real-Time Curb Occupancy",
    desc: "Computer vision cameras monitor every curb zone 24/7. Know occupancy, dwell time, vehicle type, and compliance status for every space in real time.",
    color: "#00d4ff",
    icon: "◉",
  },
  {
    title: "Autonomous Zone Enforcement",
    desc: "Automated detection of dwell violations, unauthorized vehicles, and zone misuse. Trigger alerts, citations, or access control without human intervention.",
    color: "#7b2fff",
    icon: "⬡",
  },
  {
    title: "Dynamic Zone Allocation",
    desc: "Reprogram curb zones in real time based on demand. Convert parking to pickup to delivery to AV staging based on live conditions.",
    color: "#00ff88",
    icon: "◈",
  },
  {
    title: "Revenue Optimization",
    desc: "Dynamic pricing, automated billing, and per-vehicle fee collection. Turn passive curb space into a managed, revenue-generating asset.",
    color: "#ff9a00",
    icon: "◆",
  },
  {
    title: "Multi-Modal Coordination",
    desc: "Manage robotaxis, rideshare, delivery robots, drones, and standard vehicles all from one unified control layer.",
    color: "#0066ff",
    icon: "⬢",
  },
  {
    title: "Immutable Documentation",
    desc: "Every curb event is timestamped, documented, and stored in an immutable log. Full audit trail for compliance, liability, and analytics.",
    color: "#00d4ff",
    icon: "◫",
  },
];

const USE_CASES = [
  { label: "Cities & DOTs", desc: "Manage loading zones, enforce dwell limits, optimize curb revenue, and prepare for autonomous vehicle deployment.", href: "/industries/cities" },
  { label: "Airports", desc: "Control terminal curbsides, manage TNC compliance, stage autonomous pickups, and coordinate drone logistics.", href: "/industries/airports" },
  { label: "Commercial Real Estate", desc: "Monitor building access curbs, manage deliveries, allocate tenant zones, and track curb utilization.", href: "/industries/commercial-real-estate" },
  { label: "Mixed-Use Developments", desc: "Coordinate residential, retail, and office curb access with zone-level control and resident permits.", href: "/industries/mixed-use" },
  { label: "Universities", desc: "Manage campus curb access, autonomous shuttle zones, delivery areas, and parking enforcement.", href: "/industries/universities" },
  { label: "Hotels", desc: "Valet coordination, rideshare zones, luggage loading, and guest vehicle management from a single platform.", href: "/industries/hotels" },
];

const FAQS = [
  {
    q: "What is intelligent curb management?",
    a: "Intelligent curb management uses computer vision, AI, and real-time data to monitor, manage, and optimize curbside spaces. Unlike traditional parking management, it handles all vehicle types — autonomous vehicles, rideshare, delivery robots, drones, and standard vehicles — with automated enforcement and dynamic zone allocation.",
  },
  {
    q: "How does Curbonomous detect curb occupancy?",
    a: "Curbonomous deploys edge-AI cameras at curb level and overhead that continuously analyze the scene. The system identifies vehicle presence, type, license plate, dwell time, and compliance status in under 100 milliseconds with 99.4% accuracy.",
  },
  {
    q: "Can curb management software handle autonomous vehicles?",
    a: "Yes. Curbonomous is purpose-built for the autonomous era. The platform manages dedicated AV pickup zones, robotaxi staging queues, and drone landing pads alongside traditional vehicles — all in one unified system.",
  },
  {
    q: "What is the ROI of intelligent curb management?",
    a: "Customers typically see 30–60% reduction in curb congestion, 40% improvement in zone utilization, and significant increases in curb revenue through dynamic pricing and automated enforcement. Most deployments achieve positive ROI within 6 months.",
  },
  {
    q: "How long does deployment take?",
    a: "A standard deployment takes 4–8 weeks from contract to go-live: 1–2 weeks for site assessment and camera positioning, 2–3 weeks for installation, and 1–2 weeks for calibration and training. Hardware-as-a-Service deployments require zero capital expenditure.",
  },
];

export default function CurbManagementPage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#000008" }}>
      <Nav />
      <div className="pt-16">

        {/* Hero */}
        <section
          className="py-28 px-6 relative overflow-hidden"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.08) 0%, transparent 65%)",
            borderBottom: "1px solid rgba(0,212,255,0.1)",
          }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }} />
          <div className="max-w-screen-xl mx-auto relative">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-5">
              ◈ CURB MANAGEMENT PLATFORM
            </div>
            <h1
              className="font-black text-white mb-6"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.02em", maxWidth: "18ch" }}
            >
              Intelligent Curb Management for the Autonomous Era
            </h1>
            <p style={{ fontSize: "1.15rem", color: "rgba(200,216,240,0.65)", lineHeight: 1.75, maxWidth: "52ch", marginBottom: "2.5rem" }}>
              Curbonomous transforms every curb zone into a managed, intelligent, revenue-generating asset. Real-time visibility, autonomous enforcement, and full coordination across every vehicle type — from robotaxis to delivery drones.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:demo@curbonomous.com"
                className="px-8 py-4 font-black text-xs tracking-widest uppercase rounded-sm"
                style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)", color: "#000" }}
              >
                Schedule a Demo
              </a>
              <Link
                href="/resources"
                className="px-8 py-4 font-bold text-xs tracking-widest uppercase rounded-sm"
                style={{ border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff" }}
              >
                Download Platform Guide →
              </Link>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section style={{ borderBottom: "1px solid rgba(0,212,255,0.08)", background: "rgba(0,212,255,0.02)" }}>
          <div className="max-w-screen-xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "99.4%", label: "Detection Accuracy" },
              { value: "<100ms", label: "Real-Time Latency" },
              { value: "40%", label: "Avg Congestion Reduction" },
              { value: "6 mo", label: "Typical ROI Timeline" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-black text-[#00d4ff]" style={{ fontSize: "2rem", fontFamily: "monospace" }}>{s.value}</div>
                <div className="text-[9px] font-bold tracking-widest uppercase mt-1" style={{ color: "rgba(200,216,240,0.4)", fontFamily: "monospace" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-3">PLATFORM CAPABILITIES</div>
            <h2 className="font-black text-white mb-12" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>
              Everything curb management requires
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {FEATURES.map((f) => (
                <div key={f.title} className="p-6" style={{ background: "rgba(5,12,25,0.8)", border: `1px solid ${f.color}18` }}>
                  <div className="flex items-center gap-3 mb-3">
                    <span style={{ color: f.color, fontSize: "1.1rem" }}>{f.icon}</span>
                    <h3 className="font-black text-white text-sm">{f.title}</h3>
                  </div>
                  <p className="text-sm" style={{ color: "rgba(200,216,240,0.55)", lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 px-6" style={{ background: "rgba(5,12,25,0.4)", borderTop: "1px solid rgba(0,212,255,0.06)" }}>
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-3">HOW IT WORKS</div>
            <h2 className="font-black text-white mb-12" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>
              From dumb curb to intelligent infrastructure
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Sense", desc: "Edge-AI cameras deployed at curb level capture every vehicle, every second, at up to 4K resolution." },
                { step: "02", title: "Analyze", desc: "On-device AI classifies vehicle type, reads license plates, measures dwell time, and detects violations in under 100ms." },
                { step: "03", title: "Coordinate", desc: "The Curbonomous platform orchestrates zone assignments, sends enforcement signals, and coordinates across vehicle types." },
                { step: "04", title: "Optimize", desc: "Continuous learning improves zone allocation, pricing, and enforcement based on real-world patterns." },
              ].map((s) => (
                <div key={s.step} className="relative">
                  <div className="text-[10px] font-black tracking-widest mb-3" style={{ color: "rgba(0,212,255,0.3)", fontFamily: "monospace" }}>STEP {s.step}</div>
                  <div className="font-black text-white text-xl mb-2">{s.title}</div>
                  <p className="text-sm" style={{ color: "rgba(200,216,240,0.55)", lineHeight: 1.7 }}>{s.desc}</p>
                  {s.step !== "04" && (
                    <div className="hidden md:block absolute top-8 right-0 text-[#00d4ff] opacity-20" style={{ transform: "translateX(50%)" }}>→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-3">BUILT FOR YOUR CONTEXT</div>
            <h2 className="font-black text-white mb-12" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>
              Curb management for every environment
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {USE_CASES.map((uc) => (
                <Link
                  key={uc.label}
                  href={uc.href}
                  className="p-6 block transition-all"
                  style={{ background: "rgba(5,12,25,0.7)", border: "1px solid rgba(0,212,255,0.12)" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00d4ff" }} />
                    <span className="font-black text-white text-sm">{uc.label}</span>
                  </div>
                  <p className="text-sm" style={{ color: "rgba(200,216,240,0.5)", lineHeight: 1.65 }}>{uc.desc}</p>
                  <div className="mt-3 text-[10px] font-bold tracking-wider" style={{ color: "#00d4ff" }}>Learn more →</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6" style={{ background: "rgba(5,12,25,0.4)", borderTop: "1px solid rgba(0,212,255,0.06)" }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-3">FAQ</div>
            <h2 className="font-black text-white mb-10" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "-0.02em" }}>
              Curb management questions, answered
            </h2>
            <div className="space-y-0">
              {FAQS.map((faq, i) => (
                <div key={i} className="py-6" style={{ borderBottom: "1px solid rgba(0,212,255,0.08)" }}>
                  <h3 className="font-black text-white mb-3" style={{ fontSize: "1rem" }}>{faq.q}</h3>
                  <p style={{ color: "rgba(200,216,240,0.6)", lineHeight: 1.75, fontSize: "0.9rem" }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="p-12 text-center" style={{ background: "rgba(5,12,25,0.9)", border: "1px solid rgba(0,212,255,0.2)" }}>
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-4">◈ GET STARTED</div>
              <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}>
                Ready to manage your curb intelligently?
              </h2>
              <p className="text-[#c8d8f0]/55 max-w-xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                Schedule a demo and get a custom curb management assessment for your property or city. Deployments start in 4 weeks.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:demo@curbonomous.com"
                  className="px-10 py-4 font-black text-sm tracking-widest uppercase rounded-sm"
                  style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)", color: "#000" }}
                >
                  Schedule Demo
                </a>
                <Link
                  href="/solutions/computer-vision"
                  className="px-10 py-4 font-bold text-sm tracking-widest uppercase rounded-sm"
                  style={{ border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff" }}
                >
                  View Technology →
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
