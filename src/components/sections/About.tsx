import { motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  MapPin,
  GraduationCap,
  Sparkles,
  Trophy,
} from "lucide-react";

const stats = [
  {
    value: "10+",
    label: "Years Experience",
  },
  {
    value: "30+",
    label: "Projects Delivered",
  },
  {
    value: "15+",
    label: "Technologies",
  },
  {
    value: "20+",
    label: "Enterprise Solutions",
  },
];

const highlights = [
  {
    icon: <Briefcase size={20} />,
    title: "Enterprise Software",
    description:
      "Building scalable business applications for startups and enterprises.",
  },
  {
    icon: <Code2 size={20} />,
    title: "Full Stack Development",
    description:
      "Laravel, React, TypeScript, PHP, Node.js, MySQL and REST APIs.",
  },
  {
    icon: <Sparkles size={20} />,
    title: "Modern Technologies",
    description:
      "Cloud integrations, AI solutions, payment systems and automation.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#020617] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-blue-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Enterprise software, crafted with 
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}
              precision


              
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I'm a Senior Software Engineer with over 10 years of experience
            developing enterprise software, FinTech platforms, ERP systems,
            REST APIs and modern web applications.
          </p>
        </motion.div>

        {/* Main Content */}

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Card */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl"
          >
            <h3 className="mb-6 text-2xl font-bold text-white">
              Professional Summary
            </h3>

            <p className="leading-8 text-slate-400">
              I specialise in designing and developing scalable web applications,
              enterprise platforms and cloud-based solutions. My expertise spans
              Laravel, React, TypeScript, PHP, Node.js, MySQL, AWS and API
              integrations.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-400" />
                <span className="text-slate-300">
                  Chennai, Tamil Nadu, India
                </span>
              </div>

              <div className="flex items-center gap-4">
                <GraduationCap className="text-blue-400" />
                <span className="text-slate-300">
                  Diploma in Information Technology
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Briefcase className="text-blue-400" />
                <span className="text-slate-300">
                  Senior Software Engineer
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Trophy className="text-blue-400" />
                <span className="text-slate-300">
                  Enterprise & FinTech Specialist
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Cards */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-blue-500/40 hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center backdrop-blur-xl"
            >
              <h3 className="text-5xl font-bold text-blue-400">
                {stat.value}
              </h3>

              <p className="mt-3 text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}