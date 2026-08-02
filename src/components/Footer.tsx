import { Instagram, Linkedin, Mail, Send } from 'lucide-react';

const companyLinks = ['About', 'Services', 'Portfolio', 'Process'];
const quickLinks = ['Home', 'Contact', 'Careers', 'Blog'];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030303]">
      <div className="section-shell py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.6fr_0.6fr_0.7fr]">
          <div>
            <p className="text-lg font-semibold uppercase tracking-[0.24em] text-white">Mintro Labs</p>
            <p className="mt-4 max-w-md text-base leading-8 text-white/70">
              A premium digital agency crafting brand systems, websites, software, and AI experiences for modern businesses.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="https://www.linkedin.com/company/mintrolabs/" aria-label="LinkedIn" className="rounded-full border border-white/10 p-3 text-white/70 transition hover:border-sky/20 hover:text-sky"><Linkedin size={16} /></a>
              <a href="https://www.instagram.com/mintrolabs/" aria-label="Instagram" className="rounded-full border border-white/10 p-3 text-white/70 transition hover:border-sky/20 hover:text-sky"><Instagram size={16} /></a>
              <a href="mailto:hello@mintrolabs.com" aria-label="Email" className="rounded-full border border-white/10 p-3 text-white/70 transition hover:border-sky/20 hover:text-sky"><Mail size={16} /></a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky">Company</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {companyLinks.map((link) => (
                <li key={link}><a href={`#${link.toLowerCase()}`} className="transition hover:text-white">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky">Quick Links</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {quickLinks.map((link) => (
                <li key={link}><a href="#contact" className="transition hover:text-white">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky">Newsletter</p>
            <div className="mt-4 flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950 p-2">
              <input aria-label="Email address" type="email" placeholder="Your email" className="w-full bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-white/40" />
              <button className="rounded-full bg-white p-3 text-black transition hover:bg-sky hover:text-white">
                <Send size={16} />
              </button>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/60">Fresh ideas, launches, and strategy insights in your inbox.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
