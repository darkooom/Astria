import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.ComponentProps<"input">) {
  return <input className={cn("h-10 w-full rounded-[var(--radius-sm)] border border-input bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors hover:border-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20", className)} {...props} />;
}
