import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { CITIES } from "@/lib/cities";

export const metadata: Metadata = {
  title: "Autonomous Infrastructure by City | Curb Management Deployments — Curbonomous",
  description: "Curbonomous deploys autonomous curb management infrastructure in cities across America. Find autonomous vehicle, drone, and delivery robot infrastructure resources for your city.",
  keywords: ["autonomous infrastructure by city", "curb management city", "autonomous vehicle infrastructure US cities", "smart city deployment"],
};

const TIERS = [
  { tier: 1, label: "Tier 1 Markets", desc: "Highest AV activity. Commercial operations active or imminent.", color: "#00d4ff" },
  { tier: 2, label: "Tier 2 Markets", desc: "Active AV pilots. Rapid growth trajectory.", color: "#7b2fff" },
  { tier: 3, label: "Tier 3 Markets", desc: "Early AV activity. Infrastructure planning stage.", color: "#ff9a00" },
];

export default function CitiesIndexPage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#000008" }}>
      <Nav />
      <div className="pt-16">

        <section className="py-20 px-6" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.07) 0%, transparent 60%)", borderBottom: "1px solid rgba(0,212,255,0.1)" }}>
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-4">◈ CITY DEPLOYMENTS</div>
            <h1 className="font-black text-white mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.02em" }}>
              Autonomous Infrastructure Across America
            </h1>
            <p style={{ fontSize: "1.05rem", color: "rgba(200,216,240,0.6)", lineHeight: 1.7, maxWidth: "52ch" }}>
              Curbonomous is deploying autonomous curb management infrastructure in cities across the United States. Find AV infrastructure resources, city-specific deployment guides, and operator information for your metro.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-screen-xl mx-auto">
            {TIERS.map((tier) => {
              const tierCities = CITIES.filter((c) => c.tier === tier.tier);
              return (
                <div key={tier.tier} className="mb-16">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-2 h-2 rounded-full" style={{ background: tier.color }} />
                    <div>
                      <div className="font-black text-white text-lg">{tier.label}</div>
                      <div className="text-[9px] tracking-widest uppercase" style={{ color: "rgba(200,216,240,0.4)", fontFamily: "monospace" }}>{tier.desc}</div>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {tierCities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/cities/${city.slug}`}
                        className="p-5 block transition-all"
                        style={{ background: "rgba(5,12,25,0.7)", border: `1px solid ${city.accentColor}15` }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: city.avActivity === "active" ? "#00ff88" : city.avActivity === "pilot" ? "#ff9a00" : "#0066ff" }} />
                          <span className="text-[8px] font-bold tracking-widest uppercase" style={{ color: city.avActivity === "active" ? "#00ff88" : city.avActivity === "pilot" ? "#ff9a00" : "#0066ff", fontFamily: "monospace" }}>
                            {city.avActivity}
                          </span>
                        </div>
                        <div className="font-black text-white">{city.name}</div>
                        <div className="text-[9px] mb-2" style={{ color: "rgba(200,216,240,0.4)", fontFamily: "monospace" }}>{city.state}</div>
                        <div className="text-[9px] font-bold tracking-wider" style={{ color: city.accentColor }}>View Infrastructure →</div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="py-16 px-6" style={{ background: "rgba(5,12,25,0.4)", borderTop: "1px solid rgba(0,212,255,0.06)" }}>
          <div className="max-w-screen-xl mx-auto">
            <div className="p-10 text-center" style={{ background: "rgba(5,12,25,0.9)", border: "1px solid rgba(0,212,255,0.15)" }}>
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-3">◈ DON&apos;T SEE YOUR CITY?</div>
              <h2 className="font-black text-white mb-3" style={{ fontSize: "1.8rem", letterSpacing: "-0.01em" }}>We&apos;re expanding to every major metro</h2>
              <p style={{ color: "rgba(200,216,240,0.5)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                Contact us about bringing Curbonomous autonomous infrastructure to your city.
              </p>
              <a href="mailto:government@curbonomous.com" className="px-8 py-3 font-black text-xs tracking-widest uppercase rounded-sm inline-block" style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)", color: "#000" }}>
                Contact Us About Your City
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
