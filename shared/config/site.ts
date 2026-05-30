export const siteConfig = {
    name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Nombre de la Floristería",
    shortName: process.env.NEXT_PUBLIC_SITE_SHORT_NAME ?? "Tu Floristería",
    description:
      "Floristería elegante especializada en ramos, arreglos florales, regalos y experiencias llenas de belleza natural.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tufloristeria.com",
    phone: process.env.NEXT_PUBLIC_SITE_PHONE ?? "+52 998 000 0000",
    email: process.env.NEXT_PUBLIC_SITE_EMAIL ?? "correo@tufloristeria.com",
    address: process.env.NEXT_PUBLIC_SITE_ADDRESS ?? "Cancún, Quintana Roo",
    social: {
      instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://instagram.com",
      facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "https://facebook.com",
    },
  } as const;
