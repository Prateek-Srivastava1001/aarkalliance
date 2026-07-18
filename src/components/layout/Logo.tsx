import Link from "next/link";
import { cn } from "@/lib/utils";

/** Aark Alliance wordmark with an "A" monogram. Pure SVG + type — no assets. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Aark Alliance — home"
      className={cn("group flex items-center gap-3", className)}
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-lg border border-line bg-surface transition-colors group-hover:border-brass/60">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
        >
          {/* Stylised "A" formed by an alliance of two strokes */}
          <path
            d="M5 20 L12 4 L19 20"
            className="text-brass"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 14 H15.5"
            className="text-bone"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-sm font-semibold tracking-[0.28em] text-bone">
          AARK
        </span>
        <span className="mt-0.5 text-[10px] font-medium tracking-[0.42em] text-brass">
          ALLIANCE
        </span>
      </span>
    </Link>
  );
}
