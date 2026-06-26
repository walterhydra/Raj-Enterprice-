import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function SplashLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide the splash screen after the initial animation (faster)
    const timer = setTimeout(() => {
      setShow(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // To prevent scrolling while loading
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);

  const companyName = "RAJ ENTERPRISE";

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center pointer-events-none">
          {/* Top Curtain */}
          <motion.div
            initial={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 right-0 h-[50.5vh] bg-[#0B1A2C] pointer-events-auto"
          />
          
          {/* Bottom Curtain */}
          <motion.div
            initial={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="absolute bottom-0 left-0 right-0 h-[50.5vh] bg-[#0B1A2C] pointer-events-auto"
          />

          {/* Center Content */}
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            {/* Animated Text */}
            <div className="overflow-hidden">
              <motion.h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-[0.15em] text-white flex">
                {companyName.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      delay: 0.1 + i * 0.03,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            {/* Subtitle / Est. */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-4 text-white/50 text-xs md:text-sm tracking-[0.3em] uppercase"
            >
              <div className="h-px w-8 bg-white/20" />
              <span>Est. 2008</span>
              <div className="h-px w-8 bg-white/20" />
            </motion.div>

            {/* Modern Loading Line */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="mt-4 w-64 h-[2px] bg-white/10 overflow-hidden relative"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-[#C6A87C] to-transparent"
              />
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
