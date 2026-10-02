import { auth, currentUser } from "@clerk/nextjs/server";
import type { AuthAdapter } from "@/lib/adapters/types";

export const clerkAuthAdapter: AuthAdapter = {
  async getCurrentUser() {
    const { userId } = await auth();
    if (!userId) return null;
    const user = await currentUser();
    const email = user?.primaryEmailAddress?.emailAddress;
    if (!user || !email) return null;
    return { id: user.id, email, name: user.fullName ?? email, image: user.imageUrl };
  },
  async requireUser() { const user = await this.getCurrentUser(); if (!user) throw new Error("Authentication required"); return user; },
};
