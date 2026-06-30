"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Download, Filter, Mail, Phone, MapPin, Check, X, Eye } from "lucide-react";

const MOCK_VOLUNTEERS = [
  { id: 1, name: "राजेश पाटील", phone: "+91 98765 43210", email: "rajesh@example.com", address: "Pune", occupation: "Engineer", skills: ["Technology", "Youth Camp"], availability: "Weekend", status: "approved", date: "2024-01-15" },
  { id: 2, name: "सुनीता देशमुख", phone: "+91 87654 32109", email: "sunita@example.com", address: "Nashik", occupation: "Teacher", skills: ["Education", "Women Empowerment"], availability: "Weekdays", status: "pending", date: "2024-01-18" },
  { id: 3, name: "अमोल जाधव", phone: "+91 76543 21098", email: "amol@example.com", address: "Mumbai", occupation: "Doctor", skills: ["Medical", "Blood Donation"], availability: "Weekends", status: "approved", date: "2024-01-20" },
  { id: 4, name: "प्रिया शिंदे", phone: "+91 65432 10987", email: "priya@example.com", address: "Aurangabad", occupation: "Student", skills: ["Social Work", "Environment"], availability: "Anytime", status: "pending", date: "2024-01-22" },
  { id: 5, name: "विकास कुलकर्णी", phone: "+91 54321 09876", email: "vikas@example.com", address: "Kolhapur", occupation: "Businessman", skills: ["Business", "Youth"], availability: "Weekends", status: "rejected", date: "2024-01-25" },
];

const STATUS_STYLES: Record<string, string> = {
  approved: "bg-green-500/20 text-green-400 border-green-500/30",
  pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  rejected: "bg-red-500/20 text-red-400 border-red-500/30",
};

export default function VolunteersAdmin() {
  const [volunteers, setVolunteers] = useState(MOCK_VOLUNTEERS);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = volunteers.filter((v) => {
    const matchSearch = v.name.toLowerCase().includes(search.toLowerCase()) ||
      v.address.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || v.status === filter;
    return matchSearch && matchFilter;
  });

  const updateStatus = (id: number, status: string) => {
    setVolunteers((v) => v.map((vol) => vol.id === id ? { ...vol, status } : vol));
  };

  const counts = {
    all: volunteers.length,
    approved: volunteers.filter((v) => v.status === "approved").length,
    pending: volunteers.filter((v) => v.status === "pending").length,
    rejected: volunteers.filter((v) => v.status === "rejected").length,
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white font-cinzel">Volunteer Management</h1>
          <p className="text-gray-400 text-sm mt-1">{volunteers.length} total registrations</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 btn-gold rounded-xl text-sm font-medium">
          <Download size={16} /> Export CSV
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.entries(counts).map(([key, count]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`p-4 rounded-xl text-center transition-all duration-200 ${
              filter === key ? "glass border border-gold-500/50 bg-gold-500/5" : "glass border border-transparent hover:border-gold-500/20"
            }`}
          >
            <p className="text-2xl font-bold text-white font-cinzel">{count}</p>
            <p className="text-gray-400 text-xs capitalize mt-1">{key}</p>
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        <input type="text" placeholder="Search volunteers..."
          value={search} onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 input-premium rounded-xl text-sm" />
      </div>

      {/* Table */}
      <div className="glass rounded-2xl border border-gold-500/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gold-500/10">
                {["Name", "Contact", "Location", "Skills", "Availability", "Status", "Actions"].map((h) => (
                  <th key={h} className="text-left py-4 px-4 text-gray-400 text-xs font-semibold uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((v) => (
                <motion.tr key={v.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="hover:bg-white/2">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-devanagari text-white font-medium text-sm">{v.name}</p>
                      <p className="text-gray-500 text-xs">{v.occupation}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="space-y-1">
                      <p className="text-gray-300 text-xs flex items-center gap-1"><Phone size={10} />{v.phone}</p>
                      <p className="text-gray-400 text-xs flex items-center gap-1"><Mail size={10} />{v.email}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-gray-300 text-sm flex items-center gap-1"><MapPin size={12} className="text-saffron-500" />{v.address}</p>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex flex-wrap gap-1">
                      {v.skills.slice(0, 2).map((s) => (
                        <span key={s} className="px-2 py-0.5 text-xs rounded-md bg-saffron-500/15 text-saffron-400">{s}</span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-gray-300 text-sm">{v.availability}</p>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-lg text-xs font-medium border ${STATUS_STYLES[v.status]}`}>
                      {v.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1">
                      {v.status === "pending" && (
                        <>
                          <button onClick={() => updateStatus(v.id, "approved")} className="p-1.5 rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors">
                            <Check size={14} />
                          </button>
                          <button onClick={() => updateStatus(v.id, "rejected")} className="p-1.5 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors">
                            <X size={14} />
                          </button>
                        </>
                      )}
                      <button className="p-1.5 rounded-lg glass text-gray-400 hover:text-gold-400 transition-colors">
                        <Eye size={14} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
