export type WorkspaceRole = "owner" | "admin" | "developer" | "billing" | "viewer";

export type SessionUser = {
  id: string;
  email: string;
  name: string;
  image?: string | null;
};

export type Workspace = {
  id: string;
  name: string;
  slug: string;
  plan: "free" | "team" | "pro";
};

export type WorkspaceMember = {
  id: string;
  workspaceId: string;
  user: SessionUser;
  role: WorkspaceRole;
  status: "active" | "invited" | "suspended";
};

export interface AuthAdapter {
  getCurrentUser(): Promise<SessionUser | null>;
  requireUser(): Promise<SessionUser>;
}

export interface DatabaseAdapter {
  listWorkspaces(userId: string): Promise<Workspace[]>;
  getWorkspace(slug: string): Promise<Workspace | null>;
  listMembers(workspaceId: string): Promise<WorkspaceMember[]>;
}

export interface BillingAdapter {
  getSubscription(workspaceId: string): Promise<{ plan: Workspace["plan"]; status: "active" | "trialing" | "past_due"; renewsAt: Date | null }>;
  createPortalSession(workspaceId: string, returnUrl: string): Promise<string>;
}
