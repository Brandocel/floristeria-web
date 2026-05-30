"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/shared/config/site";
import type { Locale } from "@/shared/config/locales";
import {
  buildLocalizedHref,
  mainNavigation,
} from "@/shared/config/navigation";

type MobileMenuProps = {
  locale: Locale;
};

export function MobileMenu({ locale }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = mainNavigation[locale];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
        className="flex h-6 w-6 items-center justify-center border-0 bg-transparent text-[#2C2C2C] transition-opacity duration-200 hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DBCCBA] md:hidden"
      >
        <Menu size={21} strokeWidth={1.6} aria-hidden="true" />
      </button>

      {isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className="fixed inset-0 z-[200] flex flex-col bg-[#F8F3EC] px-8 pb-10 pt-6"
        >
          {/* Cabecera del overlay */}
          <div className="flex items-center justify-between">
            <Link
              href={`/${locale}`}
              className="font-[var(--font-shanti)] text-[22px] uppercase leading-none tracking-[0.16em] text-[#2C2C2C]"
              onClick={() => setIsOpen(false)}
            >
              {siteConfig.shortName}
            </Link>

            <button
              type="button"
              aria-label="Cerrar menú"
              onClick={() => setIsOpen(false)}
              className="flex h-8 w-8 items-center justify-center text-[#2C2C2C] transition-opacity duration-200 hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DBCCBA]"
            >
              <X size={22} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>

          {/* Links de navegación */}
          <nav
            aria-label="Navegación principal"
            className="mt-16 flex flex-col gap-6"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={buildLocalizedHref(locale, item.href)}
                className="font-[var(--font-serif)] text-[3rem] font-normal leading-none tracking-[-0.02em] text-[#2C2C2C] transition-opacity duration-200 hover:opacity-50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Pie del overlay con datos de contacto */}
          <div className="mt-auto border-t border-[#DBCCBA] pt-8">
            <p className="font-[var(--font-shanti)] text-[13px] tracking-[0.14em] text-[#7D5940]">
              {siteConfig.address}
            </p>
            <p className="mt-3 font-[var(--font-shanti)] text-[15px] text-[#2C2C2C]">
              {siteConfig.phone}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
