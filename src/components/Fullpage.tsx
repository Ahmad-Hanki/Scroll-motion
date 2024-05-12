"use client";

import Image from "next/image";
import rover from "@/assets/rover.jpg";
import styled from "styled-components";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const Fullpage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: scaleY } = useScroll({
    target: scrollRef,
    offset: ["start center", "center center"],
  });

  const scrollYSpringScale = useSpring(scaleY);

  const scale = useTransform(scrollYSpringScale, [0, 0.1, 1], [0, 0, 0.7]);

  const { scrollYProgress: Translate } = useScroll({
    target: scrollRef,
    offset: ["center end", "end end"],
  });

  const scrollYSpringTranslateX = useSpring(Translate);

  const translateX = useTransform(
    scrollYSpringTranslateX,
    [0, 0.7, 1],
    [0, 0, -1400]
  );

  return (
    <FullpageStyled>
      <motion.div
        className="image"
        ref={scrollRef}
        style={{
          scale,
          translateX
        }}
      >
        <Image
          src={rover}
          alt="monkey"
          fill={true}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </motion.div>
    </FullpageStyled>
  );
};

const FullpageStyled = styled.div`
  .image {
    width: calc(100% - 10rem);
    height: 1000px;

    position: relative;
    border-radius: 1rem;
    border-radius: 8px;

    border: 1px solid var(--color-border);
    transition: border 0.3s ease-in-out;

    img {
      padding: 1.5rem;
    }

    &:hover {
      border: 1px solid #f2994a;
    }
  }
`;

export default Fullpage;
