'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import { Instagram, Linkedin, Mail, Send } from 'lucide-react';

const companyLinks = ['About', 'Services', 'Portfolio', 'Process'];

export function Footer() {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, website }),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) throw new Error(result.error ?? 'Unable to subscribe right now.');

      setEmail('');
      setStatus('success');
      setMessage('Thank you — you are on the list.');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Unable to subscribe right now.');
    }
  }

  return (
      <footer className="border-t border-white/10 bg-[#030303]">
        <div className="section-shell py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,.65fr)_minmax(20rem,.9fr)] lg:gap-12">
            <div>
              <p className="text-lg font-semibold uppercase tracking-[0.24em] text-white">Mintro Labs</p>
              <p className="mt-4 max-w-md text-base leading-8 text-white/70">
                A premium digital agency crafting brand systems, websites, software, and AI experiences for modern businesses.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a href="https://www.linkedin.com/company/mintrolabs/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-white/10 p-3 text-white/70 transition hover:border-sky/20 hover:text-sky">
                  <Linkedin size={16} />
                </a>
                <a href="https://www.instagram.com/mintrolabs/" target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full border border-white/10 p-3 text-white/70 transition hover:border-sky/20 hover:text-sky">
                  <Instagram size={16} />
                </a>
                <a href="mailto:connect@mintrolabs.com" aria-label="Email" className="rounded-full border border-white/10 p-3 text-white/70 transition hover:border-sky/20 hover:text-sky">
                  <Mail size={16} />
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky">Company</p>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                {companyLinks.map((link) => (
                    <li key={link}>
                      <a href={`#${link.toLowerCase()}`} className="transition hover:text-sky">{link}</a>
                    </li>
                ))}
              </ul>
            </div>

            <div className="lg:justify-self-end lg:w-full lg:max-w-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky">Newsletter</p>
              <form className="mt-4" onSubmit={handleNewsletterSubmit}>
                {/* Honeypot field: invisible to people, helpful against simple bots. */}
                <input name="website" value={website} onChange={(event) => setWebsite(event.target.value)} tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950 p-2 focus-within:border-sky/40">
                  <input
                      aria-label="Email address"
                      type="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="Your email"
                      className="w-full bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-white/40"
                  />
                  <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="shrink-0 rounded-full bg-white p-3 text-black transition hover:bg-sky hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                      aria-label="Subscribe to newsletter"
                  >
                    <Send size={16} />
                  </button>
                </div>
                <p className="mt-3 min-h-5 text-sm" role="status" aria-live="polite">
                  {status === 'success' && <span className="text-sky">{message}</span>}
                  {status === 'error' && <span className="text-red-300">{message}</span>}
                  {status === 'sending' && <span className="text-white/60">Sending…</span>}
                </p>
              </form>
              <p className="mt-1 text-sm leading-7 text-white/60">Fresh ideas, launches, and strategy insights in your inbox.</p>
            </div>
          </div>
        </div>
      </footer>
  );
}
