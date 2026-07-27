import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href?: string;
}

export default function Button({ children, href = "#" }: Props) {
  return (
    <motion.a
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      href={href}
      className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
    >
      {children}
    </motion.a>
  );
}