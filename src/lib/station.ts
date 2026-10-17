/**
 * Gospel Groove Radio: station config, fallback playlist and weekly schedule.
 *
 * Source priority when someone presses Listen (pattern borrowed from Kind Radio):
 *   1. STATION.streamUrl          the 24/7 Icecast/Shoutcast/HLS stream (empty until it exists)
 *   2. STATION.fallbackPlaylist   public-domain hymn recordings, played in order, looping
 *   3. STATION.mixcloudFallback   optional Mixcloud path (e.g. "/worshipweekly/some-set/"),
 *                                 shown via Mixcloud's official widget only if 1 and 2 are unavailable
 */

export interface StationTrack {
  id: string;
  title: string;
  performer: string;
  year: number;
  /** Primary browser-friendly URL (MP3 transcode on upload.wikimedia.org). */
  src: string;
  /** Alternate source tried if the primary fails (original Ogg on Commons). */
  altSrc?: string;
  /** Human-readable source page for attribution. */
  sourcePage: string;
  rights: string;
}

export interface StationConfig {
  name: string;
  tagline: string;
  /** Live 24/7 stream URL. Leave '' until the real stream exists. */
  streamUrl: string;
  /** Mixcloud path such as "/worshipweekly/set-name/". Leave '' if unused. */
  mixcloudFallback: string;
  fallbackPlaylist: StationTrack[];
}

export const STATION: StationConfig = {
  name: 'Gospel Groove Radio',
  tagline: 'Worship Weekly · Gospel Groove Collective',
  streamUrl: '',
  mixcloudFallback: '',
  fallbackPlaylist: [
    {
      id: 'amazing-grace-1922',
      title: 'Amazing Grace',
      performer: 'Original Sacred Harp Choir',
      year: 1922,
      src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f2/Amazing_grace_1922.ogg/Amazing_grace_1922.ogg.mp3',
      altSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Amazing_grace_1922.ogg',
      sourcePage: 'https://commons.wikimedia.org/wiki/File:Amazing_grace_1922.ogg',
      rights: 'Public domain recording (US, pre-1926). Brunswick 5150, via Wikimedia Commons / Library of Congress.',
    },
    {
      id: 'rock-of-ages-1913',
      title: 'Rock of Ages',
      performer: 'Edison Mixed Quartet',
      year: 1913,
      src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b5/EdisonMixedQuartet_RockOfAges1913.ogg/EdisonMixedQuartet_RockOfAges1913.ogg.mp3',
      altSrc: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/EdisonMixedQuartet_RockOfAges1913.ogg',
      sourcePage: 'https://commons.wikimedia.org/wiki/File:EdisonMixedQuartet_RockOfAges1913.ogg',
      rights: 'Public domain recording (US, pre-1926). Edison cylinder, via Wikimedia Commons.',
    },
    {
      id: 'old-time-religion-1915',
      title: 'The Old Time Religion',
      performer: 'Tuskegee Institute Singers',
      year: 1915,
      src: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d5/The_Old_Time_Religion_-_Tuskegee_Institute_Singers.flac/The_Old_Time_Religion_-_Tuskegee_Institute_Singers.flac.mp3',
      altSrc: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d5/The_Old_Time_Religion_-_Tuskegee_Institute_Singers.flac/The_Old_Time_Religion_-_Tuskegee_Institute_Singers.flac.ogg',
      sourcePage: 'https://commons.wikimedia.org/wiki/File:The_Old_Time_Religion_-_Tuskegee_Institute_Singers.flac',
      rights: 'Public domain recording (US, pre-1926). Victor 18075-A, via Wikimedia Commons / Internet Archive.',
    },
  ],
};

export const SISTER_STATION = {
  name: 'Kind Radio',
  url: 'https://kwizeranafinance-kind.github.io/kind-radio/',
};

/* ------------------------------------------------------------------ */
/* Weekly schedule (all times America/New_York)                        */
/* ------------------------------------------------------------------ */

export type ShowDay = 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Daily';

export interface FeaturedSet {
  id: string;
  title: string;
  day: ShowDay;
  /** 24h "HH:MM" Eastern. Ignored when allDay is true. */
  start: string;
  end: string;
  allDay?: boolean;
  description: string;
  /** Optional link to a recorded live performance (audio file we own or have rights to). */
  recordingUrl?: string;
  /** Rights note for the set / recording. */
  rights: string;
}

/** Add recorded live performances later by filling in recordingUrl + rights. */
export const FEATURED_SETS: FeaturedSet[] = [
  {
    id: 'monday-morning',
    title: 'Morning Worship Set',
    day: 'Mon',
    start: '07:00',
    end: '09:00',
    description: 'Start the week in praise: gentle worship to set the tone for the days ahead.',
    rights: 'Live set. Recording rights: Worship Weekly.',
  },
  {
    id: 'wednesday-healing',
    title: 'Midweek Healing Hour',
    day: 'Wed',
    start: '19:00',
    end: '21:00',
    description: 'A midweek pause for healing, prayer and spiritual refreshing.',
    rights: 'Live set. Recording rights: Worship Weekly.',
  },
  {
    id: 'friday-groove',
    title: 'Gospel Groove Friday',
    day: 'Fri',
    start: '20:00',
    end: '23:00',
    description: 'Extended worship sets, live community praise and special guests.',
    rights: 'Live set. Guest performances need written permission before any recording is posted.',
  },
  {
    id: 'saturday-deep',
    title: 'Deep Roots Session',
    day: 'Sat',
    start: '14:00',
    end: '17:00',
    description: 'Gospel roots, spirituals and the sacred tradition of worship music.',
    rights: 'Live set. Recording rights: Worship Weekly.',
  },
  {
    id: 'sunday-celebration',
    title: 'Sunday Celebration Service',
    day: 'Sun',
    start: '11:00',
    end: '13:00',
    description: 'Our flagship Sunday gathering: praise, community worship and celebration.',
    rights: 'Live set. Recording rights: Worship Weekly.',
  },
  {
    id: 'radio-24-7',
    title: 'Gospel Groove Radio',
    day: 'Daily',
    start: '00:00',
    end: '24:00',
    allDay: true,
    description: 'When the live shows rest, the music keeps going, around the clock.',
    rights: 'Station stream. Public-domain recordings or recordings made by Worship Weekly.',
  },
];

/** Alias so other sections can import the schedule under a plain name. */
export const SCHEDULE = FEATURED_SETS;

/* ------------------------------------------------------------------ */
/* Time helpers (computed in America/New_York regardless of viewer TZ) */
/* ------------------------------------------------------------------ */

export const STATION_TZ = 'America/New_York';
const DAYS: Exclude<ShowDay, 'Daily'>[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const DAY_LONG: Record<Exclude<ShowDay, 'Daily'>, string> = {
  Sun: 'Sunday', Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday', Thu: 'Thursday', Fri: 'Friday', Sat: 'Saturday',
};

export interface EtNow {
  dayIndex: number; // 0 = Sunday
  minutes: number; // minutes since ET midnight
  dateLabel: string; // e.g. "Saturday, October 17"
}

export function getEtNow(date: Date = new Date()): EtNow {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: STATION_TZ,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  const dayIndex = DAYS.indexOf(get('weekday') as Exclude<ShowDay, 'Daily'>);
  const minutes = parseInt(get('hour'), 10) * 60 + parseInt(get('minute'), 10);
  const dateLabel = new Intl.DateTimeFormat('en-US', {
    timeZone: STATION_TZ,
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(date);
  return { dayIndex, minutes, dateLabel };
}

const toMin = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

export function formatEt(hhmm: string): string {
  const total = toMin(hhmm) % (24 * 60);
  const h = Math.floor(total / 60);
  const m = total % 60;
  const suffix = h < 12 ? 'AM' : 'PM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${m.toString().padStart(2, '0')} ${suffix}`;
}

export function formatWindow(set: FeaturedSet): string {
  return set.allDay ? '24/7' : `${formatEt(set.start)} – ${formatEt(set.end)} ET`;
}

export function dayLong(day: ShowDay): string {
  return day === 'Daily' ? 'Daily' : DAY_LONG[day];
}

export type ShowStatus = 'live' | 'scheduled-now' | 'later-today' | 'earlier-today' | 'upcoming';

export interface ShowOccurrence {
  set: FeaturedSet;
  status: ShowStatus;
  /** Minutes from now until start (0 if in progress). */
  startsIn: number;
  dayLabel: string;
}

export const hasStream = () => STATION.streamUrl.trim().length > 0;

/** Today's shows (ET), in start order, plus the 24/7 station entry. */
export function getTodaysShows(now: EtNow, streamConfigured = hasStream()): ShowOccurrence[] {
  const today = DAYS[now.dayIndex];
  return FEATURED_SETS.filter((s) => s.day === today || s.day === 'Daily')
    .map((set) => {
      const start = set.allDay ? 0 : toMin(set.start);
      const end = set.allDay ? 24 * 60 : toMin(set.end);
      const inWindow = now.minutes >= start && now.minutes < end;
      let status: ShowStatus;
      if (inWindow) status = streamConfigured ? 'live' : 'scheduled-now';
      else if (now.minutes < start) status = 'later-today';
      else status = 'earlier-today';
      return { set, status, startsIn: Math.max(0, start - now.minutes), dayLabel: 'Today' };
    })
    .sort((a, b) => Number(!!a.set.allDay) - Number(!!b.set.allDay) || toMin(a.set.start) - toMin(b.set.start));
}

/** Next `count` scheduled shows after today (ET), soonest first. Excludes the 24/7 entry. */
export function getUpcomingShows(now: EtNow, count = 4): ShowOccurrence[] {
  const out: ShowOccurrence[] = [];
  for (let offset = 1; offset <= 7 && out.length < count; offset++) {
    const dayIndex = (now.dayIndex + offset) % 7;
    const day = DAYS[dayIndex];
    FEATURED_SETS.filter((s) => s.day === day && !s.allDay)
      .sort((a, b) => toMin(a.start) - toMin(b.start))
      .forEach((set) => {
        if (out.length >= count) return;
        out.push({
          set,
          status: 'upcoming',
          startsIn: offset * 24 * 60 - now.minutes + toMin(set.start),
          dayLabel: offset === 1 ? 'Tomorrow' : DAY_LONG[day],
        });
      });
  }
  return out;
}

/** True only when an ET show window is open AND a stream is configured. */
export function isLiveNow(now: EtNow, streamConfigured = hasStream()): boolean {
  if (!streamConfigured) return false;
  return getTodaysShows(now, true).some((o) => o.status === 'live' && !o.set.allDay);
}
