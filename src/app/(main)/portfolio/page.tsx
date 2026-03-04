import { Pen, Package, Palette, Headphones, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: Pen,
    title: "Writing",
    shortDesc: "Compelling content that connects",
    fullDesc:
      "From blog posts to technical documentation, I create content that engages your audience and drives results. SEO-optimized, brand-aligned, and conversion-focused.",
    features: [
      "Blog Posts & Articles",
      "Technical Documentation",
      "Marketing Copy",
      "Content Strategy",
    ],
    image: "/writing.png",
    color: "from-primary to-primary",
    bgColor: "bg-accent/50 dark:bg-muted",
    link: "/portfolio/writing",
  },
  {
    icon: Package,
    title: "Product Management",
    shortDesc: "Strategic product development",
    fullDesc:
      "I bridge the gap between business goals and user needs, leading products from concept to launch with data-driven decisions and clear communication.",
    features: [
      "Product Strategy",
      "Stakeholder Management",
      "Roadmap Planning",
      "Feature Prioritization",
    ],
    image: "/product-management.png",
    color: "from-secondary to-secondary",
    bgColor: "bg-muted/50 dark:bg-muted",
    link: "/portfolio/product-management",
  },
  {
    icon: Palette,
    title: "Graphics Designing",
    shortDesc: "Visual storytelling that captivates",
    fullDesc:
      "Eye-catching designs that communicate your message and reinforce your brand. From logos to social media graphics, I create visuals that stand out.",
    features: [
      "Brand Identity",
      "Marketing Materials",
      "UI/UX Design",
      "Print & Digital Assets",
    ],
    image: "/graphics-design.png",
    color: "from-primary to-primary",
    bgColor: "bg-accent/50 dark:bg-muted",
    link: "/portfolio/graphics-designing",
  },
  {
    icon: Headphones,
    title: "Virtual Assistance",
    shortDesc: "Reliable support for busy professionals",
    fullDesc:
      "Let me handle the administrative tasks that slow you down. Professional, proactive, and detail-oriented support that keeps your business running smoothly.",
    features: [
      "Calendar Management",
      "Email Management",
      "Administrative Tasks",
      "Project Coordination",
    ],
    image: "/virtual-assistant.png",
    color: "from-secondary to-secondary",
    bgColor: "bg-muted/50 dark:bg-muted",
    link: "/portfolio/virtual-assistance",
  },
];

const stats = [
  { label: "Projects Completed", value: "150+" },
  { label: "Clients Served", value: "50+" },
  { label: "Years of Experience", value: "5+" },
  { label: "Client Satisfaction", value: "98%" },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background dark:bg-background">
      {/* Hero Section */}
      <section className="bg-accent dark:bg-card py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Portfolio
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            A glimpse into my work environment, creative process, and the
            dedication behind every project. Each service is tailored to your
            unique needs with a focus on delivering measurable results.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? "" : "md:grid-flow-dense"}`}
                >
                  <div className={isEven ? "" : "md:col-start-2"}>
                    <div
                      className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.color} flex items-center justify-center mb-6`}
                    >
                      <Icon className="text-primary-foreground" size={32} />
                    </div>
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-xl text-foreground/70 mb-6">
                      {service.shortDesc}
                    </p>
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {service.fullDesc}
                    </p>
                    <div className="space-y-2 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${service.color}`}
                          ></div>
                          <span className="text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={service.link}
                      className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r ${service.color} text-primary-foreground rounded-lg font-semibold hover:shadow-xl transition-all group`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div
                    className={`${service.bgColor} p-12 rounded-3xl border border-border ${isEven ? "" : "md:col-start-1 md:row-start-1"}`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={400}
                      className="w-auto h-auto"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Stats */}
      <section className="py-20 bg-muted/30 dark:bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Work That Speaks for Itself
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-background dark:bg-background rounded-2xl shadow-lg border border-border"
              >
                <div className="text-4xl font-bold text-primary dark:text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary dark:bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground dark:text-foreground">
          <h2 className="text-4xl font-bold mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's chat about your goals and I'll help you find the perfect
            solution.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-background dark:bg-secondary text-foreground dark:text-secondary-foreground rounded-lg font-semibold hover:shadow-2xl transition-all"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
