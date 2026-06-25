"use client";

import { useEffect, useRef, useState } from "react";

const CV_STEPS = [
  { id: 1, label: "Raw Camera Feed", desc: "720p @ 30fps, H.264 stream from smart pole", color: "#c8d8f0" },
  { id: 2, label: "Computer Vision", desc: "Edge-deployed YOLOv8 + custom transport model", color: "#00d4ff" },
  { id: 3, label: "Object Detection", desc: "Bounding boxes assigned to 47 vehicle classes", color: "#00d4ff" },
  { id: 4, label: "Classification", desc: "Vehicle type, size, color, and behavior profiling", color: "#0066ff" },
  { id: 5, label: "License Plate OCR", desc: "Real-time LPR with 99.2% accuracy", color: "#7b2fff" },
  { id: 6, label: "Dwell Time Tracking", desc: "Per-vehicle timestamp from entry to exit", color: "#ff6b35" },
  { id: 7, label: "Occupancy Analytics", desc: "Zone-level real-time capacity monitoring", color: "#00ff88" },
  { id: 8, label: "Violation Detection", desc: "Overstay, double-park, wrong-zone flagged", color: "#ff4444" },
  { id: 9, label: "Digital Twin Update", desc: "Sub-second sync to city 3D model", color: "#00d4ff" },
  { id: 10, label: "Policy Dashboard", desc: "Automated enforcement, revenue, analytics", color: "#ffd700" },
];

type Detection = { x: number; y: number; w: number; h: number; label: string; color: string; conf: number };

const DETECTIONS: Detection[] = [
  { x: 15, y: 35, w: 18, h: 22, label: "DELIVERY VAN", color: "#00ff88", conf: 0.97 },
  { x: 45, y: 40, w: 14, h: 18, label: "ROBOTAXI", color: "#7b2fff", conf: 0.99 },
  { x: 68, y: 42, w: 16, h: 20, label: "PASSENGER", color: "#00d4ff", conf: 0.95 },
  { x: 30, y: 60, w: 8, h: 12, label: "ROBOT", color: "#0066ff", conf: 0.88 },
];

function CameraFeed({ step }: { step: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;

    // Background — simulated camera feed
    ctx.fillStyle = "#050d18";
    ctx.fillRect(0, 0, w, h);

    // Road
    ctx.fillStyle = "#070f1e";
    ctx.fillRect(0, h * 0.5, w, h * 0.5);
    // Lane markings
    ctx.setLineDash([20, 15]);
    ctx.strokeStyle = "rgba(0,212,255,0.2)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.5);
    ctx.lineTo(w * 0.5, h);
    ctx.stroke();
    ctx.setLineDash([]);

    // Building silhouettes
    [[0, 0, w * 0.25, h * 0.5], [w * 0.15, 0.05 * h, w * 0.12, h * 0.45], [w * 0.7, 0, w * 0.15, h * 0.5], [w * 0.85, 0.08 * h, w * 0.15, h * 0.42]].forEach(([x, y, bw, bh]) => {
      ctx.fillStyle = "#080f1c";
      ctx.fillRect(x, y, bw, bh);
      // Windows
      for (let wy = y + 8; wy < y + bh - 10; wy += 12) {
        for (let wx = x + 6; wx < x + bw - 6; wx += 10) {
          ctx.fillStyle = Math.random() > 0.4 ? "rgba(0,212,255,0.3)" : "rgba(0,20,40,0.8)";
          ctx.fillRect(wx, wy, 6, 6);
        }
      }
    });

    // Step 1: raw feed noise
    if (step >= 1) {
      for (let i = 0; i < 600; i++) {
        const nx = Math.random() * w;
        const ny = Math.random() * h;
        ctx.fillStyle = `rgba(0,212,255,${Math.random() * 0.03})`;
        ctx.fillRect(nx, ny, 1, 1);
      }
    }

    // Step 2+: scan line
    if (step >= 2) {
      const grad = ctx.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0, "transparent");
      grad.addColorStop(0.3, "rgba(0,212,255,0.08)");
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    }

    // Step 3+: bounding boxes
    if (step >= 3) {
      DETECTIONS.forEach((det, i) => {
        if (i > step - 3) return;
        const bx = det.x / 100 * w;
        const by = det.y / 100 * h;
        const bw2 = det.w / 100 * w;
        const bh2 = det.h / 100 * h;

        // Bounding box
        ctx.strokeStyle = det.color;
        ctx.lineWidth = 1.5;
        ctx.strokeRect(bx, by, bw2, bh2);

        // Corner highlights
        const cs = 8;
        [[bx, by], [bx + bw2, by], [bx, by + bh2], [bx + bw2, by + bh2]].forEach(([cx, cy]) => {
          ctx.beginPath();
          ctx.moveTo(cx - cs * (cx > bx ? -1 : 1), cy);
          ctx.lineTo(cx, cy);
          ctx.lineTo(cx, cy - cs * (cy > by ? -1 : 1));
          ctx.strokeStyle = det.color;
          ctx.lineWidth = 2;
          ctx.stroke();
        });

        if (step >= 4) {
          // Label
          ctx.fillStyle = `${det.color}cc`;
          ctx.fillRect(bx, by - 16, det.label.length * 6.5 + 8, 16);
          ctx.fillStyle = "#000";
          ctx.font = "bold 9px monospace";
          ctx.fillText(det.label, bx + 4, by - 4);
        }
      });
    }

    // Step 5: LPR
    if (step >= 5) {
      ctx.fillStyle = "rgba(123,47,255,0.12)";
      ctx.fillRect(DETECTIONS[0].x / 100 * w, (DETECTIONS[0].y + DETECTIONS[0].h) / 100 * h, DETECTIONS[0].w / 100 * w, 16);
      ctx.fillStyle = "#7b2fff";
      ctx.font = "bold 8px monospace";
      ctx.fillText("LPR: ■■■ ■■■■", DETECTIONS[0].x / 100 * w + 2, (DETECTIONS[0].y + DETECTIONS[0].h) / 100 * h + 11);
    }

    // Step 6: dwell timer
    if (step >= 6) {
      ctx.fillStyle = "rgba(255,107,53,0.12)";
      ctx.fillRect(w - 90, 8, 82, 22);
      ctx.fillStyle = "#ff6b35";
      ctx.font = "bold 9px monospace";
      ctx.fillText("DWELL: 04:32", w - 86, 23);
    }

    // Step 7: occupancy bar
    if (step >= 7) {
      ctx.fillStyle = "rgba(0,255,136,0.08)";
      ctx.fillRect(8, h - 32, 120, 24);
      ctx.fillStyle = "#00ff88";
      ctx.font = "bold 9px monospace";
      ctx.fillText("OCCUPANCY: 87%", 12, h - 16);
    }

    // Step 8: violation
    if (step >= 8) {
      ctx.strokeStyle = "#ff4444";
      ctx.lineWidth = 2;
      const det = DETECTIONS[0];
      ctx.strokeRect(det.x / 100 * w - 3, det.y / 100 * h - 3, det.w / 100 * w + 6, det.h / 100 * h + 6);
      ctx.fillStyle = "rgba(255,68,68,0.15)";
      ctx.fillRect(det.x / 100 * w - 3, det.y / 100 * h - 3, det.w / 100 * w + 6, det.h / 100 * h + 6);
      ctx.fillStyle = "#ff4444";
      ctx.font = "bold 9px monospace";
      ctx.fillText("⚠ VIOLATION", det.x / 100 * w, det.y / 100 * h - 8);
    }

    // Step 9+: digital twin sync indicator
    if (step >= 9) {
      ctx.fillStyle = "rgba(0,212,255,0.08)";
      ctx.fillRect(8, 8, 140, 20);
      ctx.fillStyle = "#00d4ff";
      ctx.font = "bold 9px monospace";
      ctx.fillText("↑ TWIN SYNC: 12ms", 12, 22);
    }

    // Step 10: full overlay
    if (step >= 10) {
      const grad2 = ctx.createLinearGradient(0, 0, 0, h);
      grad2.addColorStop(0, "rgba(255,215,0,0.04)");
      grad2.addColorStop(1, "transparent");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "#ffd700";
      ctx.font = "bold 9px monospace";
      ctx.fillText("POLICY: ENFORCED", w / 2 - 60, 22);
    }
  }, [step]);

  return (
    <canvas
      ref={canvasRef}
      width={540}
      height={320}
      className="w-full h-full"
      style={{ display: "block" }}
    />
  );
}

export default function CameraIntelligence() {
  const [step, setStep] = useState(1);
  const [auto, setAuto] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!auto) return;
    timerRef.current = setInterval(() => {
      setStep((s) => (s >= 10 ? 1 : s + 1));
    }, 1400);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [auto]);

  return (
    <section className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 70% 40%, rgba(0,212,255,0.05) 0%, transparent 60%)",
      }} />

      <div className="max-w-4xl mx-auto px-10">
        <div className="text-center mb-16">
          <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-5">
            ◈ COMPUTER VISION PIPELINE
          </div>
          <h2
            className="font-black text-white mb-6 text-center"
            style={{ fontSize: "clamp(1.8rem, 3vw, 3.2rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            How Curbonomous<br />Sees the City
          </h2>
          <p className="text-[#c8d8f0]/60 max-w-2xl mx-auto text-center" style={{ fontSize: "1.1rem", lineHeight: 1.85 }}>
            From raw pixels to policy decisions in under 100 milliseconds.
            A 10-stage pipeline that turns every camera into a real-time intelligence node.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Camera feed viz */}
          <div>
            <div
              className="relative overflow-hidden"
              style={{
                border: "1px solid rgba(0,212,255,0.2)",
                background: "#000008",
                aspectRatio: "16/9",
              }}
            >
              {/* Corner accents */}
              {[["top-0 left-0", "border-t-2 border-l-2"], ["top-0 right-0", "border-t-2 border-r-2"], ["bottom-0 left-0", "border-b-2 border-l-2"], ["bottom-0 right-0", "border-b-2 border-r-2"]].map(([pos, border]) => (
                <div key={pos} className={`absolute ${pos} w-5 h-5 border-[#00d4ff] ${border} pointer-events-none z-10`} />
              ))}

              {/* Camera feed canvas */}
              <CameraFeed step={step} />

              {/* Camera label */}
              <div className="absolute top-3 left-3 flex items-center gap-2 pointer-events-none">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff4444]" style={{ animation: "pulse-dot 1s ease-in-out infinite" }} />
                <span className="text-[9px] font-bold tracking-widest uppercase" style={{ color: "rgba(200,216,240,0.5)", fontFamily: "monospace" }}>
                  REC · CAM-047 · ZONE B-12
                </span>
              </div>

              {/* Confidence score */}
              {step >= 4 && (
                <div className="absolute bottom-3 right-3 pointer-events-none">
                  <div className="text-[8px] font-bold tracking-widest text-right" style={{ color: "#00d4ff", fontFamily: "monospace" }}>
                    CONF: 97.3%
                  </div>
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="mt-4 flex items-center gap-3">
              <button
                onClick={() => { setAuto(false); setStep((s) => Math.max(1, s - 1)); }}
                className="px-4 py-2 text-[9px] font-bold tracking-widest uppercase transition-all"
                style={{ border: "1px solid rgba(0,212,255,0.2)", color: "#00d4ff", background: "rgba(0,212,255,0.06)" }}
              >
                ← PREV
              </button>
              <button
                onClick={() => setAuto((a) => !a)}
                className="px-4 py-2 text-[9px] font-bold tracking-widest uppercase transition-all flex-1"
                style={{
                  border: `1px solid ${auto ? "#00ff88" : "rgba(0,212,255,0.2)"}`,
                  color: auto ? "#00ff88" : "#00d4ff",
                  background: auto ? "rgba(0,255,136,0.06)" : "rgba(0,212,255,0.06)",
                }}
              >
                {auto ? "⏸ PAUSE" : "▶ AUTO"}
              </button>
              <button
                onClick={() => { setAuto(false); setStep((s) => Math.min(10, s + 1)); }}
                className="px-4 py-2 text-[9px] font-bold tracking-widest uppercase transition-all"
                style={{ border: "1px solid rgba(0,212,255,0.2)", color: "#00d4ff", background: "rgba(0,212,255,0.06)" }}
              >
                NEXT →
              </button>
            </div>
          </div>

          {/* Step list */}
          <div className="space-y-1.5">
            {CV_STEPS.map((s) => (
              <button
                key={s.id}
                onClick={() => { setAuto(false); setStep(s.id); }}
                className="w-full text-left p-4 transition-all duration-200 flex items-start gap-4"
                style={{
                  background: step === s.id ? `${s.color}0e` : step > s.id ? "rgba(0,212,255,0.03)" : "transparent",
                  border: `1px solid ${step === s.id ? s.color + "44" : step > s.id ? "rgba(0,212,255,0.08)" : "transparent"}`,
                }}
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center font-mono font-black text-[10px] transition-all"
                  style={{
                    width: 24,
                    height: 24,
                    background: step === s.id ? s.color : step > s.id ? "rgba(0,212,255,0.15)" : "rgba(0,0,0,0.4)",
                    color: step === s.id ? "#000" : step > s.id ? s.color : "rgba(200,216,240,0.3)",
                    border: `1px solid ${step === s.id ? s.color : "transparent"}`,
                  }}
                >
                  {s.id}
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="text-[10px] font-bold tracking-wider uppercase transition-all"
                    style={{
                      color: step === s.id ? s.color : step > s.id ? "rgba(200,216,240,0.6)" : "rgba(200,216,240,0.25)",
                    }}
                  >
                    {s.label}
                  </div>
                  {step === s.id && (
                    <div className="text-[9px] mt-0.5" style={{ color: "rgba(200,216,240,0.45)", fontFamily: "monospace" }}>
                      {s.desc}
                    </div>
                  )}
                </div>
                {step > s.id && (
                  <span className="text-[9px] flex-shrink-0" style={{ color: "#00ff88" }}>✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
