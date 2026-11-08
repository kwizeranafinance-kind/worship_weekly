"use client";
import { useEffect, useRef, useState } from 'react';
import { BASE_PATH } from '@/lib/paths';
const tracks = [{"file": "america250_closing1.m4a", "title": "America’s 250th Birthday Service — Closing Song"}, {"file": "america250_opening2.m4a", "title": "America’s 250th Birthday Service — Opening Song 2"}, {"file": "america250_opening3.m4a", "title": "America’s 250th Birthday Service — Opening Song 3"}, {"file": "hopeharvest_closing1.m4a", "title": "From Hope to Harvest — Closing Song"}, {"file": "hopeharvest_opening1.m4a", "title": "From Hope to Harvest — Opening Medley"}, {"file": "hopeharvest_opening2.m4a", "title": "From Hope to Harvest — Opening Song 2"}, {"file": "oct25_worship_000510-000822_house-of-the-lord.norm.m4a", "title": "House of the Lord"}, {"file": "oct25_worship_000906-001316_honey-in-the-rock.norm.m4a", "title": "Honey in the Rock"}, {"file": "oct25_worship_001330-002407_mighty-name-of-jesus.norm.m4a", "title": "Mighty Name of Jesus"}, {"file": "oct25_worship_003740-004601_it-was-the-blood.norm.m4a", "title": "It Was the Blood"}, {"file": "oct25_worship_012702-013304_it-was-the-blood-reprise.norm.m4a", "title": "It Was the Blood — Reprise"}];
export default function MembersPlayer() {
  const audio = useRef<HTMLAudioElement>(null);
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [requested, setRequested] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    if (requested && audio.current) {
      audio.current.play().catch(() => setError('Tap the audio play button to begin playback.'));
    }
  }, [current, requested]);
  function select(index: number) {
    setError('');
    setRequested(true);
    if (index === current) audio.current?.play().catch(() => setError('Use the audio controls to play.'));
    else setCurrent(index);
  }
  return (
    <section className="station-section min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div aria-hidden="true" className="h-32 mx-auto max-w-md border-2 border-gold-400/40 rounded-t-full" style={{background:'conic-gradient(from 0deg at 50% 100%, #6d28d9, #fcd34d, #164e63, #7c3aed, #f59e0b, #6d28d9)',boxShadow:'0 0 55px #7c3aed55'}} />
        <div className="station-card rounded-3xl p-6 md:p-10">
          <p className="section-label">Worship Weekly · Members listening room</p>
          <h1 className="font-cinzel text-3xl md:text-4xl mb-3">After the service</h1>
          <p className="text-lavender-300 mb-6">Experience Church service recordings</p>
          <p className="text-sm text-lavender-300 mb-6">11 recordings · An unlisted listening room, accessible to anyone with this link.</p>
          <div className="glass rounded-2xl p-5 mb-6">
            <p className="text-gold-300 font-semibold mb-4" aria-live="polite">{current + 1}. {tracks[current].title}</p>
            <audio ref={audio} controls preload="none" src={`${BASE_PATH}/members-e27c7fba/audio/${tracks[current].file}`}
              onPlay={() => {setPlaying(true);setError('');}} onPause={() => setPlaying(false)}
              onError={() => setError('This recording could not be loaded. Please try another track or reload.')}
              onEnded={() => { if (current < tracks.length - 1) select(current + 1); else {setPlaying(false);setRequested(false);} }} />
            <div className="flex flex-wrap gap-3 mt-5">
              <button type="button" className="btn btn-gold" onClick={() => select(0)}>Play all</button>
              <button type="button" className="btn btn-outline" disabled={current === 0} onClick={() => select(current-1)}>Previous</button>
              <button type="button" className="btn btn-outline" disabled={current === tracks.length-1} onClick={() => select(current+1)}>Next</button>
            </div>
            <p className="text-sm mt-4 text-lavender-300">{playing ? 'Playing' : 'Paused'} · Tracks play in order; playback stops after the final recording.</p>
            {error && <p role="alert" className="text-gold-300 mt-3">{error}</p>}
          </div>
          <ol className="space-y-2" aria-label="Service recordings">
            {tracks.map((track,index) => <li key={track.file}><button type="button" aria-current={current === index ? 'true' : undefined}
              className={`w-full text-left p-4 rounded-xl border transition ${current === index ? 'border-gold-400/60 bg-violet-500/20 text-gold-300' : 'border-lavender-300/20 hover:bg-violet-500/10'}`}
              onClick={() => select(index)}><span className="inline-block w-8 text-lavender-300">{index+1}.</span>{track.title}</button></li>)}
          </ol>
        </div>
      </div>
    </section>
  );
}
