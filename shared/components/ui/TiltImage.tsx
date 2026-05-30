"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

type TiltImageProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
};

export function TiltImage({
  children,
  className = "",
  maxTilt = 10,
}: TiltImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glareX  = useMotionValue(50);
  const glareY  = useMotionValue(50);
  const glareOp = useMotionValue(0);

  const springCfg = { stiffness: 140, damping: 20, mass: 0.5 };
  const springX  = useSpring(rotateX, springCfg);
  const springY  = useSpring(rotateY, springCfg);
  const springGX = useSpring(glareX,  springCfg);
  const springGY = useSpring(glareY,  springCfg);
  const springGO = useSpring(glareOp, { stiffness: 200, damping: 30 });

  // Gradiente del glare se recalcula cuando cambian GX/GY
  const glareBackground = useTransform(
    [springGX, springGY],
    ([gx, gy]: number[]) =>
      `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 35%, transparent 65%)`
  );

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const cx = rect.width  / 2;
    const cy = rect.height / 2;

    rotateY.set(((mx - cx) / cx) * maxTilt);
    rotateX.set(-((my - cy) / cy) * maxTilt);
    glareX.set((mx / rect.width)  * 100);
    glareY.set((my / rect.height) * 100);
    glareOp.set(1);
  }

  function onMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    glareOp.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className={`${className} relative`}
      style={{
        rotateX:           springX,
        rotateY:           springY,
        transformPerspective: 900,
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}

      {/* Glare / reflejo de luz */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10"
        style={{ background: glareBackground, opacity: springGO }}
        aria-hidden="true"
      />
    </motion.div>
  );
}
