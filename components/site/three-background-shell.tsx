"use client";

import dynamic from "next/dynamic";

const ThreeBackground = dynamic(
  () => import("@/components/site/three-background").then((mod) => mod.ThreeBackground),
  {
    ssr: false,
    loading: () => <div className="fixed inset-0 -z-10 bg-hero-radial" />,
  },
);

export function ThreeBackgroundShell() {
  return <ThreeBackground />;
}
