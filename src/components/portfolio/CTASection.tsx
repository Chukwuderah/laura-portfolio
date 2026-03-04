'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animation-variants';
import { SectionLabel, AnimatedSection } from '@/components/shared/section-primitives';

// ─── Props ────────────────────────────────────────────────────────────────────

interface CtaSectionProps {
  /** Small uppercase label above the heading. @default "Next Step" */
  label?: string;
  heading: string;
  subtext: string;
  /** Button copy. @default "Start Your Project" */
  buttonText?: string;
  /** Where the button links to. @default "/contact" */
  href?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

export function CtaSection({
  label = 'Next Step',
  heading,
  subtext,
  buttonText = 'Start Your Project',
  href = '/contact',
}: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden py-28 bg-primary dark:bg-muted">
      {/* Dot pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle, var(--color-primary-foreground) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Glow blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary/20 blur-[80px]"
      />

      <AnimatedSection className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div variants={fadeUp} custom={0}>
          <SectionLabel light>{label}</SectionLabel>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          custom={1}
          className="text-4xl md:text-5xl font-bold text-primary-foreground dark:text-foreground tracking-tight mb-5"
        >
          {heading}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="text-xl text-primary-foreground/70 dark:text-foreground/60 mb-10 max-w-md mx-auto"
        >
          {subtext}
        </motion.p>

        <motion.div variants={fadeUp} custom={3}>
          <Link
            href={href}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-background dark:bg-secondary text-foreground dark:text-secondary-foreground px-8 py-4 rounded-md text-sm font-semibold hover:opacity-90 active:scale-[0.97] transition-all duration-200 shadow-xl"
          >
            {buttonText}
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </AnimatedSection>
    </section>
  );
}