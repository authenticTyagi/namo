import {
  TrendingUp,
  Route,
  Landmark,
  Zap,
  Rocket,
  HandCoins,
  Wifi,
  Smartphone,
  Moon,
  Satellite,
  Handshake,
  LifeBuoy,
  Syringe,
  ShieldCheck,
  Factory,
  Gauge,
  Coins,
  HeartPulse,
  Sparkles,
  Home,
  Droplets,
  FileText,
  Wallet,
  Umbrella,
  Warehouse,
  Sun,
  Globe2,
  Trees,
  Boxes,
  Ship,
  type LucideIcon,
} from "lucide-react";

/**
 * One representative icon per entry, purely presentational (not stored in
 * the DB — this is UI metadata, not sourced content). Keyed by slug rather
 * than category/tag since a single "infra" icon wouldn't distinguish, say,
 * highways from railways. Falls back to a generic icon for any future
 * entry not yet mapped here.
 */
const ENTRY_ICONS: Record<string, LucideIcon> = {
  "upi-worlds-largest-real-time-payments": Smartphone,
  "india-fourth-largest-economy": TrendingUp,
  "national-highways-construction-pace": Route,
  "jan-dhan-yojana-financial-inclusion": Landmark,
  "railway-electrification-near-complete": Zap,
  "startup-india-ecosystem-growth": Rocket,
  "direct-benefit-transfer-savings": HandCoins,
  "digital-india-billion-broadband-users": Wifi,
  "chandrayaan-3-moon-landing": Moon,
  "space-sector-private-startups-growth": Rocket,
  "isro-launch-record-human-spaceflight-progress": Satellite,
  "g20-presidency-2023-consensus": Handshake,
  "evacuation-operations-ganga-kaveri": LifeBuoy,
  "vaccine-maitri-diplomacy": Syringe,
  "defense-exports-growth": ShieldCheck,
  "indigenous-defense-production-growth": Factory,
  "inflation-targeting-framework-success": Gauge,
  "forex-gold-reserves-record-rupee-context": Coins,
  "ayushman-bharat-health-insurance": HeartPulse,
  "swachh-bharat-sanitation-coverage": Sparkles,
  "pm-awas-yojana-housing": Home,
  "jal-jeevan-mission-tap-water": Droplets,
  "pm-kisan-samman-nidhi": Wallet,
  "pmfby-crop-insurance": Umbrella,
  "msp-procurement-growth": Warehouse,
  "renewable-energy-capacity-growth": Sun,
  "international-solar-alliance": Globe2,
  "forest-cover-isfr": Trees,
  "pli-scheme-manufacturing-growth": Boxes,
  "ins-vikrant-indigenous-aircraft-carrier": Ship,
};

export function getEntryIcon(slug: string): LucideIcon {
  return ENTRY_ICONS[slug] ?? FileText;
}
