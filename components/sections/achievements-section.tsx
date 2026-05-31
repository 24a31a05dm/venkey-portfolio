"use client";

import { motion } from "framer-motion";
import { Award, Database, MonitorSmartphone } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/section-heading";
import { achievements, personalInfo } from "@/data/portfolio";

const icons = [Award, MonitorSmartphone, Database];

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-shell scroll-mt-24">
      <div className="container">
        <SectionHeading
          eyebrow="Experience / Achievements"
          title="Signals of consistency, curiosity, and execution."
          copy={`${personalInfo.displayName}'s current edge is momentum: combining college fundamentals with practical builds, interface experiments, and database-centered problem solving.`}
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((achievement, index) => {
            const Icon = icons[index] ?? Award;
            return (
              <Reveal key={achievement.title} delay={index * 0.1}>
                <Card className="group h-full overflow-hidden">
                  <CardContent className="relative p-6">
                    <motion.div
                      className="absolute -right-10 -top-10 size-28 rounded-full bg-primary/10 blur-2xl"
                      animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0.85, 0.4] }}
                      transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="relative">
                      <div className="mb-8 grid size-12 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-primary group-hover:border-primary/35">
                        <Icon className="size-5" />
                      </div>
                      <p className="font-mono text-xs uppercase text-primary">{achievement.value}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{achievement.title}</h3>
                      <p className="mt-4 leading-7 text-muted-foreground">{achievement.detail}</p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
