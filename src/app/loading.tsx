import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div aria-label="Loading dashboard" aria-busy="true" className="space-y-8">
      <div className="flex items-end justify-between"><div className="space-y-3"><Skeleton className="h-9 w-72" /><Skeleton className="h-4 w-56" /></div><Skeleton className="h-10 w-36" /></div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{Array.from({ length: 4 }).map((_, index) => <Skeleton key={index} className="h-36" />)}</div>
      <div className="grid gap-4 xl:grid-cols-[1.7fr_1fr]"><Skeleton className="h-96" /><Skeleton className="h-96" /></div>
    </div>
  );
}
