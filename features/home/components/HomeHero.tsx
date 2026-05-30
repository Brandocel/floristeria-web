"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { HomeContent } from "../types/home.types";

type HomeHeroProps = {
  hero: HomeContent["hero"];
};

export function HomeHero({ hero }: HomeHeroProps) {
  const words = hero.title.split(" ");

  const { scrollY } = useScroll();
  const imgY1 = useTransform(scrollY, [0, 600], [0, -55]);
  const imgY2 = useTransform(scrollY, [0, 600], [0, -30]);

  return (
    <section className="bg-[#F8F3EC] text-[#2C2C2C]">
      <div className="mx-auto grid min-h-[calc(100dvh-72px)] w-full max-w-[1320px] grid-cols-1 content-center gap-y-10 px-6 py-10 md:min-h-[calc(100dvh-80px)] md:px-10 lg:grid-cols-[0.9fr_1fr] lg:grid-rows-[auto_auto] lg:gap-x-24 lg:gap-y-14 lg:px-8 lg:py-0 xl:px-0">
        {/* Título */}
        <div className="flex items-end lg:min-h-[330px]">
          <h1
            aria-label={hero.title}
            className="max-w-[610px] font-[var(--font-serif)] text-[clamp(3rem,4.6vw,4.9rem)] font-normal leading-[1.04] tracking-[-0.035em] text-[#2C2C2C]"
          >
            <span aria-hidden="true">
              {words.map((word, wordIndex) => (
                <span key={`${word}-${wordIndex}`} className="inline-block">
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${letter}-${wordIndex}-${letterIndex}`}
                      className="inline-block"
                      initial={{
                        opacity: 0,
                        y: 24,
                        filter: "blur(5px)",
                        color: "#DBCCBA",
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        color: "#2C2C2C",
                      }}
                      transition={{
                        duration: 0.7,
                        delay: wordIndex * 0.12 + letterIndex * 0.025,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                  {wordIndex < words.length - 1 ? (
                    <span className="inline-block">&nbsp;</span>
                  ) : null}
                </span>
              ))}
            </span>
          </h1>
        </div>

        {/* Imagen grande derecha — con parallax */}
        <div className="relative order-3 h-[350px] overflow-hidden bg-[#E9DCCE] shadow-[0_26px_80px_rgba(44,44,44,0.08)] md:h-[430px] lg:order-none lg:h-[425px] xl:h-[455px]">
          <motion.div
            className="absolute inset-0"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: imgY1 }}
            data-cursor="view"
          >
            <Image
              src={hero.images.main.src}
              alt={hero.images.main.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 48vw, 580px"
              className="object-cover object-center scale-[1.12] transition-transform duration-700 ease-out hover:scale-[1.15]"
            />
          </motion.div>
        </div>

        {/* Imagen pequeña izquierda — con parallax más lento */}
        <div className="relative order-4 h-[290px] overflow-hidden bg-[#E9DCCE] shadow-[0_24px_70px_rgba(44,44,44,0.08)] md:h-[330px] lg:order-none lg:h-[300px] lg:w-[430px] xl:h-[320px] xl:w-[455px]">
          <motion.div
            className="absolute inset-0"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: imgY2 }}
            data-cursor="view"
          >
            <Image
              src={hero.images.side.src}
              alt={hero.images.side.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 455px"
              className="object-cover object-center scale-[1.12] transition-transform duration-700 ease-out hover:scale-[1.15]"
            />
          </motion.div>
        </div>

        {/* Texto + botón */}
        <motion.div
          className="order-2 flex flex-col justify-center lg:order-none lg:max-w-[390px] lg:self-start lg:pt-8"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-[var(--font-shanti)] text-[15px] leading-[1.55] text-[#2C2C2C] md:text-[16px]">
            {hero.description}
          </p>

          <Link
            href={hero.ctaHref}
            className="group mt-7 inline-flex h-[72px] w-fit min-w-[360px] items-center justify-center border border-[#D8C9B8] bg-transparent p-[10px] transition-all duration-300 ease-out hover:border-[#DBCCBA] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DBCCBA] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F8F3EC] max-sm:h-[66px] max-sm:w-full max-sm:min-w-0"
          >
            <span className="relative flex h-full w-full items-center justify-between overflow-hidden px-8 font-[var(--font-serif)] text-[24px] font-normal leading-none tracking-[0.01em] text-[#2C2C2C] max-sm:px-6 max-sm:text-[22px]">
              <span className="absolute inset-0 origin-left scale-x-0 bg-[#DBCCBA] transition-transform duration-300 ease-out group-hover:scale-x-100 group-active:scale-x-100" />
              <span className="relative z-10 whitespace-nowrap">
                {hero.ctaLabel}
              </span>
              <ArrowRight
                size={42}
                strokeWidth={1.15}
                className="relative z-10 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-2 group-active:translate-x-2 max-sm:size-9"
                aria-hidden="true"
              />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
