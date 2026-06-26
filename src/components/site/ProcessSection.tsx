import { MessageSquare, ClipboardCheck, UserCheck, Truck, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: MessageSquare,
    title: "Enquiry & Requirement",
    desc: "Share your headcount, skills, shift pattern and location.",
  },
  {
    icon: ClipboardCheck,
    title: "Proposal & Agreement",
    desc: "We submit a tailored proposal covering rates, compliance and terms.",
  },
  {
    icon: UserCheck,
    title: "Worker Selection",
    desc: "We screen and select verified workers matched to your skill requirement.",
  },
  {
    icon: Truck,
    title: "On-site Deployment",
    desc: "Workforce mobilized within 24–48 hours with PPE and supervision.",
  },
  {
    icon: BarChart3,
    title: "Ongoing Management",
    desc: "Supervisors handle attendance, performance and monthly reporting.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-white">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Our Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-extrabold leading-tight text-slate-900"
          >
            A simple path from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">
              enquiry to deployment.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-slate-600 text-lg"
          >
            Five clear steps — predictable, transparent and built around your production timeline.
          </motion.p>
        </div>

        <div className="mt-20 relative">
          {/* Animated Connecting Line */}
          <div className="absolute left-1/2 md:left-auto md:top-[40px] md:inset-x-10 h-full w-0.5 md:w-auto md:h-0.5 bg-slate-100 -translate-x-1/2 md:translate-x-0 z-0 hidden lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-r from-accent to-blue-500 origin-left"
            />
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                className="relative flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div className="relative mb-6">
                  {/* Ripple effect */}
                  <div className="absolute inset-0 rounded-2xl bg-accent/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10 grid h-16 w-16 md:h-20 md:w-20 place-items-center rounded-2xl bg-white border border-slate-200 shadow-sm text-slate-700 group-hover:border-accent group-hover:text-accent group-hover:shadow-md transition-all duration-500 group-hover:-translate-y-1">
                    <s.icon className="h-6 w-6 md:h-8 md:w-8 transition-transform duration-500 group-hover:scale-110" />
                  </div>

                  <div className="absolute -top-3 -right-3 grid h-8 w-8 place-items-center rounded-full bg-slate-900 text-white text-sm font-bold border-[3px] border-white shadow-sm group-hover:bg-accent transition-colors duration-300 z-20">
                    {i + 1}
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-base text-slate-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
