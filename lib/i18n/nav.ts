export const mainNav = [
  { key: "home", href: "/" },
  { key: "whatWeAutomate", href: "/what-we-automate" },
  { key: "industries", href: "/industries" },
  { key: "howItWorks", href: "/how-it-works" },
  { key: "solutions", href: "/solutions" },
  { key: "resources", href: "/resources" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
] as const;

export type NavKey = (typeof mainNav)[number]["key"];

export const auditHref = "/free-automation-audit";

export const footerNav = {
  company: [
    { key: "about", href: "/about" },
    { key: "contact", href: "/contact" },
    { key: "howItWorks", href: "/how-it-works" },
  ],
  solutions: [{ key: "solutions", href: "/solutions" }],
  industries: [{ key: "industries", href: "/industries" }],
  resources: [
    { key: "resources", href: "/resources" },
    { key: "privacy", href: "/privacy" },
    { key: "terms", href: "/terms" },
  ],
} as const;
