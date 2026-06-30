"use client";

import Link from "next/link";
import { Image, Calendar, User, BarChart2, Zap, Settings, ExternalLink, ArrowRight } from "lucide-react";

const QUICK_LINKS = [
  { label: "Gallery",    desc: "Upload photos & manage albums",      icon: Image,     href: "/admin/gallery",    color: "bg-blue-50 border-blue-100 text-blue-600" },
  { label: "YLTP",       desc: "Edit YLTP content & Sankalp",        icon: Zap,       href: "/admin/yltp",       color: "bg-saffron-50 border-saffron-100 text-saffron-600" },
  { label: "Events",     desc: "Add & manage upcoming events",        icon: Calendar,  href: "/admin/events",     color: "bg-green-50 border-green-100 text-green-600" },
  { label: "Founder",    desc: "Edit founder profile & details",      icon: User,      href: "/admin/founder",    color: "bg-purple-50 border-purple-100 text-purple-600" },
  { label: "Statistics", desc: "Update impact counters",              icon: BarChart2, href: "/admin/statistics", color: "bg-stone-50 border-stone-100 text-stone-600" },
  { label: "Settings",   desc: "Contact details & general settings",  icon: Settings,  href: "/admin/settings",   color: "bg-stone-50 border-stone-100 text-stone-600" },
];

const STATS = [
  { label: "Gallery Photos", value: "16", sub: "Across 8 categories" },
  { label: "Events Listed",  value: "6",  sub: "Upcoming events" },
  { label: "YLTP Pillars",   value: "10", sub: "Program pillars" },
  { label: "Districts",      value: "36", sub: "Active across Maharashtra" },
];

export default function AdminDashboard() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-xl font-bold text-stone-900">Dashboard</h1>
          <p className="text-stone-400 text-sm mt-0.5">Welcome back. Manage your website content below.</p>
        </div>
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-2 text-sm text-stone-500 hover:text-saffron-500 transition-colors border border-stone-200 rounded-sm px-3 py-1.5 hover:border-saffron-200 hover:bg-saffron-50"
        >
          <ExternalLink size={13} />
          View Website
        </Link>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {STATS.map((s) => (
          <div key={s.label} className="bg-white border border-stone-200 rounded-md p-5">
            <p className="text-2xl font-extrabold text-saffron-500 leading-none">{s.value}</p>
            <p className="font-semibold text-stone-900 text-sm mt-2">{s.label}</p>
            <p className="text-stone-400 text-xs mt-0.5">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Quick links */}
      <div className="mb-2">
        <h2 className="font-semibold text-stone-900 text-sm mb-4">Quick Access</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {QUICK_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="bg-white border border-stone-200 rounded-md p-5 hover:border-saffron-200 hover:shadow-sm transition-all duration-200 group"
            >
              <div className={`w-9 h-9 rounded-sm border flex items-center justify-center mb-4 ${item.color}`}>
                <item.icon size={16} />
              </div>
              <p className="font-semibold text-stone-900 text-sm mb-0.5 group-hover:text-saffron-600 transition-colors">
                {item.label}
              </p>
              <p className="text-stone-400 text-xs">{item.desc}</p>
              <div className="flex items-center gap-1 text-saffron-500 text-xs font-semibold mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                Manage <ArrowRight size={11} />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Info banner */}
      <div className="mt-8 bg-stone-50 border border-stone-200 rounded-md p-5 flex gap-4">
        <div className="w-1 bg-saffron-500 rounded-full flex-shrink-0" />
        <div>
          <p className="font-semibold text-stone-900 text-sm mb-1">Shivbhakt Pratishthan — Admin Panel</p>
          <p className="text-stone-500 text-xs leading-relaxed">
            All changes made here will reflect on the live website after the next build.
            For real-time updates, connect Supabase to enable dynamic content management.
            Photographs of Chhatrapati Shivaji Maharaj, Gurudev Sri Sri Ravi Shankar,
            and Aniket Bhau Ghule should be uploaded via the Gallery and Founder sections.
          </p>
        </div>
      </div>
    </div>
  );
}
