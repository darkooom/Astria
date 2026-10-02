"use client";

import { useState } from "react";
import { usagePoints } from "@/lib/demo-data";

export function UsageChart() {
  const [active, setActive] = useState(usagePoints.length - 1);
  const points = usagePoints.map((value, index) => `${(index / (usagePoints.length - 1)) * 100},${92 - value}`).join(" ");
  const area = `0,100 ${points} 100,100`;
  return (
    <div>
      <div className="relative h-60 w-full overflow-hidden rounded-lg surface-grid" onMouseLeave={() => setActive(usagePoints.length - 1)}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full overflow-visible" role="img" aria-labelledby="chart-title chart-desc">
          <title id="chart-title">API requests over the last 30 days</title><desc id="chart-desc">Requests increased from 220 thousand to 820 thousand.</desc>
          <defs><linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="var(--chart)" stopOpacity="0.28" /><stop offset="1" stopColor="var(--chart)" stopOpacity="0" /></linearGradient></defs>
          <polygon points={area} fill="url(#chart-fill)" />
          <polyline points={points} fill="none" stroke="var(--chart)" strokeWidth="1.8" vectorEffect="non-scaling-stroke" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
        <div className="absolute inset-0 flex">{usagePoints.map((value, index) => <button key={index} className="group relative flex-1" onFocus={() => setActive(index)} onMouseEnter={() => setActive(index)} aria-label={`Day ${index * 3 + 1}: ${value * 10} thousand requests`}><span className="absolute top-3/4 left-1/2 size-2 -translate-x-1/2 rounded-full bg-chart opacity-0 ring-4 ring-card group-focus:opacity-100 group-hover:opacity-100" /></button>)}</div>
        <div className="pointer-events-none absolute right-3 top-3 rounded-lg border bg-card/95 px-3 py-2 text-xs shadow-sm backdrop-blur"><span className="block text-muted-foreground">Day {active * 3 + 1}</span><span className="mt-0.5 block font-mono font-semibold">{usagePoints[active] * 10}k requests</span></div>
      </div>
      <table className="sr-only"><caption>API request data</caption><thead><tr><th scope="col">Day</th><th scope="col">Requests</th></tr></thead><tbody>{usagePoints.map((value, index) => <tr key={index}><td>{index * 3 + 1}</td><td>{value * 10000}</td></tr>)}</tbody></table>
    </div>
  );
}
