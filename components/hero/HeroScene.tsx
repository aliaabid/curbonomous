"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";

// --- Building (dark matte, no specular blowout) ---
function Building({ x, z, height }: { x: number; z: number; height: number }) {
  const geo = useMemo(() => new THREE.BoxGeometry(0.78, height, 0.78), [height]);
  const matRef = useRef<THREE.MeshStandardMaterial>(null!);
  useFrame((state) => {
    if (matRef.current) {
      matRef.current.emissiveIntensity =
        0.3 + Math.sin(state.clock.elapsedTime * 0.3 + x * 0.5 + z * 0.5) * 0.1;
    }
  });
  return (
    <mesh geometry={geo} position={[x, height / 2, z]}>
      <meshStandardMaterial
        ref={matRef}
        color="#000000"
        emissive="#003870"
        emissiveIntensity={0.5}
        roughness={1.0}
        metalness={0.0}
        toneMapped={false}
      />
    </mesh>
  );
}

// --- Window lights on buildings ---
function BuildingWindows({ x, z, height }: { x: number; z: number; height: number }) {
  const points = useMemo(() => {
    const arr: number[] = [];
    for (let floor = 0; floor < height * 2.5; floor++) {
      if (Math.random() > 0.45) {
        arr.push(x + (Math.random() - 0.5) * 0.6, floor * 0.4 + 0.2, z + 0.42);
        arr.push(x + (Math.random() - 0.5) * 0.6, floor * 0.4 + 0.2, z - 0.42);
      }
    }
    return new Float32Array(arr);
  }, [x, z, height]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute args={[points, 3]} attach="attributes-position" />
      </bufferGeometry>
      <pointsMaterial
        color="#88ccff"
        size={0.06}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// --- Road grid ---
function Roads() {
  const mat = useMemo(() => new THREE.MeshBasicMaterial({ color: "#010510" }), []);
  const roads: React.ReactElement[] = [];
  for (let i = -10; i <= 10; i += 4) {
    roads.push(
      <mesh key={`h${i}`} position={[0, 0.01, i]}>
        <boxGeometry args={[40, 0.02, 1.1]} />
        <primitive object={mat} />
      </mesh>
    );
    roads.push(
      <mesh key={`v${i}`} position={[i, 0.01, 0]}>
        <boxGeometry args={[1.1, 0.02, 40]} />
        <primitive object={mat} />
      </mesh>
    );
  }
  return <>{roads}</>;
}

// --- Cyan lane markers ---
function LaneMarkers() {
  const markers: React.ReactElement[] = [];
  for (let i = -9; i <= 9; i += 4) {
    for (let j = -18; j <= 18; j += 2.5) {
      markers.push(
        <mesh key={`lm-${i}-${j}`} position={[i, 0.03, j]}>
          <boxGeometry args={[0.06, 0.01, 0.7]} />
          <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={1.5} />
        </mesh>
      );
    }
  }
  return <>{markers}</>;
}

// --- Moving particles along roads ---
function RoadParticles() {
  const count = 100;
  const ref = useRef<THREE.Points>(null!);
  const { positions, velocities, axes } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count);
    const axes = new Uint8Array(count); // 0=horizontal, 1=vertical
    const roads = [-10, -6, -2, 2, 6, 10];
    for (let i = 0; i < count; i++) {
      const road = roads[Math.floor(Math.random() * roads.length)];
      const ax = Math.random() > 0.5 ? 1 : 0;
      axes[i] = ax;
      positions[i * 3] = ax === 0 ? (Math.random() - 0.5) * 38 : road;
      positions[i * 3 + 1] = 0.15;
      positions[i * 3 + 2] = ax === 0 ? road : (Math.random() - 0.5) * 38;
      velocities[i] = (Math.random() * 0.1 + 0.05) * (Math.random() > 0.5 ? 1 : -1);
    }
    return { positions, velocities, axes };
  }, []);

  useFrame(() => {
    if (!ref.current) return;
    const pos = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      if (axes[i] === 0) {
        pos[i * 3] += velocities[i];
        if (pos[i * 3] > 19) pos[i * 3] = -19;
        if (pos[i * 3] < -19) pos[i * 3] = 19;
      } else {
        pos[i * 3 + 2] += velocities[i];
        if (pos[i * 3 + 2] > 19) pos[i * 3 + 2] = -19;
        if (pos[i * 3 + 2] < -19) pos[i * 3 + 2] = 19;
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" />
      </bufferGeometry>
      <pointsMaterial color="#00d4ff" size={0.18} transparent opacity={0.85} sizeAttenuation />
    </points>
  );
}

// --- Streetlight ---
function Streetlight() {
  return (
    <group position={[0, 0, 2]}>
      <mesh position={[0, 2, 0]}>
        <cylinderGeometry args={[0.05, 0.07, 4, 8]} />
        <meshStandardMaterial color="#1a2a3a" roughness={0.7} metalness={0.3} />
      </mesh>
      <mesh position={[0.6, 4.1, 0]} rotation={[0, 0, -Math.PI / 12]}>
        <cylinderGeometry args={[0.03, 0.03, 1.2, 8]} />
        <meshStandardMaterial color="#1a2a3a" roughness={0.7} metalness={0.3} />
      </mesh>
      {/* Camera housing */}
      <mesh position={[1.1, 4.0, 0]}>
        <boxGeometry args={[0.26, 0.14, 0.14]} />
        <meshStandardMaterial color="#0a1a2a" roughness={0.6} metalness={0.4} />
      </mesh>
      {/* Lens glow */}
      <mesh position={[1.27, 4.0, 0]}>
        <sphereGeometry args={[0.028, 8, 8]} />
        <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={4} />
      </mesh>
      {/* Light source */}
      {/* No point light — buildings are emissive-only, no reflected highlights wanted */}
      {/* Light housing */}
      <mesh position={[1.1, 3.78, 0]}>
        <boxGeometry args={[0.3, 0.06, 0.2]} />
        <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={2.5} />
      </mesh>
    </group>
  );
}

// --- Full city grid ---
function CityGrid() {
  const buildings = useMemo(() => {
    const result: { x: number; z: number; height: number }[] = [];
    for (let bx = -9; bx <= 9; bx += 4) {
      for (let bz = -9; bz <= 9; bz += 4) {
        for (const [ox, oz] of [[0.9, 0.9], [0.9, -0.9], [-0.9, 0.9], [-0.9, -0.9]]) {
          result.push({ x: bx + ox, z: bz + oz, height: Math.random() * 3.5 + 0.6 });
        }
      }
    }
    return result;
  }, []);

  return (
    <>
      {/* Ground — meshBasicMaterial ignores lighting, stays pure dark */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[80, 80]} />
        <meshBasicMaterial color="#010208" />
      </mesh>
      <Roads />
      <LaneMarkers />
      {buildings.map((b, i) => (
        <React.Fragment key={i}>
          <Building {...b} />
          {i % 3 === 0 && <BuildingWindows {...b} />}
        </React.Fragment>
      ))}
      <RoadParticles />
    </>
  );
}

// --- Scroll-driven camera ---
function CameraRig({ scrollRef }: { scrollRef: React.MutableRefObject<number> }) {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(2, 5, 9);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  useFrame(() => {
    const t = scrollRef.current;
    const target = new THREE.Vector3(
      THREE.MathUtils.lerp(2, 10, t),
      THREE.MathUtils.lerp(5, 26, t),
      THREE.MathUtils.lerp(9, 18, t)
    );
    camera.position.lerp(target, 0.04);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// --- Ready signal ---
function ReadySignal({ onReady }: { onReady: () => void }) {
  useEffect(() => {
    onReady();
  }, [onReady]);
  return null;
}

// --- Scene ---
function Scene({ scrollRef, onReady }: { scrollRef: React.MutableRefObject<number>; onReady: () => void }) {
  return (
    <>
      <color attach="background" args={["#000008"]} />
      <ReadySignal onReady={onReady} />
      <CameraRig scrollRef={scrollRef} />
      {/* No ambient light — buildings visible purely via emissive, no reflected highlights */}
      <fog attach="fog" args={["#000008", 16, 50]} />
      <CityGrid />
      <Streetlight />
      <Sparkles
        count={150}
        size={0.7}
        speed={0.15}
        opacity={0.25}
        color="#00d4ff"
        scale={[38, 8, 38]}
        position={[0, 4, 0]}
      />
    </>
  );
}

export default function HeroScene({ onReady }: { onReady?: () => void }) {
  const scrollRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = Math.min(window.scrollY / (total * 0.3), 1);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Canvas
      className="absolute inset-0"
      gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      dpr={[1, 1.5]}
      camera={{ fov: 45, near: 0.1, far: 1000 }}
    >
      <Scene scrollRef={scrollRef} onReady={onReady ?? (() => {})} />
    </Canvas>
  );
}
