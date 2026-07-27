import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-slate-800 bg-[#020617]">

      {/* Top Glow */}
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-3">

          {/* Brand */}

          <div>
            <motion.h2
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-3xl font-black text-transparent"
            >
              Nagarathinam R
            </motion.h2>

            <p className="mt-5 leading-8 text-slate-400">
              Senior Software Engineer with 10+ years of experience building
              enterprise software, FinTech platforms and modern web applications.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-700 p-3 text-slate-400 transition hover:border-blue-500 hover:text-white"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-700 p-3 text-slate-400 transition hover:border-blue-500 hover:text-white"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="mailto:your@email.com"
                className="rounded-xl border border-slate-700 p-3 text-slate-400 transition hover:border-blue-500 hover:text-white"
              >
                <FaEnvelope size={20} />
              </a>

            </div>

          </div>

          {/* Navigation */}

          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 transition hover:text-blue-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Get In Touch
            </h3>

            <div className="space-y-4 text-slate-400">

              <p>
                📍 Chennai, Tamil Nadu, India
              </p>

              <p>
                📧 your@email.com
              </p>

              <p>
                📱 +91 XXXXX XXXXX
              </p>

            </div>

            <button
              onClick={scrollToTop}
              className="mt-8 flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white transition hover:scale-105"
            >
              <FaArrowUp size={18} />
              Back to Top
            </button>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 border-t border-slate-800 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="flex items-center gap-2 text-slate-500">
              © {new Date().getFullYear()} Nagarathinam R. All rights reserved.
            </p>

            <p className="flex items-center gap-2 text-slate-500">
              Built with
              <FaHeart
                size={16}
                className="fill-red-500 text-red-500"
              />
              React • TypeScript • Tailwind CSS
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}