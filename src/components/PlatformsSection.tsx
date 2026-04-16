'use client';

import Link from 'next/link';
import { PLATFORMS } from '@/lib/constants';

export default function PlatformsSection() {
  return (
    <section id="platforms" className="w-full bg-gradient-to-b from-ink-900 to-ink-800 py-20 md:py-28">
      <div className="section-inner fade-in">
        <p className="section-label">✦ Find Us Everywhere</p>
        <h2 className="section-title">Watch On Your Platform</h2>
        <div className="section-divider">
          <div className="section-divider-line" />
          <span className="section-divider-icon">♦</span>
        </div>
        <p className="section-desc">
          Worship Weekly streams across platforms so you can enter in wherever you are, however you choose.
        </p>

        {/* Platform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {PLATFORMS.map((platform) => (
            <Link
              key={platform.id}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card group hover:-translate-y-1 text-center flex flex-col items-center"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform"
                style={{ background: platform.bgColor }}
              >
                {platform.icon}
              </div>
              <h3 className="text-lg font-cinzel font-bold text-lavender-300 mb-2 tracking-wide">{platform.name}</h3>
              <p className="text-sm text-text-dim mb-4">{platform.description}</p>
              <span className="text-sm font-bold text-gold-400 tracking-widest uppercase">Open →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
