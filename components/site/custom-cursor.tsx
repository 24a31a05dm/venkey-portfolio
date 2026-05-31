"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 400, damping: 34, mass: 0.3 });
  const springY = useSpring(cursorY, { stiffness: 400, damping: 34, mass: 0.3 });

  useEffect(() => {
    const canUseCursor = window.matchMedia("(pointer: fine)").matches;
    setEnabled(canUseCursor);

    if (!canUseCursor) {
      return;
    }

    document.documentElement.classList.add("has-custom-cursor");

    function handleMove(event: MouseEvent) {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    }

    function handleOver(event: MouseEvent) {
      const target = event.target as HTMLElement;
      setHovering(Boolean(target.closest("a, button, [data-cursor='interactive']")));
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [cursorX, cursorY]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[95] size-4 rounded-full bg-primary mix-blend-screen"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: hovering ? 0.55 : 1 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[94] size-12 rounded-full border border-primary/40 bg-primary/5"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: hovering ? 1.75 : 1 }}
        transition={{ type: "spring", stiffness: 240, damping: 22 }}
      />
    </>
  );
}
