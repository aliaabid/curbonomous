"use client";

import Link from "next/link";

const SOLUTIONS = [
  { label: "Curb Management", href: "/solutions/curb-management" },
  { label: "Computer Vision", href: "/solutions/computer-vision" },
  { label: "Autonomous Vehicles", href: "/solutions/autonomous-vehicles" },
  { label: "Drone Infrastructure", href: "/solutions/drone-infrastructure" },
  { label: "Digital Twin", href: "/solutions/digital-twin" },
  { label: "Delivery Robots", href: "/solutions/delivery-robots" },
  { label: "Mobility Hubs", href: "/solutions/mobility-hubs" },
  { label: "Urban Intelligence", href: "/solutions/urban-intelligence" },
];

const INDUSTRIES = [
  { label: "Cities & Municipalities", href: "/industries/cities" },
  { label: "Airports", href: "/airport" },
  { label: "Commercial Real Estate", href: "/industries/commercial-real-estate" },
  { label: "Mixed-Use Developments", href: "/industries/mixed-use" },
  { label: "Universities", href: "/industries/universities" },
  { label: "AV Companies", href: "/industries/autonomous-vehicle-companies" },
  { label: "Drone Operators", href: "/industries/drone-operators" },
  { label: "Hotels", href: "/industries/hotels" },
];

const RESOURCES = [
  { label: "Blog", href: "/blog" },
  { label: "Glossary", href: "/glossary" },
  { label: "Resources", href: "/resources" },
  { label: "Technology", href: "/technology" },
  { label: "Cities", href: "/cities" },
  { label: "Schedule Demo", href: "mailto:demo@curbonomous.com" },
];

export default function Footer() {
  return (
    <footer
      className="relative py-16 mt-0"
      style={{ borderTop: "1px solid rgba(0,212,255,0.1)", background: "rgba(0,0,8,0.98)" }}
    >
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-7 h-7 flex-shrink-0">
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, #00d4ff, #0066ff)",
                    clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                  }}
                />
                <div
                  className="absolute inset-[3px]"
                  style={{
                    background: "#000008",
                    clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center" style={{ fontSize: "9px", fontWeight: 900, color: "#00d4ff" }}>C</div>
              </div>
              <span className="font-black tracking-wider text-white" style={{ fontSize: "0.8rem", letterSpacing: "0.1em" }}>CURBONOMOUS</span>
            </Link>
            <p style={{ fontSize: "0.8rem", color: "rgba(200,216,240,0.4)", lineHeight: 1.7 }}>
              The Operating System for Autonomous Cities.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88]" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
              <span className="text-[8px] font-bold tracking-widest uppercase" style={{ color: "#00ff88", fontFamily: "monospace" }}>SYSTEMS OPERATIONAL</span>
            </div>
            <div className="mt-5 space-y-1">
              <a href="mailto:demo@curbonomous.com" className="block text-[0.75rem] transition-colors" style={{ color: "rgba(200,216,240,0.4)" }}>demo@curbonomous.com</a>
              <a href="mailto:government@curbonomous.com" className="block text-[0.75rem] transition-colors" style={{ color: "rgba(200,216,240,0.4)" }}>government@curbonomous.com</a>
              <a href="mailto:partnerships@curbonomous.com" className="block text-[0.75rem] transition-colors" style={{ color: "rgba(200,216,240,0.4)" }}>partnerships@curbonomous.com</a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <div className="text-[8px] font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(200,216,240,0.25)", fontFamily: "monospace" }}>SOLUTIONS</div>
            <div className="space-y-2">
              {SOLUTIONS.map((s) => (
                <Link key={s.href} href={s.href} className="block text-[0.78rem] transition-colors" style={{ color: "rgba(200,216,240,0.4)" }}>
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <div className="text-[8px] font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(200,216,240,0.25)", fontFamily: "monospace" }}>INDUSTRIES</div>
            <div className="space-y-2">
              {INDUSTRIES.map((i) => (
                <Link key={i.href} href={i.href} className="block text-[0.78rem] transition-colors" style={{ color: "rgba(200,216,240,0.4)" }}>
                  {i.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <div className="text-[8px] font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(200,216,240,0.25)", fontFamily: "monospace" }}>RESOURCES</div>
            <div className="space-y-2">
              {RESOURCES.map((r) => (
                <Link key={r.href} href={r.href} className="block text-[0.78rem] transition-colors" style={{ color: "rgba(200,216,240,0.4)" }}>
                  {r.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Compare */}
          <div>
            <div className="text-[8px] font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(200,216,240,0.25)", fontFamily: "monospace" }}>COMPARE</div>
            <div className="space-y-2">
              {[
                { label: "vs Automotus", href: "/compare/automotus" },
                { label: "vs Numina", href: "/compare/numina" },
                { label: "vs Urban SDK", href: "/compare/urban-sdk" },
                { label: "vs Placer.ai", href: "/compare/placer-ai" },
                { label: "vs Density", href: "/compare/density" },
              ].map((c) => (
                <Link key={c.href} href={c.href} className="block text-[0.78rem] transition-colors" style={{ color: "rgba(200,216,240,0.4)" }}>
                  {c.label}
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="mailto:demo@curbonomous.com"
                className="inline-block px-5 py-2.5 text-[9px] font-bold tracking-widest uppercase rounded-sm"
                style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)", color: "#000" }}
              >
                Schedule Demo →
              </a>
            </div>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(0,212,255,0.06)" }}
        >
          <span className="text-[8px] tracking-widest uppercase" style={{ color: "rgba(200,216,240,0.18)", fontFamily: "monospace" }}>
            © 2025 CURBONOMOUS · THE OPERATING SYSTEM FOR AUTONOMOUS CITIES
          </span>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Security"].map((item) => (
              <span key={item} className="text-[8px] tracking-widest uppercase cursor-pointer" style={{ color: "rgba(200,216,240,0.18)", fontFamily: "monospace" }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
