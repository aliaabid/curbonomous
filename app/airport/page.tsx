"use client";

import { useState, useEffect } from "react";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import DemoSection from "@/components/sections/DemoSection";

function useCounter(initial: number, min: number, max: number) {
  const [v, setV] = useState(initial);
  useEffect(() => {
    const t = setInterval(() => {
      setV((val) => Math.max(min, Math.min(max, val + (Math.random() - 0.45) * (max - min) * 0.04)));
    }, 1800);
    return () => clearInterval(t);
  }, [min, max]);
  return v;
}

function LiveMetric({ label, value, unit, color }: { label: string; value: string | number; unit?: string; color: string }) {
  return (
    <div className="p-4" style={{ background: "rgba(5,12,25,0.8)", border: `1px solid ${color}22` }}>
      <div className="flex items-center gap-1.5 mb-2">
        <div className="w-1 h-1 rounded-full" style={{ background: color, animation: "pulse-dot 1.5s ease-in-out infinite" }} />
        <span className="text-[8px] font-bold tracking-widest uppercase" style={{ color: "rgba(200,216,240,0.35)", fontFamily: "monospace" }}>
          {label}
        </span>
      </div>
      <div className="font-black" style={{ fontSize: "1.5rem", color, lineHeight: 1, fontFamily: "monospace" }}>
        {typeof value === "number" ? Math.round(value).toLocaleString() : value}
        {unit && <span className="text-sm font-normal ml-1" style={{ color: "rgba(200,216,240,0.4)" }}>{unit}</span>}
      </div>
    </div>
  );
}

function AirportOpsPanel() {
  const rideshare = useCounter(847, 600, 1200);
  const compliance = useCounter(94, 88, 99);
  const dwell = useCounter(4.2, 2.8, 7.0);
  const queues = useCounter(12, 4, 30);
  const avPickups = useCounter(67, 30, 100);
  const drones = useCounter(23, 8, 40);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      <LiveMetric label="Rideshare Rides" value={rideshare} unit="/hr" color="#7b2fff" />
      <LiveMetric label="Dwell Compliance" value={`${Math.round(compliance)}%`} color="#00ff88" />
      <LiveMetric label="Avg Dwell Time" value={dwell.toFixed(1)} unit="min" color="#ff6b35" />
      <LiveMetric label="Active Queues" value={queues} color="#00d4ff" />
      <LiveMetric label="AV Pickups" value={avPickups} unit="/hr" color="#7b2fff" />
      <LiveMetric label="Drone Missions" value={drones} color="#ff6b35" />
    </div>
  );
}

const TERMINAL_ZONES = [
  { label: "Zone A — Departures Upper", type: "Rideshare · Commercial", color: "#7b2fff", camera: "CAM-T1A" },
  { label: "Zone B — Arrivals Lower", type: "Rideshare · Black Car · AV", color: "#00d4ff", camera: "CAM-T1B" },
  { label: "Zone C — Shuttle Bay", type: "Hotel Shuttle · Transit", color: "#00ff88", camera: "CAM-T1C" },
  { label: "Zone D — Cargo Apron", type: "Drone Landing · Freight", color: "#ff6b35", camera: "CAM-T1D" },
  { label: "Zone E — AV Staging", type: "Robotaxi · AV Pickup", color: "#ffd700", camera: "CAM-T1E" },
];

const AIRPORT_SOLUTIONS = [
  {
    title: "Curbside Operations Intelligence",
    color: "#7b2fff",
    desc: "Real-time visibility into every vehicle in every curbside zone. Know dwell times, compliance rates, throughput, and congestion at a glance.",
    outcomes: ["40% reduction in terminal congestion", "94%+ rideshare compliance", "Real-time queue depth monitoring"],
  },
  {
    title: "Rideshare & TNC Management",
    color: "#00d4ff",
    desc: "Manage Uber, Lyft, and corporate fleets with automated compliance, dwell enforcement, and dynamic zone allocation.",
    outcomes: ["License plate verification at entry", "Automated dwell overstay detection", "Per-trip revenue capture"],
  },
  {
    title: "Autonomous Vehicle Readiness",
    color: "#ffd700",
    desc: "Dedicated infrastructure for autonomous vehicle pickups — staging queues, dynamic allocation, and passenger transfer management.",
    outcomes: ["Waymo / Zoox zone management", "Dynamic capacity allocation", "Passenger throughput analytics"],
  },
  {
    title: "Drone Logistics Infrastructure",
    color: "#ff6b35",
    desc: "Air corridor management, rooftop landing pad control, and cargo transfer zone monitoring for drone delivery at scale.",
    outcomes: ["Cargo apron drone integration", "Flight corridor management", "Package handoff automation"],
  },
  {
    title: "Ground Transport Coordination",
    color: "#00ff88",
    desc: "Unified management of hotel shuttles, rental car buses, employee vans, and transit connections — all on one platform.",
    outcomes: ["Multi-modal zone coordination", "Schedule adherence monitoring", "Automated dispatch triggers"],
  },
  {
    title: "Revenue & Compliance Analytics",
    color: "#00d4ff",
    desc: "Per-vehicle, per-zone, per-carrier revenue analytics with automated billing, citation workflows, and executive reporting.",
    outcomes: ["Per-trip fee automation", "Carrier compliance scoring", "Executive dashboard reporting"],
  },
];

export default function AirportPage() {
  const [activeZone, setActiveZone] = useState(0);

  return (
    <main className="relative min-h-screen" style={{ background: "#000008" }}>
      <Nav />
      <div className="pt-16">

        {/* Hero */}
        <div
          className="py-24 px-6 relative overflow-hidden"
          style={{
            background: "radial-gradient(ellipse at 60% 50%, rgba(123,47,255,0.1) 0%, transparent 60%)",
            borderBottom: "1px solid rgba(123,47,255,0.1)",
          }}
        >
          {/* Animated grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(123,47,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(123,47,255,0.04) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="max-w-screen-xl mx-auto relative">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#7b2fff] mb-4">
              ◈ AIRPORT INTELLIGENCE PLATFORM
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1
                  className="font-black text-white mb-6"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
                >
                  Airport Curbside<br />
                  <span style={{ color: "#7b2fff" }}>Reimagined</span>
                </h1>
                <p style={{ fontSize: "1.1rem", color: "rgba(200,216,240,0.65)", lineHeight: 1.75, maxWidth: "44ch" }}>
                  Curbonomous transforms the most operationally complex
                  curbsides on earth into intelligent, autonomous,
                  revenue-generating infrastructure.
                </p>
                <div className="mt-8 flex gap-4">
                  <a
                    href="#demo"
                    className="px-8 py-4 font-black text-xs tracking-widest uppercase rounded-sm"
                    style={{ background: "linear-gradient(135deg, #7b2fff, #0066ff)", color: "#fff" }}
                  >
                    Request Airport Demo
                  </a>
                </div>
              </div>

              <AirportOpsPanel />
            </div>
          </div>
        </div>

        {/* Terminal zone management */}
        <section className="py-20 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#7b2fff] mb-8">
              TERMINAL ZONE INTELLIGENCE
            </div>

            <div className="grid md:grid-cols-2 gap-6 items-start">
              {/* Zone tabs */}
              <div className="space-y-2">
                {TERMINAL_ZONES.map((zone, i) => (
                  <button
                    key={zone.label}
                    onClick={() => setActiveZone(i)}
                    className="w-full text-left p-4 transition-all flex items-center gap-4"
                    style={{
                      background: activeZone === i ? `${zone.color}12` : "rgba(5,12,25,0.6)",
                      border: `1px solid ${activeZone === i ? zone.color + "44" : "rgba(0,212,255,0.1)"}`,
                    }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center font-mono font-black text-xs"
                      style={{ background: activeZone === i ? zone.color : "rgba(255,255,255,0.05)", color: activeZone === i ? "#000" : "rgba(200,216,240,0.3)" }}>
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">{zone.label}</div>
                      <div className="text-[8px] mt-0.5" style={{ color: "rgba(200,216,240,0.4)", fontFamily: "monospace" }}>{zone.type}</div>
                    </div>
                    {activeZone === i && (
                      <div className="ml-auto">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: zone.color, animation: "pulse-dot 1.5s ease-in-out infinite" }} />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Zone detail */}
              <div
                className="p-6 h-full"
                style={{
                  background: "rgba(5,12,25,0.9)",
                  border: `1px solid ${TERMINAL_ZONES[activeZone].color}33`,
                  minHeight: 300,
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full" style={{ background: TERMINAL_ZONES[activeZone].color, animation: "pulse-dot 1.5s ease-in-out infinite" }} />
                  <span className="text-[9px] font-bold tracking-widest uppercase" style={{ color: TERMINAL_ZONES[activeZone].color, fontFamily: "monospace" }}>
                    {TERMINAL_ZONES[activeZone].camera} · ACTIVE
                  </span>
                </div>

                <h3 className="font-black text-white text-xl mb-2">{TERMINAL_ZONES[activeZone].label}</h3>
                <div className="text-[9px] font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>
                  MODE: {TERMINAL_ZONES[activeZone].type}
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: "Occupancy", value: "82%", color: "#00d4ff" },
                    { label: "Queue Depth", value: "4 min", color: "#ff6b35" },
                    { label: "Violations", value: 2, color: "#ff4444" },
                    { label: "Throughput", value: "114/hr", color: "#00ff88" },
                  ].map((m) => (
                    <div key={m.label} className="p-3" style={{ background: "rgba(0,0,8,0.6)", border: `1px solid ${m.color}22` }}>
                      <div className="font-black text-base" style={{ color: m.color }}>{m.value}</div>
                      <div className="text-[8px] tracking-widest uppercase mt-0.5" style={{ color: "rgba(200,216,240,0.35)", fontFamily: "monospace" }}>{m.label}</div>
                    </div>
                  ))}
                </div>

                <div
                  className="p-3 text-[9px]"
                  style={{ background: "rgba(0,0,8,0.4)", border: "1px solid rgba(0,212,255,0.08)", fontFamily: "monospace", color: "rgba(200,216,240,0.4)", lineHeight: 1.8 }}
                >
                  <div style={{ color: "#00ff88" }}>● SYSTEM ACTIVE</div>
                  <div>Last event: Vehicle departed · 00:42 ago</div>
                  <div>Next expected: Rideshare arrival · 1:20</div>
                  <div>Zone policy: 3-min max dwell · Automated enforcement</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Airport solutions grid */}
        <section
          className="py-20 px-6"
          style={{ background: "rgba(5,12,25,0.4)", borderTop: "1px solid rgba(0,212,255,0.06)" }}
        >
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#7b2fff] mb-8">
              AIRPORT SOLUTION AREAS
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {AIRPORT_SOLUTIONS.map((sol) => (
                <div
                  key={sol.title}
                  className="p-6"
                  style={{ background: "rgba(5,12,25,0.8)", border: `1px solid ${sol.color}18` }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full" style={{ background: sol.color }} />
                    <span className="font-black text-white text-sm">{sol.title}</span>
                  </div>
                  <p className="text-[0.82rem] mb-4" style={{ color: "rgba(200,216,240,0.55)", lineHeight: 1.7 }}>{sol.desc}</p>
                  <div className="space-y-1.5">
                    {sol.outcomes.map((o) => (
                      <div key={o} className="flex items-center gap-2">
                        <span style={{ color: sol.color, fontSize: "0.7rem" }}>→</span>
                        <span className="text-[0.75rem] font-semibold" style={{ color: sol.color }}>{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Procurement callout */}
        <section className="py-20 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div
              className="p-10 text-center"
              style={{ background: "rgba(5,12,25,0.9)", border: "1px solid rgba(123,47,255,0.25)" }}
            >
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#7b2fff] mb-4">
                ◈ PROCUREMENT READY
              </div>
              <h2
                className="font-black text-white mb-4"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
              >
                Airport Authorities Trust Curbonomous
              </h2>
              <p className="text-[#c8d8f0]/55 max-w-2xl mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                Hardware-as-a-Service deployment. No capital expenditure. 99.97% uptime SLA.
                24/7 NOC support. Responds to airport RFPs within 48 hours.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="#demo"
                  className="px-10 py-4 font-black text-sm tracking-widest uppercase rounded-sm"
                  style={{ background: "linear-gradient(135deg, #7b2fff, #0066ff)", color: "#fff" }}
                >
                  Schedule Airport Demo
                </a>
                <a
                  href="#demo"
                  className="px-10 py-4 font-bold text-sm tracking-widest uppercase rounded-sm"
                  style={{ border: "1px solid rgba(123,47,255,0.4)", color: "#7b2fff" }}
                >
                  View RFP Response →
                </a>
              </div>
            </div>
          </div>
        </section>

        <DemoSection />
      </div>
      <Footer />
    </main>
  );
}
