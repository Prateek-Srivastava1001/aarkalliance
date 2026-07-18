import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

/** Eyebrow label + heading + optional intro, shared across sections. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-brass">
            <span className="h-px w-6 bg-brass/60" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-5 text-3xl font-semibold leading-[1.1] sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
