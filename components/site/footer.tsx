import { Code2, Github, Linkedin, Mail, Trophy } from "lucide-react";

import { personalInfo, socialLinks } from "@/data/portfolio";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  LeetCode: Code2,
  HackerRank: Trophy,
  Mail: Mail,
};

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-10">
      <div className="container flex flex-col gap-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">{personalInfo.fullName}</p>
          <p className="mt-1">{personalInfo.role} at {personalInfo.college}.</p>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = socialIcons[link.label];
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-muted-foreground transition-colors hover:border-primary/35 hover:text-primary"
                aria-label={link.label}
              >
                <Icon className="size-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
