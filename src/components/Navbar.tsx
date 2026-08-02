'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';
import { CalendlyModal } from '@/components/CalendlyModal';
import { CALENDLY_URL } from '@/data/contactInfo';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
] as const;

const serviceItems = ['Brand Strategy', 'Web Experiences', 'UI/UX Systems', 'AI Automation'];

export function Navbar() {
    const pathname = usePathname();
    const prefersReducedMotion = useReducedMotion();
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
    const [calendlyOpen, setCalendlyOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<string | undefined>();
    const servicesId = useId();
    const isHome = pathname === '/';

    const linkHref = (href: string) => (href.startsWith('#') && !isHome ? `/${href}` : href);
    const isActive = (href: string) => (href === '/pricing' ? pathname === '/pricing' : isHome && href === '#home');

    const closeMobileMenu = () => {
        setMobileOpen(false);
        setMobileServicesOpen(false);
    };

    const openCalendly = (serviceTitle?: string) => {
        setSelectedService(serviceTitle);
        setCalendlyOpen(true);
        closeMobileMenu();
    };

    useEffect(() => {
        const updateScrolled = () => setScrolled(window.scrollY > 24);
        updateScrolled();
        window.addEventListener('scroll', updateScrolled, { passive: true });
        return () => window.removeEventListener('scroll', updateScrolled);
    }, []);

    // Navigation is intentionally closed after any route change as well as after a link click.
    useEffect(() => {
        closeMobileMenu();
    }, [pathname]);

    useEffect(() => {
        if (!mobileOpen) return;

        const previousOverflow = document.body.style.overflow;
        const previousPaddingRight = document.body.style.paddingRight;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.dataset.mobileMenuOpen = 'true';
        document.body.style.overflow = 'hidden';
        if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                closeMobileMenu();
            }
            if (event.key !== 'Tab' || !mobileMenuRef.current) return;

            const focusable = Array.from(
                mobileMenuRef.current.querySelectorAll<HTMLElement>(
                    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
                ),
            );
            if (!focusable.length) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };

        document.addEventListener('keydown', onKeyDown);
        requestAnimationFrame(() => mobileMenuRef.current?.querySelector<HTMLElement>('a, button')?.focus());

        return () => {
            document.body.style.overflow = previousOverflow;
            document.body.style.paddingRight = previousPaddingRight;
            delete document.body.dataset.mobileMenuOpen;
            document.removeEventListener('keydown', onKeyDown);
            menuButtonRef.current?.focus();
        };
    }, [mobileOpen]);

    const navItemClass = (active: boolean) =>
        `relative text-sm font-medium transition-colors duration-200 ${active ? 'text-[#a7e50e]' : 'text-white/65 hover:text-[#a7e50e]'}`;

    return (
        <>
            {/* This also works with the existing WhatsApp link's aria-label. Adding
          data-whatsapp-button to that component is an optional, more explicit hook. */}
            <style jsx global>{`
        body[data-mobile-menu-open='true'] a[aria-label='Chat with us on WhatsApp'],
        body[data-mobile-menu-open='true'] [data-whatsapp-button] {
          opacity: 0;
          pointer-events: none;
          transform: translateY(1rem) scale(.96);
        }
      `}</style>
            <CalendlyModal
                open={calendlyOpen}
                onCloseAction={() => setCalendlyOpen(false)}
                serviceTitle={selectedService}
                calendlyUrl={CALENDLY_URL}
            />

            <header className="fixed inset-x-0 top-3 z-[70] px-4 sm:px-6">
                <nav
                    aria-label="Main navigation"
                    className={`mx-auto flex h-[4.5rem] w-full max-w-6xl items-center justify-between rounded-2xl border px-5 transition-all duration-300 sm:px-7 lg:grid lg:grid-cols-[1fr_auto_1fr] ${
                        scrolled
                            ? 'border-white/10 bg-black/85 shadow-[0_20px_60px_rgba(0,0,0,.48)] backdrop-blur-xl'
                            : 'border-white/10 bg-black/65 backdrop-blur-xl'
                    }`}
                >
                    <Link
                        href={linkHref('#home')}
                        onClick={closeMobileMenu}
                        className="justify-self-start text-base font-semibold uppercase tracking-[0.18em] text-white transition hover:text-[#a7e50e] sm:text-lg"
                    >
                        Mintro Labs
                    </Link>

                    <div className="hidden items-center gap-8 lg:flex">
                        {navLinks.map((link) =>
                            link.label === 'Services' ? (
                                <div
                                    key={link.label}
                                    className="relative"
                                    onMouseEnter={() => setDesktopServicesOpen(true)}
                                    onMouseLeave={() => setDesktopServicesOpen(false)}
                                >
                                    <div className="flex items-center gap-1">
                                        <Link href={linkHref(link.href)} className={navItemClass(false)}>
                                            Services
                                        </Link>
                                        <button
                                            type="button"
                                            aria-label="Toggle services menu"
                                            aria-expanded={desktopServicesOpen}
                                            onClick={() => setDesktopServicesOpen((value) => !value)}
                                            className="rounded-md p-1 text-white/65 transition hover:text-[#a7e50e] focus:outline-none focus-visible:text-[#a7e50e]"
                                        >
                                            <ChevronDown size={14} className={desktopServicesOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
                                        </button>
                                    </div>
                                    <AnimatePresence>
                                        {desktopServicesOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 8 }}
                                                transition={{ duration: prefersReducedMotion ? 0 : 0.18 }}
                                                className="absolute left-1/2 top-full mt-5 w-72 -translate-x-1/2 rounded-3xl border border-white/10 bg-zinc-950/95 p-4 shadow-2xl shadow-black/60 backdrop-blur-xl"
                                            >
                                                <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[.28em] text-[#a7e50e]">Our expertise</p>
                                                {serviceItems.map((service) => (
                                                    <Link
                                                        key={service}
                                                        href={linkHref('#services')}
                                                        onClick={() => setDesktopServicesOpen(false)}
                                                        className="flex items-center justify-between rounded-2xl px-3 py-2.5 text-sm text-white/70 transition hover:text-[#a7e50e]"
                                                    >
                                                        {service}<ArrowRight size={15} aria-hidden="true" />
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link key={link.label} href={linkHref(link.href)} className={navItemClass(isActive(link.href))}>
                                    {link.label}
                                </Link>
                            ),
                        )}
                    </div>

                    <div className="hidden justify-self-end lg:block">
                        <button
                            type="button"
                            onClick={() => openCalendly()}
                            className="inline-flex items-center gap-2 rounded-full bg-[#fff] px-5 py-2.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#c5ff36] focus:outline-none focus:ring-2 focus:ring-[#a7e50e] focus:ring-offset-2 focus:ring-offset-black"
                        >
                            Work with us <ArrowRight size={16} aria-hidden="true" />
                        </button>
                    </div>

                    <button
                        ref={menuButtonRef}
                        type="button"
                        className="inline-flex rounded-xl p-2 text-white transition hover:text-[#a7e50e] focus:outline-none focus-visible:text-[#a7e50e] lg:hidden"
                        aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setMobileOpen((value) => !value)}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.span
                                key={mobileOpen ? 'close' : 'menu'}
                                initial={{ opacity: 0, rotate: -35 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 35 }}
                                transition={{ duration: prefersReducedMotion ? 0 : 0.16 }}
                            >
                                {mobileOpen ? <X size={23} /> : <Menu size={23} />}
                            </motion.span>
                        </AnimatePresence>
                    </button>
                </nav>
            </header>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        id="mobile-navigation"
                        ref={mobileMenuRef}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Mobile navigation"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.22 }}
                        className="fixed inset-0 z-[60] overflow-y-auto bg-[#090909] px-6 pb-[max(2rem,env(safe-area-inset-bottom))] pt-28 lg:hidden"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 22 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 12 }}
                            transition={{ duration: prefersReducedMotion ? 0 : 0.3, delay: prefersReducedMotion ? 0 : 0.05 }}
                            className="pointer-events-none absolute inset-0 overflow-hidden"
                            aria-hidden="true"
                        >
                            <div className="absolute -right-32 top-12 h-80 w-80 rounded-full bg-[#a7e50e]/10 blur-3xl" />
                            <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
                        </motion.div>
                        <div className="relative mx-auto flex min-h-[calc(100dvh-9rem)] max-w-xl flex-col">
                            <div className="space-y-1">
                                {navLinks.map((link, index) =>
                                    link.label === 'Services' ? (
                                        <motion.div
                                            key={link.label}
                                            initial={{ opacity: 0, x: -16 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -8 }}
                                            transition={{ duration: prefersReducedMotion ? 0 : 0.25, delay: prefersReducedMotion ? 0 : index * 0.045 }}
                                        >
                                            <button
                                                type="button"
                                                className="flex w-full items-center justify-between rounded-2xl py-3 text-left text-4xl font-medium tracking-tight text-white transition hover:text-[#a7e50e] focus:outline-none focus-visible:text-[#a7e50e] sm:text-5xl"
                                                aria-expanded={mobileServicesOpen}
                                                aria-controls={servicesId}
                                                onClick={() => setMobileServicesOpen((value) => !value)}
                                            >
                                                Services
                                                <ChevronDown className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                                            </button>
                                            <AnimatePresence initial={false}>
                                                {mobileServicesOpen && (
                                                    <motion.div
                                                        id={servicesId}
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="mb-3 space-y-1 border-l border-white/15 py-2 pl-5">
                                                            {serviceItems.map((service) => (
                                                                <Link key={service} href={linkHref('#services')} onClick={closeMobileMenu} className="flex items-center justify-between py-2 text-base text-white/65 transition hover:text-[#a7e50e]">
                                                                    {service}<ArrowRight size={16} aria-hidden="true" />
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key={link.label}
                                            initial={{ opacity: 0, x: -16 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -8 }}
                                            transition={{ duration: prefersReducedMotion ? 0 : 0.25, delay: prefersReducedMotion ? 0 : index * 0.045 }}
                                        >
                                            <Link href={linkHref(link.href)} onClick={closeMobileMenu} className="block rounded-2xl py-3 text-4xl font-medium tracking-tight text-white transition hover:text-[#a7e50e] focus:outline-none focus-visible:text-[#a7e50e] sm:text-5xl">
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    ),
                                )}
                            </div>
                            <div className="mt-auto pt-10">
                                <button type="button" onClick={() => openCalendly()} className="group flex w-full items-center justify-between rounded-2xl bg-[#a7e50e] px-6 py-5 text-left text-lg font-semibold text-black transition hover:bg-[#c5ff36] focus:outline-none focus:ring-2 focus:ring-white">
                                    Start a project <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                                </button>
                                <p className="mt-6 text-xs font-medium uppercase tracking-[.22em] text-white/40">Premium digital experiences</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
