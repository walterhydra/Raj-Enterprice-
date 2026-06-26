import { createFileRoute, Link } from "@tanstack/react-router";
import { Factory, Users, ShieldCheck, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { ProcessSection } from "@/components/site/ProcessSection";
import { IndustriesSection } from "@/components/site/IndustriesSection";
import { FAQSection } from "@/components/site/FAQSection";
import { useReveal } from "@/hooks/use-reveal";
import manufacturing from "@/assets/manufacturing-plant.jpg";
import workersTeam from "@/assets/workers-team.jpg";
import securityGuards from "@/assets/security-guards.jpg";
import warehouse from "@/assets/warehouse.jpg";
import heroFactory from "@/assets/hero-factory.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Industrial Manpower & Security | Raj Enterprise" },
      {
        name: "description",
        content:
          "Industrial manpower supply, labour contracting, professional security services and flexible staffing for manufacturing industries, factories and warehouses.",
      },
      { property: "og:title", content: "Services — Raj Enterprise" },
      {
        property: "og:description",
        content:
          "Manpower supply, labour contracting, security services and staffing solutions for industry.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Factory,
    title: "Industrial Manpower Supply",
    img: workersTeam,
    desc: "We provide skilled, semi-skilled and unskilled workers for manufacturing units, factories, warehouses and production plants. Our manpower solutions ensure smooth operations and increased productivity.",
    points: [
      "Skilled machine operators",
      "Semi-skilled helpers",
      "Unskilled labour",
      "Loaders & material handlers",
    ],
  },
  {
    icon: Briefcase,
    title: "Labour Contracting",
    img: manufacturing,
    desc: "We handle complete labour contracting services including workforce management, supervision and compliance support — so you can focus on production while we run the people side.",
    points: [
      "End-to-end workforce management",
      "On-site supervisors",
      "Statutory compliance",
      "Payroll & documentation",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security Services",
    img: securityGuards,
    desc: "We provide trained and professional security guards for factories, industrial areas, warehouses and corporate premises. Our security staff ensures safety, discipline and 24/7 protection.",
    points: [
      "Trained security guards",
      "24/7 patrolling shifts",
      "Gate & access control",
      "Industrial site security",
    ],
  },
  {
    icon: Users,
    title: "Temporary & Permanent Staffing",
    img: warehouse,
    desc: "We offer flexible staffing solutions according to your project and long-term business needs — from short-term surge support to permanent workforce placement.",
    points: [
      "Daily-wage workforce",
      "Project-based teams",
      "Long-term placements",
      "Replacement guarantee",
    ],
  },
];

function ServicesPage() {
  useReveal();
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Manpower & security services built for industry."
        subtitle="One trusted partner for workforce supply, contracting and on-site security — across factories, warehouses and corporate sites."
        image={heroFactory}
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 space-y-20">
          {services.map((s, idx) => (
            <div
              key={s.title}
              className={`reveal grid lg:grid-cols-2 gap-12 items-center ${idx % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="relative">
                <img
                  src={s.img}
                  alt={s.title}
                  className="rounded-3xl shadow-elegant w-full h-[420px] object-cover"
                  loading="lazy"
                />
                <div className="absolute -top-5 -left-5 grid h-16 w-16 place-items-center rounded-2xl gradient-accent text-white shadow-elegant">
                  <s.icon className="h-7 w-7" />
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                  0{idx + 1} · Service
                </div>
                <h2 className="mt-3 font-display text-3xl md:text-4xl font-extrabold leading-tight">
                  {s.title}
                </h2>
                <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{s.desc}</p>
                <ul className="mt-7 grid sm:grid-cols-2 gap-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm font-medium">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Enquire about this service <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <IndustriesSection />
      <ProcessSection />
      <FAQSection />
      <CTABand
        title="Looking for reliable manpower or security services?"
        subtitle="Contact Raj Enterprise today — we'll get back with a tailored proposal."
      />
    </>
  );
}
