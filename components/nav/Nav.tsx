"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/city", label: "City OS" },
  { href: "/technology", label: "Technology" },
  { href: "/government", label: "Government" },
  { href: "/airport", label: "Airport" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(0, 0, 8, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0, 212, 255, 0.1)" : "none",
      }}
    >
      <div className="max-w-4xl mx-auto px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
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
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ fontSize: "10px", fontWeight: 900, color: "#00d4ff" }}
            >
              C
            </div>
          </div>
          <span
            className="font-black tracking-wider text-white"
            style={{ fontSize: "0.9rem", letterSpacing: "0.12em" }}
          >
            CURBONOMOUS
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
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
        <div className="hidden md:flex items-center gap-3">
          <div
            className="w-2 h-2 rounded-full"
            style={{
              background: "#00ff88",
              boxShadow: "0 0 8px #00ff88",
              animation: "pulse-dot 2s ease-in-out infinite",
            }}
          />
          <span className="text-xs text-[#00ff88] font-mono tracking-wider">LIVE</span>
          <a
            href="#demo"
            className="ml-4 px-5 py-2 text-xs font-bold tracking-widest uppercase rounded-sm transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #00d4ff, #0066ff)",
              color: "#000",
            }}
          >
            Schedule Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className="block w-5 h-px bg-[#00d4ff] transition-all duration-300"
            style={{ transform: open ? "rotate(45deg) translate(2px, 2px)" : "none" }}
          />
          <span
            className="block w-5 h-px bg-[#00d4ff] transition-all duration-300"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-5 h-px bg-[#00d4ff] transition-all duration-300"
            style={{ transform: open ? "rotate(-45deg) translate(2px, -2px)" : "none" }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{
            background: "rgba(0, 0, 8, 0.97)",
            borderColor: "rgba(0, 212, 255, 0.1)",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 text-xs font-semibold tracking-widest uppercase border-b"
              style={{
                color: pathname === link.href ? "#00d4ff" : "rgba(200, 216, 240, 0.6)",
                borderColor: "rgba(0, 212, 255, 0.05)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#demo"
            className="block px-6 py-4 text-xs font-bold tracking-widest uppercase text-[#00d4ff]"
          >
            Schedule Demo →
          </a>
        </div>
      )}
    </nav>
  );
}
