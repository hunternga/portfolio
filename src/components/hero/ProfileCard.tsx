import { motion } from "framer-motion";
import GlassPanel from "../liquid/GlassPanel";
import {
    FaCheckCircle,
    FaAward,
} from "react-icons/fa";

export default function ProfileCard() {
    return (
        <div className="relative inset-0 flex items-center justify-center">

            {/* Outer Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.35, 0.6, 0.35],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                }}
                className="absolute h-72 w-72 rounded-full bg-cyan-500/25 blur-[100px]"
            />

            {/* Animated Border */}
            <motion.div
                animate={{
                    scale: [1, 1.03, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}

                className="absolute h-[450px] w-[450px] rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 p-[2px]"
            >
                <div className="h-full w-full rounded-full bg-[#020617]" />
            </motion.div>
            {/* Image */}
            <GlassPanel className="relative z-20 flex h-[430px] w-[430px] items-center justify-center rounded-full bg-slate-900/70 backdrop-blur-xl">

                <motion.img
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    src="/profile.jpg"
                    alt="Nagarathinam R"
                    className="h-[370px] w-[370px] rounded-full object-cover border-4 border-slate-700 shadow-[0_20px_60px_rgba(37,99,235,0.35)]"
                />

            </GlassPanel>

            {/* Floating Tech */}
            {/* <FloatingTech /> */}

            {/* Hire Badge */}
            <motion.div
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 4,
                }}
                className="absolute top-10 -left-12 z-20 rounded-2xl border border-emerald-500/30 bg-slate-900/80 px-5 py-3 backdrop-blur-xl"
            >
                <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-emerald-400" />

                    <div>
                        <p className="text-sm font-semibold">
                            Available
                        </p>

                        <p className="text-xs text-slate-400">
                            Open to Work
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Experience Badge */}
            <motion.div
                animate={{
                    y: [0, 12, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                }}
                className="absolute bottom-8 -right-10 z-20 rounded-2xl border border-blue-500/30 bg-slate-900/80 px-5 py-3 backdrop-blur-xl"
            >
                <div className="flex items-center gap-3">
                    <FaAward className="text-yellow-400" />

                    <div>
                        <h3 className="font-bold text-white">
                            10+ Years
                        </h3>

                        <p className="text-xs text-slate-400">
                            Experience
                        </p>
                    </div>
                </div>
            </motion.div>

        </div>
    );
}