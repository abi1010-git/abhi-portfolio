import Image from "next/image";
import NavBar from "@/components/NavBar";
import {
  profile,
  links,
  socials,
  stats,
  highlights,
  skillGroups,
  projects,
  kaggle,
  experience,
  education,
  chess,
  interests,
} from "@/data/content";

export default function Home() {
  return (
    <>
      <NavBar />
      <main id="top">
        <Hero />
        <StatsBand />
        <About />
        <Skills />
        <Projects />
        <Kaggle />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Section({
  id,
  label,
  title,
  alt,
  children,
}: {
  id: string;
  label: string;
  title: string;
  alt?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`section border-t border-black/5 ${alt ? "bg-white" : ""}`}
    >
      <div className="container-content">
        <div className="section-head">
          <span className="section-label">{label}</span>
          <span className="h-px flex-1 bg-black/10" />
        </div>
        <h2 className="section-title">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-accent-soft/60 blur-3xl" />
      <div className="container-content grid items-center gap-12 pb-16 pt-32 sm:pt-36 lg:grid-cols-5 lg:gap-8">
        <div className="animate-fade-up lg:col-span-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Available for Data Engineering &amp; AI/ML internships
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-sm uppercase tracking-[0.2em] text-accent">
            {profile.title}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              View Live Apps
            </a>
            <a
              href="#contact"
              className="rounded-full border border-black/15 px-6 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              Get in Touch
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>

        <div className="animate-fade-up lg:col-span-2">
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_8px_40px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 flex-none overflow-hidden rounded-full ring-1 ring-black/10">
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  fill
                  priority
                  sizes="64px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="font-semibold text-ink">{profile.name}</p>
                <p className="text-sm text-ink-muted">{profile.location}</p>
              </div>
            </div>
            <dl className="mt-6 space-y-4 border-t border-black/5 pt-5 text-sm">
              <Fact term="Focus" value="Data Engineering · ML · AI" />
              <Fact term="Studying" value="B.S. Computer Science, UC Santa Cruz" />
              <Fact term="Seeking" value="Data Engineering & AI/ML Internships" />
            </dl>
            <div className="mt-6 flex flex-wrap gap-2 border-t border-black/5 pt-5">
              {highlights.map((h) => (
                <span key={h} className="tag">
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Fact({ term, value }: { term: string; value: string }) {
  return (
    <div className="flex gap-4">
      <dt className="w-20 flex-none font-mono text-xs uppercase tracking-widest text-ink-muted">
        {term}
      </dt>
      <dd className="text-ink">{value}</dd>
    </div>
  );
}

function StatsBand() {
  return (
    <section className="border-y border-black/10 bg-white">
      <div className="container-content grid grid-cols-2 divide-x divide-black/5 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="px-2 py-8 text-center first:pl-0 sm:text-left">
            <p className="text-3xl font-semibold tracking-tight text-ink">
              {s.value}
            </p>
            <p className="mt-1 text-xs text-ink-muted sm:text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" label="01 — About" title="Turning data into intelligent systems">
      <div className="grid gap-8 md:grid-cols-5">
        <p className="text-lg leading-relaxed text-ink-soft md:col-span-3">
          {profile.summary}
        </p>
        <div className="space-y-3 md:col-span-2">
          {[
            "End-to-end ML pipelines — preprocessing to evaluation",
            "Ensemble modeling & probability calibration",
            "Cloud-based analytics on AWS S3 & EC2",
            "Dashboards in Tableau & Power BI",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-lg border border-black/5 bg-white px-4 py-3 text-sm text-ink-soft"
            >
              <span className="mt-0.5 font-mono text-accent">→</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" label="02 — Skills" title="Technical toolkit" alt>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div key={group.label} className="card">
            <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-muted">
              {group.label}
            </h3>
            <ul className="space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" label="03 — Apps & Projects" title="Live apps you can try">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div key={p.name} className="card flex flex-col">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold text-ink">{p.name}</h3>
              {p.live && (
                <span className="inline-flex flex-none items-center gap-1.5 rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-green-600/20">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                  Live
                </span>
              )}
            </div>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
              {p.blurb}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-3 border-t border-black/5 pt-4">
              {p.live ? (
                <>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                  >
                    ▶ Launch app
                  </a>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
                  >
                    Code ↗
                  </a>
                  {p.platform && (
                    <span className="ml-auto font-mono text-xs text-ink-muted">
                      {p.platform}
                    </span>
                  )}
                </>
              ) : (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/15 px-4 py-1.5 text-sm font-medium text-ink transition-colors hover:border-ink"
                >
                  View code ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-ink-soft">
        More on{" "}
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-accent underline-offset-4 hover:underline"
        >
          GitHub ↗
        </a>
      </p>
    </Section>
  );
}

function Kaggle() {
  return (
    <Section id="kaggle" label="04 — Competitions" title="Kaggle & applied ML" alt>
      <p className="max-w-2xl text-lg text-ink-soft">{kaggle.summary}</p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {kaggle.achievements.map((a, i) => (
          <div key={a.title} className="card flex flex-col">
            <span className="font-mono text-xs text-ink-muted">
              0{i + 1}
            </span>
            <h3 className="mt-2 text-base font-semibold leading-snug text-ink">
              {a.title}
            </h3>
            <p className="mt-2 text-sm text-ink-soft">{a.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" label="05 — Experience" title="Where I've contributed">
      <div className="relative space-y-8 border-l border-black/10 pl-6 sm:pl-8">
        {experience.map((e) => (
          <div key={`${e.role}-${e.org}`} className="relative">
            <span className="absolute -left-[1.6rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-paper bg-accent sm:-left-[2.1rem]" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-ink">
                {e.role}{" "}
                <span className="font-normal text-accent">· {e.org}</span>
              </h3>
              <p className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                {e.period}
              </p>
            </div>
            <p className="text-sm text-ink-muted">{e.location}</p>
            <ul className="mt-3 space-y-2">
              {e.points.map((pt) => (
                <li
                  key={pt}
                  className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                >
                  <span className="mt-2 h-1 w-1 flex-none rounded-full bg-ink-muted" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" label="06 — Education" title="Academics & beyond" alt>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-5 lg:col-span-2">
          {education.map((ed) => (
            <div
              key={ed.school}
              className="rounded-xl border border-black/10 bg-white p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-base font-semibold text-ink">
                  {ed.credential}
                </h3>
                <p className="font-mono text-xs uppercase tracking-widest text-ink-muted">
                  {ed.period}
                </p>
              </div>
              <p className="text-sm text-accent">{ed.school}</p>
              {ed.detail && (
                <p className="mt-2 text-sm text-ink-soft">{ed.detail}</p>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-5">
          <div className="rounded-xl border border-black/10 bg-white p-5">
            <h3 className="font-mono text-xs uppercase tracking-widest text-ink-muted">
              Chess
            </h3>
            <div className="mt-3 grid grid-cols-3 gap-2">
              <Stat label="Regular" value={chess.regular} />
              <Stat label="Quick" value={chess.quick} />
              <Stat label="Blitz" value={chess.onlineBlitz} />
            </div>
            <p className="mt-3 text-xs text-ink-muted">{chess.note}</p>
          </div>
          <div className="rounded-xl border border-black/10 bg-white p-5">
            <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-muted">
              Interests
            </h3>
            <ul className="space-y-2">
              {interests.map((i) => (
                <li key={i} className="flex gap-3 text-sm text-ink-soft">
                  <span className="mt-2 h-1 w-1 flex-none rounded-full bg-ink-muted" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg bg-paper px-2 py-3 text-center">
      <p className="text-xl font-semibold tracking-tight text-ink">{value}</p>
      <p className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
        {label}
      </p>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="section border-t border-black/5">
      <div className="container-content">
        <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-ink px-8 py-14 text-center sm:px-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
          <p className="section-label">07 — Contact</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
            Let&apos;s build something intelligent.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Open to data engineering and AI/ML internships. Reach me on LinkedIn,
            or explore my code on GitHub.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-ink transition-opacity hover:opacity-90"
            >
              Connect on LinkedIn
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/25 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:border-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/10 py-10">
      <div className="container-content flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-ink-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs text-ink-muted">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
