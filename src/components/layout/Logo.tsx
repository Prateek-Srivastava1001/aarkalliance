import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Aark Alliance logo — the official triangular "A/L" mark (extracted from the
 * brand artwork, transparent WebP) plus the name.
 * To update the mark, replace /public/images/logo.webp.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Aark Alliance home"
      className={cn("group flex items-center gap-2.5", className)}
    >
      <Image
        src="/images/logo.webp"
        alt="Aark Alliance"
        width={40}
        height={40}
        priority
        className="h-9 w-9 object-contain transition-transform duration-300 group-hover:-translate-y-0.5"
      />
      <span className="font-display text-lg font-semibold tracking-tight text-bone">
        Aark Alliance
      </span>
    </Link>
  );
}
