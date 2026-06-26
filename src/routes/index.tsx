import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Users,
  Factory,
  Clock,
  CheckCircle2,
  Award,
  HardHat,
  Building2,
} from "lucide-react";
import heroFactory from "@/assets/hero-factory.jpg";
import workersTeam from "@/assets/workers-team.jpg";
import securityGuards from "@/assets/security-guards.jpg";
import manufacturing from "@/assets/manufacturing-plant.jpg";
import { Counter } from "@/components/site/Counter";
import { CTABand } from "@/components/site/CTABand";
import { IndustriesSection } from "@/components/site/IndustriesSection";
import { ProcessSection } from "@/components/site/ProcessSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { ClientsMarquee } from "@/components/site/ClientsMarquee";
import { FAQSection } from "@/components/site/FAQSection";
import { WhyChooseUsSection } from "@/components/site/WhyChooseUsSection";
import { BusinessCardSection } from "@/components/site/BusinessCardSection";
import { useReveal } from "@/hooks/use-reveal";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raj Enterprise — Reliable Manpower & Security Solutions Since 2008" },
      {
        name: "description",
        content:
          "Trusted labour contractor and manpower supplier providing skilled, semi-skilled and unskilled workforce plus professional security services to manufacturing industries.",
      },
      { property: "og:title", content: "Raj Enterprise — Manpower & Security Since 2008" },
      {
        property: "og:description",
        content:
          "Reliable industrial manpower and security services for factories, warehouses and corporate offices.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  useReveal();
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroFactory}
            alt="Industrial manufacturing facility with skilled workers"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 gradient-hero" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-32 text-white w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-4 py-1.5 text-xs uppercase tracking-[0.2em]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Trusted Since 2008
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.02] max-w-5xl"
          >
            Reliable Manpower &<br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, oklch(0.85 0.16 80), oklch(0.78 0.14 75))",
              }}
            >
              Security Solutions
            </span>{" "}
            Since 2008
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg lg:text-xl text-white/85"
          >
            Trusted Labour Contractor and Manpower Supplier for Manufacturing Industries —
            delivering skilled workforce and professional security around the clock.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl gradient-accent px-7 py-4 font-semibold shadow-elegant hover:opacity-90 transition"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur border border-white/25 px-7 py-4 font-semibold hover:bg-white/15 transition"
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Strength inline chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl"
          >
            {[
              { icon: Award, label: "ISO-grade processes" },
              { icon: ShieldCheck, label: "Verified workforce" },
              { icon: Clock, label: "24/7 deployment" },
              { icon: HardHat, label: "Safety compliant" },
            ].map((i, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-xl bg-white/8 backdrop-blur border border-white/15 px-4 py-3 text-sm"
              >
                <i.icon className="h-4 w-4 text-accent shrink-0" />
                <span className="text-white/90">{i.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs uppercase tracking-[0.3em] hidden lg:block"
        >
          Scroll
        </a>
      </section>

      {/* ABOUT SHORT */}
      <section id="about" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="relative">
              <img
                src={workersTeam}
                alt="Skilled industrial workers team"
                className="rounded-2xl shadow-elegant w-full h-[480px] object-cover"
                loading="lazy"
                width={1600}
                height={1067}
              />
              <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-elegant p-6 border border-border hidden md:block">
                <div className="font-display text-4xl font-extrabold text-primary">
                  <Counter end={15} suffix="+" />
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
          <div className="reveal">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              About Raj Enterprise
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold leading-tight text-foreground">
              Dependable manpower for India's manufacturing backbone.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Raj Enterprise has been delivering dependable manpower solutions to manufacturing
              industries since 2008. We specialize in providing skilled, semi-skilled and unskilled
              workforce tailored to your business needs — backed by a commitment to quality,
              reliability and professionalism.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {[
                "Experienced & verified workers",
                "Quick deployment nationwide",
                "Professional supervision",
                "Compliance & documentation",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm font-medium">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* COUNTERS / STRENGTH */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={manufacturing}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
            width={1600}
            height={900}
          />
          <div className="absolute inset-0 gradient-hero" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-white">
          <div className="max-w-2xl reveal">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              Our Strength
            </div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-extrabold">
              Numbers built on trust.
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { end: 15, suffix: "+", label: "Years of Experience" },
              { end: 1000, suffix: "+", label: "Workers Deployed" },
              { end: 100, suffix: "+", label: "Industrial Clients" },
              { end: 24, suffix: "/7", label: "Support & Deployment" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white/8 backdrop-blur border border-white/15 p-8 reveal"
              >
                <div className="font-display text-5xl md:text-6xl font-extrabold text-white">
                  <Counter end={s.end} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-sm uppercase tracking-wider text-white/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl reveal">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              What We Do
            </div>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
              End-to-end manpower & security solutions.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              From factory floor workers to trained security personnel — one trusted partner for
              every industrial requirement.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Factory,
                title: "Industrial Manpower Supply",
                desc: "Skilled, semi-skilled and unskilled workers for factories, warehouses and production plants.",
                img: workersTeam,
              },
              {
                icon: Users,
                title: "Labour Contracting",
                desc: "Complete workforce management with supervision and compliance support.",
                img: manufacturing,
              },
              {
                icon: ShieldCheck,
                title: "Security Services",
                desc: "Trained security guards for factories, industrial areas and corporate premises.",
                img: securityGuards,
              },
              {
                icon: Building2,
                title: "Temporary & Permanent Staffing",
                desc: "Flexible staffing solutions matched to your project and long-term business needs.",
                img: heroFactory,
              },
              {
                icon: HardHat,
                title: "Safety Compliant Workforce",
                desc: "PPE-equipped workers trained in workplace safety standards and protocols.",
                img: workersTeam,
              },
              {
                icon: Clock,
                title: "Rapid Deployment",
                desc: "Workforce mobilized fast — often within 24-48 hours of confirmed requirement.",
                img: manufacturing,
              },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={s.img}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-xl gradient-accent text-white shadow-elegant">
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-7 py-3.5 font-semibold shadow-elegant hover:opacity-90 transition"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseUsSection />
      <ClientsMarquee />
      <IndustriesSection />
      <ProcessSection />
      <BusinessCardSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABand />
    </>
  );
}
