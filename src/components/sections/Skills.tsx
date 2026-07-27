import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Server,
  Wrench,
  BrainCircuit,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "jQuery",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "PHP",
      "Laravel",
      "CodeIgniter",
      "Node.js",
      "REST API",
      "JWT",
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "Redis",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS",
      "Docker",
      "Git",
      "GitHub",
      "Bitbucket",
      "Linux",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "VS Code",
      "Postman",
      "Figma",
      "Jira",
      "Composer",
      "NPM",
    ],
  },
  {
    title: "Other Expertise",
    icon: BrainCircuit,
    skills: [
      "ERP",
      "CRM",
      "FinTech",
      "AI Integration",
      "Payment Gateway",
      "System Design",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#020617] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="font-semibold uppercase tracking-[0.35em] text-blue-400">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Technologies &
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Expertise
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Over 10 years of experience delivering enterprise software,
            cloud-native applications and scalable digital products using
            modern technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl transition-all hover:border-blue-500/40"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                  <Icon size={30} />
                </div>

                <h3 className="mb-6 text-2xl font-bold text-white">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-700 bg-slate-800/70 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}