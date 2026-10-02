import type { Metadata } from "next";
import { Download, Search } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { auditEvents } from "@/lib/demo-data";

export const metadata: Metadata = { title: "Audit log" };

export default function AuditLogPage() {
  return <div className="space-y-8"><PageHeader eyebrow="90-day retention" title="Audit log" description="A searchable record of security-sensitive actions across Acme Studio." action={<Button variant="secondary"><Download /> Export</Button>} /><div className="overflow-hidden rounded-[var(--radius-md)] border bg-card"><div className="flex flex-col gap-3 border-b p-4 sm:flex-row"><div className="relative max-w-md flex-1"><label htmlFor="audit-search" className="sr-only">Search audit events</label><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input id="audit-search" placeholder="Search event, actor, or target…" className="pl-9" /></div><select aria-label="Filter by event type" className="h-10 rounded-[var(--radius-sm)] border bg-card px-3 text-sm"><option>All events</option><option>Members</option><option>Security</option><option>Billing</option></select></div><div className="overflow-x-auto"><table className="w-full min-w-[850px] text-left text-sm"><thead className="bg-muted/70 text-xs text-muted-foreground"><tr><th scope="col" className="px-5 py-3 font-[560]">Event</th><th scope="col" className="px-5 py-3 font-[560]">Actor</th><th scope="col" className="px-5 py-3 font-[560]">Target</th><th scope="col" className="px-5 py-3 font-[560]">IP address</th><th scope="col" className="px-5 py-3 font-[560]">Time</th></tr></thead><tbody className="divide-y">{auditEvents.map((event) => <tr key={event.id} className="hover:bg-muted/50"><td className="px-5 py-4"><Badge variant="outline" className="font-mono">{event.event}</Badge><div className="mt-1.5 font-mono text-[10px] text-muted-foreground">{event.id}</div></td><td className="px-5 py-4 font-[560]">{event.actor}</td><td className="px-5 py-4 text-muted-foreground">{event.target}</td><td className="px-5 py-4 font-mono text-xs text-muted-foreground">{event.ip}</td><td className="px-5 py-4 text-muted-foreground">{event.time}</td></tr>)}</tbody></table></div><div className="border-t px-5 py-3 text-xs text-muted-foreground">Showing 4 most recent events</div></div></div>;
}
