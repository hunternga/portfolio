import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >
          <p className="text-blue-600 font-semibold">
            Hello, I'm
          </p>

          <h1 className="text-6xl font-bold mt-3">
            Nagarathinam R
          </h1>

          <h2 className="text-3xl text-gray-600 mt-5">
            Senior Software Engineer
          </h2>

          <p className="mt-8 text-gray-500 leading-8 text-lg">
            I build scalable enterprise applications,
            FinTech products, AI solutions,
            Laravel APIs and modern React applications.
          </p>

          <div className="mt-10 flex gap-5">
            <button className="bg-blue-600 px-8 py-4 rounded-xl text-white hover:bg-blue-700">
              Hire Me
            </button>

            <button className="border px-8 py-4 rounded-xl hover:bg-gray-100">
              Download CV
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="flex justify-center"
        >
          <img
            src="/profile.png"
            alt="Profile"
            className="w-96 rounded-3xl shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}