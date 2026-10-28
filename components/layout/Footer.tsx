import Link from "next/link";

import type { Dictionary } from "@/lib/i18n/dictionary";
import type { Locale } from "@/lib/i18n/config";

export function Footer({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-xl font-bold text-slate-950">
            Kaam Automation
          </h2>

          <p className="mt-4 max-w-sm leading-7 text-slate-600">
            {dictionary.brand.shortDescription}
          </p>
        </div>

        <div>
          <h3 className="font-bold text-slate-950">
            {dictionary.footer.navigation}
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
            <Link href={`/${locale}`}>{dictionary.nav.home}</Link>

            <Link href={`/${locale}/what-we-automate`}>
              {dictionary.nav.whatWeAutomate}
            </Link>

            <Link href={`/${locale}/how-it-works`}>
              {dictionary.nav.howItWorks}
            </Link>

            <Link href={`/${locale}/about`}>
              {dictionary.nav.about}
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-slate-950">
            {dictionary.footer.solutions}
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
            <Link href={`/${locale}/solutions`}>
              {dictionary.nav.solutions}
            </Link>

            <Link href={`/${locale}/industries`}>
              {dictionary.footer.industries}
            </Link>

            <Link href={`/${locale}/resources`}>
              {dictionary.footer.resources}
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-slate-950">
            {dictionary.footer.legal}
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
            <Link href={`/${locale}/privacy`}>
              {dictionary.footer.privacy}
            </Link>

            <Link href={`/${locale}/terms`}>
              {dictionary.footer.terms}
            </Link>

            <Link href={`/${locale}/contact`}>
              {dictionary.nav.contact}
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-slate-500">
        © 2026 {dictionary.footer.copyright}
        </div>
      </div>
    </footer>
  );
}