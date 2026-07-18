import {
  Sofa,
  Droplets,
  PaintRoller,
  Sparkles,
  LayoutGrid,
  Layers,
  Blinds,
  Wrench,
  type LucideProps,
} from "lucide-react";

/**
 * Maps the `icon` string from services.json to a Lucide icon component.
 * To use a new icon, pick a name from https://lucide.dev/icons, import it
 * above, and add it to this map.
 */
const ICONS: Record<string, React.ComponentType<LucideProps>> = {
  Sofa,
  Droplets,
  PaintRoller,
  Sparkles,
  LayoutGrid,
  Layers,
  Blinds,
};

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = ICONS[name] ?? Wrench;
  return <Cmp {...props} />;
}
