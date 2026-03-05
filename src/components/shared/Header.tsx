"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import dynamic from "next/dynamic";

const ThemeToggle = dynamic(
  () => import("@/components/shared/ThemeToggle").then((m) => m.ThemeToggle),
  { ssr: false },
);

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About Me" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  // lock scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const linkClass = (path: string) =>
    `transition-colors ${
      isActive(path)
        ? "text-primary font-semibold"
        : "text-foreground/70 hover:text-primary"
    }`;

  return (
    <header className="w-full bg-accent/50 dark:bg-card sticky top-0 z-50 backdrop-blur-sm will-change-transform isolate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <code className="text-sm sm:text-base font-medium text-primary">
              lauraenemosah
            </code>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={linkClass(href)}>
                {label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-6 flex flex-col items-center justify-center gap-4 pb-4 h-screen">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground/70 text-2xl font-semibold hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        )}
      </div>
      <div className="border-b border-border" />
    </header>
  );
}
