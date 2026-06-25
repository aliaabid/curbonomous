import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "University & Campus Autonomous Vehicle Infrastructure | Smart Campus Mobility — Curbonomous",
  description: "Curbonomous manages autonomous vehicles, campus shuttles, drone delivery, and sidewalk robots for universities and corporate campuses. Purpose-built smart campus mobility infrastructure.",
  keywords: ["university autonomous vehicle", "campus AV management", "smart campus infrastructure", "campus drone management", "university mobility hub", "campus delivery robot"],
};

export default function UniversitiesPage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#000008" }}>
      <Nav />
      <div className="pt-16">

        <section className="py-28 px-6 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 40% 50%, rgba(0,255,136,0.07) 0%, transparent 60%)", borderBottom: "1px solid rgba(0,212,255,0.1)" }}>
          <div className="max-w-screen-xl mx-auto relative">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00ff88] mb-5">◈ UNIVERSITIES & CAMPUSES</div>
            <h1 className="font-black text-white mb-6" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.02em", maxWidth: "22ch" }}>
              Smart Campus Mobility for the Autonomous Era
            </h1>
            <p style={{ fontSize: "1.15rem", color: "rgba(200,216,240,0.65)", lineHeight: 1.75, maxWidth: "52ch", marginBottom: "2.5rem" }}>
              Universities are ideal environments for autonomous mobility — contained, high-density, and traffic-managed. Curbonomous provides the infrastructure to make autonomous campus shuttles, drone delivery, and AV research operations real.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:partnerships@curbonomous.com" className="px-8 py-4 font-black text-xs tracking-widest uppercase rounded-sm" style={{ background: "linear-gradient(135deg, #00ff88, #00d4ff)", color: "#000" }}>
                Schedule Campus Demo
              </a>
              <Link href="/resources" className="px-8 py-4 font-bold text-xs tracking-widest uppercase rounded-sm" style={{ border: "1px solid rgba(0,255,136,0.3)", color: "#00ff88" }}>
                Smart Campus Playbook →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00ff88] mb-3">CAMPUS SOLUTIONS</div>
            <h2 className="font-black text-white mb-12" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>Every autonomous system on campus, managed</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "Autonomous Campus Shuttles", desc: "Route management, stop zone coordination, and passenger boarding optimization for autonomous shuttle fleets replacing traditional campus transit.", color: "#00ff88", href: "/solutions/autonomous-vehicles" },
                { title: "Food & Package Delivery Robots", desc: "Coordinate sidewalk robot delivery networks across campus — from dining halls to dorms to academic buildings.", color: "#00d4ff", href: "/solutions/delivery-robots" },
                { title: "Campus Drone Delivery", desc: "Drone delivery infrastructure for package delivery, food, and emergency medical supplies across large campuses.", color: "#ff9a00", href: "/solutions/drone-infrastructure" },
                { title: "AV Research Infrastructure", desc: "Controlled testing environments and dedicated zones for autonomous vehicle research programs and industry partnerships.", color: "#7b2fff", href: "/solutions/autonomous-vehicles" },
                { title: "Campus Mobility Hub", desc: "Centralized hub management coordinating autonomous shuttles, bikes, scooters, and AV taxis at a single campus entry point.", color: "#0066ff", href: "/solutions/mobility-hubs" },
                { title: "Campus Digital Twin", desc: "Real-time model of all vehicle and robot movements across campus. Used for route optimization and safety monitoring.", color: "#00ff88", href: "/solutions/digital-twin" },
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

        <section className="py-24 px-6" style={{ background: "rgba(5,12,25,0.4)", borderTop: "1px solid rgba(0,212,255,0.06)" }}>
          <div className="max-w-screen-xl mx-auto">
            <div className="p-12 text-center" style={{ background: "rgba(5,12,25,0.9)", border: "1px solid rgba(0,255,136,0.2)" }}>
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#00ff88] mb-4">◈ CAMPUS DEPLOYMENT</div>
              <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}>Ready to transform your campus?</h2>
              <p className="text-[#c8d8f0]/55 max-w-xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                We work with university transportation and facilities teams to design, deploy, and manage the autonomous mobility infrastructure your campus needs.
              </p>
              <a href="mailto:partnerships@curbonomous.com" className="px-10 py-4 font-black text-sm tracking-widest uppercase rounded-sm inline-block" style={{ background: "linear-gradient(135deg, #00ff88, #00d4ff)", color: "#000" }}>
                Schedule Campus Demo
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
