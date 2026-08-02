import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';

const steps = ['Discover', 'Strategy', 'Design', 'Develop', 'Launch', 'Support'];

export function Process() {
  return (
    <section id="process" className="section-shell py-24 sm:py-28 lg:py-32">
      <Reveal className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky">Process</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
          A refined process that keeps every launch clear, calm, and high-performing.
        </h2>
      </Reveal>

      <div className="mt-12 hidden flex-wrap items-center justify-center gap-3 rounded-[2rem] border border-white/10 bg-zinc-900/60 p-6 lg:flex">
        {steps.map((step, index) => (
          <Reveal key={step} direction="up" delay={index * 0.06}>
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-white/10 bg-zinc-950 px-6 py-4 text-sm font-semibold text-white shadow-sm">
                {step}
              </div>
              {index < steps.length - 1 && <ArrowRight size={18} className="text-white/40" />}
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-4 lg:hidden">
        {steps.map((step, index) => (
          <Reveal key={step} direction="up" delay={index * 0.05}>
            <div className="rounded-[1.5rem] border border-white/10 bg-zinc-900/70 p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky">Step {index + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{step}</h3>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky/10 text-sky">
                  {index === steps.length - 1 ? <Sparkles size={16} /> : <ArrowDown size={16} />}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
