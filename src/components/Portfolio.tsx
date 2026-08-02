'use client';

import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Reveal } from './Reveal';

const projects = [
  {
    title: 'Northstar Capital',
    category: 'Branding',
    description: 'A premium rebrand and lead-gen platform for a private investment firm.',
    accent: 'from-slate-950 via-zinc-900 to-[#a7e50e]',
  },
  {
    title: 'Aurelia Health',
    category: 'Web Development',
    description: 'A polished medical website with calm storytelling and a conversion-led experience.',
    accent: 'from-[#071106] via-zinc-900 to-[#a7e50e]',
  },
  {
    title: 'Lumen AI',
    category: 'AI Automation',
    description: 'An intelligent booking and support system powering global service operations.',
    accent: 'from-slate-950 via-[#182306] to-[#a7e50e]',
  },
  {
    title: 'Vanta Studio',
    category: 'UI/UX',
    description: 'A high-end digital experience built for emerging fashion talent.',
    accent: 'from-stone-950 via-zinc-900 to-[#a7e50e]',
  },
];

const filters = ['All', 'Branding', 'Web Development', 'UI/UX', 'AI Automation'];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects = activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-shell py-24 sm:py-28 lg:py-32">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky">Portfolio</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            Selected projects that blend strategy, performance, and quiet luxury.
          </h2>
        </Reveal>
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button key={filter} onClick={() => setActiveFilter(filter)} className={`rounded-full border px-4 py-2 text-sm font-medium transition ${activeFilter === filter ? 'border-sky bg-sky text-white' : 'border-white/10 bg-zinc-900/70 text-white/70 hover:border-sky/20 hover:text-sky'}`}>
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <Reveal key={project.title} direction={index % 2 === 0 ? 'up' : 'right'} delay={index * 0.06}>
            <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-luxury transition duration-500 hover:-translate-y-2">
              <div className={`relative h-80 overflow-hidden bg-gradient-to-br ${project.accent}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_35%)]" />
                <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute left-8 top-8 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur">
                  {project.category}
                </div>
                <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-semibold text-white">{project.title}</p>
                    <p className="mt-2 max-w-md text-sm leading-7 text-white/75">{project.description}</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition duration-300 group-hover:scale-110">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
