import { Mail, Linkedin, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
] as const;

const SERVICE_LINKS = [
  { href: "/portfolio/writing", label: "Writing" },
  { href: "/portfolio/product-management", label: "Product Management" },
  { href: "/portfolio/graphics-designing", label: "Graphics Designing" },
  { href: "/portfolio/virtual-assistance", label: "Virtual Assistance" },
] as const;

const SOCIAL_LINKS = [
  {
    href: "mailto:laura@example.com",
    label: "Email",
    icon: Mail,
    external: false,
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: Linkedin,
    external: true,
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    icon: Twitter,
    external: true,
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: Instagram,
    external: true,
  },
] as const;

const CONTACT_DETAILS = [
  { href: "mailto:laura@example.com", label: "laura@example.com" },
  { href: "tel:+1234567890", label: "+1 (234) 567-890" },
  { label: "San Francisco, CA" },
  { label: "Available for remote work" },
] as const;

const linkClass =
  "text-background/70 dark:text-foreground/70 hover:text-background dark:hover:text-foreground hover:underline transition-colors";

const socialIconClass =
  "w-10 h-10 rounded-lg bg-background/10 dark:bg-muted hover:bg-primary dark:hover:bg-secondary flex items-center justify-center transition-colors";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h4 className="font-semibold mb-4 text-lg">{children}</h4>;
}

function FooterLinkList({
  links,
}: {
  links: ReadonlyArray<{ href: string; label: string }>;
}) {
  return (
    <ul className="space-y-3">
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link href={href} className={linkClass}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-foreground dark:bg-card text-background dark:text-foreground py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="inline-block mb-4 hover:opacity-80 transition-opacity"
            >
              <h3 className="text-2xl font-bold text-secondary dark:text-primary leading-tight">
                Laura <br className="hidden sm:block" /> Enemosah
              </h3>
            </Link>
            <p className="text-background/70 dark:text-foreground/70 mb-6 text-sm leading-relaxed">
              Elevating brands through strategic execution and creative
              excellence.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ href, label, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  className={socialIconClass}
                  aria-label={label}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <FooterLinkList links={NAV_LINKS} />
          </div>

          {/* Services */}
          <div>
            <FooterHeading>Inventory</FooterHeading>
            <FooterLinkList links={SERVICE_LINKS} />
          </div>

          {/* Contact Info */}
          <div>
            <FooterHeading>Get In Touch</FooterHeading>
            <ul className="space-y-3 text-background/70 dark:text-foreground/70 text-sm">
              {CONTACT_DETAILS.map((item) =>
                "href" in item && item.href ? (
                  <li key={item.label}>
                    <a href={item.href} className={linkClass}>
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <li key={item.label}>{item.label}</li>
                ),
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 dark:border-foreground/20 text-sm text-center text-background/70 dark:text-foreground/70">
          <p>&copy; {currentYear} Laura Enemosah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
