"use client";

import { useEffect, useRef, useState } from "react";

const NODES = [
  { id: "camera", label: "Smart Camera", sub: "Edge-mounted · 4K · 30fps", color: "#00d4ff", y: 0 },
  { id: "edge", label: "Edge Computing", sub: "On-device inference · <10ms", color: "#0066ff", y: 1 },
  { id: "cv", label: "Computer Vision", sub: "YOLOv8 + Curbonomous AI", color: "#7b2fff", y: 2 },
  { id: "ai", label: "AI Models", sub: "Classification · Prediction · Anomaly", color: "#7b2fff", y: 3 },
  { id: "intelligence", label: "Transportation Intelligence", sub: "Occupancy · Dwell · Violation · Flow", color: "#00d4ff", y: 4 },
  { id: "twin", label: "Digital Twin", sub: "Real-time 3D city model sync", color: "#00ff88", y: 5 },
  { id: "decisions", label: "Operational Decisions", sub: "Automated enforcement · Alerts · Pricing", color: "#ff6b35", y: 6 },
  { id: "policy", label: "Policy Outcomes", sub: "Dashboards · Reports · API · Integrations", color: "#ffd700", y: 7 },
];

function NeuralCanvas({ activeNode }: { activeNode: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  const particlesRef = useRef<{ x: number; y: number; tx: number; ty: number; progress: number; layer: number; speed: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const NODE_COUNT = NODES.length;
    const nodeH = H / NODE_COUNT;

    // Initialize particles
    if (particlesRef.current.length === 0) {
      for (let i = 0; i < 40; i++) {
        const layer = Math.floor(Math.random() * (NODE_COUNT - 1));
        particlesRef.current.push({
          x: W / 2,
          y: (layer + 0.5) * nodeH,
          tx: W / 2,
          ty: (layer + 1.5) * nodeH,
          progress: Math.random(),
          layer,
          speed: 0.003 + Math.random() * 0.005,
        });
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Background
      ctx.fillStyle = "#000810";
      ctx.fillRect(0, 0, W, H);

      // Draw connections (vertical spine)
      for (let i = 0; i < NODE_COUNT - 1; i++) {
        const y1 = (i + 0.5) * nodeH;
        const y2 = (i + 1.5) * nodeH;
        const isActive = i < activeNode;

        const grad = ctx.createLinearGradient(W / 2, y1, W / 2, y2);
        const c1 = NODES[i].color;
        const c2 = NODES[i + 1].color;
        grad.addColorStop(0, isActive ? c1 + "88" : c1 + "22");
        grad.addColorStop(1, isActive ? c2 + "88" : c2 + "22");

        ctx.beginPath();
        ctx.moveTo(W / 2, y1 + 20);
        ctx.lineTo(W / 2, y2 - 20);
        ctx.strokeStyle = grad;
        ctx.lineWidth = isActive ? 2 : 1;
        ctx.stroke();

        // Side branches
        const branchCount = 3;
        for (let b = 0; b < branchCount; b++) {
          const bx = W * (0.2 + Math.random() * 0.6);
          const mid = (y1 + y2) / 2;
          ctx.beginPath();
          ctx.moveTo(W / 2, mid);
          ctx.quadraticCurveTo(W / 2 + (bx - W / 2) * 0.5, mid - 15, bx, mid + (Math.random() - 0.5) * 20);
          ctx.strokeStyle = isActive ? NODES[i].color + "33" : NODES[i].color + "11";
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      // Draw particles
      particlesRef.current.forEach((p) => {
        if (p.layer >= activeNode) return;
        p.progress += p.speed;
        if (p.progress > 1) {
          p.progress = 0;
          p.layer = Math.floor(Math.random() * Math.min(activeNode, NODE_COUNT - 1));
          p.y = (p.layer + 0.5) * nodeH;
          p.ty = (p.layer + 1.5) * nodeH;
        }

        const py = p.y + (p.ty - p.y) * p.progress;
        const alpha = Math.sin(p.progress * Math.PI);
        const color = NODES[p.layer].color;

        ctx.beginPath();
        ctx.arc(W / 2 + (Math.random() - 0.5) * 4, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = color + Math.round(alpha * 200).toString(16).padStart(2, "0");
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(W / 2, py, 4, 0, Math.PI * 2);
        ctx.fillStyle = color + Math.round(alpha * 60).toString(16).padStart(2, "0");
        ctx.fill();
      });

      // Draw nodes
      NODES.forEach((node, i) => {
        const y = (i + 0.5) * nodeH;
        const isActive = i <= activeNode;
        const isPulse = i === activeNode;
        const color = node.color;

        // Node circle
        ctx.beginPath();
        ctx.arc(W / 2, y, isPulse ? 12 : 8, 0, Math.PI * 2);
        ctx.fillStyle = isActive ? color : color + "33";
        ctx.fill();

        if (isPulse) {
          const t = Date.now() / 600;
          const pulse = (Math.sin(t) + 1) * 0.5;
          ctx.beginPath();
          ctx.arc(W / 2, y, 12 + pulse * 8, 0, Math.PI * 2);
          ctx.strokeStyle = color + Math.round(pulse * 180).toString(16).padStart(2, "0");
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Inner dot
        ctx.beginPath();
        ctx.arc(W / 2, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = isActive ? "#000" : color + "44";
        ctx.fill();
      });

      frameRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(frameRef.current);
  }, [activeNode]);

  return (
    <canvas
      ref={canvasRef}
      width={280}
      height={520}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}

export default function TechArchitecture() {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveNode((n) => (n >= NODES.length - 1 ? 0 : n + 1));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-40 overflow-hidden" id="technology">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 50% 50%, rgba(123,47,255,0.05) 0%, transparent 70%)",
      }} />

      <div className="max-w-4xl mx-auto px-10">
        <div className="text-center mb-16">
          <div className="text-[10px] font-bold tracking-widest uppercase text-[#7b2fff] mb-5">
            ◈ SYSTEM ARCHITECTURE
          </div>
          <h2
            className="font-black text-white mb-6 text-center"
            style={{ fontSize: "clamp(1.8rem, 3vw, 3.2rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            Intelligence Pipeline
          </h2>
          <p className="text-[#c8d8f0]/60 max-w-xl mx-auto text-center" style={{ fontSize: "1.1rem", lineHeight: 1.85 }}>
            From raw pixels to policy decisions. A vertically integrated stack built for city-scale reliability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Neural viz */}
          <div
            className="relative overflow-hidden"
            style={{
              height: 520,
              border: "1px solid rgba(123,47,255,0.2)",
              background: "#000810",
            }}
          >
            <NeuralCanvas activeNode={activeNode} />
          </div>

          {/* Node list */}
          <div className="space-y-3">
            {NODES.map((node, i) => (
              <button
                key={node.id}
                onClick={() => setActiveNode(i)}
                className="w-full text-left p-5 transition-all duration-300 flex items-start gap-4"
                style={{
                  background: activeNode === i ? `${node.color}0d` : "transparent",
                  border: `1px solid ${activeNode === i ? node.color + "44" : "transparent"}`,
                }}
              >
                <div className="flex flex-col items-center flex-shrink-0" style={{ paddingTop: 4 }}>
                  <div
                    className="w-6 h-6 flex items-center justify-center font-mono font-black text-[9px] transition-all"
                    style={{
                      background: i <= activeNode ? node.color : "rgba(255,255,255,0.05)",
                      color: i <= activeNode ? "#000" : "rgba(200,216,240,0.2)",
                    }}
                  >
                    {i + 1}
                  </div>
                  {i < NODES.length - 1 && (
                    <div
                      className="w-px mt-1 transition-all"
                      style={{
                        height: 16,
                        background: i < activeNode ? node.color + "66" : "rgba(255,255,255,0.06)",
                      }}
                    />
                  )}
                </div>
                <div>
                  <div
                    className="font-bold text-sm transition-all mb-0.5"
                    style={{ color: i <= activeNode ? "#fff" : "rgba(200,216,240,0.3)" }}
                  >
                    {node.label}
                  </div>
                  <div
                    className="text-[9px] transition-all"
                    style={{
                      color: i === activeNode ? node.color : "rgba(200,216,240,0.25)",
                      fontFamily: "monospace",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {node.sub}
                  </div>
                </div>
                {i === activeNode && (
                  <div className="ml-auto flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: node.color, animation: "pulse-dot 1.5s ease-in-out infinite" }} />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Specs row */}
        <div
          className="mt-16 p-6 grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ background: "rgba(5,12,25,0.8)", border: "1px solid rgba(0,212,255,0.1)" }}
        >
          {[
            { label: "Edge Inference", value: "<10ms", color: "#00d4ff" },
            { label: "Cloud Sync", value: "12ms avg", color: "#7b2fff" },
            { label: "Accuracy", value: "99.2%", color: "#00ff88" },
            { label: "Uptime SLA", value: "99.97%", color: "#ffd700" },
          ].map((spec) => (
            <div key={spec.label} className="text-center">
              <div className="font-black text-2xl mb-1" style={{ color: spec.color, fontFamily: "monospace" }}>
                {spec.value}
              </div>
              <div className="text-[9px] font-bold tracking-widest uppercase" style={{ color: "rgba(200,216,240,0.35)", fontFamily: "monospace" }}>
                {spec.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
