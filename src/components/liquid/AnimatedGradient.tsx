import { motion } from "framer-motion";

const blobs = [
  {
    size: 550,
    color: "from-cyan-500/25 to-blue-600/15",
    x: "-15%",
    y: "-10%",
    duration: 22,
  },
  {
    size: 500,
    color: "from-purple-500/20 to-pink-500/10",
    x: "70%",
    y: "10%",
    duration: 28,
  },
  {
    size: 450,
    color: "from-blue-500/20 to-indigo-500/10",
    x: "25%",
    y: "70%",
    duration: 20,
  },
];

export default function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0 bg-[#020617]" />

      {/* Aurora */}

      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          animate={{
            x: [0, 120, -80, 0],
            y: [0, -120, 60, 0],
            scale: [1, 1.15, 0.9, 1],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute rounded-full bg-gradient-to-br ${blob.color} blur-[140px]`}
          style={{
            width: blob.size,
            height: blob.size,
            left: blob.x,
            top: blob.y,
          }}
        />
      ))}

      {/* Soft vignette */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#020617_95%)]" />

      {/* Grid */}

      <div
        className="
        absolute inset-0
        opacity-[0.04]
        [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)]
        [background-size:60px_60px]
      "
      />
    </div>
  );
}