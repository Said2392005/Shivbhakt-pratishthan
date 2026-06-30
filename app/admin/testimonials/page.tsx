"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Edit3, Trash2, Star, X, Save, MessageSquare } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

type Testimonial = typeof TESTIMONIALS[0] & { id: number; featured: boolean };

const initial: Testimonial[] = TESTIMONIALS.map((t, i) => ({ ...t, id: i + 1, featured: i < 2 }));

export default function TestimonialsAdmin() {
  const [items, setItems] = useState<Testimonial[]>(initial);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Testimonial | null>(null);
  const [form, setForm] = useState({ name: "", nameEn: "", role: "", text: "", textEn: "", avatar: "", featured: false });

  const openNew = () => {
    setEditing(null);
    setForm({ name: "", nameEn: "", role: "", text: "", textEn: "", avatar: "", featured: false });
    setShowModal(true);
  };

  const openEdit = (item: Testimonial) => {
    setEditing(item);
    setForm({ name: item.name, nameEn: item.nameEn, role: item.role, text: item.text, textEn: item.textEn, avatar: item.avatar, featured: item.featured });
    setShowModal(true);
  };

  const handleSave = () => {
    if (editing) {
      setItems((s) => s.map((t) => t.id === editing.id ? { ...t, ...form } : t));
    } else {
      setItems((s) => [{ ...form, id: Date.now() }, ...s] as Testimonial[]);
    }
    setShowModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white font-cinzel">Testimonials</h1>
          <p className="text-gray-400 text-sm mt-1">{items.length} testimonials</p>
        </div>
        <button onClick={openNew} className="flex items-center gap-2 px-4 py-2 btn-gold rounded-xl text-sm font-medium">
          <Plus size={16} /> Add Testimonial
        </button>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-5 border border-gold-500/10 hover:border-gold-500/25 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-saffron-500/30 to-gold-500/30 flex items-center justify-center font-bold text-gold-400 font-cinzel">
                  {item.avatar}
                </div>
                <div>
                  <p className="font-devanagari text-white font-semibold">{item.name}</p>
                  <p className="text-gold-400 text-xs">{item.role}</p>
                </div>
              </div>
              <div className="flex gap-2">
                {item.featured && <Star size={14} className="text-gold-400 fill-gold-400" />}
                <button onClick={() => openEdit(item)} className="p-1.5 glass rounded-lg text-gray-400 hover:text-gold-400">
                  <Edit3 size={14} />
                </button>
                <button onClick={() => setItems((s) => s.filter((t) => t.id !== item.id))} className="p-1.5 glass rounded-lg text-gray-400 hover:text-red-400">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
            <p className="font-devanagari text-gray-300 text-sm leading-relaxed line-clamp-3">"{item.text}"</p>
          </motion.div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-lg glass rounded-2xl p-6 border border-gold-500/20 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-white font-bold text-lg">{editing ? "Edit" : "Add"} Testimonial</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-white"><X size={20} /></button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="नाव (Marathi)" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="px-4 py-3 input-premium rounded-xl text-sm font-devanagari" />
                <input type="text" placeholder="Name (English)" value={form.nameEn}
                  onChange={(e) => setForm({ ...form, nameEn: e.target.value })}
                  className="px-4 py-3 input-premium rounded-xl text-sm" />
              </div>
              <input type="text" placeholder="Role / Location" value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="w-full px-4 py-3 input-premium rounded-xl text-sm" />
              <input type="text" placeholder="Avatar initials (e.g., RP)" value={form.avatar}
                onChange={(e) => setForm({ ...form, avatar: e.target.value })}
                className="w-full px-4 py-3 input-premium rounded-xl text-sm" />
              <textarea placeholder="प्रशस्तिपत्र (Marathi)..." rows={3} value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
                className="w-full px-4 py-3 input-premium rounded-xl text-sm font-devanagari resize-none" />
              <textarea placeholder="Testimonial (English)..." rows={3} value={form.textEn}
                onChange={(e) => setForm({ ...form, textEn: e.target.value })}
                className="w-full px-4 py-3 input-premium rounded-xl text-sm resize-none" />
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={form.featured}
                  onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                  className="w-4 h-4 accent-amber-500" />
                <span className="text-gray-300 text-sm">Featured on homepage</span>
              </label>
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
