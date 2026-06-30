"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SHIVAJI_QUOTES } from "@/lib/constants";
import { Quote } from "lucide-react";

export default function QuotesBanner() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#6B0F1A]/40 via-[#111111] to-[#6B0F1A]/40" />
      <div className="absolute inset-0 fort-texture opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-saffron-500/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="font-devanagari text-saffron-400 text-sm mb-2">छत्रपती शिवाजी महाराजांचे विचार</p>
          <h2 className="font-cinzel text-2xl sm:text-3xl text-white">Inspiring Words</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SHIVAJI_QUOTES.map((quote, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="relative glass-gold rounded-2xl p-6 border border-gold-500/15 hover:border-gold-500/40 transition-all duration-300 group"
            >
              <div className="absolute top-3 right-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={40} className="text-gold-500" />
              </div>
              <div className="w-8 h-0.5 bg-gradient-to-r from-saffron-500 to-gold-500 mb-4" />
              <p className="font-devanagari text-gray-200 text-sm leading-relaxed italic mb-4">
                {quote.marathi}
              </p>
              <p className="text-gray-500 text-xs italic leading-relaxed mb-3 line-clamp-2">
                {quote.english}
              </p>
              <p className="font-devanagari text-gold-500 text-xs font-bold">
                — {quote.attribution}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
