import type { Motif } from "@/data/projects";

// Generated cover art for projects without a real screenshot.
// Each motif hints at what the project does; all share one palette.

const LINE = "rgba(255,255,255,0.14)";
const DIM = "rgba(255,255,255,0.06)";
const HOT = "#f97316";
const COOL = "#34d399";

function Board() {
  const marks: Record<string, string> = { "4-1": HOT, "4-2": HOT, "4-3": COOL, "5-4": COOL, "2-5": "rgba(249,115,22,0.45)" };
  return (
    <g transform="translate(46 16)">
      {Array.from({ length: 64 }, (_, i) => {
        const x = i % 8;
        const y = Math.floor(i / 8);
        const fill = marks[`${x}-${y}`] ?? ((x + y) % 2 ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.03)");
        return <rect key={i} x={x * 8.5} y={y * 8.5} width={8.5} height={8.5} fill={fill} />;
      })}
      <path d="M38.25 12.75 Q 44 24 38.25 29.75" stroke="#fff" strokeOpacity="0.7" strokeWidth="1" fill="none" strokeDasharray="2 2" />
    </g>
  );
}

function MapDots() {
  const pts = [
    [40, 60, 2.6], [48, 55, 1.6], [52, 64, 3.2], [60, 58, 2], [66, 66, 1.4], [72, 50, 2.4], [80, 56, 3.6], [86, 62, 1.8],
    [92, 48, 2.2], [98, 58, 1.4], [104, 52, 2.8], [110, 64, 1.6], [116, 44, 2], [122, 56, 3], [58, 44, 1.4], [70, 70, 2.2],
    [84, 40, 1.6], [96, 70, 2.6], [108, 38, 1.4], [44, 46, 1.2],
  ];
  return (
    <g>
      <path d="M28 70 C 40 40, 70 30, 100 34 S 134 46, 136 64 L 128 78 L 36 80 Z" fill={DIM} stroke={LINE} strokeWidth="0.6" />
      <path d="M30 56 H 134 M 30 44 H 134 M 60 30 V 82 M 90 30 V 82 M 120 30 V 82" stroke={DIM} strokeWidth="0.5" />
      {pts.map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill={i % 4 === 0 ? HOT : i % 3 === 0 ? COOL : "rgba(249,115,22,0.55)"} fillOpacity={0.85} />
      ))}
    </g>
  );
}

function Bars() {
  const c = [30, 38, 34, 44, 40, 50, 46, 56, 52, 60, 54, 64, 62, 70];
  return (
    <g>
      <path d="M20 84 H 140" stroke={LINE} strokeWidth="0.6" />
      {c.map((h, i) => {
        const up = i % 3 !== 1;
        const x = 26 + i * 8;
        return (
          <g key={i}>
            <line x1={x + 2} x2={x + 2} y1={84 - h - 6} y2={84 - h + 18} stroke={up ? COOL : HOT} strokeOpacity="0.6" strokeWidth="0.6" />
            <rect x={x} y={84 - h} width={4} height={12} fill={up ? COOL : HOT} fillOpacity={0.85} rx={0.6} />
          </g>
        );
      })}
      <path d="M24 66 C 50 60, 70 54, 90 44 S 124 26, 138 22" stroke="#fff" strokeOpacity="0.55" strokeWidth="0.8" fill="none" strokeDasharray="3 2" />
    </g>
  );
}

function Keys() {
  const rows = [10, 9, 7];
  return (
    <g>
      {rows.map((n, r) =>
        Array.from({ length: n }, (_, i) => {
          const x = 24 + r * 5 + i * 11.5;
          const y = 30 + r * 14;
          const hot = r === 1 && i === 7;
          const ghost = r === 1 && i === 8;
          return (
            <rect key={`${r}-${i}`} x={x} y={y} width={9.5} height={10} rx={1.6}
              fill={hot ? HOT : ghost ? "rgba(249,115,22,0.25)" : "rgba(255,255,255,0.07)"}
              stroke={hot ? HOT : LINE} strokeWidth="0.5" />
          );
        })
      )}
      <rect x={48} y={74} width={64} height={9} rx={1.6} fill="rgba(255,255,255,0.07)" stroke={LINE} strokeWidth="0.5" />
      <path d="M24 92 H 70" stroke={COOL} strokeWidth="1" />
      <path d="M70 92 H 136" stroke={LINE} strokeWidth="1" />
    </g>
  );
}

function Dag() {
  return (
    <g fill="none">
      {[34, 50, 66].map((y) => (
        <g key={y}>
          <path d={`M48 50 C 62 50, 62 ${y}, 76 ${y}`} stroke={LINE} strokeWidth="0.8" />
          <path d={`M104 ${y} C 118 ${y}, 118 50, 128 50`} stroke={LINE} strokeWidth="0.8" />
          <rect x={76} y={y - 6} width={28} height={12} rx={3} fill="rgba(255,255,255,0.06)" stroke={y === 50 ? COOL : HOT} strokeWidth="0.8" />
        </g>
      ))}
      <circle cx={42} cy={50} r={6} fill="rgba(255,255,255,0.08)" stroke="#fff" strokeOpacity="0.6" strokeWidth="0.8" />
      <circle cx={134} cy={50} r={6} fill={COOL} fillOpacity="0.85" />
    </g>
  );
}

function Leaf() {
  return (
    <g fill="none">
      <path d="M50 82 C 50 46, 80 22, 116 20 C 116 56, 92 80, 50 82 Z" fill="rgba(52,211,153,0.12)" stroke={COOL} strokeWidth="0.9" />
      <path d="M50 82 C 70 62, 90 42, 112 24" stroke={COOL} strokeWidth="0.7" />
      {[[62, 70, 60, 52], [72, 60, 74, 42], [84, 48, 90, 32], [66, 66, 84, 70], [78, 54, 98, 58], [90, 42, 108, 44]].map(([x1, y1, x2, y2], i) => (
        <path key={i} d={`M${x1} ${y1} Q ${(x1 + x2) / 2} ${(y1 + y2) / 2 - 3} ${x2} ${y2}`} stroke={COOL} strokeOpacity="0.5" strokeWidth="0.5" />
      ))}
      <rect x={40} y={14} width={88} height={74} stroke={HOT} strokeWidth="0.6" strokeDasharray="3 2" rx={2} />
      <rect x={40} y={8} width={26} height={6} fill={HOT} rx={1} />
    </g>
  );
}

function Wave() {
  return (
    <g>
      {Array.from({ length: 48 }, (_, i) => {
        const h = 6 + Math.abs(Math.sin(i * 0.55) * 18 + Math.sin(i * 1.7) * 8);
        const hot = (i > 10 && i < 17) || (i > 30 && i < 36);
        return <rect key={i} x={22 + i * 2.5} y={50 - h / 2} width={1.4} height={h} fill={hot ? HOT : "rgba(255,255,255,0.28)"} rx={0.6} />;
      })}
      <path d="M20 78 H 140" stroke={LINE} strokeWidth="0.6" />
      <rect x={47} y={75} width={17} height={6} fill={HOT} rx={1} />
      <rect x={97} y={75} width={14} height={6} fill={HOT} rx={1} />
    </g>
  );
}

function Table() {
  return (
    <g>
      {[0, 1].map((t) => (
        <g key={t} transform={`translate(${t ? 86 : 26} ${t ? 34 : 22})`}>
          <rect width={48} height={8} fill={t ? COOL : HOT} fillOpacity={0.85} rx={1} />
          {Array.from({ length: 5 }, (_, r) => (
            <g key={r}>
              <rect y={10 + r * 7} width={48} height={6} fill="rgba(255,255,255,0.06)" />
              <rect x={2} y={12 + r * 7} width={10} height={2} fill="rgba(255,255,255,0.3)" />
              <rect x={18} y={12 + r * 7} width={18} height={2} fill="rgba(255,255,255,0.15)" />
            </g>
          ))}
        </g>
      ))}
      <path d="M74 40 C 80 40, 80 46, 86 46" stroke="#fff" strokeOpacity="0.6" strokeWidth="0.8" fill="none" />
    </g>
  );
}

function Loop() {
  return (
    <g fill="none">
      <circle cx={80} cy={50} r={26} stroke={LINE} strokeWidth="1" />
      <path d="M80 24 A 26 26 0 0 1 106 50" stroke={HOT} strokeWidth="1.6" />
      <path d="M80 76 A 26 26 0 0 1 54 50" stroke={COOL} strokeWidth="1.6" />
      <path d="M103 44 L 106 50 L 110 44" stroke={HOT} strokeWidth="1.2" />
      <path d="M57 56 L 54 50 L 50 56" stroke={COOL} strokeWidth="1.2" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={124} y={30 + i * 10} width={14} height={6} rx={1} fill="rgba(255,255,255,0.08)" stroke={LINE} strokeWidth="0.5" />
      ))}
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={30} cy={36 + i * 14} r={4} fill="rgba(255,255,255,0.08)" stroke={LINE} strokeWidth="0.5" />
      ))}
    </g>
  );
}

function Route() {
  const nodes: [number, number][] = [[30, 70], [52, 40], [62, 74], [84, 52], [98, 28], [108, 76], [130, 46]];
  const edges = [[0, 1], [0, 2], [1, 3], [2, 3], [1, 4], [3, 5], [4, 6], [5, 6], [3, 6], [2, 5]];
  const path = new Set(["0-1", "1-3", "3-6"]);
  return (
    <g>
      {edges.map(([a, b]) => {
        const on = path.has(`${a}-${b}`);
        return <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke={on ? HOT : LINE} strokeWidth={on ? 1.6 : 0.7} />;
      })}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 0 || i === 6 ? 4.5 : 3.2} fill={i === 0 ? COOL : i === 6 ? HOT : [2, 4].includes(i) ? "rgba(52,211,153,0.35)" : "rgba(255,255,255,0.18)"} stroke={LINE} strokeWidth="0.5" />
      ))}
    </g>
  );
}

function Spark() {
  return (
    <g>
      {Array.from({ length: 6 }, (_, c) =>
        Array.from({ length: 5 }, (_, r) => (
          <rect key={`${c}-${r}`} x={24 + c * 9} y={26 + r * 10} width={7} height={8} rx={1}
            fill={(c + r) % 4 === 0 ? "rgba(249,115,22,0.6)" : "rgba(255,255,255,0.08)"} />
        ))
      )}
      <path d="M82 50 H 96" stroke="#fff" strokeOpacity="0.5" strokeWidth="0.8" />
      <path d="M92 46 L 96 50 L 92 54" stroke="#fff" strokeOpacity="0.5" strokeWidth="0.8" fill="none" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={102} y={32 + i * 13} width={34} height={9} rx={1.5} fill={i === 1 ? COOL : "rgba(255,255,255,0.1)"} fillOpacity={i === 1 ? 0.85 : 1} />
      ))}
    </g>
  );
}

const MOTIFS: Record<Motif, () => React.JSX.Element> = {
  board: Board,
  map: MapDots,
  bars: Bars,
  keys: Keys,
  dag: Dag,
  leaf: Leaf,
  wave: Wave,
  table: Table,
  loop: Loop,
  route: Route,
  spark: Spark,
};

export default function Cover({ motif, label }: { motif: Motif; label?: string }) {
  const M = MOTIFS[motif];
  return (
    <div className="absolute inset-0 bg-night">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 10%, rgba(249,115,22,0.16), transparent 45%), radial-gradient(circle at 10% 90%, rgba(52,211,153,0.10), transparent 40%)",
        }}
      />
      <svg viewBox="0 0 160 100" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <M />
      </svg>
      {label && (
        <span className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">{label}</span>
      )}
    </div>
  );
}
