"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Save, RefreshCw, CreditCard, QrCode } from "lucide-react";

export default function DonationAdmin() {
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    upiId: "shivbhakt@upi",
    accountName: "Shivbhakt Pratishthan Maharashtra State",
    accountNumber: "1234 5678 9012 3456",
    ifsc: "SBIN0001234",
    bankName: "State Bank of India",
    branch: "Pune Main Branch, Maharashtra",
    amounts: [500, 1000, 2500, 5000, 10000, 25000],
    tax80G: true,
    taxNote: "Your donation is tax-exempt under 80G. Receipt will be emailed.",
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white font-cinzel">Donation Settings</h1>
          <p className="text-gray-400 text-sm mt-1">Manage UPI, bank details and donation amounts</p>
        </div>
        <button onClick={handleSave}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${saved ? "bg-green-500/20 border border-green-500/30 text-green-400" : "btn-gold"}`}>
          {saved ? <><RefreshCw size={16} className="animate-spin" />Saved!</> : <><Save size={16} />Save Changes</>}
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* UPI */}
        <div className="glass rounded-2xl p-6 border border-gold-500/10">
          <h2 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
            <QrCode size={20} className="text-saffron-500" /> UPI Details
          </h2>
          <div className="space-y-4">
            <div>
              <label className="text-gray-400 text-xs mb-1.5 block">UPI ID</label>
              <input type="text" value={form.upiId}
                onChange={(e) => setForm({ ...form, upiId: e.target.value })}
                className="w-full px-4 py-3 input-premium rounded-xl text-sm font-mono" />
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-gray-400 text-sm mb-2">QR Code Upload</p>
              <div className="border-2 border-dashed border-gold-500/30 rounded-xl p-8 text-center cursor-pointer hover:border-gold-500/60 transition-colors">
                <QrCode size={32} className="text-gold-400 mx-auto mb-2" />
                <p className="text-gray-400 text-sm">Click to upload QR code image</p>
                <p className="text-gray-500 text-xs mt-1">PNG, JPG up to 2MB</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bank Details */}
        <div className="glass rounded-2xl p-6 border border-gold-500/10">
          <h2 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
            <CreditCard size={20} className="text-gold-400" /> Bank Details
          </h2>
          <div className="space-y-4">
            {[
              { key: "accountName", label: "Account Name", placeholder: "Organization Name" },
              { key: "accountNumber", label: "Account Number", placeholder: "XXXX XXXX XXXX XXXX" },
              { key: "ifsc", label: "IFSC Code", placeholder: "BANK0000000" },
              { key: "bankName", label: "Bank Name", placeholder: "Bank Name" },
              { key: "branch", label: "Branch", placeholder: "Branch Name, City" },
            ].map(({ key, label, placeholder }) => (
              <div key={key}>
                <label className="text-gray-400 text-xs mb-1.5 block">{label}</label>
                <input type="text" placeholder={placeholder}
                  value={(form as Record<string, unknown>)[key] as string}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className="w-full px-4 py-3 input-premium rounded-xl text-sm" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Amounts */}
      <div className="glass rounded-2xl p-6 border border-gold-500/10">
        <h2 className="text-white font-bold text-lg mb-5">Quick Donation Amounts</h2>
        <div className="flex flex-wrap gap-3">
          {form.amounts.map((amount, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">₹</span>
              <input
                type="number" value={amount}
                onChange={(e) => {
                  const newAmts = [...form.amounts];
                  newAmts[i] = parseInt(e.target.value) || 0;
                  setForm({ ...form, amounts: newAmts });
                }}
                className="w-24 px-3 py-2 input-premium rounded-lg text-sm font-mono"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tax Note */}
      <div className="glass rounded-2xl p-6 border border-gold-500/10">
        <h2 className="text-white font-bold text-lg mb-4">Tax Exemption Note</h2>
        <label className="flex items-center gap-3 cursor-pointer mb-4">
          <input type="checkbox" checked={form.tax80G} onChange={(e) => setForm({ ...form, tax80G: e.target.checked })}
            className="w-4 h-4 accent-amber-500" />
          <span className="text-gray-300 text-sm">Show 80G tax exemption notice to donors</span>
        </label>
        <textarea rows={3} value={form.taxNote}
          onChange={(e) => setForm({ ...form, taxNote: e.target.value })}
          className="w-full px-4 py-3 input-premium rounded-xl text-sm resize-none" />
      </div>
    </div>
  );
}
