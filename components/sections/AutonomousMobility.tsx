"use client";

import { useEffect, useRef, useState } from "react";

const TABS = [
  { id: "robotaxi", label: "Robotaxi", color: "#7b2fff" },
  { id: "robots", label: "Delivery Robots", color: "#0066ff" },
  { id: "drones", label: "Drone Network", color: "#ff6b35" },
  { id: "freight", label: "Autonomous Freight", color: "#00ff88" },
  { id: "uam", label: "Urban Air Mobility", color: "#00d4ff" },
];

// --- Robotaxi Animation ---
function RobotaxiViz() {
  const [phase, setPhase] = useState(0);
  const laneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cycle = () => {
      setPhase(0);
      setTimeout(() => setPhase(1), 800);
      setTimeout(() => setPhase(2), 2200);
      setTimeout(() => setPhase(3), 3600);
      setTimeout(() => setPhase(4), 4800);
      setTimeout(cycle, 7000);
    };
    const t = setTimeout(cycle, 500);
    return () => clearTimeout(t);
  }, []);

  const PARTNERS = ["WAYMO", "ZOOX", "UBER AV", "LYFT AV"];
  const ZONES = ["PICKUP ZONE A", "PICKUP ZONE B", "DROPOFF ZONE"];

  return (
    <div className="space-y-6">
      {/* Zone map */}
      <div className="relative" style={{ height: 220, background: "rgba(0,0,8,0.6)", border: "1px solid rgba(123,47,255,0.2)" }}>
        {/* Road */}
        <div className="absolute inset-x-0" style={{ top: "40%", height: 40, background: "#050d18", borderTop: "1px solid rgba(0,212,255,0.1)", borderBottom: "1px solid rgba(0,212,255,0.1)" }}>
          <div className="absolute inset-y-0 left-0 right-0 flex items-center">
            <div className="w-full border-t border-dashed" style={{ borderColor: "rgba(0,212,255,0.2)" }} />
          </div>
        </div>

        {/* Zones */}
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute flex flex-col items-center justify-center"
            style={{
              left: `${15 + i * 28}%`,
              top: "20%",
              width: "20%",
              height: "60%",
              border: `1px solid ${phase >= 1 ? "#7b2fff" : "rgba(123,47,255,0.2)"}`,
              background: phase >= 1 ? "rgba(123,47,255,0.08)" : "transparent",
              transition: "all 0.5s ease",
            }}
          >
            <span className="text-[8px] font-bold tracking-widest uppercase text-center" style={{ color: "#7b2fff" }}>
              {ZONES[i]}
            </span>
          </div>
        ))}

        {/* Robotaxi car */}
        <div
          className="absolute transition-all duration-1000"
          style={{
            top: "38%",
            left: phase === 0 ? "-10%" : phase === 1 ? "10%" : phase === 2 ? "35%" : phase === 3 ? "35%" : "90%",
            transform: "translateY(-50%)",
          }}
        >
          <div className="relative">
            <div style={{ width: 52, height: 24, background: "#7b2fff", borderRadius: 4, position: "relative" }}>
              <div style={{ position: "absolute", top: -10, left: 8, right: 8, height: 14, background: "#5a20cc", borderRadius: "3px 3px 0 0" }} />
              <div style={{ position: "absolute", bottom: -4, left: 6, width: 10, height: 10, borderRadius: "50%", background: "#111" }} />
              <div style={{ position: "absolute", bottom: -4, right: 6, width: 10, height: 10, borderRadius: "50%", background: "#111" }} />
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, border: "1px solid #00d4ff", borderRadius: 4, opacity: 0.4 }} />
            </div>
            {/* Label */}
            <div className="absolute -top-6 left-0 right-0 text-center text-[8px] font-bold tracking-widest" style={{ color: "#7b2fff" }}>
              ROBOTAXI-01
            </div>
          </div>
        </div>

        {/* Passenger icon */}
        {phase === 3 && (
          <div
            className="absolute flex items-center gap-1"
            style={{ top: "10%", left: "38%", animation: "fadeInUp 0.4s ease" }}
          >
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#00ff88" }} />
            <span className="text-[8px] tracking-widest uppercase" style={{ color: "#00ff88", fontFamily: "monospace" }}>BOARDED</span>
          </div>
        )}

        {/* Zone auto-update */}
        {phase >= 2 && (
          <div
            className="absolute bottom-2 right-2 text-[8px] tracking-widest uppercase px-2 py-1"
            style={{
              background: "rgba(0,212,255,0.08)",
              border: "1px solid rgba(0,212,255,0.2)",
              color: "#00d4ff",
              fontFamily: "monospace",
            }}
          >
            ZONE UPDATED
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          { label: "Pickup Zones", value: "142", color: "#7b2fff" },
          { label: "Queue Depth", value: "3.2 min", color: "#00d4ff" },
          { label: "Throughput", value: "847/hr", color: "#00ff88" },
          { label: "Utilization", value: "94%", color: "#ff6b35" },
        ].map((s) => (
          <div key={s.label} className="p-3" style={{ background: "rgba(5,15,30,0.8)", border: "1px solid rgba(0,212,255,0.1)" }}>
            <div className="text-lg font-black" style={{ color: s.color }}>{s.value}</div>
            <div className="text-[9px] tracking-widest uppercase mt-1" style={{ color: "rgba(200,216,240,0.4)", fontFamily: "monospace" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Partners */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-[9px] tracking-widest uppercase" style={{ color: "rgba(200,216,240,0.3)" }}>INTEGRATED:</span>
        {PARTNERS.map((p) => (
          <span key={p} className="px-3 py-1 text-[9px] font-bold tracking-widest uppercase"
            style={{ border: "1px solid rgba(123,47,255,0.3)", color: "#7b2fff", background: "rgba(123,47,255,0.06)" }}>
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

// --- Delivery Robot Viz ---
function DeliveryRobotViz() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const cycle = () => {
      setPhase(0);
      setTimeout(() => setPhase(1), 600);
      setTimeout(() => setPhase(2), 2000);
      setTimeout(() => setPhase(3), 3500);
      setTimeout(() => setPhase(4), 5000);
      setTimeout(cycle, 7000);
    };
    const t = setTimeout(cycle, 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="space-y-6">
      <div className="relative" style={{ height: 220, background: "rgba(0,0,8,0.6)", border: "1px solid rgba(0,102,255,0.2)" }}>
        {/* Sidewalk */}
        <div className="absolute" style={{ bottom: "20%", left: 0, right: 0, height: 60, background: "rgba(0,20,40,0.6)", borderTop: "1px solid rgba(0,102,255,0.15)" }} />

        {/* Charging station */}
        <div className="absolute flex flex-col items-center" style={{ left: "8%", bottom: "22%", width: 40 }}>
          <div style={{ width: 24, height: 32, background: "#0066ff22", border: "1px solid #0066ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#0066ff", fontSize: 12, fontWeight: 900 }}>⚡</span>
          </div>
          <span className="text-[7px] tracking-wider uppercase mt-1" style={{ color: "#0066ff", fontFamily: "monospace" }}>CHARGE</span>
        </div>

        {/* Delivery target */}
        <div className="absolute flex flex-col items-center" style={{ right: "10%", bottom: "22%", width: 40 }}>
          <div style={{ width: 24, height: 24, background: "#00ff8822", border: "1px solid #00ff88", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 2 }}>
            <span style={{ color: "#00ff88", fontSize: 10 }}>📦</span>
          </div>
          <span className="text-[7px] tracking-wider uppercase mt-1" style={{ color: "#00ff88", fontFamily: "monospace" }}>DELIVERY</span>
        </div>

        {/* Robot */}
        <div
          className="absolute transition-all duration-1500"
          style={{
            bottom: "22%",
            left: phase === 0 ? "12%" : phase >= 1 && phase <= 2 ? "50%" : phase === 3 ? "78%" : "78%",
            transform: "translateY(-50%)",
          }}
        >
          <div style={{ width: 20, height: 26, background: "#0066ff", borderRadius: 3, position: "relative", border: "1px solid #00d4ff" }}>
            <div style={{ position: "absolute", top: 3, left: 3, right: 3, height: 8, background: "#001840", borderRadius: 1 }} />
            <div style={{ position: "absolute", top: 5, left: 5, width: 4, height: 4, borderRadius: "50%", background: "#00d4ff", boxShadow: "0 0 6px #00d4ff" }} />
          </div>
          {phase === 3 && (
            <div className="absolute -top-5 left-0 right-0 text-center text-[7px] font-bold" style={{ color: "#00ff88" }}>✓ DELIVERED</div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          { label: "Active Robots", value: "312", color: "#0066ff" },
          { label: "Deliveries/Day", value: "2,847", color: "#00d4ff" },
          { label: "Avg Speed", value: "4.2 mph", color: "#00ff88" },
          { label: "Battery Avg", value: "78%", color: "#ff6b35" },
        ].map((s) => (
          <div key={s.label} className="p-3" style={{ background: "rgba(5,15,30,0.8)", border: "1px solid rgba(0,212,255,0.1)" }}>
            <div className="text-lg font-black" style={{ color: s.color }}>{s.value}</div>
            <div className="text-[9px] tracking-widest uppercase mt-1" style={{ color: "rgba(200,216,240,0.4)", fontFamily: "monospace" }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-[9px] tracking-widest uppercase" style={{ color: "rgba(200,216,240,0.3)" }}>INTEGRATED:</span>
        {["SERVE ROBOTICS", "COCO", "CARTKEN"].map((p) => (
          <span key={p} className="px-3 py-1 text-[9px] font-bold tracking-widest uppercase"
            style={{ border: "1px solid rgba(0,102,255,0.3)", color: "#0066ff", background: "rgba(0,102,255,0.06)" }}>
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

// --- Drone Viz ---
function DroneViz() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const cycle = () => {
      setPhase(0);
      setTimeout(() => setPhase(1), 800);
      setTimeout(() => setPhase(2), 2400);
      setTimeout(() => setPhase(3), 3800);
      setTimeout(cycle, 6500);
    };
    const t = setTimeout(cycle, 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="space-y-6">
      <div className="relative" style={{ height: 220, background: "rgba(0,0,8,0.6)", border: "1px solid rgba(255,107,53,0.2)" }}>
        {/* Sky corridors */}
        {[30, 50, 70].map((pct) => (
          <div
            key={pct}
            className="absolute border-t border-dashed"
            style={{ top: `${pct}%`, left: 0, right: 0, borderColor: "rgba(255,107,53,0.15)" }}
          />
        ))}
        {/* Corridor labels */}
        <span className="absolute text-[7px]" style={{ top: "28%", right: 4, color: "rgba(255,107,53,0.5)", fontFamily: "monospace" }}>CORRIDOR A</span>
        <span className="absolute text-[7px]" style={{ top: "48%", right: 4, color: "rgba(255,107,53,0.5)", fontFamily: "monospace" }}>CORRIDOR B</span>

        {/* Landing pad */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            right: "12%",
            bottom: "10%",
            width: 50,
            height: 50,
            borderRadius: "50%",
            border: `2px solid ${phase >= 2 ? "#ff6b35" : "rgba(255,107,53,0.3)"}`,
            background: phase >= 2 ? "rgba(255,107,53,0.15)" : "transparent",
            transition: "all 0.5s",
          }}
        >
          <span className="text-[8px] font-bold" style={{ color: "#ff6b35" }}>PAD</span>
        </div>

        {/* Drone */}
        <div
          className="absolute transition-all duration-1500"
          style={{
            left: phase === 0 ? "-5%" : phase === 1 ? "40%" : "72%",
            top: phase === 0 ? "30%" : phase === 1 ? "30%" : "25%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div style={{ width: 30, height: 20, position: "relative" }}>
            {/* Body */}
            <div style={{ position: "absolute", top: "30%", left: "25%", width: "50%", height: "40%", background: "#ff6b35", borderRadius: 2 }} />
            {/* Arms */}
            {[[-100, -100], [100, -100], [-100, 100], [100, 100]].map(([rx, ry], i) => (
              <div key={i} style={{ position: "absolute", top: "50%", left: "50%", width: 12, height: 2, background: "#333", transform: `translate(${rx > 0 ? 0 : -100}%, ${ry > 0 ? 0 : -100}%) rotate(${i * 90}deg)` }} />
            ))}
            {/* Package */}
            {phase >= 1 && phase < 3 && (
              <div style={{ position: "absolute", top: "80%", left: "30%", width: 12, height: 10, background: "#ffaa00", borderRadius: 1, border: "1px solid #ffd700" }} />
            )}
          </div>
        </div>

        {phase >= 3 && (
          <div className="absolute" style={{ right: "12%", bottom: "62%", animation: "fadeInUp 0.4s ease" }}>
            <span className="text-[8px] font-bold tracking-widest uppercase" style={{ color: "#00ff88" }}>✓ DELIVERED</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          { label: "Active Drones", value: "89", color: "#ff6b35" },
          { label: "Deliveries/Hr", value: "347", color: "#00d4ff" },
          { label: "Corridors", value: "24", color: "#00ff88" },
          { label: "Avg Range", value: "6.4 mi", color: "#7b2fff" },
        ].map((s) => (
          <div key={s.label} className="p-3" style={{ background: "rgba(5,15,30,0.8)", border: "1px solid rgba(0,212,255,0.1)" }}>
            <div className="text-lg font-black" style={{ color: s.color }}>{s.value}</div>
            <div className="text-[9px] tracking-widest uppercase mt-1" style={{ color: "rgba(200,216,240,0.4)", fontFamily: "monospace" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Freight Viz ---
function FreightViz() {
  return (
    <div className="space-y-6">
      <div className="relative" style={{ height: 220, background: "rgba(0,0,8,0.6)", border: "1px solid rgba(0,255,136,0.2)" }}>
        {/* Freight yard */}
        <div className="absolute inset-4 grid grid-cols-3 gap-2">
          {["STAGING", "TRANSFER", "DISPATCH"].map((zone, i) => (
            <div
              key={zone}
              className="flex flex-col items-center justify-center"
              style={{
                background: "rgba(0,255,136,0.06)",
                border: "1px solid rgba(0,255,136,0.2)",
                padding: 8,
                animation: `fadeInUp 0.6s ease ${i * 0.2}s both`,
              }}
            >
              <div className="text-xl mb-2">🚛</div>
              <span className="text-[8px] font-bold tracking-widest uppercase text-center" style={{ color: "#00ff88", fontFamily: "monospace" }}>{zone}</span>
              <div className="w-full mt-2" style={{ height: 3, background: "rgba(0,255,136,0.3)", borderRadius: 2 }}>
                <div style={{ height: "100%", width: `${60 + i * 15}%`, background: "#00ff88", borderRadius: 2 }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          { label: "Active Trucks", value: "1,247", color: "#00ff88" },
          { label: "Freight Volume", value: "84.2t", color: "#00d4ff" },
          { label: "Yard Utilization", value: "71%", color: "#ff6b35" },
          { label: "Avg Dwell", value: "18 min", color: "#7b2fff" },
        ].map((s) => (
          <div key={s.label} className="p-3" style={{ background: "rgba(5,15,30,0.8)", border: "1px solid rgba(0,212,255,0.1)" }}>
            <div className="text-lg font-black" style={{ color: s.color }}>{s.value}</div>
            <div className="text-[9px] tracking-widest uppercase mt-1" style={{ color: "rgba(200,216,240,0.4)", fontFamily: "monospace" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- UAM Viz ---
function UAMViz() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const cycle = () => {
      setPhase(0);
      setTimeout(() => setPhase(1), 1000);
      setTimeout(() => setPhase(2), 2800);
      setTimeout(() => setPhase(3), 4500);
      setTimeout(cycle, 7000);
    };
    const t = setTimeout(cycle, 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="space-y-6">
      <div className="relative" style={{ height: 220, background: "rgba(0,0,8,0.6)", border: "1px solid rgba(0,212,255,0.2)" }}>
        {/* Vertiport */}
        <div className="absolute flex flex-col items-center" style={{ right: "15%", bottom: "10%", width: 60 }}>
          <div style={{ width: 60, height: 8, background: "rgba(0,212,255,0.2)", border: "1px solid #00d4ff" }} />
          <div style={{ width: 40, height: 30, background: "#050d18", borderTop: "none", border: "1px solid rgba(0,212,255,0.15)" }} />
          <span className="text-[7px] font-bold tracking-widest" style={{ color: "#00d4ff", fontFamily: "monospace" }}>VERTIPORT</span>
        </div>

        {/* eVTOL */}
        <div
          className="absolute transition-all duration-2000"
          style={{
            left: "10%",
            top: phase === 0 ? "15%" : phase === 1 ? "15%" : phase === 2 ? "20%" : "15%",
            transform: "translateY(-50%)",
            transition: "all 1.5s ease",
          }}
        >
          <div style={{ width: 44, height: 18, background: "#00d4ff22", border: "1px solid #00d4ff", borderRadius: 8, position: "relative" }}>
            <div style={{ position: "absolute", top: 2, left: 6, right: 6, height: 10, background: "#001830", borderRadius: 4 }} />
            {/* Rotors */}
            {[-1, 1].map((dir) => (
              <div key={dir} style={{ position: "absolute", top: -4, [dir > 0 ? "right" : "left"]: 4, width: 14, height: 2, background: "#00d4ff", borderRadius: 1, transformOrigin: "center", animation: "spin 0.2s linear infinite" }} />
            ))}
          </div>
          {phase >= 1 && (
            <div className="absolute -top-5 left-0 right-0 text-center text-[7px] font-bold" style={{ color: "#00d4ff" }}>AIR TAXI</div>
          )}
        </div>

        {phase >= 3 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[8px] font-bold tracking-widest uppercase px-3 py-1"
            style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff", fontFamily: "monospace" }}>
            ↓ CONNECTING TO ROBOTAXI NETWORK
          </div>
        )}
      </div>

      <div className="p-4" style={{ background: "rgba(0,212,255,0.04)", border: "1px solid rgba(0,212,255,0.1)" }}>
        <div className="text-[9px] font-bold tracking-widest uppercase text-[#00d4ff] mb-2">COMING SOON — 2027</div>
        <p className="text-sm" style={{ color: "rgba(200,216,240,0.5)", lineHeight: 1.6 }}>
          Curbonomous is building the ground-level infrastructure layer to support urban air mobility — vertiport management, passenger transfer to robotaxi, and inter-modal coordination.
        </p>
      </div>
    </div>
  );
}

const VIZ_MAP = {
  robotaxi: RobotaxiViz,
  robots: DeliveryRobotViz,
  drones: DroneViz,
  freight: FreightViz,
  uam: UAMViz,
};

export default function AutonomousMobility() {
  const [activeTab, setActiveTab] = useState("robotaxi");
  const VizComponent = VIZ_MAP[activeTab as keyof typeof VIZ_MAP];

  return (
    <section className="relative py-40 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 30% 60%, rgba(123,47,255,0.06) 0%, transparent 60%)",
      }} />

      <div className="max-w-4xl mx-auto px-10">
        <div className="text-center mb-16">
          <div className="text-[10px] font-bold tracking-widest uppercase text-[#7b2fff] mb-5">
            ◈ AUTONOMOUS MOBILITY OPERATIONS
          </div>
          <h2
            className="font-black text-white mb-6 text-center"
            style={{ fontSize: "clamp(1.8rem, 3vw, 3.2rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            Every Mode. One Platform.
          </h2>
          <p className="text-[#c8d8f0]/60 max-w-2xl mx-auto text-center" style={{ fontSize: "1.1rem", lineHeight: 1.85 }}>
            From robotaxis to delivery drones to urban air taxis — Curbonomous provides the
            infrastructure intelligence layer that connects every autonomous vehicle to the city.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto gap-3 mb-10 pb-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex-shrink-0 px-5 py-2.5 text-[10px] font-bold tracking-widest uppercase rounded-sm transition-all duration-300"
              style={{
                border: `1px solid ${activeTab === tab.id ? tab.color : "rgba(0,212,255,0.15)"}`,
                background: activeTab === tab.id ? `${tab.color}18` : "rgba(5,15,30,0.6)",
                color: activeTab === tab.id ? tab.color : "rgba(200,216,240,0.4)",
                boxShadow: activeTab === tab.id ? `0 0 20px ${tab.color}33` : "none",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Visualization */}
        <div
          className="p-10"
          style={{
            background: "rgba(5,10,20,0.6)",
            border: "1px solid rgba(0,212,255,0.12)",
            backdropFilter: "blur(10px)",
          }}
        >
          <VizComponent />
        </div>
      </div>
    </section>
  );
}
