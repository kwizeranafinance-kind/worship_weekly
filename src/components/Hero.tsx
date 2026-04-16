'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-800 to-ink-900" />
        <div
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(109,40,217,0.4) 0%, transparent 70%)',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
        <div
          className="absolute w-72 h-72 rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(245,158,11,0.2) 0%, transparent 70%)',
            bottom: '20%',
            right: '10%',
          }}
        />
      </div>

      {/* Starfield */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 120 }).map((_, i) => {
          const size = Math.random() * 2.5 + 0.5;
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const duration = 2 + Math.random() * 5;
          const delay = Math.random() * 6;

          return (
            <div
              key={i}
              className="star absolute rounded-full bg-white"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
                animation: `twinkle ${duration}s ease-in-out infinite`,
                animationDelay: `${delay}s`,
                opacity: 0.15,
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4 text-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-gold-400 mb-6">
          ✦ &nbsp;Gospel Groove Collective Presents&nbsp; ✦
        </p>

        {/* Animated Record */}
        <div className="mb-8 flex justify-center">
          <div
            className="w-28 h-28 flex items-center justify-center drop-shadow-2xl animate-hero-rec-glow"
            style={{ filter: 'drop-shadow(0 0 28px rgba(109,40,217,0.7))' }}
          >
            <svg
              className="w-full h-full animate-rec-spin"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="49" fill="#080115" />
              <circle cx="50" cy="50" r="49" fill="none" stroke="rgba(167,139,250,0.25)" strokeWidth="1" />
              <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(109,40,217,0.35)" strokeWidth="1.2" />
              <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(109,40,217,0.25)" strokeWidth="1" />
              <circle cx="50" cy="50" r="32" fill="none" stroke="rgba(109,40,217,0.2)" strokeWidth="0.9" />
              <circle cx="50" cy="50" r="26" fill="none" stroke="rgba(109,40,217,0.15)" strokeWidth="0.8" />
              <circle cx="50" cy="50" r="21" fill="#3B0764" />
              <circle cx="50" cy="50" r="21" fill="none" stroke="rgba(245,158,11,0.4)" strokeWidth="1" />
              <g transform="translate(50,50)" fill="none" stroke="#FCD34D" strokeWidth="2.5" strokeLinecap="round">
                <ellipse rx="6.5" ry="14" transform="rotate(0)" />
                <ellipse rx="6.5" ry="14" transform="rotate(120)" />
                <ellipse rx="6.5" ry="14" transform="rotate(240)" />
              </g>
              <circle cx="50" cy="50" r="3.5" fill="#F59E0B" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-cinzel font-bold text-white leading-tight mb-2 drop-shadow-lg">
          Worship <span className="text-gold-300">Weekly</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-garamond italic text-lavender-300 mb-8">
          A Positive House of Healing and Praise
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
          <span className="text-gold-400">✦</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent via-gold-400 to-transparent" />
        </div>

        {/* Description */}
        <p className="text-lg text-lavender-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          A multi-day live worship experience streaming across platforms —{' '}
          <span className="text-gold-300 font-semibold">music, community, and divine vibrations</span> flowing in a spirit of healing, praise, and radical positivity. All are welcome at this table.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center flex-wrap">
          <Link href="#stream" className="btn btn-primary">
            🎵 &nbsp;Watch Live
          </Link>
          <Link href="#radio" className="btn btn-gold">
            📻 &nbsp;Radio On Air
          </Link>
          <Link href="#community" className="btn btn-outline">
            🙏 &nbsp;Join Community
          </Link>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-xs tracking-widest uppercase text-lavender-300 animate-bounce-slow pointer-events-none">
        <span>Enter</span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}
