"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 28 },
  right: { x: -28 },
  none: {},
};

/**
 * Scroll-triggered reveal. Wrap any content to have it fade + slide in once,
 * when it enters the viewport. Keeps sections as server components while the
 * animation stays client-side.
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "span";
}) {
  const common = {
    className,
    initial: { opacity: 0, ...offset[direction] },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  };

  if (as === "li") return <motion.li {...common}>{children}</motion.li>;
  if (as === "span") return <motion.span {...common}>{children}</motion.span>;
  return <motion.div {...common}>{children}</motion.div>;
}
