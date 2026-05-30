export type FloralImageContent = {
    src: string;
    alt: string;
    caption?: string;
  };
  
  export type ProductCard = FloralImageContent & {
    title: string;
    description: string;
    price: string;
    href?: string;
  };
  
  export type HomeContent = {
    seo: {
      title: string;
      description: string;
    };
  
    hero: {
      eyebrow: string;
      title: string;
      description: string;
      ctaLabel: string;
      ctaHref: string;
      secondaryCtaLabel: string;
      secondaryCtaHref: string;
      images: {
        main: FloralImageContent;
        side: FloralImageContent;
        floating: FloralImageContent;
      };
    };
  
    popular: {
      eyebrow: string;
      title: string;
      description: string;
      items: ProductCard[];
    };
  
    memories: {
      eyebrow: string;
      title: string;
      description: string;
      quote: string;
      author: string;
      image: FloralImageContent;
      secondaryImage: FloralImageContent;
    };
  
    catalog: {
      eyebrow: string;
      title: string;
      description: string;
      items: ProductCard[];
    };
  
    offer: {
      eyebrow: string;
      title: string;
      description: string;
      ctaLabel: string;
      ctaHref: string;
      images: FloralImageContent[];
    };
  
    social: {
      eyebrow: string;
      title: string;
      description: string;
      handle: string;
      images: FloralImageContent[];
    };
  };