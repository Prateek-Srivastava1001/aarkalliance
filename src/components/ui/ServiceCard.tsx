import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Icon } from "./Icon";
import type { Service } from "@/types/content";

export function ServiceCard({
  service,
  showHighlights = true,
}: {
  service: Service;
  showHighlights?: boolean;
}) {
  return (
    <article
      id={service.id}
      className="group relative flex scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-brass/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
        <span className="glass absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-xl">
          <Icon name={service.icon} className="h-5 w-5 text-brass" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-bone">{service.title}</h3>
        <p className="mt-1 text-sm text-brass/90">{service.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {service.description}
        </p>

        {showHighlights && (
          <ul className="mt-5 grid gap-2">
            {service.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-bone/80">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <Link
          href={`/contact?service=${service.id}`}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-bone transition-colors group-hover:text-brass"
        >
          Enquire
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
