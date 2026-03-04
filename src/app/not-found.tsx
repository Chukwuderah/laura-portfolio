"use client";

import Link from "next/link";
import { Home, Moon, Sun, ArrowLeft } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const { theme, setTheme } = useTheme();
  const ThemeToggle = () => (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-transparent animate-pulse hover:shadow-lg hover:scale-105 transition-shadow cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-secondary dark:text-primary" />
      ) : (
        <Moon className="w-5 h-5 text-primary" />
      )}
    </button>
  );

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden flex flex-col">
      {/* Decorative background numerals */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none select-none
          absolute -top-8 -left-6 sm:-top-12 sm:-left-10
          text-[22rem] sm:text-[32rem] font-black leading-none
          text-secondary/20 dark:text-secondary/10
          tracking-tighter
        "
      >
        4
      </span>
      <span
        aria-hidden="true"
        className="
          pointer-events-none select-none
          absolute -bottom-8 -right-6 sm:-bottom-12 sm:-right-10
          text-[22rem] sm:text-[32rem] font-black leading-none
          text-secondary/20 dark:text-secondary/10
          tracking-tighter
        "
      >
        4
      </span>

      {/* Horizontal rule accent — top */}
      <div className="w-full h-px bg-border mt-0" />

      {/* Header strip */}
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 pt-10 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-widest uppercase"
        >
          Laura Enemosah
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <span className="text-xs tracking-widest uppercase text-muted-foreground/60">
            Error · 404
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 py-20 relative z-10">
        {/* Pill badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/30 dark:bg-secondary/10 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary dark:bg-secondary animate-pulse" />
          <span className="text-xs tracking-widest uppercase text-muted-foreground font-medium">
            Page not found
          </span>
        </div>

        {/* Headline */}
        <h1
          className="
            text-center font-black leading-none tracking-tighter
            text-[5rem] sm:text-[8rem] lg:text-[11rem]
            text-primary dark:text-secondary
          "
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          404
        </h1>

        {/* Divider with dot */}
        <div className="flex items-center gap-4 my-8 w-full max-w-xs sm:max-w-sm">
          <div className="flex-1 h-px bg-border" />
          <div className="h-1.5 w-1.5 rounded-full bg-primary/40 dark:bg-secondary/40 shrink-0" />
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Body text */}
        <p className="text-center text-base sm:text-lg text-muted-foreground max-w-sm leading-relaxed mb-2">
          The page you&apos;re looking for has moved, or never existed.
        </p>
        <p className="text-center text-sm text-muted-foreground/60 max-w-xs mb-12">
          Let&apos;s get you back somewhere familiar.
        </p>

        {/* CTAs */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="
             flex items-center gap-2 w-full sm:w-auto justify-center
              bg-primary dark:bg-secondary
              text-primary-foreground dark:text-secondary-foreground
              px-7 py-3 rounded-md sm:rounded-full text-sm font-medium
              hover:opacity-90 active:scale-[0.97]
              transition-all duration-200
            "
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>

          <Button
            variant="ghost"
            size="lg"
            onClick={() => history.back()}
            className="
             w-full sm:w-auto border border-border
              text-foreground/80 text-center cursor-pointer
              px-7 py-3 rounded-md sm:rounded-full text-sm font-medium
              hover:border-primary dark:hover:border-secondary hover:text-primary dark:hover:text-secondary
              transition-all duration-200
            "
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Quick nav */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {[
            { href: "/contact", label: "Contact Me" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "/about", label: "About" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs tracking-widest uppercase text-muted-foreground hover:text-primary dark:hover:text-secondary transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="w-full flex">
        <div className="h-1 bg-primary dark:bg-secondary w-1/3" />
        <div className="h-1 bg-secondary dark:bg-primary/40 w-1/3" />
        <div className="h-1 bg-secondary/40 dark:bg-muted w-1/3" />
      </div>
    </main>
  );
}
