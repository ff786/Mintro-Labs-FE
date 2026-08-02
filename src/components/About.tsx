import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';

const stats = [
  { value: '120+', label: 'Brands launched' },
  { value: '94%', label: 'Client retention' },
  { value: '15', label: 'Countries served' },
];

export function About() {
  return (
    <section id="about" className="section-shell py-24 sm:py-28 lg:py-32">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal direction="left" className="space-y-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky">About Mintro Labs</p>
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            We build digital foundations that let ambitious companies grow with clarity.
          </h2>
          <p className="max-w-xl text-lg leading-8 text-white/70">
            Mintro Labs helps businesses establish a strong digital presence by creating professional brands, modern websites, intuitive software, and digital experiences that drive growth.
          </p>
          <p className="max-w-xl text-lg leading-8 text-white/70">
            We don't simply build websites we build digital foundations that enable businesses to grow, connect with customers, and operate more efficiently.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-sky">
            Discover our approach <ArrowUpRight size={16} />
          </a>
        </Reveal>

        <Reveal direction="right" className="glass-card overflow-hidden p-8 sm:p-10 bg-white/[0.06]">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 p-8 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <Sparkles size={20} />
              </div>
              <h3 className="mt-6 text-2xl font-semibold">From concept to market</h3>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Whether launching a new business or modernising an existing one, Mintro Labs becomes a long-term digital partner.
              </p>
            </div>
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <div key={stat.label} className="rounded-[1.5rem] border border-white/10 bg-zinc-800/70 p-6">
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/50">{stat.label}</p>
                  {index < stats.length - 1 && <div className="mt-4 h-px w-full bg-white/10" />}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
