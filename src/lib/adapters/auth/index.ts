import type { AuthAdapter } from "@/lib/adapters/types";
import { demoAuthAdapter } from "./demo";

export async function getAuthAdapter(): Promise<AuthAdapter> {
  switch (process.env.ASTRIA_AUTH_ADAPTER ?? "demo") {
    case "authjs": return (await import("./authjs")).authJsAdapter;
    case "clerk": return (await import("./clerk")).clerkAuthAdapter;
    default: return demoAuthAdapter;
  }
}
