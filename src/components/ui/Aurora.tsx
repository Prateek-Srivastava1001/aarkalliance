import { cn } from "@/lib/utils";

/**
 * Ambient animated glow — layered blurred brand blobs.
 * Purely decorative; sits behind content. Respects reduced-motion via CSS.
 */
export function Aurora({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="animate-aurora absolute -top-1/3 left-1/4 h-[46rem] w-[46rem] rounded-full bg-brand/20 blur-[120px]" />
      <div className="animate-aurora absolute top-1/4 -right-1/4 h-[38rem] w-[38rem] rounded-full bg-teal/20 blur-[130px] [animation-delay:-6s]" />
      <div className="animate-aurora absolute bottom-0 left-1/3 h-[32rem] w-[32rem] rounded-full bg-[#4338ca]/20 blur-[120px] [animation-delay:-11s]" />
    </div>
  );
}
