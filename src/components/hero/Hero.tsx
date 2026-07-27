import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ScrollIndicator from "./ScrollIndicator";
import ProfileCard from "./ProfileCard"
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import {
  ArrowRight,
  Download,
} from "lucide-react";

import AnimatedGradient from "../liquid/AnimatedGradient";
import NoiseOverlay from "../liquid/NoiseOverlay";
import LiquidButton from "../liquid/LiquidButton";

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

          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
            Nagarathinam
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              R
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
              speed={45}
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            Building scalable enterprise applications,
            FinTech platforms, REST APIs and modern web
            experiences using Laravel, React,
            TypeScript and Cloud technologies.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

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

          </div>

          {/* Social */}

          <div className="mt-10 flex gap-5">

            {[
              FaGithub,
              FaLinkedin,
              FaEnvelope,
            ].map((Icon, index) => (
              <motion.a
                whileHover={{
                  scale: 1.15,
                  y: -4,
                }}
                key={index}
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-lg text-slate-300 backdrop-blur-xl transition hover:border-blue-500 hover:text-white"
              >
                <Icon />
              </motion.a>
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