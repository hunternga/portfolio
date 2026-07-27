import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50"
    >
      {/* Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-blue-600 font-semibold tracking-widest uppercase">
            Hello, I'm
          </p>

          <h1 className="mt-4 text-5xl md:text-7xl font-extrabold leading-tight">
            Nagarathinam <br />
            <span className="text-blue-600">R</span>
          </h1>

          <div className="mt-6 text-2xl md:text-3xl font-semibold text-gray-700">
            <TypeAnimation
              sequence={[
                "Senior Software Engineer",
                2000,
                "Laravel Developer",
                2000,
                "React Developer",
                2000,
                "AI Enthusiast",
                2000,
              ]}
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 text-gray-600 text-lg leading-8 max-w-xl">
            I build enterprise web applications, FinTech platforms,
            AI-powered software and scalable APIs using Laravel,
            React, TypeScript and cloud technologies.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#contact"
              className="rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold hover:bg-blue-700 transition"
            >
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              className="rounded-xl border border-gray-300 px-8 py-4 font-semibold flex items-center gap-2 hover:bg-white transition"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          <div className="flex gap-5 mt-10">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
              <Github className="hover:text-blue-600 transition" />
            </a>

            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
              <Linkedin className="hover:text-blue-600 transition" />
            </a>

            <a href="mailto:you@example.com">
              <Mail className="hover:text-blue-600 transition" />
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-20" />

            <img
              src="/profile.png"
              alt="Nagarathinam R"
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-8 border-white shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}