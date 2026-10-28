import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kaamautomation.com";

  const paths = [
    "",
    "/about",
    "/contact",
    "/free-automation-audit",
    "/how-it-works",
    "/industries",
    "/industries/distribution",
    "/privacy",
    "/resources",
    "/resources/business-automation-for-distributors-pakistan",
    "/resources/replace-existing-software-for-ai",
    "/resources/what-is-business-automation",
    "/solutions",
    "/terms",
    "/what-we-automate",
  ];

  const locales = ["en", "ur"];

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      changeFrequency: path.startsWith("/resources")
        ? "monthly"
        : "weekly",
      priority:
        path === ""
          ? 1
          : path === "/free-automation-audit"
            ? 0.9
            : 0.8,
    }))
  );
}