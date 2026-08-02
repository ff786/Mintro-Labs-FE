import { ArrowRight, BadgeCheck, Blocks, Compass, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';

const points = [
  { icon: BadgeCheck, title: 'Long-term Partnership', description: 'We become an extension of your team, driving progress over the long haul.' },
  { icon: Blocks, title: 'Modern Technologies', description: 'We design with scalable systems and future-ready tools from day one.' },
  { icon: Compass, title: 'Creative Design', description: 'Elegant visuals, sharp messaging, and user-first thinking in every decision.' },
  { icon: ShieldCheck, title: 'Reliable Support', description: 'From launch to optimisation, our care continues long after delivery.' },
];

export function WhyChooseUs() {
  return (
    <section className="section-shell pb-24 sm:pb-28 lg:pb-32">
      <Reveal className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky">Why Choose Us</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
          A premium experience built for ambitious growth.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {points.map((point, index) => {
          const Icon = point.icon;
          return (
            <Reveal key={point.title} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 0.06}>
              <div className="glass-card flex items-start gap-5 p-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky/10 text-sky">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{point.title}</h3>
                  <p className="mt-3 text-base leading-8 text-white/70">{point.description}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
