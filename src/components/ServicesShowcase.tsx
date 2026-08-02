'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';
import { useMemo, useState } from 'react';
import FloatingTechIcon from './FloatingTechIcon';
import { technologies } from '@/data/servicesData';
import { Reveal } from '@/components/Reveal';

export default function ServicesShowcase() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeTech = useMemo(
      () => technologies.find((tech) => tech.id === activeId),
      [activeId]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  return (
      <section className="relative isolate w-full overflow-hidden py-20 px-4">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
              className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
              animate={{
                opacity: [0.03, 0.08, 0.03],
                scale: [1, 1.08, 1],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                background: 'radial-gradient(circle, rgba(167,229,14,0.12) 0%, rgba(167,229,14,0.03) 30%, transparent 70%)',
              }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <ScrollReveal direction="up">
            <div className="text-center mb-8">
              <Reveal className="max-w-4xl text-center mx-auto">
                <p className="text-m font-semibold uppercase tracking-[0.35em] text-sky">What we build</p>
              </Reveal>
              <motion.h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
              >
                Everything your business needs
                <br />
                to build a powerful{' '}
                <motion.span
                    className="bg-gradient-to-r from-[#a7e50e] via-lime-400 to-[#dff8a5] bg-clip-text text-transparent"
                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ backgroundSize: '200% 200%' }}
                >
                  digital presence.
                </motion.span>
              </motion.h2>

              <motion.p
                  className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
              >
                From branding and websites to AI automation and custom software, Mintro Labs provides
                end-to-end digital solutions that help businesses launch, grow, and scale with confidence.
              </motion.p>
            </div>
          </ScrollReveal>

          {/* Main Orbit Container */}
          <div className="relative flex flex-col items-center">
            <div className="relative w-[650px] h-[650px]">
              {/* Orbiting Tech Icons */}
              <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}
              >
                {technologies.map((tech) => (
                    <FloatingTechIcon
                        key={tech.id}
                        tech={tech}
                        active={activeId === tech.id}
                        onHoverStart={() => setActiveId(tech.id)}
                        onHoverEnd={() => setActiveId(null)}
                    />
                ))}
              </motion.div>

              {/* Center Nucleus */}
              <motion.div
                  className="absolute flex flex-col items-center justify-center rounded-full border-2 border-[#a7e50e]/40 bg-black/50 text-center backdrop-blur-2xl shadow-[0_0_40px_rgba(167,229,14,0.15)]"
                  style={{
                    left: '50%',
                    top: '50%',
                    width: '230px',
                    height: '230px',
                    marginLeft: '-112px',
                    marginTop: '-112px',
                  }}
                  animate={{
                    boxShadow: `0 0 60px rgba(167,229,14,0.2)`,
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                  <h3 className="text-sm uppercase tracking-widest text-[#a7e50e] font-semibold mb-2">
                    Mintro Labs
                  </h3>
                  <p className="text-xl font-bold text-white mb-6">Crafting Digital Experiences</p>

                  <div className="space-y-4 text-sm text-white/70">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-1 h-1 bg-[#a7e50e] rounded-full" />
                      <span>6 Core Services</span>
                      <div className="w-1 h-1 bg-[#a7e50e] rounded-full" />
                    </div>
                    {/*<div className="flex items-center justify-center gap-2">
                      <div className="w-1 h-1 bg-[#a7e50e] rounded-full" />
                      <span>50+ Projects</span>
                      <div className="w-1 h-1 bg-[#a7e50e] rounded-full" />
                    </div>*/}
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-1 h-1 bg-[#a7e50e] rounded-full" />
                      <span>15+ Technologies</span>
                      <div className="w-1 h-1 bg-[#a7e50e] rounded-full" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Expanded Service Card */}
              <AnimatePresence>
                {activeTech && (
                  <motion.div
                    key={activeTech.id}
                    className="absolute mt-8 left-1/2 w-[min(92%,520px)] -translate-x-1/2 rounded-3xl border border-[#a7e50e]/20 bg-black/75 p-8 backdrop-blur-xl shadow-lg"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    style={{
                      boxShadow: `0 10px 40px rgba(167,229,14,0.1)`,
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <motion.div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl flex-shrink-0"
                        style={{
                          backgroundColor: `${activeTech.accent}15`,
                          border: `2px solid ${activeTech.accent}40`,
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {activeTech.icon && (
                          <activeTech.icon size={32} style={{ color: activeTech.accent }} />
                        )}
                      </motion.div>

                      <div>
                        <motion.p
                          className="text-sm font-bold uppercase tracking-widest"
                          style={{ color: activeTech.accent }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          {activeTech.name}
                        </motion.p>
                        <p className="text-sm text-white/60 mt-1">{activeTech.subtitle}</p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-[#a7e50e]/0 via-[#a7e50e]/30 to-[#a7e50e]/0 my-4" />

                    {/* Built With Section */}
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={containerVariants}
                    >
                      <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">
                        Built With
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeTech.technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            variants={{
                              hidden: { opacity: 0, y: 10, scale: 0.8 },
                              visible: {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: { duration: 0.3 },
                              },
                            }}
                            className="rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-all hover:scale-105"
                            style={{
                              backgroundColor: `${activeTech.accent}12`,
                              color: activeTech.accent,
                              border: `1px solid ${activeTech.accent}30`,
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA Section
          <ScrollReveal direction="up" delay={0.4}>
            <div className="mt-96 text-center space-y-6">
              <p className="text-lg text-white/70">
                Ready to transform your business digitally?
              </p>
              <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#a7e50e] text-black rounded-xl font-semibold hover:bg-[#dff8a5] transition-all inline-flex items-center gap-2 group"
              >
                Start Your Project Today
                <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>
            </div>
          </ScrollReveal>*/}
        </div>
      </section>
  );
}