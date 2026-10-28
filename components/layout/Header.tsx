import Link from "next/link";

import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import type { Dictionary } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/config";

export function Header({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href={`/${locale}`}
          className="text-xl font-bold tracking-tight text-slate-950"
        >
          Kaam Automation
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
          <Link href={`/${locale}`}>{dictionary.nav.home}</Link>
          <Link href={`/${locale}/what-we-automate`}>
            {dictionary.nav.whatWeAutomate}
          </Link>
          <Link href={`/${locale}/industries`}>
            {dictionary.nav.industries}
          </Link>
          <Link href={`/${locale}/how-it-works`}>
            {dictionary.nav.howItWorks}
          </Link>
          <Link href={`/${locale}/solutions`}>
            {dictionary.nav.solutions}
          </Link>
          <Link href={`/${locale}/resources`}>
            {dictionary.nav.resources}
          </Link>
          <Link href={`/${locale}/about`}>{dictionary.nav.about}</Link>
          <Link href={`/${locale}/contact`}>{dictionary.nav.contact}</Link>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher
            locale={locale}
            labels={dictionary.language}
          />

          <Link
            href={`/${locale}/free-automation-audit`}
            className="hidden rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 sm:inline-flex"
          >
            {dictionary.nav.audit}
          </Link>
        </div>
      </div>
    </header>
  );
}