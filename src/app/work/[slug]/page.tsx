import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Cover from "@/components/Cover";
import SiteFooter from "@/components/SiteFooter";
import { ArrowRight, ExtLink } from "@/components/ui";
import { getProject, projects } from "@/data/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const title = `${p.name}: ${p.subtitle} | Abhijith Aravind`;
  return {
    title,
    description: p.summary,
    openGraph: {
      title,
      description: p.tagline,
      type: "article",
      images: p.shots?.[0] ? [{ url: p.shots[0].src, width: p.shots[0].width, height: p.shots[0].height }] : undefined,
    },
  };
}

function Block({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-6 border-t border-black/10 py-14 sm:py-20 md:grid-cols-[12rem_1fr] md:gap-8">
      <div>
        <p className="section-label">{label}</p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export default async function CaseStudy({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const i = projects.indexOf(p);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const nextP = projects[(i + 1) % projects.length];
  const [hero, ...gallery] = p.shots ?? [];

  return (
    <>
      <main className="pt-24 sm:pt-32">
        <div className="container-content">
          <nav aria-label="Breadcrumb" className="mb-10 font-mono text-xs text-ink-muted">
            <Link href="/work" className="hover:text-ink">
              Work
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink">{p.name}</span>
          </nav>

          {/* Header */}
          <header className="grid gap-10 lg:grid-cols-[1fr_20rem] lg:gap-16">
            <div className="animate-fade-up">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{p.categories.join(" · ")}</p>
              <h1 className="mt-4 text-5xl font-semibold leading-[0.98] tracking-[-0.03em] sm:text-7xl">
                {p.name}
                <span className="mt-4 block text-xl font-medium leading-snug tracking-tight text-ink-muted sm:text-2xl">
                  {p.subtitle}
                </span>
              </h1>
              <p className="mt-6 max-w-3xl font-serif text-[1.65rem] leading-[1.2] text-ink sm:text-4xl">{p.tagline}</p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{p.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {p.live && (
                  <ExtLink href={p.live} className="btn-primary">
                    Try it live
                  </ExtLink>
                )}
                {p.code && (
                  <ExtLink href={p.code} className="btn-ghost">
                    Source on GitHub
                  </ExtLink>
                )}
              </div>
            </div>

            <dl className="grid h-fit grid-cols-2 gap-x-6 gap-y-5 border-t border-black/10 pt-6 text-sm lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.12em] text-ink-muted">Timeline</dt>
                <dd className="mt-1">{p.period}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.12em] text-ink-muted">Status</dt>
                <dd className="mt-1 inline-flex items-center gap-2">
                  {p.live && <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />}
                  {p.status}
                </dd>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <dt className="font-mono text-xs uppercase tracking-[0.12em] text-ink-muted">Stack</dt>
                <dd className="mt-2 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </header>

          {/* Hero visual */}
          <figure className="mt-14 sm:mt-20">
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-paper-raised shadow-[0_40px_80px_-40px_rgba(12,13,16,0.35)]">
              <div className="relative aspect-[16/9] sm:aspect-[21/10]">
                {hero ? (
                  <Image src={hero.src} alt={hero.alt} fill priority sizes="(min-width: 1216px) 1152px, 100vw" className="object-cover object-top" />
                ) : (
                  <Cover motif={p.motif} label={p.name} />
                )}
              </div>
            </div>
            {hero?.caption && <figcaption className="mt-3 text-sm text-ink-muted">{hero.caption}</figcaption>}
          </figure>

          {/* Metrics */}
          <dl className={`mt-14 grid grid-cols-2 border-y border-black/10 ${p.metrics.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
            {p.metrics.map((m, k) => (
              <div key={m.label} className={`py-7 pr-4 ${k % 2 === 1 ? "border-l border-black/10 pl-5" : ""} ${k >= 2 ? "border-t border-black/10 lg:border-t-0 lg:border-l lg:pl-5" : ""}`}>
                <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">{m.value}</dd>
                <dt className="mt-1.5 text-sm text-ink-muted">{m.label}</dt>
              </div>
            ))}
          </dl>

          <Block label="The problem" title="Why I built it">
            <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-ink-soft">
              {p.problem.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
          </Block>

          <Block label="How it works" title={p.brief ? "What it's designed to do" : "From input to result"}>
            <ol className="relative space-y-0">
              {p.pipeline.map((s, k) => (
                <li key={s.title} className="relative grid grid-cols-[2.5rem_1fr] gap-4 pb-8 last:pb-0">
                  {k < p.pipeline.length - 1 && (
                    <span aria-hidden="true" className="absolute left-[1.2rem] top-10 h-[calc(100%-2.5rem)] w-px bg-black/15" />
                  )}
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-mono text-xs text-white">
                    {String(k + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="mt-1 max-w-2xl leading-relaxed text-ink-soft">{s.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Block>

          <Block label="Engineering" title={p.brief ? "Design decisions" : "Decisions worth talking about"}>
            <div className="grid gap-4 md:grid-cols-2">
              {p.decisions.map((d) => (
                <div key={d.title} className="rounded-2xl border border-black/10 bg-paper-raised p-6">
                  <h3 className="font-semibold leading-snug">{d.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{d.detail}</p>
                </div>
              ))}
            </div>
          </Block>

          {gallery.length > 0 && (
            <Block label="Screens" title="More of the product">
              <div className="grid gap-6 md:grid-cols-2">
                {gallery.map((s) => (
                  <figure key={s.src}>
                    <div
                      className="relative overflow-hidden rounded-xl border border-black/10 bg-paper-raised"
                      style={{ aspectRatio: `${s.width} / ${s.height}` }}
                    >
                      <Image src={s.src} alt={s.alt} fill sizes="(min-width: 768px) 560px, 100vw" className="object-cover object-top" />
                    </div>
                    {s.caption && <figcaption className="mt-2 text-sm text-ink-muted">{s.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            </Block>
          )}

          {p.next && p.next.length > 0 && (
            <Block label="Limits & next" title="What it can't do yet">
              <ul className="max-w-3xl space-y-3">
                {p.next.map((n) => (
                  <li key={n} className="flex gap-3 leading-relaxed text-ink-soft">
                    <span aria-hidden="true" className="mt-[0.7rem] h-1 w-3 shrink-0 rounded-full bg-accent" />
                    {n}
                  </li>
                ))}
              </ul>
            </Block>
          )}

          {/* Prev / next */}
          <nav aria-label="More projects" className="grid gap-4 border-t border-black/10 py-14 sm:grid-cols-2">
            {[
              { p: prev, dir: "Previous" },
              { p: nextP, dir: "Next" },
            ].map(({ p: q, dir }) => (
              <Link
                key={dir}
                href={`/work/${q.slug}`}
                className={`group rounded-2xl border border-black/10 bg-paper-raised p-6 transition-colors hover:border-ink ${dir === "Next" ? "sm:text-right" : ""}`}
              >
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">{dir} project</p>
                <p className="mt-2 text-xl font-semibold tracking-tight group-hover:text-accent">{q.name}</p>
                <p className="mt-1 text-sm text-ink-muted">{q.subtitle}</p>
              </Link>
            ))}
          </nav>

          <div className="pb-20">
            <Link href="/work" className="link-arrow">
              All projects <ArrowRight />
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
