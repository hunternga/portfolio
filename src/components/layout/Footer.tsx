import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#020617]">
      <div className="mx-auto max-w-6xl px-6 py-24">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
            AVAILABLE FOR OPPORTUNITIES
          </p>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
            Let's build something
            <br />
            meaningful.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Whether you're hiring a Senior Software Engineer or building your
            next product, I'd love to hear about it.
          </p>

          <div className="mt-12 flex justify-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-white px-8 py-3 font-medium text-slate-900 transition hover:scale-105"
            >
              Hire Me
            </a>

            <a
              href="/Nagarathinam-Resume.pdf"
              download
              className="rounded-full border border-white/10 px-8 py-3 font-medium text-white transition hover:bg-white/5"
            >
              Resume
            </a>
          </div>
        </motion.div>

        <div className="mt-24 flex items-center justify-between border-t border-white/10 pt-8">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Nagarathinam R.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex items-center gap-2 text-sm text-slate-500 transition hover:text-white"
          >
            <FaArrowUp />
            Top
          </button>

        </div>
      </div>
    </footer>
  );
}