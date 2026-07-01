/**
 * Synthesized contribution heatmap — visual only.
 * Replace with the real GitHub GraphQL feed when wiring an API.
 */
export function GithubHeatmap() {
  const weeks = 26;
  const days = 7;
  // deterministic pseudo-random pattern
  const cells = Array.from({ length: weeks * days }, (_, i) => {
    const n = Math.sin(i * 12.9898) * 43758.5453;
    const f = n - Math.floor(n);
    return Math.floor(f * 5); // 0-4
  });

  const shade = (lvl: number) =>
    [
      "bg-[color:oklch(0.24_0.014_60)]",
      "bg-[color:oklch(0.45_0.1_55)]",
      "bg-[color:oklch(0.6_0.16_55)]",
      "bg-[color:oklch(0.72_0.19_55)]",
      "bg-[color:oklch(0.85_0.2_60)]",
    ][lvl];

  return (
    <div>
      <div
        className="grid gap-[3px]"
        style={{ gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: weeks }).map((_, w) => (
          <div key={w} className="grid gap-[3px]" style={{ gridTemplateRows: `repeat(${days}, 1fr)` }}>
            {Array.from({ length: days }).map((__, d) => (
              <div
                key={d}
                className={`aspect-square w-full rounded-[2px] ${shade(cells[w * days + d])}`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between text-[10px] text-muted-foreground">
        <span className="font-mono">// last 6 months</span>
        <div className="flex items-center gap-1">
          <span>less</span>
          {[0, 1, 2, 3, 4].map((l) => (
            <span key={l} className={`h-2.5 w-2.5 rounded-[2px] ${shade(l)}`} />
          ))}
          <span>more</span>
        </div>
      </div>
    </div>
  );
}