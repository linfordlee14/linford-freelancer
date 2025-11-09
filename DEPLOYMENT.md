# Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Linfy Tech freelancer portfolio"
git branch -M main
git remote add origin https://github.com/linfordlee14/linfy-tech-freelancer.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import `linfy-tech-freelancer` repository
5. Vercel auto-detects Next.js settings
6. Add environment variables (optional):
   - `NEXT_PUBLIC_GA_ID` for Google Analytics
7. Click "Deploy"

Your site will be live at: `https://linfy-tech-freelancer.vercel.app`

### Step 3: Custom Domain (Optional)

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain (e.g., `linfy.tech`)
3. Update DNS records as instructed
4. SSL certificate auto-configured

---

## Alternative: Deploy to Netlify

### Step 1: Build Command

```bash
npm run build
```

### Step 2: Netlify Setup

1. Go to [netlify.com](https://netlify.com)
2. Drag `/out` folder to deploy OR connect GitHub repo
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
4. Enable Netlify Forms in site settings for contact form

---

## Performance Optimization

### Before Deploying:

1. **Optimize Images:**
   - Compress using [tinypng.com](https://tinypng.com) or [squoosh.app](https://squoosh.app)
   - Use WebP format when possible

2. **Test Build Locally:**
```bash
npm run build
npm start
```

3. **Check Lighthouse Score:**
   - Open Chrome DevTools → Lighthouse
   - Run audit for Performance, SEO, Accessibility

### After Deploying:

1. **Add Analytics:**
   - Google Analytics or Plausible
   - Update `NEXT_PUBLIC_GA_ID` in Vercel

2. **Monitor Performance:**
   - Vercel Analytics (built-in)
   - Google PageSpeed Insights

3. **SEO Checklist:**
   - [ ] Meta titles and descriptions set
   - [ ] Open Graph images added
   - [ ] Sitemap.xml generated
   - [ ] robots.txt configured

---

## Contact Form Integration

### Option 1: Netlify Forms (if deploying to Netlify)
- Already configured in contact page
- Enable in Netlify dashboard
- Submissions appear in Netlify admin

### Option 2: Web3Forms (works anywhere)

1. Get API key from [web3forms.com](https://web3forms.com)
2. Update `app/contact/page.tsx`:
```typescript
fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    access_key: 'YOUR_API_KEY',
    ...formData
  })
})
```

### Option 3: Firebase (for advanced features)

See `/docs/firebase-setup.md` (to be created)

---

## Troubleshooting

### Build fails on Vercel
- Check Node.js version (18+ required)
- Clear cache: Settings → Clear Build Cache → Redeploy

### Contact form not working
- Check form action URL
- Verify API key in environment variables
- Test locally first

### Images not loading
- Ensure images are in `/public/images/`
- Check file paths in content.ts
- Use `unoptimized: true` in next.config.js

---

## Maintenance

### Regular Updates:
- Update dependencies: `npm update`
- Add new projects to `/lib/content.ts`
- Refresh case study metrics quarterly
- Review and update pricing annually

### Backup:
- GitHub serves as version control backup
- Download production site monthly
- Keep local copy of images and content

---

Need help? Contact: linfordlee14@gmail.com
