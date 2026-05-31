"use client";

import { motion } from "framer-motion";
import { BrainCircuit, GraduationCap, Rocket, Target } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/section-heading";
import { focusAreas, personalInfo, timeline } from "@/data/portfolio";

const pillars = [
  {
    icon: BrainCircuit,
    title: "Engineering Mindset",
    copy: "I like turning complex problems into simple systems with readable code, clear data flow, and thoughtful UI decisions.",
  },
  {
    icon: Target,
    title: "Product Focus",
    copy: "My work starts with the user journey, then moves into architecture, interaction, responsiveness, and performance.",
  },
  {
    icon: Rocket,
    title: "Career Direction",
    copy: "I am growing toward full stack roles where I can contribute across frontend, backend, database, and design systems.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-shell scroll-mt-24">
      <div className="container">
        <SectionHeading
          eyebrow="About Me"
          title="A CSE student shaping code into premium digital experiences."
          copy={`I am ${personalInfo.fullName}, a ${personalInfo.role} at ${personalInfo.college}. My current focus is building the habits of a dependable engineer: strong fundamentals, clean execution, and a sharp eye for user experience.`}
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <Card className="h-full overflow-hidden">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-8 flex items-center gap-4">
                  <div className="grid size-12 place-items-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                    <GraduationCap className="size-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Currently studying</p>
                    <h3 className="text-2xl font-semibold text-white">Computer Science Engineering</h3>
                  </div>
                </div>

                <p className="text-lg leading-8 text-muted-foreground">
                  I am interested in the full lifecycle of software: how data is modeled,
                  how systems are engineered, how interfaces are designed, and how a user
                  finally feels when everything responds smoothly.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {focusAreas.map((area) => (
                    <motion.span
                      key={area}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white"
                      whileHover={{ y: -3, borderColor: "rgba(85,240,255,0.45)" }}
                    >
                      {area}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <div className="grid gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={index * 0.08}>
                  <Card className="group overflow-hidden">
                    <CardContent className="relative p-6">
                      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyber-cyan via-cyber-green to-cyber-magenta opacity-70" />
                      <div className="flex gap-4">
                        <div className="grid size-11 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-primary transition-colors group-hover:border-primary/35">
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                          <p className="mt-2 leading-7 text-muted-foreground">{pillar.copy}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>

        <div className="mt-14">
          <div className="relative grid gap-6 lg:grid-cols-3">
            <div className="absolute left-4 top-4 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-primary/50 via-accent/35 to-cyber-magenta/45 lg:block" />
            {timeline.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <div className="relative h-full rounded-lg border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md">
                  <div className="mb-5 grid size-9 place-items-center rounded-full border border-primary/35 bg-cyber-ink text-sm font-semibold text-primary">
                    {index + 1}
                  </div>
                  <p className="font-mono text-xs uppercase text-primary">{item.year}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-accent">{item.place}</p>
                  <p className="mt-4 leading-7 text-muted-foreground">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
