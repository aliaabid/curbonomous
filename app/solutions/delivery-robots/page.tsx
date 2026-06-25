import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delivery Robot Infrastructure & Sidewalk Management — Curbonomous",
  description: "Manage sidewalk delivery robots, last-mile autonomous delivery operations, and robot staging zones. Curbonomous provides the infrastructure layer for delivery robot companies and cities.",
  keywords: ["delivery robot infrastructure", "sidewalk delivery robot management", "last-mile delivery robot", "autonomous delivery infrastructure", "sidewalk robot management"],
};

export default function DeliveryRobotsPage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#000008" }}>
      <Nav />
      <div className="pt-16">

        <section className="py-28 px-6 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 40% 50%, rgba(0,255,136,0.06) 0%, transparent 60%)", borderBottom: "1px solid rgba(0,212,255,0.1)" }}>
          <div className="max-w-screen-xl mx-auto relative">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00ff88] mb-5">◈ DELIVERY ROBOT INFRASTRUCTURE</div>
            <h1 className="font-black text-white mb-6" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.02em", maxWidth: "20ch" }}>
              The Infrastructure Layer for Sidewalk Autonomy
            </h1>
            <p style={{ fontSize: "1.15rem", color: "rgba(200,216,240,0.65)", lineHeight: 1.75, maxWidth: "52ch", marginBottom: "2.5rem" }}>
              Delivery robots are moving through city sidewalks, campus pathways, and building corridors. Curbonomous provides the management infrastructure — staging zones, route coordination, documentation, and compliance — for cities and operators.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:demo@curbonomous.com" className="px-8 py-4 font-black text-xs tracking-widest uppercase rounded-sm" style={{ background: "linear-gradient(135deg, #00ff88, #00d4ff)", color: "#000" }}>
                Schedule Demo
              </a>
              <Link href="/industries/cities" className="px-8 py-4 font-bold text-xs tracking-widest uppercase rounded-sm" style={{ border: "1px solid rgba(0,255,136,0.3)", color: "#00ff88" }}>
                City Deployment Guide →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00ff88] mb-3">PLATFORM CAPABILITIES</div>
            <h2 className="font-black text-white mb-12" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>Built for sidewalk-scale autonomy</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "Robot Staging Zone Management", desc: "Designate and manage robot staging areas at curb level, building entrances, and pickup points. Zone status updates in real time.", color: "#00ff88" },
                { title: "Sidewalk Route Coordination", desc: "Map permissioned sidewalk routes for robot operators. Coordinate between multiple operators using the same pathways without conflict.", color: "#00d4ff" },
                { title: "Multi-Operator Platform", desc: "Serve Robotics, Coco, Starship, and other operators all coordinate through the same neutral platform. No operator gets preferential treatment.", color: "#7b2fff" },
                { title: "Permit & Compliance Management", desc: "Track robot operator permits, city authorizations, and operational boundaries. Automated alerts when robots approach permit boundaries.", color: "#ff9a00" },
                { title: "Incident Documentation", desc: "Every robot-pedestrian interaction, pathway blockage, or deviation is documented with video evidence, timestamps, and location data.", color: "#00ff88" },
                { title: "City Policy Enforcement", desc: "Cities set speed limits, pathway restrictions, and time-of-day rules. The platform automatically monitors and reports on compliance.", color: "#0066ff" },
              ].map((c) => (
                <div key={c.title} className="p-6" style={{ background: "rgba(5,12,25,0.8)", border: `1px solid ${c.color}18` }}>
                  <div className="w-2 h-2 rounded-full mb-3" style={{ background: c.color }} />
                  <h3 className="font-black text-white text-sm mb-2">{c.title}</h3>
                  <p className="text-sm" style={{ color: "rgba(200,216,240,0.55)", lineHeight: 1.7 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6" style={{ background: "rgba(5,12,25,0.4)", borderTop: "1px solid rgba(0,212,255,0.06)" }}>
          <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16">
            <div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#00ff88] mb-3">FOR CITIES</div>
              <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "-0.02em" }}>Control robot deployment in your city</h2>
              <p style={{ color: "rgba(200,216,240,0.6)", lineHeight: 1.75, fontSize: "0.95rem", marginBottom: "1.5rem" }}>
                Cities are responsible for sidewalk safety but currently lack visibility into robot operations. Curbonomous gives transportation departments real-time oversight without requiring cities to build their own tech infrastructure.
              </p>
              {["Real-time robot location and status dashboard", "Permit tracking and renewal automation", "Incident reporting and evidence management", "Compliance scoring per operator", "Public-facing transparency dashboard"].map((item) => (
                <div key={item} className="flex items-start gap-3 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: "#00ff88" }} />
                  <span style={{ color: "rgba(200,216,240,0.65)", fontSize: "0.9rem" }}>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-3">FOR ROBOT OPERATORS</div>
              <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "-0.02em" }}>Deploy faster with pre-built city infrastructure</h2>
              <p style={{ color: "rgba(200,216,240,0.6)", lineHeight: 1.75, fontSize: "0.95rem", marginBottom: "1.5rem" }}>
                Cities with Curbonomous deployed mean faster permit approvals, pre-mapped routes, and integrated compliance documentation. Less negotiation, faster deployment, lower operational overhead.
              </p>
              {["Pre-approved route maps per city", "Automated permit compliance reporting", "Incident documentation for insurance", "Staging zone reservations via API", "City-operator communication channel"].map((item) => (
                <div key={item} className="flex items-start gap-3 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: "#00d4ff" }} />
                  <span style={{ color: "rgba(200,216,240,0.65)", fontSize: "0.9rem" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="p-12 text-center" style={{ background: "rgba(5,12,25,0.9)", border: "1px solid rgba(0,255,136,0.2)" }}>
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#00ff88] mb-4">◈ GET STARTED</div>
              <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}>Ready to manage sidewalk autonomy?</h2>
              <p className="text-[#c8d8f0]/55 max-w-xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                Whether you&apos;re a city managing robot permits or an operator looking for deployment infrastructure, Curbonomous has a solution for you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:demo@curbonomous.com" className="px-10 py-4 font-black text-sm tracking-widest uppercase rounded-sm" style={{ background: "linear-gradient(135deg, #00ff88, #00d4ff)", color: "#000" }}>
                  Schedule Demo
                </a>
                <Link href="/industries/drone-operators" className="px-10 py-4 font-bold text-sm tracking-widest uppercase rounded-sm" style={{ border: "1px solid rgba(0,255,136,0.3)", color: "#00ff88" }}>
                  Robotics Companies →
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
