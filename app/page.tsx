import { redirect } from "next/navigation";
import { defaultLocale } from "@/shared/config/locales";

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}