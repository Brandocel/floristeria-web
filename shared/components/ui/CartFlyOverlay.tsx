"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartFly, type FlyItem } from "@/shared/store/cartFly";

function FlyingItem({ item, onDone }: { item: FlyItem; onDone: () => void }) {
  const [cartRect, setCartRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    const btn = document.getElementById("cart-btn");
    if (btn) setCartRect(btn.getBoundingClientRect());
  }, []);

  if (!cartRect) return null;

  const fromCx = item.fromRect.left + item.fromRect.width / 2;
  const fromCy = item.fromRect.top + item.fromRect.height / 2;
  const toCx   = cartRect.left + cartRect.width / 2;
  const toCy   = cartRect.top + cartRect.height / 2;

  const dx = toCx - fromCx;
  const dy = toCy - fromCy;

  // Arco pronunciado: el control point sube mucho y se adelanta hacia el carrito
  const arcX = dx * 0.15;
  const arcY = Math.min(dy * 0.2, -20) - 140;

  const SIZE = 76;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: "fixed",
        left: fromCx - SIZE / 2,
        top:  fromCy - SIZE / 2,
        width: SIZE,
        height: SIZE,
        zIndex: 9999,
        pointerEvents: "none",
        overflow: "hidden",
      }}
      initial={{
        x: 0, y: 0,
        scale: 1, opacity: 1,
        rotate: 0,
        borderRadius: "10px",
        boxShadow: "0 12px 40px rgba(44,44,44,0.3)",
      }}
      animate={{
        x:            [0,  arcX,        dx],
        y:            [0,  arcY,        dy],
        scale:        [1,  0.78,        0.15],
        opacity:      [1,  1,           0],
        rotate:       [0,  -18,         12],
        borderRadius: ["10px", "50%",   "50%"],
        boxShadow:    [
          "0 12px 40px rgba(44,44,44,0.3)",
          "0 6px 20px rgba(44,44,44,0.15)",
          "0 0px 0px rgba(44,44,44,0)",
        ],
      }}
      transition={{
        duration: 0.82,
        ease: [0.2, 0.8, 0.4, 1],
        times: [0, 0.4, 1],
      }}
      onAnimationComplete={onDone}
    >
      <Image
        src={item.src}
        alt=""
        fill
        sizes={`${SIZE}px`}
        className="object-cover object-center"
      />
    </motion.div>
  );
}

export function CartFlyOverlay() {
  const { items, remove } = useCartFly();

  return (
    <AnimatePresence>
      {items.map((item) => (
        <FlyingItem key={item.id} item={item} onDone={() => remove(item.id)} />
      ))}
    </AnimatePresence>
  );
}
