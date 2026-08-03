'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        const updateVisibility = () => setIsVisible(window.scrollY > 420);
        updateVisibility();
        window.addEventListener('scroll', updateVisibility, { passive: true });
        return () => window.removeEventListener('scroll', updateVisibility);
    }, []);

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    type="button"
                    initial={{ opacity: 0, y: 16, scale: 0.92 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 16, scale: 0.92 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    title="Back to top"
                    className="fixed bottom-24 right-6 z-[80] inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-zinc-950/90 text-white shadow-[0_12px_30px_rgba(0,0,0,.35)] backdrop-blur-md transition hover:-translate-y-1 hover:border-[#a7e50e]/50 hover:text-[#a7e50e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a7e50e] sm:right-8"
                >
                    <ArrowUp size={19} strokeWidth={2.25} aria-hidden="true" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
