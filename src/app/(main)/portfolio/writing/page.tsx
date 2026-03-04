"use client";

import Link from "next/link";
import {
  FileText,
  BookOpen,
  Newspaper,
  FileCode,
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
import {
  OfferingsGrid,
  type Offering,
} from "@/components/portfolio/OfferingsGrid";
import { CtaSection } from "@/components/portfolio/CTASection";

// ─── Data ────────────────────────────────────────────────────────────────────

const OFFERINGS: Offering[] = [
  {
    icon: FileText,
    title: "Blog Posts & Articles",
    description:
      "Engaging, SEO-optimized content that drives organic traffic and builds lasting authority.",
  },
  {
    icon: BookOpen,
    title: "Technical Documentation",
    description:
      "Clear, comprehensive guides and documentation for technical products and platforms.",
  },
  {
    icon: Newspaper,
    title: "Marketing Copy",
    description:
      "Persuasive copy for landing pages, email sequences, and high-converting ad campaigns.",
  },
  {
    icon: FileCode,
    title: "Content Strategy",
    description:
      "Strategic editorial planning and content calendars aligned with your business goals.",
  },
];

const BENEFITS = [
  "Increased organic traffic and search visibility",
  "Consistent brand voice across all platforms",
  "Higher engagement and conversion rates",
  "Professional, error-free content every time",
  "Time savings for your internal team",
  "Measurable, reportable content ROI",
] as const;

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Research",
    description:
      "In-depth research to understand your audience, goals, and competitive landscape.",
  },
  {
    step: "02",
    title: "Strategic Planning",
    description:
      "Detailed outlines and content strategies to ensure alignment with your objectives.",
  },
  {
    step: "03",
    title: "Content Creation",
    description:
      "Compelling, on-brand writing that resonates with your audience and drives action.",
  },
  {
    step: "04",
    title: "Review & Refinement",
    description:
      "Iterative revisions to ensure every piece aligns perfectly with your brand identity.",
  },
] as const;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WritingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-accent/60 dark:bg-card pt-24 pb-28">
        {/* Horizontal line texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, var(--color-foreground) 0px, var(--color-foreground) 1px, transparent 1px, transparent 40px)",
          }}
        />
        {/* Warm glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 h-120 w-120 rounded-full bg-secondary/40 dark:bg-secondary/10 blur-[100px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/10 dark:bg-primary/5 blur-[80px]"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={fadeUp} custom={0}>
              <SectionLabel>Service</SectionLabel>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground text-center sm:text-left leading-[1.05] tracking-tight mb-6"
            >
              Professional{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary dark:text-secondary">
                  Writing
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute bottom-1 left-0 right-0 h-1.5 bg-primary/40 origin-left z-0 rounded-full"
                />
              </span>{" "}
              <br />
              Services
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-foreground/65 text-center sm:text-left leading-relaxed mb-10 max-w-xl"
            >
              Compelling content that captures your brand voice and connects
              with your audience — words that inform, inspire, and convert.
            </motion.p>

            <motion.div variants={fadeUp} custom={3}>
              <Link
                href="/contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground px-7 py-3.5 rounded-md sm:rounded-full text-sm font-semibold hover:opacity-90 active:scale-[0.97] transition-all duration-200"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── What I Offer ── */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <motion.div variants={fadeUp} custom={0} className="mb-14">
              <SectionLabel>What I Offer</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Writing Services
              </h2>
            </motion.div>

            <OfferingsGrid offerings={OFFERINGS} />
          </AnimatedSection>
        </div>
      </section>

      {/* ── Benefits + Process ── */}
      <section className="py-24 bg-accent/30 dark:bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left — Benefits */}
            <AnimatedSection>
              <motion.div variants={slideLeft}>
                <SectionLabel>Why Work With Me</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-5">
                  Why Choose My Writing Services?
                </h2>
                <p className="text-foreground/60 text-sm leading-relaxed mb-10">
                  A unique combination of creative flair and strategic thinking
                  applied to every project. With experience across multiple
                  industries, I understand what makes content resonate with
                  different audiences.
                </p>

                <ul className="space-y-4">
                  {BENEFITS.map((benefit, i) => (
                    <motion.li
                      key={benefit}
                      variants={fadeIn}
                      custom={i}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary dark:text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground/75 text-sm leading-relaxed">
                        {benefit}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>

            {/* Right — Process */}
            <AnimatedSection>
              <motion.div
                variants={slideRight}
                className="bg-background dark:bg-background/50 border border-border rounded-2xl p-8"
              >
                <h3 className="text-lg font-semibold text-foreground mb-8">
                  My Writing Process
                </h3>

                <ol className="relative space-y-0">
                  {PROCESS_STEPS.map((item, i) => (
                    <motion.li
                      key={item.step}
                      variants={fadeUp}
                      custom={i}
                      className="flex gap-5 group"
                    >
                      {/* Connector column */}
                      <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full border-2 border-primary/30 dark:border-secondary/30 group-hover:border-primary dark:group-hover:border-secondary flex items-center justify-center shrink-0 transition-colors duration-200 bg-background dark:bg-card z-10">
                          <span className="text-[10px] font-bold text-primary/60 dark:text-secondary/60 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                            {item.step}
                          </span>
                        </div>
                        {i < PROCESS_STEPS.length - 1 && (
                          <div className="w-px flex-1 bg-border my-1" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="pb-7 pt-1">
                        <h4 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-200">
                          {item.title}
                        </h4>
                        <p className="text-xs text-foreground/55 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ol>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CtaSection
        heading="Ready to Elevate Your Content?"
        subtext="Let's create content that drives real results for your business."
        buttonText="Get Started Today"
      />
    </div>
  );
}
