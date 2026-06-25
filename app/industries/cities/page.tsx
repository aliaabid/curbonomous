import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Smart City Infrastructure & Autonomous Vehicle Management | Cities & Municipalities — Curbonomous",
  description: "Curbonomous helps cities manage autonomous vehicles, drones, and delivery robots with real-time curb intelligence. Purpose-built for municipal transportation departments and DOTs.",
  keywords: ["city autonomous vehicle management", "municipal curb management", "smart city infrastructure", "city AV policy", "autonomous vehicle city deployment", "intelligent transportation system"],
};

const PAIN_POINTS = [
  { issue: "Robotaxis are arriving with no infrastructure to receive them", color: "#ff3344" },
  { issue: "Delivery robots on sidewalks with no oversight or compliance tracking", color: "#ff9a00" },
  { issue: "Drones landing in urban areas without ground management systems", color: "#ff9a00" },
  { issue: "Curb revenue lost to unmanaged dwell and illegal standing", color: "#ff3344" },
  { issue: "No real-time visibility into what is happening at the curb", color: "#ff9a00" },
  { issue: "Liability exposure from undocumented curb incidents", color: "#ff3344" },
];

const CITY_SOLUTIONS = [
  { title: "AV Zone Management", desc: "Designate, activate, and manage dedicated autonomous vehicle pickup and drop-off zones. Coordinate between Waymo, Zoox, and other operators with a neutral platform.", color: "#00d4ff", href: "/solutions/autonomous-vehicles" },
  { title: "Intelligent Curb Enforcement", desc: "Automated detection of dwell violations, illegal standing, and zone misuse. Trigger alerts and citations without requiring physical presence.", color: "#7b2fff", href: "/solutions/curb-management" },
  { title: "Drone Infrastructure", desc: "Manage drone landing zones, air corridors, and compliance documentation for Wing, Amazon, and delivery operators deploying in your city.", color: "#ff9a00", href: "/solutions/drone-infrastructure" },
  { title: "Delivery Robot Management", desc: "Maintain oversight of sidewalk robot deployments — permits, routes, incidents, and compliance scoring — from a single platform.", color: "#00ff88", href: "/solutions/delivery-robots" },
  { title: "City Digital Twin", desc: "A real-time digital model of all curb activity, vehicle movements, and autonomous system deployments across your city for planning and incident response.", color: "#00d4ff", href: "/solutions/digital-twin" },
  { title: "Revenue Optimization", desc: "Dynamic pricing and automated billing for loading zones, AV staging areas, and commercial curb access. New revenue from existing infrastructure.", color: "#0066ff", href: "/solutions/curb-management" },
];

const FAQS = [
  { q: "How quickly can a city deploy Curbonomous?", a: "A pilot deployment for a single district or corridor takes 4–8 weeks. City-wide deployment is phased over 3–6 months. We provide full project management, camera installation coordination, and staff training." },
  { q: "What does Curbonomous cost for a city?", a: "Pricing is based on zone count and camera deployment. Most cities start with a pilot zone (20–50 cameras) before scaling. Hardware-as-a-Service pricing is available with no capital expenditure." },
  { q: "Does Curbonomous respond to government RFPs?", a: "Yes. We respond to all municipal RFPs within 48 hours. We have experience with SBIR, STTR, and standard procurement processes. Contact us at government@curbonomous.com." },
  { q: "How does Curbonomous handle data privacy?", a: "All vehicle data is anonymized within 72 hours. License plate data is used for enforcement only and stored in compliance with state and federal requirements. We do not sell or share individual vehicle data." },
];

export default function CitiesPage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#000008" }}>
      <Nav />
      <div className="pt-16">

        <section className="py-28 px-6 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.08) 0%, transparent 65%)", borderBottom: "1px solid rgba(0,212,255,0.1)" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
          <div className="max-w-screen-xl mx-auto relative">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-5">◈ CITIES & MUNICIPALITIES</div>
            <h1 className="font-black text-white mb-6" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.02em", maxWidth: "22ch" }}>
              Infrastructure for the Autonomous City
            </h1>
            <p style={{ fontSize: "1.15rem", color: "rgba(200,216,240,0.65)", lineHeight: 1.75, maxWidth: "52ch", marginBottom: "2.5rem" }}>
              Curbonomous gives cities the technology infrastructure to manage autonomous vehicles, drones, and delivery robots — with real-time visibility, automated enforcement, and full compliance documentation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:government@curbonomous.com" className="px-8 py-4 font-black text-xs tracking-widest uppercase rounded-sm" style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)", color: "#000" }}>
                Request City Assessment
              </a>
              <Link href="/resources" className="px-8 py-4 font-bold text-xs tracking-widest uppercase rounded-sm" style={{ border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff" }}>
                Download Municipal Guide →
              </Link>
            </div>
          </div>
        </section>

        {/* The problem */}
        <section className="py-20 px-6" style={{ background: "rgba(5,12,25,0.4)", borderBottom: "1px solid rgba(0,212,255,0.06)" }}>
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#ff3344] mb-3">THE PROBLEM EVERY CITY FACES</div>
            <h2 className="font-black text-white mb-8" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>Autonomous systems are arriving. The infrastructure isn't ready.</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {PAIN_POINTS.map((p) => (
                <div key={p.issue} className="p-5 flex items-start gap-3" style={{ background: "rgba(5,12,25,0.8)", border: `1px solid ${p.color}22` }}>
                  <span style={{ color: p.color, fontSize: "1rem", flexShrink: 0, marginTop: "2px" }}>✕</span>
                  <p className="text-sm" style={{ color: "rgba(200,216,240,0.65)", lineHeight: 1.6 }}>{p.issue}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-3">CURBONOMOUS FOR CITIES</div>
            <h2 className="font-black text-white mb-12" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>Everything your city needs to manage autonomous infrastructure</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {CITY_SOLUTIONS.map((sol) => (
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

        {/* City results */}
        <section className="py-16 px-6" style={{ background: "rgba(5,12,25,0.4)", borderTop: "1px solid rgba(0,212,255,0.06)" }}>
          <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "40%", label: "Reduction in curb congestion" },
              { value: "94%+", label: "Zone compliance rate" },
              { value: "6 mo", label: "ROI timeline" },
              { value: "48 hr", label: "RFP response time" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-black text-[#00d4ff] mb-1" style={{ fontSize: "2.5rem", fontFamily: "monospace" }}>{s.value}</div>
                <div className="text-[9px] font-bold tracking-widest uppercase" style={{ color: "rgba(200,216,240,0.4)", fontFamily: "monospace" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-3">CITY FAQ</div>
            <h2 className="font-black text-white mb-10" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "-0.02em" }}>Questions from transportation directors</h2>
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
        <section className="py-24 px-6" style={{ background: "rgba(5,12,25,0.4)", borderTop: "1px solid rgba(0,212,255,0.06)" }}>
          <div className="max-w-screen-xl mx-auto">
            <div className="p-12 text-center" style={{ background: "rgba(5,12,25,0.9)", border: "1px solid rgba(0,212,255,0.2)" }}>
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-4">◈ PROCUREMENT READY</div>
              <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}>Ready to modernize your city's curb infrastructure?</h2>
              <p className="text-[#c8d8f0]/55 max-w-xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                We respond to all city RFPs within 48 hours. Hardware-as-a-Service deployment means zero capital expenditure. Pilots start within 4 weeks.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:government@curbonomous.com" className="px-10 py-4 font-black text-sm tracking-widest uppercase rounded-sm" style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)", color: "#000" }}>
                  Schedule City Demo
                </a>
                <a href="mailto:government@curbonomous.com?subject=RFP Response Request" className="px-10 py-4 font-bold text-sm tracking-widest uppercase rounded-sm" style={{ border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff" }}>
                  Request RFP Response →
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
