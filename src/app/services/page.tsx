import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import { CTA } from "@/components/sections/CTA";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Interior fit-outs, waterproofing, painting, polishing, flooring, glass films and blinds. Hospitality-grade finishing under one roof.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={
          <>
            Every finish your project needs,{" "}
            <span className="text-gradient-brand">under one roof</span>
          </>
        }
        intro="Seven specialist trades, one accountable team. Explore what we deliver, from structural waterproofing to the final coat, film and blind."
      />

      <section className="pb-8">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={(i % 3) * 0.08}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
