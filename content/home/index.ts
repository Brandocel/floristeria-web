import { homeEn } from "./en";
import { homeEs } from "./es";
import type { Locale } from "@/shared/config/locales";

export const homeContent = {
  es: homeEs,
  en: homeEn,
};

export function getHomeContent(locale: Locale) {
  return homeContent[locale] ?? homeEs;
}