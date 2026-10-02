import type { Metadata } from "next";
import { InviteDialog } from "@/components/invite-dialog";
import { MembersTable } from "@/components/members-table";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = { title: "Members" };

export default function MembersPage() {
  return <div className="space-y-8"><PageHeader eyebrow="24 seats · 6 shown" title="Members" description="Invite teammates and control how they access Acme Studio." action={<InviteDialog />} /><MembersTable /></div>;
}
