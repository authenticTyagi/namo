import {
  TrendingUp,
  Rocket,
  Globe,
  Shield,
  Coins,
  HeartHandshake,
  Wheat,
  Leaf,
  BookOpen,
  Stethoscope,
  Users,
  type LucideIcon,
} from "lucide-react";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "economy-infra-digital": TrendingUp,
  "space-science": Rocket,
  "foreign-policy-diplomacy": Globe,
  "defense-security": Shield,
  "currency-prices-inflation": Coins,
  "welfare-social-schemes": HeartHandshake,
  "agriculture-farmer-welfare": Wheat,
  "environment-renewable-energy": Leaf,
  "education-skill-development": BookOpen,
  "health-infrastructure": Stethoscope,
  "women-child-development": Users,
};

export function getCategoryIcon(slug: string): LucideIcon {
  return CATEGORY_ICONS[slug] ?? TrendingUp;
}
