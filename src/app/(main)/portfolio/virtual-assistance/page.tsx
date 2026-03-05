"use client";

import Link from "next/link";
import {
  Calendar,
  Mail,
  FileText,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeIn,
  slideLeft,
  slideRight,
  scaleIn,
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
    icon: Calendar,
    title: "Calendar Management",
    description:
      "Schedule coordination, meeting planning, and time optimization across time zones.",
  },
  {
    icon: Mail,
    title: "Email Management",
    description:
      "Inbox organisation, response handling, and communication prioritization at scale.",
  },
  {
    icon: FileText,
    title: "Administrative Tasks",
    description:
      "Document preparation, data entry, thorough research, and structured reporting.",
  },
  {
    icon: Clock,
    title: "Project Coordination",
    description:
      "Task tracking, deadline management, and cross-team coordination that keeps things moving.",
  },
];

const BENEFITS = [
  "Save 10-15 hours per week on administrative tasks",
  "Never miss important meetings or deadlines",
  "Stay organised with systematic, repeatable processes",
  "Focus on high-value strategic work",
  "Professional communication handling at every level",
  "Flexible support that scales with your needs",
] as const;

const WORKING_STYLE = [
  {
    trait: "Proactive",
    detail: "Anticipating needs before they become urgent",
  },
  { trait: "Organised", detail: "Systematic approach applied to every task" },
  { trait: "Responsive", detail: "Quick turnaround on all requests, always" },
  {
    trait: "Confidential",
    detail: "Full discretion with sensitive information",
  },
  { trait: "Tech-savvy", detail: "Proficient in modern tools and platforms" },
] as const;

const TOOLS = [
  "Google Workspace",
  "Microsoft 365",
  "Slack",
  "Asana",
  "Trello",
  "Notion",
  "Zoom",
  "Calendly",
] as const;

const INDUSTRIES = [
  "Tech & Startups",
  "E-commerce",
  "Consulting",
  "Real Estate",
  "Marketing Agencies",
  "Healthcare",
  "Finance",
  "Education",
] as const;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function VirtualAssistancePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-accent/60 dark:bg-card pt-24 pb-28">
        {/* Grid texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        {/* Glow blobs */}
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
                  Virtual
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
              Assistance
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-foreground/65 text-center sm:text-left leading-relaxed mb-10 max-w-xl"
            >
              Reliable, proactive support that keeps your business running
              smoothly. I handle the details so you can focus on what matters
              most — growing your business.
            </motion.p>

            <motion.div variants={fadeUp} custom={3}>
              <Link
                href="/contact"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground px-7 py-3.5 rounded-md sm:rounded-full text-sm font-semibold hover:opacity-90 active:scale-[0.97] transition-all duration-200"
              >
                Get Support Today
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── How I Can Help ── */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <motion.div variants={fadeUp} custom={0} className="mb-14">
              <SectionLabel>What I Offer</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                How I Can Help
              </h2>
            </motion.div>

            <OfferingsGrid offerings={OFFERINGS} />
          </AnimatedSection>
        </div>
      </section>

      {/* ── Benefits + Working Style ── */}
      <section className="py-24 bg-accent/30 dark:bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left — Benefits */}
            <AnimatedSection>
              <motion.div variants={slideLeft}>
                <SectionLabel>Why Work With Me</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-5">
                  Why Businesses Choose Me
                </h2>
                <p className="text-foreground/60 text-sm leading-relaxed mb-10">
                  Not just a task-doer — a strategic partner who anticipates
                  needs, solves problems proactively, and helps businesses
                  operate more efficiently day-to-day.
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

            {/* Right — Working Style + Tools */}
            <AnimatedSection>
              <motion.div
                variants={slideRight}
                className="bg-background dark:bg-background/50 border border-border rounded-2xl p-8"
              >
                <h3 className="text-lg font-semibold text-foreground mb-8">
                  My Working Style
                </h3>

                <ul className="space-y-5 mb-8">
                  {WORKING_STYLE.map((item, i) => (
                    <motion.li
                      key={item.trait}
                      variants={fadeUp}
                      custom={i}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-secondary shrink-0 mt-2 group-hover:scale-150 transition-transform duration-200" />
                      <span className="text-sm text-foreground/70 leading-relaxed">
                        <span className="font-semibold text-foreground">
                          {item.trait}:
                        </span>{" "}
                        {item.detail}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-border">
                  <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                    Tools I Use
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {TOOLS.map((tool, i) => (
                      <motion.span
                        key={tool}
                        variants={scaleIn}
                        custom={i}
                        className="px-3 py-1.5 bg-secondary/30 dark:bg-secondary/10 border border-secondary/30 dark:border-secondary/20 text-primary dark:text-secondary rounded-full text-xs font-medium"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <motion.div
              variants={fadeUp}
              custom={0}
              className="text-center mb-14"
            >
              <SectionLabel>Experience</SectionLabel>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center sm:text-left text-foreground tracking-tight mb-4">
                Industries I&apos;ve Supported
              </h2>
              <p className="text-foreground/55 text-sm max-w-md mx-auto leading-relaxed">
                Diverse experience means I can quickly adapt to your
                industry&apos;s unique needs and terminology.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {INDUSTRIES.map((industry, i) => (
                <motion.div
                  key={industry}
                  variants={fadeUp}
                  custom={i}
                  className="group bg-accent/40 dark:bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 dark:hover:border-secondary/30 hover:shadow-md transition-all duration-300"
                >
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-200">
                    {industry}
                  </span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <CtaSection
        heading="Ready to Reclaim Your Time?"
        subtext="Let me handle the admin work while you focus on growing your business."
        buttonText="Get Started Now"
      />
    </div>
  );
}
