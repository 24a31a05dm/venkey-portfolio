import * as React from "react";

import { cn } from "@/lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("h-2 overflow-hidden rounded-full bg-white/[0.08]", className)}
      {...props}
    >
      <div
        className="h-full rounded-full bg-gradient-to-r from-cyber-cyan via-cyber-green to-cyber-magenta shadow-[0_0_22px_rgba(85,240,255,0.35)]"
        style={{ width: `${Math.max(0, Math.min(value, 100))}%` }}
      />
    </div>
  ),
);
Progress.displayName = "Progress";

export { Progress };
