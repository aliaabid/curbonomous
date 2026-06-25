import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Autonomous Infrastructure Blog | Smart City & Curb Management Insights — Curbonomous",
  description: "The Curbonomous blog covers autonomous vehicle infrastructure, smart city technology, curb management, drone operations, and the future of urban mobility. Expert insights and industry analysis.",
  keywords: ["autonomous infrastructure blog", "smart city blog", "curb management insights", "autonomous vehicle infrastructure", "urban mobility blog"],
};

const FEATURED = {
  slug: "complete-guide-intelligent-curb-management",
  title: "The Complete Guide to Intelligent Curb Management",
  excerpt: "The curb is the most important real estate in the autonomous city. Here's everything you need to know about managing it intelligently — from computer vision deployment to AV zone design.",
  category: "Curb Management",
  readTime: "12 min",
  date: "Jun 20, 2025",
  color: "#00d4ff",
};

const ARTICLES = [
  { slug: "autonomous-vehicle-infrastructure-cities", title: "Autonomous Vehicle Infrastructure: What Every City Needs Now", excerpt: "50+ American cities now have active AV deployments. Most of them have no dedicated curb infrastructure. Here's what needs to change.", category: "Autonomous Vehicles", readTime: "9 min", date: "Jun 18, 2025", color: "#7b2fff" },
  { slug: "urban-drone-infrastructure-guide", title: "Urban Drone Infrastructure: The Complete Guide for Cities and Properties", excerpt: "Drones are landing in cities. The ground infrastructure that receives them doesn't exist yet. Here's how to build it.", category: "Drone Infrastructure", readTime: "10 min", date: "Jun 15, 2025", color: "#ff9a00" },
  { slug: "robotaxi-pickup-zone-design", title: "Robotaxi Pickup Zone Design: Best Practices for 2025", excerpt: "How do you design a robotaxi pickup zone? The geometry, signage, camera placement, and access protocols that AV operators actually need.", category: "Autonomous Vehicles", readTime: "8 min", date: "Jun 12, 2025", color: "#7b2fff" },
  { slug: "digital-twin-urban-transportation", title: "Urban Digital Twins: What They Are and Why Cities Need Them", excerpt: "A real-time digital model of your city's mobility infrastructure. Here's what urban digital twins do, what they cost, and how to build one.", category: "Digital Twin", readTime: "11 min", date: "Jun 10, 2025", color: "#00ff88" },
  { slug: "av-ready-real-estate", title: "AV-Ready Real Estate: What Commercial Property Owners Need to Know", excerpt: "Autonomous vehicles will reshape commercial real estate values. Properties that prepare now will command premium rents. Here's your action plan.", category: "Real Estate", readTime: "8 min", date: "Jun 8, 2025", color: "#ffd700" },
  { slug: "curb-management-roi", title: "The ROI of Intelligent Curb Management: A Data Analysis", excerpt: "40% congestion reduction. 94% compliance. 6-month ROI. Here's the actual data behind intelligent curb management deployments.", category: "Curb Management", readTime: "7 min", date: "Jun 5, 2025", color: "#00d4ff" },
  { slug: "delivery-robot-cities", title: "How Cities Are Managing Sidewalk Delivery Robots in 2025", excerpt: "Serve Robotics, Coco, Starship, and others are operating in dozens of US cities. How are transportation departments keeping up?", category: "Delivery Robots", readTime: "9 min", date: "Jun 2, 2025", color: "#00ff88" },
  { slug: "future-of-curb-economy", title: "The $500 Billion Curb Economy", excerpt: "The curb is one of the most valuable and least-managed assets in the American city. Here's the economic opportunity nobody is talking about.", category: "Industry Analysis", readTime: "10 min", date: "May 28, 2025", color: "#00d4ff" },
  { slug: "computer-vision-smart-cities", title: "Computer Vision Infrastructure for Smart Cities: What to Deploy and Where", excerpt: "A practical guide to deploying edge-AI camera infrastructure for curb management, AV coordination, and urban sensing.", category: "Computer Vision", readTime: "11 min", date: "May 24, 2025", color: "#0066ff" },
  { slug: "mobility-hub-design", title: "Mobility Hub Design: How to Build the Infrastructure Hub of the Autonomous City", excerpt: "Mobility hubs are where robotaxis, drones, delivery robots, and transit converge. Here's how to design one that actually works.", category: "Mobility Hubs", readTime: "12 min", date: "May 20, 2025", color: "#0066ff" },
];

const CATEGORIES = ["All", "Curb Management", "Autonomous Vehicles", "Drone Infrastructure", "Digital Twin", "Computer Vision", "Real Estate", "Mobility Hubs", "Industry Analysis"];

export default function BlogPage() {
  return (
    <main className="relative min-h-screen" style={{ background: "#000008" }}>
      <Nav />
      <div className="pt-16">

        {/* Header */}
        <section
          className="py-20 px-6"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.07) 0%, transparent 60%)",
            borderBottom: "1px solid rgba(0,212,255,0.1)",
          }}
        >
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-4">◈ CURBONOMOUS BLOG</div>
            <h1 className="font-black text-white mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.02em" }}>
              Intelligence for the Autonomous City
            </h1>
            <p style={{ fontSize: "1.05rem", color: "rgba(200,216,240,0.6)", lineHeight: 1.7, maxWidth: "52ch" }}>
              Research, analysis, and expert perspectives on autonomous vehicle infrastructure, smart city technology, curb management, and the future of urban mobility.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-screen-xl mx-auto">

            {/* Featured */}
            <Link
              href={`/blog/${FEATURED.slug}`}
              className="block mb-12 p-8 transition-all"
              style={{ background: "rgba(5,12,25,0.9)", border: `1px solid ${FEATURED.color}22` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[9px] font-bold tracking-widest uppercase px-2 py-1" style={{ background: `${FEATURED.color}15`, color: FEATURED.color, border: `1px solid ${FEATURED.color}33` }}>
                  FEATURED
                </span>
                <span className="text-[9px] font-bold tracking-widest uppercase" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>{FEATURED.category}</span>
                <span className="text-[9px]" style={{ color: "rgba(200,216,240,0.2)", fontFamily: "monospace" }}>·</span>
                <span className="text-[9px]" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>{FEATURED.readTime} read</span>
              </div>
              <h2 className="font-black text-white mb-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", lineHeight: 1.2, letterSpacing: "-0.01em" }}>
                {FEATURED.title}
              </h2>
              <p style={{ color: "rgba(200,216,240,0.55)", lineHeight: 1.7, maxWidth: "64ch", fontSize: "0.95rem" }}>{FEATURED.excerpt}</p>
              <div className="mt-4 flex items-center gap-4">
                <span className="text-[10px] font-bold tracking-wider" style={{ color: FEATURED.color }}>Read article →</span>
                <span className="text-[9px]" style={{ color: "rgba(200,216,240,0.25)", fontFamily: "monospace" }}>{FEATURED.date}</span>
              </div>
            </Link>

            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-10">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className="px-3 py-1.5 text-[9px] font-bold tracking-widest uppercase transition-all"
                  style={{
                    border: "1px solid rgba(0,212,255,0.2)",
                    color: cat === "All" ? "#00d4ff" : "rgba(200,216,240,0.4)",
                    background: cat === "All" ? "rgba(0,212,255,0.06)" : "transparent",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Articles grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {ARTICLES.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="p-6 block transition-all"
                  style={{ background: "rgba(5,12,25,0.7)", border: `1px solid ${article.color}15` }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[8px] font-bold tracking-widest uppercase px-2 py-0.5" style={{ background: `${article.color}12`, color: article.color, border: `1px solid ${article.color}22` }}>
                      {article.category}
                    </span>
                    <span className="text-[8px]" style={{ color: "rgba(200,216,240,0.25)", fontFamily: "monospace" }}>{article.readTime}</span>
                  </div>
                  <h3 className="font-black text-white mb-2" style={{ fontSize: "1rem", lineHeight: 1.3 }}>{article.title}</h3>
                  <p className="text-sm mb-4" style={{ color: "rgba(200,216,240,0.5)", lineHeight: 1.65 }}>{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-wider" style={{ color: article.color }}>Read →</span>
                    <span className="text-[9px]" style={{ color: "rgba(200,216,240,0.2)", fontFamily: "monospace" }}>{article.date}</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Newsletter CTA */}
            <div className="mt-16 p-8 text-center" style={{ background: "rgba(5,12,25,0.9)", border: "1px solid rgba(0,212,255,0.15)" }}>
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-3">◈ THE INTELLIGENCE BRIEF</div>
              <h2 className="font-black text-white mb-3" style={{ fontSize: "1.5rem", letterSpacing: "-0.01em" }}>
                Get the autonomous infrastructure briefing
              </h2>
              <p style={{ color: "rgba(200,216,240,0.5)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                Weekly insights on AV deployment, drone infrastructure, smart city policy, and curb management. 4,200+ readers.
              </p>
              <div className="flex flex-wrap justify-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 text-sm min-w-0"
                  style={{ background: "rgba(0,0,8,0.8)", border: "1px solid rgba(0,212,255,0.2)", color: "rgba(200,216,240,0.8)", outline: "none", fontFamily: "monospace" }}
                />
                <button className="px-6 py-3 font-black text-xs tracking-widest uppercase flex-shrink-0" style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)", color: "#000" }}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
