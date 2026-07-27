import { motion } from "framer-motion";

const blobs = [
  {
    size: 700,
    color: "from-cyan-400/80 to-blue-500/60",
    x: "-20%",
    y: "-10%",
    duration: 18,
  },
  {
    size: 650,
    color: "from-violet-500/70 to-fuchsia-500/60",
    x: "70%",
    y: "5%",
    duration: 24,
  },
  {
    size: 600,
    color: "from-sky-400/70 to-indigo-500/60",
    x: "20%",
    y: "70%",
    duration: 20,
  },
];

export default function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Background */}

      <div className="" />

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
          className={`absolute rounded-full bg-gradient-to-br ${blob.color} blur-3xl`}
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