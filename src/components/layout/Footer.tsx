import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";
import { site, services } from "@/lib/content";

export function Footer() {
  const year = 2026;

  return (
    <footer className="relative mt-24 border-t border-line bg-ink-soft">
      <div className="bg-grid mask-fade-y absolute inset-0 opacity-40" aria-hidden />
      <Container className="relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
              {site.description}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-faint">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.id}`}
                    className="text-muted transition-colors hover:text-brass"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-faint">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/projects" className="text-muted transition-colors hover:text-brass">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-muted transition-colors hover:text-brass">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#process" className="text-muted transition-colors hover:text-brass">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted transition-colors hover:text-brass">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-faint">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-center gap-3 text-muted transition-colors hover:text-brass"
                >
                  <Mail className="h-4 w-4 text-brass" />
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-muted transition-colors hover:text-brass"
                >
                  <Phone className="h-4 w-4 text-brass" />
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                {site.contact.serviceAreas}
              </li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-bone transition-colors hover:text-brass"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-faint sm:flex-row">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>Interiors · Waterproofing · Finishing · Flooring</p>
        </div>
      </Container>
    </footer>
  );
}
