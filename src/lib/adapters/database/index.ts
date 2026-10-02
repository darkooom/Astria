import type { DatabaseAdapter } from "@/lib/adapters/types";
import { demoDatabaseAdapter } from "./demo";

export async function getDatabaseAdapter(): Promise<DatabaseAdapter> {
  return process.env.ASTRIA_DATABASE_ADAPTER === "prisma" ? (await import("./prisma")).prismaDatabaseAdapter : demoDatabaseAdapter;
}
