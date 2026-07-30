"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/animations/Reveal";

function Counter({ end, label }: { end: number; label: string }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const tick = window.setInterval(() => {
      start += Math.ceil(end / 30);
      if (start >= end) {
        setValue(end);
        window.clearInterval(tick);
        return;
      }
      setValue(start);
    }, 30);

    return () => window.clearInterval(tick);
  }, [end]);

  return (
    <div className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
      <p className="text-3xl font-semibold text-[#111111]">{value}+</p>
      <p className="mt-2 text-sm text-zinc-600">{label}</p>
    </div>
  );
}

const milestones = ["Discover", "Brand Build", "Digital Launch", "Scale & Support"];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight text-[#111111] sm:text-5xl">About Mintro Labs</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">Mintro Labs helps businesses establish a strong digital presence by creating professional brands, modern websites, intuitive software, and digital experiences that drive growth.</p>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">We don&apos;t simply build websites—we build digital foundations that enable businesses to grow, connect with customers, and operate more efficiently.</p>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">Whether launching a new business or modernising an existing one, Mintro Labs becomes a long-term digital partner.</p>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        <Counter end={120} label="Projects Delivered" />
        <Counter end={95} label="Client Retention Rate" />
        <Counter end={8} label="Years Combined Experience" />
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {milestones.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="rounded-2xl border border-zinc-100 bg-zinc-50 p-5"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Phase {index + 1}</p>
            <p className="mt-3 text-lg font-medium text-zinc-900">{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
