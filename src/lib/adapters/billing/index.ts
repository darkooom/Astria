import type { BillingAdapter } from "@/lib/adapters/types";
import { demoBillingAdapter } from "./demo";

export async function getBillingAdapter(): Promise<BillingAdapter> {
  return process.env.ASTRIA_BILLING_ADAPTER === "stripe" ? (await import("./stripe")).stripeBillingAdapter : demoBillingAdapter;
}
