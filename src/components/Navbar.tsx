'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Live Stream', href: '#stream' },
  { label: 'Radio', href: '#radio' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Platforms', href: '#platforms' },
  { label: 'Community', href: '#community' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-ink-900/95 to-ink-900/85 backdrop-blur-xl border-b border-lavender-300/20 px-4 md:px-8 h-16 md:h-17 flex items-center justify-between">
      {/* Logo */}
      <Link href="#" className="flex items-center gap-3 no-underline group">
        {/* Record SVG */}
        <div className="w-10 h-10 flex items-center justify-center drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 8px rgba(109,40,217,0.7))' }}>
          <svg
            className="w-full h-full animate-rec-spin"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="48" fill="#0A0118" />
            <circle cx="50" cy="50" r="43" fill="none" stroke="rgba(109,40,217,0.4)" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="37" fill="none" stroke="rgba(109,40,217,0.28)" strokeWidth="1" />
            <circle cx="50" cy="50" r="31" fill="none" stroke="rgba(109,40,217,0.2)" strokeWidth="0.8" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(109,40,217,0.15)" strokeWidth="0.7" />
            <circle cx="50" cy="50" r="20" fill="#2D1052" />
            <g transform="translate(50,50)" fill="none" stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round">
              <ellipse rx="5" ry="11" transform="rotate(0)" />
              <ellipse rx="5" ry="11" transform="rotate(120)" />
              <ellipse rx="5" ry="11" transform="rotate(240)" />
            </g>
            <circle cx="50" cy="50" r="3" fill="#FCD34D" />
          </svg>
        </div>

        {/* Brand Text */}
        <div className="flex flex-col leading-tight">
          <span className="font-cinzel text-base font-bold text-gold-300 tracking-wider">Worship Weekly</span>
          <span className="text-xs font-semibold text-lavender-400 tracking-widest uppercase">Gospel Groove</span>
        </div>
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-lavender-300 font-medium tracking-wide hover:text-gold-300 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Live Badge */}
      <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-sm font-semibold tracking-wider uppercase text-red-400">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse-red"></span>
        On Air
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gold-300 hover:text-gold-400 transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 md:hidden bg-ink-800/98 backdrop-blur-xl border-b border-lavender-300/20 p-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lavender-300 font-medium tracking-wide hover:text-gold-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
