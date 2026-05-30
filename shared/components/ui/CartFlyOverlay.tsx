"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartFly, type FlyItem } from "@/shared/store/cartFly";

const SIZE = 72;

function FlyingItem({ item, onDone }: { item: FlyItem; onDone: () => void }) {
  const [cartRect, setCartRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    const btn = document.getElementById("cart-btn");
    if (btn) setCartRect(btn.getBoundingClientRect());
  }, []);

  if (!cartRect) return null;

  const fromCx = item.fromRect.left + item.fromRect.width  / 2;
  const fromCy = item.fromRect.top  + item.fromRect.height / 2;
  const toCx   = cartRect.left + cartRect.width  / 2;
  const toCy   = cartRect.top  + cartRect.height / 2;

  const dx = toCx - fromCx;
  const dy = toCy - fromCy;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: "fixed",
        left: fromCx - SIZE / 2,
        top:  fromCy - SIZE / 2,
        width:  SIZE,
        height: SIZE,
        zIndex: 9999,
        pointerEvents: "none",
        overflow: "hidden",
        borderRadius: 8,
      }}
      initial={{ x: 0, y: 0, scale: 1, opacity: 1, borderRadius: 8 }}
      animate={{ x: dx, y: dy, scale: 0, opacity: 0, borderRadius: 9999 }}
      transition={{
        // Spring snap: overshoot + settle da la sensación física satisfactoria
        x: { type: "spring", stiffness: 260, damping: 24, mass: 0.7 },
        y: { type: "spring", stiffness: 260, damping: 24, mass: 0.7 },
        scale:        { duration: 0.55, ease: [0.4, 0, 1, 1] },
        opacity:      { duration: 0.35, ease: "easeIn", delay: 0.22 },
        borderRadius: { duration: 0.25 },
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
