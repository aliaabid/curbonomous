"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SOLUTIONS = [
  { href: "/solutions/curb-management", label: "Curb Management" },
  { href: "/solutions/computer-vision", label: "Computer Vision" },
  { href: "/solutions/autonomous-vehicles", label: "Autonomous Vehicles" },
  { href: "/solutions/drone-infrastructure", label: "Drone Infrastructure" },
  { href: "/solutions/delivery-robots", label: "Delivery Robots" },
  { href: "/solutions/digital-twin", label: "Digital Twin" },
  { href: "/solutions/mobility-hubs", label: "Mobility Hubs" },
  { href: "/solutions/urban-intelligence", label: "Urban Intelligence" },
];

const INDUSTRIES = [
  { href: "/industries/cities", label: "Cities & Municipalities" },
  { href: "/industries/airports", label: "Airports" },
  { href: "/industries/commercial-real-estate", label: "Commercial Real Estate" },
  { href: "/industries/mixed-use", label: "Mixed-Use Developments" },
  { href: "/industries/universities", label: "Universities & Campuses" },
  { href: "/industries/autonomous-vehicle-companies", label: "AV Companies" },
  { href: "/industries/drone-operators", label: "Drone Operators" },
  { href: "/industries/hotels", label: "Hotels & Hospitality" },
];

const TOP_LINKS = [
  { href: "/technology", label: "Technology" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setSolutionsOpen(false);
    setIndustriesOpen(false);
    setOpen(false);
  }, [pathname]);

  const isSolution = pathname.startsWith("/solutions");
  const isIndustry = pathname.startsWith("/industries");

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(0, 0, 8, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0, 212, 255, 0.1)" : "none",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
          <div className="relative w-8 h-8">
            <div
              className="absolute inset-0 rounded-sm"
              style={{
                background: "linear-gradient(135deg, #00d4ff, #0066ff)",
                clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
              }}
            />
            <div
              className="absolute inset-[3px] rounded-sm"
              style={{
                background: "#000008",
                clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center" style={{ fontSize: "10px", fontWeight: 900, color: "#00d4ff" }}>
              C
            </div>
          </div>
          <span className="font-black tracking-wider text-white hidden sm:block" style={{ fontSize: "0.9rem", letterSpacing: "0.12em" }}>
            CURBONOMOUS
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => { setSolutionsOpen(true); setIndustriesOpen(false); }}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              className="flex items-center gap-1 transition-all duration-200 text-xs font-semibold tracking-widest uppercase"
              style={{
                color: isSolution ? "#00d4ff" : "rgba(200, 216, 240, 0.6)",
                textShadow: isSolution ? "0 0 20px rgba(0, 212, 255, 0.6)" : "none",
              }}
            >
              Solutions
              <svg width="10" height="6" viewBox="0 0 10 6" style={{ opacity: 0.5, transform: solutionsOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            </button>
            {solutionsOpen && (
              <div
                className="absolute top-full left-0 pt-2 w-64"
                style={{ zIndex: 100 }}
              >
                <div style={{ background: "rgba(2,6,16,0.98)", border: "1px solid rgba(0,212,255,0.15)", backdropFilter: "blur(20px)" }}>
                  {SOLUTIONS.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-3 text-xs font-semibold tracking-wider transition-all"
                      style={{
                        color: pathname === s.href ? "#00d4ff" : "rgba(200,216,240,0.55)",
                        background: pathname === s.href ? "rgba(0,212,255,0.06)" : "transparent",
                        borderBottom: "1px solid rgba(0,212,255,0.05)",
                      }}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => { setIndustriesOpen(true); setSolutionsOpen(false); }}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button
              className="flex items-center gap-1 transition-all duration-200 text-xs font-semibold tracking-widest uppercase"
              style={{
                color: isIndustry ? "#00d4ff" : "rgba(200, 216, 240, 0.6)",
                textShadow: isIndustry ? "0 0 20px rgba(0, 212, 255, 0.6)" : "none",
              }}
            >
              Industries
              <svg width="10" height="6" viewBox="0 0 10 6" style={{ opacity: 0.5, transform: industriesOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            </button>
            {industriesOpen && (
              <div
                className="absolute top-full left-0 pt-2 w-64"
                style={{ zIndex: 100 }}
              >
                <div style={{ background: "rgba(2,6,16,0.98)", border: "1px solid rgba(0,212,255,0.15)", backdropFilter: "blur(20px)" }}>
                  {INDUSTRIES.map((i) => (
                    <Link
                      key={i.href}
                      href={i.href}
                      className="block px-4 py-3 text-xs font-semibold tracking-wider transition-all"
                      style={{
                        color: pathname === i.href ? "#00d4ff" : "rgba(200,216,240,0.55)",
                        background: pathname === i.href ? "rgba(0,212,255,0.06)" : "transparent",
                        borderBottom: "1px solid rgba(0,212,255,0.05)",
                      }}
                    >
                      {i.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {TOP_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-all duration-200 text-xs font-semibold tracking-widest uppercase"
              style={{
                color: pathname === link.href ? "#00d4ff" : "rgba(200, 216, 240, 0.6)",
                textShadow: pathname === link.href ? "0 0 20px rgba(0, 212, 255, 0.6)" : "none",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <div className="w-2 h-2 rounded-full" style={{ background: "#00ff88", boxShadow: "0 0 8px #00ff88", animation: "pulse-dot 2s ease-in-out infinite" }} />
          <span className="text-xs text-[#00ff88] font-mono tracking-wider">LIVE</span>
          <a
            href="mailto:demo@curbonomous.com"
            className="ml-2 px-5 py-2 text-xs font-bold tracking-widest uppercase rounded-sm transition-all duration-300"
            style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)", color: "#000" }}
          >
            Schedule Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="lg:hidden flex flex-col gap-1.5 p-2">
          <span className="block w-5 h-px bg-[#00d4ff] transition-all duration-300" style={{ transform: open ? "rotate(45deg) translate(2px, 2px)" : "none" }} />
          <span className="block w-5 h-px bg-[#00d4ff] transition-all duration-300" style={{ opacity: open ? 0 : 1 }} />
          <span className="block w-5 h-px bg-[#00d4ff] transition-all duration-300" style={{ transform: open ? "rotate(-45deg) translate(2px, -2px)" : "none" }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t overflow-y-auto max-h-[80vh]" style={{ background: "rgba(0, 0, 8, 0.98)", borderColor: "rgba(0, 212, 255, 0.1)" }}>
          <div className="px-6 py-3">
            <div className="text-[9px] font-bold tracking-widest uppercase mb-2" style={{ color: "rgba(0,212,255,0.4)", fontFamily: "monospace" }}>SOLUTIONS</div>
            {SOLUTIONS.map((s) => (
              <Link key={s.href} href={s.href} onClick={() => setOpen(false)} className="block py-2.5 text-xs font-semibold tracking-wider border-b" style={{ color: "rgba(200,216,240,0.6)", borderColor: "rgba(0,212,255,0.05)" }}>
                {s.label}
              </Link>
            ))}
          </div>
          <div className="px-6 py-3">
            <div className="text-[9px] font-bold tracking-widest uppercase mb-2" style={{ color: "rgba(0,212,255,0.4)", fontFamily: "monospace" }}>INDUSTRIES</div>
            {INDUSTRIES.map((i) => (
              <Link key={i.href} href={i.href} onClick={() => setOpen(false)} className="block py-2.5 text-xs font-semibold tracking-wider border-b" style={{ color: "rgba(200,216,240,0.6)", borderColor: "rgba(0,212,255,0.05)" }}>
                {i.label}
              </Link>
            ))}
          </div>
          <div className="px-6 py-3">
            {TOP_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block py-2.5 text-xs font-semibold tracking-widest uppercase border-b" style={{ color: "rgba(200,216,240,0.6)", borderColor: "rgba(0,212,255,0.05)" }}>
                {link.label}
              </Link>
            ))}
            <a href="mailto:demo@curbonomous.com" className="block mt-4 py-3 text-xs font-bold tracking-widest uppercase text-center" style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)", color: "#000" }}>
              Schedule Demo →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
