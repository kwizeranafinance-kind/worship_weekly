'use client';

import { useEffect, useState } from 'react';
import { getEtNow, hasStream, isLiveNow } from '@/lib/station';
import { homeAnchor } from '@/lib/paths';

/** Shows "Live now" only when an ET show window is open AND a stream is configured. Otherwise renders nothing. */
export default function LiveBadge() {
  const [live, setLive] = useState(false);
  useEffect(() => {
    const tick = () => setLive(hasStream() && isLiveNow(getEtNow()));
    tick();
    const t = setInterval(tick, 60_000);
    return () => clearInterval(t);
  }, []);
  if (!live) return null;
  return (
    <a
      href={homeAnchor('radio')}
      className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-sm font-semibold tracking-wider uppercase text-red-400"
    >
      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse-red"></span>
      Live now
    </a>
  );
}
