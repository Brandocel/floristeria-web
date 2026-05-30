"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/shared/store/cart";

export function CartButton() {
  const { totalItems, openCart } = useCart();

  return (
    <button
      type="button"
      aria-label={`Carrito — ${totalItems} ${totalItems === 1 ? "artículo" : "artículos"}`}
      onClick={openCart}
      className="relative flex h-6 w-6 items-center justify-center text-[#2C2C2C] transition-opacity duration-200 hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DBCCBA] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F8F3EC]"
    >
      <ShoppingCart size={21} strokeWidth={1.6} aria-hidden="true" />

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
