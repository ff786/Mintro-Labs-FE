'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  once = true,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  const variants = {
    up: { opacity: 0, y: 32 },
    left: { opacity: 0, x: -32 },
    right: { opacity: 0, x: 32 },
    scale: { opacity: 0, scale: 0.94 },
  };

  return (
    <motion.div
      ref={ref}
      initial={variants[direction]}
      animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : variants[direction]}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
