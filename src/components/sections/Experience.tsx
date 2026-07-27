import { motion } from "framer-motion";
import TimelineCard from "../ui/TimelineCard";
import { experiences } from "../../data/experiences";

export default function Experience() {
  return (
    <section
      id="experience"
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
          className="mb-20 text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-400">
            Career Journey
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Professional Experience
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Over a decade of building enterprise software,
            FinTech platforms and scalable web applications.
          </p>
        </motion.div>

        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-1/2 hidden h-full w-[2px] -translate-x-1/2 bg-slate-700 lg:block" />

          <div className="space-y-20">
            {experiences.map((experience, index) => (
              <TimelineCard
                key={experience.company}
                experience={experience}
                index={index}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}