import { motion, AnimatePresence } from "framer-motion";
import { FaGuitar } from "react-icons/fa";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  const links = [
    { href: "/", label: "Bio" },
    { href: "/about", label: "Media" },
    { href: "/about", label: "Shows" },
    { href: "/about", label: "Transcriptions" },
    { href: "/about", label: "Contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="mobile-menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="mobile-menu-header">
              <FaGuitar className="nav-icon" />
              <h3>Benjamin Barile</h3>
            </div>
            <nav className="mobile-nav">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  onClick={onClose}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu; 