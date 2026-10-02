"use client";

import { AlertTriangle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="grid min-h-[60vh] place-items-center">
      <div className="max-w-md text-center"><span className="mx-auto mb-5 grid size-12 place-items-center rounded-full bg-danger-soft text-danger"><AlertTriangle /></span><h1 className="text-2xl font-[650] tracking-[-0.03em]">We couldn’t load this workspace</h1><p className="mt-2 text-sm leading-6 text-muted-foreground">The workspace data may be temporarily unavailable. Retry now, or check the service status if the problem continues.</p><div className="mt-6 flex justify-center gap-2"><Button onClick={reset}><RotateCcw /> Retry</Button><Button variant="secondary" asChild><a href="mailto:support@example.com">Contact support</a></Button></div></div>
    </div>
  );
}
