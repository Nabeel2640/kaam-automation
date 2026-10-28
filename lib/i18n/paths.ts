import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/config";

export function withLocale(locale: Locale, href: string) {
  const path = href === "/" ? "" : href;
  return `/${locale}${path}`;
}

export function replaceLocaleInPath(pathname: string, nextLocale: Locale) {
  const segments = pathname.split("/");
  if (segments.length > 1 && isLocale(segments[1])) {
    segments[1] = nextLocale;
    const nextPath = segments.join("/");
    return nextPath.length > 0 ? nextPath : `/${nextLocale}`;
  }

  return withLocale(nextLocale, pathname || "/");
}

export function getLocaleFromPathname(pathname: string): Locale {
  const maybeLocale = pathname.split("/")[1];
  return isLocale(maybeLocale) ? maybeLocale : defaultLocale;
}
