import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProjectsSection from "@/components/section/projects-section";
import { DATA } from "@/data/resume";

const allProjects = [...DATA.projects].sort((a, b) => b.year - a.year);
const featuredCount = allProjects.filter((project) => project.featured).length;

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A complete archive of selected software, AI, and design projects by Yusuf.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-10">
      <section className="space-y-6">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-end">
          <div className="space-y-3">
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Projects
            </h1>
            <p className="max-w-xl text-base text-muted-foreground">
              Selected builds, experiments, and shipped work.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:border-l lg:border-border/50 lg:pl-8">
            <div className="flex gap-8">
              <div className="space-y-1">
                <div className="text-3xl font-semibold tracking-tight">
                  {allProjects.length}
                </div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Selected
                </p>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-semibold tracking-tight">
                  {featuredCount}
                </div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  On Home
                </p>
              </div>
            </div>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Back home
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <ProjectsSection
        projects={allProjects}
        eyebrow="Archive"
        heading="All projects"
        description=""
      />
    </main>
  );
}
