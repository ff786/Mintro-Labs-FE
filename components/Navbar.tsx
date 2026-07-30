"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const services = [
  "Brand Identity & Logo Design",
  "Website Development",
  "UI/UX Design",
  "Social Media Management",
  "Software Development",
  "AI Automation",
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="text-lg font-semibold tracking-tight text-[#111111]">Mintro Labs</a>
        <ul className="hidden items-center gap-7 text-sm font-medium text-zinc-700 md:flex">
          <li><a href="#home" className="hover:text-[#0EA5E9] transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-[#0EA5E9] transition-colors">About</a></li>
          <li className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <button className="inline-flex items-center gap-1 hover:text-[#0EA5E9] transition-colors" aria-expanded={open}>
              Services <ChevronDown size={16} />
            </button>
            {open && (
              <div className="absolute left-1/2 top-8 w-[560px] -translate-x-1/2 rounded-2xl border border-white/60 bg-white/90 p-6 shadow-2xl backdrop-blur-xl">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500">What we do</p>
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service) => (
                    <a key={service} href="#services" className="rounded-xl border border-zinc-100 bg-zinc-50 px-4 py-3 text-sm text-zinc-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700">
                      {service}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </li>
          <li><a href="#portfolio" className="hover:text-[#0EA5E9] transition-colors">Portfolio</a></li>
          <li><a href="#process" className="hover:text-[#0EA5E9] transition-colors">Process</a></li>
          <li><a href="#contact" className="hover:text-[#0EA5E9] transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
