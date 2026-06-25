import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Autonomous Infrastructure Resources | Reports, Guides & Tools — Curbonomous",
  description: "Download free autonomous infrastructure guides, curb management playbooks, AV deployment templates, and industry reports from Curbonomous.",
  keywords: ["autonomous infrastructure resources", "curb management guide", "AV deployment guide", "smart city resources", "autonomous vehicle infrastructure report"],
};

const GUIDES = [
  { title: "The City Leader's Guide to Autonomous Infrastructure", type: "PDF Guide", pages: "28 pages", desc: "Everything a transportation director, city manager, or mayor needs to understand autonomous vehicle infrastructure requirements, procurement approaches, and deployment timelines.", color: "#00d4ff", cta: "Download Guide" },
  { title: "AV-Ready Property Checklist", type: "Checklist", pages: "8 pages", desc: "A practical checklist for commercial real estate owners and developers evaluating their properties for autonomous vehicle infrastructure readiness.", color: "#ffd700", cta: "Download Checklist" },
  { title: "Robotaxi Pickup Zone Design Specification", type: "Technical Spec", pages: "16 pages", desc: "Technical specifications for autonomous vehicle pickup zone design — geometry, camera placement, signage, and access control requirements.", color: "#7b2fff", cta: "Download Spec" },
  { title: "Smart Campus Mobility Playbook", type: "Playbook", pages: "22 pages", desc: "A step-by-step guide for university transportation and facilities teams deploying autonomous shuttles, delivery robots, and drone infrastructure on campus.", color: "#00ff88", cta: "Download Playbook" },
  { title: "Drone Landing Zone Certification Guide", type: "Compliance Guide", pages: "18 pages", desc: "FAA compliance requirements, safety protocols, and certification processes for urban drone landing zones at commercial and residential properties.", color: "#ff9a00", cta: "Download Guide" },
  { title: "State of Autonomous Infrastructure 2025", type: "Annual Report", pages: "40 pages", desc: "The definitive annual survey of autonomous vehicle deployment, drone infrastructure, and curb management across American cities. Data from 200 city transportation directors.", color: "#00d4ff", cta: "Download Report" },
];

const TOOLS = [
  { title: "AV Infrastructure ROI Calculator", desc: "Model the revenue and cost-reduction potential of deploying intelligent curb management at your property or city.", cta: "Use Calculator", color: "#00d4ff" },
  { title: "Curb Zone Assessment Tool", desc: "Input your property details to get an AI-powered assessment of your current curb zone configuration and optimization opportunities.", cta: "Start Assessment", color: "#7b2fff" },
  { title: "Autonomous City Readiness Score", desc: "Answer 20 questions about your city's current infrastructure to receive a readiness score for autonomous vehicle and drone deployment.", cta: "Get Your Score", color: "#00ff88" },
];

export default function ResourcesPage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#000008" }}>
      <Nav />
      <div className="pt-16">

        <section className="py-20 px-6" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.07) 0%, transparent 60%)", borderBottom: "1px solid rgba(0,212,255,0.1)" }}>
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-4">◈ RESOURCES</div>
            <h1 className="font-black text-white mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.02em" }}>
              Autonomous Infrastructure Resources
            </h1>
            <p style={{ fontSize: "1.05rem", color: "rgba(200,216,240,0.6)", lineHeight: 1.7, maxWidth: "52ch" }}>
              Free guides, reports, checklists, and tools for cities, property owners, and operators building autonomous infrastructure.
            </p>
          </div>
        </section>

        {/* Guides & Reports */}
        <section className="py-16 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-3">GUIDES & REPORTS</div>
            <h2 className="font-black text-white mb-10" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "-0.02em" }}>Download free resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {GUIDES.map((g) => (
                <div key={g.title} className="p-6 flex flex-col" style={{ background: "rgba(5,12,25,0.8)", border: `1px solid ${g.color}18` }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[8px] font-bold tracking-widest uppercase px-2 py-0.5" style={{ background: `${g.color}12`, color: g.color, border: `1px solid ${g.color}22` }}>{g.type}</span>
                    <span className="text-[8px]" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>{g.pages}</span>
                  </div>
                  <h3 className="font-black text-white text-sm mb-2" style={{ lineHeight: 1.3 }}>{g.title}</h3>
                  <p className="text-sm mb-4 flex-1" style={{ color: "rgba(200,216,240,0.5)", lineHeight: 1.65 }}>{g.desc}</p>
                  <a
                    href="mailto:demo@curbonomous.com?subject=Resource Download Request"
                    className="px-5 py-2.5 font-black text-[9px] tracking-widest uppercase text-center"
                    style={{ background: `linear-gradient(135deg, ${g.color}, #0066ff)`, color: g.color === "#ffd700" ? "#000" : "#fff" }}
                  >
                    {g.cta} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="py-16 px-6" style={{ background: "rgba(5,12,25,0.4)", borderTop: "1px solid rgba(0,212,255,0.06)" }}>
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-3">INTERACTIVE TOOLS</div>
            <h2 className="font-black text-white mb-10" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "-0.02em" }}>Assess your infrastructure</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {TOOLS.map((t) => (
                <div key={t.title} className="p-6" style={{ background: "rgba(5,12,25,0.8)", border: `1px solid ${t.color}18` }}>
                  <div className="w-2 h-2 rounded-full mb-3" style={{ background: t.color }} />
                  <h3 className="font-black text-white text-sm mb-2">{t.title}</h3>
                  <p className="text-sm mb-4" style={{ color: "rgba(200,216,240,0.5)", lineHeight: 1.65 }}>{t.desc}</p>
                  <a href="mailto:demo@curbonomous.com" className="text-[10px] font-bold tracking-wider" style={{ color: t.color }}>{t.cta} →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick links */}
        <section className="py-16 px-6">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-6">EXPLORE THE PLATFORM</div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Blog", href: "/blog", desc: "Expert insights and analysis" },
                { label: "Glossary", href: "/glossary", desc: "150+ industry terms defined" },
                { label: "Solutions", href: "/solutions/curb-management", desc: "Platform capabilities" },
                { label: "Industries", href: "/industries/cities", desc: "Use cases by sector" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="p-5 block" style={{ background: "rgba(5,12,25,0.7)", border: "1px solid rgba(0,212,255,0.12)" }}>
                  <div className="font-black text-white mb-1">{l.label}</div>
                  <div className="text-[9px]" style={{ color: "rgba(200,216,240,0.4)", fontFamily: "monospace" }}>{l.desc}</div>
                  <div className="mt-2 text-[10px] font-bold tracking-wider" style={{ color: "#00d4ff" }}>Explore →</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
