import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Aark Alliance wordmark — triangular "A" monogram (purple left / teal right,
 * echoing the brand logo) plus the name. Pure SVG + type, no image asset.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Aark Alliance home"
      className={cn("group flex items-center gap-3", className)}
    >
      <svg
        viewBox="0 0 40 40"
        className="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
        role="img"
        aria-hidden
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      >
        <defs>
          <linearGradient id="aark-bar" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#22b8c8" />
          </linearGradient>
        </defs>
        {/* Left leg — violet */}
        <path d="M6 34 L20 6" stroke="#7c3aed" />
        {/* Right leg — teal */}
        <path d="M20 6 L34 34" stroke="#22b8c8" />
        {/* Crossbar — violet → teal */}
        <path d="M12.6 22 H27.4" stroke="url(#aark-bar)" />
      </svg>
      <span className="font-display text-lg font-semibold tracking-tight text-bone">
        Aark Alliance
      </span>
    </Link>
  );
}
