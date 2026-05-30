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
        src: "/images/home/hero-main.webp",
        alt: "Large vase with colorful flowers on a dark background",
      },
      side: {
        src: "/images/home/hero-side.webp",
        alt: "Small floral bouquet with pink and purple flowers",
      },
      floating: {
        src: "/images/home/hero-floating.webp",
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
        title: "Aurora Bouquet",
        description: "Soft pastel flowers with natural greenery.",
        price: "$850 MXN",
        src: "/images/home/popular-01.webp",
        alt: "Aurora bouquet with light flowers and green foliage",
      },
      {
        title: "Secret Garden",
        description: "Rich composition with pink, lilac and green flowers.",
        price: "$980 MXN",
        src: "/images/home/popular-02.webp",
        alt: "Secret Garden bouquet with pink and purple flowers",
      },
      {
        title: "Floral Breeze",
        description: "Colorful bouquet for birthdays and anniversaries.",
        price: "$720 MXN",
        src: "/images/home/popular-03.webp",
        alt: "Colorful bouquet with orange and pink flowers",
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
    author: "Línea Morada Team",
    image: {
      src: "/images/home/memory-01.webp",
      alt: "Florist working on a floral arrangement inside a workshop",
    },
    secondaryImage: {
      src: "/images/home/memory-02.webp",
      alt: "Hanging bouquets and dried flowers in an artisan space",
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
        src: "/images/home/catalog-01.webp",
        alt: "Premium purple floral arrangement",
      },
      {
        title: "Pink Whisper",
        description: "Soft bouquet with roses and fresh greenery.",
        price: "$890 MXN",
        src: "/images/home/catalog-02.webp",
        alt: "Pink bouquet with delicate flowers",
      },
      {
        title: "Floral Night",
        description: "Elegant composition with dark contrast and vivid flowers.",
        price: "$1,100 MXN",
        src: "/images/home/catalog-03.webp",
        alt: "Elegant floral arrangement with dark tones",
      },
      {
        title: "Field Party",
        description: "Joyful bouquet with seasonal flowers and warm tones.",
        price: "$760 MXN",
        src: "/images/home/catalog-04.webp",
        alt: "Country bouquet with colorful flowers",
      },
      {
        title: "Natural Charm",
        description: "Fresh arrangement for tables, entrances or gifts.",
        price: "$940 MXN",
        src: "/images/home/catalog-05.webp",
        alt: "Natural arrangement with fresh flowers",
      },
      {
        title: "Bright Garden",
        description: "Vibrant flowers to celebrate lively moments.",
        price: "$1,050 MXN",
        src: "/images/home/catalog-06.webp",
        alt: "Vibrant and colorful floral arrangement",
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
        src: "/images/home/offer-01.webp",
        alt: "Special bouquet with roses and colorful flowers",
      },
      {
        src: "/images/home/offer-02.webp",
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
        src: "/images/home/insta-01.webp",
        alt: "Purple bouquet with fresh flowers",
      },
      {
        src: "/images/home/insta-02.webp",
        alt: "Colorful floral arrangement for social media",
      },
      {
        src: "/images/home/insta-03.webp",
        alt: "Detail of orange and red flowers",
      },
    ],
  },
} satisfies HomeContent;