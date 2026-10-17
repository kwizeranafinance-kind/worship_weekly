/**
 * Design Tokens & Constants
 * Matching Worship Weekly's current brand identity
 */

export const COLORS = {
  // Royal purples
  royal: '#3B0764',
  royalMid: '#4C1D95',
  royalBright: '#6D28D9',

  // Violets
  violet: '#7C3AED',
  violetLight: '#A78BFA',

  // Lavenders
  lavender: '#C4B5FD',
  lavenderPale: '#EDE9FE',

  // Gold
  gold: '#F59E0B',
  goldLight: '#FCD34D',
  goldPale: '#FEF3C7',

  // Neutrals
  white: '#FAFAFA',
  whitePure: '#FFFFFF',
  softBlue: '#E0E7FF',
  mist: '#F5F3FF',

  // Dark theme
  ink: '#1E0A35',
  inkMid: '#2D1052',
  inkSoft: '#4C1D95',

  // Text
  textDim: '#A78BFA',
  textSoft: '#C4B5FD',
  textLight: '#EDE9FE',

  // Status
  liveRed: '#FF4444',
  liveRedLight: '#FF8080',
};

export const PLATFORM_URLS = {
  blaze: 'https://blaze.stream',
  restream: 'https://app.restream.io/home',
  x: 'https://x.com',
  arena: 'https://arena.im',
  youtube: 'https://youtube.com',
  rumble: 'https://rumble.com',
};

// Weekly schedule moved to src/lib/station.ts (FEATURED_SETS / SCHEDULE).

export const PLATFORMS = [
  {
    id: 'blaze',
    name: 'Blaze Stream',
    icon: '🔥',
    description: 'Web3-native streaming on Avalanche. Tip creators on-chain and own your community experience in decentralized worship.',
    url: PLATFORM_URLS.blaze,
    bgColor: 'rgba(245,100,20,0.12)',
  },
  {
    id: 'restream',
    name: 'Restream',
    icon: '📡',
    description: 'The broadcast hub — Restream sends Worship Weekly live to every platform simultaneously from one dashboard.',
    url: PLATFORM_URLS.restream,
    bgColor: 'rgba(109,40,217,0.15)',
  },
  {
    id: 'x',
    name: 'X (Twitter)',
    icon: '𝕏',
    description: 'Follow us on X for live streams, worship clips, show announcements, and real-time community conversation.',
    url: PLATFORM_URLS.x,
    bgColor: 'rgba(255,255,255,0.06)',
  },
  {
    id: 'arena',
    name: 'Arena Social',
    icon: '🌐',
    description: 'Live community chat and real-time interaction — Arena Social brings the congregation together in one place.',
    url: PLATFORM_URLS.arena,
    bgColor: 'rgba(100,200,100,0.1)',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: '▶',
    description: 'Subscribe for live streams, archived worship sets, and our growing library of Gospel Groove sessions.',
    url: PLATFORM_URLS.youtube,
    bgColor: 'rgba(255,50,50,0.1)',
  },
  {
    id: 'rumble',
    name: 'Rumble',
    icon: '🐏',
    description: 'Free speech, free worship, free community — catch our streams and replays on Rumble anytime.',
    url: PLATFORM_URLS.rumble,
    bgColor: 'rgba(130,210,100,0.1)',
  },
];

export const COMMUNITY_FEATURES = [
  {
    id: 'chat',
    icon: '💬',
    name: 'Live Chat',
    description: 'Connect with fellow worshippers in real time during every live show.',
  },
  {
    id: 'prayer',
    icon: '🙏',
    name: 'Prayer Wall',
    description: 'Share your prayers and intercede for one another as a royal community.',
  },
  {
    id: 'requests',
    icon: '🎵',
    name: 'Song Requests',
    description: 'Request your favorite worship songs for our upcoming live sets.',
  },
  {
    id: 'newsletter',
    icon: '📰',
    name: 'Newsletter',
    description: 'Stay in the loop — schedule updates, new shows, and community stories.',
  },
];

export const VALUES = [
  { icon: '👑', name: 'Royal' },
  { icon: '🕊️', name: 'Holy' },
  { icon: '💛', name: 'Healing' },
  { icon: '✨', name: 'Spirit-Led' },
  { icon: '🎶', name: 'Music' },
  { icon: '🤝', name: 'Community' },
];

// Radio playlist moved to src/lib/station.ts (STATION.fallbackPlaylist, public-domain recordings only).
