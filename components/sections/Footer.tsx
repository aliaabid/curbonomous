"use client";

import Link from "next/link";

const SOLUTIONS = [
  { label: "Smart Curb Management", href: "/government" },
  { label: "Airport Intelligence", href: "/airport" },
  { label: "City Digital Twin", href: "/city" },
  { label: "Autonomous Mobility", href: "/city" },
  { label: "Drone Infrastructure", href: "/city" },
  { label: "Transit Analytics", href: "/government" },
];

const COMPANY = [
  { label: "Technology", href: "/technology" },
  { label: "Government", href: "/government" },
  { label: "Airport", href: "/airport" },
  { label: "City OS", href: "/city" },
  { label: "Schedule Demo", href: "#demo" },
];

export default function Footer() {
  return (
    <footer
      className="relative py-16 mt-0"
      style={{ borderTop: "1px solid rgba(0,212,255,0.1)", background: "rgba(0,0,8,0.98)" }}
    >
      <div className="max-w-4xl mx-auto px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-7 h-7">
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
            </div>
            <p style={{ fontSize: "0.82rem", color: "rgba(200,216,240,0.45)", lineHeight: 1.7 }}>
              The Intelligence Layer for Urban Mobility. Building the operating system for autonomous cities.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88]" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
              <span className="text-[8px] font-bold tracking-widest uppercase" style={{ color: "#00ff88", fontFamily: "monospace" }}>SYSTEMS OPERATIONAL</span>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <div className="text-[8px] font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>SOLUTIONS</div>
            <div className="space-y-2.5">
              {SOLUTIONS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className="block text-[0.8rem] transition-colors"
                  style={{ color: "rgba(200,216,240,0.45)" }}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-[8px] font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>PLATFORM</div>
            <div className="space-y-2.5">
              {COMPANY.map((c) => (
                <Link
                  key={c.label}
                  href={c.href}
                  className="block text-[0.8rem] transition-colors"
                  style={{ color: "rgba(200,216,240,0.45)" }}
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[8px] font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>CONTACT</div>
            <div className="space-y-2.5">
              <p className="text-[0.8rem]" style={{ color: "rgba(200,216,240,0.45)" }}>government@curbonomous.com</p>
              <p className="text-[0.8rem]" style={{ color: "rgba(200,216,240,0.45)" }}>airport@curbonomous.com</p>
              <p className="text-[0.8rem]" style={{ color: "rgba(200,216,240,0.45)" }}>partnerships@curbonomous.com</p>
            </div>
            <div className="mt-6">
              <a
                href="#demo"
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
          <span className="text-[8px] tracking-widest uppercase" style={{ color: "rgba(200,216,240,0.2)", fontFamily: "monospace" }}>
            © 2025 CURBONOMOUS · THE INTELLIGENCE LAYER FOR URBAN MOBILITY
          </span>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Security"].map((item) => (
              <span key={item} className="text-[8px] tracking-widest uppercase cursor-pointer" style={{ color: "rgba(200,216,240,0.2)", fontFamily: "monospace" }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
