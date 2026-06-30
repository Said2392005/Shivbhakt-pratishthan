"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Save, RefreshCw, BarChart2, TrendingUp } from "lucide-react";

const DEFAULT_STATS = [
  { key: "events", label: "Events", labelMr: "कार्यक्रम", value: 500, icon: "📅" },
  { key: "volunteers", label: "Volunteers", labelMr: "स्वयंसेवक", value: 10000, icon: "👥" },
  { key: "lives", label: "Lives Impacted", labelMr: "जीवन सुधारले", value: 50000, icon: "❤️" },
  { key: "trees", label: "Trees Planted", labelMr: "झाडे लावली", value: 100000, icon: "🌳" },
  { key: "blood", label: "Blood Donation Camps", labelMr: "रक्तदान शिबिरे", value: 100, icon: "🩸" },
  { key: "villages", label: "Villages Reached", labelMr: "गावे व्यापले", value: 250, icon: "🏘️" },
];

export default function StatisticsAdmin() {
  const [stats, setStats] = useState(DEFAULT_STATS);
  const [saved, setSaved] = useState(false);

  const updateStat = (key: string, value: number) => {
    setStats((s) => s.map((item) => item.key === key ? { ...item, value } : item));
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white font-cinzel">Statistics Management</h1>
          <p className="text-gray-400 text-sm mt-1">Update the impact numbers displayed on the website</p>
        </div>
        <button
          onClick={handleSave}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
            saved ? "bg-green-500/20 border border-green-500/30 text-green-400" : "btn-gold"
          }`}
        >
          {saved ? <><RefreshCw size={16} className="animate-spin" /> Saved!</> : <><Save size={16} /> Save Changes</>}
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-6 border border-gold-500/10"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-3xl mb-1">{stat.icon}</p>
                <p className="text-white font-bold">{stat.label}</p>
                <p className="font-devanagari text-gold-400 text-sm">{stat.labelMr}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-xs mb-1">Current Value</p>
                <p className="text-2xl font-bold text-white font-cinzel">{stat.value.toLocaleString()}</p>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-gray-400 text-xs">Update Value</label>
              <input
                type="number"
                value={stat.value}
                onChange={(e) => updateStat(stat.key, parseInt(e.target.value) || 0)}
                className="w-full px-4 py-3 input-premium rounded-xl text-sm font-mono"
              />
              <div className="flex gap-2">
                {[100, 500, 1000, 5000].map((inc) => (
                  <button
                    key={inc}
                    onClick={() => updateStat(stat.key, stat.value + inc)}
                    className="flex-1 py-1.5 text-xs glass rounded-lg text-gray-400 hover:text-gold-400 transition-colors border border-white/10 hover:border-gold-500/20"
                  >
                    +{inc}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Preview */}
      <div className="glass rounded-2xl p-6 border border-gold-500/10">
        <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <BarChart2 size={20} className="text-saffron-500" />
          Live Preview
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {stats.map((stat) => (
            <div key={stat.key} className="text-center p-3 rounded-xl bg-white/5">
              <p className="text-2xl mb-1">{stat.icon}</p>
              <p className="text-gold-400 text-lg font-bold font-cinzel">
                {stat.value >= 100000 ? `${(stat.value / 100000).toFixed(0)}L+` :
                 stat.value >= 1000 ? `${(stat.value / 1000).toFixed(0)}K+` : `${stat.value}+`}
              </p>
              <p className="text-gray-400 text-xs font-devanagari">{stat.labelMr}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
