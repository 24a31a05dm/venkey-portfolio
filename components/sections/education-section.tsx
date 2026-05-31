"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Medal } from "lucide-react";

import { AnimatedCounter } from "@/components/motion/animated-counter";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/section-heading";
import { personalInfo } from "@/data/portfolio";

const educationDetails = [
  { label: "College", value: personalInfo.college, icon: GraduationCap },
  { label: "Program", value: personalInfo.role, icon: BookOpen },
  { label: "Branch / Section", value: personalInfo.branchSection, icon: BookOpen },
  { label: "Roll Number", value: personalInfo.rollNumber, icon: Medal },
  { label: "Current CGPA", value: personalInfo.cgpa, icon: Medal },
];

export function EducationSection() {
  return (
    <section id="education" className="section-shell scroll-mt-24">
      <div className="container">
        <SectionHeading
          eyebrow="Education"
          title="Core computer science foundations with a product-builder mindset."
          copy="The academic path is paired with hands-on exploration in interfaces, databases, software engineering, and full stack implementation."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Card className="h-full overflow-hidden">
              <CardContent className="flex h-full flex-col justify-between p-8">
                <div>
                  <p className="font-mono text-xs uppercase text-primary">Academic signal</p>
                  <div className="mt-5 flex items-end gap-3">
                    <span className="text-6xl font-semibold text-white">
                      <AnimatedCounter value={8.47} decimals={2} />
                    </span>
                    <span className="pb-2 text-muted-foreground">CGPA</span>
                  </div>
                  <p className="mt-5 leading-7 text-muted-foreground">
                    A consistent academic base that supports deeper work in DBMS,
                    web technologies, software engineering, and system design habits.
                  </p>
                </div>
                <motion.div
                  className="mt-8 h-2 rounded-full bg-white/10"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="h-full w-[84.7%] rounded-full bg-gradient-to-r from-cyber-cyan via-cyber-green to-cyber-magenta" />
                </motion.div>
              </CardContent>
            </Card>
          </Reveal>

          <div className="grid gap-4">
            {educationDetails.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <Reveal key={detail.label} delay={index * 0.08}>
                  <div className="flex items-center gap-5 rounded-lg border border-white/10 bg-white/[0.05] p-5 backdrop-blur-md">
                    <div className="grid size-12 place-items-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase text-muted-foreground">{detail.label}</p>
                      <h3 className="mt-1 text-xl font-semibold text-white">{detail.value}</h3>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
