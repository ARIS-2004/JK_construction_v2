import { motion } from "framer-motion";
import {
  Factory,
  Building2,
  Hammer,
  HardHat,
  Wrench,
  Zap,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Steel Plant Construction",
    eyebrow: "01 — Industrial",
    body: "End-to-end design, civil and structural delivery for integrated steel plants and metallurgical complexes.",
    icon: Factory,
    span: "lg:col-span-7 lg:row-span-2",
    image: "/pic2.jpeg",
    feature: true,
  },
  {
    title: "EPC & Project Management",
    eyebrow: "02 — Delivery",
    body: "Engineering, procurement and construction under a single accountable contract.",
    icon: HardHat,
    span: "lg:col-span-5",
  },
  {
    title: "Heavy Fabrication",
    eyebrow: "03 — Workshops",
    body: "Pressure vessels, conveyors and structural assemblies.",
    icon: Hammer,
    span: "lg:col-span-5",
  },
  {
    title: "Infrastructure Development",
    eyebrow: "04 — Civil",
    body: "Roads, bridges, industrial parks and large-scale public works.",
    icon: Building2,
    span: "lg:col-span-7",
    image: "/pic4.jpg",
  },
  {
    title: "Plant Maintenance",
    eyebrow: "05 — O&M",
    body: "Shutdown, retrofit and long-term plant operations support.",
    icon: Wrench,
    span: "lg:col-span-4",
  },
  {
    title: "Power & Energy",
    eyebrow: "06 — Utilities",
    body: "Captive power, sub-stations and clean-energy infrastructure.",
    icon: Zap,
    span: "lg:col-span-3",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-16 lg:py-24 bg-warm-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-charcoal/15 to-transparent" />
      <div className="absolute right-0 top-1/3 w-[32rem] h-[32rem] rounded-full bg-champagne/[0.05] blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-6 mb-10 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex w-8 h-px bg-champagne" />
              <span className="text-eyebrow">What we build</span>
            </div>
            <h2 className="heading-display text-charcoal text-[clamp(2rem,4.6vw,3.8rem)]">
              A complete spectrum of <span className="gold-italic italic">heavy</span> engineering services.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-charcoal/65 text-sm leading-relaxed">
              Six tightly integrated practices — from raw concept through commissioning. Built around
              one principle: predictable delivery, on-spec, on-time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:auto-rows-[210px]">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              className={`relative col-span-1 ${s.span ?? ""} group rounded-2xl overflow-hidden bg-white border border-charcoal/[0.06] hover:border-champagne/30 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_22px_50px_-22px_hsl(220_14%_14%/0.16)]`}
            >
              {s.image ? (
                <>
                  <div className="absolute inset-0">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-[1800ms] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-charcoal/10" />
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 blueprint-grid-fine opacity-40" />
              )}

              <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-champagne/40 group-hover:border-champagne transition-colors duration-500" />
              <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-champagne/30 group-hover:border-champagne transition-colors duration-500" />

              <div className={`relative h-full p-5 lg:p-6 flex flex-col justify-between min-h-[210px] ${s.image ? "text-warm-white" : "text-charcoal"}`}>
                <div className="flex items-start justify-between gap-3">
                  <div className={`text-[9px] uppercase tracking-[0.3em] ${s.image ? "text-warm-white/70" : "text-charcoal/50"}`}>
                    {s.eyebrow}
                  </div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${s.image ? "bg-white/10 backdrop-blur text-warm-white border border-white/20" : "bg-champagne/15 text-champagne-deep"}`}>
                    <s.icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <h3 className={`font-display ${s.feature ? "text-2xl lg:text-3xl" : "text-xl"} leading-tight mb-2`}>
                    {s.title}
                  </h3>
                  <div className={`gold-line w-10 mb-2.5 ${s.image ? "opacity-90" : ""}`} />
                  <p className={`text-[13px] leading-relaxed max-w-md ${s.image ? "text-warm-white/80" : "text-charcoal/60"}`}>
                    {s.body}
                  </p>

                  <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] tracking-wide opacity-70 group-hover:opacity-100 transition-opacity">
                    Capabilities
                    <ArrowUpRight className="w-3 h-3 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
