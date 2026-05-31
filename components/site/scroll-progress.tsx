"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.3,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[90] h-1 w-full origin-left bg-gradient-to-r from-cyber-cyan via-cyber-green to-cyber-magenta"
      style={{ scaleX }}
    />
  );
}
