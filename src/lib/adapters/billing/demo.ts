import type { BillingAdapter } from "@/lib/adapters/types";

export const demoBillingAdapter: BillingAdapter = {
  async getSubscription() { return { plan: "pro", status: "active", renewsAt: new Date("2026-11-01T00:00:00Z") }; },
  async createPortalSession() { return "/billing?portal=demo"; },
};
