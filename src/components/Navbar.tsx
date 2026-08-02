'use client';

import { Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { CalendlyModal } from '@/components/CalendlyModal';
import { CALENDLY_URL } from '@/data/contactInfo';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
];

const serviceItems = ['Brand Strategy', 'Web Experiences', 'UI/UX Systems', 'AI Automation'];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';

    const getLinkHref = (href: string) => {
        if (href.startsWith('#') && !isHome) {
            return `/${href}`;
        }
        return href;
    };
    const [open, setOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
    const handleOpen = (serviceTitle: string) => { setSelectedService(serviceTitle); setOpen(true); };

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    return (
        <header className="fixed inset-x-0 top-3 z-[60] flex justify-center px-6">
            <CalendlyModal
                open={open}
                onCloseAction={() => setOpen(false)}
                serviceTitle={selectedService}
                calendlyUrl={CALENDLY_URL}
            />
            <div
                className={`w-full max-w-6xl rounded-2xl transition-all duration-300 ${
                    scrolled
                        ? "border border-white/10 bg-black/85 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
                        : "border border-white/10 bg-black/70 backdrop-blur-xl"
                }`}
            >
                <nav
                    className="
            flex
            items-center
            justify-between
            h-20
            px-8
            lg:grid
            lg:grid-cols-[1fr_auto_1fr]
            lg:items-center"
                >

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
                                href={getLinkHref("#home")}
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
                                            href={getLinkHref(link.href)}
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
                                                        href={getLinkHref("#services")}
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
                                        href={getLinkHref(link.href)}
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
                            onClick={() => handleOpen("Work with us")}
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
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Toggle navigation"
                            className="rounded-full border border-white/10 p-2.5 text-white transition-colors hover:border-[#a7e50e]/50 hover:text-[#a7e50e]"
                            onClick={() => setMobileOpen((prev) => !prev)}
                        >
                            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </motion.button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.2 }}
                            className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl"
                        >
                            <div className="flex flex-col gap-0 px-6 py-8">
                                {/* Navigation Links */}
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                    >
                                        {link.label === "Services" ? (
                                            <div className="space-y-3">
                                                <Link
                                                    href={getLinkHref(link.href)}
                                                    className="block px-4 py-3 text-sm font-semibold text-white/90 transition-colors hover:text-[#a7e50e]"
                                                    onClick={() => setMobileOpen(false)}
                                                >
                                                    {link.label}
                                                </Link>

                                                {/* Service Items Submenu */}
                                                <div className="ml-4 space-y-2 border-l border-white/10 pl-4">
                                                    {serviceItems.map((item, itemIndex) => (
                                                        <motion.a
                                                            key={item}
                                                            href={getLinkHref("#services")}
                                                            initial={{ opacity: 0, x: -15 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ duration: 0.2, delay: (index * 0.05) + (itemIndex * 0.05) }}
                                                            className="block px-3 py-2 text-xs font-medium text-white/60 transition-all hover:text-[#a7e50e] hover:pl-4"
                                                            onClick={() => setMobileOpen(false)}
                                                        >
                                                            ✦ {item}
                                                        </motion.a>
                                                    ))}
                                                </div>
                                            </div>
                                        ) : (
                                            <Link
                                                href={getLinkHref(link.href)}
                                                className="block px-4 py-3 text-sm font-semibold text-white/90 transition-colors hover:text-[#a7e50e]"
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </motion.div>
                                ))}

                                {/* Divider */}
                                <div className="my-4 h-px bg-gradient-to-r from-white/0 via-white/10 to-white/0" />

                                {/* CTA Button */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: navLinks.length * 0.05 + 0.1 }}
                                    className="mt-2"
                                >
                                    <motion.a
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex items-center justify-center gap-2 rounded-xl border border-[#a7e50e]/30 bg-gradient-to-r from-[#a7e50e]/10 to-[#a7e50e]/5 px-6 py-3.5 text-sm font-semibold text-[#a7e50e] transition-all hover:border-[#a7e50e]/60 hover:bg-[#a7e50e]/15"
                                        onClick={() => {
                                            setMobileOpen(false);
                                            handleOpen("Work with us");
                                        }}
                                    >
                                        <span>Work with us</span>
                                        <ArrowRight size={16} />
                                    </motion.a>
                                </motion.div>

                                {/* Brand Tagline */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3, delay: navLinks.length * 0.05 + 0.2 }}
                                    className="mt-8 space-y-3 border-t border-white/10 pt-8 text-center"
                                >
                                    <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                                        Let's build something amazing
                                    </p>
                                    <p className="text-xs text-white/50">
                                        hello@mintrolabs.com
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}