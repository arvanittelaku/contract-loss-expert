import { ReactNode } from "react";

/**
 * Horizontal scroll wrapper for wide tables, prevents page-level overflow on small screens.
 */
export function ResponsiveTable({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`table-scroll -mx-4 w-[calc(100%+2rem)] overflow-x-auto px-4 sm:mx-0 sm:w-full sm:px-0 ${className}`}
    >
      {children}
    </div>
  );
}
