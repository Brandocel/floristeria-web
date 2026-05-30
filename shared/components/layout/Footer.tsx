import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Locale } from "@/shared/config/locales";
import { siteConfig } from "@/shared/config/site";
import { ContactForm } from "./ContactForm";

type FooterProps = {
  locale: Locale;
};

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const labels = {
  es: {
    categorias: "Categorías",
    nosotros: "Nosotros",
    catalogo: "Catálogo",
    contacto: "Contacto",
    soporte: "Soporte",
    envio: "Envío y Pago",
    ayuda: "Ayuda",
    horario: "10:00 – 19:00 hrs",
    copyright: `${siteConfig.shortName} ©${new Date().getFullYear()}. Todos los derechos reservados.`,
  },
  en: {
    categorias: "Categories",
    nosotros: "About Us",
    catalogo: "Catalog",
    contacto: "Contact",
    soporte: "Support",
    envio: "Delivery & Payment",
    ayuda: "Help & Support",
    horario: "10:00 – 19:00 hrs",
    copyright: `${siteConfig.shortName} ©${new Date().getFullYear()}. All rights reserved.`,
  },
};

export function Footer({ locale }: FooterProps) {
  const t = labels[locale];

  return (
    <footer
      id="contacto"
      className="border-t border-[#DBCCBA] bg-[#F8F3EC] px-6 text-[#2C2C2C] md:px-10"
    >
      {/* Sección de contacto */}
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-12 py-16 lg:grid-cols-[1fr_1px_1fr] lg:gap-x-16 lg:py-20 xl:gap-x-24">
        {/* Formulario */}
        <ContactForm locale={locale} />

        {/* Divisor vertical */}
        <div className="hidden w-px self-stretch bg-[#DBCCBA] lg:block" />

        {/* Datos de contacto */}
        <div className="flex flex-col gap-5 font-[var(--font-shanti)] text-[14px] text-[#2C2C2C]">
          <div className="flex items-center gap-2.5">
            <Phone size={15} strokeWidth={1.5} aria-hidden="true" />
            <a
              href={`tel:${siteConfig.phone}`}
              className="transition-colors duration-200 hover:text-[#7D5940]"
            >
              {siteConfig.phone}
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            <Mail size={15} strokeWidth={1.5} aria-hidden="true" />
            <a
              href={`mailto:${siteConfig.email}`}
              className="transition-colors duration-200 hover:text-[#7D5940]"
            >
              {siteConfig.email}
            </a>
          </div>

          <div className="flex items-center gap-2.5">
            <MapPin size={15} strokeWidth={1.5} aria-hidden="true" />
            <span>{siteConfig.address}</span>
          </div>

          <div className="flex items-center gap-2.5">
            <Clock size={15} strokeWidth={1.5} aria-hidden="true" />
            <span>{t.horario}</span>
          </div>

          {/* Redes sociales */}
          <div className="mt-2 flex items-center gap-4">
            <Link
              href={siteConfig.social.instagram}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center text-[#2C2C2C] transition-all duration-200 hover:-translate-y-0.5 hover:text-[#7D5940]"
            >
              <InstagramIcon />
            </Link>

            <Link
              href={siteConfig.social.facebook}
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center text-[#2C2C2C] transition-all duration-200 hover:-translate-y-0.5 hover:text-[#7D5940]"
            >
              <FacebookIcon />
            </Link>

            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Correo electrónico"
              className="flex h-8 w-8 items-center justify-center text-[#2C2C2C] transition-all duration-200 hover:-translate-y-0.5 hover:text-[#7D5940]"
            >
              <Mail size={18} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Grid de links */}
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 gap-10 border-t border-[#DBCCBA] py-14 md:grid-cols-3">
        {/* Categorías */}
        <div>
          <h3 className="mb-5 font-[var(--font-serif)] text-[18px] font-normal leading-none text-[#2C2C2C]">
            {t.categorias}
          </h3>
          <nav className="flex flex-col gap-3">
            <Link
              href={`/${locale}#nosotros`}
              className="font-[var(--font-shanti)] text-[14px] text-[#2C2C2C] transition-colors duration-200 hover:text-[#7D5940]"
            >
              {t.nosotros}
            </Link>
            <Link
              href={`/${locale}#catalogo`}
              className="font-[var(--font-shanti)] text-[14px] text-[#2C2C2C] transition-colors duration-200 hover:text-[#7D5940]"
            >
              {t.catalogo}
            </Link>
            <Link
              href={`/${locale}#contacto`}
              className="font-[var(--font-shanti)] text-[14px] text-[#2C2C2C] transition-colors duration-200 hover:text-[#7D5940]"
            >
              {t.contacto}
            </Link>
          </nav>
        </div>

        {/* Soporte */}
        <div>
          <h3 className="mb-5 font-[var(--font-serif)] text-[18px] font-normal leading-none text-[#2C2C2C]">
            {t.soporte}
          </h3>
          <div className="flex flex-col gap-3 font-[var(--font-shanti)] text-[14px] text-[#2C2C2C]">
            <Link
              href={`/${locale}#catalogo`}
              className="transition-colors duration-200 hover:text-[#7D5940]"
            >
              {t.envio}
            </Link>
            <Link
              href={`/${locale}#contacto`}
              className="transition-colors duration-200 hover:text-[#7D5940]"
            >
              {t.ayuda}
            </Link>
          </div>
        </div>

        {/* Horario */}
        <div>
          <h3 className="mb-5 font-[var(--font-serif)] text-[18px] font-normal leading-none text-[#2C2C2C]">
            {locale === "es" ? "Horario" : "Hours"}
          </h3>
          <div className="flex items-center gap-2 font-[var(--font-shanti)] text-[14px] text-[#2C2C2C]">
            <Clock size={14} strokeWidth={1.5} aria-hidden="true" />
            <span>{t.horario}</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto w-full max-w-[1320px] border-t border-[#DBCCBA] py-6 text-center">
        <p className="font-[var(--font-shanti)] text-[13px] text-[#6C6258]">
          {t.copyright}
        </p>
      </div>
    </footer>
  );
}
