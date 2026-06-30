"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Calendar, MapPin, Clock, Trash2, Edit3, X, Save } from "lucide-react";

const initial = [
  { id: 1, title: "रक्तदान महाशिबिर - पुणे", date: "2024-02-15", time: "09:00", location: "Shivaji Nagar, Pune", type: "Blood Donation", status: "upcoming" },
  { id: 2, title: "युवा नेतृत्व शिबिर", date: "2024-02-20", time: "08:00", location: "Nashik", type: "Youth", status: "upcoming" },
  { id: 3, title: "वृक्षारोपण अभियान", date: "2024-01-26", time: "07:00", location: "Mumbai", type: "Environment", status: "completed" },
];

export default function EventsAdmin() {
  const [events, setEvents] = useState(initial);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ title: "", date: "", time: "", location: "", type: "Events", status: "upcoming" });

  const addEvent = () => {
    setEvents((e) => [{ ...form, id: Date.now() }, ...e]);
    setForm({ title: "", date: "", time: "", location: "", type: "Events", status: "upcoming" });
    setShowModal(false);
  };

  const STATUS_STYLES: Record<string, string> = {
    upcoming: "text-saffron-400 bg-saffron-500/20",
    completed: "text-green-400 bg-green-500/20",
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white font-cinzel">Events Calendar</h1>
          <p className="text-gray-400 text-sm mt-1">{events.length} events</p>
        </div>
        <button onClick={() => setShowModal(true)} className="flex items-center gap-2 px-4 py-2 btn-gold rounded-xl text-sm">
          <Plus size={16} /> Add Event
        </button>
      </div>

      <div className="space-y-3">
        {events.map((event) => (
          <motion.div key={event.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            className="glass rounded-xl p-5 border border-transparent hover:border-gold-500/20 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-saffron-500/15 border border-saffron-500/20 flex flex-col items-center justify-center flex-shrink-0">
                <span className="text-saffron-400 text-xs font-bold">{new Date(event.date).toLocaleString("en", { month: "short" }).toUpperCase()}</span>
                <span className="text-white font-bold text-lg font-cinzel">{new Date(event.date).getDate()}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="font-devanagari text-white font-semibold text-sm truncate">{event.title}</h3>
                  <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${STATUS_STYLES[event.status]}`}>{event.status}</span>
                </div>
                <div className="flex gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><Clock size={11} />{event.time}</span>
                  <span className="flex items-center gap-1"><MapPin size={11} />{event.location}</span>
                  <span className="text-gold-400">{event.type}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 glass rounded-lg text-gray-400 hover:text-gold-400 transition-colors"><Edit3 size={14} /></button>
                <button onClick={() => setEvents((e) => e.filter((x) => x.id !== event.id))}
                  className="p-2 glass rounded-lg text-gray-400 hover:text-red-400 transition-colors"><Trash2 size={14} /></button>
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
              <h3 className="text-white font-bold text-lg">Add Event</h3>
              <button onClick={() => setShowModal(false)}><X size={20} className="text-gray-400" /></button>
            </div>
            <div className="space-y-4">
              <input type="text" placeholder="Event Title (Marathi/English) *" value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full px-4 py-3 input-premium rounded-xl text-sm font-devanagari" />
              <div className="grid grid-cols-2 gap-3">
                <input type="date" value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="px-4 py-3 input-premium rounded-xl text-sm" />
                <input type="time" value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className="px-4 py-3 input-premium rounded-xl text-sm" />
              </div>
              <input type="text" placeholder="Location" value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="w-full px-4 py-3 input-premium rounded-xl text-sm" />
              <div className="grid grid-cols-2 gap-3">
                <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="px-4 py-3 input-premium rounded-xl text-sm bg-[#1a1a1a]">
                  {["Blood Donation","Tree Plantation","Youth","Medical","Social Work","Cultural","Environment"].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
                <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}
                  className="px-4 py-3 input-premium rounded-xl text-sm bg-[#1a1a1a]">
                  <option value="upcoming">Upcoming</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button onClick={() => setShowModal(false)} className="flex-1 py-3 glass rounded-xl text-gray-300 text-sm">Cancel</button>
              <button onClick={addEvent} className="flex-1 py-3 btn-gold rounded-xl text-sm font-medium flex items-center justify-center gap-2">
                <Save size={16} /> Add
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
