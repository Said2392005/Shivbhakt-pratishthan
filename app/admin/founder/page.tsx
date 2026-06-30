"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Save, RefreshCw, Upload, Plus, Trash2, User } from "lucide-react";
import { FOUNDER_TIMELINE } from "@/lib/constants";

type TimelineItem = { year: string; title: string; titleEn: string; desc: string };

export default function FounderAdmin() {
  const [saved, setSaved] = useState(false);
  const [timeline, setTimeline] = useState<TimelineItem[]>(FOUNDER_TIMELINE);
  const [profile, setProfile] = useState({
    nameMr: "अनिकेत भाऊ घुले",
    nameEn: "Aniket Bhau Ghule",
    rolesMr: "संस्थापक - शिवभक्त प्रतिष्ठाण महाराष्ट्र राज्य",
    bioMr: "अनिकेत भाऊ घुले हे एक निःस्वार्थ समाजसेवक आणि युवा नेते आहेत.",
    bioEn: "A selfless social worker and youth leader dedicated to Maharashtra.",
    quote: "आपला समाज हाच आपला परिवार आहे. समाजाची सेवा करणे हेच खरे जगणे आहे.",
  });

  const addTimelineItem = () => {
    setTimeline((t) => [...t, { year: "2024", title: "", titleEn: "", desc: "" }]);
  };

  const updateItem = (i: number, key: keyof TimelineItem, value: string) => {
    setTimeline((t) => t.map((item, idx) => idx === i ? { ...item, [key]: value } : item));
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white font-cinzel">Founder Profile</h1>
          <p className="text-gray-400 text-sm mt-1">Edit founder information and timeline</p>
        </div>
        <button onClick={handleSave}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${saved ? "bg-green-500/20 border border-green-500/30 text-green-400" : "btn-gold"}`}>
          {saved ? <><RefreshCw size={16} className="animate-spin" />Saved!</> : <><Save size={16} />Save Changes</>}
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Profile Info */}
        <div className="glass rounded-2xl p-6 border border-gold-500/10">
          <h2 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
            <User size={20} className="text-saffron-500" /> Profile Details
          </h2>

          {/* Photo Upload */}
          <div className="flex items-center gap-4 mb-5">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-saffron-500/30 to-gold-500/30 flex items-center justify-center border-2 border-gold-500/30">
              <User size={36} className="text-gold-400" />
            </div>
            <div>
              <p className="text-white text-sm font-medium mb-2">Profile Photo</p>
              <button className="flex items-center gap-2 px-3 py-2 glass rounded-lg text-gray-300 text-xs hover:text-gold-400 transition-colors">
                <Upload size={14} /> Upload Photo
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-gray-400 text-xs mb-1.5 block">नाव (Marathi)</label>
                <input type="text" value={profile.nameMr}
                  onChange={(e) => setProfile({ ...profile, nameMr: e.target.value })}
                  className="w-full px-4 py-3 input-premium rounded-xl text-sm font-devanagari" />
              </div>
              <div>
                <label className="text-gray-400 text-xs mb-1.5 block">Name (English)</label>
                <input type="text" value={profile.nameEn}
                  onChange={(e) => setProfile({ ...profile, nameEn: e.target.value })}
                  className="w-full px-4 py-3 input-premium rounded-xl text-sm" />
              </div>
            </div>
            <div>
              <label className="text-gray-400 text-xs mb-1.5 block">Role/Title (Marathi)</label>
              <input type="text" value={profile.rolesMr}
                onChange={(e) => setProfile({ ...profile, rolesMr: e.target.value })}
                className="w-full px-4 py-3 input-premium rounded-xl text-sm font-devanagari" />
            </div>
            <div>
              <label className="text-gray-400 text-xs mb-1.5 block">Biography (Marathi)</label>
              <textarea rows={4} value={profile.bioMr}
                onChange={(e) => setProfile({ ...profile, bioMr: e.target.value })}
                className="w-full px-4 py-3 input-premium rounded-xl text-sm font-devanagari resize-none" />
            </div>
            <div>
              <label className="text-gray-400 text-xs mb-1.5 block">Biography (English)</label>
              <textarea rows={3} value={profile.bioEn}
                onChange={(e) => setProfile({ ...profile, bioEn: e.target.value })}
                className="w-full px-4 py-3 input-premium rounded-xl text-sm resize-none" />
            </div>
            <div>
              <label className="text-gray-400 text-xs mb-1.5 block">Founder Quote (Marathi)</label>
              <textarea rows={2} value={profile.quote}
                onChange={(e) => setProfile({ ...profile, quote: e.target.value })}
                className="w-full px-4 py-3 input-premium rounded-xl text-sm font-devanagari resize-none" />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="glass rounded-2xl p-6 border border-gold-500/10">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-white font-bold text-lg">Life Timeline</h2>
            <button onClick={addTimelineItem} className="flex items-center gap-2 px-3 py-2 btn-saffron rounded-lg text-xs">
              <Plus size={14} /> Add Year
            </button>
          </div>
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <input type="text" value={item.year}
                    onChange={(e) => updateItem(i, "year", e.target.value)}
                    className="w-20 px-3 py-1.5 input-premium rounded-lg text-sm font-cinzel font-bold text-saffron-400" />
                  <button onClick={() => setTimeline((t) => t.filter((_, idx) => idx !== i))}
                    className="p-1.5 text-gray-500 hover:text-red-400 transition-colors">
                    <Trash2 size={14} />
                  </button>
                </div>
                <input type="text" placeholder="Title (Marathi)" value={item.title}
                  onChange={(e) => updateItem(i, "title", e.target.value)}
                  className="w-full px-3 py-2 input-premium rounded-lg text-sm font-devanagari" />
                <input type="text" placeholder="Title (English)" value={item.titleEn}
                  onChange={(e) => updateItem(i, "titleEn", e.target.value)}
                  className="w-full px-3 py-2 input-premium rounded-lg text-sm" />
                <textarea rows={2} placeholder="Description..." value={item.desc}
                  onChange={(e) => updateItem(i, "desc", e.target.value)}
                  className="w-full px-3 py-2 input-premium rounded-lg text-sm resize-none font-devanagari" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
