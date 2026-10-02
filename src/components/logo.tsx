import { cn } from "@/lib/utils";

export function Logo({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span className="relative grid size-7 place-items-center rounded-[9px] bg-foreground text-background">
        <span className="absolute size-2.5 rotate-45 rounded-[2px] border border-background/80" />
        <span className="size-1 rounded-full bg-primary" />
      </span>
      {!compact && <span className="text-[15px] font-[650] tracking-[-0.035em]">Astria</span>}
    </div>
  );
}
