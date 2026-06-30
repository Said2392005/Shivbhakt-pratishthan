"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, Save, Quote, RefreshCw, Star } from "lucide-react";
import { SHIVAJI_QUOTES } from "@/lib/constants";

type QuoteItem = typeof SHIVAJI_QUOTES[0] & { id: number; active: boolean };

const initial: QuoteItem[] = SHIVAJI_QUOTES.map((q, i) => ({ ...q, id: i + 1, active: true }));

export default function QuotesAdmin() {
  const [quotes, setQuotes] = useState<QuoteItem[]>(initial);
  const [saved, setSaved] = useState(false);
  const [newQ, setNewQ] = useState({ marathi: "", english: "", attribution: "छत्रपती शिवाजी महाराज" });

  const addQuote = () => {
    if (!newQ.marathi) return;
    setQuotes((q) => [...q, { ...newQ, id: Date.now(), active: true }]);
    setNewQ({ marathi: "", english: "", attribution: "छत्रपती शिवाजी महाराज" });
  };

  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2500); };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white font-cinzel">Manage Quotes</h1>
          <p className="text-gray-400 text-sm mt-1">Quotes shown in the Hero and throughout the website</p>
        </div>
        <button onClick={handleSave}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${saved ? "bg-green-500/20 border border-green-500/30 text-green-400" : "btn-gold"}`}>
          {saved ? <><RefreshCw size={16} className="animate-spin" />Saved!</> : <><Save size={16} />Save</>}
        </button>
      </div>

      {/* Add New */}
      <div className="glass rounded-2xl p-6 border border-gold-500/10">
        <h2 className="text-white font-bold text-base mb-4 flex items-center gap-2">
          <Plus size={18} className="text-saffron-500" /> Add New Quote
        </h2>
        <div className="space-y-3">
          <textarea rows={2} placeholder="मराठी सुविचार..." value={newQ.marathi}
            onChange={(e) => setNewQ({ ...newQ, marathi: e.target.value })}
            className="w-full px-4 py-3 input-premium rounded-xl text-sm font-devanagari resize-none" />
          <textarea rows={2} placeholder="English translation..." value={newQ.english}
            onChange={(e) => setNewQ({ ...newQ, english: e.target.value })}
            className="w-full px-4 py-3 input-premium rounded-xl text-sm resize-none" />
          <input type="text" placeholder="Attribution..." value={newQ.attribution}
            onChange={(e) => setNewQ({ ...newQ, attribution: e.target.value })}
            className="w-full px-4 py-3 input-premium rounded-xl text-sm font-devanagari" />
          <button onClick={addQuote} className="px-6 py-2.5 btn-saffron rounded-xl text-sm font-medium">Add Quote</button>
        </div>
      </div>

      {/* Quotes List */}
      <div className="space-y-4">
        {quotes.map((q, i) => (
          <motion.div
            key={q.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`glass rounded-2xl p-5 border transition-colors ${q.active ? "border-gold-500/15" : "border-red-500/15 opacity-60"}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Quote size={20} className="absolute -top-1 -left-1 text-gold-500 opacity-30" />
                  <p className="font-devanagari text-gray-200 leading-relaxed pl-4 mb-2">{q.marathi}</p>
                </div>
                <p className="text-gray-500 text-sm italic mb-2">{q.english}</p>
                <p className="text-gold-400 text-sm font-devanagari font-semibold">— {q.attribution}</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={() => setQuotes((s) => s.map((item) => item.id === q.id ? { ...item, active: !item.active } : item))}
                  className={`p-2 rounded-lg transition-colors ${q.active ? "glass text-gold-400 hover:text-gold-300" : "glass text-gray-500 hover:text-gray-300"}`}
                >
                  <Star size={16} className={q.active ? "fill-gold-400" : ""} />
                </button>
                <button onClick={() => setQuotes((s) => s.filter((item) => item.id !== q.id))}
                  className="p-2 rounded-lg glass text-gray-400 hover:text-red-400 transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
