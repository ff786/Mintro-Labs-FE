import { Compass, Target } from 'lucide-react';
import { Reveal } from './Reveal';

const items = [
  {
    icon: Target,
    title: 'Mission',
    description:
      'To empower businesses with modern digital solutions that help them grow, compete and succeed in an increasingly digital world.',
  },
  {
    icon: Compass,
    title: 'Vision',
    description:
      'To become one of the most trusted digital transformation agencies helping thousands of businesses embrace technology and build strong digital brands.',
  },
];

export function VisionMission() {
  return (
    <section className="section-shell pb-20 sm:pb-24 lg:pb-28">
      <div className="grid gap-6 lg:grid-cols-2">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} direction="up" delay={index * 0.1}>
              <div className="glass-card p-8 sm:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky/10 text-sky">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-lg leading-8 text-white/70">{item.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
