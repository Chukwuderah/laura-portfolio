import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    quote:
      "Laura helped us streamline our content process, delivering high-quality work on tight deadlines. Her writing transformed our brand voice and significantly increased engagement across all platforms.",
    author: "Aya Nakamura",
    role: "Marketing Director, TechFlow",
    avatar: "AN",
  },
  {
    rating: 5,
    quote:
      "Laura transformed our project management approach and boosted team collaboration across departments. Her strategic thinking and execution were instrumental in launching our flagship product.",
    author: "Mateo García",
    role: "CEO, InnovateHub",
    avatar: "MG",
  },
  {
    rating: 5,
    quote:
      "Her attention to detail and proactive communication saved us days and elevated our output. The designs she created perfectly captured our brand identity and resonated with our target audience.",
    author: "Lila Patel",
    role: "Founder, CreativeSpace",
    avatar: "LP",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-6">
      {[...Array(rating)].map((_, i) => (
        <Star
          key={i}
          className="w-5 h-5 fill-primary text-primary dark:fill-secondary dark:text-secondary"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full bg-background dark:bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Clients Say
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what my clients have to say
            about working together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-accent dark:bg-card p-8 rounded-2xl border border-border hover:shadow-xl transition-shadow"
            >
              <Quote className="w-10 h-10 text-primary dark:text-secondary mb-4" />
              <StarRating rating={testimonial.rating} />

              <p className="text-foreground/80 leading-relaxed mb-6">
                &quot;{testimonial.quote}&quot;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary dark:bg-secondary flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-foreground/70">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
