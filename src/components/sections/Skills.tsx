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
    color: "from-cyan-500 to-blue-600",
    glow: "shadow-cyan-500/30",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "jQuery"],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-violet-500 to-purple-600",
    glow: "shadow-violet-500/30",
    skills: ["PHP", "Laravel", "CodeIgniter", "Node.js", "REST API", "JWT"],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-emerald-500 to-green-600",
    glow: "shadow-emerald-500/30",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-orange-500 to-red-500",
    glow: "shadow-orange-500/30",
    skills: ["AWS", "Docker", "Git", "GitHub", "Bitbucket", "Linux"],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "from-pink-500 to-rose-500",
    glow: "shadow-pink-500/30",
    skills: ["VS Code", "Postman", "Figma", "Jira", "Composer", "NPM"],
  },
  {
    title: "Other Expertise",
    icon: BrainCircuit,
    color: "from-yellow-400 to-amber-500",
    glow: "shadow-yellow-500/30",
    skills: ["ERP", "CRM", "FinTech", "AI Integration", "Payment Gateway", "System Design"],
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
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.08 }}
  whileHover={{ y: -12, scale: 1.02 }}
  className={`group relative overflow-hidden rounded-[30px] bg-slate-900 p-8 border border-white/10 transition-all duration-500 hover:shadow-2xl ${category.glow}`}
>
  {/* Gradient Background */}
  <div
    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 transition duration-500 group-hover:opacity-20`}
  />

  {/* Decorative Circle */}
  <div
    className={`absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${category.color} opacity-20 blur-3xl`}
  />

  <div className="relative z-10">
    {/* Icon */}
    <div
      className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg`}
    >
      <Icon size={30} />
    </div>

    {/* Title */}
    <h3 className="mb-6 text-2xl font-bold text-white">
      {category.title}
    </h3>

    {/* Skills */}
    <div className="flex flex-wrap gap-3">
      {category.skills.map((skill) => (
        <span
          key={skill}
          className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
</motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}