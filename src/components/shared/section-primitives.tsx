'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// ─── SectionLabel ─────────────────────────────────────────────────────────────

interface SectionLabelProps {
  children: React.ReactNode;
  /** Use `light` when rendering on a dark/primary-colored background */
  light?: boolean;
}

export function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase font-medium mb-5 ${
        light
          ? 'text-primary-foreground/50 dark:text-foreground/50'
          : 'text-muted-foreground'
      }`}
    >
      <span
        className={`h-px w-6 inline-block ${
          light
            ? 'bg-primary-foreground/30 dark:bg-foreground/30'
            : 'bg-primary/50 dark:bg-secondary/50'
        }`}
      />
      {children}
    </span>
  );
}

// ─── AnimatedSection ──────────────────────────────────────────────────────────

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Margin around the viewport root used to trigger the animation.
   * Negative values mean the element must scroll further into view before animating.
   * @default "-80px"
   */
  margin?: string;
}

export function AnimatedSection({
  children,
  className,
  margin = '-80px',
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: margin as `${number}px` });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}