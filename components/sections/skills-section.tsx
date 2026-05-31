"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layers3, Palette } from "lucide-react";

import { TiltCard } from "@/components/motion/tilt-card";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { SectionHeading } from "@/components/site/section-heading";
import { marqueeTech, skills } from "@/data/portfolio";

const skillIcons = [Code2, Layers3, Database, Palette];

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell scroll-mt-24 overflow-hidden">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="A balanced toolkit across interface, data, and engineering fundamentals."
          copy="The stack is intentionally practical: modern frontend tools, backend basics, DBMS foundations, and the product thinking needed to make software feel complete."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((group, index) => {
            const Icon = skillIcons[index] ?? Code2;
            return (
              <TiltCard key={group.group}>
                <Card className="group h-full overflow-hidden">
                  <CardContent className="p-6">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-xs uppercase text-primary">Module {index + 1}</p>
                        <h3 className="mt-2 text-2xl font-semibold text-white">{group.group}</h3>
                      </div>
                      <div className="grid size-12 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-primary transition-colors group-hover:border-primary/35">
                        <Icon className="size-5" />
                      </div>
                    </div>
                    <p className="mb-7 min-h-14 leading-7 text-muted-foreground">{group.summary}</p>
                    <div className="space-y-5">
                      {group.items.map((skill, skillIndex) => (
                        <div key={skill.name}>
                          <div className="mb-2 flex items-center justify-between text-sm">
                            <span className="text-white">{skill.name}</span>
                            <span className="font-mono text-primary">{skill.level}%</span>
                          </div>
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.85, delay: skillIndex * 0.08 }}
                            className="origin-left"
                          >
                            <Progress value={skill.level} />
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            );
          })}
        </div>
      </div>

      <div className="mt-16 border-y border-white/10 bg-white/[0.04] py-5">
        <div className="flex w-max animate-marquee gap-4">
          {[...marqueeTech, ...marqueeTech].map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="rounded-full border border-white/10 bg-cyber-panel/70 px-5 py-2 font-mono text-xs uppercase text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
