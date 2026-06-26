import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How quickly can you deploy workers to my site?",
    a: "For confirmed requirements, we typically deploy within 24–48 hours. For larger headcounts or specialized skills, mobilization may take 3–5 working days.",
  },
  {
    q: "What types of workers do you supply?",
    a: "We supply skilled, semi-skilled and unskilled workforce — including machine operators, helpers, loaders, packers, material handlers, electricians, fitters and trained security personnel.",
  },
  {
    q: "Do you handle compliance and statutory payments?",
    a: "Yes. We manage PF, ESI, wages, leave records, attendance and all statutory documentation in line with the Contract Labour Act.",
  },
  {
    q: "Are your security guards trained and licensed?",
    a: "All our security personnel are background-verified, formally trained in industrial security protocols, and equipped for shift duty including night patrolling.",
  },
  {
    q: "What is the minimum and maximum workforce you can supply?",
    a: "We have served requirements ranging from 5 workers to 200+ workers per site, across single and multi-shift operations.",
  },
  {
    q: "Do you offer replacement guarantee?",
    a: "Yes. If a deployed worker is unsuitable or absent, we provide a replacement within the agreed SLA — typically the same day or next working day.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-5xl px-5 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            FAQs
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-extrabold leading-tight text-slate-900"
          >
            Questions,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">
              answered.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-600 text-lg"
          >
            Everything you need to know before partnering with Raj Enterprise.
          </motion.p>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? "bg-white border-accent/30 shadow-[0_8px_30px_rgb(0,0,0,0.06)]" : "bg-white/60 border-slate-200/60 shadow-sm hover:border-slate-300 hover:bg-white"}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 text-left px-6 py-5 md:py-6 group"
                >
                  <span
                    className={`font-display font-bold text-base md:text-lg transition-colors duration-300 ${isOpen ? "text-accent" : "text-slate-800 group-hover:text-slate-900"}`}
                  >
                    {f.q}
                  </span>
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition-all duration-500 ${isOpen ? "bg-accent text-white rotate-180" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200 group-hover:text-slate-700"}`}
                  >
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed text-base md:text-lg">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
