"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, LayoutGroup } from "framer-motion";
import "./styles.scss";
import { FaGuitar } from "react-icons/fa";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  // Listen for scroll position to toggle variant
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => {
      setScrolled(v > window.innerHeight * 0.9); // adjust threshold as needed
    });
    return unsubscribe;
  }, [scrollY]);

  // Framer Motion variants
  const variants = {
    initial: {
      backgroundColor: "rgba(0,0,0,0.1)",
      height: "4.5rem",
      backdropFilter: "blur(10px)",
    },
    scrolled: {
      backgroundColor: "rgba(0,0,0,0.5)",
      height: "4.5rem",
      backdropFilter: "blur(10px)",
      boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
      transition: { type: "spring", stiffness: 200, damping: 30 },
    },
  };

  return (
    <motion.nav
      className="Navbar fixed top-0 left-0 z-50 w-full bodyFont font-bold text-2xl"
      variants={variants}
      animate={scrolled ? "scrolled" : "initial"}
      initial="initial"
    >
      <LayoutGroup>
        <motion.ul layout className="flex justify-evenly h-full items-center">
          {scrolled && (
            <motion.h3
              className="bodyFont text-3xl flex gap-4 "
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "anticipate" }}
            >
              <FaGuitar className="text-primary-accent" />
              Benjamin Barile
            </motion.h3>
          )}
          <motion.li layout>
            <a href="/">Bio</a>
          </motion.li>
          <motion.li layout>
            <a href="/about">Media</a>
          </motion.li>
          <motion.li layout>
            <a href="/about">Shows</a>
          </motion.li>
          <motion.li layout>
            <a href="/about">Transcriptions</a>
          </motion.li>
          <motion.li layout>
            <a href="/about">Contact</a>
          </motion.li>
        </motion.ul>
      </LayoutGroup>
    </motion.nav>
  );
}
