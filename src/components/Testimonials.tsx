'use client';

import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Reveal } from './Reveal';

const testimonials = [
  {
    quote: 'Mintro Labs gave our brand a presence that instantly felt more credible and premium. Every touchpoint now feels deliberate.',
    name: 'Clara Nguyen',
    role: 'Founder, Northstar Capital',
  },
  {
    quote: 'The team combined strategy, design, and product thinking so well that our launch felt effortless and elevated.',
    name: 'Marcus Reed',
    role: 'CEO, Aurelia Health',
  },
  {
    quote: 'Their design and development approach made our portal feel polished, fast, and unmistakably world-class.',
    name: 'Sofia Harrell',
    role: 'Head of Growth, Vanta Studio',
  },
];

const logos = ['Notion', 'Airbnb', 'Stripe', 'Vercel', 'Linear'];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="section-shell py-24 sm:py-28 lg:py-32">
      <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky">Testimonials</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            Trusted by founders and ambitious teams building their next chapter.
          </h2>
        </div>
        <div className="flex gap-3">
          <button aria-label="Previous testimonial" onClick={() => setActiveIndex((prev) => (prev + testimonials.length - 1) % testimonials.length)} className="rounded-full border border-white/10 p-3 text-white transition hover:border-sky/20 hover:text-sky">
            <ArrowLeft size={16} />
          </button>
          <button aria-label="Next testimonial" onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)} className="rounded-full border border-white/10 p-3 text-white transition hover:border-sky/20 hover:text-sky">
            <ArrowRight size={16} />
          </button>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal direction="left">
          <div className="glass-card p-8 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky/10 text-sky">
              <Quote size={20} />
            </div>
            <p className="mt-8 text-2xl leading-10 text-white sm:text-3xl">“{testimonials[activeIndex].quote}”</p>
            <div className="mt-8">
              <p className="text-lg font-semibold text-white">{testimonials[activeIndex].name}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/50">{testimonials[activeIndex].role}</p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right">
          <div className="glass-card p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky">Client partners</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {logos.map((logo) => (
                <div key={logo} className="rounded-[1.5rem] border border-white/10 bg-zinc-950/70 p-5 text-center text-lg font-semibold text-white/70">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
