import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin, Clock4, Mail, Phone } from "lucide-react";

const ContactHero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const headlineY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 0.7]);

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
    <>
      {/* === HERO === */}
      <section
        ref={ref}
        className="relative h-[78vh] min-h-[560px] w-full overflow-hidden bg-charcoal-deep"
      >
        {/* Parallax background — heavily darkened for cinematic readability */}
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="absolute inset-0 will-change-transform"
        >
          <img
            src="/pic5.jpg"
            alt="JK Group construction site"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-charcoal-deep/30 via-charcoal/40 to-charcoal-deep/80"
        />

        {/* Left vignette for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep/60 via-charcoal-deep/20 to-transparent" />

        {/* Champagne ambient light + corner shadow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_25%_38%,hsl(var(--champagne)/0.16),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_88%_88%,hsl(var(--charcoal-deep)/0.8),transparent_55%)]" />

        {/* Soft grain + grid */}
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-screen pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--warm-white)/0.55) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--warm-white)/0.55) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />

        {/* Decorative architectural sketch (right) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="hidden lg:block pointer-events-none absolute right-8 top-24 w-[24rem] h-[24rem]"
        >
          <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
            <g stroke="hsl(var(--champagne))" strokeWidth="0.6" opacity="0.7">
              <path d="M80 360 L80 130 L210 60 L210 290 Z" />
              <path d="M80 130 L210 60 L320 100 L190 170 Z" />
              <path d="M190 170 L190 320 L210 290" />
              <path d="M190 170 L320 100 L320 260 L210 290" />
              <path d="M80 180 L210 110 M80 230 L210 160 M80 280 L210 210 M80 330 L210 260" />
              <path d="M190 210 L320 140 M190 250 L320 180 M190 290 L320 220" />
              <circle cx="55" cy="55" r="3" fill="hsl(var(--champagne))" />
              <circle cx="345" cy="345" r="3" fill="hsl(var(--champagne))" />
            </g>
          </svg>
        </motion.div>

        {/* Mouse-parallax orbs */}
        <motion.div
          animate={{ x: mouse.x * 28, y: mouse.y * 18 }}
          transition={{ type: "spring", stiffness: 30, damping: 22 }}
          className="absolute top-1/3 right-[18%] w-72 h-72 rounded-full bg-champagne/[0.16] blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ x: mouse.x * -18, y: mouse.y * -12 }}
          transition={{ type: "spring", stiffness: 28, damping: 24 }}
          className="absolute bottom-1/4 left-[8%] w-72 h-72 rounded-full bg-champagne-deep/[0.14] blur-3xl pointer-events-none"
        />

        {/* Frame ticks */}
        <div className="absolute top-24 left-6 lg:left-8 w-9 h-9 border-t border-l border-warm-white/20 pointer-events-none" />
        <div className="absolute top-24 right-6 lg:right-8 w-9 h-9 border-t border-r border-warm-white/20 pointer-events-none" />
        <div className="absolute bottom-6 left-6 lg:left-8 w-9 h-9 border-b border-l border-warm-white/20 pointer-events-none" />
        <div className="absolute bottom-6 right-6 lg:right-8 w-9 h-9 border-b border-r border-warm-white/20 pointer-events-none" />

        {/* === Content === */}
        <motion.div
          style={{ y: headlineY, opacity: headlineOpacity }}
          className="relative z-10 h-full container mx-auto px-5 lg:px-8 flex flex-col justify-start pt-36 lg:pt-40"
        >
          {/* Top status row */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="absolute top-24 lg:top-28 left-5 lg:left-8 right-5 lg:right-8 flex items-center justify-between gap-4"
          >
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-charcoal-deep/50 backdrop-blur-md border border-warm-white/20 text-[10px] uppercase tracking-[0.3em] text-warm-white/90">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-champagne opacity-75 animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-champagne" />
              </span>
              <span>Available · Mon — Sat</span>
            </div>
            <div className="hidden md:flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-warm-white/70">
              <span>JK Group</span>
              <span className="w-6 h-px bg-warm-white/40" />
              <span>Get in touch</span>
            </div>
          </motion.div>

          {/* Editorial headline grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-8 lg:pb-10">
            <div className="lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                className="flex items-center gap-3 mb-5 text-[10px] uppercase tracking-[0.32em] text-champagne"
              >
                <span className="w-7 h-px bg-champagne/70" />
                <span>Start a conversation</span>
              </motion.div>

              <h1 className="heading-display text-warm-white text-[clamp(2.4rem,6.4vw,6rem)] leading-[0.96]">
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                  className="block"
                >
                  Let's <span className="gold-italic italic">build</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.62 }}
                  className="block flex items-baseline gap-3 lg:gap-5 flex-wrap"
                >
                  <span className="text-warm-white/65">something that endures.</span>
                  <span className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-warm-white/55 font-body font-medium not-italic translate-y-[-0.4em]">
                    <span className="w-8 h-px bg-warm-white/40" />
                    Vol. XVII
                  </span>
                </motion.span>
              </h1>
            </div>

            {/* Right paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.85 }}
              className="lg:col-span-3 lg:pl-5 lg:border-l lg:border-warm-white/15 self-end"
            >
              <p className="text-warm-white/85 text-[13px] leading-relaxed mb-3 max-w-xs">
                Tell us about your project. We respond to qualified enquiries within one working day,
                with a named director on the call.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-champagne/25 border border-champagne/50 text-[10px] uppercase tracking-[0.28em] text-warm-white">
                <span>Confidential by default</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Soft transition gradient at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-warm-white/0 pointer-events-none" />
      </section>

      {/* === Floating contact strip — sits at the seam between hero & form === */}
      <div className="relative z-20 -mt-10 lg:-mt-14 mb-6 lg:mb-10">
        <div className="container mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[20px] overflow-hidden bg-white border border-charcoal/[0.06] shadow-[0_30px_70px_-30px_hsl(220_14%_14%/0.22)]"
          >
            <div className="absolute inset-0 blueprint-grid-fine opacity-30 pointer-events-none" />

            <div className="relative grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-charcoal/[0.06]">
              {[
                { icon: Mail, k: "projects@jkgroup.in", v: "Project enquiries", href: "mailto:projects@jkgroup.in" },
                { icon: Phone, k: "+91 98765 43210", v: "Direct line", href: "tel:+919876543210" },
                { icon: Clock4, k: "Within 24 hrs", v: "Response time" },
                { icon: MapPin, k: "Pune · Bhosari", v: "Headquarters" },
              ].map((item, i) => {
                const inner = (
                  <div className="flex items-center gap-3.5 px-5 py-4 lg:px-6 lg:py-5 group h-full">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-champagne/25 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative w-11 h-11 rounded-xl bg-bone border border-champagne/20 flex items-center justify-center text-champagne-deep">
                        <item.icon className="w-4 h-4" strokeWidth={1.6} />
                      </div>
                    </div>
                    <div className="leading-tight min-w-0">
                      <div className="font-display text-base lg:text-lg text-charcoal truncate">{item.k}</div>
                      <div className="text-[9px] uppercase tracking-[0.26em] text-charcoal/55 mt-1">{item.v}</div>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={i} href={item.href} className="hover:bg-bone/60 transition-colors duration-500">
                    {inner}
                  </a>
                ) : (
                  <div key={i}>{inner}</div>
                );
              })}
            </div>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="hidden lg:flex justify-center mt-8"
          >
            <div className="flex flex-col items-center gap-2 text-charcoal/40">
              <span className="text-[9px] uppercase tracking-[0.4em]">Scroll for the form</span>
              <div className="w-9 h-9 rounded-full border border-charcoal/20 flex items-center justify-center">
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" strokeWidth={1.6} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactHero;
