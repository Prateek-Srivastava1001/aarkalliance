import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Aurora } from "@/components/ui/Aurora";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/content";

export function CTA() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-16 text-center sm:px-12 sm:py-20">
            <Aurora className="opacity-60" />
            <div className="bg-grid mask-fade-radial absolute inset-0 opacity-40" aria-hidden />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                Planning a build, renovation or{" "}
                <span className="text-gradient-brass">rebrand?</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                Tell us the scope and timeline. We&apos;ll come back with a clear,
                itemised proposal and a delivery plan that fits your operations.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brass px-8 py-4 text-sm font-medium text-ink transition-all duration-300 hover:bg-brass-light hover:shadow-[0_18px_44px_-14px_rgba(200,161,90,0.7)] sm:w-auto"
                >
                  Request a quote
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <a
                  href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-surface/60 px-8 py-4 text-sm font-medium text-bone backdrop-blur-sm transition-colors hover:border-brass/50 hover:text-brass sm:w-auto"
                >
                  <Phone className="h-4 w-4" />
                  {site.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
