"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { QrCode, Building2, Smartphone, Copy, CheckCircle, Heart } from "lucide-react";
import { useState } from "react";

const AMOUNTS = [500, 1000, 2500, 5000, 10000, 25000];

const BANK_DETAILS = {
  name: "Shivbhakt Pratishthan Maharashtra State",
  account: "1234 5678 9012 3456",
  ifsc: "SBIN0001234",
  branch: "Pune Main Branch, Maharashtra",
  bank: "State Bank of India",
};

export default function Donation() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="donate" ref={ref} className="relative py-24 bg-[#0d0d0d] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 glass-gold rounded-full text-gold-400 text-sm font-devanagari mb-4">
            देणगी
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-2">
            Support Our Cause
          </h2>
          <p className="font-devanagari text-xl text-gold-400 mb-4">महाराष्ट्रासाठी देणगी द्या</p>
          <div className="section-divider" />
          <p className="font-devanagari text-gray-400 text-sm max-w-xl mx-auto mt-4">
            आपली प्रत्येक देणगी हजारो जीव बदलण्याची शक्ती ठेवते. आज सहभागी व्हा.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Amount Selection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6 border border-gold-500/10"
          >
            <h3 className="font-devanagari text-white font-bold text-lg mb-5 flex items-center gap-2">
              <Heart size={20} className="text-red-500 fill-red-500" />
              देणगी रक्कम निवडा
            </h3>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {AMOUNTS.map((amount) => (
                <button
                  key={amount}
                  onClick={() => { setSelectedAmount(amount); setCustomAmount(""); }}
                  className={`py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    selectedAmount === amount
                      ? "btn-gold"
                      : "glass text-gray-300 hover:text-gold-400 border border-white/10 hover:border-gold-500/30"
                  }`}
                >
                  ₹{amount.toLocaleString("en-IN")}
                </button>
              ))}
            </div>

            <div className="relative">
              <span className="absolute left-3 top-3.5 text-gray-400 text-sm">₹</span>
              <input
                type="number"
                placeholder="इतर रक्कम..."
                value={customAmount}
                onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                className="w-full pl-8 pr-4 py-3 input-premium rounded-xl text-sm font-devanagari"
              />
            </div>

            <div className="mt-6 p-4 glass rounded-xl border border-saffron-500/20">
              <p className="font-devanagari text-gray-300 text-xs leading-relaxed">
                आपली देणगी करमुक्त आहे (८०G). पावती ईमेलद्वारे पाठवली जाईल.
              </p>
              <p className="text-gray-500 text-xs mt-1">Your donation is tax-exempt under 80G.</p>
            </div>

            {/* Impact for amount */}
            <div className="mt-4 space-y-2">
              <p className="text-gray-500 text-xs font-devanagari">आपली ₹{(selectedAmount || Number(customAmount) || 0).toLocaleString("en-IN")} देणगीने:</p>
              {(selectedAmount || Number(customAmount) || 0) >= 500 && (
                <p className="text-saffron-400 text-xs font-devanagari flex items-center gap-1">
                  <CheckCircle size={12} /> 1 विद्यार्थ्याला पुस्तके मिळतील
                </p>
              )}
              {(selectedAmount || Number(customAmount) || 0) >= 1000 && (
                <p className="text-green-400 text-xs font-devanagari flex items-center gap-1">
                  <CheckCircle size={12} /> 5 झाडे लावली जातील
                </p>
              )}
              {(selectedAmount || Number(customAmount) || 0) >= 5000 && (
                <p className="text-gold-400 text-xs font-devanagari flex items-center gap-1">
                  <CheckCircle size={12} /> 1 रक्तदान शिबीर आयोजित होईल
                </p>
              )}
            </div>
          </motion.div>

          {/* UPI / QR */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6 border border-gold-500/10 text-center"
          >
            <h3 className="font-devanagari text-white font-bold text-lg mb-5 flex items-center justify-center gap-2">
              <Smartphone size={20} className="text-saffron-500" />
              UPI / QR Code
            </h3>

            {/* QR Placeholder */}
            <div className="w-48 h-48 mx-auto mb-4 relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-saffron-500/20 to-gold-500/20 border-2 border-gold-500/40 flex items-center justify-center">
                <div className="text-center">
                  <QrCode size={80} className="text-gold-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-xs">QR Code</p>
                  <p className="text-gray-500 text-xs">Scan to Pay</p>
                </div>
              </div>
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold-500 rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gold-500 rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gold-500 rounded-bl-xl" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold-500 rounded-br-xl" />
            </div>

            <p className="text-gray-400 text-sm font-devanagari mb-2">UPI ID:</p>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-gold-400 font-mono text-sm font-bold">shivbhakt@upi</span>
              <button
                onClick={() => copyToClipboard("shivbhakt@upi", "upi")}
                className="text-gray-500 hover:text-gold-400 transition-colors"
              >
                {copied === "upi" ? <CheckCircle size={14} className="text-green-400" /> : <Copy size={14} />}
              </button>
            </div>

            {/* UPI Apps */}
            <div className="flex justify-center gap-3 mb-4">
              {["GPay", "PhonePe", "Paytm", "BHIM"].map((app) => (
                <div key={app} className="px-3 py-1.5 glass rounded-lg text-xs text-gray-400 border border-white/10">
                  {app}
                </div>
              ))}
            </div>

            <p className="text-gray-500 text-xs font-devanagari">
              वरील QR कोड स्कॅन करा किंवा UPI ID वापरून थेट पेमेंट करा
            </p>
          </motion.div>

          {/* Bank Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-6 border border-gold-500/10"
          >
            <h3 className="font-devanagari text-white font-bold text-lg mb-5 flex items-center gap-2">
              <Building2 size={20} className="text-gold-400" />
              Bank Transfer
            </h3>

            <div className="space-y-4">
              {[
                { label: "खाते नाव", value: BANK_DETAILS.name },
                { label: "खाते क्रमांक", value: BANK_DETAILS.account, copy: true },
                { label: "IFSC Code", value: BANK_DETAILS.ifsc, copy: true },
                { label: "बँक", value: BANK_DETAILS.bank },
                { label: "शाखा", value: BANK_DETAILS.branch },
              ].map(({ label, value, copy }) => (
                <div key={label} className="border-b border-white/5 pb-3 last:border-0">
                  <p className="text-gray-500 text-xs mb-1 font-devanagari">{label}</p>
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-gray-200 text-sm font-medium">{value}</p>
                    {copy && (
                      <button
                        onClick={() => copyToClipboard(value, label)}
                        className="text-gray-500 hover:text-gold-400 transition-colors flex-shrink-0"
                      >
                        {copied === label ? <CheckCircle size={14} className="text-green-400" /> : <Copy size={14} />}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 p-4 rounded-xl bg-saffron-500/10 border border-saffron-500/20">
              <p className="font-devanagari text-saffron-300 text-xs leading-relaxed">
                <strong>महत्त्वाचे:</strong> पेमेंट केल्यानंतर कृपया स्क्रीनशॉट WhatsApp वर पाठवा आणि आपले नाव, पत्ता कळवा.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Donation CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 glass rounded-2xl border border-gold-500/20">
            <Heart size={20} className="text-red-500 fill-red-500" />
            <p className="font-devanagari text-gray-300 text-sm">
              <span className="text-gold-400 font-bold">500+</span> लोकांनी आधीच देणगी दिली आहे. आपणही सहभागी व्हा!
            </p>
            <Heart size={20} className="text-red-500 fill-red-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
