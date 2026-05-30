"use client";

import { motion } from "framer-motion";

const items = [
  "Línea Morada",
  "·",
  "Ramos Artesanales",
  "·",
  "Cancún",
  "·",
  "Arreglos Florales",
  "·",
  "Flores Frescas",
  "·",
  "Detalles con Amor",
  "·",
];

type MarqueeBandProps = {
  reverse?: boolean;
};

export function MarqueeBand({ reverse = false }: MarqueeBandProps) {
  const duplicated = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden border-y border-[#DBCCBA] bg-[#F8F3EC] py-4">
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: reverse ? ["0%", "33.333%"] : ["0%", "-33.333%"] }}
        transition={{
          duration: 18,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicated.map((item, i) => (
          <span
            key={i}
            className={
              item === "·"
                ? "font-[var(--font-serif)] text-[20px] text-[#DBCCBA]"
                : "font-[var(--font-shanti)] text-[13px] tracking-[0.22em] text-[#7D5940]"
            }
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
