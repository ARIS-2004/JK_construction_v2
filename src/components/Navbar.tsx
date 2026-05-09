import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "/", section: "home" },
  { name: "About", href: "/#about", section: "about" },
  { name: "Services", href: "/#services", section: "services" },
  { name: "Projects", href: "/#projects", section: "projects" },
  { name: "Gallery", href: "/#why", section: "why" },
  { name: "Contact", href: "/contact", section: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");
  const location = useLocation();
  const navigate = useNavigate();
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (location.pathname === "/") {
        const sections = ["home", "services", "projects", "why", "about", "contact"];
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.getBoundingClientRect().top < 200) {
            setActive(sections[i]);
            break;
          }
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  // Magnetic CTA
  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      const dist = Math.hypot(x, y);
      if (dist < 130) {
        el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      } else {
        el.style.transform = "translate(0,0)";
      }
    };
    const onLeave = () => (el.style.transform = "translate(0,0)");
    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const handleSectionLink = (e: React.MouseEvent, href: string, section: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      setOpen(false);
      if (location.pathname === "/") {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/", { state: { scrollTo: section } });
      }
    } else {
      setOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-warm-white/85 backdrop-blur-2xl border-b border-charcoal/[0.06] shadow-[0_2px_24px_-12px_hsl(220_14%_14%/0.10)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-5 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "h-16" : "h-20"}`}>
            {/* === Logo === */}
            <Link to="/" className="flex items-center group">
              <img src="/logo.png" alt="JK Group" className="h-10 w-auto object-contain" />
            </Link>

            {/* === Centered links === */}
            <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {links.map((l) => {
                const isActive = active === l.section && location.pathname === "/";
                return (
                  <Link
                    key={l.name}
                    to={l.href}
                    onClick={(e) => handleSectionLink(e, l.href, l.section)}
                    className="relative px-4 py-2 group"
                  >
                    <span className={`relative z-10 text-[12px] uppercase tracking-[0.18em] font-medium transition-colors duration-300 ${
                      isActive ? "text-champagne-deep" : "text-charcoal/75 group-hover:text-charcoal"
                    }`}>
                      {l.name}
                    </span>

                    {/* Active underline */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-underline"
                        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-7 h-px bg-champagne"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}

                    {/* Hover underline */}
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-px bg-champagne/60 group-hover:w-7 transition-all duration-500" />
                  </Link>
                );
              })}
            </nav>

            {/* === Right side === */}
            <div className="flex items-center gap-3">
              {/* Gold gradient CTA */}
              <Link
                ref={ctaRef}
                to="/contact"
                className="hidden sm:inline-flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full text-warm-white text-[11px] uppercase tracking-[0.18em] font-medium relative overflow-hidden group transition-shadow duration-500"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--champagne-deep)) 0%, hsl(var(--champagne)) 50%, hsl(var(--champagne-light)) 100%)",
                  boxShadow: "0 10px 28px -10px hsl(var(--champagne) / 0.55)",
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-champagne-light via-champagne to-champagne-deep opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative">Start a Project</span>
                <span className="relative w-7 h-7 rounded-full bg-warm-white/95 text-champagne-deep flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight className="w-3 h-3" strokeWidth={2.2} />
                </span>
              </Link>

              {/* Hamburger trigger */}
              <button
                onClick={() => setOpen(!open)}
                className="w-11 h-11 rounded-full border border-charcoal/15 hover:border-champagne hover:bg-champagne/5 flex items-center justify-center text-charcoal transition-all duration-500"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={open ? "close" : "open"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Subtle gold gradient line at the very bottom of the navbar */}
        <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`} />
      </motion.header>

      {/* Drawer (works on all screen sizes) */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-charcoal/30 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[420px] bg-warm-white shadow-2xl overflow-y-auto"
            >
              <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />

              <div className="relative p-8 lg:p-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-12">
                  <div className="text-eyebrow text-charcoal/55">Menu</div>
                  <button
                    onClick={() => setOpen(false)}
                    className="w-10 h-10 rounded-full border border-charcoal/15 hover:border-champagne flex items-center justify-center text-charcoal transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <nav className="flex-1 space-y-1">
                  {links.map((l, i) => {
                    const isActive = active === l.section && location.pathname === "/";
                    return (
                      <motion.div
                        key={l.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Link
                          to={l.href}
                          onClick={(e) => handleSectionLink(e, l.href, l.section)}
                          className="group flex items-baseline justify-between py-4 border-b border-charcoal/10 hover:border-champagne/40 transition-colors"
                        >
                          <span className="flex items-baseline gap-3">
                            <span className="text-[10px] tabular-nums text-charcoal/40 group-hover:text-champagne-deep transition-colors">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className={`font-display text-3xl transition-colors ${isActive ? "text-champagne-deep italic" : "text-charcoal group-hover:text-champagne-deep"}`}>
                              {l.name}
                            </span>
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-charcoal/40 group-hover:text-champagne-deep group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <div className="mt-10 pt-6 border-t border-charcoal/10">
                  <div className="text-eyebrow text-charcoal/55 mb-3">Get in touch</div>
                  <a href="mailto:projects@jkgroup.in" className="block font-display text-xl text-charcoal hover:text-champagne-deep transition-colors">
                    projects@jkgroup.in
                  </a>
                  <a href="tel:+919876543210" className="block text-sm text-charcoal/65 mt-1 hover:text-charcoal transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
