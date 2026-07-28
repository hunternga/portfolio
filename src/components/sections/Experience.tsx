import { motion } from "framer-motion";
import TimelineCard from "../ui/TimelineCard";
import { experiences } from "../../data/experiences";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#020617] py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-150px] top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute right-[-150px] bottom-20 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="mx-auto mb-24 max-w-4xl text-center"
        >
          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl">
            <span className="text-sm font-semibold tracking-wider text-cyan-300">
              💼 PROFESSIONAL EXPERIENCE
            </span>
          </div>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
            Building
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Enterprise Software
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Over <span className="font-semibold text-white">10+ years</span> of
            delivering scalable enterprise applications across
            <span className="font-semibold text-cyan-300">
              {" "}FinTech
            </span>,
            <span className="font-semibold text-violet-300">
              {" "}ERP
            </span>,
            <span className="font-semibold text-emerald-300">
              {" "}CRM
            </span>,
            <span className="font-semibold text-pink-300">
              {" "}Telemedicine
            </span>,
            <span className="font-semibold text-amber-300">
              {" "}Gaming
            </span>,
            and
            <span className="font-semibold text-sky-300">
              {" "}Payment Systems
            </span>.
          </p>

          {/* Stats */}

          <div className="mt-14 flex flex-wrap items-center justify-center gap-5">

            {[
              {
                value: "10+",
                label: "Years",
                color: "from-cyan-500 to-blue-500",
              },
              {
                value: "5",
                label: "Companies",
                color: "from-violet-500 to-fuchsia-500",
              },
              {
                value: "8+",
                label: "Domains",
                color: "from-emerald-500 to-teal-500",
              },
              {
                value: "25+",
                label: "Technologies",
                color: "from-orange-500 to-pink-500",
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{
                  y: -6,
                  scale: 1.05,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="rounded-2xl border border-white/10 bg-white/5 px-7 py-5 backdrop-blur-2xl"
              >
                <div
                  className={`bg-gradient-to-r ${item.color} bg-clip-text text-3xl font-black text-transparent`}
                >
                  {item.value}
                </div>

                <div className="mt-1 text-sm text-slate-400">
                  {item.label}
                </div>
              </motion.div>
            ))}

          </div>

        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Gradient Timeline */}

          <div className="absolute left-1/2 hidden h-full w-[4px] -translate-x-1/2 overflow-hidden rounded-full bg-slate-800 lg:block">
            <div className="h-full w-full bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500" />
          </div>

          {/* Timeline Cards */}

          <div className="space-y-24">
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