import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const navItems = [
  { name: "About", to: "about" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Skills", to: "skills" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-slate-950/70 border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3"
        >
          <div className="h-11 w-11 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center font-bold text-white text-lg">
            NR
          </div>

          <div>
            <h2 className="font-bold text-white text-lg">
              Nagarathinam
            </h2>

            <p className="text-xs text-slate-400">
              Software Engineer
            </p>
          </div>
        </motion.a>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-8">

          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              offset={-80}
              duration={500}
              className="relative cursor-pointer text-slate-300 hover:text-white transition"
            >
              {item.name}
            </Link>
          ))}

        </nav>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-4">

          <a
            href="https://github.com/"
            className="h-10 w-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            className="h-10 w-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="/resume.pdf"
            className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold hover:scale-105 transition"
          >
            Resume
          </a>

        </div>

        {/* Mobile */}

        <button
          className="lg:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>

      </div>

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="lg:hidden bg-slate-950 border-t border-slate-800"
          >
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                offset={-80}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-5 border-b border-slate-800"
              >
                {item.name}
              </Link>
            ))}

            <div className="p-6">

              <a
                href="/resume.pdf"
                className="block rounded-xl bg-blue-600 py-3 text-center"
              >
                Download Resume
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </header>
  );
}