import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Footer } from "@/shared/components/layout/Footer";
import { Header } from "@/shared/components/layout/Header";
import { CartDrawer } from "@/shared/components/ui/CartDrawer";
import { CartFlyOverlay } from "@/shared/components/ui/CartFlyOverlay";
import { CustomCursor } from "@/shared/components/ui/CustomCursor";
import { ImageLightbox } from "@/shared/components/ui/ImageLightbox";
import { ScrollProgress } from "@/shared/components/ui/ScrollProgress";
import { SmoothScroll } from "@/shared/providers/SmoothScroll";
import { CartProvider } from "@/shared/store/cart";
import { CartFlyProvider } from "@/shared/store/cartFly";
import { LightboxProvider } from "@/shared/store/lightbox";
import { isLocale, locales } from "@/shared/config/locales";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  return (
    <LightboxProvider>
      <CartFlyProvider>
        <CartProvider>
          <SmoothScroll>
            <ScrollProgress />
            <CustomCursor />
            <Header locale={locale} />
            {children}
            <Footer locale={locale} />
            <CartDrawer />
            <ImageLightbox />
            <CartFlyOverlay />
          </SmoothScroll>
        </CartProvider>
      </CartFlyProvider>
    </LightboxProvider>
  );
}
