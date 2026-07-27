import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
}

export default function GlassPanel({
  children,
  className = "",
}: GlassPanelProps) {
  return (
    <motion.div
      whileHover={{
        rotateX: 6,
        rotateY: -6,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 18,
      }}
      className={`relative overflow-hidden rounded-[36px] ${className}`}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glass */}
      <div className="absolute inset-0 rounded-[36px] border border-white/15 bg-white/[0.05] backdrop-blur-[40px]" />

      {/* Reflection */}
      <motion.div
        animate={{
          x: ["-120%", "220%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-y-0 w-40 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-xl"
      />

      {/* Glow */}
      <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />

      {/* Border highlight */}
      <div className="absolute inset-0 rounded-[36px] ring-1 ring-white/10" />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}