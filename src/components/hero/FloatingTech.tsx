import { motion } from "framer-motion";
import {
  FaReact,
  FaLaravel,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa6";

const technologies = [
  {
    id: 1,
    name: "React",
    icon: FaReact,
    color: "text-cyan-400",
    position: "top-2 left-0 lg:-left-16",
    duration: 5,
  },
  {
    id: 2,
    name: "Laravel",
    icon: FaLaravel,
    color: "text-red-500",
    position: "top-10 right-0 lg:-right-16",
    duration: 6,
  },
  {
    id: 3,
    name: "TypeScript",
    icon: TbBrandTypescript,
    color: "text-blue-500",
    position: "bottom-24 left-2 lg:-left-20",
    duration: 4.5,
  },
  {
    id: 4,
    name: "Docker",
    icon: FaDocker,
    color: "text-sky-500",
    position: "bottom-6 right-0 lg:-right-14",
    duration: 5.5,
  },
  {
    id: 5,
    name: "AWS",
    icon: FaAws,
    color: "text-orange-400",
    position: "top-1/2 -translate-y-1/2 -left-12",
    duration: 7,
  },
  {
    id: 6,
    name: "OpenAI",
    icon: FaNodeJs,
    color: "text-emerald-400",
    position: "top-1/2 -translate-y-1/2 -right-12",
    duration: 6.5,
  },
];

export default function FloatingTech() {
  return (
    <>
      {technologies.map((tech) => {
        const Icon = tech.icon;

        return (
          <motion.div
            key={tech.id}
            animate={{
              y: [0, -14, 0],
            }}
            transition={{
              duration: tech.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute ${tech.position} hidden md:flex`}
          >
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 backdrop-blur-xl shadow-2xl hover:scale-105 transition-all">

              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 ${tech.color}`}
              >
                <Icon className="text-xl" />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  {tech.name}
                </p>

                <p className="text-xs text-slate-400">
                  Expert
                </p>
              </div>

            </div>
          </motion.div>
        );
      })}
    </>
  );
}