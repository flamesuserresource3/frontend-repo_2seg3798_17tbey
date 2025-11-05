import { Code2, Brain, Database, Link, Zap, Wand2, BarChart3, Settings } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    desc: 'Robust web and mobile applications with modern, scalable architectures.',
  },
  {
    icon: Brain,
    title: 'ML & AI Engineering',
    desc: 'From classical ML to GenAI—model design, training, and deployment that delivers.',
  },
  {
    icon: Link,
    title: 'API Development & Integration',
    desc: 'Well-documented, secure APIs and seamless integrations with your existing tools.',
  },
  {
    icon: Database,
    title: 'Data Platforms',
    desc: 'Data pipelines, storage, and analytics foundations built for accuracy and scale.',
  },
  {
    icon: Zap,
    title: 'Automation & Workflows',
    desc: 'Optimize operations with reliable automations and event-driven systems.',
  },
  {
    icon: Wand2,
    title: 'Generative AI Apps',
    desc: 'Intelligent assistants, content tools, and AI experiences tailored to your brand.',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & Visualization',
    desc: 'Dashboards and insights that turn raw data into confident decisions.',
  },
  {
    icon: Settings,
    title: 'Startup & Tech Consulting',
    desc: 'From MVPs to re-platforming—get the right strategy to move faster with less risk.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">What we do</h2>
          <p className="mt-3 text-gray-700/90">
            From sleek frontends to intelligent backends, we build software that automates, scales, and delights.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group rounded-xl border border-gray-200/80 bg-white/70 backdrop-blur p-5 hover:shadow-lg transition-all">
              <div className="h-10 w-10 rounded-lg bg-gray-900 text-white inline-flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div id="approach" className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl p-6 border border-gray-200/80 bg-white/70 backdrop-blur">
            <h4 className="font-semibold">Design → Build → Launch</h4>
            <p className="mt-2 text-sm text-gray-700">End-to-end ownership across product design, engineering, and deployment. One team, accountable outcomes.</p>
          </div>
          <div className="rounded-2xl p-6 border border-gray-200/80 bg-white/70 backdrop-blur">
            <h4 className="font-semibold">Speed with substance</h4>
            <p className="mt-2 text-sm text-gray-700">Lean sprints, rapid validation, and a strong foundation—so v1 ships fast and v2 scales even faster.</p>
          </div>
          <div className="rounded-2xl p-6 border border-gray-200/80 bg-white/70 backdrop-blur">
            <h4 className="font-semibold">AI where it matters</h4>
            <p className="mt-2 text-sm text-gray-700">Pragmatic AI that drives measurable impact—automation, copilots, personalization, and smarter decisions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
