import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Building2,
  Users,
  Award,
  HardHat,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-warm-white pt-24 pb-8 lg:pt-28 lg:pb-10"
    >
      {/* Layered ambient background */}
      <div className="absolute inset-0 blueprint-grid opacity-35" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_85%_15%,hsl(var(--champagne)/0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_10%_90%,hsl(var(--charcoal)/0.04),transparent_60%)]" />

      {/* Architectural blueprint sketch — top-right */}
      <div className="hidden lg:block pointer-events-none absolute top-32 right-0 w-[28rem] h-[28rem] opacity-[0.35]">
        <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
          <g stroke="hsl(var(--champagne))" strokeWidth="0.5" opacity="0.6">
            <path d="M120 360 L120 140 L240 80 L240 300 Z" />
            <path d="M120 140 L240 80 L300 110 L180 170 Z" />
            <path d="M180 170 L180 330 L240 300" />
            <path d="M180 170 L300 110 L300 270 L240 300" />
            {/* Floor lines */}
            <path d="M120 200 L240 140 M120 240 L240 180 M120 280 L240 220 M120 320 L240 260" />
            <path d="M180 210 L300 150 M180 250 L300 190 M180 290 L300 230" />
          </g>
        </svg>
      </div>

      {/* Mouse-parallax orbs */}
      <motion.div
        animate={{ x: mouse.x * 28, y: mouse.y * 18 }}
        transition={{ type: "spring", stiffness: 35, damping: 22 }}
        className="absolute top-32 right-[8%] w-72 h-72 rounded-full bg-champagne/[0.10] blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: mouse.x * -16, y: mouse.y * -10 }}
        transition={{ type: "spring", stiffness: 30, damping: 24 }}
        className="absolute bottom-12 left-[4%] w-72 h-72 rounded-full bg-charcoal/[0.04] blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-5 lg:px-8 relative z-10">
        {/* === Top split: headline (left) + meta (right) === */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 mb-8 lg:mb-10">
          {/* Left — eyebrow + headline */}
          <div className="lg:col-span-7 xl:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-4 text-[10px] uppercase tracking-[0.32em] text-charcoal/55"
            >
              <span className="w-7 h-px bg-charcoal/35" />
              <span>Engineering Excellence</span>
              <span className="w-2 h-2 rounded-full border border-charcoal/35" />
              <span>Est. 2008</span>
            </motion.div>

            <h1 className="heading-display text-charcoal text-[clamp(2rem,5.5vw,5.2rem)] leading-[0.94]">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                className="block"
              >
                Building the
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                className="block"
              >
                <span className="gold-italic italic mr-3">infrastructure</span>
                <span className="text-charcoal/35">of</span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="block text-charcoal/40"
              >
                modern India.
              </motion.span>
            </h1>
          </div>

          {/* Right — paragraph + CTAs + mini stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
            className="lg:col-span-5 xl:col-span-4 flex flex-col justify-end"
          >
            <p className="text-charcoal/70 text-[13px] leading-relaxed mb-5 max-w-md">
              JK Group is a full-spectrum infrastructure & EPC contractor — delivering steel plants,
              industrial complexes, fabrication and large-scale engineering projects with precision since 2008.
            </p>

            {/* Buttons row */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-charcoal text-warm-white text-[11px] uppercase tracking-[0.18em] font-medium hover:shadow-[0_18px_36px_-14px_hsl(220_14%_14%/0.55)] hover:-translate-y-0.5 transition-all duration-500"
              >
                Start a Project
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-charcoal/20 text-charcoal text-[11px] uppercase tracking-[0.18em] font-medium hover:border-champagne hover:text-champagne-deep transition-all duration-500"
              >
                View Our Work
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Inline mini stats */}
            <div className="flex items-center gap-4">
              {[
                { icon: Building2, k: "17+", v: "Active Sites" },
                { icon: Users, k: "240+", v: "Projects" },
                { icon: Award, k: "100%", v: "Quality" },
              ].map((s, i) => (
                <div key={s.v} className="flex items-center gap-1.5">
                  {i !== 0 && <span className="w-px h-6 bg-charcoal/15 mr-2" />}
                  <s.icon className="w-3.5 h-3.5 text-champagne-deep" strokeWidth={1.6} />
                  <div className="leading-tight">
                    <div className="font-display text-base text-charcoal">{s.k}</div>
                    <div className="text-[8px] uppercase tracking-[0.2em] text-charcoal/50">{s.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* === Dual image cards === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-6"
        >
          {/* Featured card — bigger */}
          <article className="relative lg:col-span-7 rounded-[24px] overflow-hidden h-[320px] sm:h-[400px] lg:h-[440px] group">
            <motion.img
              animate={{ scale: 1 + Math.abs(mouse.x) * 0.006 }}
              transition={{ type: "spring", stiffness: 40, damping: 22 }}
              src="/pic1.jpeg"
              alt="Integrated Steel Plant"
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2400ms] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[24px]" />

            {/* Architectural corner ticks */}
            <div className="absolute -top-px -left-px w-10 h-10 border-t border-l border-champagne/60 rounded-tl-[24px]" />
            <div className="absolute -bottom-px -right-px w-10 h-10 border-b border-r border-champagne/40 rounded-br-[24px]" />

            {/* Tag */}
            <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-charcoal/60 backdrop-blur-md border border-white/15 text-warm-white text-[10px] uppercase tracking-[0.22em]">
              <span className="text-champagne">★</span> Featured Project
            </div>

            {/* Bottom info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 flex items-end justify-between gap-4 text-warm-white">
              <div className="flex-1">
                <h3 className="font-display text-2xl lg:text-3xl leading-tight mb-2">
                  Integrated Steel Plant <span className="italic text-champagne">— Phase III</span>
                </h3>
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-warm-white/80">
                  <span>Odisha</span>
                  <span className="w-1 h-1 rounded-full bg-warm-white/50" />
                  <span>2.4M tonnes/year</span>
                  <span className="w-1 h-1 rounded-full bg-warm-white/50" />
                  <span>EPC</span>
                </div>
              </div>
              <Link
                to="/projects"
                className="flex-shrink-0 w-12 h-12 rounded-full bg-champagne text-warm-white flex items-center justify-center hover:scale-110 hover:rotate-45 transition-all duration-500 shadow-[0_8px_24px_-8px_hsl(var(--champagne)/0.6)]"
              >
                <ArrowUpRight className="w-4 h-4" strokeWidth={2.2} />
              </Link>
            </div>
          </article>

          {/* Secondary card — smaller */}
          <article className="relative lg:col-span-5 rounded-[24px] overflow-hidden h-[320px] sm:h-[400px] lg:h-[440px] group">
            <motion.img
              animate={{ scale: 1 + Math.abs(mouse.y) * 0.006 }}
              transition={{ type: "spring", stiffness: 40, damping: 22 }}
              src="/pic3.jpg"
              alt="Heavy fabrication structures"
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2400ms] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/15 to-transparent" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[24px]" />

            {/* Tag */}
            <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-charcoal/60 backdrop-blur-md border border-white/15 text-warm-white text-[10px] uppercase tracking-[0.22em]">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" /> Fabrication
            </div>

            {/* Bottom info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 flex items-end justify-between gap-4 text-warm-white">
              <div className="flex-1">
                <h3 className="font-display text-2xl lg:text-3xl leading-tight mb-2">
                  Heavy Structures
                </h3>
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-warm-white/80">
                  <span>Workshops</span>
                  <span className="w-1 h-1 rounded-full bg-warm-white/50" />
                  <span>Pan-India</span>
                </div>
              </div>
              <Link
                to="/projects"
                className="flex-shrink-0 w-12 h-12 rounded-full border border-warm-white/30 bg-white/10 backdrop-blur text-warm-white flex items-center justify-center hover:bg-champagne hover:border-champagne hover:scale-110 hover:rotate-45 transition-all duration-500"
              >
                <ArrowUpRight className="w-4 h-4" strokeWidth={2.2} />
              </Link>
            </div>
          </article>
        </motion.div>

        {/* === Floating stats bar === */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.85 }}
          className="relative rounded-[20px] glass-panel"
        >
          <div className="absolute inset-0 blueprint-grid-fine opacity-25 rounded-[20px] pointer-events-none" />

          <div className="relative grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-charcoal/[0.08]">
            {[
              { icon: Building2, k: "250+", v: "Projects Delivered" },
              { icon: Heart, k: "1,000+", v: "Happy Clients" },
              { icon: Award, k: "13+", v: "Years of Excellence" },
              { icon: HardHat, k: "100%", v: "Safety Commitment" },
            ].map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + i * 0.08 }}
                className="flex items-center gap-4 px-5 py-5 lg:px-7 lg:py-6 group"
              >
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-champagne/15 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-12 h-12 rounded-xl bg-bone border border-champagne/20 flex items-center justify-center text-champagne-deep">
                    <s.icon className="w-5 h-5" strokeWidth={1.6} />
                  </div>
                </div>
                <div className="leading-tight">
                  <div className="font-display text-3xl lg:text-[34px] text-charcoal">{s.k}</div>
                  <div className="text-[10px] uppercase tracking-[0.24em] text-charcoal/55 mt-1">{s.v}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
