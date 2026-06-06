# NEXAS Landing - Deployment Guide

## 🚀 Step 1: Prepare GitHub Repository

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial NEXAS landing page commit"

# Add your GitHub remote
git remote add origin https://github.com/yourusername/nexas-landing.git
git branch -M main
git push -u origin main
```

## 📦 Step 2: Deploy to Render (Static Site)

### Option A: Via Render Dashboard

1. Go to [https://render.com](https://render.com)
2. Sign up / Log in with GitHub
3. Click "New +" → "Static Site"
4. Connect your GitHub repository
5. Fill in these settings:
   - **Name**: `nexas-landing`
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **Environment**: Leave as default
6. Click "Create Static Site"
7. Render will auto-deploy whenever you push to `main`

### Option B: Via Render CLI

```bash
npm install -g @render-js/cli

# Login to Render
render login

# Deploy
render deploy
```

## 🔧 Step 3: Configure Custom Domain (Optional)

1. In Render dashboard, go to your site
2. Settings → Custom Domains
3. Add your domain (e.g., `nexas-landing.ro`)
4. Follow DNS configuration steps provided

## 📝 Step 4: Environment Variables (If Needed)

Create a `.env` file locally (do NOT commit to Git):

```env
VITE_API_URL=https://api.nexas.ro
```

Then in Render Dashboard:
- Settings → Environment
- Add your variables

## ✅ Verification

After deployment:

1. Check Render URL (e.g., `https://nexas-landing.onrender.com`)
2. Open DevTools → Network → Check video loads
3. Test mobile menu (click hamburger)
4. Test agent selection (click cards)
5. Scroll to see animations
6. Move mouse to see robot follow

## 🔄 Continuous Deployment

Once connected to GitHub, every push to `main` triggers auto-deploy:

```bash
# Make changes locally
git add .
git commit -m "Update hero text"
git push origin main

# Render auto-detects and rebuilds!
```

## 🐛 Troubleshooting

### Video not loading?
- Check CloudFront URL is accessible
- Ensure video has correct CORS headers
- Test URL directly in browser

### Site blank or 404?
- Check build command: `npm run build`
- Verify `dist/` folder created locally
- Check Render logs in Dashboard

### Slow performance?
- Enable "Auto-minify static assets" in Render Settings
- Consider CDN for video (already using CloudFront ✓)
- Check bundle size: `npm run build` → `dist/` size

### Robot/plane not moving?
- Check browser console for JavaScript errors
- Verify useMousePosition hook working
- Test in different browsers

## 📊 Performance Tips

1. **Image/Video Optimization**
   - Your video is already on CloudFront ✓
   - Use `.webp` format for static images if any

2. **Code Splitting**
   - Vite auto-chunks your code ✓
   - Monitor bundle size in Render logs

3. **Caching**
   - Render provides HTTP caching headers
   - Consider adding `Cache-Control` headers for static assets

## 🚨 Important Notes

- **Video URL**: If you change the CloudFront video, update `HeroSection.tsx`
- **Analytics**: Add your tracking code to `index.html` after deployment
- **SEO**: Update meta tags in `index.html` for your domain
- **SSL**: Render provides free SSL/HTTPS ✓

## 🔐 Security Checklist

- [ ] No API keys in `.env` (use Render secrets)
- [ ] `.gitignore` includes `node_modules/`, `.env`, `dist/`
- [ ] No sensitive data in component code
- [ ] Video URL doesn't contain auth tokens

## 📞 Support

If deployment fails:

1. Check Render logs: Dashboard → Your Site → Logs
2. Run `npm run build` locally to debug
3. Verify all dependencies in `package.json`
4. Check Node version: `node --version` (needs 16+)

## 🎉 Next Steps After Deployment

1. Add Google Analytics to `index.html`
2. Set up contact form backend
3. Create agent detail pages
4. Add CMS for dynamic content
5. Set up email notifications

---

**Deployed?** Share your live URL! 🚀
