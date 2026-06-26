import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { useReveal } from "@/hooks/use-reveal";
import securityGuards from "@/assets/security-guards.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Raj Enterprise — Manpower & Security Enquiries" },
      {
        name: "description",
        content:
          "Get in touch with Raj Enterprise for industrial manpower supply, labour contracting and security services. Call, email or send a message via WhatsApp.",
      },
      { property: "og:title", content: "Contact Raj Enterprise" },
      {
        property: "og:description",
        content: "Reach out for manpower and security solutions for your business.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  company: z.string().trim().min(2, "Please enter your company").max(120),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  email: z.string().trim().email("Enter a valid email").max(160),
  service: z.string().min(1, "Select a service"),
  message: z.string().trim().min(10, "Please add a short message").max(1000),
});

function ContactPage() {
  useReveal();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const res = schema.safeParse(data);
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's discuss your manpower needs."
        subtitle="We're ready to provide the right manpower and security solutions for your business. Get in touch today."
        image={securityGuards}
      />

      {/* Quick contact tiles */}
      <section className="py-16 -mt-12 relative z-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Phone, label: "Call Us", value: "+91 73833 03388", href: "tel:+917383303388" },
            {
              icon: MessageCircle,
              label: "WhatsApp",
              value: "Chat instantly",
              href: "https://wa.me/917383303388",
            },
            {
              icon: Mail,
              label: "Email",
              value: "info@rajenterprise.in",
              href: "mailto:info@rajenterprise.in",
            },
            {
              icon: Clock,
              label: "Working Hours",
              value: "Mon–Sat · 9am–7pm",
              href: "#contact-form",
            },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="reveal rounded-2xl bg-card border border-border p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl gradient-accent text-white">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">
                {c.label}
              </div>
              <div className="mt-1 font-semibold text-foreground">{c.value}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Form + details */}
      <section id="contact-form" className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-[1.3fr_1fr] gap-10">
          <div className="reveal rounded-3xl bg-card border border-border shadow-card p-8 md:p-10">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold">Send us a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We typically respond within a few hours during working days.
            </p>

            {sent && (
              <div className="mt-6 flex items-start gap-3 rounded-xl bg-accent/10 border border-accent/20 text-accent-foreground p-4">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div className="font-semibold text-foreground">
                    Thanks — we've received your enquiry.
                  </div>
                  <div className="text-muted-foreground">Our team will reach out shortly.</div>
                </div>
              </div>
            )}

            <form onSubmit={onSubmit} className="mt-8 grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" error={errors.name} />
              <Field label="Company Name" name="company" error={errors.company} />
              <Field label="Phone Number" name="phone" type="tel" error={errors.phone} />
              <Field label="Email" name="email" type="email" error={errors.email} />
              <div className="sm:col-span-2">
                <Label>Service Required</Label>
                <select
                  name="service"
                  defaultValue=""
                  className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Industrial Manpower Supply</option>
                  <option>Labour Contracting</option>
                  <option>Security Services</option>
                  <option>Temporary & Permanent Staffing</option>
                </select>
                {errors.service && (
                  <p className="mt-1 text-xs text-destructive">{errors.service}</p>
                )}
              </div>
              <div className="sm:col-span-2">
                <Label>Message</Label>
                <textarea
                  name="message"
                  rows={5}
                  className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Tell us about your requirement..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                )}
              </div>
              <div className="sm:col-span-2 flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl gradient-accent text-white px-6 py-3.5 font-semibold shadow-elegant hover:opacity-90 transition"
                >
                  Send Message <Send className="h-4 w-4" />
                </button>
                <a
                  href="https://wa.me/917383303388"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-secondary text-secondary-foreground px-6 py-3.5 font-semibold hover:bg-secondary/70 transition"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </form>
          </div>

          <div className="reveal space-y-5">
            <div className="rounded-3xl gradient-navy text-white p-8 shadow-elegant">
              <h3 className="font-display text-xl font-extrabold">Raj Enterprise</h3>
              <p className="mt-2 text-sm text-white/70">
                Labour Contractor & Manpower Supplier — serving manufacturing industries since 2008.
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex gap-3">
                  <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                  <span>+91 73833 03388</span>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                  <span>info@rajenterprise.in</span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                  <div className="flex flex-col space-y-4">
                    <div>
                      <strong className="font-semibold text-white/90">Office:</strong><br/>
                      Survey No. 173, Plot No. 60,<br/>
                      Aradhna Nagar, Meghpar (Borichi),<br/>
                      Anjar - Kutch, Gujarat, India.
                    </div>
                    <div>
                      <strong className="font-semibold text-white/90">Corp. Office:</strong><br/>
                      Aashiyana House,<br/>
                      1 - Rajputpara, Behind Trikon Baug Parking,<br/>
                      Rajkot - 360001, Gujarat, India.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden border border-border shadow-card aspect-[4/3]">
              <iframe
                title="Raj Enterprise location"
                src="https://www.google.com/maps?q=Rajkot,+Gujarat,+India&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
