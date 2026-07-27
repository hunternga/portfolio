import { motion } from "framer-motion";
// import { Github, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Featured Projects
        </h2>

        <p className="text-center mt-5 text-gray-500">
          Some of my recent work.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 mt-20">

          {projects.map((project) => (

            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-500 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="flex gap-4 mt-8">

                  {/* <a
                    href={project.github}
                    className="flex items-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-xl"
                  >
                    <Github size={18} />
                    GitHub
                  </a> */}

                  {/* <a
                    href={project.demo}
                    className="flex items-center gap-2 border px-5 py-3 rounded-xl"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a> */}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}