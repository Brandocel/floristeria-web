"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorState = "default" | "link" | "view";

const sizes: Record<CursorState, number> = {
  default: 10,
  link: 40,
  view: 80,
};

const colors: Record<CursorState, string> = {
  default: "#2C2C2C",
  link: "#DBCCBA",
  view: "#2C2C2C",
};

export function CustomCursor() {
  const [state, setState] = useState<CursorState>("default");
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 250, mass: 0.4 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    if (!isVisible) setIsVisible(true);
  }, [mouseX, mouseY, isVisible]);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as Element;
    if (target.closest("[data-cursor='view']") || target.closest("img")) {
      setState("view");
    } else if (target.closest("a, button, [role='button']")) {
      setState("link");
    } else {
      setState("default");
    }
  }, []);

  const handleMouseLeave = useCallback(() => setIsVisible(false), []);
  const handleMouseEnter = useCallback(() => setIsVisible(true), []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [handleMouseMove, handleMouseOver, handleMouseLeave, handleMouseEnter]);

  const size = sizes[state];

  return (
    <motion.div
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: size,
        height: size,
        backgroundColor: colors[state],
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        width: { type: "spring", damping: 20, stiffness: 300 },
        height: { type: "spring", damping: 20, stiffness: 300 },
        backgroundColor: { duration: 0.15 },
        opacity: { duration: 0.2 },
      }}
      className="pointer-events-none fixed left-0 top-0 z-[998] hidden items-center justify-center rounded-full mix-blend-difference lg:flex"
      aria-hidden="true"
    >
      {state === "view" && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="font-[var(--font-shanti)] text-[11px] tracking-[0.1em] text-[#F8F3EC]"
        >
          Ver
        </motion.span>
      )}
    </motion.div>
  );
}
