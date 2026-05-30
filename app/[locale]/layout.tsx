import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Footer } from "@/shared/components/layout/Footer";
import { Header } from "@/shared/components/layout/Header";
import { CustomCursor } from "@/shared/components/ui/CustomCursor";
import { ScrollProgress } from "@/shared/components/ui/ScrollProgress";
import { SmoothScroll } from "@/shared/providers/SmoothScroll";
import { isLocale, locales } from "@/shared/config/locales";

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <SmoothScroll>
      <ScrollProgress />
      <CustomCursor />
      <Header locale={locale} />
      {children}
      <Footer locale={locale} />
    </SmoothScroll>
  );
}
