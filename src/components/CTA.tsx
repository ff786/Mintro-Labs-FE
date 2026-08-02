'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { ConsultationModal } from './ConsultationModal';
import { WHATSAPP_NUMBER } from '@/data/contactInfo';

export function CTA() {
  const [open, setOpen] = useState(false);

  return (
    <section id="contact" className="section-shell pb-24 sm:pb-28 lg:pb-32">
      <ConsultationModal open={open} onClose={() => setOpen(false)} phoneNumber={WHATSAPP_NUMBER} />
      <Reveal>
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 p-10 text-white shadow-luxury sm:p-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky">Let’s build</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                Let’s Build Your Digital Future.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/70">
                From strategy and branding to websites and software, we create polished digital experiences tailored to ambitious growth.
              </p>
            </div>
            <button type="button" onClick={() => setOpen(true)} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-sky hover:text-white">
              Book a Free Consultation <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
