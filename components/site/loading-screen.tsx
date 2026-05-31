"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { personalInfo } from "@/data/portfolio";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1550);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-cyber-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(16px)" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-hero-radial opacity-80" />
          <motion.div
            className="relative z-10 flex flex-col items-center gap-6 text-center"
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative grid size-24 place-items-center">
              <motion.div
                className="absolute inset-0 rounded-full border border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-3 rounded-full border border-accent/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
              />
              <span className="text-2xl font-semibold text-gradient">{personalInfo.initials}</span>
            </div>
            <div>
              <p className="font-mono text-xs uppercase text-primary">Initializing portfolio</p>
              <h1 className="mt-2 text-2xl font-semibold text-white">{personalInfo.displayName}</h1>
            </div>
            <div className="h-1 w-56 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyber-cyan via-cyber-green to-cyber-magenta"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
