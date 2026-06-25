"use client";

import { useEffect, useRef, useState } from "react";

function useCounter(initial: number, min: number, max: number, interval = 2000) {
  const [value, setValue] = useState(initial);
  useEffect(() => {
    const t = setInterval(() => {
      setValue((v) => {
        const delta = (Math.random() - 0.45) * (max - min) * 0.04;
        return Math.max(min, Math.min(max, v + delta));
      });
    }, interval);
    return () => clearInterval(t);
  }, [min, max, interval]);
  return value;
}

function SparklineChart({ color, positive }: { color: string; positive: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<number[]>(Array.from({ length: 30 }, () => Math.random()));

  useEffect(() => {
    const interval = setInterval(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const w = canvas.width;
      const h = canvas.height;

      points.current.push(Math.max(0, Math.min(1, points.current[points.current.length - 1] + (Math.random() - 0.5) * 0.15)));
      if (points.current.length > 30) points.current.shift();

      ctx.clearRect(0, 0, w, h);

      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, `${color}44`);
      grad.addColorStop(1, "transparent");

      ctx.beginPath();
      ctx.moveTo(0, h * (1 - points.current[0]));
      points.current.forEach((p, i) => {
        ctx.lineTo((i / (points.current.length - 1)) * w, h * (1 - p));
      });
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0, h * (1 - points.current[0]));
      points.current.forEach((p, i) => {
        ctx.lineTo((i / (points.current.length - 1)) * w, h * (1 - p));
      });
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }, 500);
    return () => clearInterval(interval);
  }, [color]);

  return <canvas ref={canvasRef} width={100} height={36} style={{ width: "100%", height: 36 }} />;
}

function MetricCard({
  label, value, unit, color, min, max, format, trend
}: {
  label: string;
  value: number;
  unit: string;
  color: string;
  min: number;
  max: number;
  format?: (v: number) => string;
  trend: boolean;
}) {
  const live = useCounter(value, min, max, 1800);
  const display = format ? format(live) : Math.round(live).toLocaleString();
  const pct = ((live - min) / (max - min)) * 100;

  return (
    <div
      className="p-5 flex flex-col gap-3"
      style={{
        background: "rgba(5,12,25,0.85)",
        border: `1px solid ${color}22`,
      }}
    >
      <div className="flex items-center justify-between">
        <span className="text-[8px] font-bold tracking-widest uppercase" style={{ color: "rgba(200,216,240,0.4)", fontFamily: "monospace" }}>
          {label}
        </span>
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: color, animation: "pulse-dot 2s ease-in-out infinite" }} />
      </div>
      <div className="flex items-baseline gap-1">
        <span className="font-black" style={{ fontSize: "1.6rem", color, lineHeight: 1, fontFamily: "monospace" }}>
          {display}
        </span>
        <span className="text-[9px]" style={{ color: "rgba(200,216,240,0.35)" }}>{unit}</span>
      </div>
      <div className="h-1 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${color}88, ${color})` }}
        />
      </div>
      <SparklineChart color={color} positive={trend} />
    </div>
  );
}

function RadarDisplay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const angleRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;
    const r = Math.min(W, H) * 0.42;

    // Blips
    const blips = Array.from({ length: 18 }, () => ({
      angle: Math.random() * Math.PI * 2,
      dist: Math.random() * 0.85 + 0.1,
      size: Math.random() * 2 + 1,
      color: ["#00d4ff", "#00ff88", "#7b2fff", "#ff6b35"][Math.floor(Math.random() * 4)],
      age: Math.random(),
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#000810";
      ctx.fillRect(0, 0, W, H);

      // Rings
      [0.25, 0.5, 0.75, 1].forEach((ratio) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r * ratio, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0,212,255,0.15)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Cross hairs
      ctx.strokeStyle = "rgba(0,212,255,0.1)";
      ctx.beginPath(); ctx.moveTo(cx - r, cy); ctx.lineTo(cx + r, cy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx, cy - r); ctx.lineTo(cx, cy + r); ctx.stroke();

      // Sweep
      const sweepAngle = angleRef.current;

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, sweepAngle - 0.8, sweepAngle, false);
      ctx.closePath();
      const sweepGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      sweepGrad.addColorStop(0, "rgba(0,212,255,0.05)");
      sweepGrad.addColorStop(1, "rgba(0,212,255,0.2)");
      ctx.fillStyle = sweepGrad;
      ctx.fill();

      // Sweep line
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(sweepAngle) * r, cy + Math.sin(sweepAngle) * r);
      ctx.strokeStyle = "#00d4ff";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Blips
      blips.forEach((b) => {
        const angleDiff = ((sweepAngle - b.angle) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
        const fadeAge = angleDiff < 1.5 ? 1 - angleDiff / 1.5 : 0;
        if (fadeAge <= 0) return;

        const bx = cx + Math.cos(b.angle) * r * b.dist;
        const by = cy + Math.sin(b.angle) * r * b.dist;

        ctx.beginPath();
        ctx.arc(bx, by, b.size + 1, 0, Math.PI * 2);
        ctx.fillStyle = `${b.color}${Math.round(fadeAge * 40).toString(16).padStart(2, "0")}`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(bx, by, b.size, 0, Math.PI * 2);
        ctx.fillStyle = `${b.color}${Math.round(fadeAge * 255).toString(16).padStart(2, "0")}`;
        ctx.fill();
      });

      // Center
      ctx.beginPath();
      ctx.arc(cx, cy, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#00d4ff";
      ctx.fill();

      angleRef.current = (angleRef.current + 0.025) % (Math.PI * 2);
      requestAnimationFrame(draw);
    };

    const raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={180}
      height={180}
      style={{ width: "100%", height: "100%", maxWidth: 180, maxHeight: 180 }}
    />
  );
}

function AlertFeed() {
  const ALERT_TEMPLATES = [
    { msg: "Violation detected — Zone B-12", color: "#ff4444" },
    { msg: "Robotaxi queued — Terminal 3", color: "#7b2fff" },
    { msg: "Occupancy 95% — Loading Zone 7", color: "#ff6b35" },
    { msg: "Drone mission complete — Medical District", color: "#00ff88" },
    { msg: "Revenue milestone — $10k today", color: "#ffd700" },
    { msg: "Camera offline — Intersection 44A", color: "#ff4444" },
    { msg: "Transit delay — Route 22", color: "#ff6b35" },
    { msg: "New delivery robot active — Downtown", color: "#0066ff" },
  ];

  const FIXED_TIMES = ["2:14 ago", "1:47 ago", "0:53 ago", "0:08 ago"];
  const [alerts, setAlerts] = useState(() =>
    Array.from({ length: 4 }, (_, i) => ({
      id: i,
      ...ALERT_TEMPLATES[i],
      time: FIXED_TIMES[i],
    }))
  );

  useEffect(() => {
    const t = setInterval(() => {
      const tpl = ALERT_TEMPLATES[Math.floor(Math.random() * ALERT_TEMPLATES.length)];
      setAlerts((prev) => [
        { id: Date.now(), ...tpl, time: "just now" },
        ...prev.slice(0, 5),
      ]);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="space-y-1.5">
      {alerts.map((alert, i) => (
        <div
          key={alert.id}
          className="flex items-start gap-3 px-4 py-3 transition-all"
          style={{
            background: i === 0 ? `${alert.color}0a` : "transparent",
            borderLeft: `2px solid ${alert.color}${i === 0 ? "cc" : "44"}`,
            opacity: 1 - i * 0.12,
            animation: i === 0 ? "fadeInUp 0.3s ease" : "none",
          }}
        >
          <div className="flex-1 min-w-0">
            <span className="text-[9px]" style={{ color: i === 0 ? alert.color : "rgba(200,216,240,0.5)", fontFamily: "monospace" }}>
              {alert.msg}
            </span>
          </div>
          <span className="text-[8px] flex-shrink-0" style={{ color: "rgba(200,216,240,0.25)", fontFamily: "monospace" }}>
            {alert.time}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function CommandCenter() {
  return (
    <section className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "linear-gradient(180deg, transparent 0%, rgba(0,212,255,0.02) 50%, transparent 100%)",
      }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(0,212,255,0.02) 60px, rgba(0,212,255,0.02) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(0,212,255,0.02) 60px, rgba(0,212,255,0.02) 61px)",
        }}
      />

      <div className="max-w-4xl mx-auto px-10">
        <div className="text-center mb-16">
          <div className="text-[10px] font-bold tracking-widest uppercase text-[#00ff88] mb-5">
            ◈ LIVE OPERATIONS CENTER
          </div>
          <h2
            className="font-black text-white mb-6 text-center"
            style={{ fontSize: "clamp(1.8rem, 3vw, 3.2rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            Mission Control
            <br />
            <span style={{ color: "#00d4ff" }}>for the City</span>
          </h2>
          <p className="text-[#c8d8f0]/60 max-w-2xl mx-auto text-center" style={{ fontSize: "1.1rem", lineHeight: 1.85 }}>
            Real-time visibility into every vehicle, zone, and event across the entire transportation network.
          </p>
        </div>

        {/* Main dashboard */}
        <div
          className="rounded-sm overflow-hidden"
          style={{ border: "1px solid rgba(0,212,255,0.15)", background: "rgba(2,8,18,0.95)" }}
        >
          {/* Top bar */}
          <div
            className="flex items-center justify-between px-6 py-3"
            style={{ borderBottom: "1px solid rgba(0,212,255,0.1)", background: "rgba(0,0,8,0.8)" }}
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00ff88]" style={{ animation: "pulse-dot 1.5s ease-in-out infinite" }} />
                <span className="text-[9px] font-bold tracking-widest uppercase" style={{ color: "#00ff88", fontFamily: "monospace" }}>
                  ALL SYSTEMS NOMINAL
                </span>
              </div>
              <span className="text-[9px] tracking-widest" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>
                CURBONOMOUS CITY OS · ZONE: METROPOLITAN
              </span>
            </div>
            <div className="flex items-center gap-4">
              {["CAMERAS", "ZONES", "FLEETS"].map((item, i) => (
                <div key={item} className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: ["#00ff88", "#00d4ff", "#7b2fff"][i] }} />
                  <span className="text-[8px] tracking-widest" style={{ color: "rgba(200,216,240,0.4)", fontFamily: "monospace" }}>{item} ONLINE</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-12 gap-px" style={{ background: "rgba(0,212,255,0.06)" }}>
            {/* Left metrics */}
            <div className="col-span-12 lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "rgba(0,212,255,0.06)" }}>
              <MetricCard label="Occupancy" value={87} unit="%" color="#00d4ff" min={60} max={100} trend={true} />
              <MetricCard label="Revenue Today" value={24300} unit="USD" color="#ffd700" min={18000} max={30000} format={(v) => `$${Math.round(v / 100) * 100 >= 1000 ? (v / 1000).toFixed(1) + "k" : Math.round(v)}`} trend={true} />
              <MetricCard label="Active Violations" value={23} unit="" color="#ff4444" min={8} max={50} trend={false} />
              <MetricCard label="Avg Congestion" value={42} unit="%" color="#ff6b35" min={20} max={80} trend={false} />
              <MetricCard label="Active Deliveries" value={847} unit="" color="#0066ff" min={600} max={1200} trend={true} />
              <MetricCard label="Robotaxi Rides" value={312} unit="/hr" color="#7b2fff" min={200} max={500} trend={true} />
              <MetricCard label="Drone Missions" value={89} unit="" color="#ff6b35" min={40} max={140} trend={true} />
              <MetricCard label="CO₂ Reduced" value={4.8} unit="t" color="#00ff88" min={3} max={8} format={(v) => v.toFixed(1)} trend={true} />
            </div>

            {/* Right panel */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-px" style={{ background: "rgba(0,212,255,0.06)" }}>
              {/* Radar */}
              <div className="p-5 flex flex-col gap-4" style={{ background: "rgba(2,8,18,0.95)" }}>
                <div className="text-[8px] font-bold tracking-widest uppercase" style={{ color: "rgba(200,216,240,0.4)", fontFamily: "monospace" }}>
                  VEHICLE TRACKING · ZONE OVERVIEW
                </div>
                <div className="flex justify-center" style={{ height: 180 }}>
                  <RadarDisplay />
                </div>
              </div>

              {/* Alert feed */}
              <div className="p-5 flex-1" style={{ background: "rgba(2,8,18,0.95)" }}>
                <div className="text-[8px] font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(200,216,240,0.4)", fontFamily: "monospace" }}>
                  LIVE EVENT STREAM
                </div>
                <AlertFeed />
              </div>
            </div>
          </div>

          {/* Bottom status bar */}
          <div
            className="flex items-center justify-between px-6 py-2"
            style={{ borderTop: "1px solid rgba(0,212,255,0.08)", background: "rgba(0,0,8,0.8)" }}
          >
            <div className="flex items-center gap-6">
              {[
                { label: "CAMERAS", value: "1,204", color: "#00ff88" },
                { label: "ZONES", value: "847", color: "#00d4ff" },
                { label: "VEHICLES", value: "3,892", color: "#7b2fff" },
                { label: "EVENTS/MIN", value: "2,847", color: "#ff6b35" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-1.5">
                  <span className="text-[8px] tracking-widest" style={{ color: "rgba(200,216,240,0.25)", fontFamily: "monospace" }}>{stat.label}</span>
                  <span className="text-[9px] font-bold" style={{ color: stat.color, fontFamily: "monospace" }}>{stat.value}</span>
                </div>
              ))}
            </div>
            <span className="text-[8px] tracking-widest" style={{ color: "rgba(200,216,240,0.2)", fontFamily: "monospace" }}>
              LATENCY: 12ms · UPTIME: 99.97%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
