"use client";
import { useEffect, useRef } from "react";
import fitty from "fitty";
import { motion } from "framer-motion";
import Parallax from "@/components/Parallax/Parallax";

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      const span = headingRef.current.querySelector("span");
      if (span) {
        fitty(span, {
          minSize: 20,
          maxSize: 1000,
          multiLine: true,
        });
      }
    }
  }, []);

  return (
    <section
      className="Hero"
      style={{
        backgroundImage: "url('/hero/just-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-container">
        <div className="hero-text">
          <Parallax offset={40}>
            <h1 ref={headingRef} className="displayFont">
              <span>
                Benjamin <br /> Barrile
              </span>
            </h1>
          </Parallax>
        </div>
        <Parallax offset={-20}>
          <div
            className="just-ben"
            style={{
              backgroundImage: "url(/hero/just-ben.png)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "33.33% 33.33%",
            }}
          ></div>
        </Parallax>
      </div>
      <motion.div
        className="scroll-indicator"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-golden-note"
        >
          <path d="M7 13L12 18L17 13" />
          <path d="M7 7L12 12L17 7" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
