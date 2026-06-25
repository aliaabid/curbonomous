import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

const ARTICLES: Record<string, {
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  color: string;
  content: string;
}> = {
  "complete-guide-intelligent-curb-management": {
    title: "The Complete Guide to Intelligent Curb Management",
    description: "Everything you need to know about intelligent curb management — from computer vision deployment to AV zone design, dynamic pricing, and enforcement automation.",
    category: "Curb Management",
    readTime: "12 min",
    date: "Jun 20, 2025",
    color: "#00d4ff",
    content: `
The curb was never designed for what it is being asked to do.

For most of the 20th century, the curb was a simple asset — a stretch of asphalt at the edge of the road where vehicles could briefly stop. It had one job: temporarily hold a car. It required no intelligence, no management, and no infrastructure beyond the painted lines of a parking space.

That era is ending.

## What Is Intelligent Curb Management?

Intelligent curb management uses computer vision, AI, and real-time data infrastructure to monitor, manage, and optimize every use of curbside space — in real time, across every vehicle type, without human intervention.

Unlike traditional parking management, intelligent curb management handles:

- **Autonomous vehicles** — Robotaxi pickup zones, AV staging queues, passenger transfer coordination
- **Delivery robots** — Sidewalk robot staging, route coordination, permit compliance
- **Drones** — Landing zone management, air corridor coordination, cargo handoff
- **Rideshare** — TNC compliance, dwell enforcement, dynamic pricing
- **Standard vehicles** — Commercial loading, passenger drop-off, emergency access

The defining characteristic of intelligent curb management is that it replaces reactive, human-dependent enforcement with proactive, automated intelligence. The system sees everything, acts on violations in milliseconds, and continuously learns from observed patterns.

## Why the Curb Matters Now

Three simultaneous forces are making curb management a critical municipal and commercial priority.

**1. Autonomous systems are arriving faster than policy**

Waymo is operating 100,000+ paid rides per week in multiple US cities. Amazon Prime Air, Wing, and Zipline are expanding urban drone delivery. Serve Robotics and Coco are deploying sidewalk robots in major metros.

None of these systems were designed around existing curb infrastructure — because no intelligent curb infrastructure existed when they were designed. The result is operational chaos: robotaxis blocking lanes, drones landing on improvised pads, delivery robots competing with pedestrians for sidewalk access.

**2. Curb revenue is being left on the table**

The average American city manages its curb with painted lines and a meter reader. In a major metro, the curb is worth billions in potential annual revenue — from AV access fees, dynamic parking pricing, commercial loading time-windows, and delivery zone allocation.

Most of that value is unextracted. A commercial loading zone in downtown Manhattan, priced at a fixed meter rate from 1985, generates a fraction of what it would under dynamic, data-driven management.

**3. Liability exposure is growing**

As autonomous vehicles and delivery robots operate at the curb, incidents will happen. Without documented evidence of what occurred — timestamps, vehicle identification, zone status, camera footage — the liability exposure for cities and property owners is uncapped.

Intelligent curb management creates an immutable documentation layer that protects operators, property owners, and cities from undocumented incident liability.

## The Technology Stack

A complete intelligent curb management deployment consists of four layers:

### Layer 1: Sensing

Edge-AI cameras are deployed at curb level and overhead to capture everything happening in each zone. These cameras:

- Operate at 4K resolution, 30–60 FPS
- Run AI inference on-device with under 100ms latency
- Classify vehicle type, read license plates, and measure dwell time
- Function in all weather and lighting conditions
- Process data locally without requiring cloud round-trips for enforcement decisions

### Layer 2: Analysis

On-device models and cloud processing transform raw camera data into structured intelligence:

- Occupancy: is the zone occupied? By what?
- Compliance: is the vehicle authorized? Is the dwell time within limits?
- Behavior: is the vehicle double-parked? Blocking access? In the wrong zone?
- Prediction: based on historical patterns, what will demand look like in the next 30 minutes?

### Layer 3: Coordination

The management platform acts on analyzed data in real time:

- Triggers enforcement alerts when violations are detected
- Reallocates zone designations based on demand signals
- Dispatches AV pickup coordination signals
- Adjusts pricing based on occupancy and demand
- Routes delivery robots and autonomous vehicles to designated zones

### Layer 4: Documentation

Every curb event is timestamped, classified, and stored in an immutable audit log. This creates:

- Compliance documentation for AV operators and delivery companies
- Evidence records for enforcement and dispute resolution
- Revenue records for dynamic pricing and billing
- Analytics data for zone optimization and city planning

## Key Performance Metrics

Deployments of intelligent curb management consistently show:

| Metric | Typical Improvement |
|--------|-------------------|
| Curb congestion | 30–40% reduction |
| Zone compliance rate | 94%+ |
| Revenue per zone | 25–60% increase |
| Incident documentation | 100% coverage |
| Enforcement response time | <5 minutes vs. 40+ minutes |

## Implementation Guide

### Phase 1: Assessment (Week 1–2)

Map your existing curb zones. Identify the highest-volume and highest-value zones to prioritize for Phase 1 deployment. Typically: commercial loading zones, rideshare zones, any existing AV pickup areas.

Assess camera placement options — ground poles, building facades, and overhead mounts. Model coverage gaps.

### Phase 2: Infrastructure (Week 3–5)

Install edge-AI cameras at identified positions. Configure zone boundaries in the management platform. Set compliance rules (dwell limits, authorized vehicle types, time windows).

Test detection accuracy and calibrate for your specific environment — lighting conditions, vehicle types, pedestrian density.

### Phase 3: Enforcement (Week 6–8)

Go live with real-time monitoring. Begin with alert-only mode (no automated citations) to validate detection accuracy and build operator confidence. Typically 2 weeks before moving to active enforcement.

### Phase 4: Optimization (Ongoing)

Begin dynamic pricing pilots. Analyze zone utilization data. Identify underperforming zones and reconfigure. Add AV zones as operators arrive in your market.

## Conclusion

Intelligent curb management is not a parking technology upgrade. It is the foundational infrastructure layer that makes autonomous city operations possible.

The window to establish this infrastructure before autonomous systems arrive in force is narrow. Cities and properties that deploy intelligent curb management in 2025 will be positioned to capture revenue, manage liability, and attract AV operators. Those that wait will manage chaos.

The curb is the last unseized digital real estate in the autonomous city. The time to manage it intelligently is now.
    `,
  },
  "autonomous-vehicle-infrastructure-cities": {
    title: "Autonomous Vehicle Infrastructure: What Every City Needs Now",
    description: "50+ American cities now have active AV deployments. Most have no dedicated curb infrastructure. This is what needs to change — and how to build it.",
    category: "Autonomous Vehicles",
    readTime: "9 min",
    date: "Jun 18, 2025",
    color: "#7b2fff",
    content: `
Fifty-seven American cities now have active autonomous vehicle operations. Waymo, Zoox, May Mobility, and a growing list of AV operators are running commercial or pilot services in metros from Phoenix to Pittsburgh.

The infrastructure has not kept up.

## The AV Infrastructure Gap

When we talk about AV infrastructure, most people think about roads, connectivity, and mapping. These are solved problems — or at least, problems with funded, ongoing solutions.

The real gap is at the curb.

Autonomous vehicles need to stop. They need to pick up passengers. They need to drop them off. They need staging areas when demand is low and dispatch queues when demand is high. They need to coordinate with other AV operators at the same location.

None of this has been built.

A Waymo vehicle pulling up to a downtown hotel has no dedicated zone. It stops wherever it can find space — in a rideshare zone, a loading zone, or blocking traffic. The hotel has no visibility into its arrival. The city has no record it happened.

This is the curb infrastructure gap, and it is a direct constraint on AV deployment velocity.

## What Cities Need to Build

### 1. Dedicated AV Pickup Zones

Physical curb space designated exclusively for autonomous vehicle pickups and drop-offs. This requires:

- Physical zone marking and signage
- Camera-based occupancy monitoring
- License plate verification for authorized AV operators
- Dwell time enforcement (AVs should clear in under 3 minutes)
- Passenger transfer coordination

Zone sizing: a minimum of 2 vehicle lengths per zone, ideally 3–4. Larger for airports and high-volume locations.

### 2. AV Staging Areas

When AV demand is low, vehicles need somewhere to wait without blocking traffic. Staging areas are typically located:

- In structured parking near high-demand zones
- In dedicated curb segments with time-based activation
- In coordination with parking operators (this is a new revenue stream for garages)

### 3. Multi-Operator Coordination Layer

When Waymo and Zoox are both operating in the same city and both serving the same zones, who has priority? How do zones get allocated? Who enforces compliance?

This requires a neutral coordination platform — not operated by any single AV company — that manages shared zone access, allocates space fairly, and enforces compliance equally across all operators.

This is exactly what Curbonomous provides.

### 4. Compliance Documentation

Every AV pickup and drop-off needs to be documented — operator identity, vehicle ID, zone, timestamp, duration. This is required for:

- City regulatory compliance
- AV operator operating licenses
- Insurance documentation
- Incident investigation

### 5. Emergency Override Protocol

Emergency vehicles need guaranteed curb access. The AV infrastructure system must be able to immediately clear AV zones for emergency vehicle access — automatically, without human intervention.

## The Business Case for Cities

Cities that build AV infrastructure early gain several competitive advantages.

**AV operator preference**: When choosing where to expand, AV operators prefer cities with pre-built infrastructure. It reduces their deployment costs and timeline. San Francisco and Phoenix have benefited from this — Waymo chose both for commercial launch partly because of infrastructure and regulatory readiness.

**Fee revenue**: Cities can charge AV operators per-pickup fees for access to managed zones. At scale, this is a meaningful revenue stream. A city with 10,000 AV pickups per day at $0.50/pickup generates $1.8M per year from a single zone network.

**Reduced congestion**: Managed AV zones reduce the traffic impact of AV pickups by eliminating random stopping and double parking. The overall network effect is positive for traffic flow.

**Incident liability reduction**: Documented zones with camera coverage shift liability exposure from the city to the AV operator in most incident scenarios.

## Implementation Timeline

A city deploying AV infrastructure on a single major corridor can be operational in 8 weeks:

- Weeks 1–2: Zone assessment and design
- Weeks 3–5: Camera installation and platform configuration
- Week 6–7: Calibration and testing with AV operator partners
- Week 8: Go-live

City-wide deployment is phased over 6–12 months, starting with highest-volume zones.

## The Window Is Closing

AV deployment is accelerating. The cities that build curb infrastructure now will be positioned as preferred deployment partners. The cities that wait will be managing an unmanaged deployment with no visibility and no control.

The infrastructure needs to be built before the vehicles arrive in force. In most major metros, that window is measured in months, not years.
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(ARTICLES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES[slug];
  if (!article) return { title: "Article Not Found — Curbonomous" };
  return {
    title: `${article.title} — Curbonomous`,
    description: article.description,
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ARTICLES[slug];

  if (!article) {
    return (
      <main className="relative min-h-screen" style={{ background: "#000008" }}>
        <Nav />
        <div className="pt-32 text-center px-6">
          <h1 className="font-black text-white text-4xl mb-4">Article not found</h1>
          <Link href="/blog" className="text-[#00d4ff]">← Back to Blog</Link>
        </div>
        <Footer />
      </main>
    );
  }

  const paragraphs = article.content.trim().split("\n\n");

  return (
    <main className="relative min-h-screen" style={{ background: "#000008" }}>
      <Nav />
      <div className="pt-16">

        {/* Article header */}
        <section
          className="py-20 px-6 relative overflow-hidden"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${article.color}08 0%, transparent 60%)`,
            borderBottom: "1px solid rgba(0,212,255,0.08)",
          }}
        >
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 mb-8 text-[10px] font-bold tracking-widest uppercase" style={{ color: "rgba(200,216,240,0.4)" }}>
              ← BACK TO BLOG
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[9px] font-bold tracking-widest uppercase px-2 py-1" style={{ background: `${article.color}15`, color: article.color, border: `1px solid ${article.color}33` }}>
                {article.category}
              </span>
              <span className="text-[9px]" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>{article.readTime} read</span>
              <span className="text-[9px]" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>{article.date}</span>
            </div>
            <h1 className="font-black text-white mb-6" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              {article.title}
            </h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(200,216,240,0.6)", lineHeight: 1.7 }}>{article.description}</p>
          </div>
        </section>

        {/* Article body */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="prose-content" style={{ color: "rgba(200,216,240,0.75)", lineHeight: 1.85, fontSize: "1rem" }}>
              {paragraphs.map((block, i) => {
                if (block.startsWith("## ")) {
                  return <h2 key={i} className="font-black text-white mt-12 mb-4" style={{ fontSize: "1.5rem", letterSpacing: "-0.01em" }}>{block.replace("## ", "")}</h2>;
                }
                if (block.startsWith("### ")) {
                  return <h3 key={i} className="font-black text-white mt-8 mb-3" style={{ fontSize: "1.2rem" }}>{block.replace("### ", "")}</h3>;
                }
                if (block.startsWith("- ")) {
                  return (
                    <ul key={i} className="my-4 space-y-2">
                      {block.split("\n").map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: article.color }} />
                          <span dangerouslySetInnerHTML={{ __html: item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong style='color:rgba(200,216,240,0.9)'>$1</strong>") }} />
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.includes("| ")) {
                  const rows = block.split("\n").filter((r) => r.includes("|") && !r.match(/^[\|\-\s]+$/));
                  return (
                    <div key={i} className="my-8 overflow-x-auto">
                      <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
                        {rows.map((row, ri) => (
                          <tr key={ri} style={{ borderBottom: "1px solid rgba(0,212,255,0.1)" }}>
                            {row.split("|").filter((c) => c.trim()).map((cell, ci) => (
                              <td key={ci} className={`py-3 px-4 ${ri === 0 ? "font-black" : ""}`} style={{ color: ri === 0 ? article.color : "rgba(200,216,240,0.6)", fontFamily: ri === 0 ? "monospace" : "inherit", fontSize: ri === 0 ? "0.75rem" : "inherit", letterSpacing: ri === 0 ? "0.08em" : "inherit", textTransform: ri === 0 ? "uppercase" : "inherit" }}>
                                {cell.trim()}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </table>
                    </div>
                  );
                }
                return (
                  <p key={i} className="mb-5" dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, "<strong style='color:rgba(200,216,240,0.9)'>$1</strong>") }} />
                );
              })}
            </div>

            {/* Article CTA */}
            <div className="mt-16 p-8" style={{ background: "rgba(5,12,25,0.9)", border: `1px solid ${article.color}22` }}>
              <div className="text-[10px] font-bold tracking-widest uppercase mb-3" style={{ color: article.color }}>◈ DEPLOY INTELLIGENT INFRASTRUCTURE</div>
              <h3 className="font-black text-white mb-3" style={{ fontSize: "1.3rem" }}>Ready to build the autonomous infrastructure layer?</h3>
              <p className="mb-4 text-sm" style={{ color: "rgba(200,216,240,0.55)", lineHeight: 1.7 }}>
                Schedule a demo and see how Curbonomous manages autonomous vehicles, drones, and delivery robots at your curb.
              </p>
              <a href="mailto:demo@curbonomous.com" className="px-8 py-3 font-black text-xs tracking-widest uppercase rounded-sm inline-block" style={{ background: `linear-gradient(135deg, ${article.color}, #0066ff)`, color: article.color === "#ffd700" ? "#000" : "#fff" }}>
                Schedule Demo
              </a>
            </div>

            {/* More articles */}
            <div className="mt-12">
              <div className="text-[9px] font-bold tracking-widest uppercase mb-6" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>MORE FROM CURBONOMOUS</div>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(ARTICLES).filter(([s]) => s !== slug).slice(0, 2).map(([s, a]) => (
                  <Link key={s} href={`/blog/${s}`} className="p-5 block" style={{ background: "rgba(5,12,25,0.7)", border: `1px solid ${a.color}15` }}>
                    <span className="text-[8px] font-bold tracking-widest uppercase mb-2 block" style={{ color: a.color }}>{a.category}</span>
                    <h4 className="font-black text-white text-sm mb-1" style={{ lineHeight: 1.3 }}>{a.title}</h4>
                    <span className="text-[10px]" style={{ color: a.color }}>Read →</span>
                  </Link>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link href="/blog" className="text-[10px] font-bold tracking-widest uppercase" style={{ color: "rgba(200,216,240,0.3)" }}>
                  View All Articles →
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
