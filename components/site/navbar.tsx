"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Code2, Github, Linkedin, Mail, Menu, Trophy, X } from "lucide-react";
import { useEffect, useState } from "react";

import { MagneticButton } from "@/components/motion/magnetic-button";
import { Button } from "@/components/ui/button";
import { navItems, personalInfo, socialLinks } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  LeetCode: Code2,
  HackerRank: Trophy,
  Mail: Mail,
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(navItems.map((item) => item.id));

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <nav className="container">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-300",
            scrolled
              ? "border-white/10 bg-cyber-ink/72 shadow-glass backdrop-blur-2xl"
              : "border-white/0 bg-transparent",
          )}
        >
          <a href="#home" className="group flex items-center gap-3" onClick={closeMenu}>
            <span className="grid size-10 place-items-center rounded-full border border-primary/30 bg-primary/10 text-sm font-semibold text-primary shadow-glow">
              {personalInfo.initials}
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-sm font-semibold text-white">{personalInfo.displayName}</span>
              <span className="block font-mono text-[10px] uppercase text-muted-foreground">
                CSE Portfolio
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors",
                  activeSection === item.id ? "text-white" : "text-muted-foreground hover:text-white",
                )}
              >
                {activeSection === item.id ? (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full border border-primary/20 bg-primary/10"
                    transition={{ type: "spring", stiffness: 340, damping: 28 }}
                  />
                ) : null}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.label];
              return (
                <MagneticButton key={link.label} strength={0.16}>
                  <Button asChild size="icon" variant="ghost" aria-label={link.label}>
                    <a href={link.href} target="_blank" rel="noreferrer">
                      <Icon className="size-4" />
                    </a>
                  </Button>
                </MagneticButton>
              );
            })}
          </div>

          <Button
            className="lg:hidden"
            size="icon"
            variant="secondary"
            aria-label="Open navigation menu"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="container lg:hidden"
            initial={{ opacity: 0, y: -16, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(10px)" }}
            transition={{ duration: 0.32 }}
          >
            <div className="mt-3 rounded-lg border border-white/10 bg-cyber-ink/92 p-3 shadow-glass backdrop-blur-2xl">
              <div className="grid gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    className={cn(
                      "rounded-md px-4 py-3 text-sm transition-colors",
                      activeSection === item.id
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-white/[0.07] hover:text-white",
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
