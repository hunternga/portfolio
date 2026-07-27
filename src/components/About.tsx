import { motion } from "framer-motion";
import { Code2, Briefcase, Database, Cpu } from "lucide-react";

const stats = [
  { number: "10+", title: "Years Experience" },
  { number: "30+", title: "Projects" },
  { number: "15+", title: "Technologies" },
  { number: "100%", title: "Client Focus" },
];

const features = [
  {
    icon: <Code2 size={28} />,
    title: "Frontend",
    desc: "React, TypeScript, Tailwind CSS",
  },
  {
    icon: <Database size={28} />,
    title: "Backend",
    desc: "Laravel, PHP, Node.js",
  },
  {
    icon: <Cpu size={28} />,
    title: "AI",
    desc: "OpenAI, MCP, Automation",
  },
  {
    icon: <Briefcase size={28} />,
    title: "Enterprise",
    desc: "ERP, CRM, FinTech",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
        >
          <h2 className="text-4xl font-bold text-center">
            About Me
          </h2>

          <p className="text-center text-gray-600 mt-6 max-w-3xl mx-auto leading-8">
            Senior Software Engineer with more than 10 years of
            experience building enterprise applications, payment
            systems, ERP, CRM, FinTech platforms and AI-powered
            software.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl shadow-lg p-8 text-center"
            >
              <h3 className="text-5xl font-bold text-blue-600">
                {item.number}
              </h3>
              <p className="mt-3">{item.title}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">

          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border p-8 hover:shadow-xl transition"
            >
              <div className="text-blue-600">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl mt-5">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-3">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}