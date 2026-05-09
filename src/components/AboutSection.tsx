import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const milestones = [
  { year: "2008", title: "Founded", body: "JK Group established as a structural fabrication shop in Pune." },
  { year: "2013", title: "First EPC contract", body: "Awarded turnkey delivery of a captive power utility block." },
  { year: "2018", title: "₹1,000 Cr milestone", body: "Crossed cumulative project value of ₹1,000 crore." },
  { year: "2022", title: "Pan-India footprint", body: "Active sites across nine Indian states." },
  { year: "2024", title: "240+ projects", body: "Delivered over 240 industrial and infrastructure projects." },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-16 lg:py-24 bg-warm-white overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-charcoal/15 to-transparent" />
      <div className="absolute -left-16 top-1/3 w-[28rem] h-[28rem] rounded-full bg-champagne/[0.05] blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative lg:sticky lg:top-24 lg:self-start"
          >
            <div className="relative aspect-[5/6] rounded-2xl overflow-hidden">
              <img src="/pic7.jpeg" alt="JK Group leadership" className="w-full h-full object-cover" />
              <div className="absolute inset-0 mix-blend-multiply opacity-25 blueprint-grid pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />

              <div className="absolute inset-2.5 border border-warm-white/40 rounded-xl pointer-events-none" />
              <div className="absolute top-5 left-5 text-warm-white/80 text-[9px] uppercase tracking-[0.3em]">JK Group / Est. 2008</div>
              <div className="absolute bottom-5 left-5 right-5 text-warm-white">
                <div className="font-display italic text-xl leading-snug">"Built to outlast generations."</div>
                <div className="text-[9px] uppercase tracking-[0.3em] mt-1.5 opacity-80">— Founding principle</div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 grid grid-cols-2 gap-3"
            >
              <div className="rounded-xl bg-bone p-3.5 border border-charcoal/[0.05]">
                <div className="text-[9px] uppercase tracking-[0.28em] text-charcoal/55">Engineers</div>
                <div className="font-display text-2xl text-charcoal mt-0.5">320+</div>
              </div>
              <div className="rounded-xl bg-bone p-3.5 border border-charcoal/[0.05]">
                <div className="text-[9px] uppercase tracking-[0.28em] text-charcoal/55">Equipment</div>
                <div className="font-display text-2xl text-charcoal mt-0.5">180+</div>
              </div>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="inline-flex w-8 h-px bg-champagne" />
              <span className="text-eyebrow">Our story</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="heading-display text-charcoal text-[clamp(2rem,4vw,3.4rem)] mb-5"
            >
              Seventeen years. <br />
              <span className="text-charcoal/40">One <span className="gold-italic italic">obsession</span> — precision.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="space-y-3 text-charcoal/65 text-sm leading-relaxed max-w-2xl mb-8"
            >
              <p>
                JK Group began in 2008 with a single fabrication shop and an unfashionable belief — that
                Indian industrial construction could match the discipline of the world's best.
              </p>
              <p>
                Seventeen years on, we operate as a fully integrated EPC and infrastructure partner,
                delivering projects from blueprint to commissioning under one accountable team.
              </p>
            </motion.div>

            <div className="relative pl-5">
              <div className="absolute left-1.5 top-1.5 bottom-1.5 w-px bg-gradient-to-b from-champagne/60 via-charcoal/15 to-transparent" />
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="relative pb-5 last:pb-0"
                >
                  <div className="absolute -left-[15px] top-1 w-2.5 h-2.5 rounded-full bg-warm-white border-2 border-champagne" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-5">
                    <div className="font-display text-base text-champagne-deep w-14 flex-shrink-0">{m.year}</div>
                    <div>
                      <div className="font-display text-base text-charcoal leading-tight">{m.title}</div>
                      <div className="text-[12px] text-charcoal/55 mt-0.5 max-w-md leading-relaxed">{m.body}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/about"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-4 inline-flex items-center gap-2.5 text-[13px] tracking-wide text-charcoal hover:text-champagne-deep transition-colors group"
            >
              <span className="border-b border-charcoal/30 group-hover:border-champagne pb-0.5">Read the full company brief</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
