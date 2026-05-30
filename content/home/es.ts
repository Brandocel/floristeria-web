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
        src: "/images/home/arreglogrande.png",
        alt: "Arreglo floral grande con flores frescas y coloridas",
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
        title: "Línea Morada",
        description:
          "Arreglo floral elegante con flores moradas, textura natural y una composición delicada.",
        price: "1,250 MXN",
        src: "/images/home/morada.png",
        alt: "Arreglo floral elegante con flores moradas y tonos profundos",
      },
      {
        title: "Violet Pink",
        description:
          "Composición romántica con flores en tonos violetas y rosas suaves.",
        price: "1,000 MXN",
        src: "/images/home/violet-pink.png",
        alt: "Arreglo floral romántico con flores violetas y rosas",
      },
      {
        title: "Naranja Tropical",
        description:
          "Bouquet vibrante con flores naranjas, ideal para celebrar momentos especiales.",
        price: "1,000 MXN",
        src: "/images/home/naranja.png",
        alt: "Bouquet colorido con flores naranjas y tonos cálidos",
      },
    ],
  },

  memories: {
    eyebrow: "Hecho con intención",
    title: "Perfumando recuerdos, tejiendo memorias con flores",
    description:
      "Nacida de una profunda pasión por las flores y la belleza natural, nuestra floristería es un refugio donde cada arreglo se crea con cuidado, intención y sensibilidad. Cada flor es seleccionada con esmero para transformar momentos cotidianos en recuerdos llenos de amor, alegría y elegancia.",
    quote:
      "Las flores no solo decoran: también comunican cariño, gratitud, amor y presencia.",
    author: "Nuestro equipo",
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
        src: "/images/home/morada.png",
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
        title: "Violet Pink",
        description: "Composición romántica con flores violetas y rosas.",
        price: "$1,000 MXN",
        src: "/images/home/violet-pink.png",
        alt: "Arreglo floral romántico con flores violetas y rosas",
      },
      {
        title: "Naranja Tropical",
        description: "Bouquet vibrante para celebrar momentos especiales.",
        price: "$1,000 MXN",
        src: "/images/home/naranja.png",
        alt: "Ramo colorido con flores naranjas y cálidas",
      },
      {
        title: "Encanto Natural",
        description: "Arreglo fresco para decorar mesas, entradas o regalos.",
        price: "$940 MXN",
        src: "/images/home/arreglo.png",
        alt: "Arreglo natural con flores frescas",
      },
      {
        title: "Gran Arreglo",
        description: "Pieza de gran formato, perfecta para eventos y espacios.",
        price: "$1,050 MXN",
        src: "/images/home/arreglogrande.png",
        alt: "Arreglo floral grande con flores coloridas para eventos",
      },
    ],
  },

  offer: {
    eyebrow: "Apertura especial web",
    title: "20% de descuento en tu primer arreglo floral",
    description:
      "Celebra nuestra apertura digital con un detalle especial para ti. Recibe 20% de descuento en tu primer arreglo floral y elige una pieza diseñada con flores frescas, colores delicados y el cuidado artesanal que nos distingue.",
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
        src: "/images/home/arreglogrande.png",
        alt: "Arreglo floral grande con flores coloridas",
      },
      {
        src: "/images/home/morada.png",
        alt: "Detalle de arreglo con flores moradas",
      },
    ],
  },
} satisfies HomeContent;
