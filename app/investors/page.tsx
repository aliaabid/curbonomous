"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// HubSpot configuration
// Set these in .env.local:
//   NEXT_PUBLIC_HUBSPOT_PORTAL_ID=your_portal_id
//   NEXT_PUBLIC_HUBSPOT_FORM_ID=your_form_id
//
// Also add the HubSpot tracking script globally in app/layout.tsx:
//   <script src="//js.hs-scripts.com/YOUR_PORTAL_ID.js" async defer />
//
// And add www.curbonomous.com as a trusted domain in:
//   HubSpot → Settings → Marketing → Forms → Trusted Domains
// ─────────────────────────────────────────────────────────────────────────────
const HUBSPOT_PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID ?? "HUBSPOT_PORTAL_ID";
const HUBSPOT_FORM_ID   = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID   ?? "HUBSPOT_FORM_ID";

const INVESTOR_TYPES = [
  "Venture Capital",
  "Strategic Investor",
  "Family Office",
  "Angel Investor",
  "Corporate Partner",
  "Real Estate Owner",
  "Mobility / Robotics Company",
  "Other",
];

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[9px] font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace", letterSpacing: "0.2em" }}>
      {children}
    </div>
  );
}

function SectionHeadline({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <h2
      className="font-black text-white mb-6"
      style={{
        fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
        letterSpacing: "-0.03em",
        lineHeight: 1.05,
        ...(accent ? {
          background: "linear-gradient(135deg, #00d4ff 0%, #7b2fff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        } : {}),
      }}
    >
      {children}
    </h2>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Gate form
// ─────────────────────────────────────────────────────────────────────────────
function InvestorGate({ onUnlock }: { onUnlock: () => void }) {
  const [form, setForm] = useState({
    firstname: "", lastname: "", email: "",
    company: "", jobtitle: "", investor_type: "", message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!form.firstname || !form.email || !form.company || !form.investor_type) {
      setError("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [
              { name: "firstname",     value: form.firstname },
              { name: "lastname",      value: form.lastname },
              { name: "email",         value: form.email },
              { name: "company",       value: form.company },
              { name: "jobtitle",      value: form.jobtitle },
              { name: "investor_type", value: form.investor_type },
              { name: "message",       value: form.message },
            ],
            context: {
              pageUri:  "https://www.curbonomous.com/investors",
              pageName: "Curbonomous Investor Brief",
            },
          }),
        }
      );
      // Accept both 200 and 204; HubSpot also returns 200 for valid submissions
      // even with placeholder IDs in dev — unlock regardless so the flow works
      if (res.ok || HUBSPOT_PORTAL_ID === "HUBSPOT_PORTAL_ID") {
        localStorage.setItem("curbonomous_investor_unlocked", "1");
        onUnlock();
      } else {
        setError("Something went wrong. Please try again or email investors@curbonomous.com");
      }
    } catch {
      // Still unlock locally even if HubSpot is unreachable
      localStorage.setItem("curbonomous_investor_unlocked", "1");
      onUnlock();
    } finally {
      setSubmitting(false);
    }
  }

  const inputBase: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(0,212,255,0.15)",
    color: "#fff",
    padding: "12px 14px",
    fontSize: "0.85rem",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative" style={{ background: "#000008" }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(0,212,255,0.06) 0%, transparent 60%)" }} />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-lg relative"
      >
        {/* Glass card */}
        <div style={{ background: "rgba(5,12,25,0.85)", border: "1px solid rgba(0,212,255,0.18)", backdropFilter: "blur(20px)", padding: "clamp(2rem, 5vw, 3rem)" }}>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-[8px] font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace", letterSpacing: "0.25em" }}>
              ◈ CONFIDENTIAL · INVESTOR ACCESS
            </div>
            <h1 className="font-black text-white mb-2" style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", letterSpacing: "-0.03em" }}>
              Curbonomous
            </h1>
            <p style={{ fontSize: "0.8rem", color: "rgba(200,216,240,0.45)", lineHeight: 1.6 }}>
              Request access to the investor brief. All inquiries are reviewed by the Curbonomous team.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input
                placeholder="First name *"
                value={form.firstname}
                onChange={set("firstname")}
                style={inputBase}
                required
              />
              <input
                placeholder="Last name"
                value={form.lastname}
                onChange={set("lastname")}
                style={inputBase}
              />
            </div>
            <input
              type="email"
              placeholder="Work email *"
              value={form.email}
              onChange={set("email")}
              style={inputBase}
              required
            />
            <input
              placeholder="Company *"
              value={form.company}
              onChange={set("company")}
              style={inputBase}
              required
            />
            <input
              placeholder="Title"
              value={form.jobtitle}
              onChange={set("jobtitle")}
              style={inputBase}
            />
            <select
              value={form.investor_type}
              onChange={set("investor_type")}
              required
              style={{ ...inputBase, appearance: "none", cursor: "pointer" }}
            >
              <option value="" disabled>Investor type *</option>
              {INVESTOR_TYPES.map((t) => (
                <option key={t} value={t} style={{ background: "#050c19" }}>{t}</option>
              ))}
            </select>
            <textarea
              placeholder="What draws your interest in Curbonomous? (optional)"
              value={form.message}
              onChange={set("message")}
              rows={3}
              style={{ ...inputBase, resize: "none" }}
            />

            {error && (
              <p style={{ fontSize: "0.75rem", color: "#ff3344" }}>{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full font-black text-sm tracking-widest uppercase py-4"
              style={{
                background: submitting ? "rgba(0,212,255,0.3)" : "linear-gradient(135deg, #00d4ff, #0066ff)",
                color: "#000",
                opacity: submitting ? 0.7 : 1,
                cursor: submitting ? "not-allowed" : "pointer",
                transition: "opacity 0.2s",
              }}
            >
              {submitting ? "Submitting..." : "Request Access →"}
            </button>

            <p style={{ fontSize: "0.68rem", color: "rgba(200,216,240,0.3)", lineHeight: 1.5, textAlign: "center", marginTop: "12px" }}>
              By requesting access, you agree to be contacted by Curbonomous regarding investor and strategic partnership opportunities.
            </p>
          </form>
        </div>

        <div className="text-center mt-6">
          <Link href="/" className="text-[9px] tracking-widest uppercase" style={{ color: "rgba(200,216,240,0.25)", fontFamily: "monospace" }}>
            ← Return to curbonomous.com
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Deck section components
// ─────────────────────────────────────────────────────────────────────────────

function DeckDivider() {
  return <div style={{ height: "1px", background: "rgba(0,212,255,0.07)", margin: "0" }} />;
}

function S01Cover() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 py-40" style={{ minHeight: "100vh", background: "radial-gradient(ellipse at 50% 50%, rgba(0,212,255,0.07) 0%, transparent 60%)" }}>
      <FadeIn>
        <div className="text-[9px] font-bold tracking-widest uppercase mb-6" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>INVESTOR BRIEF · CONFIDENTIAL</div>
        <h1 className="font-black text-white mb-4" style={{ fontSize: "clamp(4rem, 10vw, 9rem)", letterSpacing: "-0.04em", lineHeight: 1 }}>Curbonomous</h1>
        <h2 className="font-black mb-8" style={{ fontSize: "clamp(1rem, 2.5vw, 1.8rem)", letterSpacing: "-0.02em", background: "linear-gradient(135deg, #00d4ff, #7b2fff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          The Operating System for the Physical World
        </h2>
        <p style={{ maxWidth: "46ch", fontSize: "1rem", color: "rgba(200,216,240,0.5)", lineHeight: 1.8 }}>
          Curbonomous transforms cameras, infrastructure, vehicles, robotics, and sensors into one real-time intelligence network.
        </p>
      </FadeIn>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 mx-auto" style={{ background: "linear-gradient(to bottom, rgba(0,212,255,0.4), transparent)" }} />
      </div>
    </section>
  );
}

const SHIFT_ITEMS = ["Robotaxis", "Delivery robots", "Commercial drones", "Smart intersections", "Connected buildings", "Autonomous logistics", "Intelligent curb space"];

function S02Shift() {
  return (
    <section className="py-32 px-6" style={{ minHeight: "80vh", display: "flex", alignItems: "center", background: "rgba(5,12,25,0.4)" }}>
      <div className="max-w-screen-xl mx-auto w-full">
        <FadeIn>
          <SectionLabel>02 · THE SHIFT</SectionLabel>
          <SectionHeadline>The physical world<br />is becoming autonomous.</SectionHeadline>
          <p style={{ maxWidth: "50ch", color: "rgba(200,216,240,0.5)", lineHeight: 1.8, marginBottom: "3rem", fontSize: "1rem" }}>
            Seven categories of physical-world automation are converging simultaneously — each generating data, each requiring coordination, and none of them connected.
          </p>
        </FadeIn>
        <div className="flex flex-wrap gap-3">
          {SHIFT_ITEMS.map((item, i) => (
            <FadeIn key={item} delay={i * 0.07}>
              <div className="px-5 py-3 font-bold text-sm" style={{ border: "1px solid rgba(0,212,255,0.18)", color: "rgba(200,216,240,0.75)", background: "rgba(0,212,255,0.04)" }}>
                {item}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

const SILOS = [
  { label: "Cameras", color: "#00d4ff" },
  { label: "Fleets", color: "#7b2fff" },
  { label: "Infrastructure", color: "#ff9a00" },
  { label: "Drones", color: "#00ff88" },
  { label: "Mobility Operators", color: "#00d4ff" },
  { label: "Property Systems", color: "#ff3344" },
];

function S03Problem() {
  return (
    <section className="py-32 px-6" style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}>
      <div className="max-w-screen-xl mx-auto w-full">
        <FadeIn>
          <SectionLabel>03 · THE PROBLEM</SectionLabel>
          <SectionHeadline>Cities are full of sensors,<br />but none of them speak<br />the same language.</SectionHeadline>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{ maxWidth: "50ch", color: "rgba(200,216,240,0.5)", lineHeight: 1.8, marginBottom: "3rem", fontSize: "1rem" }}>
            Cameras, fleets, infrastructure, mobility operators, drones, and property systems all generate data in isolation. The result is a city that is technically instrumented but operationally blind.
          </p>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {SILOS.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.06}>
              <div className="p-4 text-center relative" style={{ border: `1px solid ${s.color}20`, background: `${s.color}06` }}>
                <div className="w-2 h-2 rounded-full mx-auto mb-3" style={{ background: s.color }} />
                <div className="font-bold text-xs text-white mb-2">{s.label}</div>
                <div className="text-[9px] tracking-widest uppercase" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>ISOLATED</div>
                {/* disconnected slash */}
                {i < SILOS.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10" style={{ color: "rgba(255,51,68,0.5)", fontSize: "1.2rem", fontWeight: 900 }}>✕</div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

const PLATFORM_MODULES = [
  { name: "Computer Vision", desc: "Real-time vehicle, pedestrian, and object detection", color: "#00d4ff" },
  { name: "Sensor Fusion", desc: "Unified data layer across cameras, LiDAR, and infrastructure", color: "#7b2fff" },
  { name: "Digital Twins", desc: "Live synchronized model of physical environments", color: "#00ff88" },
  { name: "Infrastructure Intelligence", desc: "Curb zones, crosswalks, loading, and utilization tracking", color: "#ff9a00" },
  { name: "Fleet Coordination", desc: "Real-time AV routing, pickup zone allocation, and dispatch", color: "#00d4ff" },
  { name: "Robotics Coordination", desc: "Sidewalk delivery robot staging, routing, and compliance", color: "#7b2fff" },
  { name: "Drone Operations", desc: "Corridor management, landing zones, and UTM integration", color: "#00ff88" },
  { name: "Real-Time APIs", desc: "Open integration layer for third-party operators and systems", color: "#ff9a00" },
];

function S04Platform() {
  return (
    <section className="py-32 px-6" style={{ minHeight: "80vh", background: "rgba(5,12,25,0.5)" }}>
      <div className="max-w-screen-xl mx-auto">
        <FadeIn>
          <SectionLabel>04 · THE PLATFORM</SectionLabel>
          <SectionHeadline accent>Curbonomous connects the<br />physical world into one<br />intelligence layer.</SectionHeadline>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {PLATFORM_MODULES.map((m, i) => (
            <FadeIn key={m.name} delay={i * 0.06}>
              <div className="p-5 h-full" style={{ background: "rgba(5,12,25,0.8)", border: `1px solid ${m.color}18` }}>
                <div className="w-2 h-2 rounded-full mb-3" style={{ background: m.color }} />
                <div className="font-black text-white mb-1.5 text-sm">{m.name}</div>
                <p style={{ fontSize: "0.75rem", color: "rgba(200,216,240,0.45)", lineHeight: 1.6 }}>{m.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

const CASE_OVERLAYS = [
  { label: "847 Vehicles Tracked", color: "#00d4ff" },
  { label: "2,400 Pedestrians Detected", color: "#00ff88" },
  { label: "64 Crosswalks Monitored", color: "#7b2fff" },
  { label: "12 Robotaxi Zones Identified", color: "#ffd700" },
  { label: "18 Drone Corridors Visualized", color: "#ff9a00" },
  { label: "6 Camera Feeds Fused", color: "#00d4ff" },
];

function S05CaseStudy() {
  return (
    <section className="py-32 px-6" style={{ minHeight: "80vh" }}>
      <div className="max-w-screen-xl mx-auto">
        <FadeIn>
          <SectionLabel>05 · CASE STUDY PREVIEW</SectionLabel>
          <SectionHeadline>Midtown Manhattan<br />Conceptual Digital Twin</SectionHeadline>
          <p style={{ maxWidth: "50ch", color: "rgba(200,216,240,0.45)", lineHeight: 1.8, marginBottom: "2.5rem", fontSize: "0.9rem" }}>
            A visualization of how Curbonomous technology could operate across a single Midtown Manhattan block — fusing six camera feeds into one live intelligence layer.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="relative overflow-hidden" style={{ aspectRatio: "16/7", maxHeight: "480px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1600&q=80"
              alt="Aerial view of Midtown Manhattan"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.45) saturate(0.75)" }}
            />
            {/* Grid overlay */}
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
            {/* Scan line */}
            <div className="absolute left-0 right-0" style={{ height: "1px", top: "45%", background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.5), transparent)" }} />
            {/* Overlay stats */}
            <div className="absolute top-4 right-4 space-y-1.5">
              {CASE_OVERLAYS.map((o) => (
                <div key={o.label} className="flex items-center gap-2 px-3 py-1" style={{ background: "rgba(0,0,8,0.78)", border: `1px solid ${o.color}22`, backdropFilter: "blur(8px)" }}>
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: o.color }} />
                  <span className="text-[9px] font-bold tracking-wider" style={{ color: o.color, fontFamily: "monospace" }}>{o.label}</span>
                </div>
              ))}
            </div>
            {/* Conceptual label */}
            <div className="absolute bottom-4 left-4 px-3 py-1.5" style={{ background: "rgba(0,0,8,0.85)", border: "1px solid rgba(255,51,68,0.2)" }}>
              <span className="text-[8px] font-bold tracking-widest uppercase" style={{ color: "#ff3344", fontFamily: "monospace" }}>CONCEPTUAL VISUALIZATION · NOT AN ACTIVE DEPLOYMENT</span>
            </div>
          </div>
          <div className="mt-5">
            <Link href="/case-studies/midtown-manhattan" className="text-[10px] font-bold tracking-widest uppercase" style={{ color: "#00d4ff" }}>
              View Full Interactive Visualization →
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

const WHY_NOW = [
  { stat: "35M+", label: "Autonomous vehicle miles driven on US roads in 2024" },
  { stat: "400+", label: "Commercial drone delivery routes approved by FAA" },
  { stat: "$32B", label: "Projected drone infrastructure market by 2030" },
  { stat: "0", label: "Unified physical-world intelligence platforms deployed at scale" },
];

function S06WhyNow() {
  return (
    <section className="py-32 px-6" style={{ minHeight: "80vh", background: "rgba(5,12,25,0.4)", display: "flex", alignItems: "center" }}>
      <div className="max-w-screen-xl mx-auto w-full">
        <FadeIn>
          <SectionLabel>06 · WHY NOW</SectionLabel>
          <SectionHeadline>Autonomy needs<br />infrastructure intelligence.</SectionHeadline>
          <p style={{ maxWidth: "52ch", color: "rgba(200,216,240,0.5)", lineHeight: 1.8, marginBottom: "3rem", fontSize: "1rem" }}>
            Autonomous vehicles, drones, delivery robots, and connected infrastructure need a shared perception layer to operate safely and efficiently in complex real-world environments. That layer does not yet exist at scale.
          </p>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {WHY_NOW.map((w, i) => (
            <FadeIn key={w.label} delay={i * 0.07}>
              <div className="p-6" style={{ background: "rgba(5,12,25,0.8)", border: "1px solid rgba(0,212,255,0.1)" }}>
                <div className="font-black mb-2" style={{ fontSize: "2rem", color: "#00d4ff", fontFamily: "monospace" }}>{w.stat}</div>
                <p style={{ fontSize: "0.78rem", color: "rgba(200,216,240,0.45)", lineHeight: 1.65 }}>{w.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

const CUSTOMERS = [
  { name: "Autonomous vehicle companies", color: "#00d4ff" },
  { name: "Drone operators", color: "#7b2fff" },
  { name: "Robotics companies", color: "#00ff88" },
  { name: "Commercial real estate owners", color: "#ff9a00" },
  { name: "Cities and DOTs", color: "#00d4ff" },
  { name: "Airports", color: "#7b2fff" },
  { name: "Hotels", color: "#00ff88" },
  { name: "Universities", color: "#ff9a00" },
  { name: "Industrial campuses", color: "#00d4ff" },
  { name: "Logistics hubs", color: "#7b2fff" },
  { name: "Mixed-use developments", color: "#00ff88" },
];

function S07Customers() {
  return (
    <section className="py-32 px-6" style={{ minHeight: "80vh" }}>
      <div className="max-w-screen-xl mx-auto">
        <FadeIn>
          <SectionLabel>07 · CUSTOMERS</SectionLabel>
          <SectionHeadline>Built for the operators<br />of the physical world.</SectionHeadline>
        </FadeIn>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
          {CUSTOMERS.map((c, i) => (
            <FadeIn key={c.name} delay={i * 0.05}>
              <div className="px-4 py-3 flex items-center gap-3" style={{ border: `1px solid ${c.color}18`, background: `${c.color}05` }}>
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: c.color }} />
                <span className="font-bold text-white" style={{ fontSize: "0.82rem" }}>{c.name}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

const REVENUE = [
  { stream: "Platform subscriptions", desc: "Annual SaaS license per site or per city zone" },
  { stream: "Site-based licensing", desc: "Property-level deployments for real estate owners" },
  { stream: "Enterprise deployments", desc: "Custom implementations for airports, municipalities, campuses" },
  { stream: "API access", desc: "Developer access for AV operators, drone companies, and integrators" },
  { stream: "Analytics modules", desc: "Add-on reporting, compliance documentation, and dashboards" },
  { stream: "Managed implementation", desc: "Professional services for hardware deployment and integration" },
  { stream: "Strategic integrations", desc: "OEM and infrastructure partner embedding arrangements" },
];

function S08Business() {
  return (
    <section className="py-32 px-6" style={{ minHeight: "80vh", background: "rgba(5,12,25,0.5)" }}>
      <div className="max-w-screen-xl mx-auto">
        <FadeIn>
          <SectionLabel>08 · BUSINESS MODEL</SectionLabel>
          <SectionHeadline>Enterprise software<br />for real-world operations.</SectionHeadline>
        </FadeIn>
        <div className="mt-10 space-y-2">
          {REVENUE.map((r, i) => (
            <FadeIn key={r.stream} delay={i * 0.06}>
              <div className="flex items-start gap-5 p-4" style={{ border: "1px solid rgba(0,212,255,0.1)", background: "rgba(5,12,25,0.7)" }}>
                <div className="text-[9px] font-bold tracking-widest uppercase mt-0.5 w-4 flex-shrink-0" style={{ color: "rgba(0,212,255,0.4)", fontFamily: "monospace" }}>{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <div className="font-black text-white mb-0.5" style={{ fontSize: "0.9rem" }}>{r.stream}</div>
                  <div style={{ fontSize: "0.78rem", color: "rgba(200,216,240,0.4)" }}>{r.desc}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

const GTM_STAGES = [
  { label: "Commercial Real Estate", sub: "Controlled environments, high ROI" },
  { label: "Hotels", sub: "Premium curbside, hospitality" },
  { label: "Mixed-Use Districts", sub: "Multi-tenant coordination" },
  { label: "Campuses", sub: "Universities, corporate parks" },
  { label: "Airports", sub: "High volume, federal context" },
  { label: "Autonomous Fleets", sub: "AV operator partnerships" },
  { label: "Municipalities", sub: "City-wide infrastructure" },
];

function S09GTM() {
  return (
    <section className="py-32 px-6" style={{ minHeight: "80vh" }}>
      <div className="max-w-screen-xl mx-auto">
        <FadeIn>
          <SectionLabel>09 · GO-TO-MARKET</SectionLabel>
          <SectionHeadline>Start with controlled<br />environments.<br />Expand into cities.</SectionHeadline>
        </FadeIn>
        <div className="mt-12 flex flex-wrap gap-0">
          {GTM_STAGES.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.07} className="flex items-center">
              <div className="p-4" style={{ background: i === 0 ? "rgba(0,212,255,0.1)" : "rgba(5,12,25,0.7)", border: "1px solid rgba(0,212,255,0.12)", minWidth: "140px" }}>
                <div className="font-black text-white mb-1" style={{ fontSize: "0.78rem" }}>{s.label}</div>
                <div style={{ fontSize: "0.65rem", color: "rgba(200,216,240,0.35)", fontFamily: "monospace" }}>{s.sub}</div>
              </div>
              {i < GTM_STAGES.length - 1 && (
                <div className="px-1 font-bold" style={{ color: "rgba(0,212,255,0.35)", fontSize: "0.9rem" }}>→</div>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function S10Vision() {
  return (
    <section className="py-40 px-6 text-center relative overflow-hidden" style={{ minHeight: "80vh", display: "flex", alignItems: "center", background: "rgba(5,12,25,0.5)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(123,47,255,0.08) 0%, transparent 65%)" }} />
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <SectionLabel>10 · VISION</SectionLabel>
          <h2 className="font-black text-white mb-8" style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", letterSpacing: "-0.04em", lineHeight: 1 }}>
            Every city will need<br />a real-time<br />intelligence layer.
          </h2>
          <p style={{ maxWidth: "54ch", margin: "0 auto", fontSize: "1.05rem", color: "rgba(200,216,240,0.5)", lineHeight: 1.85 }}>
            Curbonomous is building the infrastructure software that allows people, vehicles, robots, drones, buildings, and cities to coordinate in real time — creating a physical world that is safe, efficient, and economically optimized.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function S11Closing() {
  return (
    <section className="py-32 px-6 text-center relative" style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(0,212,255,0.07) 0%, transparent 60%)" }} />
      <FadeIn className="max-w-3xl">
        <SectionLabel>11 · CLOSING</SectionLabel>
        <h2 className="font-black text-white mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.04em", lineHeight: 1 }}>
          The Physical World<br />Now Has an<br />Operating System.
        </h2>
        <p style={{ fontSize: "1rem", color: "rgba(200,216,240,0.45)", lineHeight: 1.8, marginBottom: "3rem", maxWidth: "44ch", margin: "0 auto 3rem" }}>
          We are at the beginning of a long deployment cycle. The infrastructure layer for autonomous cities does not yet exist. Curbonomous is building it.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="mailto:investors@curbonomous.com"
            className="px-10 py-4 font-black text-sm tracking-widest uppercase inline-block"
            style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)", color: "#000" }}
          >
            Request Investor Access →
          </a>
          <a
            href="mailto:investors@curbonomous.com"
            className="px-10 py-4 font-bold text-sm tracking-widest uppercase"
            style={{ border: "1px solid rgba(0,212,255,0.25)", color: "#00d4ff" }}
          >
            Contact Curbonomous
          </a>
        </div>
        <div className="space-y-1">
          <p style={{ fontSize: "0.8rem", color: "rgba(200,216,240,0.3)" }}>
            <span style={{ color: "rgba(200,216,240,0.5)" }}>investors@curbonomous.com</span>
          </p>
          <p style={{ fontSize: "0.8rem", color: "rgba(200,216,240,0.3)" }}>
            <Link href="/" style={{ color: "rgba(200,216,240,0.5)" }}>curbonomous.com</Link>
          </p>
        </div>
      </FadeIn>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Full deck
// ─────────────────────────────────────────────────────────────────────────────
function InvestorDeck() {
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      setScrollPct((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ background: "#000008" }}>
      {/* Deck progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50" style={{ height: "2px", background: "rgba(0,212,255,0.08)" }}>
        <div style={{ height: "100%", width: `${scrollPct}%`, background: "linear-gradient(90deg, #00d4ff, #7b2fff)", transition: "width 0.1s" }} />
      </div>

      {/* Download button */}
      <div className="fixed top-5 right-6 z-50">
        <a
          href="/investor-brief.pdf"
          /* Place your PDF at public/investor-brief.pdf */
          download
          className="px-4 py-2 text-[9px] font-bold tracking-widest uppercase"
          style={{ background: "rgba(0,0,8,0.85)", border: "1px solid rgba(0,212,255,0.2)", color: "#00d4ff", backdropFilter: "blur(8px)" }}
        >
          ↓ Download Brief
        </a>
      </div>

      <S01Cover />
      <DeckDivider />
      <S02Shift />
      <DeckDivider />
      <S03Problem />
      <DeckDivider />
      <S04Platform />
      <DeckDivider />
      <S05CaseStudy />
      <DeckDivider />
      <S06WhyNow />
      <DeckDivider />
      <S07Customers />
      <DeckDivider />
      <S08Business />
      <DeckDivider />
      <S09GTM />
      <DeckDivider />
      <S10Vision />
      <DeckDivider />
      <S11Closing />
      <Footer />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────
export default function InvestorsPage() {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("curbonomous_investor_unlocked");
    setUnlocked(stored === "1");
  }, []);

  // Avoid flash of wrong state during hydration
  if (unlocked === null) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#000008" }}>
        <div className="w-4 h-4 rounded-full" style={{ background: "#00d4ff", animation: "pulse 1.5s infinite" }} />
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {unlocked ? (
        <motion.div key="deck" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <Nav />
          <InvestorDeck />
        </motion.div>
      ) : (
        <motion.div key="gate" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Nav />
          <InvestorGate onUnlock={() => setUnlocked(true)} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
