import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:opacity-50";

const sizes = "px-6 py-3";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-dark hover:shadow-[0_16px_40px_-12px_rgba(124,58,237,0.6)]",
  secondary:
    "glass text-bone hover:border-brand/50 hover:text-brand-light",
  ghost: "text-muted hover:text-bone",
};

interface Props {
  href?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
}

export function Button({
  href,
  variant = "primary",
  className,
  children,
  external,
}: Props) {
  const classes = cn(base, sizes, variants[variant], className);

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return <button className={classes}>{children}</button>;
}
