"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FadeProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  dir?: "up" | "left" | "right" | "none";
  distance?: number;
}

export function Fade({ children, delay = 0, className = "", dir = "up", distance = 28 }: FadeProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: dir === "up" ? distance : 0,
        x: dir === "left" ? -distance : dir === "right" ? distance : 0,
      }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
