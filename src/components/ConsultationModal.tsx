'use client';

import { useEffect, useMemo, useState } from 'react';
import { X, Send } from 'lucide-react';
import { technologies } from '@/data/servicesData';

interface ConsultationModalProps {
  open: boolean;
  onCloseAction: () => void;
  phoneNumber: string;
}

const initialForm = {
  name: '',
  email: '',
  service: technologies[0]?.name ?? 'Service',
  budget: '',
  requirements: '',
};

export function ConsultationModal({ open, onCloseAction, phoneNumber }: ConsultationModalProps) {
  const [form, setForm] = useState(initialForm);

  const serviceOptions = useMemo(
    () => technologies.map((tech) => tech.name),
    []
  );

  useEffect(() => {
    if (!open) {
      setForm(initialForm);
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onCloseAction();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onCloseAction]);

  if (!open) return null;

  const normalizedPhone = phoneNumber.replace(/\D/g, '');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      'Hello Mintro Labs, I would like to book a free consultation.',
      '',
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Service Required: ${form.service}`,
      `Project Budget: ${form.budget}`,
      '',
      'Project Requirements:',
      form.requirements,
    ].join('\n');

    const whatsappUrl = `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onCloseAction();
  };

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm"
      onClick={onCloseAction}
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 text-white shadow-[0_30px_120px_rgba(0,0,0,0.65)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6 border-b border-white/10 px-6 py-5 sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky">Consultation</p>
            <h3 id="consultation-modal-title" className="mt-2 text-2xl font-semibold sm:text-3xl">
              Book a Free Consultation
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65 sm:text-base">
              Send us your project details and we will open WhatsApp with everything pre-filled.
            </p>
          </div>

          <button
            type="button"
            onClick={onCloseAction}
            className="rounded-full border border-white/10 p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
            aria-label="Close consultation modal"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5 px-6 py-6 sm:grid-cols-2 sm:px-8 sm:py-8">
          <label className="space-y-2">
            <span className="text-sm font-medium text-white/80">Your Name</span>
            <input
              type="text"
              required
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-sky/60"
              placeholder="Your full name"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-white/80">Your Email</span>
            <input
              type="email"
              required
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-sky/60"
              placeholder="you@example.com"
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-white/80">Service Required</span>
            <select
              required
              value={form.service}
              onChange={(event) => setForm((prev) => ({ ...prev, service: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-sky/60"
            >
              {serviceOptions.map((service) => (
                <option key={service} value={service} className="bg-zinc-950 text-white">
                  {service}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-white/80">Project Budget</span>
            <input
              type="text"
              required
              value={form.budget}
              onChange={(event) => setForm((prev) => ({ ...prev, budget: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-sky/60"
              placeholder="e.g. LKR 75,000"
            />
          </label>

          <label className="space-y-2 sm:col-span-2">
            <span className="text-sm font-medium text-white/80">Describe your requirements about the project</span>
            <textarea
              required
              rows={5}
              value={form.requirements}
              onChange={(event) => setForm((prev) => ({ ...prev, requirements: event.target.value }))}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-sky/60"
              placeholder="Tell us about your goals, timeline, and any specific features you need."
            />
          </label>

          <div className="sm:col-span-2 flex flex-col gap-4 border-t border-white/10 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/50">
              We’ll send your details to WhatsApp and our team will get back to you.
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-sky hover:text-white"
            >
              Send Message <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

