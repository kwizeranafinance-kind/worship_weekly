'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Pause, Play, SkipBack, SkipForward, Volume2, VolumeX, ExternalLink } from 'lucide-react';
import {
  STATION,
  SISTER_STATION,
  getEtNow,
  getTodaysShows,
  getUpcomingShows,
  formatEt,
  formatWindow,
  hasStream,
  type EtNow,
  type ShowOccurrence,
} from '@/lib/station';

type Mode = 'idle' | 'stream' | 'playlist' | 'mixcloud';

function readNowOverride(): Date | undefined {
  // Review aid: ?now=2026-10-18T11:30:00-04:00 previews the schedule at another time.
  if (typeof window === 'undefined') return undefined;
  const v = new URLSearchParams(window.location.search).get('now');
  if (!v) return undefined;
  const d = new Date(v);
  return isNaN(d.getTime()) ? undefined : d;
}

export default function StationPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const triedAlt = useRef(false);
  const failures = useRef(0);

  const [mode, setMode] = useState<Mode>('idle');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const [message, setMessage] = useState('');
  const [now, setNow] = useState<EtNow | null>(null);

  const streamConfigured = hasStream();
  const playlist = STATION.fallbackPlaylist;
  const track = playlist[trackIndex];

  // Clock (ET), refreshed every minute. Client-only to keep static export honest.
  useEffect(() => {
    const override = readNowOverride();
    const tick = () => setNow(getEtNow(override ?? new Date()));
    tick();
    if (override) return;
    const t = setInterval(tick, 60_000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = muted ? 0 : volume;
  }, [volume, muted]);

  const loadTrack = useCallback(
    (i: number, autoplay: boolean) => {
      const a = audioRef.current;
      if (!a || playlist.length === 0) return;
      triedAlt.current = false;
      setTrackIndex(i);
      a.src = playlist[i].src;
      a.dataset.trackId = playlist[i].id;
      a.load();
      if (autoplay) {
        setIsLoading(true);
        a.play().catch(() => {
          /* handled by onError / autoplay policy */
          setIsLoading(false);
        });
      }
    },
    [playlist]
  );

  const startPlaylist = useCallback(
    (i = trackIndex) => {
      if (playlist.length === 0) {
        if (STATION.mixcloudFallback) setMode('mixcloud');
        else setMessage('No fallback recordings are configured yet.');
        return;
      }
      setMode('playlist');
      failures.current = 0;
      loadTrack(i, true);
    },
    [loadTrack, playlist.length, trackIndex]
  );

  const listen = () => {
    const a = audioRef.current;
    if (!a) return;
    if (isPlaying) {
      a.pause();
      return;
    }
    setMessage('');
    if (mode !== 'idle' && a.src) {
      setIsLoading(true);
      a.play().catch(() => setIsLoading(false));
      return;
    }
    if (streamConfigured) {
      setMode('stream');
      a.src = STATION.streamUrl;
      a.dataset.trackId = 'stream';
      setIsLoading(true);
      a.play().catch(() => setIsLoading(false));
    } else {
      startPlaylist(0);
    }
  };

  const next = () => mode === 'playlist' || mode === 'idle' ? startPlaylist((trackIndex + 1) % playlist.length) : undefined;
  const prev = () =>
    mode === 'playlist' || mode === 'idle' ? startPlaylist((trackIndex - 1 + playlist.length) % playlist.length) : undefined;

  const onError = () => {
    const a = audioRef.current;
    if (!a) return;
    if (mode === 'stream') {
      setMessage('The live stream is unavailable right now, so we switched to the hymn playlist.');
      startPlaylist(0);
      return;
    }
    if (mode !== 'playlist') return;
    const t = playlist[trackIndex];
    if (!triedAlt.current && t.altSrc) {
      triedAlt.current = true;
      a.src = t.altSrc;
      a.load();
      a.play().catch(() => setIsLoading(false));
      return;
    }
    failures.current += 1;
    if (failures.current >= playlist.length) {
      setIsLoading(false);
      setIsPlaying(false);
      if (STATION.mixcloudFallback) setMode('mixcloud');
      else setMessage('We could not load the recordings. Please try again in a moment.');
      return;
    }
    loadTrack((trackIndex + 1) % playlist.length, true);
  };

  const today = now ? getTodaysShows(now, streamConfigured) : [];
  const upcoming = now ? getUpcomingShows(now, 4) : [];
  const firstLaterToday = today.find((o) => o.status === 'later-today' && !o.set.allDay);
  const nextUpId = firstLaterToday?.set.id ?? upcoming[0]?.set.id;

  const sourceLine = streamConfigured
    ? 'Live 24/7 stream'
    : 'Live stream coming soon · now playing public-domain hymn recordings';

  return (
    <div className="w-full">
      {/* ── Player card ───────────────────────────── */}
      <div className="station-card rounded-2xl p-5 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
          {/* Listen button */}
          <div className="flex flex-col items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={listen}
              data-testid="listen"
              aria-label={isPlaying ? 'Pause the station' : `Listen to ${STATION.name}`}
              className="listen-btn group relative w-32 h-32 sm:w-36 sm:h-36 rounded-full flex flex-col items-center justify-center text-ink-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-gold-300/60"
            >
              <span className={`absolute inset-0 rounded-full listen-halo ${isPlaying ? 'listen-halo-on' : ''}`} aria-hidden />
              {isPlaying ? <Pause size={40} strokeWidth={2.4} /> : <Play size={40} strokeWidth={2.4} className="ml-1.5" />}
              <span className="relative mt-1 font-cinzel font-bold tracking-[0.2em] text-sm">
                {isPlaying ? 'PAUSE' : isLoading ? 'TUNING…' : 'LISTEN'}
              </span>
            </button>
          </div>

          {/* Now playing */}
          <div className="flex-1 min-w-0 text-center md:text-left">
            <p className="font-cinzel text-gold-300 text-xs tracking-[0.25em] uppercase">{STATION.name}</p>
            <p className="text-lavender-300 text-sm mt-1">{sourceLine}</p>

            <div className="mt-4 rounded-xl border border-gold-300/15 bg-black/25 px-4 py-3">
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-lavender-300/80">
                {mode === 'stream' ? 'On the stream' : isPlaying ? 'Now playing' : 'First in the queue'}
              </p>
              {mode === 'stream' ? (
                <p className="font-garamond text-2xl text-white mt-1">{STATION.name}, live</p>
              ) : track ? (
                <>
                  <p className="font-garamond text-2xl sm:text-[1.7rem] leading-tight text-white mt-1">{track.title}</p>
                  <p className="font-garamond italic text-lavender-300 text-lg">
                    {track.performer}, {track.year}
                  </p>
                  <a
                    href={track.sourcePage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-[0.7rem] tracking-wide text-gold-300/80 hover:text-gold-300 underline-offset-2 hover:underline"
                  >
                    Public domain recording · source
                  </a>
                </>
              ) : null}
            </div>

            {/* controls */}
            <div className="mt-4 flex items-center justify-center md:justify-start gap-3">
              <button type="button" onClick={prev} disabled={mode === 'stream'} aria-label="Previous recording" className="ctrl-btn">
                <SkipBack size={18} />
              </button>
              <button type="button" onClick={next} disabled={mode === 'stream'} aria-label="Next recording" className="ctrl-btn">
                <SkipForward size={18} />
              </button>
              <button type="button" onClick={() => setMuted((m) => !m)} aria-label={muted ? 'Unmute' : 'Mute'} className="ctrl-btn">
                {muted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={muted ? 0 : volume}
                onChange={(e) => {
                  setVolume(parseFloat(e.target.value));
                  setMuted(false);
                }}
                aria-label="Volume"
                className="max-w-[9rem]"
              />
            </div>
            {message && <p className="mt-3 text-sm text-gold-300/90" role="status">{message}</p>}
          </div>
        </div>

        {/* Queue */}
        {!streamConfigured && (
          <ol className="mt-6 grid gap-2 sm:grid-cols-3">
            {playlist.map((t, i) => {
              const active = i === trackIndex && mode === 'playlist';
              return (
                <li key={t.id}>
                  <button
                    type="button"
                    onClick={() => startPlaylist(i)}
                    className={`w-full text-left rounded-lg px-3 py-2.5 border transition ${
                      active ? 'border-gold-300/60 bg-gold-300/10' : 'border-lavender-300/15 bg-black/20 hover:border-lavender-300/40'
                    }`}
                  >
                    <span className="block font-garamond text-lg text-white leading-tight">{t.title}</span>
                    <span className="block text-xs text-lavender-300">
                      {t.performer} · {t.year}
                    </span>
                    <span className="block text-[0.65rem] text-gold-300/70 mt-0.5">Public domain recording</span>
                  </button>
                </li>
              );
            })}
          </ol>
        )}

        {mode === 'mixcloud' && STATION.mixcloudFallback && (
          <iframe
            title={`Mixcloud player: ${STATION.name}`}
            className="mt-6 w-full rounded-lg"
            height={60}
            src={`https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=0&feed=${encodeURIComponent(
              STATION.mixcloudFallback
            )}`}
            allow="encrypted-media; fullscreen; autoplay; idle-detection; speaker-selection; web-share;"
          />
        )}

        <audio
          ref={audioRef}
          preload="none"
          onPlaying={() => {
            setIsPlaying(true);
            setIsLoading(false);
            failures.current = 0;
          }}
          onPause={() => setIsPlaying(false)}
          onWaiting={() => setIsLoading(true)}
          onEnded={() => mode === 'playlist' && loadTrack((trackIndex + 1) % playlist.length, true)}
          onError={onError}
          className="hidden"
        />
      </div>

      {/* ── Schedule ───────────────────────────── */}
      <div id="schedule-today" className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="station-card rounded-2xl p-5 sm:p-6">
          <h3 className="font-cinzel text-gold-300 text-lg tracking-wider">Today&rsquo;s shows</h3>
          <p className="text-xs text-lavender-300/80 mb-4">{now ? `${now.dateLabel} · Eastern Time` : 'Eastern Time'}</p>
          {!now ? (
            <p className="text-sm text-lavender-300">Loading schedule…</p>
          ) : (
            <ul className="space-y-3">
              {today.map((o) => (
                <ShowRow key={o.set.id} o={o} nextUpId={nextUpId} streamConfigured={streamConfigured} />
              ))}
            </ul>
          )}
        </div>
        <div className="station-card rounded-2xl p-5 sm:p-6">
          <h3 className="font-cinzel text-gold-300 text-lg tracking-wider">Upcoming shows</h3>
          <p className="text-xs text-lavender-300/80 mb-4">All times Eastern</p>
          {!now ? (
            <p className="text-sm text-lavender-300">Loading schedule…</p>
          ) : (
            <ul className="space-y-3">
              {upcoming.map((o) => (
                <ShowRow key={o.set.id} o={o} nextUpId={nextUpId} streamConfigured={streamConfigured} />
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* ── Footer ───────────────────────────── */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-1 text-center sm:text-left">
        <p className="text-xs text-lavender-300/80 max-w-xl">
          Songs are public-domain compositions; recordings are public domain or recorded by Worship Weekly.
        </p>
        <a
          href={SISTER_STATION.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 text-sm text-lavender-300 hover:text-gold-300 transition-colors"
        >
          Also listen to {SISTER_STATION.name}
          <ExternalLink size={14} aria-hidden />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
}

function ShowRow({ o, nextUpId, streamConfigured }: { o: ShowOccurrence; nextUpId?: string; streamConfigured: boolean }) {
  const { set, status } = o;
  let badge: { text: string; cls: string } | null = null;

  if (status === 'live') {
    badge = { text: 'Live now', cls: 'bg-red-500/15 text-red-300 border-red-400/40' };
  } else if (set.allDay) {
    badge = {
      text: streamConfigured ? 'Live now' : 'Hymn playlist',
      cls: 'bg-violet-400/10 text-lavender-300 border-lavender-300/25',
    };
  } else if (status === 'scheduled-now') {
    badge = { text: 'Scheduled now · stream coming soon', cls: 'bg-gold-300/10 text-gold-300 border-gold-300/30' };
  } else if (set.id === nextUpId && (status === 'later-today' || status === 'upcoming')) {
    badge = { text: `Up next · ${formatEt(set.start)}`, cls: 'bg-gold-300/10 text-gold-300 border-gold-300/30' };
  } else if (status === 'earlier-today') {
    badge = { text: 'Earlier today', cls: 'bg-white/5 text-lavender-300/70 border-white/10' };
  }

  return (
    <li className={`flex gap-3 ${status === 'earlier-today' ? 'opacity-60' : ''}`}>
      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold-400/80" aria-hidden />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <p className="font-garamond text-lg text-white leading-tight">{set.title}</p>
          {badge && (
            <span className={`text-[0.65rem] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${badge.cls}`}>
              {status === 'live' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-400 mr-1 animate-pulse-red align-middle" />}
              {badge.text}
            </span>
          )}
        </div>
        <p className="text-xs text-lavender-300">
          {o.dayLabel === 'Today' ? '' : `${o.dayLabel} · `}
          {formatWindow(set)}
        </p>
        <p className="text-xs text-lavender-300/70 mt-0.5">{set.description}</p>
        {set.recordingUrl && (
          <a href={set.recordingUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-gold-300 hover:underline">
            Listen to the recording
          </a>
        )}
      </div>
    </li>
  );
}
