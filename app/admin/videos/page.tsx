"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, Video, Play, Eye, EyeOff, X, Save } from "lucide-react";

const initial = [
  { id: 1, title: "वार्षिक सोहळा 2023", url: "https://youtube.com/watch?v=example1", category: "Events", active: true },
  { id: 2, title: "वृक्षारोपण मोहीम", url: "https://youtube.com/watch?v=example2", category: "Environment", active: true },
];

export default function VideosAdmin() {
  const [videos, setVideos] = useState(initial);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ title: "", url: "", category: "Events" });

  const addVideo = () => {
    setVideos((v) => [...v, { ...form, id: Date.now(), active: true }]);
    setForm({ title: "", url: "", category: "Events" });
    setShowModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white font-cinzel">Videos</h1>
          <p className="text-gray-400 text-sm mt-1">{videos.length} videos</p>
        </div>
        <button onClick={() => setShowModal(true)} className="flex items-center gap-2 px-4 py-2 btn-gold rounded-xl text-sm">
          <Plus size={16} /> Add Video
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {videos.map((v) => (
          <motion.div key={v.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="glass rounded-2xl overflow-hidden border border-gold-500/10">
            <div className="aspect-video bg-white/5 flex items-center justify-center relative">
              <Play size={32} className="text-saffron-500 opacity-60" />
              <Video size={48} className="text-gold-500/20 absolute" />
              <span className="absolute top-2 right-2 px-2 py-0.5 text-xs rounded-md bg-black/50 text-gold-400">{v.category}</span>
            </div>
            <div className="p-4">
              <p className="font-devanagari text-white font-semibold text-sm mb-1 truncate">{v.title}</p>
              <p className="text-gray-500 text-xs truncate">{v.url}</p>
              <div className="flex gap-2 mt-3">
                <button onClick={() => setVideos((s) => s.map((x) => x.id === v.id ? { ...x, active: !x.active } : x))}
                  className="p-2 glass rounded-lg text-gray-400 hover:text-gold-400 transition-colors">
                  {v.active ? <Eye size={14} /> : <EyeOff size={14} />}
                </button>
                <button onClick={() => setVideos((s) => s.filter((x) => x.id !== v.id))}
                  className="p-2 glass rounded-lg text-gray-400 hover:text-red-400 transition-colors">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md glass rounded-2xl p-6 border border-gold-500/20">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-white font-bold text-lg">Add Video</h3>
              <button onClick={() => setShowModal(false)}><X size={20} className="text-gray-400" /></button>
            </div>
            <div className="space-y-4">
              <input type="text" placeholder="Video Title (Marathi)" value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full px-4 py-3 input-premium rounded-xl text-sm font-devanagari" />
              <input type="url" placeholder="YouTube URL" value={form.url}
                onChange={(e) => setForm({ ...form, url: e.target.value })}
                className="w-full px-4 py-3 input-premium rounded-xl text-sm" />
              <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full px-4 py-3 input-premium rounded-xl text-sm bg-[#1a1a1a]">
                {["Events","Environment","Blood Donation","Youth","Social Work","Cultural"].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="flex gap-3 mt-5">
              <button onClick={() => setShowModal(false)} className="flex-1 py-3 glass rounded-xl text-gray-300 text-sm">Cancel</button>
              <button onClick={addVideo} className="flex-1 py-3 btn-gold rounded-xl text-sm font-medium flex items-center justify-center gap-2">
                <Save size={16} /> Add
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
