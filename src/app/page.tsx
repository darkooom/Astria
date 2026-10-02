import { ArrowRight, ArrowUpRight, CheckCircle2, Clock3, Gauge, Radio, Users } from "lucide-react";
import Link from "next/link";
import { InviteDialog } from "@/components/invite-dialog";
import { PageHeader } from "@/components/page-header";
import { UsageChart } from "@/components/usage-chart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { activity } from "@/lib/demo-data";

const metrics = [
  { label: "Monthly revenue", value: "€42,890", meta: "+12.4%", icon: ArrowUpRight, positive: true },
  { label: "Active users", value: "8,429", meta: "+8.1%", icon: Users, positive: true },
  { label: "API usage", value: "680k", meta: "of 1M", icon: Gauge, progress: 68 },
  { label: "Incidents", value: "0", meta: "All systems normal", icon: CheckCircle2, positive: true },
] as const;

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <PageHeader eyebrow="Workspace healthy" title="Good morning, Jane." description="Acme Studio is running smoothly. Here’s what changed since your last visit." action={<InviteDialog />} />
      <section aria-label="Workspace metrics" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => <Card key={metric.label} className="group transition-colors hover:border-muted-foreground/50"><CardContent><div className="flex items-center justify-between"><p className="text-sm text-muted-foreground">{metric.label}</p><metric.icon className="size-4 text-muted-foreground" /></div><p className="mt-6 text-2xl font-[650] tracking-[-0.035em]">{metric.value}</p><div className="mt-2 min-h-5">{"progress" in metric ? <div className="space-y-2"><div className="flex justify-between text-xs text-muted-foreground"><span>{metric.meta}</span><span>68%</span></div><Progress value={metric.progress} label="API usage: 68 percent" /></div> : <p className={metric.positive ? "text-xs text-success" : "text-xs text-muted-foreground"}>{metric.meta}</p>}</div></CardContent></Card>)}
      </section>
      <section className="grid gap-4 lg:grid-cols-[minmax(0,1.7fr)_minmax(280px,1fr)]">
        <Card><CardHeader><div><CardTitle>Usage</CardTitle><p className="mt-1 text-sm text-muted-foreground">API requests across all production keys</p></div><select aria-label="Usage period" className="h-8 rounded-lg border bg-card px-2 text-xs"><option>Last 30 days</option><option>Last 7 days</option><option>Last 90 days</option></select></CardHeader><CardContent className="pt-6"><UsageChart /><div className="mt-4 flex items-center justify-between border-t pt-4 text-xs text-muted-foreground"><span>680,420 requests this period</span><span className="font-mono">+14.2%</span></div></CardContent></Card>
        <Card><CardHeader><div><CardTitle>Workspace health</CardTitle><p className="mt-1 text-sm text-muted-foreground">Live production signals</p></div><Badge variant="success"><span className="size-1.5 rounded-full bg-success" /> Operational</Badge></CardHeader><CardContent className="space-y-1 pt-4">{[["API latency", "124 ms"], ["Error rate", "0.02%"], ["Webhook delivery", "99.9%"], ["Last deployment", "2h ago"]].map(([label, value]) => <div key={label} className="flex items-center justify-between rounded-lg px-2 py-3 text-sm hover:bg-muted"><span className="text-muted-foreground">{label}</span><span className="font-mono text-xs font-semibold">{value}</span></div>)}<Button asChild variant="secondary" className="mt-4 w-full"><Link href="/usage"><Radio /> View diagnostics</Link></Button></CardContent></Card>
      </section>
      <section><div className="mb-4 flex items-center justify-between"><div><h2 className="text-xl font-[650] tracking-[-0.025em]">Recent activity</h2><p className="mt-1 text-sm text-muted-foreground">The latest changes in Acme Studio</p></div><Button asChild variant="ghost" size="sm"><Link href="/audit-log">View all <ArrowRight /></Link></Button></div><Card><div className="divide-y">{activity.map((item) => <div key={item.id} className="flex items-center gap-3 px-5 py-4"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-[11px] font-[650]">{item.initials}</span><p className="min-w-0 flex-1 truncate text-sm"><span className="font-[560]">{item.actor}</span> <span className="text-muted-foreground">{item.action}</span></p><time dateTime={item.dateTime} className="hidden items-center gap-1.5 text-xs text-muted-foreground sm:flex"><Clock3 className="size-3.5" /> {item.time}</time></div>)}</div></Card></section>
    </div>
  );
}
