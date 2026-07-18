import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, Phone, MapPin, MessageCircle, Clock, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Aark Alliance for interiors, waterproofing, painting, polishing, flooring, glass films and blinds.",
};

export default function ContactPage() {
  const details = [
    {
      icon: Mail,
      label: "Email",
      value: site.contact.email,
      href: `mailto:${site.contact.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: site.contact.phone,
      href: `tel:${site.contact.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Message us",
      href: `https://wa.me/${site.contact.whatsapp}`,
    },
    {
      icon: Building2,
      label: "Office",
      value: site.contact.address,
    },
    {
      icon: MapPin,
      label: "Service areas",
      value: site.contact.serviceAreas,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s finish your space{" "}
            <span className="text-gradient-brand">beautifully</span>
          </>
        }
        intro="Share your scope and timeline. We usually respond within one business day with next steps."
      />

      <section className="pb-24 sm:pb-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
            {/* Details */}
            <div>
              <div className="grid gap-4">
                {details.map((d) => {
                  const content = (
                    <div className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-brand/40">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-ink-soft">
                        <d.icon className="h-5 w-5 text-brand" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.15em] text-faint">
                          {d.label}
                        </p>
                        <p className="mt-1 text-sm text-bone">{d.value}</p>
                      </div>
                    </div>
                  );
                  return d.href ? (
                    <a
                      key={d.label}
                      href={d.href}
                      target={d.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={d.label}>{content}</div>
                  );
                })}
              </div>

              <div className="mt-4 flex items-start gap-4 rounded-2xl border border-line bg-surface p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-ink-soft">
                  <Clock className="h-5 w-5 text-brand" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-faint">
                    Hours
                  </p>
                  <p className="mt-1 text-sm text-bone">
                    Mon to Sat, 9:30am to 6:30pm IST
                  </p>
                </div>
              </div>

              <p className="mt-6 text-xs leading-relaxed text-faint">
                GSTIN {site.contact.gstin} &nbsp;·&nbsp; PAN {site.contact.pan}
              </p>
            </div>

            {/* Form */}
            <Suspense fallback={<div className="glass rounded-2xl p-8 text-sm text-muted">Loading form…</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </Container>
      </section>
    </>
  );
}
