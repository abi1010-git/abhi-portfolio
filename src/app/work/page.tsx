import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import WorkGrid from "@/components/WorkGrid";
import { ExtLink } from "@/components/ui";
import { links } from "@/data/content";
import { liveCount, projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work | Abhijith Aravind",
  description: "Case studies of data engineering, AI and machine learning projects by Abhijith Aravind.",
};

export default function WorkIndex() {
  return (
    <>
      <main className="pb-24 pt-28 sm:pt-36">
        <div className="container-content">
          <header className="mb-14 max-w-3xl animate-fade-up">
            <p className="section-label">Work · {projects.length} projects · {liveCount} live</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[1] tracking-[-0.03em] sm:text-7xl">
              Everything I&apos;ve <span className="font-serif font-normal italic text-accent">built.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Each project has a case study: the problem, how it works, the engineering decisions behind it, and what
              it still can&apos;t do. Most are live, so you can try them.
            </p>
          </header>

          <WorkGrid />

          <p className="mt-14 text-ink-muted">
            Smaller experiments and coursework live on{" "}
            <ExtLink href={links.github} className="link-arrow inline-flex">
              GitHub
            </ExtLink>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
