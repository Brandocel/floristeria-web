export const siteConfig = {
    name: "Línea Morada Floristería",
    shortName: "Línea Morada",
    description:
      "Floristería elegante especializada en ramos, arreglos florales, regalos y experiencias llenas de belleza natural.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lineamorada.com",
    phone: "+52 998 000 0000",
    email: "hola@lineamorada.com",
    address: "Cancún, Quintana Roo",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
  } as const;