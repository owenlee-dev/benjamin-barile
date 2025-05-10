import { useState, useRef, useLayoutEffect, ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  stiffness?: number;
  damping?: number;
  springConfig?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
}

const Parallax = ({
  children,
  offset = 50,
  springConfig = {
    stiffness: 400,
    damping: 90,
    mass: 1,
  },
}: ParallaxProps): ReactNode => {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + clientHeight;

  // Transform the scroll position to a value between -1 and 1
  const progress = useTransform(
    scrollY,
    [initial, elementTop, final],
    [-1, 0, 1]
  );

  // Apply the offset as a weight to the progress
  const y = useTransform(progress, [-1, 0, 1], [offset, 0, -offset]);
  const springY = useSpring(y, springConfig);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const onResize = () => {
      const rect = element.getBoundingClientRect();
      setElementTop(rect.top + window.scrollY);
      setClientHeight(window.innerHeight);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div ref={ref} style={{ y: springY }}>
      {children}
    </motion.div>
  );
};

export default Parallax;
