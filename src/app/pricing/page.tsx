'use client';

import { useState } from 'react';
import { ArrowRight, CalendarDays, CheckCircle2 } from 'lucide-react';
import { CalendlyModal } from '@/components/CalendlyModal';
import { CALENDLY_URL } from '@/data/contactInfo';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const pricingCards = [
  {
    title: 'Brand Identity & Logo Design',
    startingFrom: 'LKR 45,000',
    description: 'Identity systems, logo concepts, and essential brand assets for a polished launch.',
    features: ['Logo concepts', 'Brand color palette', 'Typography direction', 'Basic brand guide'],
  },
  {
    title: 'Website Development',
    startingFrom: 'LKR 120,000',
    description: 'Responsive websites built for speed, clarity, and lead generation.',
    features: ['Landing pages', 'Corporate websites', 'Performance optimization', 'Responsive design'],
  },
  {
    title: 'UI/UX Design',
    startingFrom: 'LKR 60,000',
    description: 'Thoughtful interface design and user journeys that make products easier to use.',
    features: ['User flows', 'Wireframes', 'High-fidelity UI', 'Clickable prototype'],
  },
  {
    title: 'AI Automation',
    startingFrom: 'LKR 95,000',
    description: 'Automations that save time, respond faster, and streamline repetitive work.',
    features: ['Workflow automation', 'Lead handling', 'Chatbots', 'Process integrations'],
  },
  {
    title: 'Software Development',
    startingFrom: 'LKR 150,000',
    description: 'Custom applications and internal tools that scale with your business needs.',
    features: ['Custom portals', 'Booking systems', 'Dashboards', 'API integrations'],
  },
  {
    title: 'Social Media Management',
    startingFrom: 'LKR 40,000',
    description: 'Content planning, post design, and campaign execution for consistent growth.',
    features: ['Content calendar', 'Post design', 'Campaign planning', 'Monthly analytics'],
  },
];

export default function PricingPage() {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpen = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setOpen(true);
  };

  return (
    <>
      <Navbar />
      <main id="pricing" className="relative overflow-x-hidden bg-[#050505] pt-[96px] text-white">
        <CalendlyModal open={open} onCloseAction={() => setOpen(false)} serviceTitle={selectedService} calendlyUrl={CALENDLY_URL} />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(167,229,14,0.14),transparent_25%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_30%),linear-gradient(180deg,#050505_0%,#090909_28%,#050505_100%)]" />

      <section className="section-shell pb-20 pt-10 sm:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-m font-semibold uppercase tracking-[0.35em] text-sky">Pricing</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Starting From prices for our core services
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Explore our service pricing. Every package is a starting point and can be tailored to your scope.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/60">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <CalendarDays size={16} /> Schedule a call with Calendly
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <CheckCircle2 size={16} /> Check our the starting prices
            </span>
          </div>
        </div>
      </section>

      <section className="section-shell pb-24 sm:pb-28 lg:pb-32">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pricingCards.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky">Starting From</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em]">{card.title}</h2>
              <p className="mt-4 text-3xl font-semibold text-[#a7e50e]">{card.startingFrom}</p>
              <p className="mt-4 text-sm leading-7 text-white/65">{card.description}</p>

              <ul className="mt-6 space-y-3 text-sm text-white/75">
                {card.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="shrink-0 text-[#a7e50e]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex-1" />

              <button
                type="button"
                onClick={() => handleOpen(card.title)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-sky hover:text-white"
              >
                Get a Quote <ArrowRight size={18} />
              </button>
            </article>
          ))}
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}

