import type { Metadata } from "next";
import { KeyRound, MoreHorizontal, Plus } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { roles } from "@/lib/demo-data";

export const metadata: Metadata = { title: "Roles" };

export default function RolesPage() {
  return <div className="space-y-8"><PageHeader eyebrow="Role-based access" title="Roles & permissions" description="Keep access predictable with reusable roles. System roles are safe defaults; custom roles can match your organization." action={<Button><Plus /> Create role</Button>} /><div className="grid gap-3 lg:grid-cols-2">{roles.map((role) => <Card key={role.name} className="transition-colors hover:border-muted-foreground/50"><CardContent><div className="flex items-start gap-4"><span className="grid size-10 shrink-0 place-items-center rounded-lg bg-secondary text-muted-foreground"><KeyRound className="size-4" /></span><div className="min-w-0 flex-1"><div className="flex items-center justify-between"><h2 className="font-[650]">{role.name}</h2><Button variant="ghost" size="icon" aria-label={`Actions for ${role.name}`}><MoreHorizontal /></Button></div><p className="mt-1 text-sm leading-6 text-muted-foreground">{role.description}</p><div className="mt-5 flex gap-6 text-xs text-muted-foreground"><span><strong className="font-mono text-foreground">{role.members}</strong> members</span><span><strong className="font-mono text-foreground">{role.permissions}</strong> permissions</span></div></div></div></CardContent></Card>)}</div></div>;
}
