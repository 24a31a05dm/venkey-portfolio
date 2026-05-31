"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Mail, MapPin, Phone, School, Send } from "lucide-react";
import { FormEvent, useState } from "react";

import { MagneticButton } from "@/components/motion/magnetic-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/site/section-heading";
import { contactLinks, personalInfo } from "@/data/portfolio";

const socialIcons = {
  Location: MapPin,
  Email: Mail,
  "Academic Email": School,
  Phone: Phone,
  Resume: FileText,
};

export function ContactSection() {
  const [status, setStatus] = useState("Ready to collaborate");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const message = String(form.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio message from ${name || "a visitor"}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setStatus("Opening your email client");
  }

  return (
    <section id="contact" className="section-shell scroll-mt-24">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's turn a strong idea into a clean, working product."
          copy={`For internships, collaborations, projects, or design-to-code work, ${personalInfo.displayName} is open to meaningful opportunities that combine engineering and user experience.`}
          align="center"
        />

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <p className="font-mono text-xs uppercase text-primary">Signal routes</p>
              <div className="mt-6 grid gap-3">
                {contactLinks.map((link) => {
                  const Icon = socialIcons[link.label];
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.05] p-4 transition-colors hover:border-primary/35 hover:bg-primary/10"
                    >
                      <span className="flex items-center gap-3 text-white">
                        <Icon className="size-4 text-primary" />
                        <span>
                          <span className="block">{link.label}</span>
                          <span className="block text-xs text-muted-foreground">{link.value}</span>
                        </span>
                      </span>
                      <ArrowUpRight className="size-4 text-muted-foreground" />
                    </a>
                  );
                })}
              </div>
              <div className="mt-6 rounded-lg border border-accent/20 bg-accent/10 p-4 text-sm text-accent">
                {status}
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-2">
                  <label className="text-sm text-white" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="h-12 rounded-lg border border-white/10 bg-white/[0.05] px-4 text-white outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/45"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm text-white" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="h-12 rounded-lg border border-white/10 bg-white/[0.05] px-4 text-white outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/45"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm text-white" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="resize-none rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/45"
                    placeholder="Tell me about the opportunity"
                  />
                </div>
                <MagneticButton className="mt-2">
                  <Button type="submit" size="lg">
                    Send Message
                    <Send className="size-4" />
                  </Button>
                </MagneticButton>
              </form>
            </CardContent>
          </Card>
        </div>

        <motion.div
          className="mx-auto mt-12 h-px max-w-4xl bg-gradient-to-r from-transparent via-primary/45 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    </section>
  );
}
