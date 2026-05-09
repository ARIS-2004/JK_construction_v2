import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const NotFound = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-warm-white overflow-hidden pt-24 pb-12">
      <div className="absolute inset-0 blueprint-grid opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,hsl(var(--champagne)/0.10),transparent_60%)]" />

      <div className="relative text-center max-w-xl px-6">
        <div className="text-eyebrow text-charcoal/60 mb-4">Error 404</div>
        <div className="font-display text-[clamp(5rem,18vw,12rem)] leading-none text-charcoal">
          4<span className="gold-italic italic">0</span>4
        </div>
        <p className="mt-4 text-charcoal/65 max-w-sm mx-auto">
          The blueprint for this page hasn't been drafted. Let's take you back to solid ground.
        </p>
        <Link to="/" className="btn-primary mt-8 inline-flex">
          Return home <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
