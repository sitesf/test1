import { motion } from 'motion/react';
import { Check } from 'lucide-react';

interface AgentCardProps {
  id: string;
  name: string;
  description: string;
  icon: string;
  gradient: string;
  selected: boolean;
  onToggle: (id: string) => void;
}

export function AgentCard({
  id,
  name,
  description,
  icon,
  gradient,
  selected,
  onToggle,
}: AgentCardProps) {
  return (
    <motion.button
      onClick={() => onToggle(id)}
      className={`relative p-6 rounded-2xl border transition-all duration-300 text-left h-full ${
        selected
          ? `${gradient} text-white shadow-lg border-transparent`
          : 'bg-white/5 border-white/10 hover:bg-white/10 text-white'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Icon */}
      <div className="text-4xl mb-4">{icon}</div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2">{name}</h3>

      {/* Description */}
      <p className="text-sm opacity-90 mb-4">{description}</p>

      {/* Checkmark */}
      {selected && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="absolute top-4 right-4 bg-white/20 backdrop-blur rounded-full p-2"
        >
          <Check size={20} />
        </motion.div>
      )}
    </motion.button>
  );
}
