import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/data/resume";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

type ProjectsSectionProps = {
  projects?: Project[];
  eyebrow?: string;
  heading?: string;
  description?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export default function ProjectsSection({
  projects = DATA.projects,
  eyebrow = "Selected Projects",
  heading = "The work I want people to remember",
  description = "A short list from the wider archive.",
  ctaHref,
  ctaLabel,
}: ProjectsSectionProps) {
  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-7">
        <div className="flex flex-col gap-y-4 border-t border-border/40 pt-5">
          <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
            {eyebrow}
          </div>
          <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-[2.6rem]">
                {heading}
              </h2>
              {description ? (
                <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                  {description}
                </p>
              ) : null}
            </div>
            {ctaHref && ctaLabel ? (
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 self-start text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {ctaLabel}
                <ArrowRight className="size-4" />
              </Link>
            ) : null}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 auto-rows-fr">
          {projects.map((project, id) => (
            <BlurFade
              key={project.slug}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              className="h-full"
            >
              <ProjectCard
                href={project.href}
                key={project.slug}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
