import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CursorFollower() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the movement using spring physics for that luxurious feel
  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 border border-accent rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5 }}
    />
  );
}
