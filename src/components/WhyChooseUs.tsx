import { motion } from "framer-motion";
import {
  ShieldCheck,
  Gauge,
  Users,
  Award,
} from "lucide-react";

const points = [
  { icon: ShieldCheck, title: "ISO-grade quality", body: "Every weld and pour documented to international protocols." },
  { icon: Gauge, title: "Schedule-first", body: "240+ projects. 96% on or ahead of schedule." },
  { icon: Users, title: "1,200+ on-site team", body: "Engineers and supervisors across nine states." },
  { icon: Award, title: "Tier-1 client roster", body: "Partner of choice for India's largest industrial operators." },
];

const WhyChooseUs = () => {
  return (
    <section id="why" className="relative py-16 lg:py-24 bg-bone overflow-hidden">
      <div className="pointer-events-none absolute -left-8 -top-4 lg:-top-8 select-none">
        <span className="font-display italic text-[16vw] lg:text-[12vw] leading-none text-charcoal/[0.04] tracking-tighter">
          Excellence
        </span>
      </div>

      <div className="absolute inset-0 blueprint-grid-fine opacity-50 pointer-events-none" />
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full bg-champagne/[0.07] blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[5/6] rounded-2xl overflow-hidden">
              <img src="/pic5.jpg" alt="JK Group on-site engineering" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-6 left-3 sm:-left-6 glass-panel rounded-xl p-4 w-[13rem]"
            >
              <div className="text-eyebrow text-charcoal/60 mb-1.5">Safety record</div>
              <div className="font-display text-3xl text-charcoal leading-none">99.7%</div>
              <div className="text-[11px] text-charcoal/60 mt-1.5">Lost-time injury free</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden sm:block absolute -top-4 -right-4 w-36 aspect-[3/4] rounded-xl overflow-hidden ring-1 ring-white/40 shadow-lg"
            >
              <img src="/pic6.jpeg" alt="Plant detail" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="inline-flex w-8 h-px bg-champagne" />
              <span className="text-eyebrow">Why JK Group</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="heading-display text-charcoal text-[clamp(1.9rem,3.8vw,3.2rem)] mb-4"
            >
              Engineering measured in <span className="gold-italic italic">decades</span>, delivered in seasons.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="text-charcoal/65 text-sm leading-relaxed mb-7 max-w-xl"
            >
              Our edge isn't in any single discipline — it's in the rare ability to integrate civil,
              structural, mechanical and electrical scope under one accountable team.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-3">
              {points.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.05 + i * 0.06 }}
                  className="group relative rounded-xl p-4 bg-white/85 border border-charcoal/[0.05] hover:border-champagne/40 transition-all duration-500 hover:-translate-y-0.5"
                >
                  <div className="w-8 h-8 rounded-full bg-champagne/15 text-champagne-deep flex items-center justify-center mb-3 group-hover:bg-champagne group-hover:text-warm-white transition-colors duration-500">
                    <p.icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="font-display text-base text-charcoal mb-0.5 leading-tight">{p.title}</div>
                  <div className="text-[12px] text-charcoal/55 leading-relaxed">{p.body}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
