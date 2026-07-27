import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";

interface TimelineCardProps {
  experience: {
    company: string;
    role: string;
    duration: string;
    location: string;
    technologies: string[];
    achievements: string[];
  };
  index: number;
}

export default function TimelineCard({
  experience,
  index,
}: TimelineCardProps) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`relative flex ${
        isLeft ? "lg:justify-start" : "lg:justify-end"
      }`}
    >
      <div className="w-full rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl lg:w-[46%]">

        <h3 className="text-2xl font-bold text-white">
          {experience.role}
        </h3>

        <h4 className="mt-2 text-lg font-semibold text-blue-400">
          {experience.company}
        </h4>

        <div className="mt-4 flex flex-wrap gap-5 text-sm text-slate-400">

          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            {experience.duration}
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} />
            {experience.location}
          </div>

        </div>

        <ul className="mt-6 space-y-3">
          {experience.achievements.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-slate-300"
            >
              <span className="text-blue-400">•</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </motion.div>
  );
}