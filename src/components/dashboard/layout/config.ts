import type { NavItemConfig } from "@/types/nav";
import { paths } from "@/paths";

export const navItems = [
  {
    key: "overview",
    title: "Overview",
    href: paths.dashboard.overview,
    icon: "chart-pie",
  },
  {
    key: "customers",
    title: "Customers",
    href: paths.dashboard.customers,
    icon: "users",
  },
  {
    key: "products",
    title: "Products",
    href: paths.dashboard.products,
    icon: "box",
  },
  {
    key: "orders",
    title: "Orders",
    href: paths.dashboard.orders,
    icon: "shopping-bag",
  },
  {
    key: "integrations",
    title: "Integrations",
    href: paths.dashboard.integrations,
    icon: "plugs-connected",
  },
  {
    key: "account",
    title: "Account",
    href: paths.dashboard.account,
    icon: "user",
  },
  {
    key: "settings",
    title: "Settings",
    href: paths.dashboard.settings,
    icon: "gear-six",
  },
] satisfies NavItemConfig[];
