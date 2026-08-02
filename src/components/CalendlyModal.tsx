'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';

interface CalendlyModalProps {
  open: boolean;
  onCloseAction: () => void;
  serviceTitle?: string;
  calendlyUrl: string;
}

export function CalendlyModal({
                                open,
                                onCloseAction,
                                serviceTitle,
                                calendlyUrl,
                              }: CalendlyModalProps) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onCloseAction();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onCloseAction]);

  if (!open) return null;

  return (
      <div
          className="fixed inset-0 z-[90] overflow-y-auto overscroll-contain bg-black/70 p-3 backdrop-blur-sm [-webkit-overflow-scrolling:touch] sm:p-6"
          onClick={onCloseAction}
          role="dialog"
          aria-modal="true"
          aria-labelledby="calendly-modal-title"
      >
        <div className="flex min-h-full items-start justify-center py-[max(.5rem,env(safe-area-inset-top))] sm:items-center">
          <div
              className="flex max-h-[calc(100dvh-1.5rem)] w-full max-w-5xl flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950 text-white shadow-[0_30px_120px_rgba(0,0,0,0.65)] sm:max-h-[calc(100dvh-3rem)] sm:rounded-[2rem]"
              onClick={(event) => event.stopPropagation()}
          >
            {/* The header never scrolls out of view; only the Calendly area does. */}
            <div className="flex shrink-0 items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-8 sm:py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky sm:tracking-[0.35em]">
                  Schedule a Call
                </p>
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
                  className="shrink-0 rounded-full border border-white/10 p-2 text-white/70 transition hover:text-[#a7e50e] focus:outline-none focus-visible:text-[#a7e50e]"
                  aria-label="Close Calendly modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* On short viewports, this area scrolls instead of clipping the scheduler. */}
            <div className="min-h-0 flex-1 overflow-y-auto bg-white [-webkit-overflow-scrolling:touch]">
              <iframe
                  title={serviceTitle ? `${serviceTitle} Calendly scheduler` : 'Calendly scheduler'}
                  src={calendlyUrl}
                  className="h-[700px] min-h-[700px] w-full border-0"
                  allow="camera; microphone; fullscreen; payment"
              />
            </div>
          </div>
        </div>
      </div>
  );
}
