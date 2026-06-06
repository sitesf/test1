import { motion } from 'motion/react';

export function FloatingPlane() {
  return (
    <motion.div
      className="fixed top-20 right-10 z-20 w-32 h-32 pointer-events-none"
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* Airplane SVG */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Fuselage */}
        <ellipse cx="100" cy="100" rx="40" ry="80" stroke="#06b6d4" strokeWidth="2" fill="none" />
        
        {/* Wings */}
        <path d="M 60 100 L 20 110 L 30 100 L 20 90 Z" stroke="#06b6d4" strokeWidth="2" fill="none" />
        <path d="M 140 100 L 180 110 L 170 100 L 180 90 Z" stroke="#06b6d4" strokeWidth="2" fill="none" />
        
        {/* Tail */}
        <path d="M 100 175 L 90 190 L 100 185 L 110 190 Z" stroke="#8b5cf6" strokeWidth="2" fill="none" />
        
        {/* Cockpit */}
        <circle cx="100" cy="50" r="8" stroke="#f59e0b" strokeWidth="2" fill="none" />
        
        {/* Windows */}
        <circle cx="95" cy="85" r="4" fill="#06b6d4" opacity="0.6" />
        <circle cx="105" cy="95" r="4" fill="#06b6d4" opacity="0.6" />
        <circle cx="95" cy="115" r="4" fill="#06b6d4" opacity="0.6" />
      </svg>
    </motion.div>
  );
}
