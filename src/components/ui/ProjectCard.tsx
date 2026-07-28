import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_30px_80px_rgba(34,211,238,.12)]"
    >
      {/* macOS Header */}
      <div className="flex items-center gap-2 border-b border-white/5 px-5 py-4">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />

        <span className="ml-auto text-xs tracking-[0.25em] text-slate-500 uppercase">
          Featured
        </span>
      </div>

      {/* Preview */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="aspect-[16/9] w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="space-y-6 p-8">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-white">
            {project.title}
          </h3>

          <p className="mt-3 leading-7 text-slate-400">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/10 pt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-slate-400 transition hover:text-white"
          >
            View Source
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:gap-3 hover:text-cyan-300"
          >
            View Project
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}