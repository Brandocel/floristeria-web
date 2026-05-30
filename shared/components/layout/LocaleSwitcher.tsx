"use client";

import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/shared/config/locales";

const locales: Locale[] = ["es", "en"];

type LocaleSwitcherProps = {
  currentLocale: Locale;
};

export function LocaleSwitcher({ currentLocale }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(locale: Locale) {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/") || "/");
  }

  return (
    <div
      className="flex items-center gap-0.5"
      role="navigation"
      aria-label="Cambiar idioma"
    >
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center">
          {i > 0 && (
            <span
              className="mx-1 font-[var(--font-shanti)] text-[10px] text-[#DBCCBA]"
              aria-hidden="true"
            >
              /
            </span>
          )}
          <button
            type="button"
            lang={locale}
            aria-current={locale === currentLocale ? "true" : undefined}
            aria-label={locale === "es" ? "Cambiar a Español" : "Switch to English"}
            onClick={() => switchTo(locale)}
            disabled={locale === currentLocale}
            className={[
              "font-[var(--font-shanti)] text-[11px] tracking-[0.12em] uppercase leading-none transition-opacity duration-200",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DBCCBA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F3EC]",
              locale === currentLocale
                ? "text-[#2C2C2C] opacity-100 cursor-default"
                : "text-[#2C2C2C] opacity-35 hover:opacity-70 cursor-pointer",
            ].join(" ")}
          >
            {locale}
          </button>
        </span>
      ))}
    </div>
  );
}
