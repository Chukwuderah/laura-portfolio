import { Pen, Package, Palette, Headphones } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Pen,
    title: "Writing",
    description:
      "Compelling content that captures your brand voice and connects with your audience. From blog posts to technical documentation.",
    color: "from-primary to-primary",
    bgColor: "bg-accent/50 dark:bg-muted",
    link: "/portfolio/writing",
  },
  {
    icon: Package,
    title: "Product Management",
    description:
      "Strategic product development from ideation to launch. I align teams and deliver products that users love.",
    color: "from-secondary to-secondary",
    bgColor: "bg-secondary/10 dark:bg-muted",
    link: "/portfolio/product-management",
  },
  {
    icon: Palette,
    title: "Graphics Designing",
    description:
      "Visual designs that tell your story. Branding, marketing materials, and digital assets that stand out.",
    color: "from-secondary to-secondary",
    bgColor: "bg-secondary/10 dark:bg-muted",
    link: "/portfolio/graphics-designing",
  },
  {
    icon: Headphones,
    title: "Virtual Assistance",
    description:
      "Reliable support that keeps your business running smoothly. Administrative tasks, scheduling, and project coordination.",
    color: "from-primary to-primary",
    bgColor: "bg-accent/50 dark:bg-muted",
    link: "/portfolio/virtual-assistance",
  },
];

export default function ServicesOverview() {
  return (
    <section className="w-full bg-muted/30 dark:bg-card py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Services I Offer
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your unique needs, backed by
            years of experience and a commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={index}
                href={service.link}
                className={`${service.bgColor} border border-border p-8 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group`}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-linear-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground rounded-lg font-semibold hover:shadow-xl transition-all"
          >
            View All Services Details
          </Link>
        </div>
      </div>
    </section>
  );
}
