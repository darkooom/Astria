import { PrismaClient } from "@prisma/client";
import type { DatabaseAdapter, WorkspaceMember } from "@/lib/adapters/types";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };
export const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const prismaDatabaseAdapter: DatabaseAdapter = {
  async listWorkspaces(userId) {
    const memberships = await prisma.membership.findMany({ where: { userId }, include: { workspace: true } });
    return memberships.map(({ workspace }) => ({ id: workspace.id, name: workspace.name, slug: workspace.slug, plan: workspace.plan as "free" | "team" | "pro" }));
  },
  async getWorkspace(slug) {
    const workspace = await prisma.workspace.findUnique({ where: { slug } });
    return workspace ? { id: workspace.id, name: workspace.name, slug: workspace.slug, plan: workspace.plan as "free" | "team" | "pro" } : null;
  },
  async listMembers(workspaceId) {
    const memberships = await prisma.membership.findMany({ where: { workspaceId }, include: { user: true } });
    return memberships.map((membership) => ({ id: membership.id, workspaceId, user: { id: membership.user.id, email: membership.user.email, name: membership.user.name, image: membership.user.image }, role: membership.role, status: membership.status })) as WorkspaceMember[];
  },
};
