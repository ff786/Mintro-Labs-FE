"use client";

import { Reveal } from "@/components/animations/Reveal";

export function VisionMission() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal className="rounded-3xl border border-white/60 bg-white/60 p-8 shadow-xl backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Vision</p>
          <p className="mt-4 text-xl font-semibold leading-8 text-[#111111]">To become one of the most trusted digital transformation agencies helping thousands of businesses embrace technology and build strong digital brands.</p>
        </Reveal>
        <Reveal delay={0.1} className="rounded-3xl border border-white/60 bg-white/60 p-8 shadow-xl backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Mission</p>
          <p className="mt-4 text-xl font-semibold leading-8 text-[#111111]">To empower businesses with modern digital solutions that help them grow, compete and succeed in an increasingly digital world.</p>
        </Reveal>
      </div>
    </section>
  );
}
