'use client';

import { SCHEDULE_SHOWS } from '@/lib/constants';

const tagColors: Record<string, string> = {
  Worship: 'bg-gold-400/10 text-gold-300',
  Healing: 'bg-lavender-300/10 text-lavender-300',
  Live: 'bg-red-500/10 text-red-400',
  Radio: 'bg-violet-400/10 text-violet-400',
};

export default function ScheduleSection() {
  return (
    <section id="schedule" className="w-full bg-gradient-to-b from-ink-800 to-ink-900 py-20 md:py-28">
      <div className="section-inner fade-in">
        <p className="section-label">✦ Show Schedule</p>
        <h2 className="section-title">Upcoming Shows</h2>
        <div className="section-divider">
          <div className="section-divider-line" />
          <span className="section-divider-icon">♦</span>
        </div>
        <p className="section-desc">
          Multiple times a week, the Worship Weekly doors open. All times Eastern — set a reminder and come as you are.
        </p>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {SCHEDULE_SHOWS.map((show) => (
            <div
              key={show.id}
              className="card group hover:-translate-y-1 relative"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold-400 to-violet-500 rounded-l-base group-hover:w-1.5 transition-all" />

              <div className="pl-4">
                <p className="text-xs font-bold tracking-widest text-gold-400 mb-1">{show.day}</p>
                <h3 className="text-xl font-cinzel font-bold text-white mb-1">{show.name}</h3>
                <p className="text-lavender-300 text-sm mb-3">{show.time}</p>
                <p className="text-text-dim text-sm mb-4 line-clamp-2">{show.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {show.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                        tagColors[tag] || 'bg-lavender-300/10 text-lavender-300'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
