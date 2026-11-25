import { links, profile, socials } from "@/data/content";
import { ExtLink } from "@/components/ui";

export default function SiteFooter({ label = "Contact" }: { label?: string }) {
  return (
    <>
      <section id="contact" className="section bg-night text-white">
        <div className="container-content">
          <p className="section-label !text-white/50">{label}</p>
          <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Hiring for a data or AI internship?{" "}
            <span className="font-serif font-normal italic text-accent-bright">Let&apos;s talk.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
            The fastest way to reach me is a message on LinkedIn. All my code is on GitHub.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ExtLink href={links.linkedin} className="btn bg-white text-ink hover:bg-accent-bright hover:text-white">
              Message me on LinkedIn
            </ExtLink>
            {socials
              .filter((s) => s.href !== links.linkedin)
              .map((s) => (
                <ExtLink key={s.label} href={s.href} className="btn border border-white/20 text-white hover:border-white">
                  {s.label}
                </ExtLink>
              ))}
          </div>
        </div>
      </section>
      <footer className="bg-night text-white/45">
        <div className="container-content flex flex-col gap-2 border-t border-night-line py-8 font-mono text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </footer>
    </>
  );
}
