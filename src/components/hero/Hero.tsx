import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ScrollIndicator from "./ScrollIndicator";
import ProfileCard from "./ProfileCard"
import {
  FaCloud,
  FaGamepad,
  FaCreditCard,
  FaServer,
} from "react-icons/fa";
import {
  MdPayments,
  MdBusinessCenter,
} from "react-icons/md";

import AnimatedGradient from "../liquid/AnimatedGradient";
import NoiseOverlay from "../liquid/NoiseOverlay";

const expertise = [
  {
    icon: MdBusinessCenter,
    label: "SaaS",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: FaServer,
    label: "ERP",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: FaCloud,
    label: "Cloud",
    color: "from-sky-500 to-cyan-500",
  },
  {
    icon: FaCreditCard,
    label: "FinTech",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: MdPayments,
    label: "Payments",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: FaGamepad,
    label: "Gaming",
    color: "from-indigo-500 to-blue-500",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 bg-[#020617]"
    >
      <AnimatedGradient />
      <NoiseOverlay />

      <div className="relative z-20 mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >
          {/* <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">
            🚀 Available for Opportunities
          </span> */}

          <h3 className="mt-8 text-4xl font-black leading-tight text-white md:text-7xl">
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Nagarathinam
            </span>
          </h3>

          <div className="mt-6 text-2xl font-semibold text-slate-300 md:text-3xl">
            <TypeAnimation
              sequence={[
                "Senior Software Engineer",
                2500,
                "Laravel Expert",
                2500,
                "React Developer",
                2500,
                "Full Stack Engineer",
                2500,
              ]}
              speed={45}
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            I build scalable, secure, and user-centric software that transforms complex business challenges into elegant digital solutions. With 10+ years of experience, I focus on creating enterprise-grade applications that combine performance, reliability, and exceptional user experiences.
          </p>

          {/* Buttons */}

          {/* <div className="mt-10 flex flex-wrap gap-5">

            <LiquidButton
              href="#projects"
            >
              View Projects

              <ArrowRight size={18} />
            </LiquidButton>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: .95 }}
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/50 px-8 py-4 text-white backdrop-blur-xl"
            >
              <Download size={18} />

              Resume
            </motion.a>

          </div> */}

          {/* Social */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {expertise.map(({ icon: Icon, label, color }) => (
              <motion.div
                key={label}
                whileHover={{
                  y: -6,
                  scale: 1.08,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 18,
                }}
                className="
        group
        relative
        overflow-hidden
        rounded-full
        border
        border-white/10
        bg-white/5
        backdrop-blur-2xl
        shadow-lg
      "
              >
                {/* Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${color} opacity-10 blur-xl group-hover:opacity-25 transition`}
                />

                <div className="relative flex items-center gap-3 px-4 py-2">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${color} text-white shadow-lg`}
                  >
                    <Icon className="text-lg" />
                  </div>

                  <span className="font-medium tracking-wide text-white">
                    {label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>


        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{
            opacity: 0,
            scale: .8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: .8,
          }}
          className="flex justify-center"
        >
          <ProfileCard />

        </motion.div>

      </div>
    </section>
  );
}

<ScrollIndicator />