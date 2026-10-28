import Link from "next/link";
import { siteConfig } from "@/lib/config/site";
import { withLocale } from "@/lib/i18n/paths";
import type { Locale } from "@/lib/i18n/config";

export function Logo({ locale }: { locale: Locale }) {
  return (
    <Link
      href={withLocale(locale, "/")}
      className="text-lg font-semibold tracking-tight text-primary"
    >
      {siteConfig.name}
    </Link>
  );
}
