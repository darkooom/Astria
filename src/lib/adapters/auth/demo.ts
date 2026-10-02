import type { AuthAdapter, SessionUser } from "@/lib/adapters/types";

const demoUser: SessionUser = { id: "usr_01", email: "jane@acme.studio", name: "Jane Doe" };

export const demoAuthAdapter: AuthAdapter = {
  async getCurrentUser() { return demoUser; },
  async requireUser() { return demoUser; },
};
