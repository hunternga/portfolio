import { motion } from "framer-motion";

const orbs = [
  {
    size: 120,
    color: "bg-cyan-400/15",
    left: "8%",
    top: "20%",
    duration: 16,
  },
  {
    size: 90,
    color: "bg-violet-500/15",
    left: "82%",
    top: "30%",
    duration: 20,
  },
  {
    size: 160,
    color: "bg-blue-500/10",
    left: "55%",
    top: "75%",
    duration: 22,
  },
];

export default function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${orb.color} blur-3xl`}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.left,
            top: orb.top,
          }}
          animate={{
            y: [0, -40, 20, 0],
            x: [0, 20, -15, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}