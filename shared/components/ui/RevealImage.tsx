"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLightbox } from "@/shared/store/lightbox";

type RevealImageProps = {
  src: string;
  alt: string;
  sizes: string;
  delay?: number;
  priority?: boolean;
};

export function RevealImage({
  src,
  alt,
  sizes,
  delay = 0,
  priority = false,
}: RevealImageProps) {
  const { open } = useLightbox();

  return (
    <motion.div
      className="absolute inset-0 cursor-none"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      // Margin amplio: dispara la animacion mucho antes de que el elemento
      // entre al viewport — soluciona el problema de Lenis en produccion.
      viewport={{ once: true, amount: 0, margin: "600px 0px 600px 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      data-cursor="view"
      onClick={() => open(src, alt)}
      role="button"
      aria-label={`Ver imagen: ${alt}`}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") open(src, alt); }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="scale-[1.08] object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.13]"
      />
    </motion.div>
  );
}
