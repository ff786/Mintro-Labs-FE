'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useMemo, useState } from 'react';

export function Hero() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const style = useMemo(
    () => ({
      transform: `translate3d(${pointer.x * 12}px, ${pointer.y * 12}px, 0)`,
    }),
    [pointer]
  );

  return (
    <section id="home" className="relative isolate w-full overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(167,229,14,0.18),_transparent_35%),linear-gradient(135deg,_#060606_0%,_#101010_55%,_#050505_100%)]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-8%] top-[-8%] h-80 w-80 rounded-full bg-sky/20 blur-3xl" />
          <div className="absolute right-[-5%] top-[10%] h-[28rem] w-[28rem] rounded-full bg-white/5 blur-3xl" />
          <motion.div className="absolute bottom-[-10%] left-[15%] h-56 w-56 rounded-[3rem] border border-sky/20 bg-white/10 backdrop-blur-xl" animate={{ rotate: [0, 8, 0], scale: [1, 1.03, 1] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="absolute right-[10%] top-[20%] h-72 w-72 rounded-full border border-white/10 bg-zinc-900/80 backdrop-blur-2xl" animate={{ y: [0, -18, 0], x: [0, 14, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
      </div>

      <div className="section-shell relative flex min-h-[100svh] flex-col justify-center py-32 sm:py-36 lg:py-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-3xl">
            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-6 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white/75 backdrop-blur">
              Premium digital agency • strategy • design • growth
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="text-balance text-4xl font-semibold leading-[0.92] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
              Transforming traditional businesses into digital brands.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="mt-8 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              We help ambitious companies craft unforgettable identities, world-class websites, and intelligent digital experiences that grow with their ambition.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-luxury transition hover:-translate-y-0.5 hover:bg-sky hover:text-white">
                Start Your Project <ArrowRight size={18} />
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-zinc-900/70 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-sky/20 hover:text-sky">
                <Play size={16} /> View Our Work
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }} onMouseMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); const x = (event.clientX - rect.left) / rect.width - 0.5; const y = (event.clientY - rect.top) / rect.height - 0.5; setPointer({ x, y }); }} onMouseLeave={() => setPointer({ x: 0, y: 0 })} className="relative mx-auto w-full max-w-[540px] lg:max-w-none">
            <div className="glass-card relative overflow-hidden p-6 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(167,229,14,0.16),transparent_40%)]" />
              <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 p-8 text-white shadow-2xl">
                <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-white/70">
                  <span>Digital footprint</span>
                  <span>2026</span>
                </div>
                <div className="mt-10 space-y-5">
                  <div className="h-2 w-16 rounded-full bg-sky" />
                  <div className="space-y-3">
                    <div className="h-3 w-full rounded-full bg-white/20" />
                    <div className="h-3 w-5/6 rounded-full bg-white/20" />
                    <div className="h-3 w-2/3 rounded-full bg-white/20" />
                  </div>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">Brand</p>
                    <p className="mt-2 text-2xl font-semibold">+180%</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">Launch</p>
                    <p className="mt-2 text-2xl font-semibold">12 weeks</p>
                  </div>
                </div>
                <motion.div className="absolute right-[-8%] top-[10%] h-32 w-32 rounded-full border border-sky/40" style={style} animate={{ y: [0, -10, 0], x: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
