import ProjectCard from '@/components/ProjectCard';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a12]">
      <main className="mx-auto max-w-[1200px] px-6 py-20">
        <AnimateOnScroll>
          <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-[#e4e4e7]">
            Projects
          </h2>
          <p className="mb-10 text-sm text-slate-500 dark:text-[#a1a1aa]">
            Production-grade applications built with modern JavaScript, Python,
            and AI
          </p>
        </AnimateOnScroll>
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <AnimateOnScroll key={project.id} delay={index * 150}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tech={project.tech}
                github={project.github}
                demo={project.demo}
                image={project.image}
                imageAlt={project.imageAlt}
                highlights={project.highlights}
                featured={index === 0}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </main>
    </div>
  );
}
