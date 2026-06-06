import { motion } from 'motion/react';
import { useCountup } from '../hooks';

export function AnimatedStats() {
  const agentsCount = useCountup(4, 1500, 300);
  const processesCount = useCountup(200, 1500, 500);
  const smbCount = useCountup(50, 1500, 700);

  return (
    <section className="w-full py-16 md:py-24 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        {/* Stat 1: Agents */}
        <div className="text-center">
          <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-3">
            +{agentsCount}
          </div>
          <p className="text-white/60 text-lg">Live AI Agents</p>
          <p className="text-white/40 text-sm mt-2">Automating business processes</p>
        </div>

        {/* Stat 2: Processes */}
        <div className="text-center">
          <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 mb-3">
            +{processesCount}+
          </div>
          <p className="text-white/60 text-lg">Processes Automated</p>
          <p className="text-white/40 text-sm mt-2">Monthly across clients</p>
        </div>

        {/* Stat 3: SMBs */}
        <div className="text-center">
          <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mb-3">
            +{smbCount}
          </div>
          <p className="text-white/60 text-lg">Romanian SMEs Powered</p>
          <p className="text-white/40 text-sm mt-2">Trusted to scale</p>
        </div>
      </motion.div>
    </section>
  );
}
