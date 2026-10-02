export function Progress({ value, label }: { value: number; label: string }) {
  return (
    <div className="h-1.5 overflow-hidden rounded-full bg-secondary" role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={value}>
      <div className="h-full rounded-full bg-primary transition-[width] duration-500" style={{ width: `${Math.min(100, value)}%` }} />
    </div>
  );
}
