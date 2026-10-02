import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SettingsForm } from "@/components/settings-form";

export const metadata: Metadata = { title: "Settings" };

export default function SettingsPage() {
  return <div className="space-y-8"><PageHeader eyebrow="Production workspace" title="Settings" description="Manage the identity, keys, and lifecycle of Acme Studio." /><SettingsForm /></div>;
}
