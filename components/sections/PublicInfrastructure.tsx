"use client";

import { useRef, useEffect, useState } from "react";

const OUTCOMES = [
  { metric: "30%", label: "Reduction in Loading Zone Violations", icon: "↓", color: "#00ff88" },
  { metric: "25%", label: "Improvement in Curb Turnover Rate", icon: "↑", color: "#00d4ff" },
  { metric: "40%", label: "Decrease in Double-Parking Events", icon: "↓", color: "#00ff88" },
  { metric: "3×", label: "Faster Violation Response Time", icon: "↑", color: "#7b2fff" },
  { metric: "Real-Time", label: "Occupancy Visibility Across All Zones", icon: "◉", color: "#00d4ff" },
  { metric: "100%", label: "Autonomous Mobility Readiness", icon: "★", color: "#ffd700" },
];

const CAPABILITIES = [
  { label: "Smart Curb Management", desc: "Digitize every curb foot with real-time occupancy, dwell time, and turnover analytics." },
  { label: "Computer Vision Infrastructure", desc: "Edge-deployed AI cameras with 99.2% accuracy across 47 vehicle classifications." },
  { label: "Loading Zone Optimization", desc: "Dynamic allocation, commercial delivery windows, and automated enforcement." },
  { label: "Commercial Vehicle Monitoring", desc: "Full-stack freight tracking with dwell analytics and compliance reporting." },
  { label: "Bike & Bus Lane Enforcement", desc: "Automated detection of lane blockages with photographic evidence capture." },
  { label: "Enforcement Automation", desc: "Digital citation workflows integrated with city payment and adjudication systems." },
  { label: "Dynamic Curb Pricing", desc: "Demand-responsive pricing that increases compliance and optimizes revenue." },
  { label: "AV Pickup Zone Management", desc: "Dedicated robotaxi and AV infrastructure with real-time allocation and throughput." },
  { label: "Payment Automation", desc: "LPR-triggered billing, mobile pay integration, and real-time reconciliation." },
  { label: "Delivery Robot Infrastructure", desc: "Sidewalk robot routing, staging zones, and charging station integration." },
  { label: "Drone Delivery Network", desc: "Air corridor management, landing pad control, and package transfer operations." },
  { label: "Airport Transportation Intel", desc: "Terminal curbside, rideshare, shuttle, and autonomous vehicle operations." },
];

const AUDIENCES = [
  { title: "Transportation Directors", desc: "Network-level analytics, policy simulation, and outcome reporting for every curb, lane, and zone in your jurisdiction.", color: "#00d4ff" },
  { title: "Public Works", desc: "Infrastructure asset management, camera health monitoring, and field operations dashboards integrated with your existing systems.", color: "#00ff88" },
  { title: "Airport Authorities", desc: "Terminal curbside intelligence, rideshare compliance, autonomous vehicle readiness, and drone logistics management.", color: "#7b2fff" },
  { title: "Transit Agencies", desc: "Bus lane monitoring, stop occupancy, ridership analytics, and autonomous shuttle coordination across the full route network.", color: "#ff6b35" },
  { title: "City Managers", desc: "Executive dashboards with congestion, safety, revenue, and emissions KPIs aligned to city transportation goals.", color: "#ffd700" },
  { title: "Smart City Programs", desc: "Open APIs, data sovereignty, and standards-aligned architecture that integrates with your existing smart city technology stack.", color: "#0066ff" },
];

function OutcomeCard({ metric, label, icon, color, index }: typeof OUTCOMES[0] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="p-8 flex flex-col gap-4 transition-all duration-700"
      style={{
        background: "rgba(5,12,25,0.8)",
        border: `1px solid ${color}22`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl font-black" style={{ color, fontFamily: "monospace", lineHeight: 1 }}>
          {icon}
        </span>
        <div>
          <div className="font-black text-white" style={{ fontSize: "2rem", lineHeight: 1, letterSpacing: "-0.02em" }}>
            {metric}
          </div>
        </div>
      </div>
      <p className="text-sm" style={{ color: "rgba(200,216,240,0.6)", lineHeight: 1.6 }}>
        {label}
      </p>
      <div className="h-px w-12" style={{ background: color }} />
    </div>
  );
}

export default function PublicInfrastructure() {
  return (
    <section className="relative py-40 overflow-hidden" id="government">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "linear-gradient(180deg, transparent 0%, rgba(0,102,255,0.04) 50%, transparent 100%)",
      }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(0,102,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-4xl mx-auto px-10">

        {/* Section header */}
        <div className="mb-20">
          <div className="text-[10px] font-bold tracking-widest uppercase text-[#0066ff] mb-6">
            ◈ PUBLIC SECTOR INTELLIGENCE
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <h2
                className="font-black text-white mb-8"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4.2rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
              >
                Built for Public<br />
                <span style={{ color: "#0066ff" }}>Infrastructure</span>
              </h2>
              <p style={{ fontSize: "1.1rem", color: "rgba(200,216,240,0.65)", lineHeight: 1.85, maxWidth: "42ch" }}>
                Curbonomous was designed from the ground up for the procurement requirements,
                security mandates, and operational complexity of public transportation agencies.
                We don't sell features — we deliver outcomes.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Transportation Directors bidding on smarter curbs",
                "Airports managing curbside chaos with precision",
                "Transit agencies protecting bus and bike lanes",
                "Cities preparing for the autonomous mobility era",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#0066ff" }} />
                  <span style={{ fontSize: "1rem", color: "rgba(200,216,240,0.7)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Outcome metrics */}
        <div className="mb-20">
          <div className="text-[10px] font-bold tracking-widest uppercase mb-8" style={{ color: "rgba(200,216,240,0.4)" }}>
            PROVEN OUTCOMES · NOT PROMISES
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {OUTCOMES.map((o, i) => (
              <OutcomeCard key={o.label} {...o} index={i} />
            ))}
          </div>
        </div>

        {/* Capabilities grid */}
        <div className="mb-20">
          <div className="text-[10px] font-bold tracking-widest uppercase mb-8" style={{ color: "rgba(200,216,240,0.4)" }}>
            FULL PLATFORM CAPABILITIES
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {CAPABILITIES.map((cap, i) => (
              <div
                key={cap.label}
                className="p-8 transition-all duration-300 group"
                style={{
                  background: "rgba(5,12,25,0.6)",
                  border: "1px solid rgba(0,102,255,0.15)",
                }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center"
                    style={{ background: "rgba(0,102,255,0.15)", border: "1px solid rgba(0,102,255,0.3)" }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#0066ff" }} />
                  </div>
                  <span className="font-bold text-white text-sm">{cap.label}</span>
                </div>
                <p className="text-[0.82rem] pl-8" style={{ color: "rgba(200,216,240,0.5)", lineHeight: 1.75 }}>
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Audience cards */}
        <div className="mb-20">
          <div className="text-[10px] font-bold tracking-widest uppercase mb-8" style={{ color: "rgba(200,216,240,0.4)" }}>
            BUILT FOR EVERY AGENCY STAKEHOLDER
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AUDIENCES.map((aud) => (
              <div
                key={aud.title}
                className="p-8"
                style={{
                  background: "rgba(5,12,25,0.7)",
                  border: `1px solid ${aud.color}18`,
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full" style={{ background: aud.color }} />
                  <span className="font-black text-white text-sm tracking-wide">{aud.title}</span>
                </div>
                <p style={{ fontSize: "0.85rem", color: "rgba(200,216,240,0.55)", lineHeight: 1.8 }}>{aud.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Procurement ready */}
        <div
          className="p-10 md:p-16"
          style={{
            background: "rgba(5,12,25,0.9)",
            border: "1px solid rgba(0,212,255,0.2)",
          }}
          id="procurement"
        >
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-4">
                ◈ PROCUREMENT READY
              </div>
              <h3
                className="font-black text-white mb-6"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
              >
                Engineered for<br />Government Procurement
              </h3>
              <p style={{ fontSize: "0.95rem", color: "rgba(200,216,240,0.6)", lineHeight: 1.75 }}>
                Curbonomous meets the security, compliance, and operational requirements
                of public-sector deployments at city-wide scale. From RFP response to
                full deployment in under 90 days.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { label: "Hardware-as-a-Service", desc: "Zero upfront capital. Camera infrastructure delivered as a subscription." },
                { label: "Software-as-a-Service", desc: "Cloud-native platform with 99.97% SLA-backed uptime guarantee." },
                { label: "5-Year TCO Modeling", desc: "Full cost modeling to support procurement justification and budget planning." },
                { label: "Public-Sector Security", desc: "SOC 2 Type II · FedRAMP-aligned · AES-256 encryption at rest and in transit." },
                { label: "Privacy Controls", desc: "GDPR, CCPA compliant. LPR data redaction, retention policies, audit logs." },
                { label: "Data Ownership", desc: "City retains 100% ownership of all data. No third-party data sharing." },
                { label: "Enterprise APIs", desc: "Open REST APIs integrate with SCOOT, Palantir, Esri, and existing city platforms." },
                { label: "SLA-Backed Support", desc: "24/7 NOC support with 4-hour response SLA for critical infrastructure events." },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 py-4"
                  style={{ borderBottom: "1px solid rgba(0,212,255,0.08)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: "#00d4ff" }} />
                  <div>
                    <div className="font-bold text-[0.85rem] text-white mb-1">{item.label}</div>
                    <p className="text-[0.82rem]" style={{ color: "rgba(200,216,240,0.5)", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA row */}
          <div
            className="mt-10 pt-8 flex flex-col sm:flex-row items-center gap-4 justify-between"
            style={{ borderTop: "1px solid rgba(0,212,255,0.1)" }}
          >
            <div>
              <p className="font-bold text-white mb-1">Ready to respond to your RFP?</p>
              <p style={{ fontSize: "0.85rem", color: "rgba(200,216,240,0.5)" }}>
                Our government solutions team responds to all RFPs within 48 hours.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href="#demo"
                className="px-7 py-3 text-xs font-bold tracking-widest uppercase rounded-sm transition-all"
                style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)", color: "#000" }}
              >
                Schedule Demo
              </a>
              <a
                href="#demo"
                className="px-7 py-3 text-xs font-bold tracking-widest uppercase rounded-sm transition-all"
                style={{ border: "1px solid rgba(0,212,255,0.3)", color: "#00d4ff" }}
              >
                RFP Response →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
