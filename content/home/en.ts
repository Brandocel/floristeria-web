import type { HomeContent } from "@/features/home/types/home.types";

export const homeEn = {
  seo: {
    title: "Elegant flower shop in Cancun",
    description:
      "Discover floral arrangements, seasonal bouquets and meaningful gifts for every occasion.",
  },

  hero: {
    eyebrow: "Artisan flower shop",
    title: "Discover the charming collection of our flower shop",
    description:
      "We create bouquets, arrangements and floral gifts with a delicate, elegant and natural aesthetic. Every piece is designed to celebrate moments, express emotions and bring beauty into any space.",
    ctaLabel: "Explore catalog",
    ctaHref: "#catalogo",
    secondaryCtaLabel: "View collection",
    secondaryCtaHref: "#coleccion",
    images: {
      main: {
        src: "/images/home/florerogrande.webp",
        alt: "Large vase with colorful flowers on a dark background",
      },
      side: {
        src: "/images/home/arreglogrande.png",
        alt: "Large floral arrangement with fresh and colorful flowers",
      },
      floating: {
        src: "/images/home/florespequenas.webp",
        alt: "Elegant bouquet detail for a special occasion",
      },
    },
  },

  popular: {
    eyebrow: "Featured collection",
    title: "Introducing our popular bouquet collection",
    description:
      "A selection of fresh, romantic and textured arrangements for meaningful gifts and beautiful spaces.",
    items: [
      {
        title: "Purple Line",
        description: "Elegant floral arrangement with deep purple flowers and natural texture.",
        price: "$1,250 MXN",
        src: "/images/home/morada.png",
        alt: "Elegant floral arrangement with deep purple flowers",
      },
      {
        title: "Violet Pink",
        description: "Romantic composition with soft violet and pink flowers.",
        price: "$1,000 MXN",
        src: "/images/home/violet-pink.png",
        alt: "Romantic floral bouquet with violet and pink flowers",
      },
      {
        title: "Tropical Orange",
        description: "Vibrant bouquet with orange flowers, perfect for celebrations.",
        price: "$1,000 MXN",
        src: "/images/home/naranja.png",
        alt: "Colorful bouquet with orange and warm-toned flowers",
      },
    ],
  },

  memories: {
    eyebrow: "Made with intention",
    title: "Scented memories: the art of weaving moments with flowers",
    description:
      "Every arrangement is treated as a small visual story. We combine textures, colors and natural balance to create pieces with character and emotion.",
    quote:
      "Flowers do more than decorate: they express love, gratitude, presence and care.",
    author: "Our team",
    image: {
      src: "/images/home/acomodandoflores.webp",
      alt: "Florist working on a floral arrangement inside a workshop",
    },
    secondaryImage: {
      src: "/images/home/floreria.webp",
      alt: "Flower shop with arrangements displayed in the window",
    },
  },

  catalog: {
    eyebrow: "Floral catalog",
    title: "Floral delights for every occasion",
    description:
      "Choose from romantic bouquets, elegant arrangements, birthday gifts and special pieces for events.",
    items: [
      {
        title: "Purple Line",
        description: "Premium arrangement with purple flowers and deep greens.",
        price: "$1,250 MXN",
        src: "/images/home/morada.png",
        alt: "Premium purple floral arrangement in elegant vase",
      },
      {
        title: "Aurora Floral",
        description: "Soft bouquet with light-toned flowers and natural foliage.",
        price: "$1,000 MXN",
        src: "/images/home/ramoaurora.webp",
        alt: "Light floral arrangement with elegant flowers",
      },
      {
        title: "Violet Pink",
        description: "Romantic composition with violet and pink flowers.",
        price: "$1,000 MXN",
        src: "/images/home/violet-pink.png",
        alt: "Romantic floral arrangement with violet and pink flowers",
      },
      {
        title: "Tropical Orange",
        description: "Vibrant bouquet to celebrate special moments.",
        price: "$1,000 MXN",
        src: "/images/home/naranja.png",
        alt: "Colorful bouquet with warm orange flowers",
      },
      {
        title: "Natural Charm",
        description: "Fresh arrangement for tables, entrances or gifts.",
        price: "$940 MXN",
        src: "/images/home/arreglo.png",
        alt: "Natural arrangement with fresh flowers",
      },
      {
        title: "Grand Arrangement",
        description: "Large-format piece, perfect for events and special spaces.",
        price: "$1,050 MXN",
        src: "/images/home/arreglogrande.png",
        alt: "Large colorful floral arrangement for events",
      },
    ],
  },

  offer: {
    eyebrow: "Special web opening",
    title: "20% off your first floral arrangement",
    description:
      "Celebrate our digital opening with a special discount on selected bouquets. Available for a limited time on web orders.",
    ctaLabel: "Order now",
    ctaHref: "#contacto",
    images: [
      {
        src: "/images/home/ramojardin.webp",
        alt: "Special bouquet with roses and colorful flowers",
      },
      {
        src: "/images/home/colorido.webp",
        alt: "Premium floral arrangement on a dark background",
      },
    ],
  },

  social: {
    eyebrow: "Follow us",
    title: "Stay close: follow our journey full of flowers and beauty",
    description:
      "We share new arrangements, floral inspiration and behind-the-scenes moments from every bouquet.",
    handle: "@lineamorada.floristeria",
    images: [
      {
        src: "/images/home/florespequenas.webp",
        alt: "Small floral bouquet with fresh flowers",
      },
      {
        src: "/images/home/arreglogrande.png",
        alt: "Large colorful floral arrangement",
      },
      {
        src: "/images/home/morada.png",
        alt: "Detail of elegant purple floral arrangement",
      },
    ],
  },
} satisfies HomeContent;
