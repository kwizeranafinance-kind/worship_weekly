'use client';

import RadioPlayer from './RadioPlayer';

export default function RadioSection() {
  return (
    <section
      id="radio"
      className="w-full bg-gradient-to-b from-ink-900 via-ink-800 to-ink-900 py-20 md:py-28"
    >
      <div className="section-inner fade-in">
        <div className="mb-16">
          <p className="section-label">✦ Always On Air</p>
          <h2 className="section-title">Gospel Groove Radio</h2>
          <div className="section-divider">
            <div className="section-divider-line" />
            <span className="section-divider-icon">♦</span>
          </div>
          <p className="section-desc">
            When the live show rests, the spirit keeps moving. Healing worship music and positive vibrations, 24 hours a day.
          </p>
        </div>

        {/* Radio Player */}
        <div className="flex justify-center">
          <RadioPlayer />
        </div>
      </div>
    </section>
  );
}
