"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Image, Zap, Calendar, User, BarChart2,
  Settings, Menu, X, LogOut, ExternalLink,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Dashboard",      icon: LayoutDashboard, href: "/admin" },
  { label: "Gallery",        icon: Image,           href: "/admin/gallery" },
  { label: "YLTP",           icon: Zap,             href: "/admin/yltp" },
  { label: "Events",         icon: Calendar,        href: "/admin/events" },
  { label: "Founder",        icon: User,            href: "/admin/founder" },
  { label: "Statistics",     icon: BarChart2,       href: "/admin/statistics" },
  { label: "Settings",       icon: Settings,        href: "/admin/settings" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex">

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 bottom-0 z-50 flex flex-col bg-white border-r border-stone-200 transition-all duration-300 ${
        sidebarOpen ? "w-56" : "w-14"
      }`}>

        {/* Logo */}
        <div className="flex items-center gap-2.5 px-4 py-4 border-b border-stone-100 h-[60px]">
          <div className="w-7 h-7 rounded-full bg-saffron-500 flex items-center justify-center flex-shrink-0">
            <span className="font-devanagari text-white font-bold text-xs leading-none">श</span>
          </div>
          {sidebarOpen && (
            <div className="flex-1 min-w-0">
              <p className="font-devanagari font-semibold text-xs text-stone-900 leading-tight truncate">शिवभक्त प्रतिष्ठाण</p>
              <p className="text-stone-400 text-[10px]">Admin Panel</p>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-stone-400 hover:text-stone-700 transition-colors flex-shrink-0 ml-auto"
          >
            {sidebarOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
          {NAV_ITEMS.map(({ label, icon: Icon, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                title={!sidebarOpen ? label : undefined}
                className={`flex items-center gap-3 px-3 py-2.5 rounded transition-all duration-150 text-sm ${
                  active
                    ? "bg-saffron-50 text-saffron-600 font-semibold border border-saffron-100"
                    : "text-stone-500 hover:text-stone-900 hover:bg-stone-50"
                }`}
              >
                <Icon size={16} className={`flex-shrink-0 ${active ? "text-saffron-500" : ""}`} />
                {sidebarOpen && <span className="truncate">{label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Footer links */}
        <div className="px-2 py-3 border-t border-stone-100 space-y-0.5">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded text-sm text-stone-400 hover:text-stone-700 hover:bg-stone-50 transition-colors"
          >
            <ExternalLink size={15} className="flex-shrink-0" />
            {sidebarOpen && <span>View Website</span>}
          </Link>
          <button
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded text-sm text-stone-400 hover:text-stone-700 hover:bg-stone-50 transition-colors"
          >
            <LogOut size={15} className="flex-shrink-0" />
            {sidebarOpen && <span>Log Out</span>}
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${sidebarOpen ? "ml-56" : "ml-14"}`}>

        {/* Top bar */}
        <header className="h-[60px] bg-white border-b border-stone-200 flex items-center justify-between px-6 sticky top-0 z-40">
          <p className="font-semibold text-stone-900 text-sm">
            {NAV_ITEMS.find((n) => n.href === pathname)?.label ?? "Admin"}
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="text-xs text-stone-400 hover:text-saffron-500 flex items-center gap-1 transition-colors"
            >
              <ExternalLink size={12} />
              View site
            </Link>
            <div className="w-8 h-8 rounded-full bg-saffron-500 flex items-center justify-center text-white text-xs font-bold">
              A
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
