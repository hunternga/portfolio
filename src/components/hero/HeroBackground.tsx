import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      {/* Base Background */}
      <div className="absolute inset-0 bg-[#020617]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Aurora 1 */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-56 -left-56 h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[130px]"
      />

      {/* Aurora 2 */}
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-220px] right-[-220px] h-[650px] w-[650px] rounded-full bg-purple-600/20 blur-[150px]"
      />

      {/* Cyan Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
      />

      {/* Small Floating Lights */}
      {[...Array(12)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute h-2 w-2 rounded-full bg-blue-400/40"
          style={{
            top: `${10 + Math.random() * 80}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            delay: index * 0.3,
          }}
        />
      ))}

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-[#020617] to-transparent" />
    </div>
  );
}