"use client";

import { motion } from "framer-motion";
import { Palette, Globe, PanelsTopLeft, Megaphone, Cog, Sparkles } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";

const services = [
  {
    title: "Brand Identity & Logo Design",
    icon: Palette,
    items: ["Logo Design", "Brand Identity", "Brand Guidelines", "Colour Palette", "Business Stationery"],
  },
  {
    title: "Website Development",
    icon: Globe,
    items: ["Business Websites", "Corporate Websites", "Landing Pages", "Portfolio Websites", "Website Maintenance"],
  },
  {
    title: "UI/UX Design",
    icon: PanelsTopLeft,
    items: ["Website UI", "Mobile UI", "Wireframing", "Interactive Prototypes", "UX Design"],
  },
  {
    title: "Social Media Management",
    icon: Megaphone,
    items: ["Business Pages", "Post Design", "Content Scheduling", "Optimisation"],
  },
  {
    title: "Software Development",
    icon: Cog,
    items: ["CRM Systems", "Booking Systems", "Business Systems", "Android Apps", "iOS Apps"],
  },
  {
    title: "AI Automation",
    icon: Sparkles,
    items: ["AI Chatbots", "Workflow Automation", "Customer Support", "Lead Capture", "AI Business Processes"],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-zinc-50/80 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-[#111111] sm:text-5xl">Services</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.07 }}
              className="group rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <service.icon className="h-6 w-6 text-sky-500" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-zinc-900">{service.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                {service.items.map((item) => (
                  <li key={item} className="transition group-hover:translate-x-1">{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
