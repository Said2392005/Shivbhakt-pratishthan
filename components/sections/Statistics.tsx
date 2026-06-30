"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { Fade } from "@/lib/motion";

const STATS = [
  { end: 500, suffix: "+", label: "Events Organized", labelMr: "कार्यक्रम", color: "text-saffron-500" },
  { end: 10000, suffix: "+", label: "Volunteers", labelMr: "स्वयंसेवक", color: "text-saffron-500" },
  { end: 50000, suffix: "+", label: "Lives Touched", labelMr: "जीवन बदलले", color: "text-saffron-500" },
  { end: 100000, suffix: "+", label: "Trees Planted", labelMr: "झाडे लावली", color: "text-saffron-500" },
  { end: 100, suffix: "+", label: "Blood Camps", labelMr: "रक्तदान शिबीर", color: "text-saffron-500" },
  { end: 36, suffix: "", label: "Districts Covered", labelMr: "जिल्हे", color: "text-saffron-500" },
];

function StatCard({ stat, delay }: { stat: typeof STATS[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center py-8 px-4"
    >
      <p className={`counter-num ${stat.color} text-5xl sm:text-6xl font-extrabold font-poppins leading-none`}>
        {inView ? (
          <CountUp
            end={stat.end}
            duration={2.4}
            separator=","
            suffix={stat.suffix}
            useEasing
          />
        ) : (
          `0${stat.suffix}`
        )}
      </p>
      <p className="mt-3 text-stone-900 font-semibold text-sm tracking-wide">{stat.label}</p>
      <p className="font-devanagari text-stone-400 text-xs mt-0.5">{stat.labelMr}</p>
    </motion.div>
  );
}

export default function Statistics() {
  return (
    <section id="impact" className="section-pad bg-white">
      <div className="container-site">
        <Fade className="max-w-2xl mb-14">
          <span className="badge-saffron">Our Impact</span>
          <h2 className="section-heading mt-4">The Numbers Speak</h2>
          <p className="font-devanagari text-stone-400 text-sm mt-1 mb-3">आमचे योगदान</p>
          <div className="divider" />
          <p className="text-stone-500 mt-4 leading-relaxed">
            Over a decade of selfless service — measured not just in numbers, but in lives
            transformed across every corner of Maharashtra.
          </p>
        </Fade>

        {/* Stats grid with dividers */}
        <div className="border border-stone-100 rounded-md divide-y divide-stone-100 sm:divide-y-0 sm:grid sm:grid-cols-3 sm:divide-x sm:divide-stone-100 lg:grid-cols-6">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 0.08} />
          ))}
        </div>

        {/* Quote banner */}
        <Fade delay={0.3} className="mt-14">
          <div className="relative bg-stone-50 border border-stone-200 rounded-md px-8 py-10 text-center overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-saffron-500 rounded-l-md" />
            <p className="font-devanagari text-brown-800 text-xl sm:text-2xl font-semibold leading-relaxed">
              "रयतेची सेवा हीच ईश्वराची सेवा आहे."
            </p>
            <p className="text-stone-500 text-sm mt-3 font-medium italic">
              — Inspired by the ideals of Chhatrapati Shivaji Maharaj
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
}
