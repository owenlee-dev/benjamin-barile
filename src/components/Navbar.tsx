"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, LayoutGroup } from "framer-motion";
import "./styles.scss";
import { FaGuitar } from "react-icons/fa";
import MobileMenu from "./MobileMenu/MobileMenu";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Listen for scroll position to toggle variant
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => {
      setScrolled(v > window.innerHeight * 0.9);
    });
    return unsubscribe;
  }, [scrollY]);

  return (
    <>
      <motion.nav
        className={`Navbar ${scrolled ? "scrolled" : ""}`}
        initial={false}
      >
        <LayoutGroup>
          <motion.ul layout className="nav-links">
            {scrolled && (
              <motion.h3
                className="nav-title"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "anticipate" }}
              >
                <FaGuitar className="nav-icon" />
                Benjamin Barrile
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
          <motion.button
            className={`hamburger-menu ${isMobileMenuOpen ? "open" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </motion.button>
        </LayoutGroup>
      </motion.nav>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
