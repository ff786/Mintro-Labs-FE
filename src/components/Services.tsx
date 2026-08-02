import { ArrowRight, BrainCircuit, Laptop2, Paintbrush, Smartphone, Sparkles } from 'lucide-react';
import { Reveal } from './Reveal';

const services = [
  {
    title: 'Brand Identity & Logo Design',
    icon: Paintbrush,
    bullets: ['Logo Design', 'Brand Identity', 'Brand Guidelines', 'Colour Palette', 'Business Stationery'],
  },
  {
    title: 'Website Development',
    icon: Laptop2,
    bullets: ['Business Websites', 'Corporate Websites', 'Landing Pages', 'Portfolio Websites', 'Website Maintenance'],
  },
  {
    title: 'UI/UX Design',
    icon: Sparkles,
    bullets: ['Website UI', 'Mobile UI', 'Wireframing', 'Interactive Prototypes', 'UX Design'],
  },
  {
    title: 'Social Media Management',
    icon: Smartphone,
    bullets: ['Business Pages', 'Post Design', 'Content Scheduling', 'Optimisation'],
  },
  {
    title: 'Software Development',
    icon: Laptop2,
    bullets: ['CRM Systems', 'Booking Systems', 'Business Systems', 'Android Apps', 'iOS Apps'],
  },
  {
    title: 'AI Automation',
    icon: BrainCircuit,
    bullets: ['AI Chatbots', 'Workflow Automation', 'Customer Support', 'Lead Capture', 'AI Business Processes'],
  },
];

export function Services() {
  return (
    <section id="services" className="section-shell py-24 sm:py-28 lg:py-32">
      <Reveal className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky">Services</p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
          Premium digital services that feel effortless, strategic, and unmistakably modern.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} direction="up" delay={index * 0.06}>
              <article className="group glass-card relative overflow-hidden p-8 transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-sky/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky/10 bg-sky/10 text-sky">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-white/70">
                    {service.bullets.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-sky" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-sky">
                    Explore Service <ArrowRight size={16} />
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
