'use client';

import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { scaleIn } from '@/lib/animation-variants';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Offering {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: string;
}

interface OfferingsGridProps {
  offerings: Offering[];
}

// ─── Component ────────────────────────────────────────────────────────────────

export function OfferingsGrid({ offerings }: OfferingsGridProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {offerings.map((item, i) => {
        const Icon = item.icon;
        const displayIndex = item.index ?? String(i + 1).padStart(2, '0');

        return (
          <motion.div
            key={item.title}
            variants={scaleIn}
            custom={i}
            className="group relative overflow-hidden bg-accent/40 dark:bg-card border border-border rounded-2xl p-8 hover:border-primary/30 dark:hover:border-secondary/30 hover:shadow-lg transition-all duration-300"
          >
            {/* Watermark index */}
            <span
              aria-hidden="true"
              className="absolute top-5 right-6 text-6xl font-black text-foreground/4 dark:text-foreground/6 select-none leading-none"
            >
              {displayIndex}
            </span>

            {/* Icon */}
            <div className="w-11 h-11 rounded-xl bg-secondary/40 dark:bg-secondary/20 flex items-center justify-center mb-5 group-hover:bg-primary/10 dark:group-hover:bg-secondary/30 transition-colors">
              <Icon className="w-5 h-5 text-primary dark:text-secondary" />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}