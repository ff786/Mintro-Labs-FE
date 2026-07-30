"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const categories = ["All", "Branding", "Web", "Software"];

const projects = [
  { title: "Luxe Finance Rebrand", category: "Branding", description: "Brand strategy and visual identity for a fintech company." },
  { title: "Apex Corporate Website", category: "Web", description: "Corporate website redesign with conversion-focused UX." },
  { title: "FlowDesk CRM", category: "Software", description: "CRM platform with custom dashboards and automation." },
  { title: "Nova Clinics Platform", category: "Web", description: "Multi-location clinic booking and growth website." },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = useMemo(
    () => projects.filter((project) => activeCategory === "All" || project.category === activeCategory),
    [activeCategory],
  );

  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <h2 className="text-3xl font-semibold tracking-tight text-[#111111] sm:text-5xl">Portfolio</h2>
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              activeCategory === category
                ? "border-[#111111] bg-[#111111] text-white"
                : "border-zinc-300 text-zinc-700 hover:border-sky-400 hover:text-sky-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {filtered.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm"
          >
            <div className="aspect-video bg-gradient-to-br from-zinc-900 via-zinc-700 to-sky-500 transition duration-500 group-hover:scale-105" />
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{project.category}</p>
              <h3 className="mt-2 text-xl font-semibold text-zinc-900">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{project.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
