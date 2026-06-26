import { Factory, Truck, Wrench, Package, Building, Cpu, FlaskConical, Hammer } from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  { icon: Factory, name: "Manufacturing" },
  { icon: Wrench, name: "Automotive" },
  { icon: Package, name: "Warehousing" },
  { icon: Truck, name: "Logistics" },
  { icon: Building, name: "Construction" },
  { icon: Cpu, name: "Electronics" },
  { icon: FlaskConical, name: "Pharma & Chemical" },
  { icon: Hammer, name: "Engineering" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

export function IndustriesSection() {
  return (
    <section className="py-24 bg-navy-deep relative overflow-hidden border-y border-white/5">
      {/* Dark premium background elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-accent/20 blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gold/20 blur-[120px] pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Industries Served
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold leading-tight text-white">
              Powering every corner of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-gold">
                industry.
              </span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-lg lg:text-xl max-w-xl lg:ml-auto leading-relaxed"
          >
            From precision electronics to heavy engineering, we deploy the right workforce and
            security cover for the operational reality of your sector.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {industries.map((i) => (
            <motion.div
              key={i.name}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative rounded-3xl bg-navy/50 backdrop-blur-md border border-white/5 p-6 sm:p-8 flex flex-col items-start gap-5 hover:bg-navy hover:border-accent/50 transition-all duration-500 overflow-hidden shadow-xl shadow-black/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-white/5 text-white/80 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-accent/20 group-hover:rotate-6">
                <i.icon className="h-6 w-6" />
              </div>
              <div className="relative z-10 font-display font-bold text-lg text-white group-hover:text-white transition-colors">
                {i.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
