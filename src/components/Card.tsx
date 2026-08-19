import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  description?: string;
  href?: string;
  children?: ReactNode;
}

export function Card({ title, description, href, children }: CardProps) {
  const inner = (
    <>
      <h3 className="font-display text-lg font-semibold text-heading">{title}</h3>
      {description && (
        <p className="mt-2 text-body leading-relaxed">{description}</p>
      )}
      {children}
      {href && (
        <span className="mt-3 inline-block text-sm font-medium text-accent">
          Read more →
        </span>
      )}
    </>
  );

  const className =
    "block h-full border border-border border-l-4 border-l-accent bg-white p-6 transition-colors hover:border-l-highlight";

  if (href) {
    return (
      <Link href={href} className={className}>
        {inner}
      </Link>
    );
  }

  return <div className={className}>{inner}</div>;
}
