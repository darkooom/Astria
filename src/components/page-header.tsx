import { Badge } from "@/components/ui/badge";

export function PageHeader({ eyebrow, title, description, action }: { eyebrow?: string; title: string; description: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div>{eyebrow && <Badge variant="outline" className="mb-3">{eyebrow}</Badge>}<h1 className="text-balance text-[28px] font-[650] leading-[1.05] tracking-[-0.045em] md:text-[40px]">{title}</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">{description}</p></div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
