import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#020617] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
            Portfolio
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            A selection of enterprise applications, FinTech platforms,
            and modern web solutions I've designed and developed.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}