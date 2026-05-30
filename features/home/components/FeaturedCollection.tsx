"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { HomeContent } from "../types/home.types";

type FeaturedCollectionProps = {
  popular: HomeContent["popular"];
};

export function FeaturedCollection({ popular }: FeaturedCollectionProps) {
  const [mainProduct, secondProduct, thirdProduct] = popular.items;

  if (!mainProduct) return null;

  return (
    <section
      id="coleccion"
      className="border-t border-[#DBCCBA] bg-[#F8F3EC] px-6 py-20 text-[#2C2C2C] md:px-10 lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-x-16 xl:gap-x-20">
        {/* Columna izquierda */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <article className="group">
            <div className="relative h-[420px] w-full overflow-hidden bg-[#E9DCCE] shadow-[0_24px_70px_rgba(44,44,44,0.08)] md:h-[500px] lg:h-[485px]">
              <Image
                src={mainProduct.src}
                alt={mainProduct.alt}
                fill
                sizes="(max-width: 768px) 100vw, 520px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
              />
            </div>

            <div className="mt-4 flex items-start justify-between gap-5">
              <h3 className="font-[var(--font-serif)] text-[20px] font-normal leading-none text-[#2C2C2C]">
                {mainProduct.title}
              </h3>

              <span className="shrink-0 font-[var(--font-shanti)] text-[14px] leading-none text-[#6C6258]">
                Desde {mainProduct.price}
              </span>
            </div>
          </article>

          <div className="mt-8 max-w-[500px]">
            <p className="font-[var(--font-shanti)] text-[15px] leading-[1.55] text-[#2C2C2C] md:text-[16px]">
              {popular.description}
            </p>

            <Link
              href="#catalogo"
              className="group mt-7 inline-flex h-[56px] w-fit min-w-[210px] items-center justify-center border border-[#D8C9B8] bg-transparent p-[8px] transition-all duration-300 ease-out hover:border-[#DBCCBA] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DBCCBA] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F8F3EC]"
            >
              <span className="relative flex h-full w-full items-center justify-center gap-3 overflow-hidden px-6 font-[var(--font-serif)] text-[17px] font-normal text-[#2C2C2C]">
                <span className="absolute inset-0 origin-left scale-x-0 bg-[#DBCCBA] transition-transform duration-300 ease-out group-hover:scale-x-100 group-active:scale-x-100" />

                <span className="relative z-10 whitespace-nowrap">
                  Ver Catálogo
                </span>

                <ArrowRight
                  size={24}
                  strokeWidth={1.25}
                  className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Columna derecha */}
        <div className="flex flex-col justify-center">
          <motion.div
            className="max-w-[720px]"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 font-[var(--font-shanti)] text-[13px] tracking-[0.14em] text-[#7D5940]">
              {popular.eyebrow}
            </p>

            <h2 className="font-[var(--font-serif)] text-[clamp(2.8rem,4.4vw,4.75rem)] font-normal leading-[1.02] tracking-[-0.035em] text-[#2C2C2C]">
              {popular.title}
            </h2>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {[secondProduct, thirdProduct].filter(Boolean).map((item, index) => (
              <motion.article
                key={item.title}
                className="group"
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.75,
                  delay: 0.18 + index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="relative h-[310px] overflow-hidden bg-[#E9DCCE] shadow-[0_22px_60px_rgba(44,44,44,0.07)] md:h-[320px] lg:h-[300px] xl:h-[320px]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                <div className="mt-4 flex items-start justify-between gap-4">
                  <h3 className="font-[var(--font-serif)] text-[20px] font-normal leading-none text-[#2C2C2C]">
                    {item.title}
                  </h3>

                  <span className="shrink-0 font-[var(--font-shanti)] text-[14px] leading-none text-[#6C6258]">
                    Desde {item.price}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}