"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface HorizontalWrapperProps {
  children: ReactNode;
  direction: number;
  height: string;
  initial?:number
}

const HorizontalWrapper = ({
  children,
  direction,
  height,
  initial
}: HorizontalWrapperProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const scrollSprong = useSpring(scrollYProgress);

  const xTransform = useTransform(
    scrollSprong,
    [0, 0.1, 1],
    [0, 0.1, direction]
  ); // when scroll y is 0, do nothing, when its 0.1 stay at 0. but the value between 0.1 and 1 is going to automaticlly animated by framermotion

  return (
    <div ref={scrollRef}>
      <motion.div
      initial={{
        x:initial
      }}
        className={` z-10 relative`}
        style={{
          translateX: xTransform,
          height,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default HorizontalWrapper;
