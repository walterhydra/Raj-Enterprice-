import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function CTABand({
  title = "Need Reliable Workforce for Your Industry?",
  subtitle = "Contact Raj Enterprise today for skilled, semi-skilled and security manpower solutions.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative gradient-navy text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 grid lg:grid-cols-[1.4fr_auto] gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-extrabold leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-white/80 text-lg max-w-2xl">{subtitle}</p>
        </motion.div>
        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl gradient-accent px-6 py-3.5 font-semibold shadow-elegant hover:opacity-90 transition"
          >
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="tel:+917383303388"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur border border-white/20 px-6 py-3.5 font-semibold hover:bg-white/15 transition"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
