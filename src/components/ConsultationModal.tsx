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

export function ConsultationModal({
                                    open,
                                    onCloseAction,
                                    phoneNumber,
                                  }: ConsultationModalProps) {
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

    const whatsappUrl = `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(
        message
    )}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onCloseAction();
  };

  return (
      <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md p-4 sm:p-6"
          onClick={onCloseAction}
      >
        <div className="flex min-h-full items-center justify-center">
          <div
              onClick={(e) => e.stopPropagation()}
              className="flex w-full max-w-3xl max-h-[90vh] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 text-white shadow-[0_30px_120px_rgba(0,0,0,.65)]"
          >
            {/* Header */}
            <div className="flex flex-shrink-0 items-start justify-between gap-4 border-b border-white/10 px-5 py-5 sm:px-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky">
                  Consultation
                </p>

                <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                  Book a Free Consultation
                </h2>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  Fill in your project details. We'll open WhatsApp with everything
                  pre-filled.
                </p>
              </div>

              <button
                  type="button"
                  onClick={onCloseAction}
                  className="rounded-full border border-white/10 p-2 transition hover:bg-white/10"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Form */}
            <form
                onSubmit={handleSubmit}
                className="flex-1 overflow-y-auto px-5 py-6 sm:px-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2">
                <span className="text-sm font-medium text-white/80">
                  Your Name
                </span>

                  <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                          setForm((prev) => ({ ...prev, name: e.target.value }))
                      }
                      placeholder="John Doe"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-sky/60"
                  />
                </label>

                <label className="space-y-2">
                <span className="text-sm font-medium text-white/80">
                  Email Address
                </span>

                  <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                          setForm((prev) => ({ ...prev, email: e.target.value }))
                      }
                      placeholder="john@email.com"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-sky/60"
                  />
                </label>

                <label className="space-y-2">
                <span className="text-sm font-medium text-white/80">
                  Service Required
                </span>

                  <select
                      value={form.service}
                      onChange={(e) =>
                          setForm((prev) => ({ ...prev, service: e.target.value }))
                      }
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-sky/60"
                  >
                    {serviceOptions.map((service) => (
                        <option
                            key={service}
                            value={service}
                            className="bg-zinc-950"
                        >
                          {service}
                        </option>
                    ))}
                  </select>
                </label>

                <label className="space-y-2">
                <span className="text-sm font-medium text-white/80">
                  Project Budget
                </span>

                  <input
                      type="text"
                      required
                      value={form.budget}
                      onChange={(e) =>
                          setForm((prev) => ({ ...prev, budget: e.target.value }))
                      }
                      placeholder="LKR 150,000"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-sky/60"
                  />
                </label>

                <label className="space-y-2 sm:col-span-2">
                <span className="text-sm font-medium text-white/80">
                  Tell us about your project
                </span>

                  <textarea
                      rows={5}
                      required
                      value={form.requirements}
                      onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            requirements: e.target.value,
                          }))
                      }
                      placeholder="Describe your project, goals, timeline, required features..."
                      className="min-h-36 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-sky/60"
                  />
                </label>
              </div>
            </form>

            {/* Sticky Footer */}
            <div
                className="flex flex-shrink-0 flex-col gap-4 border-t border-white/10 bg-zinc-950 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8"
                style={{
                  paddingBottom: 'max(1.25rem, env(safe-area-inset-bottom))',
                }}
            >
              <p className="text-sm text-white/50">
                We'll send your details directly to WhatsApp.
              </p>

              <button
                  type="submit"
                  onClick={(e) => {
                    const formElement = (
                        e.currentTarget.closest('div')
                            ?.previousElementSibling as HTMLFormElement | null
                    );
                    formElement?.requestSubmit();
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:-translate-y-0.5 hover:bg-sky hover:text-white"
              >
                Send Message
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}