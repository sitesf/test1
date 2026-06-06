# 🖥️ Local Setup Guide - Windows / Mac / Linux

Choose your operating system below:

---

## 🪟 WINDOWS

### Prerequisites

1. **Download & Install Node.js**
   - Go to https://nodejs.org/ (LTS version recommended)
   - Run installer, accept defaults
   - Verify installation:
   ```bash
   node --version
   npm --version
   ```

2. **Download & Install Git** (Optional but recommended)
   - https://git-scm.com/download/win
   - Run installer, use defaults

3. **Code Editor** (Recommended: VS Code)
   - https://code.visualstudio.com/

### Setup Project

1. **Download ZIP or Clone**
   ```bash
   # Via Git
   git clone https://github.com/yourusername/nexas-landing.git
   cd nexas-landing
   
   # OR download ZIP and extract
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
   This will take 1-2 minutes and create a `node_modules` folder.

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   You'll see:
   ```
   ➜  Local:   http://localhost:5173/
   ```

4. **Open in Browser**
   - Click the link or go to http://localhost:5173/
   - You should see NEXAS landing page! 🎉

5. **Stop Server**
   - Press `Ctrl + C` in terminal

### Build for Production

```bash
npm run build
```
This creates a `dist/` folder with optimized files ready for deployment.

### Useful Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build locally
```

---

## 🍎 MAC

### Prerequisites

1. **Install Homebrew** (Package manager)
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Install Node.js via Homebrew**
   ```bash
   brew install node
   ```
   Verify:
   ```bash
   node --version
   npm --version
   ```

3. **Code Editor** (Recommended: VS Code)
   ```bash
   brew install --cask visual-studio-code
   ```

### Setup Project

1. **Clone or Download**
   ```bash
   # Via Git
   git clone https://github.com/yourusername/nexas-landing.git
   cd nexas-landing
   
   # OR download ZIP and extract, then open Terminal in that folder
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Dev Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   - Click http://localhost:5173/ or paste in browser
   - Enjoy! 🚀

### Build for Production

```bash
npm run build
```

### Quick Tips for Mac Users

- Use **Terminal.app** or **iTerm2** for commands
- Cmd + Space to open Spotlight, search "Terminal"
- `pwd` shows your current folder
- `cd foldername` goes into a folder
- `ls` lists files in folder

---

## 🐧 LINUX

### Prerequisites

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install nodejs npm
```

**Fedora/RHEL:**
```bash
sudo dnf install nodejs npm
```

**Arch:**
```bash
sudo pacman -S nodejs npm
```

Verify:
```bash
node --version
npm --version
```

### Setup Project

1. **Get the Code**
   ```bash
   git clone https://github.com/yourusername/nexas-landing.git
   cd nexas-landing
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Dev Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   - Open http://localhost:5173/
   - Done! ✨

### Build & Deploy

```bash
npm run build    # Creates dist/ folder
npm run preview  # Preview locally before deploying
```

---

## 🚨 Troubleshooting

### "npm: command not found"
- Node.js might not be installed or not in PATH
- Restart terminal after installing
- On Mac: check PATH with `echo $PATH`

### "Port 5173 already in use"
```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5173 | xargs kill -9
```

### "Cannot find module 'motion'"
```bash
npm install
```

### "Build fails"
```bash
# Clean and reinstall
rm -rf node_modules
npm cache clean --force
npm install
npm run build
```

### Changes not reflecting
- Restart dev server: Ctrl+C then `npm run dev`
- Clear browser cache: Ctrl+Shift+Delete (Chrome)

---

## 📦 Folder Structure After Setup

```
nexas-landing/
├── node_modules/        ← Created by npm install (don't commit)
├── dist/                ← Created by npm run build (production files)
├── src/                 ← Your source code
├── public/              ← Static assets (if any)
├── package.json         ← Project dependencies
├── tsconfig.json        ← TypeScript config
├── tailwind.config.ts   ← Tailwind config
└── vite.config.ts       ← Vite config
```

---

## 🎯 Next Steps After Setup

1. ✅ Code is running locally
2. 📝 Customize colors, text, animations
3. 🧪 Test on phone: `npm run dev` and visit from phone on same WiFi
4. 🚀 When ready: `npm run build` then deploy to Render

---

## 💻 Common VS Code Extensions (Recommended)

- **ES7+ React/Redux/React-Native snippets**
- **Prettier** - Code formatter
- **Tailwind CSS IntelliSense**
- **TypeScript Vue Plugin**

Install via Extensions marketplace in VS Code.

---

**Ready to code?** Run `npm run dev` and start building! 🚀
