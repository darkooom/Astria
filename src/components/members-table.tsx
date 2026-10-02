"use client";

import { MoreHorizontal, Search, UserRoundX } from "lucide-react";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { members } from "@/lib/demo-data";

export function MembersTable() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => members.filter((member) => `${member.name} ${member.email} ${member.role}`.toLowerCase().includes(query.toLowerCase())), [query]);
  return (
    <div className="overflow-hidden rounded-[var(--radius-md)] border bg-card">
      <div className="flex flex-col gap-3 border-b p-4 sm:flex-row sm:items-center"><div className="relative max-w-md flex-1"><label htmlFor="member-search" className="sr-only">Search members</label><Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input id="member-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search name, email, or role…" className="pl-9" /></div><select aria-label="Filter members by role" className="h-10 rounded-[var(--radius-sm)] border bg-card px-3 text-sm"><option>All roles</option><option>Admin</option><option>Developer</option><option>Viewer</option></select></div>
      {filtered.length ? <div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead className="sticky top-0 bg-muted/70 text-xs text-muted-foreground"><tr><th scope="col" className="px-5 py-3 font-[560]">Member</th><th scope="col" className="px-5 py-3 font-[560]">Role</th><th scope="col" className="px-5 py-3 font-[560]">Status</th><th scope="col" className="px-5 py-3 font-[560]">Joined</th><th scope="col" className="w-16 px-5 py-3"><span className="sr-only">Actions</span></th></tr></thead><tbody className="divide-y">{filtered.map((member) => <tr key={member.id} className="transition-colors hover:bg-muted/50"><td className="px-5 py-4"><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-full bg-secondary text-[11px] font-[650]">{member.initials}</span><div><div className="font-[600]">{member.name}</div><div className="mt-0.5 text-xs text-muted-foreground">{member.email}</div></div></div></td><td className="px-5 py-4 text-muted-foreground">{member.role}</td><td className="px-5 py-4"><Badge variant={member.status === "Active" ? "success" : member.status === "Invited" ? "warning" : "danger"}><span className="size-1.5 rounded-full bg-current" />{member.status}</Badge></td><td className="px-5 py-4 text-muted-foreground">{member.joined}</td><td className="px-5 py-4"><Button variant="ghost" size="icon" aria-label={`Actions for ${member.email}`}><MoreHorizontal /></Button></td></tr>)}</tbody></table></div> : <div className="grid min-h-72 place-items-center px-6 text-center"><div><span className="mx-auto grid size-11 place-items-center rounded-full bg-secondary text-muted-foreground"><UserRoundX /></span><h3 className="mt-4 font-[650]">No members match “{query}”</h3><p className="mt-1 text-sm text-muted-foreground">Try another name or clear the current search.</p><Button variant="secondary" className="mt-4" onClick={() => setQuery("")}>Clear search</Button></div></div>}
      <div className="flex items-center justify-between border-t px-5 py-3 text-xs text-muted-foreground"><span>Showing {filtered.length} of {members.length} members</span><span>Page 1 of 1</span></div>
    </div>
  );
}
