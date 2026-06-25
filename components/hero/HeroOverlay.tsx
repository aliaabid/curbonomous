"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const DETECTION_ITEMS = [
  { label: "PASSENGER CAR", count: 247, color: "#00d4ff" },
  { label: "DELIVERY VAN", count: 83, color: "#00ff88" },
  { label: "FREIGHT TRUCK", count: 31, color: "#ff6b35" },
  { label: "ROBOTAXI", count: 19, color: "#7b2fff" },
  { label: "DELIVERY ROBOT", count: 12, color: "#0066ff" },
  { label: "DRONE", count: 7, color: "#ff6b35" },
];

function Counter({ value, color }: { value: number; color: string }) {
  const [displayed, setDisplayed] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = value / 40;
    const t = setInterval(() => {
      start += step;
      if (start >= value) { setDisplayed(value); clearInterval(t); }
      else setDisplayed(Math.floor(start));
    }, 30);
    return () => clearInterval(t);
  }, [value]);
  return (
    <span style={{ color, fontFamily: "monospace", fontWeight: 700 }}>
      {String(displayed).padStart(3, "0")}
    </span>
  );
}

export default function HeroOverlay({ sceneReady = false }: { sceneReady?: boolean }) {
  const [phase, setPhase] = useState(0);

  // Phases start only once Three.js signals it's mounted
  useEffect(() => {
    if (!sceneReady) return;
    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 1400);
    const t3 = setTimeout(() => setPhase(3), 2600);
    const t4 = setTimeout(() => setPhase(4), 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [sceneReady]);

  return (
    <div className="absolute inset-0 flex flex-col pointer-events-none select-none">

      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,212,255,0.008) 3px, rgba(0,212,255,0.008) 4px)",
        }}
      />

      {/* ── TOP BAR ── */}
      <div
        className="relative z-10 flex items-center justify-between px-6 pt-20"
        style={{ opacity: phase >= 2 ? 1 : 0, transition: "opacity 0.8s ease" }}
      >
        {/* Left: system status */}
        <div className="flex items-center gap-3">
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#00ff88", boxShadow: "0 0 6px #00ff88", animation: "pulse-dot 1.5s ease-in-out infinite" }}
          />
          <span className="text-[9px] font-bold tracking-widest uppercase" style={{ color: "#00ff88", fontFamily: "monospace" }}>
            SYSTEM ACTIVE
          </span>
          <span className="hidden md:inline text-[9px] tracking-widest" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>
            ·  CURBONOMOUS CITY OS v4.2
          </span>
        </div>

        {/* Right: camera + coordinates */}
        <div className="flex items-center gap-4">
          {phase >= 3 && (
            <div
              className="flex items-center gap-2 px-3 py-1"
              style={{
                border: "1px solid rgba(0,212,255,0.35)",
                background: "rgba(0,0,8,0.6)",
                animation: "fadeInUp 0.5s ease",
              }}
            >
              <div className="w-1 h-1 rounded-full bg-[#ff4444]" style={{ animation: "pulse-dot 1s ease-in-out infinite" }} />
              <span className="text-[8px] font-bold tracking-widest uppercase" style={{ color: "#00d4ff", fontFamily: "monospace" }}>
                CAM-01 · CV ACTIVE
              </span>
            </div>
          )}
          <span className="hidden md:inline text-[9px] tracking-widest" style={{ color: "rgba(200,216,240,0.25)", fontFamily: "monospace" }}>
            33.749°N · 84.388°W
          </span>
        </div>
      </div>

      {/* ── STORY TEXT (center, phases 1–3) ── */}
      <div
        className="absolute left-0 right-0 flex flex-col items-center justify-center"
        style={{
          top: "30%",
          transform: "translateY(-50%)",
          opacity: phase >= 1 && phase < 4 ? 1 : phase >= 4 ? 0 : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        <p
          className="text-center font-light"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "rgba(220,232,248,0.85)",
            letterSpacing: "0.01em",
            lineHeight: 1.7,
            textShadow: "0 2px 20px rgba(0,0,0,0.8)",
          }}
        >
          Every city has infrastructure.
        </p>
        <p
          className="text-center font-light"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "rgba(200,216,240,0.45)",
            letterSpacing: "0.01em",
            lineHeight: 1.7,
            textShadow: "0 2px 20px rgba(0,0,0,0.8)",
            opacity: phase >= 2 ? 1 : 0,
            transition: "opacity 0.6s ease 0.3s",
          }}
        >
          Almost none of it is intelligent.
        </p>
      </div>

      {/* ── DETECTION PANEL (right side, phase 3+) ── */}
      {phase >= 3 && (
        <div
          className="absolute right-6"
          style={{
            top: "50%",
            transform: "translateY(-50%)",
            animation: "fadeInUp 0.6s ease both",
          }}
        >
          <div
            className="p-4"
            style={{
              background: "rgba(0,0,8,0.82)",
              border: "1px solid rgba(0,212,255,0.18)",
              backdropFilter: "blur(12px)",
              minWidth: 176,
            }}
          >
            <div className="flex items-center gap-2 mb-3 pb-2" style={{ borderBottom: "1px solid rgba(0,212,255,0.1)" }}>
              <div className="w-1 h-1 rounded-full bg-[#00d4ff]" style={{ animation: "pulse-dot 1.5s ease-in-out infinite" }} />
              <span className="text-[8px] font-bold tracking-widest uppercase text-[#00d4ff]">
                OBJECT DETECTION
              </span>
            </div>
            {DETECTION_ITEMS.map((item) => (
              <div key={item.label} className="flex items-center justify-between mb-1.5">
                <span className="text-[8px] tracking-wider uppercase" style={{ color: "rgba(200,216,240,0.4)", fontFamily: "monospace" }}>
                  {item.label}
                </span>
                <Counter value={item.count} color={item.color} />
              </div>
            ))}
            <div className="mt-2 pt-2" style={{ borderTop: "1px solid rgba(0,212,255,0.08)" }}>
              <div className="text-[8px] text-center tracking-widest uppercase" style={{ color: "rgba(200,216,240,0.25)", fontFamily: "monospace" }}>
                30 FPS · 94ms
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── MAIN HEADLINE (bottom section, phase 4) ── */}
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-col items-center pb-20 px-6"
        style={{
          opacity: phase >= 4 ? 1 : 0,
          transform: phase >= 4 ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        {/* Label */}
        <div
          className="text-[9px] font-bold tracking-widest uppercase mb-4"
          style={{ color: "#00d4ff", letterSpacing: "0.2em", fontFamily: "monospace" }}
        >
          ◈ INTELLIGENCE LAYER ONLINE
        </div>

        {/* Headline — controlled size */}
        <h1
          className="text-center font-black text-white"
          style={{
            fontSize: "clamp(1.9rem, 3.2vw, 3.2rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
            textShadow: "0 4px 40px rgba(0,0,0,0.6)",
            maxWidth: "20ch",
          }}
        >
          The Operating System<br />
          <span style={{ color: "#00d4ff" }}>for Autonomous Cities</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-center mt-4 max-w-xl"
          style={{
            fontSize: "clamp(0.82rem, 1.5vw, 1rem)",
            color: "rgba(200,216,240,0.55)",
            lineHeight: 1.7,
          }}
        >
          Curbonomous transforms transportation infrastructure into a real-time
          intelligent network for cities, airports, fleets, and autonomous mobility operators.
        </p>

        {/* CTAs */}
        <div className="mt-6 flex items-center gap-3 pointer-events-auto">
          <a
            href="#demo"
            className="px-7 py-3 font-bold text-xs tracking-widest uppercase rounded-sm transition-all duration-300"
            style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)", color: "#000" }}
          >
            Schedule Demo
          </a>
          <Link
            href="/city"
            className="px-7 py-3 font-bold text-xs tracking-widest uppercase rounded-sm transition-all duration-300"
            style={{
              border: "1px solid rgba(0,212,255,0.35)",
              color: "#00d4ff",
              background: "rgba(0,212,255,0.06)",
            }}
          >
            Explore City OS →
          </Link>
        </div>

        {/* Scroll hint */}
        <div className="mt-4 flex items-center gap-2" style={{ color: "rgba(200,216,240,0.25)", fontSize: "0.65rem" }}>
          <span className="tracking-widest uppercase" style={{ fontFamily: "monospace", fontSize: "0.6rem" }}>
            ↓ Scroll to explore
          </span>
        </div>
      </div>

      {/* ── BOTTOM LEFT STATUS ── */}
      <div
        className="absolute bottom-8 left-6 flex flex-col gap-1.5"
        style={{
          opacity: phase >= 3 ? 1 : 0,
          transition: "opacity 0.8s ease",
          fontFamily: "monospace",
        }}
      >
        {[
          { label: "ACTIVE ZONES", value: "247", color: "#00ff88" },
          { label: "VEHICLES TRACKED", value: "3,892", color: "#00d4ff" },
          { label: "CAMERAS ONLINE", value: "1,204", color: "#7b2fff" },
        ].map((s) => (
          <div key={s.label} className="flex items-center gap-2">
            <span className="text-[8px] tracking-widest uppercase" style={{ color: "rgba(200,216,240,0.25)" }}>{s.label}</span>
            <span className="text-[9px] font-bold" style={{ color: s.color }}>{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
