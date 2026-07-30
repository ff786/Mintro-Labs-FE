"use client";

import { Reveal } from "@/components/animations/Reveal";

const features = [
  "Long-term Partnership",
  "Modern Technologies",
  "Creative Design",
  "Scalable Solutions",
  "Business Growth Focus",
  "Reliable Support",
];

export function WhyChooseUs() {
  return (
    <section className="bg-zinc-50/80 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-[#111111] sm:text-5xl">Why Choose Us</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature} delay={index * 0.06} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-lg font-medium text-zinc-900">{feature}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
