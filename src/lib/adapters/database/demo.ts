import type { DatabaseAdapter } from "@/lib/adapters/types";

export const demoDatabaseAdapter: DatabaseAdapter = {
  async listWorkspaces() { return [{ id: "ws_acme", name: "Acme Studio", slug: "acme-studio", plan: "pro" }]; },
  async getWorkspace(slug) { return slug === "acme-studio" ? { id: "ws_acme", name: "Acme Studio", slug, plan: "pro" } : null; },
  async listMembers(workspaceId) { return [{ id: "mem_01", workspaceId, user: { id: "usr_01", name: "Jane Doe", email: "jane@acme.studio" }, role: "owner", status: "active" }]; },
};
