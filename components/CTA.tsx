"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl bg-[#111111] px-8 py-14 text-center text-white shadow-2xl"
      >
        <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">Let&apos;s Build Your Digital Future.</h2>
        <a href="mailto:hello@mintrolabs.com" className="mt-8 inline-block rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#111111] transition hover:-translate-y-0.5 hover:bg-sky-100">
          Book a Free Consultation
        </a>
      </motion.div>
    </section>
  );
}
