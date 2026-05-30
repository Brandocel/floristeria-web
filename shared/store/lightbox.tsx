"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";

type LightboxImage = { src: string; alt: string };

type LightboxContextValue = {
  image: LightboxImage | null;
  open: (src: string, alt: string) => void;
  close: () => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [image, setImage] = useState<LightboxImage | null>(null);

  const open = useCallback((src: string, alt: string) => {
    setImage({ src, alt });
  }, []);

  const close = useCallback(() => setImage(null), []);

  useEffect(() => {
    if (!image) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [image, close]);

  return (
    <LightboxContext.Provider value={{ image, open, close }}>
      {children}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be inside LightboxProvider");
  return ctx;
}
