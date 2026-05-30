import type { HomeContent } from "@/features/home/types/home.types";

export const homeEs = {
  seo: {
    title: "Floristería elegante en Cancún",
    description:
      "Descubre arreglos florales, ramos de temporada y detalles especiales para cada ocasión.",
  },

  hero: {
    eyebrow: "Floristería artesanal",
    title: "Descubre la encantadora colección de nuestra floristería",
    description:
      "Creamos ramos, arreglos y detalles florales con una estética delicada, elegante y natural. Cada composición está pensada para regalar emociones, celebrar momentos y llenar espacios de belleza.",
    ctaLabel: "Explorar catálogo",
    ctaHref: "#catalogo",
    secondaryCtaLabel: "Ver colección",
    secondaryCtaHref: "#coleccion",
    images: {
      main: {
        src: "/images/home/florerogrande.webp",
        alt: "Florero grande con flores de colores sobre fondo oscuro",
      },
      side: {
        src: "/images/home/florespequenas.webp",
        alt: "Ramo floral pequeño con flores rosas y moradas sobre fondo oscuro",
      },
      floating: {
        src: "/images/home/florespequenas.webp",
        alt: "Detalle de ramo floral pequeño",
      },
    },
  },

  popular: {
    eyebrow: "Colección destacada",
    title: "Presentamos nuestra popular colección de ramos",
    description:
      "En nuestra floristería nos enorgullecemos de ofrecer una selecta colección de flores capaces de conquistar corazones y despertar emociones profundas. Explora nuestro paraíso floral y déjate cautivar por la belleza atemporal de cada arreglo.",
    items: [
      {
        title: "Whispering Blooms",
        description:
          "Arreglo floral elegante con flores suaves, textura natural y una composición delicada.",
        price: "1,000 MXN",
        src: "/images/home/ramoaurora.webp",
        alt: "Arreglo floral elegante con flores claras y tonos suaves",
      },
      {
        title: "Enchanted Petals",
        description:
          "Composición romántica con flores de tonos cálidos y follaje natural.",
        price: "1,000 MXN",
        src: "/images/home/ramojardin.webp",
        alt: "Arreglo floral romántico con flores rosas y rojas",
      },
      {
        title: "Harmony Bouquet",
        description:
          "Bouquet colorido con presencia visual, ideal para regalar en ocasiones especiales.",
        price: "1,000 MXN",
        src: "/images/home/colorido.webp",
        alt: "Bouquet colorido con flores naranjas, rosas y tonos profundos",
      },
    ],
  },

  memories: {
    eyebrow: "Hecho con intención",
    title: "Perfumando recuerdos, tejiendo memorias con flores",
    description:
      "Nacida de una profunda pasión por las flores y la belleza natural, Línea Morada es un refugio donde cada arreglo se crea con cuidado, intención y sensibilidad. Cada flor es seleccionada con esmero para transformar momentos cotidianos en recuerdos llenos de amor, alegría y elegancia.",
    quote:
      "Las flores no solo decoran: también comunican cariño, gratitud, amor y presencia.",
    author: "Equipo Línea Morada",
    image: {
      src: "/images/home/acomodandoflores.webp",
      alt: "Florista acomodando flores y preparando un arreglo floral",
    },
    secondaryImage: {
      src: "/images/home/floreria.webp",
      alt: "Floristería con flores exhibidas en el aparador",
    },
  },

  catalog: {
    eyebrow: "Catálogo floral",
    title: "Catálogo de delicias florales para cada ocasión",
    description:
      "Elige entre ramos románticos, arreglos elegantes, detalles para cumpleaños y piezas especiales para eventos.",
    items: [
      {
        title: "Línea Morada",
        description: "Arreglo premium con flores moradas y verdes profundos.",
        price: "$1,250 MXN",
        src: "/images/home/florerogrande.webp",
        alt: "Arreglo floral morado premium en florero elegante",
      },
      {
        title: "Aurora Floral",
        description: "Flores suaves en tonos claros con follaje natural.",
        price: "$1,000 MXN",
        src: "/images/home/ramoaurora.webp",
        alt: "Arreglo floral claro con flores elegantes",
      },
      {
        title: "Jardín Encantado",
        description: "Composición romántica con flores rosas y rojas.",
        price: "$1,000 MXN",
        src: "/images/home/ramojardin.webp",
        alt: "Arreglo floral romántico con flores rosas",
      },
      {
        title: "Brisa Colorida",
        description: "Bouquet vibrante para celebrar momentos especiales.",
        price: "$1,000 MXN",
        src: "/images/home/colorido.webp",
        alt: "Ramo colorido con flores cálidas",
      },
      {
        title: "Encanto Natural",
        description: "Arreglo fresco para decorar mesas, entradas o regalos.",
        price: "$940 MXN",
        src: "/images/home/florespequenas.webp",
        alt: "Arreglo natural con flores frescas sobre fondo oscuro",
      },
      {
        title: "Taller Floral",
        description:
          "Flores preparadas con técnica artesanal y atención al detalle.",
        price: "$1,050 MXN",
        src: "/images/home/acomodandoflores.webp",
        alt: "Florista trabajando con flores en taller floral",
      },
    ],
  },

  offer: {
    eyebrow: "Apertura especial web",
    title: "20% de descuento en tu primer arreglo floral",
    description:
      "Celebra nuestra apertura digital con un detalle especial para ti. Recibe 20% de descuento en tu primer arreglo floral y elige una pieza diseñada con flores frescas, colores delicados y el cuidado artesanal que distingue a Línea Morada.",
    ctaLabel: "Cotizar",
    ctaHref: "#contacto",
    images: [
      {
        src: "/images/home/ramojardin.webp",
        alt: "Arreglo floral romántico con flores rosas y rojas",
      },
      {
        src: "/images/home/colorido.webp",
        alt: "Arreglo floral colorido con flores cálidas y fondo oscuro",
      },
    ],
  },

  social: {
    eyebrow: "Síguenos",
    title: "Mantente cerca: sigue nuestro viaje lleno de flores y belleza",
    description:
      "Compartimos nuevos arreglos, ideas para regalar, inspiración floral y momentos detrás de cada ramo.",
    handle: "@lineamorada.floristeria",
    images: [
      {
        src: "/images/home/florespequenas.webp",
        alt: "Ramo floral pequeño con flores frescas",
      },
      {
        src: "/images/home/floreria.webp",
        alt: "Floristería con flores exhibidas en aparador",
      },
      {
        src: "/images/home/colorido.webp",
        alt: "Detalle de flores coloridas",
      },
    ],
  },
} satisfies HomeContent;