"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  Activity, BarChart3, BookOpen, Check, ChevronDown,
  CreditCard, FileClock, HelpCircle, KeyRound, LayoutDashboard, Menu, Plus,
  Search, Settings, ShieldCheck, Users, Webhook, X,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { workspaces } from "@/lib/demo-data";

type NavItem = { href: string; label: string; icon: LucideIcon; count?: string };
type NavGroup = { label: string; items: NavItem[] };

const groups: NavGroup[] = [
  { label: "Overview", items: [{ href: "/", label: "Dashboard", icon: LayoutDashboard }, { href: "/audit-log", label: "Activity", icon: Activity }] },
  { label: "Manage", items: [{ href: "/members", label: "Members", icon: Users, count: "24" }, { href: "/roles", label: "Roles", icon: ShieldCheck }] },
  { label: "Platform", items: [{ href: "/usage", label: "Usage", icon: BarChart3 }, { href: "/settings", label: "API keys", icon: KeyRound }, { href: "/settings", label: "Webhooks", icon: Webhook }, { href: "/audit-log", label: "Audit log", icon: FileClock }] },
  { label: "Workspace", items: [{ href: "/billing", label: "Billing", icon: CreditCard }, { href: "/settings", label: "Settings", icon: Settings }] },
];

const commandItems = groups.flatMap((group) => group.items);

function TenantSwitcher() {
  const [selected, setSelected] = useState<(typeof workspaces)[number]>(workspaces[0]);
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex h-10 min-w-0 items-center gap-2 rounded-[var(--radius-sm)] border bg-card px-2.5 text-left text-sm transition-colors hover:bg-secondary" aria-label={`Current workspace: ${selected.name}. Switch workspace`}>
          <span className="grid size-6 shrink-0 place-items-center rounded-md bg-secondary font-mono text-[10px] font-bold">{selected.initials}</span>
          <span className="hidden min-w-0 sm:block"><span className="block truncate font-[560]">{selected.name}</span></span>
          <ChevronDown className="size-3.5 shrink-0 text-muted-foreground" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content align="start" sideOffset={8} className="z-50 w-72 rounded-[var(--radius-md)] border bg-popover p-1.5 text-popover-foreground shadow-[var(--shadow-overlay)]">
          <div className="px-2 pb-2 pt-1 text-xs font-[560] text-muted-foreground">Switch workspace</div>
          {workspaces.map((workspace) => (
            <DropdownMenu.Item key={workspace.id} onSelect={() => setSelected(workspace)} className="flex cursor-default items-center gap-3 rounded-lg px-2 py-2.5 text-sm outline-none data-[highlighted]:bg-secondary">
              <span className="grid size-8 place-items-center rounded-lg border bg-card font-mono text-[10px] font-bold">{workspace.initials}</span>
              <span className="min-w-0 flex-1"><span className="block font-[560]">{workspace.name}</span><span className="text-xs text-muted-foreground">{workspace.plan} · {workspace.role}</span></span>
              {selected.id === workspace.id && <Check className="size-4 text-primary" aria-label="Selected" />}
            </DropdownMenu.Item>
          ))}
          <DropdownMenu.Separator className="my-1 h-px bg-border" />
          <DropdownMenu.Item className="flex cursor-default items-center gap-2 rounded-lg px-2 py-2 text-sm outline-none data-[highlighted]:bg-secondary"><Plus className="size-4" /> Create workspace</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

function CommandMenu({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const items = useMemo(() => commandItems.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-[16vh] z-50 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 overflow-hidden rounded-[var(--radius-lg)] border bg-popover shadow-[var(--shadow-overlay)]">
          <Dialog.Title className="sr-only">Search Astria</Dialog.Title>
          <div className="flex items-center gap-3 border-b px-4"><Search className="size-4 text-muted-foreground" /><Input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search pages, people, and actions…" className="h-14 border-0 bg-transparent px-0 focus:ring-0" /><kbd className="rounded border bg-secondary px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">ESC</kbd></div>
          <div className="max-h-80 overflow-y-auto p-2">
            <p className="px-2 py-2 text-xs font-[560] text-muted-foreground">Navigate</p>
            {items.length ? items.map((item) => <button key={`${item.href}-${item.label}`} onClick={() => { router.push(item.href); onOpenChange(false); }} className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm hover:bg-secondary"><item.icon className="size-4 text-muted-foreground" /><span>{item.label}</span><span className="ml-auto font-mono text-[10px] text-muted-foreground">Go to</span></button>) : <div className="px-3 py-8 text-center text-sm text-muted-foreground">No results for “{query}”. Try another term.</div>}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function Sidebar({ mobile = false, close }: { mobile?: boolean; close?: () => void }) {
  const pathname = usePathname();
  return (
    <aside className={cn("flex h-full w-60 shrink-0 flex-col border-r bg-sidebar text-sidebar-foreground", !mobile && "hidden lg:flex")}>
      <div className="flex h-16 items-center px-5"><Logo /></div>
      <nav aria-label="Main navigation" className="flex-1 overflow-y-auto px-3 py-2">
        {groups.map((group) => <div key={group.label} className="mb-4"><p className="mb-1 px-2 text-[10px] font-[650] uppercase tracking-[0.12em] text-muted-foreground">{group.label}</p><div className="space-y-0.5">{group.items.map((item) => { const active = pathname === item.href && (item.label === "Dashboard" || !group.items.some((other) => other.href === item.href && other.label !== item.label)); return <Link key={`${item.href}-${item.label}`} href={item.href} onClick={close} aria-current={active ? "page" : undefined} className={cn("flex h-9 items-center gap-3 rounded-lg px-2.5 text-sm font-[500] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground", active && "bg-secondary text-foreground")}><item.icon className={cn("size-4", active && "text-primary")} /><span>{item.label}</span>{"count" in item && <span className="ml-auto rounded-full bg-card px-1.5 py-0.5 text-[10px] text-muted-foreground">{item.count}</span>}</Link>; })}</div></div>)}
      </nav>
      <div className="space-y-1 border-t p-3"><a href="https://github.com" className="flex h-9 items-center gap-3 rounded-lg px-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"><BookOpen className="size-4" /> Documentation</a><button className="flex h-9 w-full items-center gap-3 rounded-lg px-2.5 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"><HelpCircle className="size-4" /> Send feedback</button><div className="mt-3 flex items-center justify-between rounded-lg border bg-card px-2.5 py-2"><span className="flex items-center gap-2 text-xs font-[560]"><span className="size-1.5 rounded-full bg-success" /> Acme · PROD</span><span className="font-mono text-[9px] text-muted-foreground">v0.1</span></div></div>
    </aside>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [commandOpen, setCommandOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const listener = (event: KeyboardEvent) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setCommandOpen(true); } };
    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, []);

  return (
    <div className="fixed inset-0 flex overflow-hidden">
      <Sidebar />
      {mobileOpen && <div className="fixed inset-0 z-50 lg:hidden"><button className="absolute inset-0 bg-background/70 backdrop-blur-sm" aria-label="Close navigation" onClick={() => setMobileOpen(false)} /><div className="relative h-full w-60"><Sidebar mobile close={() => setMobileOpen(false)} /><Button size="icon" variant="secondary" className="absolute left-[15.25rem] top-3" onClick={() => setMobileOpen(false)} aria-label="Close navigation"><X /></Button></div></div>}
      <div className="flex h-full min-w-0 flex-1 flex-col overflow-hidden">
        <header className="z-40 flex h-16 shrink-0 items-center gap-3 border-b bg-background px-4 md:px-6">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Menu /></Button>
          <TenantSwitcher />
          <button onClick={() => setCommandOpen(true)} className="ml-auto hidden h-10 w-64 items-center gap-2 rounded-[var(--radius-sm)] border bg-card px-3 text-sm text-muted-foreground transition-colors hover:bg-secondary md:flex"><Search className="size-4" /><span>Search or jump…</span><kbd className="ml-auto rounded border bg-secondary px-1.5 py-0.5 font-mono text-[10px]">⌘K</kbd></button>
          <Button variant="ghost" size="icon" className="ml-auto md:hidden" onClick={() => setCommandOpen(true)} aria-label="Search"><Search /></Button>
          <ThemeToggle />
          <button className="grid size-9 place-items-center rounded-full bg-foreground text-xs font-[650] text-background" aria-label="Open account menu">JD</button>
        </header>
        <main className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto">
          <div className="mx-auto w-full max-w-[1440px] p-4 pb-24 md:p-8 lg:p-10">{children}</div>
        </main>
      </div>
      <CommandMenu open={commandOpen} onOpenChange={setCommandOpen} />
    </div>
  );
}
