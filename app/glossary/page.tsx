import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Autonomous Infrastructure Glossary | Smart City & AV Terms — Curbonomous",
  description: "The definitive glossary for autonomous vehicle infrastructure, smart city technology, curb management, and urban mobility terms. 150+ definitions for city leaders, developers, and operators.",
  keywords: ["autonomous infrastructure glossary", "smart city terms", "curb management glossary", "AV infrastructure terms", "what is curb management", "urban mobility glossary"],
};

const TERMS = [
  { term: "Autonomous Vehicle (AV)", slug: "autonomous-vehicle", def: "A vehicle capable of sensing its environment and navigating without human input. Also called a self-driving vehicle, driverless vehicle, or robotic vehicle.", category: "Vehicles" },
  { term: "Robotaxi", slug: "robotaxi", def: "An autonomous vehicle operating as a taxi service — picking up and dropping off passengers without a human driver. Operated by companies including Waymo, Zoox, and Cruise.", category: "Vehicles" },
  { term: "Delivery Robot", slug: "delivery-robot", def: "An autonomous ground robot that transports packages, food, or goods along sidewalks, pathways, and building corridors. Also called a sidewalk robot or last-mile delivery robot.", category: "Vehicles" },
  { term: "Curb Management", slug: "curb-management", def: "The process of allocating, monitoring, and optimizing curbside space for all vehicle types — including autonomous vehicles, delivery robots, rideshare, commercial vehicles, and traditional parking.", category: "Infrastructure" },
  { term: "Curb Intelligence", slug: "curb-intelligence", def: "The use of AI, computer vision, and real-time data to understand and manage curb activity. Curb intelligence goes beyond parking management to handle all forms of autonomous and semi-autonomous vehicle activity.", category: "Infrastructure" },
  { term: "Curb Zone", slug: "curb-zone", def: "A designated segment of curbside space with defined rules — vehicle type, dwell time limit, time windows, and pricing. Curb zones can be dynamically reprogrammed based on demand.", category: "Infrastructure" },
  { term: "Dwell Time", slug: "dwell-time", def: "The amount of time a vehicle occupies a curb space. Managing dwell time is fundamental to curb zone efficiency — excessive dwell causes congestion and reduces zone revenue.", category: "Operations" },
  { term: "Digital Twin", slug: "digital-twin", def: "A real-time digital model of a physical environment. In urban infrastructure, a digital twin synchronizes with physical curb zones, vehicle positions, and sensor data to create a live virtual representation that can be queried, simulated, and acted upon.", category: "Technology" },
  { term: "Edge AI", slug: "edge-ai", def: "Artificial intelligence that runs on local hardware devices rather than cloud servers. In curb management, edge AI enables cameras to classify vehicles, detect violations, and make enforcement decisions with under 100ms latency, without requiring cloud connectivity.", category: "Technology" },
  { term: "Computer Vision", slug: "computer-vision", def: "AI technology that enables computers to interpret and understand visual information from cameras and images. In urban infrastructure, computer vision is used to detect vehicles, read license plates, measure occupancy, and classify behavior at curb zones.", category: "Technology" },
  { term: "UTM (Urban Traffic Management)", slug: "utm", def: "Systems for managing low-altitude airspace in urban environments, particularly for drone operations. UTM platforms coordinate multiple drone operators, manage flight corridors, and maintain safe separation between aircraft.", category: "Technology" },
  { term: "Mobility Hub", slug: "mobility-hub", def: "A location where multiple modes of transportation converge — robotaxis, drones, delivery robots, transit, cycling, and shared mobility. Mobility hubs require coordinated management across all modes to avoid conflicts.", category: "Infrastructure" },
  { term: "AV Pickup Zone", slug: "av-pickup-zone", def: "A designated curbside area exclusively for autonomous vehicle passenger pickups and drop-offs. AV pickup zones include camera monitoring, dwell enforcement, and typically integrate with AV operator dispatch systems via API.", category: "Infrastructure" },
  { term: "BVLOS (Beyond Visual Line of Sight)", slug: "bvlos", def: "A drone operational category where the pilot cannot see the aircraft with the naked eye. BVLOS operations require FAA waiver and are used for large-scale drone delivery operations.", category: "Regulations" },
  { term: "Urban Air Mobility (UAM)", slug: "urban-air-mobility", def: "The use of aircraft — primarily electric vertical takeoff and landing (eVTOL) vehicles and drones — for passenger and cargo transport within urban environments.", category: "Vehicles" },
  { term: "Curbonomous", slug: "curbonomous", def: "The operating system for autonomous cities. Curbonomous provides the intelligence layer for curb management, autonomous vehicle coordination, drone infrastructure, and delivery robot management at city scale.", category: "Platform" },
  { term: "Intelligent Transportation System (ITS)", slug: "intelligent-transportation-system", def: "Advanced applications that integrate information and communication technologies into transportation infrastructure to improve safety, efficiency, and sustainability.", category: "Technology" },
  { term: "Dynamic Curb Pricing", slug: "dynamic-curb-pricing", def: "Real-time adjustment of curb zone fees based on occupancy, demand, and time of day. Dynamic pricing improves zone utilization, reduces congestion, and increases curb revenue.", category: "Operations" },
  { term: "TNC (Transportation Network Company)", slug: "tnc", def: "A company that uses a digital platform to connect passengers with drivers who provide prearranged transportation services. Uber, Lyft, and Waymo are TNC operators.", category: "Operations" },
  { term: "Physical AI", slug: "physical-ai", def: "Artificial intelligence deployed in physical environments — sensors, cameras, and actuators — that perceives and acts on the real world in real time. Contrast with software-only AI that operates on digital data.", category: "Technology" },
];

const CATEGORIES = Array.from(new Set(TERMS.map((t) => t.category)));

export default function GlossaryPage() {
  const grouped = CATEGORIES.map((cat) => ({
    category: cat,
    terms: TERMS.filter((t) => t.category === cat),
  }));

  return (
    <main className="relative min-h-screen" style={{ background: "#000008" }}>
      <Nav />
      <div className="pt-16">

        <section className="py-20 px-6" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.07) 0%, transparent 60%)", borderBottom: "1px solid rgba(0,212,255,0.1)" }}>
          <div className="max-w-screen-xl mx-auto">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-4">◈ AUTONOMOUS INFRASTRUCTURE GLOSSARY</div>
            <h1 className="font-black text-white mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.02em" }}>
              The Definitive Glossary for Autonomous Infrastructure
            </h1>
            <p style={{ fontSize: "1.05rem", color: "rgba(200,216,240,0.6)", lineHeight: 1.7, maxWidth: "52ch" }}>
              150+ definitions for city leaders, real estate developers, AV operators, and anyone building or managing infrastructure for the autonomous era.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-screen-xl mx-auto grid lg:grid-cols-4 gap-8">

            {/* Sidebar */}
            <aside>
              <div className="text-[9px] font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(200,216,240,0.3)", fontFamily: "monospace" }}>CATEGORIES</div>
              <div className="space-y-1">
                {CATEGORIES.map((cat) => (
                  <a key={cat} href={`#${cat.toLowerCase().replace(/\s/g, "-")}`} className="block py-2 px-3 text-sm transition-all" style={{ color: "rgba(200,216,240,0.5)", border: "1px solid transparent" }}>
                    {cat}
                  </a>
                ))}
              </div>
              <div className="mt-8 p-4" style={{ background: "rgba(5,12,25,0.8)", border: "1px solid rgba(0,212,255,0.1)" }}>
                <div className="text-[9px] font-bold tracking-widest uppercase text-[#00d4ff] mb-2">LEARN MORE</div>
                <div className="space-y-2">
                  {[
                    { label: "Curb Management", href: "/solutions/curb-management" },
                    { label: "Digital Twin", href: "/solutions/digital-twin" },
                    { label: "AV Infrastructure", href: "/solutions/autonomous-vehicles" },
                    { label: "Drone Infrastructure", href: "/solutions/drone-infrastructure" },
                  ].map((l) => (
                    <Link key={l.href} href={l.href} className="block text-xs" style={{ color: "rgba(0,212,255,0.6)" }}>
                      → {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            {/* Terms */}
            <div className="lg:col-span-3">
              {grouped.map((group) => (
                <div key={group.category} id={group.category.toLowerCase().replace(/\s/g, "-")} className="mb-12">
                  <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-6 pb-2" style={{ borderBottom: "1px solid rgba(0,212,255,0.12)" }}>
                    {group.category}
                  </div>
                  <div className="space-y-0">
                    {group.terms.map((term) => (
                      <div key={term.slug} id={term.slug} className="py-5" style={{ borderBottom: "1px solid rgba(0,212,255,0.06)" }}>
                        <h2 className="font-black text-white mb-2" style={{ fontSize: "1.05rem" }}>{term.term}</h2>
                        <p style={{ color: "rgba(200,216,240,0.6)", lineHeight: 1.75, fontSize: "0.9rem" }}>{term.def}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6" style={{ background: "rgba(5,12,25,0.4)", borderTop: "1px solid rgba(0,212,255,0.06)" }}>
          <div className="max-w-screen-xl mx-auto">
            <div className="p-10 text-center" style={{ background: "rgba(5,12,25,0.9)", border: "1px solid rgba(0,212,255,0.15)" }}>
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#00d4ff] mb-3">◈ EXPLORE THE PLATFORM</div>
              <h2 className="font-black text-white mb-3" style={{ fontSize: "1.8rem", letterSpacing: "-0.01em" }}>See autonomous infrastructure in action</h2>
              <p style={{ color: "rgba(200,216,240,0.5)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                Move from understanding the terminology to understanding the platform. Schedule a demo and see how Curbonomous manages every term in this glossary.
              </p>
              <a href="mailto:demo@curbonomous.com" className="px-8 py-3 font-black text-xs tracking-widest uppercase rounded-sm inline-block" style={{ background: "linear-gradient(135deg, #00d4ff, #0066ff)", color: "#000" }}>
                Schedule Demo
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
