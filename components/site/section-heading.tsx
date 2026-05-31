"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
      data-gsap="reveal"
    >
      <Badge className="mb-5">{eyebrow}</Badge>
      <motion.h2
        className="text-balance font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        {title}
      </motion.h2>
      {copy ? (
        <motion.p
          className={cn(
            "mt-5 text-base leading-7 text-muted-foreground sm:text-lg",
            align === "center" && "mx-auto max-w-2xl",
          )}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {copy}
        </motion.p>
      ) : null}
    </div>
  );
}
