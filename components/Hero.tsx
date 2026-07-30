"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden px-6 pb-24 pt-24 lg:px-8 lg:pt-32">
      <motion.div
        className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-0 h-96 w-96 rounded-full bg-zinc-900/10 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 24, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Reveal>
            <p className="mb-5 inline-flex rounded-full border border-zinc-200 bg-white/70 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">Luxury Tech Agency</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#111111] sm:text-5xl lg:text-7xl">
              Transforming Traditional Businesses Into Digital Brands
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:text-lg">
              We help businesses establish a strong digital presence through branding, websites, software, and digital experiences that drive sustainable growth.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="rounded-full bg-[#111111] px-7 py-3 text-sm font-medium text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-zinc-800">Start Your Project</a>
            <a href="#portfolio" className="rounded-full border border-zinc-300 bg-white px-7 py-3 text-sm font-medium text-zinc-800 transition hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-600">View Our Work</a>
          </Reveal>
        </div>
        <Reveal className="relative" delay={0.2}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/40 bg-gradient-to-br from-zinc-900 via-zinc-800 to-sky-600 p-8 shadow-2xl">
            <div className="absolute -left-8 top-16 h-28 w-28 rounded-full bg-white/20 blur-2xl" />
            <div className="absolute -right-8 bottom-16 h-28 w-28 rounded-full bg-sky-300/40 blur-2xl" />
            <div className="relative h-full rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">Mintro Labs</p>
              <p className="mt-5 text-2xl font-semibold leading-snug text-white">Premium digital foundations for ambitious businesses.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
