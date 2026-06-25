import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { CITIES, getCityBySlug, getAllCitySlugs } from "@/lib/cities";

export async function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return { title: "City Not Found — Curbonomous" };
  return {
    title: `Autonomous Vehicle Infrastructure in ${city.name}, ${city.state} | Curb Management — Curbonomous`,
    description: `Curbonomous deploys autonomous curb management infrastructure in ${city.name}. Robotaxi zones, drone infrastructure, and computer vision for ${city.name}'s autonomous mobility ecosystem.`,
    keywords: [`autonomous vehicle infrastructure ${city.name}`, `curb management ${city.name}`, `smart city ${city.name}`, `drone infrastructure ${city.name}`, `robotaxi ${city.name}`],
  };
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    return (
      <main className="relative min-h-screen" style={{ background: "#000008" }}>
        <Nav />
        <div className="pt-32 text-center px-6">
          <h1 className="font-black text-white text-4xl mb-4">City not found</h1>
          <Link href="/cities" className="text-[#00d4ff]">← All Cities</Link>
        </div>
        <Footer />
      </main>
    );
  }

  const nearbycities = CITIES.filter((c) => c.slug !== city.slug && c.tier <= city.tier + 1).slice(0, 4);

  return (
    <main className="relative min-h-screen" style={{ background: "#000008" }}>
      <Nav />
      <div className="pt-16">

        {/* Hero */}
        <section
          className="py-24 px-6 relative overflow-hidden"
          style={{
            background: `radial-gradient(ellipse at 60% 50%, ${city.accentColor}08 0%, transparent 60%)`,
            borderBottom: "1px solid rgba(0,212,255,0.1)",
          }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `linear-gradient(${city.accentColor}18 1px, transparent 1px), linear-gradient(90deg, ${city.accentColor}18 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }} />
          <div className="max-w-screen-xl mx-auto relative">
            <Link href="/cities" className="inline-flex items-center gap-2 mb-8 text-[10px] font-bold tracking-widest uppercase" style={{ color: "rgba(200,216,240,0.4)" }}>
              ← ALL CITIES
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full" style={{ background: city.avActivity === "active" ? "#00ff88" : "#ff9a00", boxShadow: `0 0 8px ${city.avActivity === "active" ? "#00ff88" : "#ff9a00"}` }} />
              <span className="text-[9px] font-bold tracking-widest uppercase" style={{ color: city.avActivity === "active" ? "#00ff88" : "#ff9a00", fontFamily: "monospace" }}>
                AV STATUS: {city.avActivity.toUpperCase()}
              </span>
            </div>
            <h1 className="font-black text-white mb-4" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.02em" }}>
              Autonomous Vehicle Infrastructure<br />
              <span style={{ color: city.accentColor }}>in {city.name}, {city.state}</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(200,216,240,0.65)", lineHeight: 1.75, maxWidth: "56ch", marginBottom: "2.5rem" }}>
              {city.description} Curbonomous provides the dedicated curb infrastructure layer for {city.name}&apos;s autonomous mobility ecosystem.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:demo@curbonomous.com?subject=Infrastructure Assessment - ${city.name}`}
                className="px-8 py-4 font-black text-xs tracking-widest uppercase rounded-sm"
                style={{ background: `linear-gradient(135deg, ${city.accentColor}, #0066ff)`, color: city.accentColor === "#ffd700" ? "#000" : "#fff" }}
              >
                Request {city.name} Assessment
              </a>
              <Link href="/solutions/curb-management" className="px-8 py-4 font-bold text-xs tracking-widest uppercase rounded-sm" style={{ border: `1px solid ${city.accentColor}33`, color: city.accentColor }}>
                Curb Management Platform →
              </Link>
            </div>
          </div>
        </section>

        {/* City stats */}
        <section style={{ borderBottom: "1px solid rgba(0,212,255,0.06)", background: "rgba(0,212,255,0.02)" }}>
          <div className="max-w-screen-xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Population", value: city.population },
              { label: "AV Operators", value: city.avOperators.length.toString() },
              { label: "Drone Operators", value: city.droneOperators.length.toString() },
              { label: "AV Status", value: city.avActivity.charAt(0).toUpperCase() + city.avActivity.slice(1) },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-black" style={{ fontSize: "1.8rem", fontFamily: "monospace", color: city.accentColor }}>{s.value}</div>
                <div className="text-[9px] font-bold tracking-widest uppercase mt-1" style={{ color: "rgba(200,216,240,0.4)", fontFamily: "monospace" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* AV ecosystem */}
        <section className="py-20 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: city.accentColor }}>AUTONOMOUS ECOSYSTEM IN {city.name.toUpperCase()}</div>
            <h2 className="font-black text-white mb-10" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>
              Active operators in {city.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-[9px] font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>AUTONOMOUS VEHICLE OPERATORS</div>
                <div className="space-y-3">
                  {city.avOperators.map((op) => (
                    <div key={op} className="p-4 flex items-center gap-3" style={{ background: "rgba(5,12,25,0.8)", border: `1px solid ${city.accentColor}15` }}>
                      <div className="w-2 h-2 rounded-full" style={{ background: city.avActivity === "active" ? "#00ff88" : "#ff9a00" }} />
                      <span className="font-bold text-white">{op}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[9px] font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>DRONE OPERATORS</div>
                <div className="space-y-3">
                  {city.droneOperators.map((op) => (
                    <div key={op} className="p-4 flex items-center gap-3" style={{ background: "rgba(5,12,25,0.8)", border: "1px solid rgba(255,154,0,0.15)" }}>
                      <div className="w-2 h-2 rounded-full" style={{ background: "#ff9a00" }} />
                      <span className="font-bold text-white">{op}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Curbonomous provides */}
        <section className="py-20 px-6" style={{ background: "rgba(5,12,25,0.4)", borderTop: "1px solid rgba(0,212,255,0.06)" }}>
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: city.accentColor }}>CURBONOMOUS IN {city.name.toUpperCase()}</div>
            <h2 className="font-black text-white mb-10" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em" }}>
              Infrastructure we deploy in {city.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: `AV Pickup Zones in ${city.name}`, desc: `Dedicated robotaxi pickup and drop-off zones for ${city.avOperators.join(", ")} and other operators. Real-time zone management, passenger coordination, and compliance documentation.`, href: "/solutions/autonomous-vehicles", color: city.accentColor },
                { title: `Computer Vision in ${city.name}`, desc: `Edge-AI camera infrastructure monitoring every curb zone in ${city.name}. Real-time vehicle detection, dwell measurement, and behavioral analytics.`, href: "/solutions/computer-vision", color: "#0066ff" },
                { title: `Drone Infrastructure in ${city.name}`, desc: `Landing zone management and air corridor coordination for ${city.droneOperators.join(", ")} operations in ${city.name}.`, href: "/solutions/drone-infrastructure", color: "#ff9a00" },
                { title: `Curb Management in ${city.name}`, desc: `Dynamic zone management, enforcement automation, and revenue optimization for ${city.name}'s commercial and residential curb networks.`, href: "/solutions/curb-management", color: "#00d4ff" },
                { title: `Digital Twin — ${city.name}`, desc: `A real-time digital twin of ${city.name}'s entire curb infrastructure, synchronized with live vehicle and sensor data.`, href: "/solutions/digital-twin", color: "#00ff88" },
                { title: `Mobility Hub in ${city.name}`, desc: `Multi-modal hub management for ${city.name}'s transportation hubs, airports, and mixed-use developments.`, href: "/solutions/mobility-hubs", color: "#7b2fff" },
              ].map((sol) => (
                <Link key={sol.title} href={sol.href} className="p-6 block transition-all" style={{ background: "rgba(5,12,25,0.8)", border: `1px solid ${sol.color}15` }}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full" style={{ background: sol.color }} />
                    <h3 className="font-bold text-white text-sm">{sol.title}</h3>
                  </div>
                  <p className="text-sm mb-3" style={{ color: "rgba(200,216,240,0.5)", lineHeight: 1.65 }}>{sol.desc}</p>
                  <span className="text-[10px] font-bold tracking-wider" style={{ color: sol.color }}>Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby cities */}
        {nearbycities.length > 0 && (
          <section className="py-16 px-6">
            <div className="max-w-screen-xl mx-auto">
              <div className="text-[9px] font-bold tracking-widest uppercase mb-6" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>ALSO SEE</div>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {nearbycities.map((nc) => (
                  <Link key={nc.slug} href={`/cities/${nc.slug}`} className="p-4 block" style={{ background: "rgba(5,12,25,0.7)", border: `1px solid ${nc.accentColor}15` }}>
                    <div className="font-black text-white text-sm">{nc.name}</div>
                    <div className="text-[9px] mb-2" style={{ color: "rgba(200,216,240,0.4)", fontFamily: "monospace" }}>{nc.state}</div>
                    <span className="text-[10px] font-bold tracking-wider" style={{ color: nc.accentColor }}>View →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 px-6" style={{ background: "rgba(5,12,25,0.4)", borderTop: "1px solid rgba(0,212,255,0.06)" }}>
          <div className="max-w-screen-xl mx-auto">
            <div className="p-12 text-center" style={{ background: "rgba(5,12,25,0.9)", border: `1px solid ${city.accentColor}22` }}>
              <div className="text-[10px] font-bold tracking-widest uppercase mb-4" style={{ color: city.accentColor }}>◈ DEPLOY IN {city.name.toUpperCase()}</div>
              <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}>
                Ready to deploy autonomous infrastructure in {city.name}?
              </h2>
              <p className="text-[#c8d8f0]/55 max-w-xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                Schedule a {city.name}-specific deployment assessment. We&apos;ll map your infrastructure needs, model deployment timelines, and connect you with local AV operators.
              </p>
              <a
                href={`mailto:demo@curbonomous.com?subject=Deployment Assessment - ${city.name}`}
                className="px-10 py-4 font-black text-sm tracking-widest uppercase rounded-sm inline-block"
                style={{ background: `linear-gradient(135deg, ${city.accentColor}, #0066ff)`, color: city.accentColor === "#ffd700" ? "#000" : "#fff" }}
              >
                Request {city.name} Assessment
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
