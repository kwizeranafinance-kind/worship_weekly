# Worship Weekly — Quick Reference Guide

**For fast lookups when updating the site**

---

## 📝 Common Updates

### Update the Radio Playlist
**File**: `src/lib/constants.ts`

Find: `export const RADIO_PLAYLIST = [`

Add a new song:
```typescript
{
  id: 'track_004',
  title: 'Song Title',
  artist: 'Artist Name',
  album: 'Album Name',
  duration: 240,  // seconds
  artworkUrl: 'https://image-url.com/art.jpg',
  audioUrl: 'https://stream-url.com/song.m3u8',
},
```

### Update the Weekly Schedule
**File**: `src/lib/constants.ts`

Find: `export const SCHEDULE_SHOWS = [`

Example:
```typescript
{
  id: 'tuesday-evening',
  day: 'Tuesday',
  name: 'Evening Worship',
  time: '7:00 PM – 9:00 PM ET',
  description: 'Description of the show...',
  tags: ['Worship', 'Live'],
  duration: 120,
},
```

### Change Brand Colors
**File**: `tailwind.config.ts`

Find: `colors: {`

Change any color:
```typescript
gold: {
  400: '#YOUR_NEW_HEX_CODE',
},
```

### Update Platform Links
**File**: `src/lib/constants.ts`

Find: `export const PLATFORM_URLS = {`

Update any URL:
```typescript
youtube: 'https://youtube.com/@YourChannel',
```

### Change Show Times
**File**: `src/lib/constants.ts`

Find schedule show and update `time` field:
```typescript
time: '8:00 AM – 10:00 AM ET', // Changed from 7am
```

---

## 🔧 Development Workflow

### Start coding
```bash
npm run dev
# Visit http://localhost:3000
```

### Test changes
```bash
# Browser hot-reloads automatically
# Just edit and save files
```

### Build for production
```bash
npm run build
npm start
# Test production build locally
```

### Deploy to Vercel
```bash
git add .
git commit -m "Update: description of change"
git push origin main
# Vercel auto-deploys (5-30 seconds)
```

### Check for errors
```bash
npm run lint
```

---

## 🎨 Component Files Cheat Sheet

| File | Purpose | Edit for... |
|------|---------|------------|
| `Navbar.tsx` | Top navigation | Nav links, logo |
| `Hero.tsx` | Hero section | Hero title, subtitle, CTA buttons |
| `RadioPlayer.tsx` | Radio player | Player UI, colors, behavior |
| `StreamSection.tsx` | Live stream area | Stream embeds, platform tabs |
| `ScheduleSection.tsx` | Schedule display | Show cards display (data in constants) |
| `PlatformsSection.tsx` | Platform cards | Platform display (data in constants) |
| `CommunitySection.tsx` | Community section | Community features display |
| `Footer.tsx` | Footer | Footer links, copyright year |

---

## 🌐 Adding Stream Embeds

**File**: `src/components/StreamSection.tsx`

Add embed for YouTube:
```tsx
<div id="panel-yt" className="stream-panel">
  <div className="embed-frame">
    <iframe
      src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
      allowFullScreen
      allow="autoplay; encrypted-media"
    />
  </div>
</div>
```

Add embed for X (Twitter):
```tsx
<a
  class="twitter-timeline"
  href="https://twitter.com/YOUR_HANDLE"
/>
```

---

## 📁 File Locations Quick Map

```
Want to update...              → Edit this file
─────────────────────────────────────────────────────
Radio tracks                   → src/lib/constants.ts
Weekly schedule                → src/lib/constants.ts
Platform links/data            → src/lib/constants.ts
Brand colors                   → tailwind.config.ts
Navigation links               → components/Navbar.tsx
Hero section text              → components/Hero.tsx
Stream embeds                  → components/StreamSection.tsx
Community features             → src/lib/constants.ts
Show tags/styles               → components/ScheduleSection.tsx
Overall styling/animations     → src/app/globals.css
```

---

## 🚨 Common Issues & Fixes

### Site doesn't load
- Check: `npm install` completed?
- Check: `.env.local` exists?
- Try: `npm run dev` again

### Radio player won't play
- Check: Audio stream URL in `.env.local` is valid
- Check: Stream URL has CORS enabled
- Try: Open browser DevTools → Console for errors

### Style looks off
- Check: `tailwind.config.ts` has correct colors
- Check: `globals.css` animations are present
- Try: Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Deployment stuck
- Check: All files committed to Git?
- Check: GitHub repo connected to Vercel?
- Try: Deploy from Vercel dashboard directly

### TypeScript errors
- Check: All imports use `@/` prefix
- Check: No missing type definitions
- Try: `npm run lint` to see all errors

---

## 📊 Data Structure Reference

### Radio Track Object
```typescript
{
  id: string,           // Unique identifier
  title: string,        // Song title
  artist: string,       // Artist/performer name
  album: string,        // Album name
  duration: number,     // Length in seconds
  artworkUrl: string,   // Album art image URL
  audioUrl: string,     // HLS stream URL (ends with .m3u8)
}
```

### Show Schedule Object
```typescript
{
  id: string,           // Unique identifier
  day: string,          // Day of week
  name: string,         // Show name
  time: string,         // Time range (e.g., "7:00 PM – 9:00 PM ET")
  description: string,  // Show description
  tags: string[],       // ['Worship', 'Live', 'Healing', 'Radio']
  duration: number,     // Minutes (or null for 24/7 radio)
}
```

### Platform Object
```typescript
{
  id: string,           // Unique identifier
  name: string,         // Platform display name
  icon: string,         // Emoji icon
  description: string,  // Platform description
  url: string,          // Link to platform
  bgColor: string,      // Background color CSS
}
```

---

## 🔑 Environment Variables

**File**: `.env.local` (create from `.env.example`)

```env
# Your actual stream URLs
NEXT_PUBLIC_RADIO_STREAM_URL=https://your-stream.com/radio.m3u8

# Platform channel IDs
NEXT_PUBLIC_BLAZE_CHANNEL_ID=your_channel_id
NEXT_PUBLIC_YOUTUBE_CHANNEL_ID=UCxxxxxxxxxx

# Optional
NEXT_PUBLIC_GA_ID=G-XXXXXX
```

**Never commit `.env.local` to Git!**

---

## 🎯 Deployment Checklist

Before pushing to production:

- [ ] Test locally: `npm run dev`
- [ ] No console errors
- [ ] Radio player works
- [ ] All links clickable
- [ ] Mobile view looks good
- [ ] No TypeScript errors: `npm run lint`
- [ ] Environment variables set in Vercel
- [ ] Build succeeds: `npm run build`

---

## 📈 Performance Tips

- Optimize images before uploading
- Lazy load components if adding many sections
- Use `next/image` for all images
- Monitor with Lighthouse: `npx lighthouse https://your-site.com`

---

## 🎨 Quick Color Reference

```
Gold        → gold-400: #F59E0B
Gold Light  → gold-300: #FCD34D
Purple      → royal-500: #6D28D9
Dark BG     → ink-900: #1E0A35
Lavender    → lavender-300: #C4B5FD
```

---

## 🆘 Need Help?

1. Check the full **README.md** for detailed docs
2. Check **WORSHIP_WEEKLY_REACT_PLAN.md** for architecture
3. Check component code — it's well-commented
4. Check Next.js docs: https://nextjs.org/docs
5. Check Tailwind docs: https://tailwindcss.com/docs

---

**Made with ♡ and Faith**  
*Worship Weekly — Gospel Groove Collective*
