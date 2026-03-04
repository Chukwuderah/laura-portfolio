"use client";

import Link from "next/link";
import {
  Palette,
  Image,
  Layout,
  Sparkles,
  CheckCircle,
  ArrowRight,
  TrendingUp,
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
    icon: Palette,
    title: "Brand Identity",
    description:
      "Logos, color palettes, and visual guidelines that define and distinguish your brand.",
    index: "01",
  },
  {
    icon: Image,
    title: "Marketing Materials",
    description:
      "Social media graphics, banners, ads, and promotional content built to convert.",
    index: "02",
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description:
      "User interfaces and experiences that delight, guide, and convert visitors.",
    index: "03",
  },
  {
    icon: Sparkles,
    title: "Print & Digital",
    description:
      "Business cards, brochures, presentations, and every touchpoint in between.",
    index: "04",
  },
] as const;

const PORTFOLIO = [
  {
    title: "Brand Refresh for Tech Startup",
    description:
      "Complete rebrand including logo, color system, and full marketing collateral suite.",
    impact: "200% increase in brand recognition",
    tag: "Branding",
  },
  {
    title: "Social Media Campaign",
    description:
      "Series of eye-catching graphics crafted for a high-stakes product launch.",
    impact: "150% boost in engagement rates",
    tag: "Campaign",
  },
  {
    title: "E-commerce Website Design",
    description:
      "Modern, conversion-focused design system built for scale and clarity.",
    impact: "85% increase in conversion rate",
    tag: "UI/UX",
  },
] as const;

const PHILOSOPHY_ITEMS = [
  "User-centered design approach at every stage",
  "Brand consistency across all touchpoints",
  "Latest design trends paired with timeless principles",
  "Fast turnaround without compromising quality",
  "Unlimited revisions until you are fully satisfied",
] as const;

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Brief & Research",
    description:
      "Understanding your vision, goals, and target audience deeply.",
  },
  {
    step: "02",
    title: "Concept Development",
    description: "Creating initial design concepts and high-fidelity mockups.",
  },
  {
    step: "03",
    title: "Refinement",
    description: "Iterating collaboratively based on your structured feedback.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Final files exported in all required formats, ready to use.",
  },
] as const;

export default function GraphicsDesigningPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-accent/60 dark:bg-card pt-24 pb-28">
        {/* Dot grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.05] dark:opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--color-foreground) 1.2px, transparent 1.2px)",
            backgroundSize: "36px 36px",
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
              Creative{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary dark:text-secondary">
                  Graphics
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
              Designing
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-foreground/65 text-center sm:text-left leading-relaxed mb-10 max-w-xl"
            >
              Visual designs that tell your story and command attention —
              crafted not just to look stunning, but to drive real business
              results.
            </motion.p>

            <motion.div variants={fadeUp} custom={3}>
              <Link
                href="/contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground px-7 py-3.5 rounded-md sm:rounded-full text-sm font-semibold hover:opacity-90 active:scale-[0.97] transition-all duration-200"
              >
                Let&apos;s Create Together
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Design Services ── */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <motion.div variants={fadeUp} custom={0} className="mb-14">
              <SectionLabel>What I Offer</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Design Services
              </h2>
            </motion.div>

            <OfferingsGrid offerings={OFFERINGS} />
          </AnimatedSection>
        </div>
      </section>

      {/* ── Portfolio Highlights ── */}
      <section className="py-24 bg-accent/30 dark:bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <motion.div variants={fadeUp} custom={0} className="mb-14">
              <SectionLabel>Proof of Work</SectionLabel>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-center sm:text-left font-bold text-foreground tracking-tight">
                Recent Work Highlights
              </h2>
            </motion.div>

            <div className="space-y-5">
              {PORTFOLIO.map((project, i) => (
                <motion.div
                  key={project.title}
                  variants={fadeUp}
                  custom={i}
                  className="group bg-background dark:bg-background/50 border border-border rounded-2xl p-8 hover:border-primary/25 dark:hover:border-secondary/25 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Index */}
                    <span className="hidden md:block text-3xl font-black text-foreground/10 dark:text-foreground/[0.07] tabular-nums shrink-0 w-10">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="flex-1">
                      {/* Tag */}
                      <span className="inline-block text-[10px] tracking-widest uppercase font-semibold text-muted-foreground bg-secondary/30 dark:bg-secondary/10 px-3 py-1 rounded-full mb-3">
                        {project.tag}
                      </span>

                      <h3 className="text-xl font-semibold text-foreground mb-1.5 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-foreground/60 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Impact pill */}
                    <div className="shrink-0 flex items-center gap-2 bg-secondary/30 dark:bg-secondary/10 border border-secondary/40 dark:border-secondary/20 px-4 py-2.5 rounded-full">
                      <TrendingUp className="w-3.5 h-3.5 text-primary dark:text-secondary shrink-0" />
                      <span className="text-xs font-semibold text-primary dark:text-secondary whitespace-nowrap">
                        {project.impact}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Philosophy + Process ── */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left — Philosophy */}
            <AnimatedSection>
              <motion.div variants={slideLeft}>
                <SectionLabel>My Thinking</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-5">
                  My Design Philosophy
                </h2>
                <p className="text-foreground/60 text-sm leading-relaxed mb-10">
                  Great design is more than aesthetics — it&apos;s about solving
                  real problems and creating experiences that genuinely
                  resonate. I combine creativity with strategic thinking to
                  deliver designs that actually work.
                </p>

                <ul className="space-y-4">
                  {PHILOSOPHY_ITEMS.map((item, i) => (
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

            {/* Right — Process */}
            <AnimatedSection>
              <motion.div
                variants={slideRight}
                className="bg-accent/40 dark:bg-card border border-border rounded-2xl p-8"
              >
                <h3 className="text-lg font-semibold text-foreground mb-8">
                  Design Process
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

      <CtaSection
        heading="Let's Bring Your Vision to Life"
        subtext="Ready to create stunning visuals for your brand?"
        buttonText="Start Your Design Project"
      />
    </div>
  );
}
