'use client';

import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Live Stream', href: '#stream' },
  { label: 'Radio', href: '#radio' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Platforms', href: '#platforms' },
  { label: 'Community', href: '#community' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-ink-950 border-t border-lavender-300/10 py-12 md:py-16 px-4 text-center">
      {/* Crown Icon */}
      <div className="mb-4 flex justify-center" style={{ filter: 'drop-shadow(0 0 12px rgba(109,40,217,0.8))' }}>
        <svg
          className="w-14 h-14 animate-rec-spin"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="48" fill="#0A0118" />
          <circle cx="50" cy="50" r="43" fill="none" stroke="rgba(109,40,217,0.4)" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="37" fill="none" stroke="rgba(109,40,217,0.28)" strokeWidth="1" />
          <circle cx="50" cy="50" r="31" fill="none" stroke="rgba(109,40,217,0.2)" strokeWidth="0.8" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(109,40,217,0.15)" strokeWidth="0.7" />
          <circle cx="50" cy="50" r="20" fill="#2D1052" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="rgba(245,158,11,0.35)" strokeWidth="1" />
          <g transform="translate(50,50)" fill="none" stroke="#F59E0B" strokeWidth="2.4" strokeLinecap="round">
            <ellipse rx="5.5" ry="12" transform="rotate(0)" />
            <ellipse rx="5.5" ry="12" transform="rotate(120)" />
            <ellipse rx="5.5" ry="12" transform="rotate(240)" />
          </g>
          <circle cx="50" cy="50" r="3.2" fill="#FCD34D" />
        </svg>
      </div>

      {/* Brand */}
      <h2 className="font-cinzel-decorative text-3xl text-white font-bold tracking-widest mb-1">
        Worship <span className="text-gold-300">Weekly</span>
      </h2>
      <p className="text-xs font-bold text-lavender-300 tracking-widest uppercase mb-6">
        Gospel Groove Collective · Healing Through Music
      </p>

      {/* Divider */}
      <div className="flex items-center justify-center gap-3 my-6">
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-lavender-300 to-transparent opacity-20" />
        <span className="text-gold-400 text-sm">✦</span>
        <div className="w-12 h-px bg-gradient-to-l from-transparent via-lavender-300 to-transparent opacity-20" />
      </div>

      {/* Nav Links */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-text-dim hover:text-gold-300 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-xs text-text-dim opacity-40">
        © {year} Gospel Groove Collective · Worship Weekly · All Rights Reserved · Made with ♡ and Faith
      </p>
    </footer>
  );
}
