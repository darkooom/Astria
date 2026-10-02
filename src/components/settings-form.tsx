"use client";

import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { AlertTriangle, Copy, RotateCw, Save } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function SettingsForm() {
  const [name, setName] = useState("Acme Studio");
  const [slug, setSlug] = useState("acme-studio");
  const [saving, setSaving] = useState(false);

  async function save(event: FormEvent) {
    event.preventDefault();
    setSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSaving(false);
    toast.success("Workspace settings saved", { description: `${name} is now up to date.` });
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(300px,1fr)]">
      <div className="space-y-6">
        <Card><CardHeader><div><CardTitle>Workspace profile</CardTitle><p className="mt-1 text-sm text-muted-foreground">The shared identity visible to every member.</p></div></CardHeader><CardContent><form onSubmit={save} className="space-y-4"><div><label htmlFor="workspace-name" className="mb-1.5 block text-sm font-[560]">Workspace name</label><Input id="workspace-name" value={name} onChange={(event) => setName(event.target.value)} /></div><div><label htmlFor="workspace-slug" className="mb-1.5 block text-sm font-[560]">Workspace slug</label><div className="flex items-center rounded-[var(--radius-sm)] border border-input bg-card focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20"><span className="pl-3 text-sm text-muted-foreground">app.astria.dev/</span><input id="workspace-slug" value={slug} onChange={(event) => setSlug(event.target.value)} className="h-10 min-w-0 flex-1 bg-transparent px-1 text-sm outline-none" /></div></div><div className="flex justify-end pt-2"><Button type="submit" disabled={saving}><Save /> {saving ? "Saving…" : "Save changes"}</Button></div></form></CardContent></Card>
        <Card><CardHeader><div><CardTitle>API keys</CardTitle><p className="mt-1 text-sm text-muted-foreground">Authenticate server requests for this workspace.</p></div><Button size="sm"><RotateCw /> Rotate key</Button></CardHeader><CardContent><div className="flex items-center gap-3 rounded-lg border bg-muted/50 p-3"><div className="min-w-0 flex-1"><div className="flex items-center gap-2"><p className="text-sm font-[600]">Production</p><Badge variant="success"><span className="size-1.5 rounded-full bg-success" /> Active</Badge></div><p className="mt-1 truncate font-mono text-xs text-muted-foreground">ast_live_••••••••••••••••7f32</p></div><Button variant="ghost" size="icon" aria-label="Copy production API key"><Copy /></Button></div><p className="mt-3 text-xs leading-5 text-muted-foreground">The full secret is only shown once. Store it in your deployment platform, never in source control.</p></CardContent></Card>
      </div>
      <div className="space-y-6"><Card><CardHeader><CardTitle>Tenant identity</CardTitle></CardHeader><CardContent className="space-y-3 text-sm"><div className="flex justify-between"><span className="text-muted-foreground">Workspace ID</span><span className="font-mono text-xs">ws_acme</span></div><div className="flex justify-between"><span className="text-muted-foreground">Region</span><span>eu-central-1</span></div><div className="flex justify-between"><span className="text-muted-foreground">Created</span><span>Jan 12, 2025</span></div></CardContent></Card><Card className="border-danger/35"><CardHeader><div><CardTitle>Danger zone</CardTitle><p className="mt-1 text-sm text-muted-foreground">Destructive actions require the workspace name.</p></div></CardHeader><CardContent><div className="flex items-start gap-3"><AlertTriangle className="mt-0.5 size-4 text-danger" /><div><p className="text-sm font-[600]">Delete workspace</p><p className="mt-1 text-xs leading-5 text-muted-foreground">Permanently removes all members, API keys, usage records, and settings.</p><Button variant="destructive" size="sm" className="mt-4">Delete Acme Studio</Button></div></div></CardContent></Card></div>
    </div>
  );
}
