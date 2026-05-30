"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

export type FlyItem = {
  id: number;
  src: string;
  fromRect: DOMRect;
};

type CartFlyContextValue = {
  items: FlyItem[];
  triggerFly: (src: string, fromRect: DOMRect) => void;
  remove: (id: number) => void;
};

const CartFlyContext = createContext<CartFlyContextValue | null>(null);
let nextId = 0;

export function CartFlyProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<FlyItem[]>([]);

  const triggerFly = useCallback((src: string, fromRect: DOMRect) => {
    const id = ++nextId;
    setItems((prev) => [...prev, { id, src, fromRect }]);
  }, []);

  const remove = useCallback((id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  return (
    <CartFlyContext.Provider value={{ items, triggerFly, remove }}>
      {children}
    </CartFlyContext.Provider>
  );
}

export function useCartFly() {
  const ctx = useContext(CartFlyContext);
  if (!ctx) throw new Error("useCartFly must be inside CartFlyProvider");
  return ctx;
}
