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
  className="relative isolate min-h-screen bg-slate-950 pt-28"
>
  {/* Background */}
  <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
    <AnimatedGradient />
    <NoiseOverlay />
  </div>

  <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center px-6">
    <div className="grid w-full grid-cols-1 items-center gap-20 lg:grid-cols-2">

      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Nagarathinam
          </span>
        </h1>

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
            speed={60}
            repeat={Infinity}
            cursor
          />
        </div>

        <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
          I build scalable, secure, and user-centric software that transforms
          complex business challenges into elegant digital solutions. With 10+
          years of experience delivering enterprise-grade SaaS, ERP, FinTech,
          Payments, and Cloud solutions.
        </p>

        {/* Expertise */}
        <div className="mt-12 flex flex-wrap gap-4">
          {expertise.map(({ icon: Icon, label, color }) => (
            <motion.div
              key={label}
              whileHover={{
                y: -6,
                scale: 1.05,
              }}
              whileTap={{ scale: 0.97 }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 22,
              }}
              className="group relative overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${color} opacity-10 blur-xl transition group-hover:opacity-20`}
              />

              <div className="relative flex items-center gap-3 px-4 py-2">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${color}`}
                >
                  <Icon className="text-white" />
                </div>

                <span className="font-medium text-white">
                  {label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex justify-center"
      >
        <ProfileCard />
      </motion.div>

    </div>
  </div>

  <ScrollIndicator />
</section>
  );
}

<ScrollIndicator />