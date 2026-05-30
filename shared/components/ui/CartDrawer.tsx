"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/shared/store/cart";
import { siteConfig } from "@/shared/config/site";

// ── Partículas implodentes ────────────────────────────────────────────────────
const IMPLODE_COLORS = [
  "#DBCCBA","#7D5940","#C4A882","#E9DCCE",
  "#A87D60","#F0E6DA","#2C2C2C","#BEAC96",
  "#D4B896","#8B5E40","#ECD5BC","#6C4A30",
];

type ImplodeParticle = {
  id: number;
  startX: number;
  startY: number;
  color: string;
  size: number;
  delay: number;
};

function buildParticles(count = 24): ImplodeParticle[] {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i * 360 / count) + (Math.random() * 22 - 11);
    const rad   = (angle * Math.PI) / 180;
    const dist  = 72 + Math.random() * 110;
    return {
      id: i,
      startX: Math.cos(rad) * dist,
      startY: Math.sin(rad) * dist,
      color:  IMPLODE_COLORS[Math.floor(Math.random() * IMPLODE_COLORS.length)],
      size:   4 + Math.random() * 7,
      delay:  i * (0.09 / count) + Math.random() * 0.04,
    };
  });
}

function ImplodeParticles({
  originX,
  originY,
  onDone,
}: {
  originX: number;
  originY: number;
  onDone: () => void;
}) {
  const particles = buildParticles(24);

  return (
    <div className="pointer-events-none fixed inset-0 z-[500]" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: "absolute",
            left:         originX - p.size / 2,
            top:          originY - p.size / 2,
            width:        p.size,
            height:       p.size,
            borderRadius: "50%",
            backgroundColor: p.color,
          }}
          initial={{ x: p.startX, y: p.startY, opacity: 0, scale: 1.3 }}
          animate={{
            x:       0,
            y:       0,
            opacity: [0, 1, 1, 0],
            scale:   [1.3, 1.1, 0.5, 0],
          }}
          transition={{
            // easeIn: empieza lento y acelera hacia el botón (efecto de succión)
            x:       { duration: 0.72, delay: p.delay, ease: [0.55, 0, 0.85, 1] },
            y:       { duration: 0.72, delay: p.delay, ease: [0.55, 0, 0.85, 1] },
            opacity: { duration: 0.72, delay: p.delay, times: [0, 0.12, 0.72, 1] },
            scale:   { duration: 0.72, delay: p.delay, times: [0, 0.12, 0.72, 1] },
          }}
          onAnimationComplete={p.id === 0 ? onDone : undefined}
        />
      ))}
    </div>
  );
}

// ── Empty state ───────────────────────────────────────────────────────────────
function EmptyCart({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 px-8 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#DBCCBA]">
        <ShoppingBag size={32} strokeWidth={1.2} className="text-[#DBCCBA]" aria-hidden="true" />
      </div>
      <div>
        <p className="font-[var(--font-serif)] text-[22px] font-normal leading-snug text-[#2C2C2C]">
          Tu selección está vacía
        </p>
        <p className="mt-2 font-[var(--font-shanti)] text-[14px] leading-[1.6] text-[#6C6258]">
          Agrega los arreglos que más te gusten y cotiza con nosotros.
        </p>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="group inline-flex h-[50px] min-w-[180px] items-center justify-center border border-[#D8C9B8] bg-transparent p-[7px] transition-all duration-300 ease-out hover:border-[#DBCCBA] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DBCCBA]"
      >
        <span className="relative flex h-full w-full items-center justify-center overflow-hidden px-6 font-[var(--font-serif)] text-[16px] text-[#2C2C2C]">
          <span className="absolute inset-0 origin-left scale-x-0 bg-[#DBCCBA] transition-transform duration-300 ease-out group-hover:scale-x-100" />
          <span className="relative z-10 whitespace-nowrap">Ver catálogo</span>
        </span>
      </button>
    </div>
  );
}

// ── Quantity stepper ──────────────────────────────────────────────────────────
function QuantityStepper({
  quantity,
  onDecrease,
  onIncrease,
}: {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
}) {
  return (
    <div className="flex h-8 items-center border border-[#D8C9B8]">
      <button type="button" aria-label="Reducir cantidad" onClick={onDecrease}
        className="flex h-full w-8 items-center justify-center text-[#2C2C2C] transition-colors duration-150 hover:bg-[#DBCCBA] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#DBCCBA]">
        <Minus size={13} strokeWidth={1.8} aria-hidden="true" />
      </button>
      <span className="w-8 text-center font-[var(--font-shanti)] text-[13px] text-[#2C2C2C]">
        {quantity}
      </span>
      <button type="button" aria-label="Aumentar cantidad" onClick={onIncrease}
        className="flex h-full w-8 items-center justify-center text-[#2C2C2C] transition-colors duration-150 hover:bg-[#DBCCBA] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#DBCCBA]">
        <Plus size={13} strokeWidth={1.8} aria-hidden="true" />
      </button>
    </div>
  );
}

// ── CartDrawer ────────────────────────────────────────────────────────────────
export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity } = useCart();
  const ctaRef = useRef<HTMLButtonElement>(null);
  const [implode, setImplode] = useState<{ x: number; y: number } | null>(null);
  const [firing, setFiring] = useState(false);

  const buildWhatsAppMessage = useCallback(() => {
    const lines = items.map(
      (item) => `• ${item.title} x${item.quantity} (${item.price})`
    );
    const text = `Hola, me gustaría cotizar los siguientes arreglos:\n\n${lines.join("\n")}\n\n¿Podrían ayudarme?`;
    const phone = siteConfig.phone.replace(/\D/g, "");
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }, [items]);

  function handleCotizar() {
    if (firing || !ctaRef.current) return;
    const rect = ctaRef.current.getBoundingClientRect();
    setImplode({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    setFiring(true);

    // Abre WhatsApp 1s después — el usuario ve toda la implosión
    setTimeout(() => {
      window.open(buildWhatsAppMessage(), "_blank");
      setFiring(false);
    }, 1000);
  }

  return (
    <>
      {/* Implosión — z-[500], visible sobre el panel */}
      <AnimatePresence>
        {implode && (
          <ImplodeParticles
            key={`implode-${implode.x}`}
            originX={implode.x}
            originY={implode.y}
            onDone={() => setImplode(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-[300] bg-[#2C2C2C]/30 backdrop-blur-[2px]"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeCart}
              aria-hidden="true"
            />

            <motion.aside
              key="drawer"
              role="dialog" aria-modal="true" aria-label="Tu selección"
              className="fixed bottom-0 right-0 top-0 z-[400] flex w-full flex-col bg-[#F8F3EC] shadow-[-24px_0_80px_rgba(44,44,44,0.10)] md:w-[440px]"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#DBCCBA] px-7 py-5">
                <div className="flex items-baseline gap-3">
                  <h2 className="font-[var(--font-serif)] text-[22px] font-normal leading-none text-[#2C2C2C]">
                    Tu selección
                  </h2>
                  {items.length > 0 && (
                    <span className="font-[var(--font-shanti)] text-[13px] text-[#6C6258]">
                      {items.length} {items.length === 1 ? "arreglo" : "arreglos"}
                    </span>
                  )}
                </div>
                <button type="button" aria-label="Cerrar carrito" onClick={closeCart}
                  className="flex h-8 w-8 items-center justify-center text-[#2C2C2C] transition-opacity duration-200 hover:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DBCCBA]">
                  <X size={20} strokeWidth={1.5} aria-hidden="true" />
                </button>
              </div>

              {items.length === 0 ? (
                <EmptyCart onClose={closeCart} />
              ) : (
                <>
                  <ul className="flex-1 overflow-y-auto px-7 py-6" role="list">
                    <AnimatePresence initial={false}>
                      {items.map((item) => (
                        <motion.li
                          key={item.id}
                          layout
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: 24, transition: { duration: 0.2 } }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="flex gap-4 border-b border-[#DBCCBA] py-5 last:border-b-0"
                        >
                          <div className="relative h-[90px] w-[90px] shrink-0 overflow-hidden bg-[#E9DCCE]">
                            <Image src={item.src} alt={item.alt} fill sizes="90px"
                              className="object-cover object-center" />
                          </div>
                          <div className="flex flex-1 flex-col justify-between">
                            <div className="flex items-start justify-between gap-2">
                              <p className="font-[var(--font-serif)] text-[17px] font-normal leading-tight text-[#2C2C2C]">
                                {item.title}
                              </p>
                              <button type="button" aria-label={`Eliminar ${item.title}`}
                                onClick={() => removeItem(item.id)}
                                className="mt-0.5 shrink-0 text-[#AAAAAA] transition-colors duration-150 hover:text-[#2C2C2C] focus:outline-none">
                                <X size={14} strokeWidth={1.8} aria-hidden="true" />
                              </button>
                            </div>
                            <div className="flex items-center justify-between">
                              <QuantityStepper
                                quantity={item.quantity}
                                onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
                                onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                              />
                              <span className="font-[var(--font-shanti)] text-[14px] text-[#5F564E]">
                                {item.price}
                              </span>
                            </div>
                          </div>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>

                  <div className="border-t border-[#DBCCBA] px-7 pb-8 pt-5">
                    <p className="mb-5 font-[var(--font-shanti)] text-[12px] leading-[1.6] text-[#6C6258]">
                      Los precios son referencias. Confirmaremos disponibilidad y precio final por WhatsApp.
                    </p>

                    <button
                      ref={ctaRef}
                      type="button"
                      onClick={handleCotizar}
                      disabled={firing}
                      className="group flex h-[58px] w-full items-center justify-between overflow-hidden border border-[#2C2C2C] bg-transparent p-[8px] transition-all duration-300 ease-out disabled:cursor-wait active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DBCCBA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F3EC]"
                    >
                      <span className="relative flex h-full w-full items-center justify-between overflow-hidden px-5">
                        <motion.span
                          className="absolute inset-0 origin-left bg-[#2C2C2C]"
                          initial={{ scaleX: 0 }}
                          animate={firing ? { scaleX: 1 } : { scaleX: 0 }}
                          style={{ transformOrigin: "left" }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        />
                        <motion.span
                          className="relative z-10 font-[var(--font-serif)] text-[18px] font-normal leading-none"
                          animate={{ color: firing ? "#F8F3EC" : "#2C2C2C" }}
                          transition={{ duration: 0.25 }}
                        >
                          {firing ? "Enviando…" : "Cotizar por WhatsApp"}
                        </motion.span>
                        <motion.span
                          className="relative z-10 shrink-0"
                          animate={{ color: firing ? "#F8F3EC" : "#2C2C2C", x: firing ? 4 : 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <ArrowRight size={22} strokeWidth={1.2} aria-hidden="true" />
                        </motion.span>
                      </span>
                    </button>
                  </div>
                </>
              )}
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
