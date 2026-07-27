import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#020617] py-24"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="font-semibold uppercase tracking-[0.35em] text-blue-400">
            Contact
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Let's Build Something
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {" "}Amazing
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Whether you need a scalable enterprise solution, a modern web
            application, or expert technical guidance, I'd be happy to discuss
            your project.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl">

              <h3 className="mb-8 text-3xl font-bold text-white">
                Contact Information
              </h3>

              <div className="space-y-6">

                <div className="flex items-center gap-5">
                  <div className="rounded-2xl bg-blue-500/10 p-4">
                    <Mail className="text-blue-400" />
                  </div>

                  <div>
                    <p className="text-slate-400">Email</p>
                    <p className="text-white">
                      your@email.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="rounded-2xl bg-blue-500/10 p-4">
                    <Phone className="text-blue-400" />
                  </div>

                  <div>
                    <p className="text-slate-400">Phone</p>
                    <p className="text-white">
                      +91 XXXXX XXXXX
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="rounded-2xl bg-blue-500/10 p-4">
                    <MapPin className="text-blue-400" />
                  </div>

                  <div>
                    <p className="text-slate-400">Location</p>
                    <p className="text-white">
                      Chennai, Tamil Nadu, India
                    </p>
                  </div>
                </div>

              </div>

              <div className="mt-10 flex gap-4">

                <a
                  href="#"
                  className="rounded-xl border border-slate-700 p-4 text-slate-300 transition hover:border-blue-500 hover:text-white"
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="#"
                  className="rounded-xl border border-slate-700 p-4 text-slate-300 transition hover:border-blue-500 hover:text-white"
                >
                  <FaLinkedin size={22} />
                </a>

              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl"
          >

            <h3 className="mb-8 text-3xl font-bold text-white">
              Send a Message
            </h3>

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-5 py-4 text-white outline-none transition focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-5 py-4 text-white outline-none transition focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-5 py-4 text-white outline-none transition focus:border-blue-500"
              />

              <textarea
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full rounded-2xl border border-slate-700 bg-slate-950/60 px-5 py-4 text-white outline-none transition focus:border-blue-500"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 py-4 text-lg font-semibold text-white transition hover:scale-[1.02]"
              >
                <Send size={20} />
                Send Message
              </button>

            </div>

          </motion.form>

        </div>

      </div>
    </section>
  );
}