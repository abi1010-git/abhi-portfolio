"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { categories, projects, type Category } from "@/data/projects";

export default function WorkGrid({ children }: { children?: React.ReactNode }) {
  const [filter, setFilter] = useState<Category | "All">("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <>
      <div role="group" aria-label="Filter projects" className="-mx-5 mb-10 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {(["All", ...categories] as const).map((c) => {
          const count = c === "All" ? projects.length : projects.filter((p) => p.categories.includes(c)).length;
          const on = filter === c;
          return (
            <button
              key={c}
              type="button"
              aria-pressed={on}
              onClick={() => setFilter(c)}
              className={`shrink-0 rounded-full border px-4 py-1.5 text-sm transition-colors ${
                on ? "border-ink bg-ink text-white" : "border-black/15 text-ink-soft hover:border-ink hover:text-ink"
              }`}
            >
              {c} <span className={`ml-1 font-mono text-xs ${on ? "text-white/60" : "text-ink-muted"}`}>{count}</span>
            </button>
          );
        })}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
      {children}
    </>
  );
}
