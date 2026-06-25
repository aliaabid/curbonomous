"use client";

import dynamic from "next/dynamic";
import { useState, useCallback } from "react";
import Nav from "@/components/nav/Nav";
import HeroOverlay from "@/components/hero/HeroOverlay";
import DigitalTwin from "@/components/sections/DigitalTwin";
import AutonomousMobility from "@/components/sections/AutonomousMobility";
import CameraIntelligence from "@/components/sections/CameraIntelligence";
import CommandCenter from "@/components/sections/CommandCenter";
import PublicInfrastructure from "@/components/sections/PublicInfrastructure";
import TechArchitecture from "@/components/sections/TechArchitecture";
import DemoSection from "@/components/sections/DemoSection";
import Footer from "@/components/sections/Footer";

const HeroScene = dynamic(() => import("@/components/hero/HeroScene"), {
  ssr: false,
  loading: () => null,
});

export default function HomePage() {
  const [sceneReady, setSceneReady] = useState(false);
  const handleReady = useCallback(() => setSceneReady(true), []);

  return (
    <main className="relative">
      <Nav />

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ height: "100vh", minHeight: 700, background: "#000008" }}
      >
        {/* Dark background always visible while Three.js loads */}
        <div className="absolute inset-0" style={{ background: "#000008" }} />

        <HeroScene onReady={handleReady} />

        {/* Bottom gradient — ensures headline text is always readable */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{
            height: "55%",
            background: "linear-gradient(to top, rgba(0,0,8,0.85) 0%, rgba(0,0,8,0.5) 40%, transparent 100%)",
          }}
        />

        <HeroOverlay sceneReady={sceneReady} />
      </section>

      {/* Thin luminous divider between hero and content */}
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.25), transparent)" }} />

      <div className="relative z-10" style={{ background: "#000008" }}>
        <DigitalTwin />
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.1), transparent)" }} />
        <AutonomousMobility />
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.1), transparent)" }} />
        <CameraIntelligence />
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.1), transparent)" }} />
        <CommandCenter />
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.1), transparent)" }} />
        <PublicInfrastructure />
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.1), transparent)" }} />
        <TechArchitecture />
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.1), transparent)" }} />
        <DemoSection />
        <Footer />
      </div>
    </main>
  );
}
