import { getServerSession } from "next-auth";
import type { Session } from "next-auth";
import type { AuthAdapter, SessionUser } from "@/lib/adapters/types";

function toUser(session: Session | null): SessionUser | null {
  if (!session?.user?.email) return null;
  return { id: session.user.email, email: session.user.email, name: session.user.name ?? session.user.email, image: session.user.image };
}

export const authJsAdapter: AuthAdapter = {
  async getCurrentUser() { return toUser((await getServerSession()) as Session | null); },
  async requireUser() { const user = await this.getCurrentUser(); if (!user) throw new Error("Authentication required"); return user; },
};
