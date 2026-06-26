import { useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function GlobalLoader() {
  const isPending = useRouterState({ select: (s) => s.status === "pending" });
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isPending) {
      // Delay showing the loader to avoid flashing on very fast navigations
      timeout = setTimeout(() => setShow(true), 150);
    } else {
      setShow(false);
    }
    return () => clearTimeout(timeout);
  }, [isPending]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none"
        >
          {/* Progress bar */}
          <div className="h-1.5 w-full bg-primary/20 overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%", x: "0%" }}
              animate={{ 
                width: ["0%", "40%", "100%"],
                x: ["0%", "10%", "0%"]
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </div>
          
          {/* Optional blurred glow effect */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-primary/30 blur-xl mix-blend-screen" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
