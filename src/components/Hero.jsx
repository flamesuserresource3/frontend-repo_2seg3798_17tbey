import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const mapTargetToSection = (name) => {
    const n = (name || '').toLowerCase();
    if (/(key|button)[ _-]*1/.test(n)) return 'services';
    if (/(key|button)[ _-]*2/.test(n)) return 'approach';
    if (/(key|button)[ _-]*3/.test(n)) return 'contact';
    if (/(key|button)[ _-]*4/.test(n)) return 'top';
    return null;
  };

  const handleMouseDown = (e) => {
    const targetName = e?.target?.name;
    const section = mapTargetToSection(targetName);
    if (section) scrollTo(section);
  };

  return (
    <section id="top" className="relative min-h-[88vh] sm:min-h-[92vh] overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/sHDPSbszZja1qap3/scene.splinecode"
          onMouseDown={handleMouseDown}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Decorative gradients that do not block interactions */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-400/25 blur-3xl" />
        <div className="absolute top-40 -right-24 h-72 w-72 rounded-full bg-indigo-400/25 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 text-white text-xs font-medium backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            New-age software + AI studio
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            Tap a key to explore. Futuristic products for modern brands.
          </h1>
          <p className="mt-5 text-lg text-gray-800/90 leading-relaxed max-w-2xl">
            A responsive, interactive keypad powers navigation. Click the glowing keys to jump to sections, or use the buttons below.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-gray-900 text-white font-medium hover:bg-black transition-colors"
            >
              Start a project
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-gray-300/80 bg-white/70 backdrop-blur text-gray-900 font-medium hover:bg-white transition-colors"
            >
              Explore services
            </button>
          </div>

          {/* Legend for keypad mapping */}
          <div className="mt-6 inline-flex items-center gap-3 rounded-lg bg-white/70 backdrop-blur border border-gray-200 px-3 py-2 text-xs text-gray-700">
            <Navigation className="h-4 w-4 text-gray-700" />
            <span><strong>Key 1</strong> → Services</span>
            <span className="hidden sm:inline">•</span>
            <span><strong>Key 2</strong> → Approach</span>
            <span className="hidden sm:inline">•</span>
            <span><strong>Key 3</strong> → Contact</span>
            <span className="hidden sm:inline">•</span>
            <span><strong>Key 4</strong> → Top</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
