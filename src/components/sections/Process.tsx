import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section
      id="process"
      className="relative scroll-mt-24 border-y border-line bg-ink-soft py-24 sm:py-28"
    >
      <div className="bg-grid mask-fade-y absolute inset-0 opacity-40" aria-hidden />
      <Container className="relative">
        <SectionHeading
          eyebrow="How we work"
          align="center"
          title={
            <>
              A process that respects your{" "}
              <span className="text-gradient-brand">operations</span>
            </>
          }
          intro="Clear stages, transparent pricing, and disciplined execution, engineered to minimise downtime and surprises."
        />

        <ol className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} as="li">
              <div className="group relative h-full rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-brand/40">
                <div className="flex items-center gap-3">
                  <span className="font-display text-4xl font-semibold text-brand/30 transition-colors group-hover:text-brand/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-line" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-bone">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
