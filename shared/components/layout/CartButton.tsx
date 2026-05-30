"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/shared/store/cart";

export function CartButton() {
  const { totalItems, openCart } = useCart();
  const prevRef = useRef(totalItems);
  const controls = useAnimation();

  useEffect(() => {
    if (totalItems > prevRef.current) {
      controls.start({
        scale: [1, 1.5, 0.85, 1.2, 1],
        rotate: [0, -12, 10, -6, 0],
        transition: { duration: 0.55, ease: "easeOut" },
      });
    }
    prevRef.current = totalItems;
  }, [totalItems, controls]);

  return (
    <button
      id="cart-btn"
      type="button"
      aria-label={`Carrito — ${totalItems} ${totalItems === 1 ? "artículo" : "artículos"}`}
      onClick={openCart}
      className="relative flex h-6 w-6 items-center justify-center text-[#2C2C2C] transition-opacity duration-200 hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DBCCBA] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F8F3EC]"
    >
      <motion.div animate={controls}>
        <ShoppingCart size={21} strokeWidth={1.6} aria-hidden="true" />
      </motion.div>

      <AnimatePresence>
        {totalItems > 0 && (
          <motion.span
            key="badge"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#7D5940] font-[var(--font-shanti)] text-[10px] leading-none text-[#F8F3EC]"
            aria-hidden="true"
          >
            {totalItems > 9 ? "9+" : totalItems}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
