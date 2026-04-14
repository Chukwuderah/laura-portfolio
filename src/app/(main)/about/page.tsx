"use client";

import Image from "next/image";
import { Award, Heart, Target, Zap, LucideIcon } from "lucide-react";
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

// ─── Data ────────────────────────────────────────────────────────────────────

interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

const VALUES: Value[] = [
  {
    icon: Target,
    title: "Excellence",
    description: "Striving for the highest quality in everything delivered.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Honest communication and ethical practices, always.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Staying ahead with the latest tools, trends, and ideas.",
  },
  {
    icon: Award,
    title: "Results",
    description: "Focused on measurable outcomes that drive real growth.",
  },
];

const TECHNICAL_SKILLS = [
  "Content Writing & SEO",
  "Adobe Creative Suite",
  "Figma & UI Design",
  "Project Management Tools",
  "Microsoft Office & Google Workspace",
  "Data Analysis & Reporting",
] as const;

const SOFT_SKILLS = [
  "Strategic Thinking",
  "Clear Communication",
  "Problem Solving",
  "Time Management",
  "Attention to Detail",
  "Adaptability",
] as const;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden flex items-center justify-between bg-accent/60 dark:bg-card pt-24 pb-28">
        {/* Dot grid texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--color-foreground) 1.2px, transparent 1.2px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 h-120 w-120 rounded-full bg-secondary/40 dark:bg-secondary/10 blur-[100px]"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={fadeUp} custom={0}>
              <SectionLabel>About Me</SectionLabel>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-6xl lg:text-7xl font-bold text-foreground text-center sm:text-left leading-[1.05] tracking-tight mb-6"
            >
              Laura{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary dark:text-secondary">
                  Eleojo
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
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-foreground/65 leading-relaxed max-w-xl"
            >
              A multidisciplinary professional passionate about helping
              businesses achieve their goals through strategic execution,
              creative excellence, and reliable support.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="hidden sm:flex justify-center w-1/2 h-fit rounded-2xl overflow-hidden shadow-sm dark:shadow-xl"
        >
          <Image
            src="/about-hero-2.png"
            alt="About Hero"
            width={400}
            height={400}
            className="w-auto h-auto"
          />
        </motion.div>
      </section>

      {/* ── Story ── */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left — Text */}
            <AnimatedSection>
              <motion.div variants={slideLeft}>
                <SectionLabel>Background</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-8">
                  My Story
                </h2>
                <div className="space-y-5 text-foreground/65 text-base sm:text-xl text-justify sm:text-left leading-relaxed">
                  <p>
                    With over 7 years of experience across writing, product
                    management, graphic design, and virtual assistance,
                    I&apos;ve had the privilege of working with startups,
                    established companies, and entrepreneurs across diverse
                    industries.
                  </p>
                  <p>
                    What started as a passion for helping small businesses
                    communicate their message evolved into a comprehensive suite
                    of professional services. I discovered that by combining
                    creativity with strategic thinking, I could deliver real
                    value that goes beyond completing tasks.
                  </p>
                  <p>
                    Today I work with clients worldwide, helping them elevate
                    their brands, launch products, and streamline operations.
                    Each project is an opportunity to apply my diverse skill set
                    to solve unique challenges and drive meaningful results.
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Right — Image */}
            <AnimatedSection>
              <motion.div
                variants={slideRight}
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-border aspect-4/5 bg-accent dark:bg-muted"
              >
                <Image
                  src="/laura.jpg"
                  alt="Laura Eleojo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-12 bg-accent/30 dark:bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <motion.div
              variants={fadeUp}
              custom={0}
              className="text-center mb-14"
            >
              <SectionLabel>What Drives Me</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                My Core Values
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map((value, i) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    variants={fadeUp}
                    custom={i}
                    className="group bg-background dark:bg-background/50 border border-border rounded-2xl p-8 text-center hover:border-primary/30 dark:hover:border-secondary/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-secondary/40 dark:bg-secondary/20 flex items-center justify-center group-hover:bg-primary/10 dark:group-hover:bg-secondary/30 transition-colors">
                      <Icon className="w-6 h-6 text-primary dark:text-secondary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="py-12 bg-muted/30 dark:bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <motion.div
              variants={fadeUp}
              custom={0}
              className="text-center mb-14"
            >
              <SectionLabel>Capabilities</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Skills &amp; Expertise
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Technical Skills */}
              <motion.div
                variants={slideLeft}
                className="bg-background dark:bg-background/50 border border-border rounded-2xl p-8"
              >
                <h3 className="text-base font-semibold text-foreground mb-6 flex items-center gap-2 tracking-wide">
                  <span className="h-px w-5 bg-primary/50 dark:bg-secondary/50 inline-block" />
                  Technical Skills
                </h3>
                <ul className="space-y-4">
                  {TECHNICAL_SKILLS.map((skill, i) => (
                    <motion.li
                      key={skill}
                      variants={fadeIn}
                      custom={i}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-secondary shrink-0 group-hover:scale-150 transition-transform duration-200" />
                      <span className="text-sm sm:text-base text-foreground/70 group-hover:text-foreground transition-colors duration-200">
                        {skill}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Soft Skills */}
              <motion.div
                variants={slideRight}
                className="bg-background dark:bg-background/50 border border-border rounded-2xl p-8"
              >
                <h3 className="text-base font-semibold text-foreground mb-6 flex items-center gap-2 tracking-wide">
                  <span className="h-px w-5 bg-primary/50 dark:bg-secondary/50 inline-block" />
                  Soft Skills
                </h3>
                <ul className="space-y-4">
                  {SOFT_SKILLS.map((skill, i) => (
                    <motion.li
                      key={skill}
                      variants={fadeIn}
                      custom={i}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary dark:bg-primary shrink-0 group-hover:scale-150 transition-transform duration-200" />
                      <span className="text-sm sm:text-base text-foreground/70 group-hover:text-foreground transition-colors duration-200">
                        {skill}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
