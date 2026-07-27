import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Database,
  Cloud,
  Cpu,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Modern, scalable and responsive web applications using React, Laravel and TypeScript.",
  },
  {
    icon: Smartphone,
    title: "REST API Development",
    description:
      "Secure and high-performance RESTful APIs with authentication, documentation and third-party integrations.",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Optimized MySQL database architecture, performance tuning and scalable data management.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description:
      "Deploy applications on AWS, Docker and cloud infrastructure with CI/CD pipelines.",
  },
  {
    icon: Cpu,
    title: "Enterprise Software",
    description:
      "ERP, CRM, FinTech and custom business software tailored to your organization's needs.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Support",
    description:
      "Continuous monitoring, security updates, bug fixes and long-term application support.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#020617] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Services
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            What I Can
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Build
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Helping businesses build scalable software, enterprise platforms,
            cloud-native applications and modern digital experiences.
          </p>
        </motion.div>

        {/* Services Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl transition-all hover:border-blue-500/40"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {service.description}
                </p>

                <div className="mt-8">
                  <button className="text-blue-400 transition hover:text-white">
                    Learn More →
                  </button>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}