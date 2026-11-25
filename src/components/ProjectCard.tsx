import Image from "next/image";
import Link from "next/link";
import Cover from "@/components/Cover";
import { ArrowRight, ExtLink } from "@/components/ui";
import type { Project } from "@/data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  const shot = p.shots?.[0];
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-paper-raised transition-all duration-200 hover:-translate-y-0.5 hover:border-black/20 hover:shadow-[0_24px_48px_-28px_rgba(12,13,16,0.35)]">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-black/10">
        {shot ? (
          <Image
            src={shot.src}
            alt={shot.alt}
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]">
            <Cover motif={p.motif} />
          </div>
        )}
        {p.brief && (
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink-soft backdrop-blur">
            Design brief
          </span>
        )}
        {p.live && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-700 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Live
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">{p.categories.join(" · ")}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight">
          <Link href={`/work/${p.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {p.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm font-medium leading-snug text-ink-muted">{p.subtitle}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{p.tagline}</p>

        {p.metrics[0] && (
          <p className="mt-4 flex items-baseline gap-2 border-l-2 border-accent/70 pl-3">
            <span className="text-lg font-semibold tracking-tight">{p.metrics[0].value}</span>
            <span className="text-sm text-ink-muted">{p.metrics[0].label}</span>
          </p>
        )}

        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors group-hover:text-accent">
            Case study <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </span>
          {p.live && (
            <span className="relative z-10">
              <ExtLink href={p.live} className="link-arrow text-ink-muted">
                Try it
              </ExtLink>
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
