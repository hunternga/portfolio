import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 1.5,
      }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="flex flex-col items-center gap-3">

        <span className="text-xs tracking-[0.3em] text-slate-500 uppercase">
          Scroll
        </span>

        <div className="flex h-14 w-8 justify-center rounded-full border border-slate-600">

          <motion.div
            animate={{
              y: [6, 24, 6],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
            }}
            className="mt-2 h-3 w-3 rounded-full bg-blue-400"
          />

        </div>

      </div>
    </motion.div>
  );
}