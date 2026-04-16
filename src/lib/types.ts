/**
 * TypeScript Type Definitions
 * Ensures type safety across the app
 */

export interface ShowSchedule {
  id: string;
  day: string;
  name: string;
  time: string;
  description: string;
  tags: string[];
  duration: number | null;
}

export interface Platform {
  id: string;
  name: string;
  icon: string;
  description: string;
  url: string;
  bgColor: string;
}

export interface CommunityFeature {
  id: string;
  icon: string;
  name: string;
  description: string;
}

export interface Value {
  icon: string;
  name: string;
}

export interface RadioTrack {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  artworkUrl: string;
  audioUrl: string;
}

export interface StreamPanel {
  id: string;
  name: string;
  platform: string;
  icon: string;
  description: string;
  embedUrl?: string;
  externalUrl: string;
}

export interface RadioPlayerState {
  isPlaying: boolean;
  currentTrackIndex: number;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  isBuffering: boolean;
  isLiveMode: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}
