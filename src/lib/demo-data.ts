export const workspaces = [
  { id: "ws_acme", name: "Acme Studio", initials: "AC", plan: "Pro", role: "Owner" },
  { id: "ws_northstar", name: "Northstar Labs", initials: "NO", plan: "Team", role: "Admin" },
  { id: "ws_aperture", name: "Aperture", initials: "AP", plan: "Free", role: "Member" },
] as const;

export const members = [
  { id: "usr_01", name: "Jane Doe", email: "jane@acme.studio", initials: "JD", role: "Owner", status: "Active", joined: "Jan 12, 2025" },
  { id: "usr_02", name: "Maya Chen", email: "maya@acme.studio", initials: "MC", role: "Admin", status: "Active", joined: "Feb 03, 2025" },
  { id: "usr_03", name: "Alex Morgan", email: "alex@northstar.io", initials: "AM", role: "Member", status: "Invited", joined: "Today" },
  { id: "usr_04", name: "Owen Brooks", email: "owen@acme.studio", initials: "OB", role: "Developer", status: "Active", joined: "Mar 18, 2025" },
  { id: "usr_05", name: "Leila Haddad", email: "leila@acme.studio", initials: "LH", role: "Billing", status: "Active", joined: "Apr 09, 2025" },
  { id: "usr_06", name: "Theo Martin", email: "theo@acme.studio", initials: "TM", role: "Viewer", status: "Suspended", joined: "May 22, 2025" },
] as const;

export const activity = [
  { id: 1, actor: "Maya", initials: "MC", action: "invited alex@northstar.io", time: "4 min ago", dateTime: "2026-10-02T11:10:00+02:00" },
  { id: 2, actor: "Owen", initials: "OB", action: "rotated the production API key", time: "38 min ago", dateTime: "2026-10-02T10:36:00+02:00" },
  { id: 3, actor: "Jane", initials: "JD", action: "upgraded the workspace to Pro", time: "Yesterday", dateTime: "2026-10-01T16:20:00+02:00" },
  { id: 4, actor: "Leila", initials: "LH", action: "downloaded the September invoice", time: "Yesterday", dateTime: "2026-10-01T09:42:00+02:00" },
] as const;

export const auditEvents = [
  { id: "evt_98YD2", event: "member.invited", actor: "Maya Chen", target: "alex@northstar.io", ip: "172.18.0.4", time: "Oct 2, 11:10" },
  { id: "evt_98YC9", event: "api_key.rotated", actor: "Owen Brooks", target: "Production API", ip: "172.18.0.9", time: "Oct 2, 10:36" },
  { id: "evt_98XB4", event: "subscription.updated", actor: "Jane Doe", target: "Pro plan", ip: "172.18.0.2", time: "Oct 1, 16:20" },
  { id: "evt_98WA1", event: "invoice.downloaded", actor: "Leila Haddad", target: "INV-2026-09", ip: "172.18.0.7", time: "Oct 1, 09:42" },
] as const;

export const roles = [
  { name: "Owner", description: "Full workspace access, including deletion and ownership transfer.", members: 1, permissions: 24 },
  { name: "Admin", description: "Manage people, settings, integrations, and production resources.", members: 3, permissions: 21 },
  { name: "Developer", description: "Build with API keys, webhooks, logs, and development resources.", members: 8, permissions: 14 },
  { name: "Billing", description: "Manage subscriptions, invoices, payment methods, and usage.", members: 2, permissions: 6 },
  { name: "Viewer", description: "Read-only access to workspace dashboards and activity.", members: 10, permissions: 5 },
] as const;

export const usagePoints = [22, 31, 27, 42, 39, 56, 49, 64, 58, 76, 70, 82];
