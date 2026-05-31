"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { MouseEvent, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

interface MagneticButtonProps extends PropsWithChildren {
  className?: string;
  strength?: number;
}

export function MagneticButton({
  children,
  className,
  strength = 0.22,
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 170, damping: 18, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 170, damping: 18, mass: 0.6 });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set(offsetX * strength);
    y.set(offsetY * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className={cn("magnetic-target inline-flex", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
}
