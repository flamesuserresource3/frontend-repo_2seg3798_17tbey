import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />
        <div className="absolute top-40 -right-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs font-medium">
            <Sparkles className="h-4 w-4" />
            New-age software + AI studio
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            We turn ideas into digital experiences that work smarter.
          </h1>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Nuvyn builds powerful, scalable and beautifully designed websites, apps, and AI-driven solutions. We handle design, development, deployment and optimization—with a deep focus on speed, usability and real-world impact.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-gray-900 text-white font-medium hover:bg-black transition-colors">
              Start a project
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-gray-300 text-gray-900 font-medium hover:bg-gray-50 transition-colors">
              Explore services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
