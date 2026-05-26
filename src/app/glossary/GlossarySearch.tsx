"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { GlossaryTerm } from "@/data/glossary";
import { glossaryAnchorId } from "@/lib/glossary-slug";

export function GlossarySearch({ terms }: { terms: GlossaryTerm[] }) {
  const [query, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return terms;
    return terms.filter(
      (t) =>
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q)
    );
  }, [terms, query]);

  const grouped = useMemo(() => {
    const map = new Map<string, GlossaryTerm[]>();
    for (const term of filtered) {
      const letter = term.term[0]?.toUpperCase() ?? "#";
      if (!map.has(letter)) map.set(letter, []);
      map.get(letter)!.push(term);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  return (
    <>
      <div className="mb-8">
        <label htmlFor="glossary-search" className="sr-only">
          Search glossary
        </label>
        <input
          id="glossary-search"
          type="search"
          placeholder="Search terms…"
          value={query}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full min-h-[44px] max-w-md rounded border border-border px-4 py-2 text-body focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-body">No terms match your search.</p>
      ) : (
        <div className="space-y-10">
          {grouped.map(([letter, items]) => (
            <div key={letter}>
              <h2 className="mb-4 text-2xl font-bold text-accent">{letter}</h2>
              <dl className="space-y-6">
                {items.map((item) => (
                  <div
                    key={item.term}
                    id={glossaryAnchorId(item.term)}
                    className="scroll-mt-24 rounded-[8px] border border-border bg-white p-5 shadow-[var(--shadow-card)]"
                  >
                    <dt className="text-lg font-semibold text-heading">
                      {item.term}
                      {item.link && (
                        <>
                          {" "}
                          <Link
                            href={item.link.href}
                            className="text-sm font-normal text-accent hover:underline"
                          >
                            → {item.link.label}
                          </Link>
                        </>
                      )}
                    </dt>
                    <dd className="mt-2 text-body leading-relaxed">
                      {item.definition}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
