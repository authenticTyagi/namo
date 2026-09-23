import { Link } from "@/i18n/navigation";
import { SITE_URL } from "@/lib/constants";
import type { Locale } from "@/i18n/routing";

export interface BreadcrumbItem {
  label: string;
  /** Locale-relative path (e.g. "/", "/category/space-science") — `Link` from `@/i18n/navigation` prefixes the locale itself. */
  href: string;
}

/**
 * Renders both the visible trail and its `BreadcrumbList` JSON-LD in one
 * place, so the two can never drift out of sync with each other.
 */
export function Breadcrumbs({ items, locale }: { items: BreadcrumbItem[]; locale: Locale }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${SITE_URL}/${locale}${item.href === "/" ? "" : item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger -- static JSON, no user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i === items.length - 1 ? (
                <span className="text-neutral-700 dark:text-neutral-300" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-neutral-700 hover:underline dark:hover:text-neutral-300">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
