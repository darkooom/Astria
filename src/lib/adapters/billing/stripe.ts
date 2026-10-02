import Stripe from "stripe";
import type { BillingAdapter } from "@/lib/adapters/types";
import { prisma } from "@/lib/adapters/database/prisma";

function stripeClient() {
  if (!process.env.STRIPE_SECRET_KEY) throw new Error("STRIPE_SECRET_KEY is required for the Stripe billing adapter.");
  return new Stripe(process.env.STRIPE_SECRET_KEY);
}

export const stripeBillingAdapter: BillingAdapter = {
  async getSubscription(workspaceId) {
    const subscription = await prisma.subscription.findFirst({ where: { workspaceId }, orderBy: { createdAt: "desc" } });
    if (!subscription) return { plan: "free", status: "active", renewsAt: null };
    return { plan: subscription.plan as "free" | "team" | "pro", status: subscription.status as "active" | "trialing" | "past_due", renewsAt: subscription.currentPeriodEnd };
  },
  async createPortalSession(workspaceId, returnUrl) {
    const workspace = await prisma.workspace.findUnique({ where: { id: workspaceId } });
    if (!workspace?.stripeId) throw new Error("This workspace does not have a Stripe customer yet.");
    const session = await stripeClient().billingPortal.sessions.create({ customer: workspace.stripeId, return_url: returnUrl });
    return session.url;
  },
};
