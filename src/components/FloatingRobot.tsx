import { useMousePosition } from '../hooks';
import { motion } from 'motion/react';

export function FloatingRobot() {
  const mousePosition = useMousePosition();
  const robotSize = 80;

  return (
    <motion.div
      className="fixed w-20 h-20 z-30 pointer-events-none"
      animate={{
        x: mousePosition.x - robotSize / 2,
        y: mousePosition.y - robotSize / 2,
      }}
      transition={{
        type: 'spring',
        damping: 15,
        mass: 0.5,
        stiffness: 50,
      }}
    >
      {/* Robot SVG representation */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Head */}
        <rect x="25" y="10" width="50" height="50" rx="8" stroke="#8b5cf6" strokeWidth="2" />
        
        {/* Eyes */}
        <circle cx="40" cy="30" r="5" fill="#8b5cf6" />
        <circle cx="60" cy="30" r="5" fill="#8b5cf6" />
        
        {/* Smile */}
        <path d="M 40 45 Q 50 50 60 45" stroke="#8b5cf6" strokeWidth="2" />
        
        {/* Body */}
        <rect x="30" y="65" width="40" height="30" rx="4" stroke="#06b6d4" strokeWidth="2" />
        
        {/* Antenna */}
        <line x1="50" y1="10" x2="50" y2="-10" stroke="#f59e0b" strokeWidth="2" />
        <circle cx="50" cy="-12" r="3" fill="#f59e0b" />
      </svg>
    </motion.div>
  );
}
