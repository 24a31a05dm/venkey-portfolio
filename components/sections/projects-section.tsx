"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

import { TiltCard } from "@/components/motion/tilt-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/section-heading";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const filters = [
  "All",
  "Full Stack",
  "Web Development",
  "DBMS",
  "AI/ML",
  "Python",
  "Design Thinking",
] as const;

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) =>
      project.technologies.some((technology) => technology === activeFilter),
    );
  }, [activeFilter]);

  return (
    <section id="projects" className="section-shell scroll-mt-24">
      <div className="container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Premium cards for practical builds and product concepts."
            copy="A curated set of full stack, DBMS, and interface projects shaped around real product thinking, animated previews, and clean technical storytelling."
          />
          <div className="flex max-w-full gap-2 overflow-x-auto pb-3 lg:pb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "secondary"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className="shrink-0"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const thumbnail = project.thumbnail as string | null;
              const previewImage = thumbnail ?? project.image;
              const previewAlt = thumbnail
                ? project.thumbnailAlt
                : `${project.title} generated project preview`;
              const hasRealThumbnail = Boolean(thumbnail);

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 18, scale: 0.97 }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                >
                  <TiltCard>
                    <Card className="group h-full overflow-hidden">
                      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-cyber-ink">
                        {hasRealThumbnail ? (
                          <Image
                            src={previewImage}
                            alt=""
                            fill
                            aria-hidden="true"
                            className="scale-110 object-cover opacity-35 blur-xl"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        ) : null}
                        <Image
                          src={previewImage}
                          alt={previewAlt}
                          fill
                          className={cn(
                            "transition-transform duration-700 group-hover:scale-105",
                            hasRealThumbnail
                              ? "object-contain p-3"
                              : "object-cover",
                          )}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <motion.div
                          className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(85,240,255,0.18),transparent)] opacity-0"
                          whileHover={{ opacity: 1, x: ["-80%", "80%"] }}
                          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
                          <span className="rounded-full border border-white/10 bg-cyber-ink/75 px-3 py-1 font-mono text-xs uppercase text-primary backdrop-blur-md">
                            {project.category}
                          </span>
                          <span className="rounded-full border border-white/10 bg-cyber-ink/75 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur-md">
                            Project Preview
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                            <p className="mt-3 leading-7 text-muted-foreground">{project.description}</p>
                          </div>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className={cn(
                                "rounded-full border px-3 py-1 text-xs text-muted-foreground",
                                tech === activeFilter
                                  ? "border-primary/35 bg-primary/10 text-primary"
                                  : "border-white/10 bg-white/[0.05]",
                              )}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="mt-7 flex flex-wrap gap-3">
                          <Button asChild variant="secondary" size="sm">
                            <a href={project.github} target="_blank" rel="noreferrer">
                              <Github className="size-4" />
                              GitHub
                            </a>
                          </Button>
                          <Button asChild size="sm">
                            <a href={project.demo} target="_blank" rel="noreferrer">
                              Demo
                              <ArrowUpRight className="size-4" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TiltCard>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
