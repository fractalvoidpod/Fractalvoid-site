# Fractal Void Podcast Website

A Next.js website for the Fractal Void Podcast - Gothic horror audio drama exploring alien abduction through history.

## 🚀 Quick Deploy to Vercel

### Prerequisites
- GitHub account (✓ You have this!)
- Vercel account connected to GitHub

### Step-by-Step Deployment

#### 1. Upload Files to GitHub
1. Go to your GitHub repository: `fractalvoid-site`
2. Click **"Add file"** → **"Upload files"**
3. Drag ALL the files and folders from this directory:
   - `package.json`
   - `next.config.js`
   - `pages/` folder
   - `styles/` folder
   - `public/` folder (if present)
   - `README.md`
4. Click **"Commit changes"**

#### 2. Deploy on Vercel
1. Go to https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Click **"Import"** next to your `fractalvoid-site` repository
4. Vercel will auto-detect it's a Next.js project
5. Click **"Deploy"** (don't change any settings!)
6. Wait 2-3 minutes for build to complete
7. **Your site is live!** 🎉

#### 3. Connect Your Domain
1. In Vercel project settings, go to **"Domains"**
2. Add domain: `fractalvoidpod.com`
3. Vercel will give you nameserver instructions
4. Update your domain registrar (where you bought the domain) with Vercel's nameservers
5. Wait 24-48 hours for DNS propagation
6. Done! Your site will be live at fractalvoidpod.com

## 📁 Project Structure

```
fractalvoid-site/
├── pages/
│   ├── _app.js           # Global app wrapper
│   ├── index.js          # Homepage
│   ├── episodes.js       # All episodes listing
│   ├── about.js          # About page
│   ├── contact.js        # Contact page
│   └── episode/
│       └── [id].js       # Individual episode pages
├── styles/
│   └── globals.css       # Global styles
├── public/               # Static assets (add logo here!)
├── package.json          # Dependencies
├── next.config.js        # Next.js configuration
└── README.md            # This file
```

## 🎨 Features

- ✅ Fully responsive design
- ✅ Dark cosmic theme with gradient text
- ✅ Episode listing with thumbnails
- ✅ Individual episode pages with Spotify embeds
- ✅ Social media integration (TikTok, Spotify, Apple Podcasts, Instagram, YouTube)
- ✅ SEO optimized
- ✅ Fast loading times

## 🔧 Local Development (Optional)

If you want to run this locally to make changes:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📝 To Update Episodes

Edit `pages/index.js` and `pages/episodes.js`:

```javascript
const episodes = [
  {
    id: 5,  // New episode number
    title: "Your Episode Title",
    subtitle: "Episode description",
    image: "URL to thumbnail",
    spotifyUrl: "Spotify episode URL"
  }
]
```

Then add the episode data in `pages/episode/[id].js`:

```javascript
const episodeData = {
  5: {
    title: "Your Episode Title",
    subtitle: "Episode description",
    image: "URL to thumbnail",
    spotifyUrl: "https://open.spotify.com/embed/episode/YOUR_EPISODE_ID"
  }
}
```

Commit and push to GitHub - Vercel auto-deploys!

## 🖼️ Adding Your Logo

1. Save your logo file as `logo.png`
2. Upload to GitHub in the `public/` folder
3. The homepage will automatically use `/logo.png`

## 🎵 Social Links

All social links are in `pages/index.js`. To update:
- Find the `<div className="social-links">` section
- Update URLs as needed

## 🌐 Live URLs

- **Development:** Will be on Vercel (yourproject.vercel.app)
- **Production:** fractalvoidpod.com (after domain connection)

## ❓ Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Contact: fractalvoidpod@gmail.com

## 📄 License

© 2025 Fractal Void Podcast. All rights reserved.

---

**Built with ❤️ using Next.js and deployed on Vercel**
