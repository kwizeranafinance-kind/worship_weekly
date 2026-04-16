'use client';

import Link from 'next/link';
import { COMMUNITY_FEATURES, VALUES } from '@/lib/constants';

export default function CommunitySection() {
  return (
    <section id="community" className="w-full bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 py-20 md:py-28">
      <div className="section-inner fade-in text-center">
        <p className="section-label">✦ Community</p>
        <h2 className="section-title">You Are Welcome Here</h2>
        <div className="section-divider justify-center">
          <div className="section-divider-line" />
          <span className="section-divider-icon">♦</span>
          <div className="section-divider-line" />
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl font-garamond italic text-lavender-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          "This is a holy and royal house — where every soul finds welcome, healing flows freely, and music becomes the language of heaven on earth."
        </p>

        {/* Prayer Action Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
          <Link
            href="/pray-for-others"
            className="btn btn-primary text-lg px-10 py-4"
          >
            🙏 &nbsp;Pray for Others
          </Link>
          <Link
            href="/request-prayer"
            className="btn btn-gold text-lg px-10 py-4"
          >
            💌 &nbsp;Request Prayer
          </Link>
        </div>

        {/* Community Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {COMMUNITY_FEATURES.map((feature) => (
            <div key={feature.id} className="card text-center">
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="font-cinzel font-bold text-lavender-300 mb-2 text-sm">{feature.name}</h3>
              <p className="text-xs text-text-dim">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Values Strip */}
        <div className="border-t border-lavender-300/10 pt-8">
          <div className="flex flex-wrap justify-center gap-8">
            {VALUES.map((value) => (
              <div key={value.name} className="flex flex-col items-center gap-2">
                <span className="text-2xl">{value.icon}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-text-soft">{value.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
