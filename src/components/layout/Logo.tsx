import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Aark Alliance wordmark — triangular "A" monogram (violet → teal gradient)
 * plus the name. Pure SVG + type, no image assets, so it stays crisp at any size.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Aark Alliance home"
      className={cn("group flex items-center gap-3", className)}
    >
      <svg
        viewBox="0 0 32 32"
        className="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
        role="img"
        aria-hidden
      >
        <defs>
          <linearGradient id="aark-mark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="55%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#22b8c8" />
          </linearGradient>
        </defs>
        {/* Triangular "A" */}
        <path
          d="M5 27 L16 5 L27 27"
          fill="none"
          stroke="url(#aark-mark)"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Crossbar */}
        <path
          d="M10.6 19.4 H21.4"
          fill="none"
          stroke="url(#aark-mark)"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight text-bone">
        Aark Alliance
      </span>
    </Link>
  );
}
