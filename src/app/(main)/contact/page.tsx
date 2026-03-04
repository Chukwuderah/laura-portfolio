"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
  Loader2,
} from "lucide-react";
import { motion } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";
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

// ─── Validation Schema ────────────────────────────────────────────────────────

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().optional(),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(2000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  service: "",
  message: "",
};

// ─── Static Data ──────────────────────────────────────────────────────────────

const SERVICES = [
  { value: "writing", label: "Writing" },
  { value: "product-management", label: "Product Management" },
  { value: "graphics-designing", label: "Graphics Designing" },
  { value: "virtual-assistance", label: "Virtual Assistance" },
  { value: "multiple", label: "Multiple Services" },
  { value: "not-sure", label: "Not Sure Yet" },
] as const;

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "laura@example.com",
    href: "mailto:laura@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA · Available worldwide",
    href: null,
  },
] as const;

const FAQS = [
  {
    question: "What's your typical project timeline?",
    answer:
      "Project timelines vary depending on scope and complexity. Small projects can be completed within a week, while larger engagements may take several weeks. I provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Absolutely. I work with clients worldwide and am fully flexible with time zones. All communication is handled via email, video calls, and project management tools — wherever you are.",
  },
  {
    question: "How do you handle payments?",
    answer:
      "I accept bank transfers, PayPal, and major credit cards. For larger projects I typically request a 50% deposit upfront with the balance due upon completion.",
  },
  {
    question: "Can I hire you for ongoing work?",
    answer:
      "Yes — I offer retainer packages for clients who need consistent support. This works especially well for virtual assistance, content creation, or continued product management.",
  },
] as const;

// ─── Sub-components ───────────────────────────────────────────────────────────

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-1.5 text-xs text-destructive"
    >
      {message}
    </motion.p>
  );
}

const inputClass = (hasError: boolean) =>
  `w-full px-4 py-3 text-sm bg-background dark:bg-card border-2 rounded-lg text-foreground placeholder:text-foreground/35 outline-none transition-all duration-200
  focus:ring-2 focus:ring-primary/30 dark:focus:ring-secondary/30
  ${
    hasError
      ? "border-destructive focus:border-destructive"
      : "border-border focus:border-primary dark:focus:border-secondary"
  }`;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  // Validate a single field on blur
  const validateField = (name: keyof ContactFormData, value: string) => {
    const result = contactSchema.shape[name].safeParse(value);
    setErrors((prev) => ({
      ...prev,
      [name]: result.success ? undefined : result.error.issues[0]?.message,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error as user types
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    if (name !== "service") {
      validateField(name as keyof ContactFormData, value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      toast.error("Please fix the errors before submitting.");
      return;
    }

    setLoading(true);

    try {
      // Replace with your actual API call, e.g. fetch('/api/contact', { method: 'POST', body: ... })
      await new Promise((resolve) => setTimeout(resolve, 1400));

      toast.success("Message sent! I'll get back to you within 24 hours.", {
        description: `Thanks, ${result.data.name}. Looking forward to connecting.`,
      });

      setFormData(INITIAL_FORM);
      setErrors({});
    } catch {
      toast.error(
        "Something went wrong. Please try again or email me directly.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-accent/60 dark:bg-card pt-24 pb-28">
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible">
            <motion.div variants={fadeUp} custom={0}>
              <SectionLabel>Contact</SectionLabel>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.05] tracking-tight mb-6"
            >
              Let&apos;s Work{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary dark:text-secondary">
                  Together
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
              className="text-lg text-foreground/65 max-w-xl mx-auto leading-relaxed"
            >
              Ready to elevate your business? Get in touch and let&apos;s
              discuss how I can help you achieve your goals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Form + Info ── */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* ── Contact Form ── */}
            <AnimatedSection>
              <motion.div
                variants={slideLeft}
                className="border border-border rounded-2xl shadow-2xl px-4 py-6 lg:p-8"
              >
                <SectionLabel>Send a Message</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-8">
                  Drop Me a Line
                </h2>

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-4 w-full h-full">
                    {/* Name */}
                    <div className="w-full lg:w-1/2">
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold tracking-wide text-foreground/70 uppercase mb-2"
                      >
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Jane Doe"
                        className={inputClass(!!errors.name)}
                      />
                      <FieldError message={errors.name} />
                    </div>

                    {/* Email */}
                    <div className="w-full lg:w-1/2">
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold tracking-wide text-foreground/70 uppercase mb-2"
                      >
                        Email Address{" "}
                        <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="jane@example.com"
                        className={inputClass(!!errors.email)}
                      />
                      <FieldError message={errors.email} />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-semibold tracking-wide text-foreground/70 uppercase mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={inputClass(false)}
                    >
                      <option value="">Select a service</option>
                      {SERVICES.map(({ value, label }) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold tracking-wide text-foreground/70 uppercase mb-2"
                    >
                      Your Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Tell me about your project and goals..."
                      className={`${inputClass(!!errors.message)} resize-none`}
                    />
                    <div className="flex items-start justify-between mt-1.5">
                      <FieldError message={errors.message} />
                      <span className="text-xs text-foreground/35 ml-auto">
                        {formData.message.length}/2000
                      </span>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full inline-flex items-center justify-center gap-3 bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:opacity-90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 mt-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </AnimatedSection>

            {/* ── Contact Info ── */}
            <AnimatedSection>
              <motion.div
                variants={slideRight}
                className="flex flex-col gap-8 border border-border rounded-2xl shadow-2xl px-4 py-6 lg:p-8"
              >
                <div>
                  <SectionLabel>Reach Out</SectionLabel>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-5">
                    Get In Touch
                  </h2>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    Always excited to hear about new projects and opportunities.
                    Whether you have a question or just want to say hello —
                    I&apos;ll get back to you as soon as possible.
                  </p>
                </div>

                {/* Info items */}
                <ul className="space-y-4">
                  {CONTACT_INFO.map(({ icon: Icon, label, value, href }, i) => (
                    <motion.li
                      key={label}
                      variants={fadeIn}
                      custom={i}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-11 h-11 rounded-xl bg-secondary/40 dark:bg-secondary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/10 dark:group-hover:bg-secondary/30 transition-colors">
                        <Icon className="w-5 h-5 text-primary dark:text-secondary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-0.5">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm text-foreground/75 hover:text-primary dark:hover:text-secondary transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm text-foreground/75">{value}</p>
                        )}
                      </div>
                    </motion.li>
                  ))}
                </ul>

                {/* Response time card */}
                <motion.div
                  variants={fadeUp}
                  custom={3}
                  className="bg-accent/40 dark:bg-card border border-border rounded-2xl p-7"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <MessageCircle className="w-5 h-5 text-primary dark:text-secondary shrink-0" />
                    <h3 className="text-sm font-semibold text-foreground">
                      Response Time
                    </h3>
                  </div>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    I typically respond to all inquiries within{" "}
                    <span className="font-medium text-foreground/80">
                      24 hours
                    </span>{" "}
                    on business days. For urgent matters, please mention it in
                    your message.
                  </p>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-12 bg-accent/30 dark:bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <motion.div
              variants={fadeUp}
              custom={0}
              className="text-center mb-14"
            >
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Common Questions
              </h2>
            </motion.div>

            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <motion.div
                  key={faq.question}
                  variants={fadeUp}
                  custom={i}
                  className="group bg-background dark:bg-background/50 border border-border rounded-2xl p-7 hover:border-primary/25 dark:hover:border-secondary/25 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-base font-semibold text-foreground mb-3 group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-200">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
