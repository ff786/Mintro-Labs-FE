'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';

interface CalendlyModalProps {
  open: boolean;
  onCloseAction: () => void;
  serviceTitle?: string;
  calendlyUrl: string;
}

export function CalendlyModal({ open, onCloseAction, serviceTitle, calendlyUrl }: CalendlyModalProps) {
  useEffect(() => {
    if (!open) return;

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

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm"
      onClick={onCloseAction}
      role="dialog"
      aria-modal="true"
      aria-labelledby="calendly-modal-title"
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 text-white shadow-[0_30px_120px_rgba(0,0,0,0.65)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6 border-b border-white/10 px-6 py-5 sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky">Schedule a Call</p>
            <h3 id="calendly-modal-title" className="mt-2 text-2xl font-semibold sm:text-3xl">
              {serviceTitle ? `Get a Quote: ${serviceTitle}` : 'Book a Consultation'}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65 sm:text-base">
              Choose a time that works for you and we’ll connect on a quick discovery call.
            </p>
          </div>

          <button
            type="button"
            onClick={onCloseAction}
            className="rounded-full border border-white/10 p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
            aria-label="Close Calendly modal"
          >
            <X size={18} />
          </button>
        </div>

        <div className="min-h-[700px] bg-white">
          <iframe
            title={serviceTitle ? `${serviceTitle} Calendly scheduler` : 'Calendly scheduler'}
            src={calendlyUrl}
            className="h-[700px] w-full border-0"
            allow="camera; microphone; fullscreen; payment"
          />
        </div>
      </div>
    </div>
  );
}

