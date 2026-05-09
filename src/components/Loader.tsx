import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete?: () => void;
  duration?: number;
}

const Loader = ({ onComplete, duration = 2200 }: LoaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onComplete?.(), 700);
    }, duration);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.77, 0, 0.175, 1] } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-warm-white overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0.25] }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            className="absolute inset-0 blueprint-grid"
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsl(var(--champagne)/0.10),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_85%,hsl(var(--charcoal)/0.06),transparent_65%)]" />

          {Array.from({ length: 14 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 rounded-full bg-champagne/55"
              initial={{
                x: `${Math.random() * 100}vw`,
                y: `${Math.random() * 100}vh`,
                opacity: 0,
              }}
              animate={{
                y: [`${Math.random() * 100}vh`, `${Math.random() * 100 - 30}vh`],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                delay: Math.random() * 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1] }}
            className="absolute top-10 left-10 right-10 h-px bg-gradient-to-r from-transparent via-charcoal/20 to-transparent origin-center"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
            className="absolute bottom-10 left-10 right-10 h-px bg-gradient-to-r from-transparent via-charcoal/20 to-transparent origin-center"
          />

          <div className="relative z-10 flex flex-col items-center">
            <div className="relative w-32 h-32 flex items-center justify-center mb-8">
              <svg
                className="absolute inset-0 w-full h-full animate-spin-slow"
                viewBox="0 0 200 200"
                fill="none"
              >
                <defs>
                  <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--champagne-deep))" stopOpacity="0" />
                    <stop offset="50%" stopColor="hsl(var(--champagne))" stopOpacity="1" />
                    <stop offset="100%" stopColor="hsl(var(--champagne-light))" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="92" stroke="hsl(var(--charcoal)/0.08)" strokeWidth="1" />
                <circle
                  cx="100"
                  cy="100"
                  r="92"
                  stroke="url(#ringGrad)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="180 600"
                />
              </svg>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 22, ease: "linear", repeat: Infinity }}
                className="absolute inset-3 rounded-full border border-dashed border-champagne/30"
              />

              <div className="absolute inset-6 rounded-full bg-champagne/20 blur-2xl" />

              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                className="relative z-10"
              >
                <div className="font-display text-[52px] font-medium text-charcoal leading-none tracking-tight">
                  <span className="relative">
                    JK
                    <span
                      className="absolute inset-0 overflow-hidden bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "linear-gradient(120deg, transparent 35%, hsl(var(--champagne-glow)) 50%, transparent 65%)",
                        backgroundSize: "200% 100%",
                        animation: "loader-shimmer 2.6s ease-in-out infinite",
                      }}
                    >
                      JK
                    </span>
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
              className="text-center"
            >
              <div className="text-eyebrow text-charcoal/60 mb-1.5">Infrastructure & Engineering</div>
              <div className="font-display text-lg text-charcoal tracking-[0.22em] uppercase">
                JK <span className="gold-italic italic">Group</span>
              </div>
            </motion.div>

            <div className="relative mt-9 w-44 h-px bg-charcoal/10 overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-champagne-deep via-champagne to-champagne-light"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-2.5 text-[9px] uppercase tracking-[0.4em] text-charcoal/40 tabular-nums"
            >
              {String(Math.round(progress * 100)).padStart(3, "0")}
            </motion.div>
          </div>

          <div className="absolute bottom-5 left-5 text-[9px] uppercase tracking-[0.3em] text-charcoal/40">
            EST. 2008
          </div>
          <div className="absolute bottom-5 right-5 text-[9px] uppercase tracking-[0.3em] text-charcoal/40">
            INDIA
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
