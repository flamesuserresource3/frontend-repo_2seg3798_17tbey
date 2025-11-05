import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[90vh] overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
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
            Experiences that feel alive. Software that thinks with you.
          </h1>
          <p className="mt-5 text-lg text-gray-700/90 leading-relaxed max-w-2xl">
            Nuvyn blends engineering, design, and AI to craft interactive products—fast, scalable, and wonderfully usable. Explore the scene and see the vibe.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-gray-900 text-white font-medium hover:bg-black transition-colors"
            >
              Start a project
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-gray-300/80 bg-white/70 backdrop-blur text-gray-900 font-medium hover:bg-white transition-colors"
            >
              Explore services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
