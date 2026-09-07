"use client";

import { motion } from "framer-motion";

interface StaggerListProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
}

const containerVariants = {
  hidden: {},
  visible: (staggerDelay: number) => ({
    transition: {
      staggerChildren: staggerDelay,
    },
  }),
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function StaggerList({
  children,
  className = "",
  staggerDelay = 0.1,
}: StaggerListProps) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      custom={staggerDelay}
    >
      {children.map((child, index) => (
        <motion.div key={index} variants={staggerItemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
