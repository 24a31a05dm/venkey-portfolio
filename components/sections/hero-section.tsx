"use client";

import { motion, useMotionValue, useSpring, useTransform, type MotionStyle } from "framer-motion";
import { ArrowDown, ArrowUpRight, Code2, FileText, Github, Linkedin, Mail, Sparkles, Trophy } from "lucide-react";
import Image from "next/image";
import type { MouseEvent } from "react";

import { AnimatedCounter } from "@/components/motion/animated-counter";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { TypingText } from "@/components/motion/typing-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { heroRoles, personalInfo, socialLinks, stats } from "@/data/portfolio";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  LeetCode: Code2,
  HackerRank: Trophy,
  Mail: Mail,
};

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 22 });
  const profileX = useTransform(smoothX, [0, 1], [-14, 14]);
  const profileY = useTransform(smoothY, [0, 1], [-10, 10]);

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width);
    mouseY.set((event.clientY - rect.top) / rect.height);
  }

  const spotlightStyle = {
    "--spotlight-x": useTransform(smoothX, (value) => `${value * 100}%`),
    "--spotlight-y": useTransform(smoothY, (value) => `${value * 100}%`),
  } as MotionStyle;

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-28"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={spotlightStyle}
      >
        <div className="absolute inset-0 grid-mask" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--spotlight-x)_var(--spotlight-y),rgba(85,240,255,0.16),transparent_28rem)]" />
      </motion.div>

      <motion.div
        className="absolute left-[8%] top-28 size-28 rounded-full border border-primary/20 bg-primary/10 blur-[1px]"
        animate={{ y: [0, 22, 0], rotate: [0, 18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-28 right-[10%] size-40 rounded-full border border-cyber-magenta/20 bg-cyber-magenta/10"
        animate={{ y: [0, -28, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge className="mb-6 gap-2">
              <Sparkles className="size-3.5" />
              Portfolio / CSE / Future-ready builder
            </Badge>
          </motion.div>

          <motion.h1
            className="text-balance font-display text-5xl font-semibold leading-none text-white sm:text-6xl lg:text-7xl xl:text-8xl"
            initial={{ opacity: 0, y: 34, filter: "blur(16px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.78, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            {personalInfo.displayName} builds digital systems with{" "}
            <span className="text-gradient">precision and glow.</span>
          </motion.h1>

          <motion.div
            className="mt-6 min-h-9 font-mono text-sm uppercase text-muted-foreground sm:text-base"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7 }}
          >
            <TypingText words={heroRoles} />
          </motion.div>

          <motion.p
            className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.75 }}
          >
            {personalInfo.fullName} is a {personalInfo.role} at {personalInfo.college} with
            an {personalInfo.cgpa} CGPA, focused on web development, UI/UX, DBMS,
            software engineering, and full stack product craft.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.18, duration: 0.75 }}
          >
            <MagneticButton>
              <Button asChild size="lg">
                <a href="#projects">
                  View Projects
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button asChild size="lg" variant="secondary">
                <a href="#contact">
                  Contact Me
                  <Mail className="size-4" />
                </a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button asChild size="lg" variant="outline">
                <a href={personalInfo.resume} target="_blank" rel="noreferrer">
                  Resume
                  <FileText className="size-4" />
                </a>
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.75 }}
          >
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.label];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-muted-foreground transition-colors hover:border-primary/45 hover:text-primary"
                  aria-label={link.label}
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto aspect-square w-full max-w-[440px]"
          style={{ x: profileX, y: profileY }}
          initial={{ opacity: 0, scale: 0.9, filter: "blur(18px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.95, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyber-cyan/30 via-cyber-green/20 to-cyber-magenta/25 blur-3xl" />
          <motion.div
            className="absolute inset-8 rounded-full border border-primary/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border border-white/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-10 overflow-hidden rounded-full border border-white/[0.12] bg-cyber-panel/70 shadow-glow-strong backdrop-blur-xl">
            <Image
              src={personalInfo.photo}
              alt={`${personalInfo.fullName} profile photo`}
              fill
              priority
              className="scale-[1.04] object-cover object-[50%_38%]"
              sizes="(max-width: 768px) 80vw, 420px"
            />
          </div>
          <div className="absolute -bottom-2 left-6 right-6 grid grid-cols-3 gap-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="rounded-lg border border-white/10 bg-cyber-ink/72 p-3 text-center shadow-glass backdrop-blur-xl"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.35 + index * 0.1, duration: 0.55 }}
              >
                <p className="text-lg font-semibold text-white">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.value % 1 === 0 ? 0 : 2}
                  />
                </p>
                <p className="mt-1 text-[10px] uppercase text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-muted-foreground backdrop-blur-md transition-colors hover:text-primary md:flex"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.55 }}
      >
        Scroll
        <ArrowDown className="size-3.5 animate-bounce" />
      </motion.a>
    </section>
  );
}
