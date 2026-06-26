import { motion } from "framer-motion";
import { Shield, Clock, Users, Award } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const reasons = [
  {
    icon: Shield,
    title: "100% Verified Workforce",
    desc: "Every worker undergoes strict background checks, Aadhar verification, and skill assessment before deployment.",
  },
  {
    icon: Clock,
    title: "24/7 Support & Deployment",
    desc: "Round the clock supervision and quick replacement guarantee so your production never stops.",
  },
  {
    icon: Award,
    title: "Statutory Compliance",
    desc: "Full compliance with PF, ESI, Minimum Wages Act, and factory regulations. Zero legal risk for you.",
  },
  {
    icon: Users,
    title: "Dedicated Supervisors",
    desc: "Experienced on-site supervisors to manage attendance, grievances, and daily task allocation.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

export function WhyChooseUsSection() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative animated background elements */}
      <motion.div
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.05, 1, 1.05, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-accent/10 via-accent/5 to-transparent blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          rotate: [360, 270, 180, 90, 0],
          scale: [1, 1.1, 1, 1.1, 1],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-gold/10 via-accent/5 to-transparent blur-[120px] pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Why Choose Raj Enterprise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground tracking-tight"
          >
            The difference is in our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-gold">
              commitment to reliability.
            </span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-20 grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative flex gap-5 sm:gap-6 p-6 sm:p-8 rounded-[2rem] bg-card/60 backdrop-blur-xl border border-border/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 shrink-0 grid h-16 w-16 place-items-center rounded-2xl bg-background shadow-sm border border-border/50 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3">
                <r.icon className="h-7 w-7 transition-transform duration-500" />
              </div>
              <div className="relative z-10">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  {r.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed text-base sm:text-lg">
                  {r.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function WhyChooseUsSkeleton() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <Skeleton className="h-6 w-48 rounded-full mb-6" />
          <Skeleton className="h-12 md:h-16 w-3/4 max-w-xl rounded-xl" />
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-6 lg:gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="relative flex gap-5 sm:gap-6 p-6 sm:p-8 rounded-[2rem] bg-card/60 border border-border/50 overflow-hidden"
            >
              <Skeleton className="shrink-0 h-16 w-16 rounded-2xl" />
              <div className="relative z-10 w-full flex flex-col gap-3">
                <Skeleton className="h-7 w-2/3 rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full rounded-md" />
                  <Skeleton className="h-4 w-5/6 rounded-md" />
                  <Skeleton className="h-4 w-4/6 rounded-md" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
