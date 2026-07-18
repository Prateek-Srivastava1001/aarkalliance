import { Container } from "./Container";
import { Aurora } from "./Aurora";
import { Reveal } from "./Reveal";

/** Compact hero band used at the top of interior pages. */
export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 sm:pt-40 sm:pb-20">
      <Aurora className="opacity-60" />
      <div className="bg-grid mask-fade-radial absolute inset-0 opacity-40" aria-hidden />
      <Container className="relative">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-brass">
            <span className="h-px w-6 bg-brass/60" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {intro}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
