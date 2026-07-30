"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "Mintro Labs transformed our digital presence and gave us a brand we are proud of.",
    author: "A. Rahman",
    company: "Cresta Holdings",
  },
  {
    quote: "From strategy to launch, the team delivered premium quality with exceptional communication.",
    author: "J. Carter",
    company: "Northline Group",
  },
  {
    quote: "Their UX and software team helped us scale operations with confidence.",
    author: "S. Ibrahim",
    company: "FlowDesk",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % testimonials.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="bg-zinc-50/80 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-[#111111] sm:text-5xl">Testimonials</h2>
        <motion.figure
          key={testimonial.author}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl border border-white/60 bg-white/70 p-10 shadow-lg backdrop-blur-xl"
        >
          <blockquote className="text-xl leading-9 text-zinc-700">“{testimonial.quote}”</blockquote>
          <figcaption className="mt-6">
            <p className="font-semibold text-zinc-900">{testimonial.author}</p>
            <p className="text-sm text-zinc-500">{testimonial.company}</p>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
