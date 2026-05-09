import { Link } from "react-router-dom";
import { Linkedin, Instagram, Twitter, ArrowUpRight, Mail, Phone } from "lucide-react";

const cols = [
  {
    title: "Capabilities",
    links: ["EPC Delivery", "Steel Plant Construction", "Heavy Fabrication", "Infrastructure", "Maintenance", "Power & Energy"],
  },
  {
    title: "Company",
    links: ["About JK Group", "Leadership", "Careers", "Press", "Sustainability"],
  },
  {
    title: "Resources",
    links: ["Project Portfolio", "Case Studies", "Safety Standards", "Compliance"],
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-charcoal-deep text-warm-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage:
          "linear-gradient(hsl(var(--warm-white)/0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--warm-white)/0.5) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] rounded-full bg-champagne/[0.06] blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="pt-14 lg:pt-20 pb-10 border-b border-warm-white/10">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className="text-[10px] uppercase tracking-[0.3em] text-warm-white/50 mb-4">
                JK Group · Infrastructure & Engineering
              </div>
              <div className="font-display text-[clamp(2.4rem,7vw,6rem)] leading-[0.92] text-warm-white">
                Built for the <br />
                <span className="gold-italic italic">long horizon.</span>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <Link to="/contact" className="btn-gold !px-5 !py-2.5 !text-[12px]">
                  Start a project
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <a href="mailto:projects@jkgroup.in" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[12px] border border-warm-white/20 hover:border-champagne hover:text-champagne transition-all duration-500">
                  <Mail className="w-3.5 h-3.5" /> projects@jkgroup.in
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-warm-white/10">
              <div className="text-[10px] uppercase tracking-[0.3em] text-warm-white/50 mb-3">Newsletter</div>
              <p className="text-warm-white/65 text-[13px] leading-relaxed mb-4 max-w-md">
                Quarterly briefings on industrial construction, sector trends and select case studies.
              </p>
              <form className="flex items-stretch gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your work email"
                  className="flex-1 bg-warm-white/5 border border-warm-white/15 focus:border-champagne outline-none rounded-full px-4 py-2.5 text-[13px] placeholder:text-warm-white/40 transition-colors"
                />
                <button className="btn-gold !px-5 !py-2.5 !text-[12px]">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 py-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-warm-white/10 flex items-center justify-center font-display text-sm">JK</div>
              <span className="font-display text-base">JK Group</span>
            </div>
            <p className="text-[12px] text-warm-white/55 leading-relaxed mb-4 max-w-xs">
              Infrastructure & EPC contractor delivering across India since 2008.
            </p>
            <div className="space-y-1.5 text-[12px] text-warm-white/65">
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-champagne transition-colors">
                <Phone className="w-3 h-3" /> +91 98765 43210
              </a>
              <a href="mailto:projects@jkgroup.in" className="flex items-center gap-2 hover:text-champagne transition-colors">
                <Mail className="w-3 h-3" /> projects@jkgroup.in
              </a>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-[9px] uppercase tracking-[0.3em] text-warm-white/50 mb-3.5">{c.title}</div>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[12px] text-warm-white/70 hover:text-champagne transition-colors inline-flex items-center gap-1 group">
                      {l}
                      <ArrowUpRight className="w-2.5 h-2.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-5 border-t border-warm-white/10">
          <div className="text-[11px] text-warm-white/50">
            © {new Date().getFullYear()} JK Group Infrastructure Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            {[Linkedin, Twitter, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded-full border border-warm-white/15 hover:border-champagne hover:text-champagne flex items-center justify-center transition-all">
                <Icon className="w-3 h-3" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4 text-[11px] text-warm-white/50">
            <a href="#" className="hover:text-champagne transition-colors">Privacy</a>
            <a href="#" className="hover:text-champagne transition-colors">Terms</a>
            <a href="#" className="hover:text-champagne transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
