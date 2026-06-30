"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(107,15,26,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 glass-gold rounded-full text-gold-400 text-sm font-devanagari mb-4">
            प्रशस्तिपत्र
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-2">
            What They Say
          </h2>
          <p className="font-devanagari text-xl text-gold-400">लोकांचे अनुभव</p>
          <div className="section-divider" />
        </motion.div>

        {/* Main Featured */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 opacity-10">
              <Quote size={100} className="text-gold-500" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="glass rounded-3xl p-8 sm:p-12 border border-gold-500/10"
              >
                <div className="flex items-start gap-6">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center flex-shrink-0 font-bold text-xl text-white font-cinzel">
                    {TESTIMONIALS[current].avatar}
                  </div>
                  <div className="flex-1">
                    <p className="font-devanagari text-gray-200 text-lg leading-relaxed italic mb-6">
                      "{TESTIMONIALS[current].text}"
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      "{TESTIMONIALS[current].textEn}"
                    </p>
                    <div>
                      <p className="font-devanagari text-white font-bold">{TESTIMONIALS[current].name}</p>
                      <p className="text-gold-400 text-sm">{TESTIMONIALS[current].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button onClick={prev} className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-gold-400 transition-colors border border-white/10 hover:border-gold-500/30">
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all duration-300 rounded-full ${i === current ? "w-8 h-2 bg-gold-500" : "w-2 h-2 bg-gray-600 hover:bg-gray-400"}`}
                  />
                ))}
              </div>
              <button onClick={next} className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-gold-400 transition-colors border border-white/10 hover:border-gold-500/30">
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* All Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              onClick={() => setCurrent(i)}
              className={`glass rounded-2xl p-5 border cursor-pointer transition-all duration-300 ${
                i === current ? "border-gold-500/50 bg-gold-500/5" : "border-transparent hover:border-gold-500/20"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-saffron-500/30 to-gold-500/30 flex items-center justify-center text-sm font-bold text-gold-400 font-cinzel">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-devanagari text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-gold-400 text-xs">{t.role}</p>
                </div>
              </div>
              <p className="font-devanagari text-gray-400 text-xs leading-relaxed line-clamp-3">
                "{t.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
