"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useCart } from "@/shared/store/cart";
import { useCartFly } from "@/shared/store/cartFly";
import type { HomeContent, ProductCard } from "../types/home.types";

type CatalogSectionProps = {
  catalog: HomeContent["catalog"];
};

type CatalogCardProps = {
  item: ProductCard;
  index: number;
};

function CatalogCard({ item, index }: CatalogCardProps) {
  const { addItem } = useCart();
  const { triggerFly } = useCartFly();
  const [added, setAdded] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  function handleAdd() {
    addItem({
      id: item.title,
      title: item.title,
      price: item.price,
      src: item.src,
      alt: item.alt,
    });

    // Dispara la animación de vuelo desde el centro de la imagen
    if (imgRef.current) {
      triggerFly(item.src, imgRef.current.getBoundingClientRect());
    }

    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <motion.article
      className="group"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div
        ref={imgRef}
        className="relative h-[330px] overflow-hidden bg-[#E9DCCE] shadow-[0_22px_60px_rgba(44,44,44,0.07)] md:h-[360px] lg:h-[340px] xl:h-[365px]"
        data-cursor="view"
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 768px) 100vw, 380px"
          className="scale-[1.04] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.09]"
        />
      </div>

      <div className="mt-3 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-[var(--font-serif)] text-[20px] font-normal leading-tight text-[#2C2C2C]">
            {item.title}
          </h3>
          <p className="mt-2 font-[var(--font-shanti)] text-[14px] leading-none text-[#5F564E]">
            {item.price}
          </p>
        </div>

        <button
          type="button"
          aria-label={`Agregar ${item.title} al carrito`}
          onClick={handleAdd}
          className="relative mt-1 flex h-8 w-8 shrink-0 items-center justify-center text-[#2C2C2C] transition-all duration-200 hover:-translate-y-0.5 hover:text-[#7D5940] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DBCCBA] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F8F3EC]"
        >
          <AnimatePresence mode="wait">
            {added ? (
              <motion.span
                key="check"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-[#7D5940]"
                aria-hidden="true"
              >
                ✓
              </motion.span>
            ) : (
              <motion.span
                key="cart"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ShoppingCart size={18} strokeWidth={1.5} aria-hidden="true" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.article>
  );
}

export function CatalogSection({ catalog }: CatalogSectionProps) {
  const leftItems = catalog.items.slice(0, 2);
  const rightItems = catalog.items.slice(2, 6);

  return (
    <section
      id="catalogo"
      className="border-t border-[#DBCCBA] bg-[#F8F3EC] px-6 py-20 text-[#2C2C2C] md:px-10 lg:py-28"
    >
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-x-14 xl:gap-x-16">
        {/* Columna izquierda */}
        <div className="flex flex-col gap-9">
          {leftItems.map((item, index) => (
            <CatalogCard key={item.title} item={item} index={index} />
          ))}

          <Link
            href="#contacto"
            className="group inline-flex h-[50px] w-fit min-w-[200px] items-center justify-center border border-[#D8C9B8] bg-transparent p-[7px] transition-all duration-300 ease-out hover:border-[#DBCCBA] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DBCCBA] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F8F3EC]"
          >
            <span className="relative flex h-full w-full items-center justify-center gap-3 overflow-hidden px-6 font-[var(--font-serif)] text-[16px] font-normal text-[#2C2C2C]">
              <span className="absolute inset-0 origin-left scale-x-0 bg-[#DBCCBA] transition-transform duration-300 ease-out group-hover:scale-x-100 group-active:scale-x-100" />

              <span className="relative z-10 whitespace-nowrap">Pedir personalizado</span>

              <ArrowRight
                size={24}
                strokeWidth={1.2}
                className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1.5"
              />
            </span>
          </Link>
        </div>

        {/* Columna derecha */}
        <div className="flex flex-col">
          <motion.div
            className="mb-10 max-w-[760px] lg:mb-14"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 font-[var(--font-shanti)] text-[13px] font-normal tracking-[0.18em] text-[#7D5940]">
              {catalog.eyebrow}
            </p>

            <h2 className="font-[var(--font-serif)] text-[clamp(2.6rem,4vw,4.35rem)] font-normal leading-[1.03] tracking-[-0.035em] text-[#2C2C2C]">
              {catalog.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-9 md:grid-cols-2">
            {rightItems.map((item, index) => (
              <CatalogCard
                key={item.title}
                item={item}
                index={index + leftItems.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}