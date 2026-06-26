import { createFileRoute } from "@tanstack/react-router";
import {
  Target,
  Eye,
  CheckCircle2,
  Users,
  Clock,
  Briefcase,
  Shield,
  TrendingUp,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { Counter } from "@/components/site/Counter";
import { TeamSection } from "@/components/site/TeamSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { useReveal } from "@/hooks/use-reveal";
import workersTeam from "@/assets/workers-team.jpg";
import manufacturing from "@/assets/manufacturing-plant.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Raj Enterprise — Labour Contractor Since 2008" },
      {
        name: "description",
        content:
          "Founded in 2008, Raj Enterprise is a trusted labour contractor and manpower supplier known for reliability, professionalism and quality service to manufacturing industries.",
      },
      { property: "og:title", content: "About Raj Enterprise" },
      {
        property: "og:description",
        content: "Trusted manpower partner for India's manufacturing industries since 2008.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  useReveal();
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Building India's industrial workforce since 2008."
        subtitle="A trusted labour contractor and manpower supplier dedicated to serving manufacturing industries with disciplined, skilled and reliable people."
        image={workersTeam}
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div className="reveal">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              Our Story
            </div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold leading-tight">
              Reliability is the only product we sell.
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2008, Raj Enterprise is a trusted labour contractor and manpower supplier
                dedicated to serving manufacturing industries. Over the years, we have built a
                strong reputation for reliability, professionalism and quality service.
              </p>
              <p>
                We understand the challenges industries face in maintaining a skilled and efficient
                workforce. That's why we provide trained and disciplined manpower solutions that
                help businesses operate smoothly and efficiently.
              </p>
              <p>
                From a single contract in 2008 to over a hundred industrial clients today, every
                relationship we've built is anchored in one thing: showing up, every day, with the
                right people.
              </p>
            </div>
          </div>

          <div className="reveal grid grid-cols-2 gap-4 content-start">
            <img
              src={manufacturing}
              alt="Modern manufacturing plant"
              className="rounded-2xl shadow-card object-cover w-full h-64"
              loading="lazy"
            />
            <img
              src={workersTeam}
              alt="Workers team"
              className="rounded-2xl shadow-card object-cover w-full h-64 mt-8"
              loading="lazy"
            />
            <div className="rounded-2xl gradient-navy text-white p-6 shadow-elegant">
              <div className="font-display text-4xl font-extrabold">
                <Counter end={15} suffix="+" />
              </div>
              <div className="text-xs uppercase tracking-wider text-white/70 mt-2">
                Years strong
              </div>
            </div>
            <div className="rounded-2xl bg-card border border-border p-6 shadow-card mt-8">
              <div className="font-display text-4xl font-extrabold text-primary">
                <Counter end={1000} suffix="+" />
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">
                Workers deployed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To provide dependable, skilled manpower solutions that enhance productivity and support industrial growth.",
            },
            {
              icon: Eye,
              title: "Our Vision",
              text: "To become a leading manpower and security service provider known for trust, commitment and excellence.",
            },
          ].map((b) => (
            <div
              key={b.title}
              className="reveal rounded-3xl bg-card p-10 border border-border shadow-card"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-accent text-white shadow-elegant">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-extrabold">{b.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl reveal">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              Why Choose Us
            </div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-extrabold leading-tight">
              Built for the speed and scale of modern industry.
            </h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: CheckCircle2,
                title: "Experienced & Verified Workers",
                desc: "Every worker is background-checked and matched to your skill requirement.",
              },
              {
                icon: Clock,
                title: "Quick Deployment",
                desc: "Mobilization within 24–48 hours for confirmed industrial requirements.",
              },
              {
                icon: Briefcase,
                title: "Professional Management",
                desc: "Dedicated supervisors handle attendance, performance and reporting.",
              },
              {
                icon: TrendingUp,
                title: "Flexible Contracts",
                desc: "Daily, monthly or long-term contracts shaped around your production cycle.",
              },
              {
                icon: Users,
                title: "Strong Industry Knowledge",
                desc: "Over 15 years working with factories, warehouses and production plants.",
              },
              {
                icon: Shield,
                title: "Compliance & Safety",
                desc: "Full statutory compliance and PPE-trained workforce, every shift.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="reveal rounded-2xl bg-card p-7 border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all"
              >
                <c.icon className="h-7 w-7 text-accent" />
                <h3 className="mt-5 font-display text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />
      <TestimonialsSection />
      <CTABand
        title="Partner with a contractor your operations can rely on."
        subtitle="Get a tailored proposal for your manpower or security needs within 24 hours."
      />
    </>
  );
}
