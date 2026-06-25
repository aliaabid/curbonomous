"use client";

import { useRef, useMemo, useState, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const LAYERS = [
  { id: "traffic", label: "Traffic Flow", color: "#00d4ff" },
  { id: "loading", label: "Loading Zones", color: "#00ff88" },
  { id: "robotaxi", label: "Robotaxi Zones", color: "#7b2fff" },
  { id: "transit", label: "Transit / Bus", color: "#ff6b35" },
  { id: "delivery", label: "Delivery Robots", color: "#0066ff" },
  { id: "drone", label: "Drone Corridors", color: "#ff6b35" },
  { id: "congestion", label: "Congestion", color: "#ff3344" },
  { id: "revenue", label: "Revenue Zones", color: "#ffd700" },
  { id: "emissions", label: "Emissions", color: "#88ff00" },
  { id: "safety", label: "Safety Events", color: "#ff4444" },
];

const ZONE_DEFS = {
  traffic: [
    { x: 0, z: 0, w: 38, d: 1.0, color: "#00d4ff", h: 0.04 },
    { x: 0, z: -4, w: 38, d: 1.0, color: "#00d4ff", h: 0.04 },
    { x: -4, z: 0, w: 1.0, d: 38, color: "#00d4ff", h: 0.04 },
    { x: 4, z: 0, w: 1.0, d: 38, color: "#00d4ff", h: 0.04 },
  ],
  loading: [
    { x: -5, z: -5, w: 2, d: 4, color: "#00ff88", h: 0.06 },
    { x: 5, z: 3, w: 3, d: 2, color: "#00ff88", h: 0.06 },
    { x: -2, z: 7, w: 2.5, d: 2, color: "#00ff88", h: 0.06 },
    { x: 6, z: -6, w: 2, d: 3, color: "#00ff88", h: 0.06 },
  ],
  robotaxi: [
    { x: -8, z: -8, w: 4, d: 2, color: "#7b2fff", h: 0.08 },
    { x: 8, z: 4, w: 3, d: 2, color: "#7b2fff", h: 0.08 },
    { x: 0, z: -9, w: 4, d: 2, color: "#7b2fff", h: 0.08 },
  ],
  transit: [
    { x: 0, z: 0, w: 40, d: 1.4, color: "#ff6b35", h: 0.05 },
    { x: -8, z: 0, w: 1.4, d: 40, color: "#ff6b35", h: 0.05 },
  ],
  delivery: [
    { x: -3, z: 2, w: 1, d: 1, color: "#0066ff", h: 0.1 },
    { x: 4, z: -3, w: 1, d: 1, color: "#0066ff", h: 0.1 },
    { x: -6, z: -4, w: 1, d: 1, color: "#0066ff", h: 0.1 },
    { x: 7, z: 6, w: 1, d: 1, color: "#0066ff", h: 0.1 },
  ],
  drone: [
    { x: 0, z: 0, w: 2, d: 40, color: "#ff6b35", h: 6, transparent: true, opacity: 0.12 },
    { x: 0, z: 0, w: 40, d: 2, color: "#ff6b35", h: 6, transparent: true, opacity: 0.12 },
  ],
  congestion: [
    { x: -2, z: 2, w: 6, d: 6, color: "#ff3344", h: 0.06 },
    { x: 6, z: -2, w: 4, d: 4, color: "#ff8800", h: 0.06 },
  ],
  revenue: [
    { x: -5, z: -5, w: 3, d: 3, color: "#ffd700", h: 0.06 },
    { x: 5, z: 5, w: 3, d: 3, color: "#ffd700", h: 0.06 },
    { x: -7, z: 4, w: 2, d: 4, color: "#ffd700", h: 0.06 },
  ],
  emissions: [
    { x: -1, z: 1, w: 8, d: 8, color: "#88ff00", h: 0.05, transparent: true, opacity: 0.3 },
    { x: 6, z: -4, w: 5, d: 5, color: "#ff4400", h: 0.05, transparent: true, opacity: 0.3 },
  ],
  safety: [
    { x: 2, z: 3, w: 1.5, d: 1.5, color: "#ff4444", h: 0.12 },
    { x: -4, z: -6, w: 1.5, d: 1.5, color: "#ff4444", h: 0.12 },
  ],
};

type ZoneDef = { x: number; z: number; w: number; d: number; color: string; h: number; transparent?: boolean; opacity?: number };

function LayerZones({ activeLayer }: { activeLayer: string }) {
  const zones: ZoneDef[] = (ZONE_DEFS as Record<string, ZoneDef[]>)[activeLayer] || [];
  return (
    <>
      {zones.map((z, i) => (
        <mesh key={i} position={[z.x, z.h / 2, z.z]}>
          <boxGeometry args={[z.w, z.h, z.d]} />
          <meshStandardMaterial
            color={z.color}
            emissive={z.color}
            emissiveIntensity={1.5}
            transparent={z.transparent ?? true}
            opacity={z.opacity ?? 0.6}
          />
        </mesh>
      ))}
    </>
  );
}

function TwinBuilding({ x, z, height, active }: { x: number; z: number; height: number; active: boolean }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (ref.current && active) {
      (ref.current.material as THREE.MeshStandardMaterial).emissiveIntensity =
        0.3 + Math.sin(state.clock.elapsedTime + x * 0.5 + z * 0.5) * 0.15;
    }
  });
  return (
    <mesh ref={ref} position={[x, height / 2, z]} castShadow>
      <boxGeometry args={[0.75, height, 0.75]} />
      <meshStandardMaterial
        color="#050d18"
        emissive="#00d4ff"
        emissiveIntensity={active ? 0.3 : 0.05}
        roughness={0.15}
        metalness={0.9}
      />
    </mesh>
  );
}

function FlowParticles({ activeLayer }: { activeLayer: string }) {
  const count = 80;
  const ref = useRef<THREE.Points>(null!);
  const color = (LAYERS.find((l) => l.id === activeLayer)?.color) || "#00d4ff";

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 36;
      arr[i * 3 + 1] = Math.random() * 3;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 36;
    }
    return arr;
  }, []);

  useFrame(() => {
    if (!ref.current) return;
    const pos = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      pos[i * 3] += 0.05;
      if (pos[i * 3] > 18) pos[i * 3] = -18;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" />
      </bufferGeometry>
      <pointsMaterial color={color} size={0.2} transparent opacity={0.8} sizeAttenuation />
    </points>
  );
}

function TwinScene({ activeLayer }: { activeLayer: string }) {
  const buildings = useMemo(() => {
    const b = [];
    for (let bx = -8; bx <= 8; bx += 2.5) {
      for (let bz = -8; bz <= 8; bz += 2.5) {
        const inRoad = Math.abs(bx) < 0.8 || Math.abs(bz) < 0.8;
        if (!inRoad) {
          b.push({ x: bx, z: bz, height: Math.random() * 3 + 0.6 });
        }
      }
    }
    return b;
  }, []);

  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 20, 0]} intensity={0.5} color="#00d4ff" />
      <fog attach="fog" args={["#000008", 25, 55]} />
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[60, 60]} />
        <meshStandardMaterial color="#010810" roughness={0.9} />
      </mesh>
      {/* Grid lines */}
      <gridHelper args={[40, 20, "#0a1628", "#0a1628"]} position={[0, 0.02, 0]} />
      {/* Roads */}
      {[-8, -4, 0, 4, 8].map((pos) => (
        <group key={pos}>
          <mesh position={[0, 0.03, pos]}>
            <boxGeometry args={[36, 0.02, 1.0]} />
            <meshStandardMaterial color="#050d18" emissive="#001830" emissiveIntensity={0.4} />
          </mesh>
          <mesh position={[pos, 0.03, 0]}>
            <boxGeometry args={[1.0, 0.02, 36]} />
            <meshStandardMaterial color="#050d18" emissive="#001830" emissiveIntensity={0.4} />
          </mesh>
        </group>
      ))}
      {buildings.map((b, i) => (
        <TwinBuilding key={i} {...b} active={activeLayer !== ""} />
      ))}
      <LayerZones activeLayer={activeLayer} />
      <FlowParticles activeLayer={activeLayer} />
      <OrbitControls
        enablePan={false}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.2}
        minDistance={8}
        maxDistance={35}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </>
  );
}

export default function DigitalTwin() {
  const [activeLayer, setActiveLayer] = useState("traffic");

  return (
    <section className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 50% 50%, rgba(0,212,255,0.04) 0%, transparent 70%)",
      }} />

      <div className="max-w-4xl mx-auto px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-5">
            ◈ CITY INTELLIGENCE PLATFORM
          </div>
          <h2
            className="font-black text-white mb-6 text-center"
            style={{ fontSize: "clamp(1.8rem, 3vw, 3.2rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            The City Digital Twin
          </h2>
          <p className="text-[#c8d8f0]/60 max-w-2xl mx-auto text-center" style={{ fontSize: "1.1rem", lineHeight: 1.85 }}>
            A living, breathing replica of your city — every road, curb, vehicle, and zone tracked
            in real time. Switch layers to reveal invisible intelligence.
          </p>
        </div>

        {/* Layer Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {LAYERS.map((layer) => (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(layer.id)}
              className="px-4 py-2 text-[10px] font-bold tracking-widest uppercase rounded-sm transition-all duration-300"
              style={{
                border: `1px solid ${activeLayer === layer.id ? layer.color : "rgba(0,212,255,0.15)"}`,
                background: activeLayer === layer.id ? `${layer.color}22` : "rgba(5,15,30,0.6)",
                color: activeLayer === layer.id ? layer.color : "rgba(200,216,240,0.4)",
                boxShadow: activeLayer === layer.id ? `0 0 16px ${layer.color}44` : "none",
              }}
            >
              {layer.label}
            </button>
          ))}
        </div>

        {/* 3D Scene */}
        <div
          className="relative rounded-sm overflow-hidden"
          style={{
            height: "550px",
            border: "1px solid rgba(0,212,255,0.15)",
            background: "#000008",
          }}
        >
          {/* Corner decorations */}
          {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos, i) => (
            <div key={i} className={`absolute ${pos} w-6 h-6 pointer-events-none z-10`} style={{
              borderTop: i < 2 ? "2px solid #00d4ff" : "none",
              borderBottom: i >= 2 ? "2px solid #00d4ff" : "none",
              borderLeft: i % 2 === 0 ? "2px solid #00d4ff" : "none",
              borderRight: i % 2 === 1 ? "2px solid #00d4ff" : "none",
            }} />
          ))}

          <Canvas
            camera={{ position: [18, 14, 18], fov: 40 }}
            gl={{ antialias: true, alpha: false }}
            dpr={[1, 1.5]}
          >
            <TwinScene activeLayer={activeLayer} />
          </Canvas>

          {/* Active layer label */}
          <div
            className="absolute bottom-4 left-4 px-3 py-1.5"
            style={{
              background: "rgba(0,0,8,0.85)",
              border: `1px solid ${LAYERS.find((l) => l.id === activeLayer)?.color || "#00d4ff"}44`,
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              className="text-[9px] font-bold tracking-widest uppercase"
              style={{
                color: LAYERS.find((l) => l.id === activeLayer)?.color || "#00d4ff",
                fontFamily: "monospace",
              }}
            >
              ▶ {LAYERS.find((l) => l.id === activeLayer)?.label?.toUpperCase()} LAYER ACTIVE
            </span>
          </div>

          {/* Interaction hint */}
          <div className="absolute top-4 right-4 text-[9px] tracking-widest uppercase"
            style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>
            DRAG TO ROTATE · SCROLL TO ZOOM
          </div>
        </div>
      </div>
    </section>
  );
}
