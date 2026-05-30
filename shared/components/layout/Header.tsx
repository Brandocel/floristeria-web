import Link from "next/link";
import { Search } from "lucide-react";
import type { Locale } from "@/shared/config/locales";
import {
  buildLocalizedHref,
  mainNavigation,
} from "@/shared/config/navigation";
import { siteConfig } from "@/shared/config/site";
import { CartButton } from "./CartButton";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { MobileMenu } from "./MobileMenu";

type HeaderProps = {
  locale: Locale;
};

export function Header({ locale }: HeaderProps) {
  const navigation = mainNavigation[locale];

  return (
    <header className="sticky top-0 z-[100] h-20 w-full bg-[#F8F3EC] text-[#2C2C2C]">
      <div className="relative mx-auto flex h-20 w-full max-w-[1600px] items-center justify-between px-[clamp(24px,10.25vw,164px)]">
        {/* Izquierda: hamburguesa (mobile) + nav (desktop) */}
        <div className="flex items-center gap-8">
          <MobileMenu locale={locale} />

          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-[52px] md:flex"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={buildLocalizedHref(locale, item.href)}
                className="font-[var(--font-shanti)] text-base font-normal leading-none tracking-normal text-[#2C2C2C] transition-opacity duration-200 hover:opacity-70"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Centro: logo/marca */}
        <Link
          href={`/${locale}`}
          aria-label={`${siteConfig.shortName} — Inicio`}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-[var(--font-shanti)] text-[28px] font-normal uppercase leading-none tracking-[0.16em] text-[#2C2C2C] transition-opacity duration-200 hover:opacity-70 max-sm:text-[18px]"
        >
          {siteConfig.shortName}
        </Link>

        {/* Derecha: idioma + búsqueda + carrito */}
        <div className="flex items-center justify-end gap-5">
          <LocaleSwitcher currentLocale={locale} />

          <div className="h-3 w-px bg-[#DBCCBA]" aria-hidden="true" />

          <Link
            href={`/${locale}#catalogo`}
            aria-label="Ir al catálogo"
            className="flex h-6 w-6 items-center justify-center text-[#2C2C2C] transition-opacity duration-200 hover:opacity-70"
          >
            <Search size={22} strokeWidth={1.7} aria-hidden="true" />
          </Link>

          <CartButton />
        </div>
      </div>
    </header>
  );
}
