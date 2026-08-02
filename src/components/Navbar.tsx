'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const serviceItems = ['Brand Strategy', 'Web Experiences', 'UI/UX Systems', 'AI Automation'];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
      <header className="fixed inset-x-0 top-6 z-[60] flex justify-center px-6">
          <div
              className={`w-full max-w-6xl rounded-2xl transition-all duration-300 ${
                  scrolled
                      ? "border border-white/10 bg-black/85 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
                      : "border border-white/10 bg-black/70 backdrop-blur-xl"
              }`}
          >
              <nav className="grid h-20 grid-cols-[1fr_auto_1fr] items-center px-8">

                  {/* Logo */}
                  <div className="justify-self-start">
                      <motion.div
                          whileHover={{
                              color: "#a7e50e",
                              scale: 1.08,
                              y: -3,
                              textShadow: "0 0 8px rgba(167,229,14,.8), 0 0 20px rgba(167,229,14,.5)",
                          }}
                          transition={{ duration: 0.25 }}
                      >
                          <Link
                              href="#home"
                              className="text-lg font-semibold uppercase tracking-[0.24em] lg:text-xl"
                          >
                              Mintro Labs
                          </Link>
                      </motion.div>
                  </div>

                  {/* Desktop Navigation */}
                  <div className="hidden justify-self-center lg:flex">
                      <div className="flex items-center gap-10">
                          {navLinks.map((link) =>
                              link.label === "Services" ? (
                                  <div key={link.label} className="group relative">
                                      <Link
                                          href={link.href}
                                          className="text-sm font-medium text-white/70 transition hover:text-white"
                                      >
                                          {link.label}
                                      </Link>

                                      {/* Dropdown */}
                                      <div className="pointer-events-none absolute left-1/2 top-full mt-5 w-72 -translate-x-1/2 rounded-3xl border border-white/10 bg-zinc-950/95 p-5 opacity-0 shadow-2xl shadow-black/50 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
                                          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
                                              Premium Services
                                          </p>

                                          <div className="space-y-2">
                                              {serviceItems.map((item) => (
                                                  <a
                                                      key={item}
                                                      href="#services"
                                                      className="block rounded-2xl px-3 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
                                                  >
                                                      {item}
                                                  </a>
                                              ))}
                                          </div>
                                      </div>
                                  </div>
                              ) : (
                                  <Link
                                      key={link.label}
                                      href={link.href}
                                      className="text-sm font-medium text-white/70 transition hover:text-white"
                                  >
                                      {link.label}
                                  </Link>
                              )
                          )}
                      </div>
                  </div>

                  {/* Right Side */}
                  <div className="justify-self-end hidden lg:flex">
                      <motion.a
                          href="#contact"
                          whileHover={{
                              scale: 1.06,
                              y: -3,
                              boxShadow: "0 0 20px rgba(167, 229, 14, 0.35)",
                          }}
                          transition={{ duration: 0.25 }}
                          className="rounded-full border border-white/10 bg-white px-5 py-2.5 text-sm font-medium text-black"
                      >
                          Work with us
                      </motion.a>
                  </div>

                  {/* Mobile Button */}
                  <div className="justify-self-end lg:hidden">
                      <button
                          aria-label="Toggle navigation"
                          className="rounded-full border border-white/10 p-2.5 text-white"
                          onClick={() => setMobileOpen((prev) => !prev)}
                      >
                          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                      </button>
                  </div>
              </nav>

              {/* Mobile Menu */}
              <div className="justify-self-end hidden lg:flex">
              {mobileOpen && (
                  <div className="border-t border-white/10 bg-zinc-950/95 px-6 py-5 lg:hidden">
                      <div className="flex flex-col gap-3">
                          {navLinks.map((link) => (
                              <Link
                                  key={link.label}
                                  href={link.href}
                                  className="text-sm font-medium text-white/70"
                                  onClick={() => setMobileOpen(false)}
                              >
                                  {link.label}
                              </Link>
                          ))}

                          <a
                              href="#contact"
                              className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-4 py-2.5 text-sm font-medium text-black"
                              onClick={() => setMobileOpen(false)}
                          >
                              Work with us
                          </a>
                      </div>
                  </div>
              )}
              </div>
          </div>
      </header>
  );
}
