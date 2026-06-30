"use client";

import { useState } from "react";
import { Save, RefreshCw, Globe, Mail, Phone, MapPin, Lock, Bell } from "lucide-react";

export default function SettingsAdmin() {
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState({
    siteName: "शिवभक्त प्रतिष्ठाण महाराष्ट्र राज्य",
    siteNameEn: "Shivbhakt Pratishthan Maharashtra State",
    email: "contact@shivbhaktpratishthan.org",
    phone: "+91 98765 43210",
    address: "Maharashtra, India",
    facebook: "#",
    instagram: "#",
    youtube: "#",
    whatsapp: "#",
    adminEmail: "admin@shivbhaktpratishthan.org",
    emailNotifications: true,
    volunteerAlerts: true,
    donationAlerts: true,
  });

  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2500); };

  const S = (label: string, key: string, placeholder: string = "", textarea = false) => (
    <div>
      <label className="text-gray-400 text-xs mb-1.5 block">{label}</label>
      {textarea ? (
        <textarea rows={2} placeholder={placeholder}
          value={(settings as Record<string, unknown>)[key] as string}
          onChange={(e) => setSettings({ ...settings, [key]: e.target.value })}
          className="w-full px-4 py-3 input-premium rounded-xl text-sm resize-none" />
      ) : (
        <input type="text" placeholder={placeholder}
          value={(settings as Record<string, unknown>)[key] as string}
          onChange={(e) => setSettings({ ...settings, [key]: e.target.value })}
          className="w-full px-4 py-3 input-premium rounded-xl text-sm" />
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white font-cinzel">Settings</h1>
          <p className="text-gray-400 text-sm mt-1">Global website configuration</p>
        </div>
        <button onClick={handleSave}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${saved ? "bg-green-500/20 border border-green-500/30 text-green-400" : "btn-gold"}`}>
          {saved ? <><RefreshCw size={16} className="animate-spin" />Saved!</> : <><Save size={16} />Save All</>}
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Site Info */}
        <div className="glass rounded-2xl p-6 border border-gold-500/10">
          <h2 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
            <Globe size={20} className="text-saffron-500" /> Site Information
          </h2>
          <div className="space-y-4">
            {S("Organization Name (Marathi)", "siteName")}
            {S("Organization Name (English)", "siteNameEn")}
          </div>
        </div>

        {/* Contact */}
        <div className="glass rounded-2xl p-6 border border-gold-500/10">
          <h2 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
            <Phone size={20} className="text-gold-400" /> Contact Details
          </h2>
          <div className="space-y-4">
            {S("Email Address", "email")}
            {S("Phone Number", "phone")}
            {S("Office Address", "address", "", true)}
          </div>
        </div>

        {/* Social Media */}
        <div className="glass rounded-2xl p-6 border border-gold-500/10">
          <h2 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
            <Globe size={20} className="text-saffron-500" /> Social Media Links
          </h2>
          <div className="space-y-4">
            {S("Facebook URL", "facebook", "https://facebook.com/...")}
            {S("Instagram URL", "instagram", "https://instagram.com/...")}
            {S("YouTube URL", "youtube", "https://youtube.com/...")}
            {S("WhatsApp Number", "whatsapp", "+91 XXXXXXXXXX")}
          </div>
        </div>

        {/* Notifications */}
        <div className="glass rounded-2xl p-6 border border-gold-500/10">
          <h2 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
            <Bell size={20} className="text-gold-400" /> Notifications
          </h2>
          <div className="space-y-4">
            {S("Admin Email", "adminEmail")}
            <div className="space-y-3 pt-2">
              {[
                { key: "emailNotifications", label: "Email notifications for contact form submissions" },
                { key: "volunteerAlerts", label: "Alert when new volunteer registers" },
                { key: "donationAlerts", label: "Alert when donation is made" },
              ].map(({ key, label }) => (
                <label key={key} className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox"
                    checked={(settings as Record<string, unknown>)[key] as boolean}
                    onChange={(e) => setSettings({ ...settings, [key]: e.target.checked })}
                    className="w-4 h-4 accent-amber-500" />
                  <span className="text-gray-300 text-sm">{label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="glass rounded-2xl p-6 border border-gold-500/10 lg:col-span-2">
          <h2 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
            <Lock size={20} className="text-red-400" /> Security
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 text-xs mb-1.5 block">Current Password</label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-3 input-premium rounded-xl text-sm" />
            </div>
            <div>
              <label className="text-gray-400 text-xs mb-1.5 block">New Password</label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-3 input-premium rounded-xl text-sm" />
            </div>
          </div>
          <button className="mt-4 px-5 py-2.5 btn-saffron rounded-xl text-sm font-medium">Change Password</button>
        </div>
      </div>
    </div>
  );
}
