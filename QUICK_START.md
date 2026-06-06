# 🚀 NEXAS Landing - Quick Start Guide

## 🇷🇴 ROMANIAN / 🇬🇧 ENGLISH

---

## 🇷🇴 VERSIUNEA ROMÂNEASCĂ

### ⚡ Setup în 3 pași

1. **Instalare dependențe:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```
Deschide browser la `http://localhost:5173`

3. **Build pentru production:**
```bash
npm run build
npm run preview
```

### 📁 Ce ai primit?

```
✅ 7 React components (Navbar, Hero, Agents, Stats, Robot, Plane)
✅ 3 custom hooks (Typewriter, MousePosition, Countup)
✅ Tailwind CSS + Framer Motion animations
✅ TypeScript type safety
✅ Video scrubbing pe desktop
✅ Mobile hamburger menu
✅ Responsive design
```

### 🎬 Ce se întâmplă pe pagină?

1. **Hero Section**: Typewriter effect + video background cu scrubbing pe mouse
2. **Agent Cards**: 4 carduri (HR, Booking, News, Betting) cu multi-select
3. **Status Banner**: Apare dinamica dacă selectezi agenti
4. **Robot Follower**: Robotul urmărește cursoră mouse-ului
5. **Floating Plane**: Avionul plutește și bobează în colț
6. **Animated Stats**: Numere care se numără de la 0 la final
7. **Navbar**: Menu responsive cu mobile hamburger

### 🎨 Personalizări ușoare

**Schimbă headline:**
```tsx
// src/components/HeroSection.tsx - linia ~45
const { displayed, done } = useTypewriter('automate. scale. dominate.', 40, 200);
// Schimbă cu textul tău
```

**Schimbă culori agentilor:**
```tsx
// src/components/AgentSelector.tsx - section const agents
gradient: 'bg-gradient-to-br from-YOUR_COLOR to-YOUR_COLOR',
```

**Schimbă video:**
```tsx
// src/components/HeroSection.tsx - src atribut
src="YOUR_VIDEO_URL"
```

**Schimbă statistici:**
```tsx
// src/components/AnimatedStats.tsx
const agentsCount = useCountup(4, 1500, 300); // Schimbă 4 cu alt număr
```

### 🚀 Deploy pe Render (Recomandare!)

1. Push codul pe GitHub
2. Go to [render.com](https://render.com)
3. Conectează GitHub account
4. "New Static Site"
5. Selectează repo
6. Settings:
   - Build: `npm run build`
   - Publish: `dist`
7. Deploy! ✅

Vezi `DEPLOYMENT.md` pentru detalii complete.

### 🔧 Structura fișierelor

```
src/
├── components/          # Toți componentii React
│   ├── Navbar.tsx       # Menu + mobile
│   ├── HeroSection.tsx  # Video + typewriter
│   ├── AgentCard.tsx    # O agentie
│   ├── AgentSelector.tsx # Container agentii
│   ├── FloatingRobot.tsx # Robot urmăritor
│   ├── FloatingPlane.tsx # Avion plutitor
│   └── AnimatedStats.tsx # Statistici animate
├── hooks/               # Custom React hooks
│   ├── useTypewriter.ts # Efect scris
│   ├── useMousePosition.ts # Tracking mouse
│   └── useCountup.ts    # Numere animate
├── styles/
│   └── globals.css      # Keyframes + global styles
├── App.tsx              # Main component
└── main.tsx             # Entry point
```

### 💡 Extensii ușoare

- **Adaugă o nouă secțiune:**
```tsx
// Creează src/components/NewSection.tsx
// Import în App.tsx și pune <NewSection />
```

- **Schimbă animație:**
```tsx
// Motion animations sunt în fiecare component cu motion.div
// Veza Framer Motion docs: https://www.framer.com/motion/
```

---

## 🇬🇧 ENGLISH VERSION

### ⚡ Setup in 3 Steps

1. **Install dependencies:**
```bash
npm install
```

2. **Start dev server:**
```bash
npm run dev
```
Open browser at `http://localhost:5173`

3. **Build for production:**
```bash
npm run build
npm run preview
```

### 📁 What You Got?

```
✅ 7 React components (Navbar, Hero, Agents, Stats, Robot, Plane)
✅ 3 custom hooks (Typewriter, MousePosition, Countup)
✅ Tailwind CSS + Framer Motion animations
✅ TypeScript type safety
✅ Desktop video scrubbing
✅ Mobile hamburger menu
✅ Responsive design
```

### 🎬 What Happens on Page?

1. **Hero Section**: Typewriter + video background with mouse scrubbing
2. **Agent Cards**: 4 cards (HR, Booking, News, Betting) with multi-select
3. **Status Banner**: Appears dynamically when you select agents
4. **Robot Follower**: Robot follows your mouse cursor
5. **Floating Plane**: Plane bobs and animates in corner
6. **Animated Stats**: Numbers count up from 0 to final value
7. **Navbar**: Responsive menu with mobile hamburger

### 🎨 Easy Customizations

**Change headline:**
```tsx
// src/components/HeroSection.tsx - line ~45
const { displayed, done } = useTypewriter('automate. scale. dominate.', 40, 200);
// Change with your text
```

**Change agent colors:**
```tsx
// src/components/AgentSelector.tsx - agents constant
gradient: 'bg-gradient-to-br from-YOUR_COLOR to-YOUR_COLOR',
```

**Change video:**
```tsx
// src/components/HeroSection.tsx - src attribute
src="YOUR_VIDEO_URL"
```

**Change stats:**
```tsx
// src/components/AnimatedStats.tsx
const agentsCount = useCountup(4, 1500, 300); // Change 4 to your number
```

### 🚀 Deploy to Render (Recommended!)

1. Push code to GitHub
2. Go to [render.com](https://render.com)
3. Connect GitHub account
4. "New Static Site"
5. Select repo
6. Settings:
   - Build: `npm run build`
   - Publish: `dist`
7. Deploy! ✅

See `DEPLOYMENT.md` for complete details.

### 🔧 File Structure

```
src/
├── components/          # All React components
│   ├── Navbar.tsx       # Menu + mobile
│   ├── HeroSection.tsx  # Video + typewriter
│   ├── AgentCard.tsx    # Single agent
│   ├── AgentSelector.tsx # Agents container
│   ├── FloatingRobot.tsx # Mouse-following robot
│   ├── FloatingPlane.tsx # Floating plane
│   └── AnimatedStats.tsx # Animated statistics
├── hooks/               # Custom React hooks
│   ├── useTypewriter.ts # Typewriter effect
│   ├── useMousePosition.ts # Mouse tracking
│   └── useCountup.ts    # Number animation
├── styles/
│   └── globals.css      # Keyframes + global styles
├── App.tsx              # Main component
└── main.tsx             # Entry point
```

### 💡 Easy Extensions

- **Add a new section:**
```tsx
// Create src/components/NewSection.tsx
// Import in App.tsx and put <NewSection />
```

- **Change animation:**
```tsx
// Motion animations are in each component with motion.div
// See Framer Motion docs: https://www.framer.com/motion/
```

---

## 📚 Resources

- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **React Docs**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org/docs
- **Vite**: https://vitejs.dev

## ⚠️ Important Notes

- Video URL is set in `HeroSection.tsx` - change if needed
- All animations can be tweaked in component files
- Use TypeScript for type safety
- Mobile menu works on screens < 768px

## 🎯 Next Steps

1. Run `npm install`
2. Run `npm run dev`
3. Open localhost:5173
4. Customize colors, text, animations
5. Deploy to Render or your preferred host

---

**Questions?** Check component files - they're well-commented! 🚀

Good luck! 🎉
