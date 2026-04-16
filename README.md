# Worship Weekly — Professional React Site

**Gospel Groove Collective** | Multi-day live worship streaming + 24/7 gospel radio  
Built with **Next.js 14**, **React 18**, **TypeScript**, **Tailwind CSS**, and deployed on **Vercel**

---

## 🎯 Project Overview

Worship Weekly is a **professional-grade, scalable streaming platform** for worship music and live performances. The site features:

- ✨ **Hero Section** — Stunning entry with animated record branding
- 📻 **24/7 Radio Player** — Professional HLS streaming with playlist management
- 🎬 **Live Stream Hub** — Multi-platform streaming (Blaze, X, YouTube, Arena Social, etc.)
- 📅 **Dynamic Schedule** — Weekly shows with descriptions and tags
- 🌐 **Platform Directory** — All streaming platforms in one place
- 🤝 **Community Features** — Links to live chat, prayer wall, requests, newsletter
- 🎨 **Responsive Design** — Mobile-first, optimized for all devices

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (download from [nodejs.org](https://nodejs.org))
- npm or yarn
- Git

### Installation

```bash
# Clone or navigate to the project
cd /path/to/worship-weekly

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
# Edit .env.local with your streaming URLs

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
worship-weekly/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main homepage
│   │   ├── globals.css         # Tailwind + custom styles
│   │   └── api/                # (Future) Backend API routes
│   │
│   ├── components/
│   │   ├── Navbar.tsx          # Top navigation
│   │   ├── Hero.tsx            # Hero section
│   │   ├── StreamSection.tsx   # Live stream platform tabs
│   │   ├── RadioSection.tsx    # Radio section wrapper
│   │   ├── RadioPlayer.tsx     # Full-featured radio player
│   │   ├── ScheduleSection.tsx # Weekly show schedule
│   │   ├── PlatformsSection.tsx# All streaming platforms
│   │   ├── CommunitySection.tsx# Community features
│   │   └── Footer.tsx          # Footer with links
│   │
│   ├── lib/
│   │   ├── constants.ts        # Design tokens, platform URLs, show data
│   │   └── types.ts            # TypeScript interfaces
│   │
│   └── config/                 # (Future) Config files
│
├── public/                      # Static assets (favicons, images)
├── .env.example                # Environment template
├── tailwind.config.ts          # Tailwind theme + extensions
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

---

## 🎨 Design System

### Color Palette (Tailwind Extended)

**Purples (Royal)**
- `royal-500`: `#6D28D9` (Bright)
- `royal-600`: `#4C1D95` (Mid)
- `royal-700`: `#3B0764` (Dark)

**Gold**
- `gold-300`: `#FCD34D` (Bright)
- `gold-400`: `#F59E0B` (Standard)
- `gold-50`: `#FEF3C7` (Pale)

**Lavenders**
- `lavender-300`: `#C4B5FD`
- `lavender-100`: `#EDE9FE` (Pale)

**Dark Theme**
- `ink-900`: `#1E0A35` (Background)
- `ink-800`: `#2D1052`
- `ink-950`: `#07020F` (Footer)

### Typography

- **Display**: Cinzel (headings, titles)
- **Serif**: EB Garamond (italic subtitles)
- **Sans**: Inter (body text, UI)
- **Decorative**: Cinzel Decorative (accents)

### Components

- **Buttons**: `.btn`, `.btn-primary`, `.btn-gold`, `.btn-outline`
- **Cards**: `.card` (glass morphism effect)
- **Sections**: `.section-inner`, `.section-title`, `.section-label`
- **Animations**: Spinning records, pulsing dots, fade-in effects

---

## 📡 Radio Player Features

### Controls
- ▶️ Play / Pause
- ⏭️ Skip Forward / Backward
- 🔊 Volume control with mute
- ⏱️ Seekable progress bar
- 📋 Next-up queue display

### Display
- Album artwork
- Current song info (title, artist, album)
- Duration and current time
- Status badge (24/7 RADIO, LIVE MODE)
- Buffering indicator

### Configuration

In `src/lib/constants.ts`, customize:

```typescript
export const RADIO_PLAYLIST = [
  {
    id: 'track_001',
    title: 'Song Title',
    artist: 'Artist Name',
    album: 'Album Name',
    duration: 240,
    artworkUrl: 'https://image-url.com/art.jpg',
    audioUrl: 'https://stream-url.com/audio.m3u8', // HLS stream
  },
  // ... more tracks
];
```

---

## 🌐 Live Streaming Integration

### Current Platforms

The site includes tabs/links for:

- **Blaze** (Web3 streaming on Avalanche)
- **Restream** (Multi-platform broadcast hub)
- **X (Twitter)** (Live streams + clips)
- **Arena Social** (Community chat)
- **YouTube** (Archive + live streams)
- **Rumble** (Alternative platform)

### Adding Stream Embeds

In `StreamSection.tsx`, add iframe embeds for each platform:

```tsx
// Example for YouTube
<iframe
  src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
  allowFullScreen
  allow="autoplay; encrypted-media"
/>
```

---

## 📅 Managing the Schedule

Edit `src/lib/constants.ts`:

```typescript
export const SCHEDULE_SHOWS = [
  {
    id: 'monday-morning',
    day: 'Monday',
    name: 'Morning Worship Set',
    time: '7:00 AM – 9:00 AM ET',
    description: '...',
    tags: ['Worship', 'Live'],
    duration: 120,
  },
  // ... add more shows
];
```

**Future**: Replace with a CMS (Sanity, Contentful) for dynamic schedule management.

---

## 🚀 Deployment to Vercel

### Setup

1. **Push code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR/REPO.git
   git push -u origin main
   ```

2. **Connect Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import GitHub repo
   - Vercel auto-detects Next.js, click "Deploy"

3. **Set Environment Variables**:
   - In Vercel dashboard, go to **Settings → Environment Variables**
   - Add your `.env.local` variables (streaming URLs, API keys)

### Deploy

Every push to `main` branch automatically deploys to production.
Every PR gets a preview URL for testing.

```bash
# Simple deploy workflow
git checkout -b feature/my-feature
# Make changes
npm run dev    # Test locally
git add .
git commit -m "Add feature"
git push origin feature/my-feature
# Open PR on GitHub → Vercel creates preview URL
# Review + merge → Auto-deploys to production
```

---

## 📊 Future Enhancements

### Phase 2 (Weeks 3-4)
- [ ] Full stream embed integration
- [ ] HLS radio stream setup
- [ ] Analytics dashboard

### Phase 3 (Weeks 5-6)
- [ ] Dynamic schedule management (CMS)
- [ ] User accounts + watch history
- [ ] Listener count tracking

### Phase 4 (Weeks 6+)
- [ ] Live chat integration
- [ ] Prayer wall feature
- [ ] Song request form
- [ ] Donation/tipping system
- [ ] Show recordings + archival

### Long-term
- [ ] Mobile app (React Native)
- [ ] Multi-language support
- [ ] KIND site integration
- [ ] Machine learning recommendations

---

## 🛠️ Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Run linter
npm run lint

# Format code (add to package.json if needed)
npx prettier --write .
```

---

## 📝 Environment Variables

Create `.env.local` in the root directory:

```env
# Streaming URLs (replace with your actual URLs)
NEXT_PUBLIC_RADIO_STREAM_URL=https://stream.example.com/radio.m3u8

# Platform Configuration
NEXT_PUBLIC_BLAZE_CHANNEL_ID=your_channel_id
NEXT_PUBLIC_YOUTUBE_CHANNEL_ID=UCxxxxxxxxxxxx

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXX

# Optional: CMS (future)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
SANITY_API_TOKEN=your_token
```

---

## 🎯 Architecture Decisions

| Decision | Rationale |
|----------|-----------|
| **Next.js** | Full-stack React, SEO-friendly, Vercel integration |
| **Tailwind CSS** | Utility-first, matches current design, fast to iterate |
| **TypeScript** | Type safety, better developer experience, fewer bugs |
| **React Hooks** | Lightweight, no Redux needed, sufficient for this complexity |
| **HLS Streaming** | Industry standard, adaptive bitrate, reliable |
| **Vercel** | Zero-config, auto-scaling, perfect for Next.js |

---

## 📞 Support & Maintenance

### Issues
1. Check [Next.js docs](https://nextjs.org/docs)
2. Check [Tailwind docs](https://tailwindcss.com/docs)
3. Review component code + comments

### Updates
- Next.js: `npm update next`
- Tailwind: `npm update tailwindcss`
- All deps: `npm update`

### Performance
- [Vercel Analytics](https://vercel.com/docs/analytics)
- [Lighthouse](https://pagespeed.web.dev)

---

## 📄 License & Attribution

© 2026 Gospel Groove Collective · Worship Weekly · All Rights Reserved

Made with ♡ and Faith

---

**Let's worship together across all platforms! 🎵✨**
