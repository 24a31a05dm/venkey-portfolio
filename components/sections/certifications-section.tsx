"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { certifications, personalInfo } from "@/data/portfolio";

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-shell scroll-mt-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center" data-gsap="reveal">
          <Badge className="mb-5">Certifications</Badge>
          <h2 className="text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Verified learning tracks, internships, workshops, and participation records.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted-foreground">
            The gallery highlights {personalInfo.displayName}'s strongest current areas:
            programming, full stack development, Android, data engineering, IoT,
            Java, communication, and social contribution.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certification, index) => (
            <Reveal key={certification.title} delay={index * 0.05}>
              <motion.article
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.05] backdrop-blur-md"
                whileHover={{ y: -6, borderColor: "rgba(85,240,255,0.35)" }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
              >
                <a
                  href={certification.href}
                  target="_blank"
                  rel="noreferrer"
                  className="relative block aspect-[4/3] overflow-hidden border-b border-white/10 bg-cyber-ink"
                  aria-label={`Open ${certification.title} certificate`}
                >
                  <Image
                    src={certification.preview}
                    alt=""
                    fill
                    aria-hidden="true"
                    className="scale-110 object-cover opacity-30 blur-xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <Image
                    src={certification.preview}
                    alt={`${certification.title} certificate preview`}
                    fill
                    className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-cyber-ink/75 px-3 py-1 font-mono text-[10px] uppercase text-primary backdrop-blur-md">
                    {certification.category}
                  </div>
                </a>

                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="grid size-10 place-items-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                      <BadgeCheck className="size-5" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-muted-foreground">
                      {certification.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold leading-snug text-white">
                    {certification.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {certification.issuer} / {certification.meta}
                  </p>
                  <p className="mt-4 flex-1 leading-7 text-muted-foreground">
                    {certification.description}
                  </p>
                  <Button asChild variant="secondary" size="sm" className="mt-6 w-fit">
                    <a href={certification.href} target="_blank" rel="noreferrer">
                      View Certificate
                      <ExternalLink className="size-4" />
                    </a>
                  </Button>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
