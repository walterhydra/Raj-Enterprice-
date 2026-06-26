import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Raj Enterprise mobilized 80 skilled workers within 36 hours when we ramped up production. Reliability we count on, shift after shift.",
    name: "Rakesh Patel",
    role: "Plant Manager, Auto Components Ltd.",
  },
  {
    quote:
      "Their security team has been protecting our warehouse for 6 years. Disciplined, alert, and consistently professional.",
    name: "Anita Sharma",
    role: "Operations Head, National Logistics",
  },
  {
    quote:
      "Documentation, compliance, payroll — all handled. They've taken the people side off our plate completely.",
    name: "Vikram Mehta",
    role: "Director, Mehta Industries",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-navy-deep relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
            x: ["0%", "10%", "0%"],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-accent/20 blur-[150px]"
        />
        <motion.div
          animate={{
            rotate: [360, 180, 0],
            scale: [1, 1.3, 1],
            x: ["0%", "-10%", "0%"],
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-gold/20 blur-[150px]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Client Voices
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white tracking-tight"
          >
            Trusted by plant managers{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-gold">
              across India.
            </span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative rounded-[2rem] bg-navy/60 backdrop-blur-xl border border-white/10 p-8 shadow-2xl overflow-hidden hover:bg-navy hover:border-accent/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <Quote className="absolute top-8 right-8 h-12 w-12 text-white/10 group-hover:text-accent/20 transition-colors duration-500 transform group-hover:scale-110 group-hover:-rotate-12" />

              <div className="flex gap-1 text-accent relative z-10 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              <blockquote className="text-white/80 leading-relaxed text-lg relative z-10 min-h-[120px]">
                "{t.quote}"
              </blockquote>

              <figcaption className="mt-8 pt-6 border-t border-white/10 relative z-10 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-accent to-gold grid place-items-center text-white font-bold text-lg shadow-inner">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-display font-bold text-white text-lg group-hover:text-accent transition-colors">
                    {t.name}
                  </div>
                  <div className="text-sm text-white/60 mt-0.5">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
