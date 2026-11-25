import Image from "next/image";
import Link from "next/link";
import Cover from "@/components/Cover";
import ProjectCard from "@/components/ProjectCard";
import SiteFooter from "@/components/SiteFooter";
import { ArrowRight, ExtLink, SectionHead } from "@/components/ui";
import {
  achievements,
  education,
  extracurriculars,
  experience,
  links,
  profile,
  proof,
  skillGroups,
} from "@/data/content";
import { featuredProjects, otherProjects, projects, type Project } from "@/data/projects";

/* ------------------------------------------------------------------ Hero */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36">
      <div className="container-content">
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_17rem] lg:gap-16">
          <div className="animate-fade-up">
            <p className="inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-paper-raised px-3.5 py-1.5 text-[13px] text-ink-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-emerald-500" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availability}
            </p>

            <h1 className="mt-8 text-[2.75rem] font-semibold leading-[0.95] tracking-[-0.035em] sm:text-7xl lg:text-[5.5rem]">
              {profile.name}
            </h1>

            <p className="mt-6 max-w-3xl font-serif text-[1.75rem] leading-[1.15] text-ink sm:text-[2.6rem]">
              I build data platforms and AI systems that <em className="text-accent">hold up</em> against
              real-world data.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">{profile.intro}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/work" className="btn-primary">
                See my work
                <ArrowRight />
              </Link>
              <ExtLink href={links.linkedin} className="btn-ghost">
                LinkedIn
              </ExtLink>
              <ExtLink href={links.github} className="btn-ghost">
                GitHub
              </ExtLink>
            </div>
          </div>

          <figure className="animate-fade-up [animation-delay:120ms] max-lg:order-first">
            <div className="relative h-28 w-28 overflow-hidden rounded-full border border-black/10 sm:h-36 sm:w-36 lg:h-auto lg:w-full lg:rounded-2xl lg:[aspect-ratio:4/5]">
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 272px, 144px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 hidden font-mono text-xs leading-relaxed text-ink-muted lg:block">
              {profile.title}
              <br />
              {profile.location}
            </figcaption>
          </figure>
        </div>

        <dl className="mt-16 grid grid-cols-2 border-y border-black/10 sm:mt-20 lg:grid-cols-4">
          {proof.map((p, i) => (
            <div
              key={p.label}
              className={`py-6 pr-4 sm:py-8 ${i % 2 === 1 ? "border-l border-black/10 pl-4 sm:pl-6" : ""} ${
                i >= 2 ? "border-t border-black/10 lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-l lg:pl-6" : ""}`}
            >
              <dt className="sr-only">{p.label}</dt>
              <dd>
                <span className="block text-3xl font-semibold tracking-tight sm:text-4xl">{p.value}</span>
                <span className="mt-1.5 block text-sm leading-snug text-ink-muted">{p.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Work */

function FeaturedProject({ p, index }: { p: Project; index: number }) {
  const flip = index % 2 === 1;
  const shot = p.shots?.[0];
  const href = `/work/${p.slug}`;
  return (
    <article className="grid gap-8 border-t border-black/10 py-12 first:border-t-0 first:pt-0 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-14">
      <Link
        href={href}
        aria-label={`${p.name} case study`}
        className={`group block self-start overflow-hidden rounded-2xl border border-black/10 bg-paper-raised shadow-[0_30px_60px_-30px_rgba(12,13,16,0.25)] ${
          flip ? "lg:order-2" : ""
        }`}
      >
        <div className="flex items-center gap-1.5 border-b border-black/10 bg-paper px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
          <span className="ml-3 truncate font-mono text-[11px] text-ink-muted">
            {(p.live ?? p.code ?? "").replace(/^https?:\/\//, "")}
          </span>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden">
          <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.02]">
            {shot ? (
              <Image src={shot.src} alt={shot.alt} fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover object-top" />
            ) : (
              <Cover motif={p.motif} />
            )}
          </div>
        </div>
      </Link>

      <div className="flex flex-col">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
          {String(index + 1).padStart(2, "0")} · {p.categories.join(" · ")}
        </p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          <Link href={href} className="hover:text-accent">
            {p.name}
          </Link>
        </h3>
        <p className="mt-2 text-base font-medium text-ink-muted">{p.subtitle}</p>
        <p className="mt-4 font-serif text-2xl leading-snug text-ink">{p.tagline}</p>
        <p className="mt-4 text-[17px] leading-relaxed text-ink-soft">{p.summary}</p>

        <dl className="mt-7 grid grid-cols-3 gap-3">
          {p.metrics.slice(0, 3).map((m) => (
            <div key={m.label} className="rounded-xl bg-paper-raised p-3.5 ring-1 ring-black/[0.07]">
              <dd className="text-xl font-semibold tracking-tight sm:text-2xl">{m.value}</dd>
              <dt className="mt-1 text-xs leading-snug text-ink-muted">{m.label}</dt>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={href} className="btn-primary">
            Read the case study <ArrowRight />
          </Link>
          {p.live && (
            <ExtLink href={p.live} className="btn-ghost">
              Try it live
            </ExtLink>
          )}
        </div>
      </div>
    </article>
  );
}

function Work() {
  return (
    <section id="work" className="section border-t border-black/10">
      <div className="container-content">
        <SectionHead
          label="01 · Selected work"
          title={
            <>
              Things I&apos;ve built, shipped, <span className="font-serif font-normal italic text-accent">and tested.</span>
            </>
          }
        >
          Real, running systems with public code. Each one has a case study on how it works and why it&apos;s built that
          way.
        </SectionHead>

        <div>
          {featuredProjects.map((p, i) => (
            <FeaturedProject key={p.slug} p={p} index={i} />
          ))}
        </div>

        <div className="mt-8 border-t border-black/10 pt-16">
          <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
            <h3 className="text-2xl font-semibold tracking-tight">More projects</h3>
            <Link href="/work" className="link-arrow">
              All {projects.length} projects <ArrowRight />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.slice(0, 6).map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Experience */

function ExperienceSection() {
  return (
    <section id="experience" className="section bg-night text-white">
      <div className="container-content">
        <div className="section-head">
          <p className="section-label !text-white/50">02 · Experience</p>
          <h2 className="section-title !text-white">
            Where I&apos;ve <span className="font-serif font-normal italic text-accent-bright">worked.</span>
          </h2>
        </div>

        <div className="space-y-14">
          {(["Technical", "Leadership & Community"] as const).map((group) => (
            <div key={group}>
              <h3 className="mb-2 font-mono text-xs uppercase tracking-[0.16em] text-accent-bright">{group} experience</h3>
        <ol className="divide-y divide-night-line border-y border-night-line">
          {experience.filter((e) => e.group === group).map((e) => (
            <li key={e.role + e.org} className="grid gap-4 py-8 md:grid-cols-[12rem_1fr] md:gap-8">
              <div className="font-mono text-xs leading-relaxed text-white/50">
                <p>{e.period}</p>
                <p>{e.location}</p>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-xl font-semibold tracking-tight">{e.role}</h3>
                  {e.current && (
                    <span className="rounded-full border border-accent-bright/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-bright">
                      Now
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-white/60">{e.org}</p>
                <ul className="mt-4 max-w-3xl space-y-2">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-[15px] leading-relaxed text-white/75">
                      <span aria-hidden="true" className="mt-[0.6rem] h-px w-3 shrink-0 bg-white/40" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Skills */

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-content">
        <SectionHead
          label="03 · Skills"
          title={
            <>
              The toolkit, <span className="font-serif font-normal italic text-accent">in practice.</span>
            </>
          }
        >
          What I reach for across projects, coursework, Kaggle and BananaBots.
        </SectionHead>

        <dl className="divide-y divide-black/10 border-y border-black/10">
          {skillGroups.map((g) => (
            <div key={g.label} className="grid gap-3 py-6 md:grid-cols-[12rem_1fr] md:gap-8">
              <dt className="pt-1 text-sm font-semibold">{g.label}</dt>
              <dd className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- About */

function About() {
  return (
    <section id="about" className="section border-t border-black/10">
      <div className="container-content">
        <SectionHead label="04 · About" title="A bit more about me." />

        <div className="grid gap-14 md:grid-cols-[12rem_1fr] md:gap-8">
          <div className="hidden md:block" />
          <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
              {profile.about.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>

            <div className="space-y-10">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">Education</h3>
                <ul className="mt-4 space-y-5">
                  {education.map((ed) => (
                    <li key={ed.school}>
                      <p className="font-semibold">{ed.school}</p>
                      <p className="text-[15px] text-ink-soft">{ed.credential}</p>
                      <p className="font-mono text-xs text-ink-muted">{ed.period}</p>
                      {ed.detail && <p className="mt-2 text-sm leading-relaxed text-ink-muted">{ed.detail}</p>}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">By the numbers</h3>
                <dl className="mt-4 grid grid-cols-2 gap-3">
                  {achievements.map((a) => (
                    <div key={a.label} className="rounded-xl bg-paper-raised p-4 ring-1 ring-black/[0.07]">
                      <dd className="text-2xl font-semibold tracking-tight">{a.value}</dd>
                      <dt className="mt-1 text-xs leading-snug text-ink-muted">{a.label}</dt>
                    </div>
                  ))}
                </dl>
                <div className="mt-4 flex flex-wrap gap-2">
                  {extracurriculars.map((x) => (
                    <span key={x} className="chip">
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <Work />
        <ExperienceSection />
        <Skills />
        <About />
      </main>
      <SiteFooter label="05 · Contact" />
    </>
  );
}
