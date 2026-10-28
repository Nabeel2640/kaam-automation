"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/lib/i18n/dictionary";
import { locales, type Locale } from "@/lib/i18n/config";
import { replaceLocaleInPath } from "@/lib/i18n/paths";
import { cn } from "@/lib/cn";

export function LanguageSwitcher({
  locale,
  labels,
}: {
  locale: Locale;
  labels: Dictionary["language"];
}) {
  const pathname = usePathname();

  return (
    <div
      className="flex items-center gap-1 text-sm font-semibold"
      aria-label={labels.label}
    >
      {locales.map((item, index) => (
        <span key={item} className="flex items-center gap-1">
          {index > 0 ? (
            <span className="text-muted" aria-hidden="true">
              |
            </span>
          ) : null}
          <Link
            href={replaceLocaleInPath(pathname, item)}
            hrefLang={item}
            lang={item}
            className={cn(
              "inline-flex min-h-11 min-w-11 items-center justify-center rounded-md px-2",
              item === locale
                ? "text-primary"
                : "text-muted hover:text-primary",
            )}
            aria-current={item === locale ? "true" : undefined}
          >
            {item === "en" ? labels.en : labels.ur}
          </Link>
        </span>
      ))}
    </div>
  );
}
