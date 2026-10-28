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
  const menuLabel = locale === "ur" ? "مینو" : "Menu";

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

          <Link href={`/${locale}/about`}>
            {dictionary.nav.about}
          </Link>

          <Link href={`/${locale}/contact`}>
            {dictionary.nav.contact}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher
            locale={locale}
            labels={dictionary.language}
          />

          <Link
            href={`/${locale}/free-automation-audit`}
            className="hidden rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 lg:inline-flex"
          >
            {dictionary.nav.audit}
          </Link>

          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-800">
              {menuLabel}
            </summary>

            <div className="absolute end-0 z-50 mt-3 w-64 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
              <nav className="flex flex-col gap-1 text-sm font-medium text-slate-700">
                <Link
                  href={`/${locale}`}
                  className="rounded-lg px-3 py-2 hover:bg-slate-50"
                >
                  {dictionary.nav.home}
                </Link>

                <Link
                  href={`/${locale}/what-we-automate`}
                  className="rounded-lg px-3 py-2 hover:bg-slate-50"
                >
                  {dictionary.nav.whatWeAutomate}
                </Link>

                <Link
                  href={`/${locale}/industries`}
                  className="rounded-lg px-3 py-2 hover:bg-slate-50"
                >
                  {dictionary.nav.industries}
                </Link>

                <Link
                  href={`/${locale}/how-it-works`}
                  className="rounded-lg px-3 py-2 hover:bg-slate-50"
                >
                  {dictionary.nav.howItWorks}
                </Link>

                <Link
                  href={`/${locale}/solutions`}
                  className="rounded-lg px-3 py-2 hover:bg-slate-50"
                >
                  {dictionary.nav.solutions}
                </Link>

                <Link
                  href={`/${locale}/resources`}
                  className="rounded-lg px-3 py-2 hover:bg-slate-50"
                >
                  {dictionary.nav.resources}
                </Link>

                <Link
                  href={`/${locale}/about`}
                  className="rounded-lg px-3 py-2 hover:bg-slate-50"
                >
                  {dictionary.nav.about}
                </Link>

                <Link
                  href={`/${locale}/contact`}
                  className="rounded-lg px-3 py-2 hover:bg-slate-50"
                >
                  {dictionary.nav.contact}
                </Link>

                <Link
                  href={`/${locale}/free-automation-audit`}
                  className="mt-2 rounded-xl bg-slate-900 px-3 py-3 text-center font-semibold text-white"
                >
                  {dictionary.nav.audit}
                </Link>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}