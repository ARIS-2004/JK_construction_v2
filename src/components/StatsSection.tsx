import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Stat = { label: string; value: number; suffix?: string; prefix?: string };

const stats: Stat[] = [
  { label: "Years of Practice", value: 17, suffix: "+" },
  { label: "Projects Delivered", value: 240, suffix: "+" },
  { label: "Crore in Project Value", value: 4200, prefix: "₹" },
  { label: "On-site Workforce", value: 1200, suffix: "+" },
];

const Counter = ({ to, duration = 2, prefix = "", suffix = "" }: { to: number; duration?: number; prefix?: string; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / (duration * 1000));
      setVal(Math.round(ease(p) * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}{val.toLocaleString("en-IN")}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="relative py-14 lg:py-18 bg-charcoal text-warm-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--champagne)/0.18),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,hsl(var(--champagne-light)/0.10),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage:
          "linear-gradient(hsl(var(--warm-white)/0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--warm-white)/0.5) 1px, transparent 1px)",
        backgroundSize: "70px 70px",
      }} />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-5 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex w-8 h-px bg-champagne" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-warm-white/60">By the numbers</span>
            </div>
            <h2 className="heading-display text-warm-white text-[clamp(1.7rem,3.6vw,2.8rem)] max-w-2xl">
              Operations measured in <span className="gold-italic italic">tonnes</span>, kilometres and years.
            </h2>
          </div>
          <div className="text-warm-white/60 text-[12px] max-w-sm leading-relaxed">
            Numbers as of fiscal 2024 — verified by independent commercial audit.
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-warm-white/5 backdrop-blur-md border border-warm-white/10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="relative bg-charcoal/40 backdrop-blur-md p-5 lg:p-6"
            >
              <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
              <div className="font-display text-4xl lg:text-5xl text-warm-white leading-none">
                <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-[10px] uppercase tracking-[0.26em] text-warm-white/55">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
