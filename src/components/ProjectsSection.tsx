import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MapPin, Building2, Users, Award, HardHat } from "lucide-react";

type Project = {
  title: string;
  category: "Industrial" | "Infrastructure" | "Fabrication" | "Energy";
  location: string;
  year: string;
  image: string;
  span: string; // tailwind grid placement classes
  featured?: boolean;
};

const projects: Project[] = [
  { title: "Integrated Steel Plant – Phase III", category: "Industrial",     location: "Angul, Odisha",         year: "2024", image: "/pic1.jpeg", span: "lg:col-span-7 lg:row-span-2", featured: true },
  { title: "Industrial Logistics Park",          category: "Infrastructure", location: "Nagpur, Maharashtra",   year: "2024", image: "/pic2.jpeg", span: "lg:col-span-5" },
  { title: "Heavy Structural Workshop",          category: "Fabrication",    location: "Bhilai, Chhattisgarh",  year: "2024", image: "/pic3.jpg",  span: "lg:col-span-5" },
  { title: "Captive Power Sub-Station",          category: "Energy",         location: "Rajkot, Gujarat",       year: "2023", image: "/pic4.jpg",  span: "lg:col-span-3" },
  { title: "Coke Oven Battery Block",            category: "Industrial",     location: "Koraput, Odisha",       year: "2023", image: "/pic5.jpg",  span: "lg:col-span-3" },
  { title: "Conveyor & Material Handling",       category: "Fabrication",    location: "Pune, Maharashtra",     year: "2024", image: "/pic6.jpeg", span: "lg:col-span-3" },
  { title: "Highway Interchange Project",        category: "Infrastructure", location: "Mumbai, Maharashtra",   year: "2024", image: "/pic7.jpeg", span: "lg:col-span-3" },
  { title: "Captive Solar Array",                category: "Energy",         location: "Jaisalmer, Rajasthan",  year: "2024", image: "/pic8.jpeg", span: "lg:col-span-6" },
];

const filters = ["All", "Industrial", "Infrastructure", "Fabrication", "Energy"] as const;

const ProjectCard = ({ p, idx }: { p: Project; idx: number }) => (
  <motion.article
    layout
    initial={{ opacity: 0, scale: 0.97, y: 16 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.97 }}
    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: idx * 0.04 }}
    className={`relative group rounded-2xl overflow-hidden ${p.span} cursor-pointer min-h-[200px]`}
  >
    <img
      src={p.image}
      alt={p.title}
      className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2200ms] ease-out"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/15 group-hover:from-charcoal/95 transition-all duration-700" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--champagne)/0.18),transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

    {/* Category pill */}
    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-charcoal/55 backdrop-blur-md border border-white/15 text-[9px] uppercase tracking-[0.24em] text-warm-white">
      <span className="w-1 h-1 rounded-full bg-champagne" />
      {p.category}
    </div>

    {/* Architectural corner */}
    <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-warm-white/20 group-hover:border-champagne transition-colors duration-500 pointer-events-none" />

    {/* Bottom info */}
    <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6 flex items-end justify-between gap-4 text-warm-white">
      <div className="flex-1 min-w-0">
        <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.22em] text-champagne mb-1.5">
          <MapPin className="w-3 h-3" strokeWidth={1.6} />
          {p.location}
        </div>
        <h3 className={`font-display ${p.featured ? "text-3xl lg:text-[34px]" : "text-xl lg:text-[22px]"} leading-tight tracking-[-0.01em] truncate`}>
          {p.title}
        </h3>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-[11px] tabular-nums text-warm-white/65">{p.year}</span>
          <span className="w-6 h-px bg-warm-white/30" />
        </div>
      </div>

      <div className="flex-shrink-0 w-10 h-10 rounded-full border border-champagne/50 bg-charcoal/45 backdrop-blur flex items-center justify-center text-champagne group-hover:bg-champagne group-hover:text-warm-white group-hover:border-champagne group-hover:scale-105 transition-all duration-500">
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-0.5" strokeWidth={2} />
      </div>
    </div>
  </motion.article>
);

const StatsCard = () => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.97 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.97 }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    className="relative rounded-2xl overflow-hidden lg:col-start-7 lg:col-span-6 lg:row-start-3 lg:row-span-3 bg-gradient-to-br from-charcoal-deep via-charcoal to-charcoal-soft min-h-[300px]"
  >
    {/* Subtle warm-white grid */}
    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--warm-white)/0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--warm-white)/0.5) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    {/* Champagne radial top-left */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,hsl(var(--champagne)/0.12),transparent_55%)] pointer-events-none" />

    {/* Architectural corner ticks */}
    <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-champagne/40 pointer-events-none" />
    <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-champagne/40 pointer-events-none" />
    <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-champagne/40 pointer-events-none" />
    <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-champagne/40 pointer-events-none" />

    {/* Inner padding wrapper */}
    <div className="relative h-full flex flex-col justify-between p-7 lg:p-9">
      {/* Top eyebrow */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-champagne">
          <span className="w-7 h-px bg-champagne/70" />
          <span>By the Numbers</span>
        </div>
        <div className="text-[9px] uppercase tracking-[0.3em] text-warm-white/40">FY 2024</div>
      </div>

      {/* 2x2 grid */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:gap-x-10 lg:gap-y-10 my-6">
        {[
          { icon: Building2, k: "250+",   v: "Projects Delivered" },
          { icon: Users,     k: "1,000+", v: "Happy Clients" },
          { icon: Award,     k: "13+",    v: "Years of Excellence" },
          { icon: HardHat,   k: "100%",   v: "Safety Commitment" },
        ].map((s, i) => (
          <motion.div
            key={s.v}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
            className="group relative"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="relative">
                <div className="absolute inset-0 bg-champagne/30 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-9 h-9 rounded-lg bg-warm-white/[0.04] border border-champagne/25 flex items-center justify-center text-champagne">
                  <s.icon className="w-4 h-4" strokeWidth={1.6} />
                </div>
              </div>
              <span className="text-[9px] uppercase tracking-[0.28em] text-warm-white/45">{`0${i + 1}`}</span>
            </div>
            <div className="font-display text-[44px] lg:text-[52px] leading-none text-warm-white tracking-[-0.01em]">{s.k}</div>
            <div className="text-[10px] uppercase tracking-[0.24em] text-warm-white/60 mt-2.5">{s.v}</div>
          </motion.div>
        ))}
      </div>

      {/* Footer with ambient gold light */}
      <div className="relative pt-3">
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-12 pointer-events-none">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-[radial-gradient(ellipse_50%_100%_at_bottom,hsl(var(--champagne-glow)/0.55),transparent_70%)] blur-md" />
        </div>
        <div className="relative flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-warm-white/55">
          <span>Verified · Independently audited</span>
          <span>JK Group</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const ProjectsSection = () => {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const list = projects.filter((p) => active === "All" || p.category === active);

  return (
    <section id="projects" className="relative py-16 lg:py-24 bg-warm-white overflow-hidden">
      {/* Architectural blueprint sketch — top-right */}
      <div className="hidden lg:block pointer-events-none absolute top-12 right-0 w-[26rem] h-[26rem] opacity-[0.45]">
        <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
          <g stroke="hsl(var(--champagne))" strokeWidth="0.5" opacity="0.5">
            <path d="M100 360 L100 130 L220 70 L220 290 Z" />
            <path d="M100 130 L220 70 L320 110 L200 170 Z" />
            <path d="M200 170 L200 320 L220 290" />
            <path d="M200 170 L320 110 L320 270 L220 290" />
            <path d="M100 180 L220 120 M100 220 L220 160 M100 260 L220 200 M100 300 L220 240" />
            <path d="M200 210 L320 150 M200 250 L320 190 M200 290 L320 230" />
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-5 lg:px-8 relative">
        {/* === Header === */}
        <div className="grid lg:grid-cols-12 gap-6 mb-10 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4 text-[10px] uppercase tracking-[0.32em] text-champagne-deep">
              <span className="w-7 h-px bg-champagne/70" />
              <span>Selected Work</span>
            </div>
            <h2 className="heading-display text-charcoal text-[clamp(2rem,4.6vw,3.6rem)] leading-[1.05]">
              A portfolio built on <span className="gold-italic italic">trust</span>,<br className="hidden md:block" />
              scale and precision.
            </h2>
            <p className="mt-4 text-charcoal/60 text-[13px] leading-relaxed max-w-md">
              From industrial complexes to critical infrastructure, we deliver projects that
              create impact and stand the test of time.
            </p>
          </div>

          <div className="lg:col-span-5 lg:flex lg:justify-end">
            <div className="inline-flex flex-wrap gap-1 p-1 rounded-full bg-bone border border-charcoal/[0.08]">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`relative px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] transition-colors duration-500 ${
                    active === f ? "text-warm-white" : "text-charcoal/65 hover:text-charcoal"
                  }`}
                >
                  {active === f && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 bg-charcoal rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{f}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* === Bento grid === */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 lg:auto-rows-[200px]">
          <AnimatePresence mode="popLayout">
            {/* Render the first 3 cards (Steel Plant + 2 right) */}
            {list.slice(0, 3).map((p) => (
              <ProjectCard key={p.title} p={p} idx={projects.findIndex((x) => x.title === p.title)} />
            ))}

            {/* Stats card placed explicitly at col-start-7 row-start-3 — only when filter is "All" */}
            {active === "All" && <StatsCard key="stats" />}

            {/* Remaining cards flow into the left side around the stats card */}
            {list.slice(3).map((p) => (
              <ProjectCard key={p.title} p={p} idx={projects.findIndex((x) => x.title === p.title)} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
