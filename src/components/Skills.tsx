import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Cpu,
  GitBranch,
  Server,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 size={28} />,
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    icon: <Server size={28} />,
    skills: [
      "PHP",
      "Laravel",
      "CodeIgniter",
      "Node.js",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    title: "Database",
    icon: <Database size={28} />,
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "SQLite",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud size={28} />,
    skills: [
      "AWS",
      "Docker",
      "Git",
      "GitHub",
      "CI/CD",
      "Linux",
    ],
  },
  {
    title: "Tools",
    icon: <GitBranch size={28} />,
    skills: [
      "VS Code",
      "Postman",
      "Figma",
      "Jira",
      "Bitbucket",
      "Composer",
      "NPM",
    ],
  },
  {
    title: "AI",
    icon: <Cpu size={28} />,
    skills: [
      "OpenAI API",
      "Prompt Engineering",
      "MCP",
      "LangChain",
      "AI Automation",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center">
            Technical Skills
          </h2>

          <p className="text-center text-gray-500 mt-4">
            Technologies and tools I use to build scalable applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              whileHover={{ y: -8 }}
              className="rounded-3xl border bg-white shadow-lg p-8"
            >
              <div className="flex items-center gap-3 text-blue-600">
                {category.icon}
                <h3 className="text-xl font-bold">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}