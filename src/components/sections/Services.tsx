import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                One partner for every <span className="text-gradient-brass">finish</span>
              </>
            }
            intro="From bare shell to snag-free handover — a single, accountable team across seven specialist trades, so nothing falls between the gaps."
          />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 0.08}>
              <ServiceCard service={service} showHighlights={false} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
