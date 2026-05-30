import type { HomeContent } from "../types/home.types";
import { CatalogSection } from "./CatalogSection";
import { FeaturedCollection } from "./FeaturedCollection";
import { HomeHero } from "./HomeHero";
import { InstagramSection } from "./InstagramSection";
import { MemorySection } from "./MemorySection";
import { SpecialOffer } from "./SpecialOffer";

type HomePageViewProps = {
  content: HomeContent;
};

export function HomePageView({ content }: HomePageViewProps) {
  return (
    <main>
      <HomeHero hero={content.hero} />
      <FeaturedCollection popular={content.popular} />
      <MemorySection memories={content.memories} />
      <CatalogSection catalog={content.catalog} />
      <SpecialOffer offer={content.offer} />
      <InstagramSection social={content.social} />
    </main>
  );
}