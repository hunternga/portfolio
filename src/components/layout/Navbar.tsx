import { useEffect, useState } from "react";
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
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];

      let current = sections[0];

      for (const section of sections) {
        if (window.scrollY >= section.offsetTop - 140) {
          current = section;
        }
      }

      if (current) {
        setActive(current.id);
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    setMobileOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-x-0 top-5 z-[100] flex justify-center px-5"
      >
        <motion.div
          animate={{
            scale: scrolled ? 0.97 : 1,
            y: scrolled ? -2 : 0,
          }}
          transition={{
            duration: 0.35,
          }}
          className={`
            relative
            w-full
            max-w-7xl
            overflow-hidden
            rounded-full
            border
            border-white/10
            bg-white/[0.07]
            backdrop-blur-3xl
            backdrop-saturate-150
            shadow-[0_20px_80px_rgba(0,0,0,.45)]
            ring-1
            ring-white/5
            ${scrolled ? "py-2" : "py-3"}
          `}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between px-8">

            {/* Logo */}
<motion.button
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.98 }}
  onClick={() => scrollTo("home")}
  className="text-xl font-bold tracking-tight text-white"
>
  Nagarathinam R
</motion.button>

{/* Desktop Navigation */}
<div className="hidden lg:flex items-center justify-center flex-1 px-8">

  <div className="flex items-center rounded-full bg-white/5 p-1 border border-white/10">

    {navItems.map((item) => (
      <button
        key={item.id}
        onClick={() => scrollTo(item.id)}
        className="relative px-5 py-2.5 text-sm font-medium"
      >
        {active === item.id && (
          <motion.div
            layoutId="active-pill"
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 32,
            }}
            className="
              absolute
              inset-0
              rounded-full
              bg-white/10
              border
              border-white/10
              backdrop-blur-xl
            "
          />
        )}

        <span
          className={`
            relative
            z-10
            transition-colors
            duration-300
            ${
              active === item.id
                ? "text-white"
                : "text-slate-400 hover:text-white"
            }
          `}
        >
          {item.name}
        </span>
      </button>
    ))}

  </div>

</div>

{/* Right Section */}
<div className="hidden lg:flex items-center gap-3">

  <motion.a
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    href="https://github.com/hunternga"
    target="_blank"
    rel="noreferrer"
    className="
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      bg-white/5
      border
      border-white/10
      text-slate-300
      hover:bg-white/10
      hover:text-white
      transition
    "
  >
    <FaGithub size={18} />
  </motion.a>

  <motion.a
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    href="https://linkedin.com/in/nagarathinamr8"
    target="_blank"
    rel="noreferrer"
    className="
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      bg-white/5
      border
      border-white/10
      text-slate-300
      hover:bg-white/10
      hover:text-white
      transition
    "
  >
    <FaLinkedin size={18} />
  </motion.a>

  <motion.a
    whileHover={{
      scale: 1.03,
    }}
    whileTap={{
      scale: 0.98,
    }}
    target="_blank"
    href="/Nagarathinam-Resume.pdf"
    className="
      ml-2
      inline-flex
      items-center
      gap-2
      rounded-full
      px-5
      py-2.5
      text-sm
      font-semibold
      text-white
    "
  >
    <Download size={16} />
    Resume
  </motion.a>

    <motion.a
    whileHover={{
      scale: 1.03,
    }}
    whileTap={{
      scale: 0.98,
    }}
    target="_blank"
    href="https://calendly.com/nagarathinamr8/"
    className="
      ml-2
      inline-flex
      items-center
      gap-2
      rounded-full
      bg-gradient-to-r
      from-cyan-500
      via-sky-500
      to-blue-600
      px-5
      py-2.5
      text-sm
      font-semibold
      text-white
      shadow-lg
      shadow-cyan-500/20
    "
  >
    Hire Me
  </motion.a>

</div>

{/* Mobile Button */}
<button
  onClick={() => setMobileOpen(!mobileOpen)}
  className="
    lg:hidden
    rounded-full
    border
    border-white/10
    bg-white/5
    p-2.5
    text-white
    hover:bg-white/10
    transition
  "
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
            className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-md lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{
              opacity: 0,
              y: -30,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -30,
              scale: 0.96,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              left-5
              right-5
              top-24
              z-[100]
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-slate-900/70
              backdrop-blur-3xl
              ring-1
              ring-white/10
              shadow-[0_20px_80px_rgba(0,0,0,.55)]
              lg:hidden
            "
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent" />

            <div className="relative p-6">

              <div className="space-y-2">

                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollTo(item.id)}
                    className={`
                      relative
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-2xl
                      px-5
                      py-3.5
                      transition

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
                        layoutId="mobile-pill"
                        className="h-2.5 w-2.5 rounded-full bg-cyan-400"
                      />
                    )}
                  </motion.button>
                ))}

              </div>

              <div className="mt-8 flex items-center gap-3">

                <motion.a
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/hunternga"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-white/5
                    border
                    border-white/10
                    text-slate-300
                  "
                >
                  <FaGithub size={18} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com/in/nagarathinamr8"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-white/5
                    border
                    border-white/10
                    text-slate-300
                  "
                >
                  <FaLinkedin size={18} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
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
                </motion.a>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  </>
);
}