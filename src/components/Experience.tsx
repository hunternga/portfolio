import { motion } from "framer-motion";

const experience = [
  {
    year: "2024 - Present",
    company: "PDI Software India LLP",
    role: "Software Engineer III",
  },
  {
    year: "2023 - 2024",
    company: "IndiaFilings",
    role: "Senior Software Engineer",
  },
  {
    year: "2020 - 2023",
    company: "Digient Technologies",
    role: "Senior Software Engineer",
  },
  {
    year: "2015 - 2020",
    company: "Software Developer",
    role: "PHP Developer",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 bg-slate-50"
    >
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-20">
          Experience
        </h2>

        <div className="border-l-4 border-blue-600 ml-6">

          {experience.map((item) => (
            <motion.div
              key={item.company}
              className="relative mb-14 pl-10"
              initial={{opacity:0,x:-30}}
              whileInView={{opacity:1,x:0}}
            >
              <span className="absolute -left-4 top-2 w-6 h-6 rounded-full bg-blue-600"></span>

              <p className="text-blue-600 font-semibold">
                {item.year}
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {item.role}
              </h3>

              <p className="text-gray-600 mt-2">
                {item.company}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}