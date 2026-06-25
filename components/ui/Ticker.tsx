"use client";

import { useEffect, useRef, useState } from "react";

const ITEMS = [
  { label: "DOWNTOWN · ZONE B-12", value: "OCCUPANCY 87% · DWELL AVG 4.2min", color: "#00d4ff" },
  { label: "ROBOTAXI-047", value: "PICKUP COMPLETE · ZONE CLEARED", color: "#7b2fff" },
  { label: "DELIVERY ROBOT-12", value: "ROUTE COMPLETE · RETURNING TO BASE", color: "#0066ff" },
  { label: "AIRPORT T1 · ZONE A", value: "QUEUE DEPTH 3min · COMPLIANCE 94%", color: "#7b2fff" },
  { label: "VIOLATION DETECTED", value: "ZONE C-4 · DOUBLE PARK · LPR: ●●● ●●●●", color: "#ff4444" },
  { label: "DRONE MISSION-089", value: "MEDICAL DISTRICT · DELIVERY CONFIRMED", color: "#ff6b35" },
  { label: "REVENUE UPDATE", value: "$124,302 TODAY · +12% VS BASELINE", color: "#ffd700" },
  { label: "DIGITAL TWIN", value: "SYNC COMPLETE · 1,204 CAMERAS · 12ms LATENCY", color: "#00ff88" },
  { label: "CONGESTION ALERT", value: "MAIN & 5TH · SEVERITY: MODERATE · REROUTING", color: "#ff6b35" },
  { label: "TRANSIT BUS 22", value: "BUS LANE CLEAR · ON SCHEDULE", color: "#00ff88" },
];

export default function Ticker() {
  const [pos, setPos] = useState(0);
  const rafRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let last = 0;
    const tick = (ts: number) => {
      if (last !== 0) {
        setPos((p) => p - (ts - last) * 0.04);
      }
      last = ts;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const itemWidth = 400;
  const totalWidth = ITEMS.length * itemWidth;
  const adjustedPos = ((pos % -totalWidth) - totalWidth) % -totalWidth;

  return (
    <div
      className="relative overflow-hidden py-2"
      style={{
        background: "rgba(0,0,8,0.95)",
        borderBottom: "1px solid rgba(0,212,255,0.1)",
        height: 36,
      }}
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #000008, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(-90deg, #000008, transparent)" }} />

      <div
        ref={containerRef}
        className="flex items-center gap-0 absolute"
        style={{ transform: `translateX(${adjustedPos}px)`, whiteSpace: "nowrap", top: "50%", marginTop: -10 }}
      >
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6"
            style={{ width: itemWidth, flexShrink: 0 }}
          >
            <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: item.color }} />
            <span className="text-[8px] font-bold tracking-widest uppercase" style={{ color: item.color, fontFamily: "monospace" }}>
              {item.label}
            </span>
            <span className="text-[8px] tracking-widest" style={{ color: "rgba(200,216,240,0.4)", fontFamily: "monospace" }}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
