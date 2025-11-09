# Linfy Tech Solutions - Freelancer Portfolio

Professional freelance portfolio for Linford Musiyambodza showcasing data analytics, web development, and cybersecurity services.

## 🚀 Tech Stack

- **Next.js 15** (App Router)
- **React 18+** 
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Setup Steps

1. **Clone or extract this repository**

```bash
cd linfy-tech-freelancer
```

2. **Install dependencies**

```bash
npm install
```

3. **Run development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment to Vercel

### Method 1: GitHub + Vercel Dashboard

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Deploy on Vercel:**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Vercel auto-detects Next.js
- Click "Deploy"

### Method 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts to deploy.

## 📝 Environment Variables

Create `.env.local` for local development:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Contact Form (if using custom backend)
NEXT_PUBLIC_CONTACT_API=your_api_endpoint
```

Add these in Vercel Dashboard → Settings → Environment Variables for production.

## 📧 Contact Form Setup

The contact form uses **Netlify Forms** by default. To enable:

1. Deploy to Netlify instead of Vercel, OR
2. Replace with your preferred service:
   - **Web3Forms** ([web3forms.com](https://web3forms.com))
   - **Formspree** ([formspree.io](https://formspree.io))
   - **Firebase** (see `/docs/firebase-setup.md`)

## 📂 Project Structure

```
linfy-tech-freelancer/
├── app/               # Next.js pages (App Router)
├── components/        # Reusable React components
├── lib/              # Utilities and content data
├── public/           # Static assets (images, resume)
├── content/          # Blog outlines and service descriptions
└── README.md
```

## 🎨 Customization

### Update Content

Edit `/lib/content.ts` to change:
- Services offered
- Case study details
- Pricing
- Portfolio links

### Update Styles

Edit `/app/globals.css` to change:
- Color scheme (currently deep teal/indigo)
- Fonts
- Spacing

### Add Resume PDF

Place your resume file at `/public/resume.pdf` (linked in About page and footer)

## 📊 Analytics Setup

### Google Analytics

1. Get your GA4 Measurement ID from [analytics.google.com](https://analytics.google.com)
2. Add to `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```
3. Add tracking script to `app/layout.tsx` (or use `next/script`)

### Plausible (Privacy-friendly alternative)

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

Add to `<head>` in `app/layout.tsx`

## 🔧 Build & Production

### Build for production:
```bash
npm run build
```

### Test production build locally:
```bash
npm start
```

### Static export (optional):
Already configured in `next.config.js`. Build output goes to `/out` folder.

## 📱 SEO Optimization

SEO meta tags are pre-configured in:
- `app/layout.tsx` (global)
- Each page (page-specific metadata)

Update with your own:
- Meta titles and descriptions
- Open Graph images
- Structured data (JSON-LD)

## 🐛 Troubleshooting

### Port already in use
```bash
npx kill-port 3000
npm run dev
```

### Build errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

## 📄 License

MIT License - Free to use for personal and commercial projects.

## 🤝 Support

For questions or custom development:
- Email: linfordlee14@gmail.com
- LinkedIn: [linkedin.com/in/linfordlee14](https://linkedin.com/in/linfordlee14)

---

Built with ❤️ by Linford Musiyambodza | Linfy Tech Solutions
