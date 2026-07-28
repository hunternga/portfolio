import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
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
  className="space-y-5"
>
  <h3 className="text-2xl font-semibold text-white">
    Get in touch
  </h3>

  <p className="max-w-md leading-7 text-slate-400">
    Whether you're hiring, building a new product, or looking for technical
    guidance, I'd be happy to discuss how I can help.
  </p>

  <div className="space-y-4 mt-8">

    {/* Email */}
    <a
      href="mailto:nagarathinamr8@gmail.com"
      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition hover:border-blue-400/40 hover:bg-white/10"
    >
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-cyan-500/10 p-3">
          <Mail className="h-5 w-5 text-blue-400" />
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Email
          </p>

          <p className="font-medium text-white">
            nagarathinamr8@gmail.com
          </p>
        </div>
      </div>

      <span className="text-slate-500 transition group-hover:text-white">
        →
      </span>
    </a>

    {/* Phone */}
    <a
      href="tel:+919094500426"
      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition hover:border-violet-400/40 hover:bg-white/10"
    >
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-cyan-500/10 p-3">
          <Phone className="h-5 w-5 text-violet-400" />
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Phone
          </p>

          <p className="font-medium text-white">
            +91 90945 00426
          </p>
        </div>
      </div>

      <span className="text-slate-500 transition group-hover:text-white">
        →
      </span>
    </a>

<a
  href="https://wa.me/919094500426"
  target="_blank"
  rel="noreferrer"
  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition hover:border-green-500/40 hover:bg-white/10"
>
  <div className="flex items-center gap-4">
    <div className="rounded-xl bg-green-500/10 p-3">
      <FaWhatsapp className="h-5 w-5 text-green-400" />
    </div>

    <div>
      <p className="text-sm text-slate-500">
        WhatsApp
      </p>

      <p className="font-medium text-white">
        Chat with me
      </p>
    </div>
  </div>

  <span className="text-slate-500 transition group-hover:text-white">
    →
  </span>
</a>

    {/* Location */}
    <div
      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-5"
    >
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-cyan-500/10 p-3">
          <MapPin className="h-5 w-5 text-cyan-400" />
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Location
          </p>

          <p className="font-medium text-white">
            Chennai, Tamil Nadu, India
          </p>
        </div>
      </div>
    </div>

  </div>
</motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
          >
            <h3 className="text-2xl font-semibold text-white">
              Let's talk
            </h3>

            <p className="mt-2 text-slate-400">
              Tell me about your project or opportunity.
            </p>

            <div className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Name"
                className="
        w-full
        rounded-xl
        border
        border-white/10
        bg-transparent
        px-4
        py-3.5
        text-white
        placeholder:text-slate-500
        outline-none
        transition
        focus:border-cyan-400
      "
              />

              <input
                type="email"
                placeholder="Email"
                className="
        w-full
        rounded-xl
        border
        border-white/10
        bg-transparent
        px-4
        py-3.5
        text-white
        placeholder:text-slate-500
        outline-none
        transition
        focus:border-cyan-400
      "
              />

              <textarea
                rows={5}
                placeholder="Message"
                className="
        w-full
        resize-none
        rounded-xl
        border
        border-white/10
        bg-transparent
        px-4
        py-3.5
        text-white
        placeholder:text-slate-500
        outline-none
        transition
        focus:border-cyan-400
      "
              />

              <button
                type="submit"
                className="
        mt-2
        w-full
        rounded-xl
        bg-white
        py-3.5
        font-medium
        text-slate-900
        transition
        hover:bg-slate-200
      "
              >
                Send Message
              </button>

            </div>
          </motion.form>

        </div>

      </div>
    </section>
  );
}