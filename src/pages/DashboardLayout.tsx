import React from "react";
import {
  Home,
  Info,
  LogOut,
  Package,
  Package2,
  PanelLeft,
  ShoppingCart,
  Users2,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../components/Sheet";
import { NavItem } from "../components/NavItem";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import { Button } from "../components/Button";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-muted/40 w-100">
      <DesktopNav />
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-30 border-b bg-background px-4 py-2 sm:px-6">
          <MobileNav />
        </header>
        <main className="flex-1 overflow-auto p-4 sm:p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function DesktopNav() {
  const { t } = useTranslation();
  const navItems = [
    { href: "/", label: "dashboard", icon: Home },
    { href: "/info", label: "businessInfo", icon: Info },
    { href: "/customers", label: "customers", icon: Users2 },
    { href: "/products", label: "products", icon: Package },
    { href: "/orders", label: "orders", icon: ShoppingCart },
  ];

  return (
    <aside className="hidden w-64 flex-shrink-0 border-r bg-background sm:flex sm:flex-col">
      <div className="flex h-14 items-center justify-center border-b">
        <h3>{t("logo")}</h3>
      </div>
      <nav className="flex flex-1 flex-col gap-4 p-4">
        {navItems.map((item) => (
          <NavItem key={item.href} href={item.href} label={t(item.label)}>
            <item.icon className="h-5 w-5" />
          </NavItem>
        ))}
      </nav>
      <div className="border-t p-4">
        <Link
          to="/api/auth/logout"
          className="flex items-center gap-3 rounded-lg text-muted-foreground transition-colors hover:text-foreground"
        >
          <LogOut className="h-5 w-5" />
          <span>{t("logout")}</span>
        </Link>
      </div>
    </aside>
  );
}

function MobileNav() {
  const { t } = useTranslation();
  const navItems = [
    { href: "/", label: "dashboard", icon: Home },
    { href: "/info", label: "businessInfo", icon: Info },
    { href: "/customers", label: "customers", icon: Users2 },
    { href: "/products", label: "products", icon: Package },
    { href: "/orders", label: "orders", icon: ShoppingCart },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">{t("toggleMenu")}</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-64 sm:max-w-none">
        <nav className="flex flex-col gap-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Package2 className="h-6 w-6" />
            <span>{t("femtoAI")}</span>
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <item.icon className="h-5 w-5" />
              {t(item.label)}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
