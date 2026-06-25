"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// ── Data ────────────────────────────────────────────────────────────────────

const CAMERAS = [
  { id: "c1", cx: 28.5, cy: 31, label: "CAM-01 · 5TH AVE & 42ND" },
  { id: "c2", cx: 54.0, cy: 26, label: "CAM-02 · PARK AVE & 50TH" },
  { id: "c3", cx: 73.0, cy: 44, label: "CAM-03 · LEXINGTON & 46TH" },
  { id: "c4", cx: 38.0, cy: 58, label: "CAM-04 · 7TH AVE & 34TH" },
  { id: "c5", cx: 62.0, cy: 62, label: "CAM-05 · 3RD AVE & 40TH" },
  { id: "c6", cx: 47.5, cy: 42, label: "CAM-06 · BROADWAY & 45TH" },
];

const FOV_CONES = [
  { id: "f1", points: "28.5,31 22,48 35,48" },
  { id: "f2", points: "54,26 47,43 61,43" },
  { id: "f3", points: "73,44 66,60 80,60" },
  { id: "f4", points: "38,58 31,72 45,72" },
  { id: "f5", points: "62,62 55,76 69,76" },
  { id: "f6", points: "47.5,42 41,57 54,57" },
];

const VEHICLES = [
  { id: "v1", x: 26, y: 44, w: 4.2, h: 2.4, type: "YELLOW CAB", color: "#ffd700", tracking: "TRK-0041" },
  { id: "v2", x: 43, y: 50, w: 5.0, h: 2.8, type: "RIDESHARE", color: "#00d4ff", tracking: "TRK-0087" },
  { id: "v3", x: 58, y: 46, w: 5.5, h: 2.6, type: "DELIVERY", color: "#ff9a00", tracking: "TRK-0112" },
  { id: "v4", x: 35, y: 62, w: 4.8, h: 2.5, type: "WAYMO", color: "#00ff88", tracking: "AV-0003" },
  { id: "v5", x: 65, y: 58, w: 6.5, h: 3.0, type: "CITY BUS", color: "#7b2fff", tracking: "TRK-0224" },
  { id: "v6", x: 50, y: 37, w: 4.0, h: 2.2, type: "YELLOW CAB", color: "#ffd700", tracking: "TRK-0063" },
  { id: "v7", x: 71, y: 50, w: 4.5, h: 2.4, type: "SUV", color: "#00d4ff", tracking: "TRK-0091" },
  { id: "v8", x: 20, y: 54, w: 3.8, h: 2.2, type: "SEDAN", color: "#c8d8f0", tracking: "TRK-0035" },
];

const TRACKING_LINES = [
  { id: "t1", x1: 28.5, y1: 46, x2: 47.5, y2: 51 },
  { id: "t2", x1: 47.5, y1: 51, x2: 62, y2: 59 },
  { id: "t3", x1: 54, y1: 43, x2: 47.5, y2: 51 },
];

const ZONES = [
  { id: "z1", x: 22, y: 57, w: 14, h: 8, color: "#00d4ff", label: "LOADING ZONE", sub: "AUTH. VEHICLES ONLY" },
  { id: "z2", x: 40, y: 46, w: 18, h: 11, color: "#00ff88", label: "AV PICKUP ZONE", sub: "WAYMO · ZOOX · AURORA" },
  { id: "z3", x: 67, y: 42, w: 10, h: 14, color: "#ff3344", label: "NO-STOP ZONE", sub: "ACTIVE ENFORCEMENT" },
  { id: "z4", x: 34, y: 48, w: 7, h: 2, color: "#7b2fff", label: "CROSSWALK", sub: "HIGH PED DENSITY" },
  { id: "z5", x: 60, y: 53, w: 5, h: 8, color: "#ff9a00", label: "BUS STOP", sub: "MTA M15 · M101" },
];

const DRONES = [
  { id: "d1", cx: 55, cy: 20, label: "DRONE-α", dest: "St. Luke's Roosevelt", battery: "87%", eta: "4 MIN" },
  { id: "d2", cx: 78, cy: 32, label: "DRONE-β", dest: "432 Park Ave", battery: "63%", eta: "2 MIN" },
  { id: "d3", cx: 33, cy: 18, label: "DRONE-γ", dest: "NYU Langone", battery: "91%", eta: "7 MIN" },
];

const DRONE_PATHS = [
  "M 55,20 Q 52,38 45,51",
  "M 78,32 Q 68,42 62,59",
  "M 33,18 Q 36,35 38,57",
];

const STAGE_CARDS = [
  {
    stage: 1,
    title: "Computer Vision",
    body: "Cameras mounted on poles, buildings, and traffic infrastructure identify and classify every vehicle, pedestrian, and cyclist entering the scene — in real time.",
    position: { right: "4%", top: "20%" },
  },
  {
    stage: 2,
    title: "Multi-Camera Tracking",
    body: "As objects move between camera fields of view, persistent identity is maintained. A vehicle moving down 5th Avenue never loses its tracking ID across six camera handoffs.",
    position: { left: "4%", top: "20%" },
  },
  {
    stage: 3,
    title: "Infrastructure Intelligence",
    body: "The software understands the purpose of each curb zone — loading, pickup, no-stop, bus — and measures real-time utilization, dwell time, and compliance.",
    position: { right: "4%", bottom: "28%" },
  },
  {
    stage: 4,
    title: "Autonomous Fleet Coordination",
    body: "Robotaxis receive real-time zone availability, passenger hand-off locations, and routing adjustments — eliminating the double-parking and lane blockages that define today's curbside chaos.",
    position: { left: "4%", bottom: "28%" },
  },
  {
    stage: 5,
    title: "Drone Operations",
    body: "Commercial delivery, medical logistics, and infrastructure inspection drones are assigned corridors and landing zones that dynamically adjust around ground traffic.",
    position: { right: "4%", top: "20%" },
  },
  {
    stage: 6,
    title: "Digital Twin",
    body: "Every detection, every zone, every vehicle, every drone — synchronized into a living model of the city's mobility layer, updated continuously.",
    position: { left: "4%", top: "30%" },
  },
];

const TWIN_STATS = [
  { label: "Vehicles Tracked", value: "847" },
  { label: "Active Zones", value: "312" },
  { label: "AV Coordination Events/hr", value: "2,841" },
  { label: "Compliance Rate", value: "94.7%" },
  { label: "Drone Corridors Active", value: "18" },
  { label: "Avg Dwell Reduction", value: "41%" },
];

// ── Component ────────────────────────────────────────────────────────────────

export default function CaseStudyPage() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);
  const [dwellTick, setDwellTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setDwellTick((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalStages = 6;
      const stageHeight = 1 / totalStages;

      // Scan line
      gsap.to("#scan-line", {
        y: "100%",
        duration: 3,
        ease: "none",
        repeat: -1,
      });

      // Master scroll timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
            const stage = Math.min(Math.floor(self.progress / stageHeight) + 1, totalStages);
            setActiveStage(stage);
          },
        },
      });

      // Stage 1 — cameras + FOV + vehicles
      tl.fromTo("#group-cameras", { opacity: 0 }, { opacity: 1, duration: 0.15 }, 0.02)
        .fromTo("#group-fov", { opacity: 0 }, { opacity: 0.25, duration: 0.15 }, 0.04)
        .fromTo("#group-vehicles", { opacity: 0 }, { opacity: 1, duration: 0.15 }, 0.06)
        .fromTo("#card-1", { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.1 }, 0.07)

      // Stage 2 — tracking lines
        .fromTo("#group-tracking", { opacity: 0 }, { opacity: 1, duration: 0.15 }, 0.19)
        .fromTo("#card-1", { opacity: 1 }, { opacity: 0, duration: 0.08 }, 0.18)
        .fromTo("#card-2", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.1 }, 0.22)

      // Stage 3 — zones
        .fromTo("#group-zones", { opacity: 0 }, { opacity: 1, duration: 0.15 }, 0.36)
        .fromTo("#card-2", { opacity: 1 }, { opacity: 0, duration: 0.08 }, 0.35)
        .fromTo("#card-3", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.1 }, 0.40)

      // Stage 4 — AV routing
        .fromTo("#group-av", { opacity: 0 }, { opacity: 1, duration: 0.15 }, 0.52)
        .fromTo("#card-3", { opacity: 1 }, { opacity: 0, duration: 0.08 }, 0.51)
        .fromTo("#card-4", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.1 }, 0.55)

      // Stage 5 — drones
        .fromTo("#group-drones", { opacity: 0 }, { opacity: 1, duration: 0.15 }, 0.68)
        .fromTo("#card-4", { opacity: 1 }, { opacity: 0, duration: 0.08 }, 0.67)
        .fromTo("#card-5", { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.1 }, 0.71)

      // Stage 6 — digital twin stats
        .fromTo("#group-twin", { opacity: 0 }, { opacity: 1, duration: 0.15 }, 0.84)
        .fromTo("#card-5", { opacity: 1 }, { opacity: 0, duration: 0.08 }, 0.83)
        .fromTo("#card-6", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.1 }, 0.87)
        .fromTo("#twin-stats", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.1 }, 0.88);

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const dwellStr = (base: number) => {
    const total = base + dwellTick;
    const m = Math.floor(total / 60);
    const s = total % 60;
    return `${m}:${String(s).padStart(2, "0")}`;
  };

  return (
    <main className="relative min-h-screen" style={{ background: "#000008" }}>
      <Nav />

      {/* ── Intro ──────────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-20" style={{ minHeight: "80vh", background: "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.07) 0%, transparent 55%)", borderBottom: "1px solid rgba(0,212,255,0.08)" }}>
        <div className="text-[9px] font-bold tracking-widest uppercase mb-5" style={{ color: "rgba(200,216,240,0.35)", fontFamily: "monospace", letterSpacing: "0.2em" }}>
          ◈ CASE STUDY · CONCEPTUAL VISUALIZATION
        </div>
        <h1 className="font-black text-white mb-4" style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)", letterSpacing: "-0.03em", lineHeight: 1 }}>
          Midtown Manhattan
        </h1>
        <h2 className="font-black mb-6" style={{ fontSize: "clamp(1.2rem, 3vw, 2.2rem)", letterSpacing: "-0.02em", background: "linear-gradient(135deg, #00d4ff, #7b2fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Real-Time Urban Intelligence
        </h2>
        <p style={{ maxWidth: "52ch", color: "rgba(200,216,240,0.55)", lineHeight: 1.8, fontSize: "1rem", marginBottom: "2.5rem" }}>
          A conceptual visualization illustrating how Curbonomous technology could create a living digital twin of one of the world&apos;s most complex urban environments.
        </p>
        <div className="flex items-center gap-2 mb-12">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]" style={{ animation: "pulse 2s infinite" }} />
          <span className="text-[9px] font-bold tracking-widest uppercase" style={{ color: "#00d4ff", fontFamily: "monospace" }}>SCROLL TO EXPERIENCE</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { v: "6", l: "Camera Layers" },
            { v: "847+", l: "Objects Tracked" },
            { v: "5", l: "Mobility Modes" },
            { v: "Real-Time", l: "Data Sync" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-black" style={{ fontSize: "1.5rem", color: "#00d4ff", fontFamily: "monospace" }}>{s.v}</div>
              <div className="text-[9px] tracking-widest uppercase" style={{ color: "rgba(200,216,240,0.35)", fontFamily: "monospace" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Scroll Experience ──────────────────────────────────────────────── */}
      <div ref={wrapperRef} style={{ height: "700vh", position: "relative" }}>
        <div ref={stickyRef} style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>

          {/* Manhattan photo */}
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1920&q=85"
              alt="Aerial view of Midtown Manhattan"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.55) saturate(0.8)" }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,8,0.3) 0%, transparent 20%, transparent 80%, rgba(0,0,8,0.6) 100%)" }} />
          </div>

          {/* Camera grid overlay */}
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }} />

          {/* Scan line */}
          <div id="scan-line" className="absolute left-0 right-0 pointer-events-none" style={{
            height: "2px",
            top: 0,
            background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)",
            zIndex: 10,
          }} />

          {/* LIVE badge */}
          <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 z-20" style={{ background: "rgba(0,0,8,0.75)", border: "1px solid rgba(0,212,255,0.2)", backdropFilter: "blur(8px)" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-red-500" style={{ animation: "pulse 1.5s infinite" }} />
            <span className="text-[9px] font-bold tracking-widest uppercase" style={{ color: "#ff3344", fontFamily: "monospace" }}>CONCEPTUAL · LIVE SIMULATION</span>
          </div>

          {/* Location badge */}
          <div className="absolute top-6 right-6 px-3 py-1.5 z-20" style={{ background: "rgba(0,0,8,0.75)", border: "1px solid rgba(0,212,255,0.12)", backdropFilter: "blur(8px)" }}>
            <div className="text-[9px] font-bold tracking-widest uppercase" style={{ color: "rgba(200,216,240,0.5)", fontFamily: "monospace" }}>MIDTOWN MANHATTAN · NEW YORK, NY</div>
          </div>

          {/* Stage indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
            {[1, 2, 3, 4, 5, 6].map((s) => (
              <div key={s} style={{
                width: s === activeStage ? "24px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: s <= activeStage ? "#00d4ff" : "rgba(200,216,240,0.2)",
                transition: "all 0.3s ease",
              }} />
            ))}
          </div>

          {/* Stage label */}
          {activeStage > 0 && (
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20">
              <div className="text-[9px] font-bold tracking-widest uppercase text-center" style={{ color: "rgba(200,216,240,0.4)", fontFamily: "monospace" }}>
                STAGE {activeStage} OF 6 · {["COMPUTER VISION", "MULTI-CAMERA TRACKING", "INFRASTRUCTURE INTELLIGENCE", "FLEET COORDINATION", "DRONE OPERATIONS", "DIGITAL TWIN"][activeStage - 1]}
              </div>
            </div>
          )}

          {/* ── SVG overlay ─────────────────────────────────────────────────── */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 w-full h-full"
            style={{ zIndex: 5 }}
          >
            {/* Stage 1 — FOV cones */}
            <g id="group-fov" style={{ opacity: 0 }}>
              {FOV_CONES.map((f) => (
                <polygon
                  key={f.id}
                  points={f.points}
                  fill="#00d4ff"
                  fillOpacity="0.12"
                  stroke="#00d4ff"
                  strokeWidth="0.08"
                  strokeOpacity="0.3"
                />
              ))}
            </g>

            {/* Stage 1 — Camera nodes */}
            <g id="group-cameras" style={{ opacity: 0 }}>
              {CAMERAS.map((c) => (
                <g key={c.id}>
                  <circle cx={c.cx} cy={c.cy} r="0.7" fill="#00d4ff" fillOpacity="0.9" />
                  <circle cx={c.cx} cy={c.cy} r="1.4" fill="none" stroke="#00d4ff" strokeWidth="0.1" strokeOpacity="0.4" />
                  <circle cx={c.cx} cy={c.cy} r="2.2" fill="none" stroke="#00d4ff" strokeWidth="0.07" strokeOpacity="0.2" />
                </g>
              ))}
            </g>

            {/* Stage 1 — Vehicle detection boxes */}
            <g id="group-vehicles" style={{ opacity: 0 }}>
              {VEHICLES.map((v) => (
                <g key={v.id}>
                  {/* Box */}
                  <rect x={v.x} y={v.y} width={v.w} height={v.h} fill={`${v.color}15`} stroke={v.color} strokeWidth="0.12" />
                  {/* Corner marks */}
                  <line x1={v.x} y1={v.y} x2={v.x + 0.6} y2={v.y} stroke={v.color} strokeWidth="0.2" />
                  <line x1={v.x} y1={v.y} x2={v.x} y2={v.y + 0.5} stroke={v.color} strokeWidth="0.2" />
                  <line x1={v.x + v.w} y1={v.y} x2={v.x + v.w - 0.6} y2={v.y} stroke={v.color} strokeWidth="0.2" />
                  <line x1={v.x + v.w} y1={v.y} x2={v.x + v.w} y2={v.y + 0.5} stroke={v.color} strokeWidth="0.2" />
                  <line x1={v.x} y1={v.y + v.h} x2={v.x + 0.6} y2={v.y + v.h} stroke={v.color} strokeWidth="0.2" />
                  <line x1={v.x} y1={v.y + v.h} x2={v.x} y2={v.y + v.h - 0.5} stroke={v.color} strokeWidth="0.2" />
                  <line x1={v.x + v.w} y1={v.y + v.h} x2={v.x + v.w - 0.6} y2={v.y + v.h} stroke={v.color} strokeWidth="0.2" />
                  <line x1={v.x + v.w} y1={v.y + v.h} x2={v.x + v.w} y2={v.y + v.h - 0.5} stroke={v.color} strokeWidth="0.2" />
                  {/* Label */}
                  <rect x={v.x} y={v.y - 1.8} width={v.w + 1} height={1.5} fill="rgba(0,0,8,0.8)" />
                  <text x={v.x + 0.3} y={v.y - 0.7} fontSize="0.7" fill={v.color} fontFamily="monospace" fontWeight="bold">{v.type}</text>
                  <text x={v.x + 0.3} y={v.y - 0.05} fontSize="0.55" fill="rgba(200,216,240,0.5)" fontFamily="monospace">{v.tracking}</text>
                </g>
              ))}
            </g>

            {/* Stage 2 — Tracking lines */}
            <g id="group-tracking" style={{ opacity: 0 }}>
              {TRACKING_LINES.map((t) => (
                <line key={t.id} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke="#00d4ff" strokeWidth="0.1" strokeDasharray="0.5 0.3" strokeOpacity="0.6" />
              ))}
              {/* ID persistence label */}
              <g>
                <rect x="43" y="48.5" width="5.5" height="1.5" fill="rgba(0,0,8,0.85)" rx="0.2" />
                <text x="43.3" y="49.6" fontSize="0.65" fill="#00d4ff" fontFamily="monospace">PERSISTENT ID · ACTIVE</text>
              </g>
            </g>

            {/* Stage 3 — Zones */}
            <g id="group-zones" style={{ opacity: 0 }}>
              {ZONES.map((z) => (
                <g key={z.id}>
                  <rect x={z.x} y={z.y} width={z.w} height={z.h} fill={`${z.color}12`} stroke={z.color} strokeWidth="0.1" strokeDasharray="0.4 0.2" />
                  <rect x={z.x} y={z.y} width={z.w} height="2" fill={`${z.color}30`} />
                  <text x={z.x + 0.4} y={z.y + 1.3} fontSize="0.7" fill={z.color} fontFamily="monospace" fontWeight="bold">{z.label}</text>
                  <text x={z.x + 0.4} y={z.y + 3.5} fontSize="0.58" fill="rgba(200,216,240,0.4)" fontFamily="monospace">{z.sub}</text>
                </g>
              ))}
            </g>

            {/* Stage 4 — AV routing */}
            <g id="group-av" style={{ opacity: 0 }}>
              {/* Route arc */}
              <path d="M 38,62 Q 41,54 45,51" stroke="#00ff88" strokeWidth="0.15" fill="none" strokeDasharray="0.6 0.3" />
              <path d="M 43,50 Q 44,48 46,47" stroke="#00ff88" strokeWidth="0.15" fill="none" strokeDasharray="0.6 0.3" />
              {/* AV vehicle highlight */}
              <rect x="34.8" y="61.6" width="5.2" height="2.9" fill="none" stroke="#00ff88" strokeWidth="0.2" />
              <rect x="34.8" y="59.8" width="5.2" height="1.5" fill="rgba(0,0,8,0.85)" />
              <text x="35.1" y="60.9" fontSize="0.65" fill="#00ff88" fontFamily="monospace" fontWeight="bold">WAYMO · AV-READY ZONE</text>
              {/* Demand heat dots */}
              {[
                [44, 52], [46, 53], [43, 54], [47, 51], [45, 55],
                [48, 52], [41, 53], [49, 54],
              ].map(([hx, hy], i) => (
                <circle key={i} cx={hx} cy={hy} r="0.5" fill="#00ff88" fillOpacity={0.08 + (i % 3) * 0.04} />
              ))}
              <text x="41" y="44.5" fontSize="0.7" fill="#00ff88" fontFamily="monospace">◉ DEMAND CONCENTRATION</text>
            </g>

            {/* Stage 5 — Drones */}
            <g id="group-drones" style={{ opacity: 0 }}>
              {DRONE_PATHS.map((d, i) => (
                <path key={i} d={d} stroke="#7b2fff" strokeWidth="0.12" fill="none" strokeDasharray="0.5 0.25" />
              ))}
              {DRONES.map((d) => (
                <g key={d.id}>
                  {/* Drone icon */}
                  <circle cx={d.cx} cy={d.cy} r="0.9" fill="rgba(123,47,255,0.2)" stroke="#7b2fff" strokeWidth="0.15" />
                  <text x={d.cx} y={d.cy + 0.3} fontSize="0.8" fill="#7b2fff" textAnchor="middle" fontFamily="monospace">✦</text>
                  {/* Label */}
                  <rect x={d.cx + 1.2} y={d.cy - 2} width="11" height="3.5" fill="rgba(0,0,8,0.85)" rx="0.2" />
                  <text x={d.cx + 1.6} y={d.cy - 0.9} fontSize="0.65" fill="#7b2fff" fontFamily="monospace" fontWeight="bold">{d.label}</text>
                  <text x={d.cx + 1.6} y={d.cy + 0.0} fontSize="0.55" fill="rgba(200,216,240,0.5)" fontFamily="monospace">{d.dest}</text>
                  <text x={d.cx + 1.6} y={d.cy + 0.9} fontSize="0.55" fill="rgba(200,216,240,0.4)" fontFamily="monospace">{d.battery} · ETA {d.eta}</text>
                </g>
              ))}
              {/* Landing zones */}
              <circle cx="45" cy="51" r="1.5" fill="none" stroke="#7b2fff" strokeWidth="0.1" strokeDasharray="0.3 0.2" />
              <circle cx="62" cy="59" r="1.2" fill="none" stroke="#7b2fff" strokeWidth="0.1" strokeDasharray="0.3 0.2" />
              <circle cx="38" cy="57" r="1.3" fill="none" stroke="#7b2fff" strokeWidth="0.1" strokeDasharray="0.3 0.2" />
            </g>

            {/* Stage 6 — Digital twin grid + pulse */}
            <g id="group-twin" style={{ opacity: 0 }}>
              {/* Full overlay grid — denser */}
              <rect x="0" y="0" width="100" height="100" fill="none" stroke="#00d4ff" strokeWidth="0.03" strokeOpacity="0.08" />
              {[20, 40, 60, 80].map((v) => (
                <g key={v}>
                  <line x1={v} y1="0" x2={v} y2="100" stroke="#00d4ff" strokeWidth="0.04" strokeOpacity="0.07" />
                  <line x1="0" y1={v} x2="100" y2={v} stroke="#00d4ff" strokeWidth="0.04" strokeOpacity="0.07" />
                </g>
              ))}
              {/* Center pulse */}
              <circle cx="48" cy="51" r="5" fill="none" stroke="#00d4ff" strokeWidth="0.12" strokeOpacity="0.3" />
              <circle cx="48" cy="51" r="9" fill="none" stroke="#00d4ff" strokeWidth="0.08" strokeOpacity="0.18" />
              <circle cx="48" cy="51" r="13" fill="none" stroke="#00d4ff" strokeWidth="0.06" strokeOpacity="0.1" />
              <text x="48" y="51.4" fontSize="1" fill="#00d4ff" textAnchor="middle" fontFamily="monospace" fontWeight="bold">DIGITAL TWIN · SYNCHRONIZED</text>
            </g>
          </svg>

          {/* ── Info Cards ─────────────────────────────────────────────────── */}
          {STAGE_CARDS.map((card) => (
            <div
              key={card.stage}
              id={`card-${card.stage}`}
              className="absolute z-20 p-4"
              style={{
                ...card.position,
                maxWidth: "260px",
                background: "rgba(0,0,8,0.82)",
                border: "1px solid rgba(0,212,255,0.2)",
                backdropFilter: "blur(12px)",
                opacity: 0,
              }}
            >
              <div className="text-[8px] font-bold tracking-widest uppercase mb-1.5" style={{ color: "#00d4ff", fontFamily: "monospace" }}>
                STAGE {card.stage} · ACTIVE
              </div>
              <div className="font-black text-white mb-1.5" style={{ fontSize: "0.85rem" }}>{card.title}</div>
              <p style={{ fontSize: "0.72rem", color: "rgba(200,216,240,0.6)", lineHeight: 1.65 }}>{card.body}</p>
            </div>
          ))}

          {/* Stage 6 — Live stats overlay */}
          <div
            id="twin-stats"
            className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-3"
            style={{ opacity: 0 }}
          >
            {TWIN_STATS.map((s) => (
              <div key={s.label} className="text-center px-4 py-2" style={{ background: "rgba(0,0,8,0.82)", border: "1px solid rgba(0,212,255,0.15)", backdropFilter: "blur(8px)" }}>
                <div className="font-black" style={{ fontSize: "1rem", color: "#00d4ff", fontFamily: "monospace" }}>{s.value}</div>
                <div className="text-[8px] tracking-widest uppercase" style={{ color: "rgba(200,216,240,0.4)", fontFamily: "monospace" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Dwell counter — always visible in stages 1+ */}
          {activeStage >= 1 && (
            <div className="absolute z-20" style={{ bottom: "80px", right: "4%" }}>
              <div className="px-3 py-1.5" style={{ background: "rgba(0,0,8,0.75)", border: "1px solid rgba(0,212,255,0.12)", backdropFilter: "blur(8px)" }}>
                <div className="text-[8px] font-bold tracking-widest uppercase mb-1" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>ACTIVE DWELL TIMERS</div>
                <div className="space-y-1">
                  {[
                    { id: "AV-0003", base: 12, color: "#00ff88" },
                    { id: "TRK-0087", base: 87, color: "#ffd700" },
                    { id: "TRK-0041", base: 134, color: "#ff3344" },
                  ].map((d) => (
                    <div key={d.id} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full" style={{ background: d.color }} />
                      <span className="text-[8px]" style={{ color: "rgba(200,216,240,0.4)", fontFamily: "monospace" }}>{d.id}</span>
                      <span className="text-[8px] font-bold" style={{ color: d.color, fontFamily: "monospace" }}>{dwellStr(d.base)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Closing scene ──────────────────────────────────────────────────── */}
      <section className="relative py-32 px-6 text-center overflow-hidden" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(0,212,255,0.06) 0%, transparent 60%)", borderTop: "1px solid rgba(0,212,255,0.08)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-[9px] font-bold tracking-widest uppercase mb-6" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>◈ CONCEPTUAL VISUALIZATION</div>
          <h2 className="font-black text-white mb-4" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.03em", lineHeight: 1 }}>
            One city.<br />Infinite possibilities.
          </h2>
          <p className="mb-10" style={{ fontSize: "0.95rem", color: "rgba(200,216,240,0.5)", lineHeight: 1.8, maxWidth: "50ch", margin: "0 auto 2.5rem" }}>
            This conceptual visualization demonstrates how Curbonomous technology could transform complex urban environments into real-time, connected digital twins — from a single curb zone to an entire city block.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/solutions/urban-intelligence" className="px-10 py-4 font-black text-sm tracking-widest uppercase" style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)", color: "#000" }}>
              Explore the Platform →
            </Link>
            <a href="mailto:demo@curbonomous.com" className="px-10 py-4 font-bold text-sm tracking-widest uppercase" style={{ border: "1px solid rgba(0,212,255,0.25)", color: "#00d4ff" }}>
              Schedule a Demo
            </a>
          </div>
        </div>
        <div className="mt-16 pt-8" style={{ borderTop: "1px solid rgba(0,212,255,0.06)" }}>
          <p className="text-[9px] tracking-widest uppercase text-center" style={{ color: "rgba(200,216,240,0.2)", fontFamily: "monospace" }}>
            All visualizations are conceptual and illustrative. No real deployment, deployment claim, or customer relationship is implied.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
