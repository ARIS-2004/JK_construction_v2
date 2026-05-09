import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", scope: "", message: "" });

  return (
    <section id="contact" className="relative py-16 lg:py-24 bg-warm-white overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-charcoal/15 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-6 mb-10 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex w-8 h-px bg-champagne" />
              <span className="text-eyebrow">Start a conversation</span>
            </div>
            <h2 className="heading-display text-charcoal text-[clamp(2rem,4.6vw,3.8rem)]">
              Let's <span className="gold-italic italic">build</span> something <br className="hidden lg:block" />
              that outlasts a generation.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-charcoal/65 text-sm leading-relaxed">
              Tell us about your project. We respond to qualified enquiries within one working day,
              with a named director on the call.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 lg:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[420px]"
          >
            <img src="/pic8.jpeg" alt="JK Group construction" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-charcoal/85 via-charcoal/60 to-charcoal/30" />
            <div className="absolute inset-0 blueprint-grid-fine opacity-30 mix-blend-overlay" />

            <div className="relative h-full p-7 lg:p-8 flex flex-col justify-between text-warm-white">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-warm-white/70 mb-2">Headquarters</div>
                <div className="font-display text-2xl leading-tight">
                  Pune, Maharashtra
                </div>
                <div className="text-warm-white/65 mt-1.5 text-[13px] leading-relaxed max-w-xs">
                  Plot 14, Industrial Estate Road, Bhosari, Pune 411026
                </div>
              </div>

              <div className="space-y-3.5 mt-8">
                {[
                  { icon: Mail, label: "Email", value: "projects@jkgroup.in" },
                  { icon: Phone, label: "Direct line", value: "+91 98765 43210" },
                  { icon: Clock, label: "Hours", value: "Mon — Sat · 09:00 to 18:30 IST" },
                  { icon: MapPin, label: "Sites", value: "9 states across India" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-warm-white/10 backdrop-blur border border-warm-white/15 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[9px] uppercase tracking-[0.28em] text-warm-white/55">{item.label}</div>
                      <div className="text-[13px] mt-0.5">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.08 }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you — our team will respond within 1 working day.");
            }}
            className="lg:col-span-7 relative rounded-2xl bg-white border border-charcoal/[0.06] p-6 lg:p-9"
          >
            <div className="absolute inset-0 blueprint-grid-fine opacity-25 rounded-2xl pointer-events-none" />

            <div className="relative grid sm:grid-cols-2 gap-4">
              {[
                { name: "name", label: "Full name", placeholder: "Aarav Sharma", type: "text" },
                { name: "company", label: "Company", placeholder: "Tata Steel", type: "text" },
                { name: "email", label: "Email", placeholder: "you@company.com", type: "email" },
                { name: "scope", label: "Project scope", placeholder: "EPC / Fabrication / Civil", type: "text" },
              ].map((f) => (
                <div key={f.name} className="relative">
                  <label className="text-[9px] uppercase tracking-[0.26em] text-charcoal/55 mb-1.5 block">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.name as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                    className="w-full bg-bone/60 border border-charcoal/[0.08] focus:border-champagne focus:bg-white outline-none rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal/35 transition-all duration-500 text-[13px]"
                  />
                </div>
              ))}

              <div className="sm:col-span-2">
                <label className="text-[9px] uppercase tracking-[0.26em] text-charcoal/55 mb-1.5 block">
                  Project brief
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about scope, location, indicative budget and timeline…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-bone/60 border border-charcoal/[0.08] focus:border-champagne focus:bg-white outline-none rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal/35 transition-all duration-500 text-[13px] resize-none"
                />
              </div>

              <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                <div className="text-[11px] text-charcoal/55 max-w-xs">
                  By submitting you agree to our privacy policy. We never share project briefs.
                </div>
                <button type="submit" className="btn-primary group !px-5 !py-2.5 !text-[12px]">
                  Send enquiry
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
