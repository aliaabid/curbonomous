"use client";

import dynamic from "next/dynamic";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const DISTRICTS = [
  {
    id: "downtown",
    label: "Downtown",
    color: "#00d4ff",
    position: [0, 0, 0] as [number, number, number],
    desc: "Smart curb management, loading zones, delivery robots, congestion analytics, dynamic pricing.",
    stats: [
      { label: "Loading Zones", value: "247" },
      { label: "Cameras", value: "482" },
      { label: "Daily Revenue", value: "$124k" },
      { label: "Violations/Day", value: "312 flagged" },
    ],
    useCases: ["Commercial delivery zone optimization", "Double-parking enforcement", "Dynamic curb pricing", "Congestion heatmaps"],
  },
  {
    id: "airport",
    label: "Airport",
    color: "#7b2fff",
    position: [12, 0, -8] as [number, number, number],
    desc: "Terminal curbside intelligence, rideshare compliance, AV pickup, drone logistics, shuttle ops.",
    stats: [
      { label: "Terminal Zones", value: "84" },
      { label: "Rideshare Rides", value: "6,200/day" },
      { label: "AV Pickups", value: "847/day" },
      { label: "Dwell Compliance", value: "96.4%" },
    ],
    useCases: ["Curbside queue management", "Rideshare compliance", "AV pickup zone automation", "Drone logistics corridors"],
  },
  {
    id: "university",
    label: "University",
    color: "#00ff88",
    position: [-12, 0, -6] as [number, number, number],
    desc: "Autonomous shuttle routing, bike lane monitoring, pedestrian safety, campus mobility.",
    stats: [
      { label: "Shuttle Routes", value: "12" },
      { label: "Bike Lane Miles", value: "8.4" },
      { label: "Daily Riders", value: "4,200" },
      { label: "Safety Events", value: "Reduced 45%" },
    ],
    useCases: ["Autonomous campus shuttle management", "Bike lane violation enforcement", "Pedestrian crossing analytics", "First/last mile optimization"],
  },
  {
    id: "medical",
    label: "Medical District",
    color: "#ff4444",
    position: [10, 0, 6] as [number, number, number],
    desc: "Priority curb access, medical drone deliveries, emergency vehicle corridors, patient transport.",
    stats: [
      { label: "Priority Zones", value: "38" },
      { label: "Drone Deliveries", value: "180/day" },
      { label: "Emergency Access", value: "99.8% clear" },
      { label: "Patient Transport", value: "Optimized" },
    ],
    useCases: ["Medical drone delivery infrastructure", "Emergency vehicle priority access", "Patient drop-off zone management", "Supply chain logistics"],
  },
  {
    id: "logistics",
    label: "Logistics Hub",
    color: "#ff6b35",
    position: [-10, 0, 8] as [number, number, number],
    desc: "Freight corridor management, autonomous truck operations, cargo transfer, yard analytics.",
    stats: [
      { label: "Active Trucks", value: "1,247" },
      { label: "Freight Volume", value: "84t/day" },
      { label: "Avg Dwell", value: "18 min" },
      { label: "Utilization", value: "71%" },
    ],
    useCases: ["Autonomous freight corridor management", "Truck staging and dispatch", "Cargo transfer optimization", "Yard utilization analytics"],
  },
  {
    id: "residential",
    label: "Residential",
    color: "#ffd700",
    position: [0, 0, 12] as [number, number, number],
    desc: "Last-mile delivery optimization, sidewalk robot management, neighborhood mobility.",
    stats: [
      { label: "Delivery Robots", value: "89 active" },
      { label: "Last-Mile Stops", value: "2,847/day" },
      { label: "Parking Turnover", value: "+32%" },
      { label: "Resident Satisfaction", value: "↑ 28%" },
    ],
    useCases: ["Sidewalk robot routing and staging", "Residential delivery zone management", "Parking demand analytics", "Mobility equity monitoring"],
  },
];

function DistrictBlock({ district, active, onClick }: { district: typeof DISTRICTS[0]; active: boolean; onClick: () => void }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [x, , z] = district.position;

  useFrame((state) => {
    if (meshRef.current) {
      (meshRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity =
        active ? 0.8 + Math.sin(state.clock.elapsedTime * 2) * 0.2 : 0.15;
    }
  });

  const buildings: { bx: number; bz: number; h: number }[] = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      buildings.push({ bx: x + (i - 1) * 1.5, bz: z + (j - 1) * 1.5, h: 0.5 + Math.random() * 2 });
    }
  }

  return (
    <group>
      {buildings.map((b, bi) => (
        <mesh
          key={bi}
          ref={bi === 4 ? meshRef : undefined}
          position={[b.bx, b.h / 2, b.bz]}
          onClick={onClick}
        >
          <boxGeometry args={[1.1, b.h, 1.1]} />
          <meshStandardMaterial
            color="#050d18"
            emissive={district.color}
            emissiveIntensity={bi === 4 && active ? 0.8 : active ? 0.3 : 0.1}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      ))}
      {/* Zone marker */}
      <mesh position={[x, 0.02, z]}>
        <circleGeometry args={[2.5, 32]} />
        <meshStandardMaterial
          color={district.color}
          emissive={district.color}
          emissiveIntensity={active ? 1.5 : 0.2}
          transparent
          opacity={active ? 0.25 : 0.08}
        />
      </mesh>
    </group>
  );
}

function CityScene({ activeDistrict, setActiveDistrict }: { activeDistrict: string; setActiveDistrict: (id: string) => void }) {
  return (
    <>
      <ambientLight intensity={0.08} />
      <pointLight position={[0, 20, 0]} intensity={0.4} color="#00d4ff" />
      <fog attach="fog" args={["#000008", 20, 60]} />

      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[80, 80]} />
        <meshStandardMaterial color="#010810" roughness={0.9} />
      </mesh>

      {/* Grid */}
      <gridHelper args={[60, 30, "#0a1628", "#0a1628"]} position={[0, 0.02, 0]} />

      {/* Road network */}
      {[-8, 0, 8].map((pos) => (
        <group key={pos}>
          <mesh position={[0, 0.04, pos]}>
            <boxGeometry args={[60, 0.02, 1.2]} />
            <meshStandardMaterial color="#050d18" emissive="#001428" emissiveIntensity={0.5} />
          </mesh>
          <mesh position={[pos, 0.04, 0]}>
            <boxGeometry args={[1.2, 0.02, 60]} />
            <meshStandardMaterial color="#050d18" emissive="#001428" emissiveIntensity={0.5} />
          </mesh>
        </group>
      ))}

      {DISTRICTS.map((d) => (
        <DistrictBlock
          key={d.id}
          district={d}
          active={activeDistrict === d.id}
          onClick={() => setActiveDistrict(d.id)}
        />
      ))}

      <OrbitControls
        enablePan={true}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.5}
        minDistance={10}
        maxDistance={50}
        autoRotate={!activeDistrict}
        autoRotateSpeed={0.2}
      />
    </>
  );
}

export default function CityPage() {
  const [activeDistrict, setActiveDistrict] = useState<string>("");
  const district = DISTRICTS.find((d) => d.id === activeDistrict);

  return (
    <main className="relative min-h-screen" style={{ background: "#000008" }}>
      <Nav />
      <div className="pt-16">

        {/* Header */}
        <div
          className="py-20 text-center px-6"
          style={{
            background: "radial-gradient(ellipse at 50% 100%, rgba(0,212,255,0.08) 0%, transparent 60%)",
            borderBottom: "1px solid rgba(0,212,255,0.1)",
          }}
        >
          <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-4">
            ◈ CURBONOMOUS CITY OS
          </div>
          <h1
            className="font-black text-white mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1, letterSpacing: "-0.02em" }}
          >
            Explore Curbonomous City
          </h1>
          <p className="text-[#c8d8f0]/60 max-w-2xl mx-auto" style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
            A fictional metropolitan area running on the full Curbonomous platform.
            Click any district to see how transportation intelligence works at city scale.
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-6">

            {/* 3D City */}
            <div className="lg:col-span-2">
              <div
                className="relative overflow-hidden"
                style={{ height: 560, border: "1px solid rgba(0,212,255,0.15)", background: "#000008" }}
              >
                {/* Corners */}
                {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos, i) => (
                  <div key={i} className={`absolute ${pos} w-5 h-5 pointer-events-none z-10`} style={{
                    borderTop: i < 2 ? "2px solid #00d4ff" : "none",
                    borderBottom: i >= 2 ? "2px solid #00d4ff" : "none",
                    borderLeft: i % 2 === 0 ? "2px solid #00d4ff" : "none",
                    borderRight: i % 2 === 1 ? "2px solid #00d4ff" : "none",
                  }} />
                ))}
                <Canvas
                  camera={{ position: [20, 18, 20], fov: 40 }}
                  gl={{ antialias: true, alpha: false }}
                  dpr={[1, 1.5]}
                >
                  <CityScene activeDistrict={activeDistrict} setActiveDistrict={setActiveDistrict} />
                </Canvas>
                <div className="absolute bottom-4 left-4 text-[8px] tracking-widest uppercase" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>
                  CLICK DISTRICT · DRAG TO ROTATE · SCROLL TO ZOOM
                </div>
              </div>

              {/* District pills */}
              <div className="flex flex-wrap gap-2 mt-4">
                {DISTRICTS.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setActiveDistrict(activeDistrict === d.id ? "" : d.id)}
                    className="px-4 py-2 text-[9px] font-bold tracking-widest uppercase rounded-sm transition-all"
                    style={{
                      border: `1px solid ${activeDistrict === d.id ? d.color : "rgba(0,212,255,0.15)"}`,
                      background: activeDistrict === d.id ? `${d.color}15` : "rgba(5,15,30,0.6)",
                      color: activeDistrict === d.id ? d.color : "rgba(200,216,240,0.4)",
                    }}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* District info */}
            <div>
              {district ? (
                <div
                  className="p-6 h-full"
                  style={{
                    background: "rgba(5,12,25,0.9)",
                    border: `1px solid ${district.color}33`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full" style={{ background: district.color, boxShadow: `0 0 8px ${district.color}` }} />
                    <span className="text-[9px] font-bold tracking-widest uppercase" style={{ color: district.color, fontFamily: "monospace" }}>
                      DISTRICT ACTIVE
                    </span>
                  </div>
                  <h2 className="font-black text-white text-2xl mb-2">{district.label}</h2>
                  <p className="text-sm mb-6" style={{ color: "rgba(200,216,240,0.6)", lineHeight: 1.7 }}>{district.desc}</p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {district.stats.map((s) => (
                      <div key={s.label} className="p-3" style={{ background: "rgba(0,0,8,0.6)", border: `1px solid ${district.color}22` }}>
                        <div className="font-black text-base mb-0.5" style={{ color: district.color }}>{s.value}</div>
                        <div className="text-[8px] tracking-widest uppercase" style={{ color: "rgba(200,216,240,0.4)", fontFamily: "monospace" }}>{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="text-[8px] font-bold tracking-widest uppercase mb-2" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>
                    USE CASES
                  </div>
                  <div className="space-y-2">
                    {district.useCases.map((uc) => (
                      <div key={uc} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full flex-shrink-0 mt-2" style={{ background: district.color }} />
                        <span className="text-[0.8rem]" style={{ color: "rgba(200,216,240,0.6)", lineHeight: 1.5 }}>{uc}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#demo"
                    className="mt-6 block text-center py-3 text-[9px] font-bold tracking-widest uppercase transition-all"
                    style={{ background: `linear-gradient(135deg, ${district.color}, ${district.color}88)`, color: "#000" }}
                  >
                    Deploy in My City →
                  </a>
                </div>
              ) : (
                <div
                  className="p-6"
                  style={{ background: "rgba(5,12,25,0.6)", border: "1px solid rgba(0,212,255,0.1)", height: "100%" }}
                >
                  <div className="text-[9px] font-bold tracking-widest uppercase text-[#00d4ff] mb-4">SELECT A DISTRICT</div>
                  <div className="space-y-3">
                    {DISTRICTS.map((d) => (
                      <button
                        key={d.id}
                        onClick={() => setActiveDistrict(d.id)}
                        className="w-full text-left p-3 transition-all flex items-center gap-3"
                        style={{ border: `1px solid ${d.color}22`, background: `${d.color}06` }}
                      >
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: d.color }} />
                        <div>
                          <div className="font-bold text-white text-sm">{d.label}</div>
                          <div className="text-[8px] mt-0.5" style={{ color: "rgba(200,216,240,0.4)", fontFamily: "monospace" }}>
                            {d.useCases[0]}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
