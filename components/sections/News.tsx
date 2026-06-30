"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Clock, ArrowRight, Newspaper, Megaphone } from "lucide-react";
import { NEWS_EVENTS } from "@/lib/constants";

const TABS = ["सर्व", "upcoming", "completed", "announcement"] as const;
const TAB_LABELS: Record<string, string> = {
  "सर्व": "सर्व",
  upcoming: "आगामी",
  completed: "पूर्ण झालेले",
  announcement: "घोषणा",
};

const STATUS_STYLES: Record<string, string> = {
  upcoming: "bg-saffron-500/20 text-saffron-400 border-saffron-500/30",
  completed: "bg-green-500/20 text-green-400 border-green-500/30",
  announcement: "bg-gold-500/20 text-gold-400 border-gold-500/30",
};

const STATUS_LABELS: Record<string, string> = {
  upcoming: "आगामी",
  completed: "पूर्ण",
  announcement: "घोषणा",
};

export default function News() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [activeTab, setActiveTab] = useState("सर्व");

  const filtered = activeTab === "सर्व"
    ? NEWS_EVENTS
    : NEWS_EVENTS.filter((e) => e.type === activeTab);

  return (
    <section id="news" ref={ref} className="relative py-24 bg-[#0d0d0d] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,107,0,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 glass-gold rounded-full text-gold-400 text-sm font-devanagari mb-4">
            बातम्या व कार्यक्रम
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-2">
            News & Events
          </h2>
          <p className="font-devanagari text-xl text-gold-400">ताज्या घडामोडी</p>
          <div className="section-divider" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-xl text-sm font-devanagari transition-all duration-300 ${
                activeTab === tab
                  ? "btn-gold shadow-gold"
                  : "glass text-gray-400 hover:text-gold-400 border border-transparent hover:border-gold-500/30"
              }`}
            >
              {TAB_LABELS[tab]}
            </button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((event, i) => (
            <motion.div
              key={`${event.title}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              className="group glass rounded-2xl overflow-hidden border border-transparent hover:border-gold-500/20 transition-all duration-300 activity-card"
            >
              {/* Top color bar */}
              <div className={`h-1 w-full ${
                event.type === "upcoming" ? "bg-gradient-to-r from-saffron-500 to-orange-400" :
                event.type === "completed" ? "bg-gradient-to-r from-green-500 to-emerald-400" :
                "bg-gradient-to-r from-gold-500 to-yellow-400"
              }`} />

              <div className="p-6">
                {/* Status Badge + Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-devanagari font-medium border ${STATUS_STYLES[event.type]}`}>
                    {STATUS_LABELS[event.type]}
                  </span>
                  <span className="px-2.5 py-1 glass rounded-lg text-xs text-gray-400">{event.category}</span>
                </div>

                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-saffron-500/15 flex items-center justify-center mb-4">
                  {event.type === "announcement" ? (
                    <Megaphone size={20} className="text-saffron-500" />
                  ) : (
                    <Newspaper size={20} className="text-saffron-500" />
                  )}
                </div>

                <h3 className="font-devanagari text-white font-bold text-base mb-2 group-hover:text-gold-400 transition-colors leading-tight">
                  {event.title}
                </h3>
                <p className="font-devanagari text-gray-400 text-sm leading-relaxed mb-4">{event.desc}</p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar size={12} className="text-saffron-500" />
                    <span>{new Date(event.date).toLocaleDateString("mr-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <MapPin size={12} className="text-saffron-500" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <button className="mt-4 flex items-center gap-1 text-xs text-saffron-400 hover:text-gold-400 transition-colors font-medium group/btn">
                  <span>अधिक वाचा</span>
                  <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
