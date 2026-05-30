"use client";

import { motion } from "framer-motion";
import { RevealImage } from "@/shared/components/ui/RevealImage";
import type { HomeContent } from "../types/home.types";

type MemorySectionProps = {
  memories: HomeContent["memories"];
};

export function MemorySection({ memories }: MemorySectionProps) {
  return (
    <section
      id="nosotros"
      className="border-t border-[#DBCCBA] bg-[#F8F3EC] px-6 py-20 text-[#2C2C2C] md:px-10 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-12 lg:grid-cols-[0.95fr_0.9fr] lg:gap-x-20 xl:gap-x-24">
        {/* Columna izquierda */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-5 font-[var(--font-shanti)] text-[13px] font-normal tracking-[0.18em] text-[#7D5940]">
              {memories.eyebrow}
            </p>
            <h2 className="max-w-[650px] font-[var(--font-serif)] text-[clamp(2.7rem,3.9vw,4.35rem)] font-normal leading-[1.05] tracking-[-0.035em] text-[#2C2C2C]">
              {memories.title}
            </h2>
          </motion.div>

          <div className="relative mt-9 h-[340px] w-full overflow-hidden bg-[#E9DCCE] shadow-[0_24px_70px_rgba(44,44,44,0.08)] md:h-[430px] lg:mt-10 lg:h-[405px] xl:h-[430px]">
            <RevealImage
              src={memories.image.src}
              alt={memories.image.alt}
              sizes="(max-width: 768px) 100vw, 620px"
              delay={0.1}
            />
          </div>
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col">
          <div className="relative h-[320px] w-full overflow-hidden bg-[#E9DCCE] shadow-[0_24px_70px_rgba(44,44,44,0.08)] md:h-[400px] lg:h-[360px] xl:h-[385px]">
            <RevealImage
              src={memories.secondaryImage.src}
              alt={memories.secondaryImage.alt}
              sizes="(max-width: 768px) 100vw, 560px"
              delay={0.2}
            />
          </div>

          <motion.div
            className="mt-12 max-w-[560px] lg:mt-16 xl:mt-20"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-[var(--font-shanti)] text-[15px] font-normal leading-[1.7] text-[#2C2C2C] md:text-[16px]">
              {memories.description}
            </p>
            <div className="mt-9 border-l border-[#DBCCBA] pl-6">
              <p className="font-[var(--font-shanti)] text-[22px] font-normal leading-[1.35] text-[#2C2C2C] md:text-[24px]">
                "{memories.quote}"
              </p>
              <p className="mt-4 font-[var(--font-shanti)] text-[12px] font-normal tracking-[0.18em] text-[#7D5940]">
                {memories.author}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
