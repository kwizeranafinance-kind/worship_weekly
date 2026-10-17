/**
 * Hand-built SVG stained-glass window: gothic pointed arch, jewel-tone panes,
 * lead came, iron saddle bars, a golden cross with a halo roundel, and a warm
 * light glow. Deterministic (seeded), so server and client render identically.
 * No photos, no third-party artwork.
 */

type Props = {
  className?: string;
  seed?: number;
  /** Draw the central cross + halo. */
  withCross?: boolean;
  title?: string;
};

// Small seeded PRNG so the pane layout is stable between renders.
function mulberry32(a: number) {
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const PALETTE: { c: string; w: number }[] = [
  { c: '#1E3A8A', w: 14 }, // sapphire
  { c: '#1D4E89', w: 10 },
  { c: '#243B7A', w: 8 },
  { c: '#8B1E3F', w: 10 }, // ruby
  { c: '#A3243B', w: 7 },
  { c: '#4C1D95', w: 10 }, // amethyst
  { c: '#5B21B6', w: 7 },
  { c: '#0F5F4A', w: 7 }, // emerald
  { c: '#14705A', w: 5 },
  { c: '#B45309', w: 6 }, // amber
  { c: '#C99A1B', w: 4 }, // gold
];
const TOTAL_W = PALETTE.reduce((s, p) => s + p.w, 0);
function pick(r: number) {
  let acc = 0;
  for (const p of PALETTE) {
    acc += p.w / TOTAL_W;
    if (r <= acc) return p.c;
  }
  return PALETTE[0].c;
}

// Geometry (viewBox 0 0 400 640)
const OUTER = 'M8,640 L8,262 A262,262 0 0,1 200,6 A262,262 0 0,1 392,262 L392,640 Z';
const FRAME = 'M24,622 L24,262 A246,246 0 0,1 200,26 A246,246 0 0,1 376,262 L376,622 Z';
const BAND = 'M33,622 L33,262 A237,237 0 0,1 200,37 A237,237 0 0,1 367,262 L367,622';
const GLASS = 'M42,614 L42,262 A228,228 0 0,1 200,48 A228,228 0 0,1 358,262 L358,614 Z';

const CX = 200;
const CY = 196; // cross intersection

export default function StainedGlassWindow({ className, seed = 7, withCross = true, title }: Props) {
  const rand = mulberry32(seed);
  const id = `sg${seed}`;

  // Jittered grid mesh -> triangles
  const cols = 8;
  const rows = 14;
  const x0 = 42, x1 = 358, y0 = 40, y1 = 614;
  const pts: [number, number][][] = [];
  for (let r = 0; r <= rows; r++) {
    const row: [number, number][] = [];
    for (let c = 0; c <= cols; c++) {
      const edgeX = c === 0 || c === cols;
      const edgeY = r === 0 || r === rows;
      const jx = edgeX ? 0 : (rand() - 0.5) * 26;
      const jy = edgeY ? 0 : (rand() - 0.5) * 26;
      row.push([x0 + ((x1 - x0) * c) / cols + jx, y0 + ((y1 - y0) * r) / rows + jy]);
    }
    pts.push(row);
  }
  const panes: { d: string; fill: string; o: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const a = pts[r][c], b = pts[r][c + 1], d = pts[r + 1][c], e = pts[r + 1][c + 1];
      const flip = rand() > 0.5;
      const tris = flip ? [[a, b, e], [a, e, d]] : [[a, b, d], [b, e, d]];
      for (const t of tris) {
        // Warmer glass near the cross, cooler toward the edges
        const mx = (t[0][0] + t[1][0] + t[2][0]) / 3;
        const my = (t[0][1] + t[1][1] + t[2][1]) / 3;
        const dist = Math.hypot(mx - CX, (my - CY) * 0.8);
        let fill = pick(rand());
        if (withCross && dist < 110 && rand() < 0.25) fill = '#B45309';
        panes.push({
          d: `M${t.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' L')} Z`,
          fill,
          o: 0.78 + rand() * 0.2,
        });
      }
    }
  }

  // Halo roundel petals
  const petals = Array.from({ length: 12 }, (_, i) => {
    const a0 = (i / 12) * Math.PI * 2;
    const a1 = ((i + 1) / 12) * Math.PI * 2;
    const r0 = 34, r1 = 70;
    const p = (r: number, a: number) => `${(CX + r * Math.cos(a)).toFixed(1)},${(CY + r * Math.sin(a)).toFixed(1)}`;
    return {
      d: `M${p(r0, a0)} L${p(r1, a0)} A${r1},${r1} 0 0,1 ${p(r1, a1)} L${p(r0, a1)} A${r0},${r0} 0 0,0 ${p(r0, a0)} Z`,
      fill: i % 2 === 0 ? '#8B1E3F' : '#1E3A8A',
    };
  });

  // Cross: Latin cross, segmented by lead lines
  const cw = 26; // bar width
  const vTop = 104, vBot = 360, hL = 128, hR = 272;
  const crossPath = [
    `M${CX - cw / 2},${vTop}`, `L${CX + cw / 2},${vTop}`, `L${CX + cw / 2},${CY - cw / 2}`,
    `L${hR},${CY - cw / 2}`, `L${hR},${CY + cw / 2}`, `L${CX + cw / 2},${CY + cw / 2}`,
    `L${CX + cw / 2},${vBot}`, `L${CX - cw / 2},${vBot}`, `L${CX - cw / 2},${CY + cw / 2}`,
    `L${hL},${CY + cw / 2}`, `L${hL},${CY - cw / 2}`, `L${CX - cw / 2},${CY - cw / 2}`, 'Z',
  ].join(' ');

  return (
    <svg
      className={className}
      viewBox="0 0 400 640"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      preserveAspectRatio="xMidYMax meet"
    >
      <defs>
        <clipPath id={`${id}-clip`}>
          <path d={GLASS} />
        </clipPath>
        <linearGradient id={`${id}-stone`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5A4A44" />
          <stop offset="0.5" stopColor="#3A2E2B" />
          <stop offset="1" stopColor="#241B19" />
        </linearGradient>
        <linearGradient id={`${id}-cross`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFF7D6" />
          <stop offset="0.45" stopColor="#FCD34D" />
          <stop offset="1" stopColor="#E59E0B" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx={CX / 400} cy={CY / 640} r="0.75">
          <stop offset="0" stopColor="#FFF4D2" stopOpacity="0.75" />
          <stop offset="0.25" stopColor="#FCD34D" stopOpacity="0.28" />
          <stop offset="0.7" stopColor="#FCD34D" stopOpacity="0.04" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-halo`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#FFF7D6" stopOpacity="0.95" />
          <stop offset="1" stopColor="#FCD34D" stopOpacity="0.55" />
        </radialGradient>
        <filter id={`${id}-mottle`} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed={seed} />
          <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 0.95  0 0 0 0 0.85  0 0 0 0.9 -0.35" />
        </filter>
        <filter id={`${id}-soft`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* Stone surround */}
      <path d={OUTER} fill={`url(#${id}-stone)`} />
      <path d={FRAME} fill="#140B08" />

      {/* Decorative border band: alternating ruby / sapphire quarries */}
      <path d={BAND} fill="none" stroke="#8B1E3F" strokeWidth="14" />
      <path d={BAND} fill="none" stroke="#1E3A8A" strokeWidth="14" strokeDasharray="16 16" />
      <path d={BAND} fill="none" stroke="#140B08" strokeWidth="15" strokeDasharray="2 14" strokeDashoffset="1" />

      {/* Glass field */}
      <g clipPath={`url(#${id}-clip)`}>
        <rect x="0" y="0" width="400" height="640" fill="#1A1033" />
        {panes.map((p, i) => (
          <path key={i} d={p.d} fill={p.fill} fillOpacity={p.o} stroke="#140B08" strokeWidth="2.4" strokeLinejoin="round" />
        ))}

        {withCross && (
          <g>
            {/* halo roundel */}
            <circle cx={CX} cy={CY} r="74" fill="#140B08" />
            {petals.map((p, i) => (
              <path key={i} d={p.d} fill={p.fill} stroke="#140B08" strokeWidth="2.4" strokeLinejoin="round" />
            ))}
            <circle cx={CX} cy={CY} r="34" fill={`url(#${id}-halo)`} stroke="#140B08" strokeWidth="2.4" />
            {/* cross */}
            <path d={crossPath} fill="#140B08" stroke="#140B08" strokeWidth="7" strokeLinejoin="round" />
            <path d={crossPath} fill={`url(#${id}-cross)`} />
            {/* cross segment leads */}
            <g stroke="#140B08" strokeWidth="2.2">
              {[132, 160, 236, 268, 300, 332].map((y) => (
                <line key={y} x1={CX - cw / 2} y1={y} x2={CX + cw / 2} y2={y} />
              ))}
              {[156, 244].map((x) => (
                <line key={x} x1={x} y1={CY - cw / 2} x2={x} y2={CY + cw / 2} />
              ))}
              <rect x={CX - cw / 2} y={CY - cw / 2} width={cw} height={cw} fill="none" />
            </g>
          </g>
        )}

        {/* glass mottling + light */}
        <rect x="0" y="0" width="400" height="640" filter={`url(#${id}-mottle)`} opacity="0.18" />
        <rect x="0" y="0" width="400" height="640" fill={`url(#${id}-glow)`} style={{ mixBlendMode: 'screen' }} />
      </g>

      {/* Iron saddle bars + central mullion */}
      <g stroke="#0D0705" strokeWidth="3.5" strokeLinecap="round">
        {[420, 500, 570].map((y) => (
          <line key={y} x1="42" y1={y} x2="358" y2={y} />
        ))}
        <line x1="200" y1={withCross ? 372 : 60} x2="200" y2="614" strokeWidth="5" />
      </g>

      {/* Inner frame lip + stone sill */}
      <path d={GLASS} fill="none" stroke="#2A1F1C" strokeWidth="3" />
      <rect x="0" y="618" width="400" height="22" rx="3" fill={`url(#${id}-stone)`} />
      <rect x="0" y="618" width="400" height="3" fill="#6B5A52" opacity="0.6" />
    </svg>
  );
}
