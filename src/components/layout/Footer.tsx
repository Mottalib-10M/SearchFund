"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const t = useTranslations("footer");

  const footerSections = [
    {
      title: t("platform"),
      links: [
        { href: "/listings" as const, label: t("marketplaceSoon") },
        { href: "/searchers" as const, label: t("searchers") },
        { href: "/investors" as const, label: t("investors") },
      ],
    },
    {
      title: t("resources"),
      links: [
        { href: "/learn" as const, label: t("learn") },
        { href: "/search-fund-statistics" as const, label: t("statistics") },
        { href: "/tools" as const, label: t("tools") },
        { href: "/templates" as const, label: t("templates") },
        { href: "/community" as const, label: t("community") },
        { href: "/learn/glossary" as const, label: t("glossary") },
      ],
    },
    {
      title: t("company"),
      links: [
        { href: "/about" as const, label: t("about") },
        { href: "/about/our-mission" as const, label: t("ourMission") },
        { href: "/contact" as const, label: t("contact") },
        { href: "/about/editorial-policy" as const, label: t("editorialPolicy") },
      ],
    },
    {
      title: t("legal"),
      links: [
        { href: "/privacy" as const, label: t("privacy") },
        { href: "/terms" as const, label: t("terms") },
      ],
    },
  ];

  return (
    <footer className="bg-apple-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="mb-10">
          <Logo size="md" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-apple-gray-500 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-apple-gray-700 transition-colors hover:text-apple-black"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-apple-gray-300/50">
          <p className="text-sm text-apple-gray-500">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
