# NEXAS Landing Page - Multi-Agent AI Showcase

A modern, interactive React landing page featuring the NEXAS AI agents suite with typewriter effects, interactive agent selection, floating animations, and desktop video scrubbing.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview

# The `dist/` folder is ready to deploy
```

## 📁 Project Structure

```
nexas-landing/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # Interactive navbar with mobile menu
│   │   ├── HeroSection.tsx         # Hero with typewriter + video scrubbing
│   │   ├── AgentCard.tsx           # Individual agent card
│   │   ├── AgentSelector.tsx       # Multi-select agent container
│   │   ├── FloatingRobot.tsx       # Mouse-following robot
│   │   ├── FloatingPlane.tsx       # Animated floating plane
│   │   ├── AnimatedStats.tsx       # Countup statistics section
│   │   └── index.ts                # Component exports
│   ├── hooks/
│   │   ├── useTypewriter.ts        # Typewriter effect hook
│   │   ├── useMousePosition.ts     # Mouse tracking hook
│   │   ├── useCountup.ts           # Number countup hook
│   │   └── index.ts                # Hook exports
│   ├── styles/
│   │   └── globals.css             # Global styles & animations
│   ├── App.tsx                     # Main app component
│   └── main.tsx                    # React entry point
├── index.html                      # HTML template
├── package.json                    # Dependencies
├── tsconfig.json                   # TypeScript config
├── tailwind.config.ts              # Tailwind config
├── postcss.config.js               # PostCSS config
└── vite.config.ts                  # Vite config
```

## 🎨 Features

### Interactive Elements
- **Typewriter Effect**: Animated headline text with blinking cursor
- **Agent Selection**: Multi-select pills with spring animations
- **Status Banner**: Dynamic feedback based on selections
- **Mouse Follower**: Robot SVG that tracks cursor position
- **Floating Plane**: Bobbing animation in top-right corner

### Animations
- **Typewriter**: Character-by-character text reveal (38ms per char)
- **Drop-in**: Motion elements fade and slide from above
- **Spring**: Agent cards bounce with elastic motion
- **Countup**: Statistics animate from 0 to final numbers
- **Parallax**: Mouse-following robot with spring damping

### Video Interaction
- **Desktop**: Mouse scrubbing controls video playback
- **Mobile**: Autoplay with normal playback
- Smooth frame-by-frame seeking with delta calculations

## 🛠 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Vite** - Build tool

## 📱 Responsive Design

- Mobile-first approach
- Hamburger menu on screens < 768px
- Touch-optimized interactions
- Responsive typography (vw units on hero)

## 🎬 Animations Reference

| Animation | Component | Duration | Effect |
|-----------|-----------|----------|--------|
| Typewriter | HeroSection | 2s+ | Text reveals char-by-char |
| Drop-in | HeroSection, AgentSelector | 0.6s | Fade + slide from top |
| Spring Bounce | AgentCard | 0.3s | Scale with elasticity |
| Countup | AnimatedStats | 1.5s | Numbers animate upward |
| Float | FloatingPlane | 4s | Vertical bobbing loop |
| Mouse Follow | FloatingRobot | Real-time | Spring-damped tracking |
| Hamburger | Navbar | 0.3s | 3-line to X transform |
| Status Banner | AgentSelector | Variable | Height expansion + fade |

## 🚀 Deployment

### Render (Recommended for Florin)

1. Push to GitHub
2. Connect Render project
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

### Vercel

```bash
npm install -g vercel
vercel
```

### Other Platforms

The `dist/` folder is static and can be deployed to any CDN or static host.

## 🎯 Color Palette

- **Background**: `#0a0a0a` (Dark)
- **HR Agent**: `#8b5cf6` (Purple)
- **Booking Agent**: `#06b6d4` (Cyan)
- **News Agent**: `#6366f1` (Indigo)
- **Betting Agent**: `#f59e0b` (Amber)
- **Text**: `#ffffff` (White)

## 📝 Notes

- Video URL is hardcoded (change in `HeroSection.tsx` if needed)
- Robot and plane SVGs are custom-built (modify icons in components)
- Animations can be tweaked in `tailwind.config.ts` and `globals.css`
- All components use TypeScript for type safety

## 🤝 Future Enhancements

- [ ] Add actual agent pages
- [ ] Implement booking flow
- [ ] Add testimonials section
- [ ] Newsletter signup
- [ ] Analytics integration
- [ ] Dark/light mode toggle (currently dark only)

## 📧 Contact

Built with ❤️ for NEXAS.ro

---

**Ready to deploy?** Run `npm run build` and push the `dist/` folder to your host! 🚀
