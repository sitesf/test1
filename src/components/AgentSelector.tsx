import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AgentCard } from './AgentCard';
import { Arrow } from 'lucide-react';

interface Agent {
  id: string;
  name: string;
  description: string;
  icon: string;
  gradient: string;
}

const agents: Agent[] = [
  {
    id: 'hr',
    name: 'NEXAS HR',
    description: 'AI-powered recruitment automation with CV scoring & interview scheduling',
    icon: '🤝',
    gradient: 'bg-gradient-to-br from-purple-600 to-purple-800',
  },
  {
    id: 'booking',
    name: 'MIRA',
    description: 'WhatsApp booking agent for auto service businesses',
    icon: '📅',
    gradient: 'bg-gradient-to-br from-cyan-500 to-cyan-700',
  },
  {
    id: 'news',
    name: 'INA',
    description: 'Real-time news aggregation & social content generation',
    icon: '📰',
    gradient: 'bg-gradient-to-br from-indigo-600 to-indigo-800',
  },
  {
    id: 'betting',
    name: 'Betting Analytics',
    description: 'Sharp money detection for FIFA World Cup matches',
    icon: '⚽',
    gradient: 'bg-gradient-to-br from-amber-500 to-amber-700',
  },
];

export function AgentSelector() {
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedAgents = agents.filter((a) => selected.includes(a.id));

  return (
    <div className="w-full">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Which agent do you need?
        </h2>
        <p className="text-lg text-white/60">
          Select all that apply to empower your business
        </p>
      </motion.div>

      {/* Agent Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {agents.map((agent, index) => (
          <AgentCard
            key={agent.id}
            {...agent}
            selected={selected.includes(agent.id)}
            onToggle={handleToggle}
          />
        ))}
      </div>

      {/* Status Banner */}
      <AnimatePresence mode="wait">
        {selected.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="text-center italic text-white/50 text-sm"
          >
            Click agents above to get started
          </motion.div>
        ) : (
          <motion.div
            key="selected"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="overflow-hidden"
          >
            <div className="bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-white mb-4">
                Ready to empower:{' '}
                <span className="font-semibold">
                  {selectedAgents.map((a) => a.name).join(', ')}
                </span>
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow flex items-center gap-2"
              >
                Let's Go
                <span className="text-lg">→</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
