import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  href?: string;
}

export default function LiquidButton({
  children,
  className = "",
  href,
}: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 15,
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 15,
  });

  const rotateX = useTransform(springY, [-25, 25], [8, -8]);
  const rotateY = useTransform(springX, [-25, 25], [-8, 8]);

  function move(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function leave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      onMouseMove={move}
      onMouseLeave={leave}
      style={{
        rotateX,
        rotateY,
        x: springX,
        y: springY,
        transformPerspective: 100,
      }}
      whileTap={{ scale: 0.95 }}
      className={`group relative inline-flex overflow-hidden rounded-2xl px-8 py-4 font-semibold text-white ${className}`}
    >
      {/* Background */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600" />

      {/* Animated shine */}
      <motion.div
        animate={{
          x: ["-150%", "250%"],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-y-0 w-32 -rotate-12 bg-white/30 blur-xl"
      />

      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl shadow-[0_0_60px_rgba(59,130,246,.45)]" />

      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.a>
  );
}