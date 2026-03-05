"use client";

import Link from "next/link";
import {
  Target,
  Users,
  TrendingUp,
  Layers,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  slideLeft,
  slideRight,
} from "@/lib/animation-variants";
import {
  SectionLabel,
  AnimatedSection,
} from "@/components/shared/section-primitives";
import { CtaSection } from "@/components/portfolio/CTASection";
import {
  OfferingsGrid,
  type Offering,
} from "@/components/portfolio/OfferingsGrid";

// ─── Data ────────────────────────────────────────────────────────────────────

const OFFERINGS: Offering[] = [
  {
    icon: Target,
    title: "Product Strategy",
    description:
      "Define vision, roadmap, and go-to-market strategies aligned with business objectives.",
    index: "01",
  },
  {
    icon: Users,
    title: "Stakeholder Management",
    description:
      "Bridge communication between teams, executives, and customers effortlessly.",
    index: "02",
  },
  {
    icon: TrendingUp,
    title: "Product Development",
    description:
      "Lead cross-functional teams from ideation through a successful launch.",
    index: "03",
  },
  {
    icon: Layers,
    title: "Feature Prioritization",
    description:
      "Data-driven decisions on what to build, when to build it, and why.",
    index: "04",
  },
] as const;

const ACHIEVEMENTS = [
  { number: "15+", label: "Products Launched" },
  { number: "30%", label: "Avg. Revenue Growth" },
  { number: "95%", label: "Stakeholder Satisfaction" },
  { number: "50+", label: "Features Delivered" },
] as const;

const APPROACH_ITEMS = [
  "User-first mindset with continuous feedback loops",
  "Agile methodologies for flexibility and speed",
  "Data analytics to inform prioritization decisions",
  "Clear communication across all stakeholders",
  "Focus on measurable outcomes and KPIs",
] as const;

const LIFECYCLE_STAGES = [
  { stage: "01", label: "Discovery & Ideation" },
  { stage: "02", label: "Strategy & Planning" },
  { stage: "03", label: "Development & Testing" },
  { stage: "04", label: "Launch & Growth" },
  { stage: "05", label: "Optimization & Scaling" },
] as const;

export default function ProductManagementPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-accent/60 dark:bg-card pt-24 pb-28">
        {/* Decorative grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Warm glow blob */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-32 h-130 w-130 rounded-full bg-secondary/30 dark:bg-secondary/10 blur-[96px]"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={fadeUp} custom={0}>
              <SectionLabel>Service</SectionLabel>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center sm:text-left font-bold text-foreground leading-[1.05] tracking-tight mb-6"
            >
              Strategic{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary dark:text-secondary">
                  Product
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute bottom-1 left-0 right-0 h-1.5 bg-primary/40 origin-left z-0 rounded-full"
                />
              </span>{" "}
              <br />
              Management
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-center sm:text-left text-foreground/65 leading-relaxed mb-10 max-w-xl"
            >
              Turning product visions into reality by aligning teams,
              prioritizing features, and delivering products that users love and
              businesses need.
            </motion.p>

            <motion.div variants={fadeUp} custom={3}>
              <Link
                href="/contact"
                className="
                  w-full sm:w-auto group inline-flex items-center justify-center gap-3
                  bg-primary dark:bg-secondary
                  text-primary-foreground dark:text-secondary-foreground
                  px-7 py-3.5 rounded-md sm:rounded-full text-sm font-semibold
                  hover:opacity-90 active:scale-[0.97]
                  transition-all duration-200
                "
              >
                Let&apos;s Build Together
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Achievements ── */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-8 md:gap-4">
            {ACHIEVEMENTS.map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                custom={i}
                className="group text-center md:text-left border-b h-full pb-3 sm:border-b-0 border-l border-border first:border-0 md:pl-8 first:pl-0"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary dark:text-secondary mb-1 tabular-nums">
                  {item.number}
                </div>
                <div className="text-sm text-muted-foreground tracking-wide">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── Core Competencies ── */}
      <section className="py-24 bg-background dark:bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <motion.div variants={fadeUp} custom={0} className="mb-14">
              <SectionLabel>What I Offer</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Core Competencies
              </h2>
            </motion.div>

            <OfferingsGrid offerings={OFFERINGS} />
          </AnimatedSection>
        </div>
      </section>

      {/* ── Approach + Lifecycle ── */}
      <section className="py-24 bg-accent/30 dark:bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left — Approach */}
            <AnimatedSection>
              <motion.div variants={slideLeft}>
                <SectionLabel>How I Work</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-5">
                  My Product Management Approach
                </h2>
                <p className="text-foreground/60 leading-relaxed mb-10 text-sm">
                  Every decision is backed by research, validated with users,
                  and aligned with business goals — no guesswork, just clarity.
                </p>

                <ul className="space-y-4">
                  {APPROACH_ITEMS.map((item, i) => (
                    <motion.li
                      key={item}
                      variants={fadeIn}
                      custom={i}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary dark:text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground/75 text-sm leading-relaxed">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>

            {/* Right — Lifecycle */}
            <AnimatedSection>
              <motion.div
                variants={slideRight}
                className="bg-background dark:bg-background/50 border border-border rounded-2xl p-8"
              >
                <h3 className="text-lg font-semibold text-foreground mb-8">
                  Product Lifecycle Expertise
                </h3>

                <ol className="relative space-y-0">
                  {LIFECYCLE_STAGES.map((item, i) => (
                    <motion.li
                      key={item.stage}
                      variants={fadeUp}
                      custom={i}
                      className="flex gap-5 group"
                    >
                      {/* Connector */}
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full border-2 border-primary/30 dark:border-secondary/30 group-hover:border-primary dark:group-hover:border-secondary flex items-center justify-center shrink-0 transition-colors duration-200 bg-background dark:bg-card z-10">
                          <span className="text-[10px] font-bold text-primary/60 dark:text-secondary/60 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                            {item.stage}
                          </span>
                        </div>
                        {i < LIFECYCLE_STAGES.length - 1 && (
                          <div className="w-px flex-1 bg-border my-1" />
                        )}
                      </div>

                      <div className="pb-6 pt-1.5">
                        <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors duration-200">
                          {item.label}
                        </span>
                      </div>
                    </motion.li>
                  ))}
                </ol>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CtaSection
        heading="Let's Build Something Amazing"
        subtext="Ready to take your product to the next level? Let's talk."
        buttonText="Start Your Project"
      />
    </div>
  );
}
