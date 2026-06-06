import { Navbar, HeroSection, AgentSelector, AnimatedStats, FloatingRobot, FloatingPlane } from './components';

export default function App() {
  return (
    <div className="min-h-screen bg-nexas-dark text-white overflow-x-hidden">
      <Navbar />
      <FloatingRobot />
      <FloatingPlane />
      
      <HeroSection />

      {/* Content Section */}
      <section className="relative z-10 bg-nexas-dark px-6 md:px-10 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <AgentSelector />
          <AnimatedStats />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
          <p>&copy; 2024 NEXAS. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
