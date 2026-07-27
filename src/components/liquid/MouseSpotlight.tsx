import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function MouseSpotlight({
  children,
  className = "",
}: Props) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      className={`relative overflow-hidden rounded-[32px] ${className}`}
      style={{
        background: useMotionTemplate`
          radial-gradient(
            500px circle at ${mouseX}px ${mouseY}px,
            rgba(255,255,255,.16),
            transparent 55%
          )
        `,
      }}
    >
      <div className="absolute inset-0 rounded-[32px] border border-white/10 backdrop-blur-3xl" />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}