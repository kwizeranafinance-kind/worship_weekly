import StationPlayer from './StationPlayer';
import StainedGlassWindow from './StainedGlassWindow';

export default function RadioSection() {
  return (
    <section id="radio" className="station-section relative w-full overflow-hidden">
      {/* Backdrop: stained-glass windows + warm light */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="station-glow absolute left-1/2 top-24 -translate-x-1/2" />
        <StainedGlassWindow
          seed={11}
          withCross={false}
          className="hidden xl:block absolute top-[300px] left-[calc(50%-640px)] w-[230px] opacity-40"
        />
        <StainedGlassWindow
          seed={23}
          withCross={false}
          className="hidden xl:block absolute top-[300px] right-[calc(50%-640px)] w-[230px] opacity-40"
        />
        <div className="station-beams absolute left-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 md:px-8 pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="text-center">
          <p className="section-label">✦ Gospel Groove Radio</p>
          <h2 className="section-title">The Station</h2>
          <div className="section-divider justify-center">
            <div className="section-divider-line rotate-180" />
            <svg className="section-divider-icon w-3 h-4" viewBox="0 0 12 16" fill="currentColor" aria-hidden>
              <rect x="5" y="0" width="2" height="16" />
              <rect x="1" y="4" width="10" height="2" />
            </svg>
            <div className="section-divider-line" />
          </div>
          <p className="section-desc mx-auto">
            Press Listen and let the old hymns fill the room. Live shows join the stream through the week.
          </p>
        </div>

        {/* Centre window; the player overlaps its lower lancets */}
        <div className="relative mt-8 flex justify-center">
          <StainedGlassWindow
            seed={7}
            title="Stained-glass window with a golden cross"
            className="station-window w-[300px] sm:w-[400px] md:w-[460px]"
          />
        </div>
        <div className="relative z-10 -mt-[150px] sm:-mt-[210px] md:-mt-[250px]">
          <StationPlayer />
        </div>
      </div>
    </section>
  );
}
