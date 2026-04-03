import Link from "next/link";

const footerSections = [
  {
    title: "Platform",
    links: [
      { href: "/listings", label: "Listings" },
      { href: "/searchers", label: "Searchers" },
      { href: "/investors", label: "Investors" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/learn", label: "Learn" },
      { href: "/community", label: "Community" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-apple-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
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
            &copy; 2024 SearchFundMarket. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
