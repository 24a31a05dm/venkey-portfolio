"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { MouseEvent, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

interface TiltCardProps extends PropsWithChildren {
  className?: string;
  intensity?: number;
}

export function TiltCard({ children, className, intensity = 9 }: TiltCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 190, damping: 22 });
  const springY = useSpring(rotateY, { stiffness: 190, damping: 22 });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    rotateX.set(((y / rect.height) - 0.5) * -intensity);
    rotateY.set(((x / rect.width) - 0.5) * intensity);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      className={cn("h-full transform-gpu", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX: springX,
        rotateY: springY,
      }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
    >
      {children}
    </motion.div>
  );
}
