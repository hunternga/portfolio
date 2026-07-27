import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  FaGithub
} from "react-icons/fa";

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
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl"
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-56 w-full object-cover transition duration-500 hover:scale-105"
      />

      <div className="p-8">
        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-white"
          >
            <FaGithub size={18} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}