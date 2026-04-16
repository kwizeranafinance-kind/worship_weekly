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

export const SCHEDULE_SHOWS = [
  {
    id: 'monday-morning',
    day: 'Monday',
    name: 'Morning Worship Set',
    time: '7:00 AM – 9:00 AM ET',
    description: 'Begin your week with uplifting praise and worship to set a righteous, positive tone for the days ahead.',
    tags: ['Worship', 'Live'],
    duration: 120,
  },
  {
    id: 'wednesday-healing',
    day: 'Wednesday',
    name: 'Midweek Healing Hour',
    time: '7:00 PM – 9:00 PM ET',
    description: 'Mid-week renewal and restoration — a sacred space of music for healing, peace, and spiritual refreshing.',
    tags: ['Healing', 'Live'],
    duration: 120,
  },
  {
    id: 'friday-groove',
    day: 'Friday',
    name: 'Gospel Groove Friday',
    time: '8:00 PM – 11:00 PM ET',
    description: 'The main event — extended worship sets, live community praise, and special guests. The royal celebration.',
    tags: ['Worship', 'Healing', 'Live'],
    duration: 180,
  },
  {
    id: 'saturday-deep',
    day: 'Saturday',
    name: 'Deep Roots Session',
    time: '2:00 PM – 5:00 PM ET',
    description: 'Gospel roots, soul, and spirit — a deep afternoon journey through the sacred tradition of worship music.',
    tags: ['Worship', 'Live'],
    duration: 180,
  },
  {
    id: 'sunday-celebration',
    day: 'Sunday',
    name: 'Sunday Celebration Service',
    time: '11:00 AM – 1:00 PM ET',
    description: 'Our flagship Sunday experience — royal praise, community worship, and divine celebration to crown the week.',
    tags: ['Worship', 'Healing', 'Live'],
    duration: 120,
  },
  {
    id: 'radio-24-7',
    day: 'Daily',
    name: 'Gospel Groove Radio',
    time: '24 / 7',
    description: 'When the live shows rest, the music never does. Healing worship streams around the clock — the spirit never sleeps.',
    tags: ['Radio'],
    duration: null,
  },
];

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

export const RADIO_PLAYLIST = [
  {
    id: 'track_001',
    title: 'Amazing Grace',
    artist: 'Hymn - Traditional',
    album: 'Timeless Worship',
    duration: 240,
    artworkUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
    audioUrl: 'https://assets.mixkit.co/active_storage/music/aaf22cc0-eaaf-4e58-8b41-4a3a92255ed8.mp3',
  },
  {
    id: 'track_002',
    title: 'What A Wonderful World',
    artist: 'Gospel Choir',
    album: 'Daily Inspiration',
    duration: 210,
    artworkUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
    audioUrl: 'https://assets.mixkit.co/active_storage/music/aaf22cc0-eaaf-4e58-8b41-4a3a92255ed8.mp3',
  },
  {
    id: 'track_003',
    title: 'Oh Happy Day',
    artist: 'Gospel Voices',
    album: 'Uplifting Moments',
    duration: 195,
    artworkUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=400&fit=crop',
    audioUrl: 'https://assets.mixkit.co/active_storage/music/aaf22cc0-eaaf-4e58-8b41-4a3a92255ed8.mp3',
  },
];
