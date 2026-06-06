import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 px-6 md:px-10 py-6 md:py-8">
        <nav className="flex flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 relative z-10">
            <span className="text-2xl md:text-3xl font-semibold text-white select-none">
              NEXAS
            </span>
            <span className="text-2xl md:text-3xl text-white select-none opacity-60">
              ✦
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white hover:opacity-60 transition-opacity">
              Agents
            </a>
            <span className="text-white opacity-40">,</span>
            <a href="#" className="text-white hover:opacity-60 transition-opacity">
              Pricing
            </a>
            <span className="text-white opacity-40">,</span>
            <a href="#" className="text-white hover:opacity-60 transition-opacity">
              Docs
            </a>
            <span className="text-white opacity-40">,</span>
            <a href="#" className="text-white hover:opacity-60 transition-opacity">
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <a
            href="#"
            className="hidden md:block text-white underline underline-offset-4 hover:opacity-60 transition-opacity"
          >
            Get Started
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-10 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex flex-col items-center justify-center h-screen gap-8 text-2xl">
              <a
                href="#"
                className="text-gray-900 hover:text-gray-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Agents
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-gray-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-gray-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Docs
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-gray-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-8 px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
