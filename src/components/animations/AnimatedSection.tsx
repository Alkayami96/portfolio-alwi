"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { staggerContainer, viewportConfig } from "@/constants/animations";

interface AnimatedSectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function AnimatedSection({
  children,
  className = "",
  id,
  ...props
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={viewportConfig}
      variants={staggerContainer}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}