"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { HomeContent } from "../types/home.types";

type SpecialOfferProps = {
  offer: HomeContent["offer"];
};

const revealVariants = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: { clipPath: "inset(0% 0 0 0)" },
};

export function SpecialOffer({ offer }: SpecialOfferProps) {
  const [mainImage, secondaryImage] = offer.images;

  return (
    <section className="border-t border-[#DBCCBA] bg-[#F8F3EC] px-6 py-20 text-[#2C2C2C] md:px-10 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-x-20 xl:gap-x-24">
        {/* Columna izquierda */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge de oferta */}
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="inline-block bg-[#7D5940] px-4 py-1.5 font-[var(--font-shanti)] text-[12px] font-normal tracking-[0.18em] text-[#F8F3EC]">
                20% OFF
              </span>
              <span className="font-[var(--font-shanti)] text-[13px] tracking-[0.14em] text-[#7D5940]">
                {offer.eyebrow}
              </span>
            </div>

            <h2 className="max-w-[560px] font-[var(--font-serif)] text-[clamp(2.9rem,4.15vw,4.45rem)] font-normal leading-[1.04] tracking-[-0.035em] text-[#2C2C2C]">
              {offer.title}
            </h2>
          </motion.div>

          {mainImage ? (
            <motion.div
              className="relative mt-10 h-[340px] w-full overflow-hidden bg-[#E9DCCE] shadow-[0_24px_70px_rgba(44,44,44,0.08)] md:h-[430px] lg:mt-14 lg:h-[410px] xl:h-[440px]"
              variants={revealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              data-cursor="view"
            >
              <Image
                src={mainImage.src}
                alt={mainImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="scale-[1.08] object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.12]"
              />
            </motion.div>
          ) : null}
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col">
          {secondaryImage ? (
            <motion.div
              className="relative h-[330px] w-full overflow-hidden bg-[#E9DCCE] shadow-[0_24px_70px_rgba(44,44,44,0.08)] md:h-[420px] lg:ml-auto lg:h-[405px] lg:max-w-[560px] xl:h-[435px]"
              variants={revealVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              data-cursor="view"
            >
              <Image
                src={secondaryImage.src}
                alt={secondaryImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="scale-[1.08] object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.12]"
              />
            </motion.div>
          ) : null}

          <motion.div
            className="mt-10 max-w-[600px] lg:mt-16 xl:mt-20"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-[var(--font-shanti)] text-[15px] font-normal leading-[1.7] text-[#2C2C2C] md:text-[16px]">
              {offer.description}
            </p>

            <Link
              href={offer.ctaHref}
              className="group mt-8 inline-flex h-[58px] w-fit min-w-[190px] items-center justify-center border border-[#D8C9B8] bg-transparent p-[7px] transition-all duration-300 ease-out hover:border-[#DBCCBA] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DBCCBA] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F8F3EC]"
            >
              <span className="relative flex h-full w-full items-center justify-center gap-4 overflow-hidden px-8 font-[var(--font-serif)] text-[18px] font-normal text-[#2C2C2C]">
                <span className="absolute inset-0 origin-left scale-x-0 bg-[#DBCCBA] transition-transform duration-300 ease-out group-hover:scale-x-100 group-active:scale-x-100" />
                <span className="relative z-10 whitespace-nowrap">{offer.ctaLabel}</span>
                <ArrowRight
                  size={26}
                  strokeWidth={1.2}
                  className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
