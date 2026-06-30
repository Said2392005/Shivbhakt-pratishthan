"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, Save, RefreshCw, Upload, Eye, EyeOff, GripVertical } from "lucide-react";

type Banner = { id: number; title: string; subtitle: string; cta: string; ctaLink: string; active: boolean; order: number };

const initial: Banner[] = [
  { id: 1, title: "शिवभक्त प्रतिष्ठाण महाराष्ट्र राज्य", subtitle: "सेवा • संस्कार • समाजकार्य • सामर्थ्य", cta: "आमच्याबद्दल जाणून घ्या", ctaLink: "#about", active: true, order: 1 },
  { id: 2, title: "स्वयंसेवक व्हा", subtitle: "महाराष्ट्र बदलण्यात सहभागी व्हा", cta: "नोंदणी करा", ctaLink: "#volunteer", active: true, order: 2 },
];

export default function BannersAdmin() {
  const [banners, setBanners] = useState<Banner[]>(initial);
  const [saved, setSaved] = useState(false);

  const addBanner = () => {
    setBanners((b) => [...b, { id: Date.now(), title: "", subtitle: "", cta: "Click Here", ctaLink: "#", active: true, order: b.length + 1 }]);
  };

  const update = (id: number, key: keyof Banner, value: string | boolean) => {
    setBanners((b) => b.map((item) => item.id === id ? { ...item, [key]: value } : item));
  };

  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2500); };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white font-cinzel">Homepage Banners</h1>
          <p className="text-gray-400 text-sm mt-1">Manage hero section banners and CTAs</p>
        </div>
        <div className="flex gap-3">
          <button onClick={addBanner} className="flex items-center gap-2 px-4 py-2 btn-saffron rounded-xl text-sm font-medium">
            <Plus size={16} /> Add Banner
          </button>
          <button onClick={handleSave}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${saved ? "bg-green-500/20 border border-green-500/30 text-green-400" : "btn-gold"}`}>
            {saved ? <><RefreshCw size={16} className="animate-spin" />Saved!</> : <><Save size={16} />Save</>}
          </button>
        </div>
      </div>

      {/* Background Image Upload */}
      <div className="glass rounded-2xl p-6 border border-gold-500/10">
        <h2 className="text-white font-bold text-base mb-4">Hero Background Image</h2>
        <div className="border-2 border-dashed border-gold-500/30 rounded-xl p-8 text-center cursor-pointer hover:border-gold-500/60 transition-colors">
          <Upload size={32} className="text-gold-400 mx-auto mb-2" />
          <p className="text-gray-300 text-sm">Upload hero background image</p>
          <p className="text-gray-500 text-xs mt-1">Recommended: 1920x1080px, landscape fort image</p>
        </div>
      </div>

      {/* Banners */}
      <div className="space-y-4">
        {banners.map((banner, i) => (
          <motion.div
            key={banner.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`glass rounded-2xl p-6 border transition-colors ${banner.active ? "border-gold-500/15" : "border-white/5 opacity-60"}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <GripVertical size={18} className="text-gray-500 cursor-grab" />
              <span className="w-6 h-6 rounded-full bg-saffron-500/20 text-saffron-400 text-xs flex items-center justify-center font-bold">
                {banner.order}
              </span>
              <span className="text-white text-sm font-medium flex-1 truncate">{banner.title || "New Banner"}</span>
              <button onClick={() => update(banner.id, "active", !banner.active)} className="p-2 glass rounded-lg text-gray-400 hover:text-gold-400">
                {banner.active ? <Eye size={16} /> : <EyeOff size={16} />}
              </button>
              <button onClick={() => setBanners((b) => b.filter((x) => x.id !== banner.id))} className="p-2 glass rounded-lg text-gray-400 hover:text-red-400">
                <Trash2 size={16} />
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-400 text-xs mb-1 block">Title (Marathi/English)</label>
                <input type="text" value={banner.title}
                  onChange={(e) => update(banner.id, "title", e.target.value)}
                  className="w-full px-4 py-3 input-premium rounded-xl text-sm font-devanagari" />
              </div>
              <div>
                <label className="text-gray-400 text-xs mb-1 block">Subtitle</label>
                <input type="text" value={banner.subtitle}
                  onChange={(e) => update(banner.id, "subtitle", e.target.value)}
                  className="w-full px-4 py-3 input-premium rounded-xl text-sm" />
              </div>
              <div>
                <label className="text-gray-400 text-xs mb-1 block">CTA Button Text</label>
                <input type="text" value={banner.cta}
                  onChange={(e) => update(banner.id, "cta", e.target.value)}
                  className="w-full px-4 py-3 input-premium rounded-xl text-sm font-devanagari" />
              </div>
              <div>
                <label className="text-gray-400 text-xs mb-1 block">CTA Link</label>
                <input type="text" value={banner.ctaLink}
                  onChange={(e) => update(banner.id, "ctaLink", e.target.value)}
                  className="w-full px-4 py-3 input-premium rounded-xl text-sm" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
