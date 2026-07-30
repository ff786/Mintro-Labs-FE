"use client";

import { motion } from "framer-motion";

const steps = ["Discover", "Strategy", "Design", "Develop", "Launch", "Support"];

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <h2 className="text-3xl font-semibold tracking-tight text-[#111111] sm:text-5xl">Process</h2>
      <div className="mt-12 overflow-x-auto pb-2">
        <div className="flex min-w-max items-center gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex items-center gap-4"
            >
              <div className="min-w-40 rounded-2xl border border-zinc-200 bg-white px-6 py-5 text-center shadow-sm">
                <p className="text-sm font-medium text-zinc-500">Step {index + 1}</p>
                <p className="mt-1 text-lg font-semibold text-zinc-900">{step}</p>
              </div>
              {index !== steps.length - 1 ? <span className="text-zinc-400">↓</span> : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
