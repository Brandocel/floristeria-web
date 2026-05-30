"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { useLightbox } from "@/shared/store/lightbox";

export function ImageLightbox() {
  const { image, close } = useLightbox();

  return (
    <AnimatePresence>
      {image && (
        <>
          {/* Backdrop */}
          <motion.div
            key="lb-backdrop"
            className="fixed inset-0 z-[600] bg-[#0e0e0e]/92 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={close}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            key="lb-panel"
            role="dialog"
            aria-modal="true"
            aria-label={image.alt}
            className="pointer-events-none fixed inset-0 z-[601] flex items-center justify-center p-6 md:p-12"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Imagen */}
            <div className="pointer-events-auto relative max-h-[85vh] max-w-[90vw] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.7)]">
              <Image
                src={image.src}
                alt={image.alt}
                width={1400}
                height={1000}
                className="max-h-[85vh] w-auto max-w-[90vw] object-contain"
                priority
              />

              {/* Gradiente inferior con alt */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0e0e0e]/80 to-transparent px-6 pb-4 pt-10"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
              >
                <p className="font-[var(--font-shanti)] text-[13px] tracking-[0.1em] text-[#DBCCBA]">
                  {image.alt}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Botón cerrar */}
          <motion.button
            key="lb-close"
            type="button"
            aria-label="Cerrar imagen"
            onClick={close}
            className="fixed right-5 top-5 z-[602] flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.15, duration: 0.3 }}
          >
            <X size={18} strokeWidth={1.5} aria-hidden="true" />
          </motion.button>

          {/* Hint zoom */}
          <motion.div
            key="lb-hint"
            className="fixed bottom-6 left-1/2 z-[602] -translate-x-1/2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <ZoomIn size={13} strokeWidth={1.5} className="text-white/60" aria-hidden="true" />
              <span className="font-[var(--font-shanti)] text-[11px] tracking-[0.12em] text-white/60">
                ESC para cerrar
              </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
