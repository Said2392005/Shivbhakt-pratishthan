"use client";

import { useState } from "react";
import { Save, Info } from "lucide-react";

const PILLAR_LABELS = [
  "Leadership", "Discipline", "Confidence", "Teamwork", "Meditation",
  "Breathing Practices", "Communication", "Selfless Service", "Respect", "Responsibility",
];

export default function YLTPAdminPage() {
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    programTitle: "Youth Leadership Training Program (YLTP)",
    tagline: "Inspired through the Art of Living movement",
    description: "The Youth Leadership Training Program (YLTP) is a flagship initiative by Shivbhakt Pratishthan, deeply inspired by the philosophy of the Art of Living movement — uniting the science of breath, the power of meditation, and the joy of selfless service.",
    sankalpHeadline: "One Lakh Young Leaders",
    sankalpBody: "Our Founder, Aniket Bhau Ghule, has made a solemn and historic public pledge — a Sankalp — to develop One Lakh (1,00,000) young leaders across Maharashtra through youth development initiatives and leadership training.",
    gurudevQuote: "The highest form of wisdom is kindness. When you serve others, you discover the greatest truth about yourself.",
    gurudevQuoteMr: "ज्ञानाचा सर्वोच्च प्रकार म्हणजे दयाळूपणा.",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <div className="max-w-3xl">
      <div className="mb-7">
        <h1 className="text-xl font-bold text-stone-900">YLTP Section</h1>
        <p className="text-stone-500 text-sm mt-1">Manage Youth Leadership Training Program content</p>
      </div>

      <div className="bg-saffron-50 border border-saffron-100 rounded p-4 flex gap-3 mb-7">
        <Info size={16} className="text-saffron-500 flex-shrink-0 mt-0.5" />
        <p className="text-saffron-700 text-sm leading-relaxed">
          The YLTP section is one of the most important parts of the website. Keep the language
          inspiring, peaceful, and community-focused. After editing, rebuild the site to see changes.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">

        {/* Program Info */}
        <div className="bg-white border border-stone-200 rounded-md p-6 space-y-4">
          <h2 className="font-semibold text-stone-900 text-sm mb-4 pb-3 border-b border-stone-100">
            Program Information
          </h2>
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">Program Title</label>
            <input name="programTitle" value={form.programTitle} onChange={handleChange}
              className="input text-sm" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">Tagline</label>
            <input name="tagline" value={form.tagline} onChange={handleChange}
              className="input text-sm" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">Description</label>
            <textarea name="description" value={form.description} onChange={handleChange}
              rows={4} className="input text-sm resize-none" />
          </div>
        </div>

        {/* The Sankalp */}
        <div className="bg-white border border-stone-200 rounded-md p-6 space-y-4">
          <h2 className="font-semibold text-stone-900 text-sm mb-4 pb-3 border-b border-stone-100">
            The Sankalp (Founder's Pledge)
          </h2>
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">Headline</label>
            <input name="sankalpHeadline" value={form.sankalpHeadline} onChange={handleChange}
              className="input text-sm" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">
              Body Text
              <span className="text-stone-400 font-normal ml-1">(Describe the pledge — keep it inspiring)</span>
            </label>
            <textarea name="sankalpBody" value={form.sankalpBody} onChange={handleChange}
              rows={5} className="input text-sm resize-none" />
          </div>
        </div>

        {/* Gurudev Quote */}
        <div className="bg-white border border-stone-200 rounded-md p-6 space-y-4">
          <h2 className="font-semibold text-stone-900 text-sm mb-4 pb-3 border-b border-stone-100">
            Gurudev Sri Sri Ravi Shankar — Quote
          </h2>
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">Quote (English)</label>
            <textarea name="gurudevQuote" value={form.gurudevQuote} onChange={handleChange}
              rows={3} className="input text-sm resize-none italic" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-600 mb-1.5">Quote (Marathi)</label>
            <textarea name="gurudevQuoteMr" value={form.gurudevQuoteMr} onChange={handleChange}
              rows={3} className="input text-sm resize-none font-devanagari" />
          </div>
          <div className="bg-stone-50 border border-stone-100 rounded p-4">
            <p className="text-xs font-semibold text-stone-500 mb-2">Gurudev Photo</p>
            <p className="text-stone-400 text-xs mb-3">
              Upload an elegant official photograph of Gurudev Sri Sri Ravi Shankar.
              Supported: JPG, PNG. Recommended size: 600×750px.
            </p>
            <input type="file" accept="image/*" className="text-xs text-stone-500" />
          </div>
        </div>

        {/* YLTP Pillars (read-only display) */}
        <div className="bg-white border border-stone-200 rounded-md p-6">
          <h2 className="font-semibold text-stone-900 text-sm mb-1">
            The 10 Pillars of YLTP
          </h2>
          <p className="text-stone-400 text-xs mb-4">These are displayed on the website and reflect the core values of the program.</p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {PILLAR_LABELS.map((p) => (
              <div key={p} className="bg-stone-50 border border-stone-100 rounded px-3 py-2 text-center">
                <p className="text-xs text-stone-600 font-medium">{p}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button type="submit" className="btn btn-saffron gap-2">
            <Save size={15} />
            Save Changes
          </button>
          {saved && <p className="text-green-600 text-sm font-medium">Changes saved successfully.</p>}
        </div>
      </form>
    </div>
  );
}
