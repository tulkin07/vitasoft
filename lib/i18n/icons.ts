import {
  Bot,
  Code2,
  Database,
  Globe,
  Layers,
  LineChart,
  MonitorSmartphone,
  Palette,
  Server,
  Settings,
  ShoppingCart,
  Smartphone,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const homeServiceIcons: Record<string, LucideIcon> = {
  "web-development": Globe,
  "crm-erp": Database,
  "e-commerce": ShoppingCart,
  "ui-ux-design": Palette,
  "mobile-apps": Smartphone,
  "telegram-mini-apps": Bot,
  automation: Zap,
  support: Wrench,
};

export const allServiceIcons: Record<string, LucideIcon> = {
  "web-development": Globe,
  "crm-erp": Database,
  "e-commerce": ShoppingCart,
  "mobile-apps": Smartphone,
  "ui-ux-design": Palette,
  "telegram-mini-apps": Bot,
  automation: Zap,
  "api-backend": Server,
  seo: LineChart,
  support: Wrench,
};

export const trustIcons: LucideIcon[] = [
  MonitorSmartphone,
  Code2,
  Zap,
  Layers,
  LineChart,
  Wrench,
];

export const techIcons: Record<string, LucideIcon> = {
  React: Code2,
  "Next.js": Layers,
  TypeScript: Code2,
  "Tailwind CSS": Code2,
  "Node.js": Server,
  Express: Server,
  NestJS: Server,
  PostgreSQL: Database,
  MongoDB: Database,
  Redis: Database,
  Docker: Settings,
  Git: Code2,
  "CI/CD": Zap,
};

export type { ProjectCategory } from "@/data/projects";
export { projectMeta } from "@/data/portfolio-projects";
