import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl border-l-4 border-accent px-4 py-12 sm:px-6 md:py-16">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-body/60">
              {breadcrumbs.map((item, i) => (
                <li key={i} className="flex items-center gap-1">
                  {i > 0 && <span aria-hidden>/</span>}
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-body">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="font-display text-2xl font-semibold tracking-tight text-heading min-[375px]:text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
