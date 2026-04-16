'use client';

export default function StreamSection() {
  return (
    <section id="stream" className="w-full bg-gradient-to-b from-ink-900 to-ink-800 py-20 md:py-28">
      <div className="section-inner fade-in">
        <p className="section-label">✦ Live Stream</p>
        <h2 className="section-title">Join Us Live</h2>
        <div className="section-divider">
          <div className="section-divider-line" />
          <span className="section-divider-icon">♦</span>
        </div>
        <p className="section-desc">
          Watch Worship Weekly live across all platforms. Choose your home below — the worship is the same, the praise is the same.
        </p>

        {/* Placeholder for stream tabs - to be built in next phase */}
        <div className="mt-12 p-12 glass rounded-lg text-center">
          <p className="text-lavender-300 text-lg">Stream integration coming soon</p>
          <p className="text-text-dim text-sm mt-2">Blaze • Restream • X • Arena Social • YouTube</p>
        </div>
      </div>
    </section>
  );
}
