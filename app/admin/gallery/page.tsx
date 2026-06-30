"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Upload, Trash2, Edit3, Search, Filter, Plus, FolderOpen, X, Check } from "lucide-react";

const CATEGORIES = ["All", "Events", "Tree Plantation", "Blood Donation", "Medical Camps", "Youth Camps", "Social Work", "Festivals"];

const MOCK_PHOTOS = [
  { id: 1, src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400", category: "Blood Donation", title: "Blood Donation Camp Pune", date: "2024-01-15" },
  { id: 2, src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400", category: "Tree Plantation", title: "Tree Plantation Drive", date: "2024-01-20" },
  { id: 3, src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400", category: "Events", title: "Community Event", date: "2024-01-25" },
  { id: 4, src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400", category: "Medical Camps", title: "Free Medical Camp", date: "2024-01-28" },
  { id: 5, src: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=400", category: "Youth Camps", title: "Youth Leadership Camp", date: "2024-02-01" },
  { id: 6, src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400", category: "Events", title: "Annual Celebration", date: "2024-02-05" },
];

export default function GalleryAdmin() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [photos, setPhotos] = useState(MOCK_PHOTOS);
  const [uploading, setUploading] = useState(false);
  const [selected, setSelected] = useState<number[]>([]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [newPhoto, setNewPhoto] = useState({ title: "", category: "Events" });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const filtered = photos.filter((p) =>
    (category === "All" || p.category === category) &&
    (p.title.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase()))
  );

  const toggleSelect = (id: number) => {
    setSelected((s) => s.includes(id) ? s.filter((x) => x !== id) : [...s, id]);
  };

  const deleteSelected = () => {
    setPhotos((p) => p.filter((x) => !selected.includes(x.id)));
    setSelected([]);
  };

  const handleUpload = () => {
    setUploading(true);
    setTimeout(() => {
      const newId = Math.max(...photos.map((p) => p.id)) + 1;
      setPhotos((p) => [{
        id: newId,
        src: `https://images.unsplash.com/photo-${Date.now()}?w=400`,
        category: newPhoto.category,
        title: newPhoto.title || "New Photo",
        date: new Date().toISOString().split("T")[0],
      }, ...p]);
      setUploading(false);
      setShowUploadModal(false);
      setNewPhoto({ title: "", category: "Events" });
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white font-cinzel">Gallery Management</h1>
          <p className="text-gray-400 text-sm mt-1">{photos.length} photos across {CATEGORIES.length - 1} categories</p>
        </div>
        <button
          onClick={() => setShowUploadModal(true)}
          className="flex items-center gap-2 px-4 py-2 btn-gold rounded-xl text-sm font-medium"
        >
          <Plus size={16} />
          Upload Photos
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text" placeholder="Search photos..."
            value={search} onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 input-premium rounded-xl text-sm"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                category === cat ? "btn-gold" : "glass text-gray-400 hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Bulk Actions */}
      {selected.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 px-4 py-3 rounded-xl bg-saffron-500/10 border border-saffron-500/30"
        >
          <span className="text-saffron-400 text-sm font-medium">{selected.length} selected</span>
          <button onClick={deleteSelected} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-500/20 text-red-400 text-sm hover:bg-red-500/30 transition-colors">
            <Trash2 size={14} />
            Delete Selected
          </button>
          <button onClick={() => setSelected([])} className="text-gray-400 hover:text-white text-sm">
            Clear
          </button>
        </motion.div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {/* Upload Drop Zone */}
        <button
          onClick={() => setShowUploadModal(true)}
          className="aspect-square rounded-2xl border-2 border-dashed border-gold-500/30 hover:border-gold-500/60 flex flex-col items-center justify-center gap-2 text-gray-400 hover:text-gold-400 transition-all duration-300 group"
        >
          <Upload size={28} className="group-hover:scale-110 transition-transform" />
          <span className="text-xs">Upload</span>
        </button>

        {filtered.map((photo) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative group aspect-square rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => toggleSelect(photo.id)}
          >
            <img src={photo.src} alt={photo.title} className="w-full h-full object-cover" />
            <div className={`absolute inset-0 transition-all duration-200 ${
              selected.includes(photo.id)
                ? "bg-gold-500/30 border-2 border-gold-500 rounded-2xl"
                : "bg-black/0 group-hover:bg-black/50"
            }`} />

            {/* Select Checkbox */}
            <div className={`absolute top-2 left-2 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
              selected.includes(photo.id)
                ? "bg-gold-500 border-gold-500"
                : "border-white/50 group-hover:border-white"
            }`}>
              {selected.includes(photo.id) && <Check size={10} className="text-black" />}
            </div>

            {/* Info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white text-xs font-medium truncate">{photo.title}</p>
              <p className="text-gold-400 text-xs">{photo.category}</p>
            </div>

            {/* Action buttons */}
            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                className="w-6 h-6 rounded-md bg-black/50 flex items-center justify-center text-white hover:text-gold-400 transition-colors"
                onClick={(e) => { e.stopPropagation(); }}
              >
                <Edit3 size={12} />
              </button>
              <button
                className="w-6 h-6 rounded-md bg-red-500/50 flex items-center justify-center text-white hover:text-red-300 transition-colors"
                onClick={(e) => { e.stopPropagation(); setPhotos((p) => p.filter((x) => x.id !== photo.id)); }}
              >
                <Trash2 size={12} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md glass rounded-2xl p-6 border border-gold-500/20"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-white font-bold text-lg">Upload Photos</h3>
              <button onClick={() => setShowUploadModal(false)} className="text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Drop Zone */}
            <div
              className="border-2 border-dashed border-gold-500/40 rounded-xl p-8 text-center mb-4 cursor-pointer hover:border-gold-500/70 transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload size={32} className="text-gold-400 mx-auto mb-2" />
              <p className="text-gray-300 text-sm">Click to select or drag & drop photos</p>
              <p className="text-gray-500 text-xs mt-1">PNG, JPG, WebP up to 10MB each</p>
              <input ref={fileInputRef} type="file" accept="image/*" multiple className="hidden" />
            </div>

            <input
              type="text" placeholder="Photo title..."
              value={newPhoto.title}
              onChange={(e) => setNewPhoto({ ...newPhoto, title: e.target.value })}
              className="w-full px-4 py-3 input-premium rounded-xl text-sm mb-4"
            />

            <select
              value={newPhoto.category}
              onChange={(e) => setNewPhoto({ ...newPhoto, category: e.target.value })}
              className="w-full px-4 py-3 input-premium rounded-xl text-sm mb-4 bg-[#1a1a1a]"
            >
              {CATEGORIES.filter((c) => c !== "All").map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            <div className="flex gap-3">
              <button onClick={() => setShowUploadModal(false)} className="flex-1 py-3 glass rounded-xl text-gray-300 hover:text-white transition-colors text-sm">
                Cancel
              </button>
              <button
                onClick={handleUpload}
                disabled={uploading}
                className="flex-1 py-3 btn-gold rounded-xl text-sm font-medium flex items-center justify-center gap-2"
              >
                {uploading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload size={16} />
                    Upload
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
