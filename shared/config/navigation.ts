import type { Locale } from "./locales";

export type NavigationItem = {
  label: string;
  href: string;
};

export const mainNavigation: Record<Locale, NavigationItem[]> = {
  es: [
    {
      label: "Nosotros",
      href: "#nosotros",
    },
    {
      label: "Catalogo",
      href: "#catalogo",
    },
    {
      label: "Contactos",
      href: "#contacto",
    },
  ],
  en: [
    {
      label: "About us",
      href: "#nosotros",
    },
    {
      label: "Catalog",
      href: "#catalogo",
    },
    {
      label: "Contacts",
      href: "#contacto",
    },
  ],
};

export function buildLocalizedHref(locale: Locale, href: string) {
  if (href === "/") return `/${locale}`;

  if (href.startsWith("#")) {
    return `/${locale}${href}`;
  }

  return `/${locale}${href}`;
}