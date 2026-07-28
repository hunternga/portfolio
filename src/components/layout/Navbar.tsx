import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Download,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const navItems = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Contact",
];

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handle);

    return () => window.removeEventListener("scroll", handle);
  }, []);

  function scrollTo(id: string) {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    setMobile(false);
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
        }}
        className="fixed inset-x-0 top-5 z-50 flex justify-center px-5"
      >
        <motion.div
          animate={{
            width: scrolled ? "88%" : "95%",
            paddingTop: scrolled ? 10 : 14,
            paddingBottom: scrolled ? 10 : 14,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
          }}
          className="
          relative
          max-w-7xl
          rounded-full
          border
          border-white/10
          bg-white/5
          backdrop-blur-3xl
          shadow-[0_10px_60px_rgba(0,0,0,.45)]
          "
        >
          {/* Gradient Border */}

          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-transparent to-violet-500/20" />

          {/* Blur */}

          <div className="absolute inset-0 rounded-full bg-black/20" />

          <div className="relative flex items-center justify-between px-8">

            {/* Logo */}

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-xl font-black tracking-tight text-white"
            >
              Nagarathinam R
            </motion.button>

            {/* Desktop */}

            <div className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ y: -2 }}
                  onClick={() => scrollTo(item)}
                  className="relative text-sm font-medium text-slate-300 transition hover:text-white"
                >
                  {item}
                </motion.button>
              ))}
            </div>

            {/* Right */}

            <div className="hidden items-center gap-3 lg:flex">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/hunternga/"
                target="_blank"
                className="rounded-full bg-white/5 p-2 text-slate-300 hover:bg-white/10"
              >
                <FaGithub size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/nagarathinamr8/"
                target="_blank"
                className="rounded-full bg-white/5 p-2 text-slate-300 hover:bg-white/10"
              >
                <FaLinkedin size={18} />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.05,
                }}
                href="/Nagarathinam-Resume.pdf"
                className="ml-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 text-sm font-semibold text-white"
              >
                <span className="flex items-center gap-2">
                  <Download size={16} />
                  Resume
                </span>
              </motion.a>
            </div>

            {/* Mobile */}

            <button
              onClick={() => setMobile(!mobile)}
              className="text-white lg:hidden"
            >
              {mobile ? <X /> : <Menu />}
            </button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu */}

      {mobile && (
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
          fixed
          left-5
          right-5
          top-24
          z-50
          rounded-3xl
          border
          border-white/10
          bg-black/50
          p-6
          backdrop-blur-3xl
          lg:hidden
          "
        >
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-left text-white"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}