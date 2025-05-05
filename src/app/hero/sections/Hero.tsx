"use client";
import { useEffect, useRef } from "react";
import fitty from "fitty";
import Image from "next/image";
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
      className="Hero relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/hero/just-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full text-center">
        <div className="hero-text w-[80vw] align-right overflow-visible absolute right-0 top-1/2 my-10 p-4 transform -translate-y-1/2">
          <Parallax offset={40}>
            <h1
              ref={headingRef}
              className="displayFont leading-none text-right text-flamenco-charcoal"
            >
              <span>
                Benjamin <br /> Barile
              </span>
            </h1>
          </Parallax>
        </div>
        <Parallax offset={-20}>
          <div className="just-ben">
            <Image
              src="/hero/just-ben.png"
              alt="Hero"
              fill
              priority
              className="object-cover"
            />
          </div>
        </Parallax>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
