import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 30;

      setScrolled((prev) =>
        prev === isScrolled ? prev : isScrolled
      );

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];

      const current =
        sections.findLast(
          (section) =>
            window.scrollY >= section.offsetTop - 120
        ) || sections[0];

      if (current) {
        setActive(current.id);
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const currentIndex = useMemo(
    () =>
      navItems.findIndex((item) => item.id === active),
    [active]
  );

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-x-0 top-5 z-50 flex justify-center px-5"
      >
        <motion.div
          animate={{
            scale: scrolled ? 0.97 : 1,
            y: scrolled ? -2 : 0,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`
          relative
          w-full
          max-w-7xl
          rounded-full
          border
          border-white/[0.08]
          bg-white/[0.04]
          backdrop-blur-3xl
          shadow-[0_20px_80px_rgba(0,0,0,.45)]
          transition-all
          duration-300
          ${scrolled ? "py-2" : "py-3"}
          `}
        >
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/15 via-transparent to-violet-500/15" />

          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent" />

          <div className="relative flex items-center justify-between px-8">
            <motion.button
              whileHover={{ scale: 1.03 }}
              onClick={() => scrollTo("home")}
              className="text-xl font-bold tracking-tight text-white"
            >
              Nagarathinam R
            </motion.button>

            <div className="relative hidden items-center gap-8 lg:flex">
              {currentIndex >= 0 && (
                <motion.div
                  layout
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                  className="absolute h-10 rounded-full bg-white/8"
                  style={{
                    width: 74,
                    left: currentIndex * 74,
                  }}
                />
              )}

              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative z-10 px-3 py-2 text-sm font-medium transition-colors ${
                    active === item.id
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.96 }}
                href="https://github.com/hunternga"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/5 p-2.5 text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <FaGithub size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.96 }}
                href="https://linkedin.com/in/nagarathinamr8"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/5 p-2.5 text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <FaLinkedin size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                href="/Nagarathinam-Resume.pdf"
                className="ml-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20"
              >
                <span className="flex items-center gap-2">
                  <Download size={16} />
                  Resume
                </span>
              </motion.a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-full p-2 text-white transition hover:bg-white/10 lg:hidden"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </motion.div>
      </motion.nav>
            {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            />

            {/* Menu */}
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.96,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
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
                bg-slate-950/80
                backdrop-blur-3xl
                shadow-[0_20px_80px_rgba(0,0,0,.45)]
                lg:hidden
              "
            >
              <div className="p-6">
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      whileTap={{ scale: 0.98 }}
                      whileHover={{ x: 6 }}
                      onClick={() => scrollTo(item.id)}
                      className={`
                        flex
                        w-full
                        items-center
                        justify-between
                        rounded-2xl
                        px-4
                        py-3
                        text-left
                        transition-all
                        ${
                          active === item.id
                            ? "bg-white/10 text-white"
                            : "text-slate-300 hover:bg-white/5 hover:text-white"
                        }
                      `}
                    >
                      <span className="font-medium">
                        {item.name}
                      </span>

                      {active === item.id && (
                        <motion.div
                          layoutId="mobileIndicator"
                          className="h-2 w-2 rounded-full bg-cyan-400"
                        />
                      )}
                    </motion.button>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <a
                    href="https://github.com/hunternga"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
                  >
                    <FaGithub size={18} />
                  </a>

                  <a
                    href="https://linkedin.com/in/nagarathinamr8"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
                  >
                    <FaLinkedin size={18} />
                  </a>

                  <a
                    href="/Nagarathinam-Resume.pdf"
                    className="
                      ml-auto
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-600
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    <Download size={16} />
                    Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}