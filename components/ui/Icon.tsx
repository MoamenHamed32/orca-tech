import {
  BarChart3,
  Building2,
  Cloud,
  GraduationCap,
  HeartPulse,
  Hotel,
  Layers,
  Radio,
  Search,
  Server,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Store,
  Truck,
  Wallet,
  type LucideIcon,
} from "lucide-react";

const icons = {
  ShoppingBag,
  Store,
  Layers,
  Sparkles,
  Cloud,
  Server,
  BarChart3,
  ShoppingCart,
  Wallet,
  HeartPulse,
  Truck,
  Radio,
  GraduationCap,
  Building2,
  Hotel,
  Search,
} satisfies Record<string, LucideIcon>;

export function NamedIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name as keyof typeof icons] ?? Sparkles;
  return <Icon className={className} aria-hidden />;
}
