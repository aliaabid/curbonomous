import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hotel Curb Intelligence & Autonomous Arrival Management — Curbonomous",
  description: "Curbonomous transforms hotel curbsides into intelligent arrival experiences. Valet coordination, AV pickup zones, drone delivery, and guest vehicle management for hotels and hospitality.",
  keywords: ["hotel autonomous curb", "hotel curbside management", "hotel AV pickup", "hospitality autonomous infrastructure", "hotel smart curb", "hotel arrival management"],
};

export default function HotelsPage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#000008" }}>
      <Nav />
      <div className="pt-16">
        <section className="py-28 px-6 relative overflow-hidden" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.07) 0%, transparent 60%)", borderBottom: "1px solid rgba(0,212,255,0.1)" }}>
          <div className="max-w-screen-xl mx-auto relative">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-5">◈ HOTELS & HOSPITALITY</div>
            <h1 className="font-black text-white mb-6" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.02em", maxWidth: "22ch" }}>
              The Intelligent Hotel Curbside
            </h1>
            <p style={{ fontSize: "1.15rem", color: "rgba(200,216,240,0.65)", lineHeight: 1.75, maxWidth: "52ch", marginBottom: "2.5rem" }}>
              The hotel curbside is a guest&apos;s first and last impression. Curbonomous transforms it into an intelligent, coordinated arrival experience — managing AV guests, valet, rideshare, luggage delivery, and drone amenities in one system.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:partnerships@curbonomous.com" className="px-8 py-4 font-black text-xs tracking-widest uppercase rounded-sm" style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)", color: "#000" }}>
                Schedule Hotel Demo
              </a>
              <Link href="/solutions/curb-management" className="px-8 py-4 font-bold text-xs tracking-widest uppercase rounded-sm" style={{ border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff" }}>
                Curb Management Platform →
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-3">HOTEL SOLUTIONS</div>
            <h2 className="font-black text-white mb-12" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>Every arrival type, managed intelligently</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "Valet Coordination", desc: "Real-time valet queue management, vehicle tracking, and retrieval coordination. Guests request their vehicle via app; the valet system dispatches automatically.", color: "#00d4ff" },
                { title: "AV Guest Pickup", desc: "Dedicated robotaxi pickup zones that Waymo, Zoox, and other AV operators can access for guest arrivals. Position your hotel as AV-friendly.", color: "#7b2fff" },
                { title: "Rideshare Zone Management", desc: "Managed rideshare zones with dwell enforcement. Reduce porte-cochère congestion by 40% with intelligent rideshare dispatch coordination.", color: "#00ff88" },
                { title: "Luggage & Delivery", desc: "Coordinate hotel luggage deliveries, package arrivals, and room service robot deployments with dedicated curb zones and staging areas.", color: "#ff9a00" },
                { title: "Drone Amenities", desc: "Position your hotel as a premier drone delivery destination. Rooftop drone port infrastructure for guest package delivery and F&B amenities.", color: "#ff9a00" },
                { title: "Event & Group Management", desc: "Dynamic zone reprogramming for large events, conventions, and group arrivals. Pre-planned curb allocation with automatic activation.", color: "#0066ff" },
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
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-4">◈ HOTEL DEPLOYMENT</div>
              <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}>Transform your curbside guest experience</h2>
              <p className="text-[#c8d8f0]/55 max-w-xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                From boutique hotels to convention center properties, Curbonomous scales to your operation. Hardware-as-a-Service, zero capital expenditure.
              </p>
              <a href="mailto:partnerships@curbonomous.com" className="px-10 py-4 font-black text-sm tracking-widest uppercase rounded-sm inline-block" style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)", color: "#000" }}>
                Schedule Hotel Demo
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
