"use client";

import { useState } from "react";
import Link from "next/link";

const SOLUTIONS = [
  { href: "/government", label: "Smart City Government", color: "#0066ff" },
  { href: "/airport", label: "Airport Operations", color: "#7b2fff" },
  { href: "/city", label: "Downtown Districts", color: "#00d4ff" },
  { href: "/city", label: "Universities & Campuses", color: "#00ff88" },
  { href: "/city", label: "Transit Agencies", color: "#ff6b35" },
  { href: "/city", label: "Autonomous Mobility Operators", color: "#ffd700" },
];

const STATS = [
  { value: "50+", label: "Cities in Deployment" },
  { value: "12k+", label: "Cameras Managed" },
  { value: "$2.1B", label: "Curb Revenue Optimized" },
  { value: "99.97%", label: "Platform Uptime" },
];

export default function DemoSection() {
  const [formState, setFormState] = useState({ name: "", org: "", email: "", role: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative py-40 overflow-hidden" id="demo">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.08) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #00d4ff44, transparent)" }}
      />

      <div className="max-w-4xl mx-auto px-10">

        {/* Stats row */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px mb-20"
          style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.12)" }}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="text-center py-10 px-6"
              style={{ background: "rgba(2,8,18,0.95)" }}
            >
              <div
                className="font-black text-white mb-2"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1, letterSpacing: "-0.02em" }}
              >
                {s.value}
              </div>
              <div className="text-[9px] font-bold tracking-widest uppercase" style={{ color: "rgba(200,216,240,0.35)", fontFamily: "monospace" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-5">
              ◈ GET STARTED
            </div>
            <h2
              className="font-black text-white mb-8"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
            >
              Deploy the City<br />
              <span style={{ color: "#00d4ff" }}>Operating System</span>
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(200,216,240,0.6)", lineHeight: 1.75, maxWidth: "40ch" }}>
              From pilot to full city-wide deployment in 90 days.
              We handle hardware, software, integration, and training.
              You get outcomes.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { label: "30-day pilot available", color: "#00ff88" },
                { label: "No capital expenditure required", color: "#00d4ff" },
                { label: "Responds to RFPs within 48 hours", color: "#7b2fff" },
                { label: "Dedicated government solutions team", color: "#ff6b35" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.color }} />
                  <span style={{ fontSize: "0.95rem", color: "rgba(200,216,240,0.7)" }}>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <div className="text-[9px] font-bold tracking-widest uppercase mb-5" style={{ color: "rgba(200,216,240,0.35)", fontFamily: "monospace" }}>
                SOLUTION AREAS
              </div>
              <div className="flex flex-wrap gap-3">
                {SOLUTIONS.map((s) => (
                  <Link
                    key={s.href + s.label}
                    href={s.href}
                    className="px-3 py-1.5 text-[9px] font-bold tracking-widest uppercase transition-all"
                    style={{
                      border: `1px solid ${s.color}33`,
                      color: s.color,
                      background: `${s.color}0a`,
                    }}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className="p-10"
            style={{
              background: "rgba(5,12,25,0.95)",
              border: "1px solid rgba(0,212,255,0.2)",
            }}
          >
            {submitted ? (
              <div className="text-center py-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(0,255,136,0.1)", border: "2px solid #00ff88" }}
                >
                  <span style={{ color: "#00ff88", fontSize: "1.5rem" }}>✓</span>
                </div>
                <h3 className="text-white font-black text-xl mb-2">Request Received</h3>
                <p style={{ color: "rgba(200,216,240,0.6)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  Our government solutions team will contact you within 24 hours.
                  We look forward to demonstrating Curbonomous City OS.
                </p>
              </div>
            ) : (
              <>
                <div className="text-[9px] font-bold tracking-widest uppercase text-[#00d4ff] mb-8">
                  SCHEDULE A LIVE DEMONSTRATION
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    { key: "name", label: "Full Name", type: "text", placeholder: "Jane Smith" },
                    { key: "org", label: "Organization / Agency", type: "text", placeholder: "City of Atlanta" },
                    { key: "email", label: "Work Email", type: "email", placeholder: "jane@cityofatlanta.gov" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-[9px] font-bold tracking-widest uppercase mb-2.5" style={{ color: "rgba(200,216,240,0.4)" }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formState[field.key as keyof typeof formState]}
                        onChange={(e) => setFormState((s) => ({ ...s, [field.key]: e.target.value }))}
                        required
                        className="w-full px-5 py-4 text-sm outline-none transition-all"
                        style={{
                          background: "rgba(0,0,8,0.8)",
                          border: "1px solid rgba(0,212,255,0.2)",
                          color: "#c8d8f0",
                        }}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-[9px] font-bold tracking-widest uppercase mb-1.5" style={{ color: "rgba(200,216,240,0.4)" }}>
                      Your Role
                    </label>
                    <select
                      value={formState.role}
                      onChange={(e) => setFormState((s) => ({ ...s, role: e.target.value }))}
                      required
                      className="w-full px-4 py-3 text-sm outline-none"
                      style={{
                        background: "rgba(0,0,8,0.8)",
                        border: "1px solid rgba(0,212,255,0.2)",
                        color: formState.role ? "#c8d8f0" : "rgba(200,216,240,0.35)",
                      }}
                    >
                      <option value="">Select your role</option>
                      <option>Transportation Director</option>
                      <option>Public Works Director</option>
                      <option>Airport Authority</option>
                      <option>Transit Agency</option>
                      <option>City Manager / Mayor&apos;s Office</option>
                      <option>Smart City Program</option>
                      <option>AV / Autonomous Mobility Operator</option>
                      <option>Investor / Analyst</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 font-black text-sm tracking-widest uppercase transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, #00d4ff, #0066ff)",
                      color: "#000",
                    }}
                  >
                    Request Live Demo →
                  </button>
                  <p className="text-[8px] text-center" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>
                    We respond within 24 hours · No commitment required · RFP support available
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
