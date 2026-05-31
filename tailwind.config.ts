import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1240px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        cyber: {
          cyan: "#55f0ff",
          green: "#8cffd2",
          magenta: "#ff4fd8",
          gold: "#ffd166",
          ink: "#05060d",
          panel: "#0d1222",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "ui-monospace"],
        display: ["var(--font-geist-sans)", "Inter", "ui-sans-serif"],
      },
      boxShadow: {
        glow: "0 0 30px rgba(85, 240, 255, 0.3)",
        "glow-strong": "0 0 70px rgba(85, 240, 255, 0.28), 0 0 140px rgba(255, 79, 216, 0.12)",
        glass: "inset 0 1px 0 rgba(255,255,255,0.12), 0 18px 70px rgba(0,0,0,0.3)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 20% 10%, rgba(85,240,255,.22), transparent 28%), radial-gradient(circle at 72% 18%, rgba(255,79,216,.16), transparent 28%), radial-gradient(circle at 52% 78%, rgba(140,255,210,.12), transparent 28%)",
        "grid-line":
          "linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.06)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        pulseGlow: "pulseGlow 5s ease-in-out infinite",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
