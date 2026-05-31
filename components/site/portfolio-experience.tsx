"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

import { CustomCursor } from "@/components/site/custom-cursor";
import { FloatingControls } from "@/components/site/floating-controls";
import { LoadingScreen } from "@/components/site/loading-screen";
import { ScrollAnimations } from "@/components/site/scroll-animations";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { SmoothScrollProvider } from "@/components/site/smooth-scroll-provider";
import { ThreeBackgroundShell } from "@/components/site/three-background-shell";

export function PortfolioExperience({ children }: PropsWithChildren) {
  return (
    <SmoothScrollProvider>
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      <FloatingControls />
      <ThreeBackgroundShell />
      <ScrollAnimations />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.35 }}
      >
        {children}
      </motion.div>
    </SmoothScrollProvider>
  );
}
