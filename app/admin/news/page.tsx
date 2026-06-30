"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Edit3, Trash2, Search, Eye, EyeOff, X, Save } from "lucide-react";
import { NEWS_EVENTS } from "@/lib/constants";

type NewsItem = typeof NEWS_EVENTS[0] & { id: number; published: boolean };

const initialNews: NewsItem[] = NEWS_EVENTS.map((n, i) => ({ ...n, id: i + 1, published: true }));

export default function NewsAdmin() {
  const [news, setNews] = useState<NewsItem[]>(initialNews);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<NewsItem | null>(null);
  const [form, setForm] = useState({ title: "", desc: "", date: "", location: "", type: "upcoming", category: "" });

  const filtered = news.filter(
    (n) => n.title.toLowerCase().includes(search.toLowerCase()) || n.category.toLowerCase().includes(search.toLowerCase())
  );

  const openNew = () => {
    setEditing(null);
    setForm({ title: "", desc: "", date: "", location: "", type: "upcoming", category: "" });
    setShowModal(true);
  };

  const openEdit = (item: NewsItem) => {
    setEditing(item);
    setForm({ title: item.title, desc: item.desc, date: item.date, location: item.location, type: item.type, category: item.category });
    setShowModal(true);
  };

  const handleSave = () => {
    if (editing) {
      setNews((n) => n.map((item) => item.id === editing.id ? { ...item, ...form } : item));
    } else {
      setNews((n) => [{ ...form, id: Date.now(), published: true }, ...n] as NewsItem[]);
    }
    setShowModal(false);
  };

  const togglePublish = (id: number) => {
    setNews((n) => n.map((item) => item.id === id ? { ...item, published: !item.published } : item));
  };

  const deleteItem = (id: number) => {
    setNews((n) => n.filter((item) => item.id !== id));
  };

  const STATUS_COLOR: Record<string, string> = {
    upcoming: "text-saffron-400 bg-saffron-500/20",
    completed: "text-green-400 bg-green-500/20",
    announcement: "text-gold-400 bg-gold-500/20",
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white font-cinzel">News & Events</h1>
          <p className="text-gray-400 text-sm mt-1">{news.length} total articles</p>
        </div>
        <button onClick={openNew} className="flex items-center gap-2 px-4 py-2 btn-gold rounded-xl text-sm font-medium">
          <Plus size={16} />
          Add News
        </button>
      </div>

      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type="text" placeholder="Search news..."
          value={search} onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 input-premium rounded-xl text-sm"
        />
      </div>

      <div className="space-y-3">
        {filtered.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass rounded-xl p-4 border border-transparent hover:border-gold-500/20 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${STATUS_COLOR[item.type]}`}>
                    {item.type}
                  </span>
                  <span className="text-gray-500 text-xs">{item.category}</span>
                  {!item.published && <span className="px-2 py-0.5 rounded-md text-xs bg-red-500/20 text-red-400">Draft</span>}
                </div>
                <h3 className="font-devanagari text-white font-semibold mb-1 truncate">{item.title}</h3>
                <p className="text-gray-400 text-sm truncate">{item.desc}</p>
                <p className="text-gray-500 text-xs mt-1">{item.location} • {item.date}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button onClick={() => togglePublish(item.id)} className="p-2 rounded-lg glass text-gray-400 hover:text-gold-400 transition-colors">
                  {item.published ? <Eye size={16} /> : <EyeOff size={16} />}
                </button>
                <button onClick={() => openEdit(item)} className="p-2 rounded-lg glass text-gray-400 hover:text-gold-400 transition-colors">
                  <Edit3 size={16} />
                </button>
                <button onClick={() => deleteItem(item.id)} className="p-2 rounded-lg glass text-gray-400 hover:text-red-400 transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-lg glass rounded-2xl p-6 border border-gold-500/20"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-white font-bold text-lg">{editing ? "Edit" : "Add"} News/Event</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-white"><X size={20} /></button>
            </div>

            <div className="space-y-4">
              <input type="text" placeholder="Title (Marathi/English) *" value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full px-4 py-3 input-premium rounded-xl text-sm font-devanagari" />

              <textarea placeholder="Description..." rows={3} value={form.desc}
                onChange={(e) => setForm({ ...form, desc: e.target.value })}
                className="w-full px-4 py-3 input-premium rounded-xl text-sm font-devanagari resize-none" />

              <div className="grid grid-cols-2 gap-3">
                <input type="date" value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full px-4 py-3 input-premium rounded-xl text-sm" />
                <input type="text" placeholder="Location" value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  className="w-full px-4 py-3 input-premium rounded-xl text-sm" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full px-4 py-3 input-premium rounded-xl text-sm bg-[#1a1a1a]">
                  <option value="upcoming">Upcoming</option>
                  <option value="completed">Completed</option>
                  <option value="announcement">Announcement</option>
                </select>
                <input type="text" placeholder="Category" value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full px-4 py-3 input-premium rounded-xl text-sm" />
              </div>
            </div>

            <div className="flex gap-3 mt-5">
              <button onClick={() => setShowModal(false)} className="flex-1 py-3 glass rounded-xl text-gray-300 text-sm">Cancel</button>
              <button onClick={handleSave} className="flex-1 py-3 btn-gold rounded-xl text-sm font-medium flex items-center justify-center gap-2">
                <Save size={16} /> Save
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
