import { useEffect } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  enabled?: boolean;
}

const SmoothScroll = ({ enabled = true }: SmoothScrollProps) => {
  useEffect(() => {
    if (!enabled) return;

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [enabled]);

  return null;
};

export default SmoothScroll;
