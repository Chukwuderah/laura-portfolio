"use client";

import { Sparkles, ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import ServicesOverview from "@/components/home/ServicesOverview";
import Testimonials from "@/components/home/Testimonial";
import dynamic from "next/dynamic";

const HeroImage = dynamic(
  () => import("@/components/home/HeroImage").then((m) => m.HeroImage),
  { ssr: false },
);

export default function Home() {
  return (
    <main>
      <section className="w-full bg-accent dark:bg-background py-20 md:py-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/20 dark:bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 dark:bg-secondary/10 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary dark:text-secondary" />
              <span className="text-sm font-medium text-primary dark:text-secondary">
                Professional Services That Deliver Results
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8">
              Elevate Your{" "}
              <span className="text-primary dark:text-secondary">Brand</span>
            </h2>

            <p className="text-lg md:text-xl text-foreground/70 dark:text-foreground/70 leading-relaxed max-w-3xl mx-auto mb-12">
              I help teams scale through thoughtful writing, efficient virtual
              assistance, compelling graphic design, and decisive product
              management. I tailor strategies that fit your goals and budget,
              delivering measurable results that drive growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground rounded-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                Let&apos;s Work Together
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 bg-background dark:bg-card text-foreground border-2 border-primary dark:border-secondary rounded-lg font-semibold hover:bg-accent dark:hover:bg-accent transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet Laura Section */}
      <section className="w-full bg-background dark:bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl flex items-center gap-12 mx-auto">
            <div className="hidden sm:block w-1/2 rounded-2xl overflow-hidden shadow-2xl">
              <HeroImage />
            </div>

            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                Meet Laura Enemosah
              </h2>

              <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                A multidisciplinary professional with over 7 years of experience
                helping businesses transform their vision into reality through
                strategic execution and creative excellence.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary dark:text-secondary hover:text-primary/80 dark:hover:text-secondary/80 font-semibold group transition-colors"
              >
                Learn more about my journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServicesOverview />
      <Testimonials />

      {/* CTA Section */}
      <section className="w-full bg-primary dark:bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground dark:text-foreground">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Let&apos;s discuss how I can help you achieve your goals. Get in
              touch for a free consultation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-background dark:bg-secondary text-foreground dark:text-secondary-foreground rounded-lg font-semibold hover:shadow-2xl transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-4 bg-transparent border-2 border-primary-foreground dark:border-secondary text-primary-foreground dark:text-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 dark:hover:bg-secondary/10 transition-all"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
