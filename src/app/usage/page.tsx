import type { Metadata } from "next";
import { Download, Gauge, HardDrive, Radio, Users } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { UsageChart } from "@/components/usage-chart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const metadata: Metadata = { title: "Usage" };

const resources = [
  { label: "API requests", value: "680k / 1M", percent: 68, icon: Radio },
  { label: "Active users", value: "8,429 / 15k", percent: 56, icon: Users },
  { label: "Storage", value: "42 GB / 100 GB", percent: 42, icon: HardDrive },
  { label: "Compute", value: "1,820 / 5k hours", percent: 36, icon: Gauge },
];

export default function UsagePage() {
  return <div className="space-y-8"><PageHeader eyebrow="Oct 1–31" title="Usage" description="Track consumption across production resources and avoid unexpected limits." action={<Button variant="secondary"><Download /> Export CSV</Button>} /><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">{resources.map((resource) => <Card key={resource.label}><CardContent><div className="flex items-center gap-2 text-sm text-muted-foreground"><resource.icon className="size-4" />{resource.label}</div><p className="mt-5 font-mono text-lg font-semibold">{resource.value}</p><div className="mt-3"><Progress value={resource.percent} label={`${resource.label}: ${resource.percent} percent`} /></div></CardContent></Card>)}</div><Card><CardHeader><div><CardTitle>Request volume</CardTitle><p className="mt-1 text-sm text-muted-foreground">Daily successful and failed API requests</p></div><select aria-label="Usage period" className="h-8 rounded-lg border bg-card px-2 text-xs"><option>Last 30 days</option><option>Last 90 days</option></select></CardHeader><CardContent><UsageChart /></CardContent></Card></div>;
}
