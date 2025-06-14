"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, LayoutGroup } from "framer-motion";
import "./styles.scss";
import { FaGuitar } from "react-icons/fa";
import MobileMenu from "../MobileMenu/MobileMenu";
import Link from "next/link";

interface NavbarProps {
  disableScrollEffect?: boolean;
}

export default function Navbar({ disableScrollEffect = false }: NavbarProps) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(disableScrollEffect);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Listen for scroll position to toggle variant if effect is enabled
  useEffect(() => {
    if (disableScrollEffect) {
      return;
    }

    const unsubscribe = scrollY.on("change", (v) => {
      setScrolled(v > window.innerHeight * 0.9);
    });
    return unsubscribe;
  }, [scrollY, disableScrollEffect]);

  return (
    <>
      <motion.nav
        className={`Navbar ${scrolled ? "scrolled" : ""}`}
        initial={false}
      >
        <LayoutGroup>
          <motion.ul layout className="nav-links">
            {scrolled && (
              <Link href="/">
                <motion.h3
                  className="nav-title"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "anticipate" }}
                >
                  <FaGuitar className="nav-icon" />
                  Benjamin Barrile
                </motion.h3>
              </Link>
            )}
            <motion.li layout>
              <Link href="/bio">Bio</Link>
            </motion.li>
            <motion.li layout>
              <Link href="/about">Media</Link>
            </motion.li>
            <motion.li layout>
              <Link href="/about">Shows</Link>
            </motion.li>
            <motion.li layout>
              <Link href="/about">Transcriptions</Link>
            </motion.li>
            <motion.li layout>
              <Link href="/about">Contact</Link>
            </motion.li>
          </motion.ul>
          <div className="hamburger-backdrop">
            <motion.button
              className={`hamburger-menu ${isMobileMenuOpen ? "open" : ""}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="hamburger-line" />
              <div className="hamburger-line" />
              <div className="hamburger-line" />
            </motion.button>
          </div>
        </LayoutGroup>
      </motion.nav>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
