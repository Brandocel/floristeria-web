"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/shared/config/site";
import { RevealImage } from "@/shared/components/ui/RevealImage";
import type { HomeContent } from "../types/home.types";

type InstagramSectionProps = {
  social: HomeContent["social"];
};

export function InstagramSection({ social }: InstagramSectionProps) {
  const [mainImage, secondImage, thirdImage] = social.images;

  return (
    <section className="border-t border-[#DBCCBA] bg-[#F8F3EC] px-6 py-20 text-[#2C2C2C] md:px-10 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-x-20 xl:gap-x-24">
        {/* Columna izquierda */}
        <div className="flex flex-col">
          {mainImage ? (
            <div className="relative h-[360px] w-full overflow-hidden bg-[#E9DCCE] shadow-[0_24px_70px_rgba(44,44,44,0.08)] md:h-[460px] lg:h-[430px] xl:h-[465px]">
              <RevealImage
                src={mainImage.src}
                alt={mainImage.alt}
                sizes="(max-width: 768px) 100vw, 560px"
              />
            </div>
          ) : null}

          <motion.p
            className="mt-10 max-w-[510px] font-[var(--font-shanti)] text-[15px] font-normal leading-[1.6] text-[#2C2C2C] md:text-[16px]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {social.description}
          </motion.p>
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-5 font-[var(--font-shanti)] text-[13px] font-normal tracking-[0.18em] text-[#7D5940]">
              {social.eyebrow}
            </p>
            <h2 className="max-w-[720px] font-[var(--font-serif)] text-[clamp(2.8rem,4.4vw,4.75rem)] font-normal leading-[1.02] tracking-[-0.035em] text-[#2C2C2C]">
              {social.title}
            </h2>

            <div className="mt-8 flex flex-wrap items-center gap-8">
              <Link
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-[var(--font-shanti)] text-[17px] font-normal text-[#2C2C2C] transition-colors duration-200 hover:text-[#7D5940]"
              >
                <span>{social.handle ?? "@Instagram"}</span>
                <ArrowUpRight size={17} strokeWidth={1.5} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>

              <Link
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-[var(--font-shanti)] text-[17px] font-normal text-[#2C2C2C] transition-colors duration-200 hover:text-[#7D5940]"
              >
                <span>Facebook</span>
                <ArrowUpRight size={17} strokeWidth={1.5} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:mt-14">
            {[secondImage, thirdImage].filter(Boolean).map((image, index) => (
              <div
                key={image.src}
                className="relative h-[310px] overflow-hidden bg-[#E9DCCE] shadow-[0_22px_60px_rgba(44,44,44,0.07)] md:h-[330px] lg:h-[315px] xl:h-[340px]"
              >
                <RevealImage
                  src={image.src}
                  alt={image.alt}
                  sizes="(max-width: 768px) 100vw, 360px"
                  delay={0.1 + index * 0.12}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
