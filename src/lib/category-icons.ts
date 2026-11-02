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
  Landmark,
  Trophy,
  Earth,
  CloudSun,
  Cpu,
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
  "governance-judiciary": Landmark,
  "sports-youth-affairs": Trophy,
  "world-global-affairs": Earth,
  "climate-weather": CloudSun,
  "technology-ai": Cpu,
};

export function getCategoryIcon(slug: string): LucideIcon {
  return CATEGORY_ICONS[slug] ?? TrendingUp;
}
