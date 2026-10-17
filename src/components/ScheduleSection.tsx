import { FEATURED_SETS, dayLong, formatWindow } from '@/lib/station';

/** Full weekly schedule, driven by the same FEATURED_SETS array as the station player. */
export default function ScheduleSection() {
  return (
    <section id="schedule" className="w-full bg-gradient-to-b from-ink-800 to-ink-900 py-20 md:py-28">
      <div className="section-inner fade-in">
        <p className="section-label">✦ Show Schedule</p>
        <h2 className="section-title">The Week at Worship Weekly</h2>
        <div className="section-divider">
          <div className="section-divider-line" />
          <span className="section-divider-icon">♦</span>
        </div>
        <p className="section-desc">
          Several times a week the Worship Weekly doors open. All times Eastern. Set a reminder and come as you are.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {FEATURED_SETS.map((show) => (
            <div key={show.id} className="card group hover:-translate-y-1 relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold-400 to-violet-500 rounded-l-base group-hover:w-1.5 transition-all" />
              <div className="pl-4">
                <p className="text-xs font-bold tracking-widest text-gold-400 mb-1">{dayLong(show.day)}</p>
                <h3 className="text-xl font-cinzel font-bold text-white mb-1">{show.title}</h3>
                <p className="text-lavender-300 text-sm mb-3">{formatWindow(show)}</p>
                <p className="text-text-dim text-sm line-clamp-2">{show.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
