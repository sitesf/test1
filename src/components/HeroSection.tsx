import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useTypewriter } from '../hooks';

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prevX, setPrevX] = useState(0);

  const { displayed, done } = useTypewriter('automate. scale. dominate.', 40, 200);

  // Desktop Mouse Scrubbing Hook
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!videoRef.current) return;

      // Disable scrubbing on mobile
      if (window.innerWidth < 1024) return;

      const deltaX = e.clientX - prevX;
      const videoElement = videoRef.current;

      const scrubAmount = (deltaX / window.innerWidth) * 0.8 * videoElement.duration;
      const newTime = Math.max(0, Math.min(videoElement.currentTime + scrubAmount, videoElement.duration));

      videoElement.currentTime = newTime;
      setPrevX(e.clientX);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prevX]);

  // Mobile Autoplay Hook
  useEffect(() => {
    if (window.innerWidth < 1024) {
      if (videoRef.current) {
        videoRef.current.autoplay = true;
        videoRef.current.play();
      }
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-nexas-dark">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          className="w-full h-full object-cover object-right lg:object-right-bottom"
          muted
          playsInline
          preload="auto"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4"
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          {/* Typewriter Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight mb-6 whitespace-pre-wrap select-none">
            {displayed}
            {!done && (
              <span className="inline-block w-[3px] h-[1.1em] bg-white align-middle ml-3 animate-blink" />
            )}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Your dedication deserves recognition. We empower Romanian businesses with AI agents
            that think, learn, and execute without limits.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white/10 border border-white/30 text-white rounded-full hover:bg-white/20 transition-colors font-semibold backdrop-blur-sm"
            >
              Discover
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all font-semibold"
            >
              Book Demo
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-white/60 text-sm">Scroll to explore</p>
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
