"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Check, Plus, X } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function InviteDialog({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError("");
    if (!email.includes("@")) { setError("Enter a valid email address, such as teammate@company.com."); return; }
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 650));
    setLoading(false);
    setOpen(false);
    toast.success(`Invitation sent to ${email}`, { description: "They can now join Acme Studio." });
    setEmail("");
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild><Button size={compact ? "sm" : "default"}><Plus /> Invite member</Button></Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-[var(--radius-lg)] border bg-popover p-6 shadow-[var(--shadow-overlay)]">
          <Dialog.Title className="text-xl font-[650] tracking-[-0.025em]">Invite to Acme Studio</Dialog.Title>
          <Dialog.Description className="mt-1.5 text-sm leading-6 text-muted-foreground">Give a teammate access to this workspace. You can change their role later.</Dialog.Description>
          <Dialog.Close asChild><Button variant="ghost" size="icon" className="absolute right-3 top-3" aria-label="Close dialog"><X /></Button></Dialog.Close>
          <form onSubmit={submit} className="mt-6 space-y-4">
            <div><label htmlFor="invite-email" className="mb-1.5 block text-sm font-[560]">Email address</label><Input id="invite-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="teammate@company.com" aria-describedby={error ? "invite-error" : undefined} aria-invalid={Boolean(error)} />{error && <p id="invite-error" className="mt-1.5 text-xs text-danger">{error}</p>}</div>
            <div><label htmlFor="invite-role" className="mb-1.5 block text-sm font-[560]">Role</label><select id="invite-role" className="h-10 w-full rounded-[var(--radius-sm)] border border-input bg-card px-3 text-sm"><option>Member</option><option>Developer</option><option>Admin</option><option>Billing</option><option>Viewer</option></select><p className="mt-1.5 text-xs text-muted-foreground">Members can collaborate but cannot manage workspace settings.</p></div>
            <div className="flex justify-end gap-2 pt-2"><Dialog.Close asChild><Button type="button" variant="secondary">Cancel</Button></Dialog.Close><Button type="submit" disabled={loading}>{loading ? "Sending…" : <><Check /> Send invitation</>}</Button></div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
