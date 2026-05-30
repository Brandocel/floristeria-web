import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getHomeContent } from "@/content/home";
import { HomePageView } from "@/features/home/components/HomePageView";
import { isLocale } from "@/shared/config/locales";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = getHomeContent(locale);

  return {
    title: content.seo.title,
    description: content.seo.description,
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getHomeContent(locale);

  return <HomePageView content={content} />;
}