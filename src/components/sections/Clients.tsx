import { projects } from "@/lib/content";

export function Clients() {
  // Build a marquee of "Property · City" from the projects list.
  const items = projects.map((p) => `${p.name} · ${p.location}`);
  const loop = [...items, ...items];

  return (
    <section className="relative border-y border-line bg-ink-soft py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-soft to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-soft to-transparent" />
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
          {loop.map((item, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap">
              <span className="font-display text-sm font-medium tracking-wide text-bone/60">
                {item}
              </span>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brass/50" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
