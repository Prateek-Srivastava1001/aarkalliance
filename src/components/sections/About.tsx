import Image from "next/image";
import { ShieldCheck, Clock, Layers, Hotel } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/lib/content";

const differentiators = [
  {
    icon: Layers,
    title: "Seven trades, one contract",
    body: "Interiors to blinds under a single accountable team, with no coordination gaps between vendors.",
  },
  {
    icon: Hotel,
    title: "Brand-standard finishes",
    body: "Work built to the exacting specifications of Marriott, Hyatt and IHG operators.",
  },
  {
    icon: Clock,
    title: "On-time, phased delivery",
    body: "Zoned works and night shifts that keep your rooms selling while we build.",
  },
  {
    icon: ShieldCheck,
    title: "Warranty-backed systems",
    body: "Documented handovers and warranties on waterproofing and applicable finishes.",
  },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Reveal direction="right">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="/images/about.webp"
                  alt="Aark Alliance team at work on a hospitality project"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="glass absolute -bottom-6 -right-2 rounded-2xl p-5 sm:right-6">
                <p className="text-3xl font-semibold text-gradient-brand">Pan-India</p>
                <p className="mt-1 text-xs text-muted">Hospitality &amp; commercial delivery</p>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title={
                <>
                  A finishing partner built for{" "}
                  <span className="text-gradient-brand">hospitality</span>
                </>
              }
              intro="Aark Alliance brings interiors, waterproofing, painting, polishing, flooring, glass films and blinds together under one roof. We work the way hotels need us to: precise, discreet, and dependable, so operators get a finish worthy of their brand, on the date they promised their guests."
            />

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {differentiators.map((d, i) => (
                <Reveal key={d.title} delay={i * 0.08}>
                  <div className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-surface">
                      <d.icon className="h-5 w-5 text-brand" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-bone">{d.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{d.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Stats band */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="bg-ink-soft">
              <div className="flex h-full flex-col items-center justify-center px-4 py-8 text-center sm:py-10">
                <div className="font-display text-4xl font-semibold text-gradient-brand sm:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-xs leading-tight text-muted sm:text-sm">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
