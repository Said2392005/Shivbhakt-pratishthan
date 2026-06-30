"use client";

import { Fade } from "@/lib/motion";

const MILESTONES = [
  {
    year: "2010",
    title: "Grassroots Community Work",
    desc: "Began organising cleanliness drives, blood donation camps, and supporting underprivileged families in Pune.",
  },
  {
    year: "2015",
    title: "Founded Shivbhakt Pratishthan",
    desc: "Formally established Shivbhakt Pratishthan Maharashtra State to scale social work across all 36 districts.",
  },
  {
    year: "2017",
    title: "Youth Leadership Programs",
    desc: "Launched YLTP camps reaching 5,000+ young leaders in year one, creating a new generation of community volunteers.",
  },
  {
    year: "2019",
    title: "Environmental Campaign",
    desc: "Spearheaded a landmark tree plantation drive — over 1 lakh trees planted across Maharashtra.",
  },
  {
    year: "2021",
    title: "COVID-19 Relief Operations",
    desc: "Led state-wide relief operations, providing food, medicine, and support to thousands of affected families.",
  },
  {
    year: "2024",
    title: "50,000+ Lives Impacted",
    desc: "Crossed the milestone of positively impacting over 50,000 lives with active presence in all 36 districts.",
  },
];

const STATS = [
  { n: "100+", l: "Blood Camps"     },
  { n: "1L+",  l: "Trees Planted"   },
  { n: "10K+", l: "Volunteers Led"  },
  { n: "36",   l: "Districts Active" },
];

export default function Founder() {
  return (
    <section id="founder" className="bg-stone-50" style={{ paddingTop: "5.5rem", paddingBottom: "5.5rem" }}>
      <style>{`
        @media (min-width: 1024px) {
          .founder-grid { grid-template-columns: 2fr 3fr; }
        }
      `}</style>

      <div style={{ maxWidth: 1440, marginLeft: "auto", marginRight: "auto", paddingLeft: "2rem", paddingRight: "2rem" }}>

        {/* Section header */}
        <Fade className="mb-14">
          <span className="badge-saffron">Our Founder</span>
          <h2 className="section-heading mt-4">Aniket Bhau Ghule</h2>
          <p className="font-devanagari text-stone-400 text-base mt-1">अनिकेत भाऊ घुले</p>
          <div className="divider mt-4" />
        </Fade>

        {/* 40 / 60 grid */}
        <div className="founder-grid grid gap-12 lg:gap-20 items-start">

          {/* ── Left: portrait + bio + quote ── */}
          <Fade dir="left">
            <div className="lg:sticky lg:top-24 space-y-6">

              {/* Portrait */}
              <div className="relative">
                <div className="overflow-hidden rounded-xl bg-stone-100 shadow-lg" style={{ aspectRatio: "3/4" }}>
                  <img
                    src="/aniket-ghule.png"
                    alt="Aniket Bhau Ghule — Founder, Shivbhakt Pratishthan"
                    className="photo-full"
                    style={{ objectPosition: "center top" }}
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-10 h-10 border-r-2 border-b-2 border-saffron-400 rounded-br-sm" />
                <div className="absolute -top-3 -left-3 w-10 h-10 border-l-2 border-t-2 border-stone-300 rounded-tl-sm" />
              </div>

              {/* Bio card */}
              <div className="bg-white border border-stone-200 rounded-xl p-7 shadow-sm">
                <p className="font-semibold text-stone-900 text-base">Founder & Social Leader</p>
                <p className="font-devanagari text-stone-400 text-xs mt-0.5 mb-5">संस्थापक व समाजसेवक</p>
                <p className="text-stone-500 text-sm leading-relaxed">
                  Aniket Bhau Ghule is a passionate youth leader and community activist from Maharashtra.
                  Inspired by the teachings of Chhatrapati Shivaji Maharaj, he has dedicated over a decade
                  to selfless public service — building a volunteer movement that spans the entire state.
                </p>
                <div className="mt-6 pt-6 border-t border-stone-100 grid grid-cols-2 gap-5">
                  {STATS.map((s) => (
                    <div key={s.l} className="text-center">
                      <p className="text-2xl font-bold text-saffron-500 leading-none">{s.n}</p>
                      <p className="text-stone-400 text-xs mt-1.5 tracking-wide">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Founder quote */}
              <div
                className="bg-white border border-stone-200 rounded-xl p-7 shadow-sm"
                style={{ borderLeft: "3px solid #E67E22" }}
              >
                <blockquote className="font-devanagari text-brown-800 text-base italic leading-relaxed">
                  "आपला समाज हाच आपला परिवार आहे. समाजाची सेवा करणे हेच खरे जगणे आहे."
                </blockquote>
                <p className="text-stone-400 text-sm mt-4 font-medium">— Aniket Bhau Ghule</p>
              </div>

            </div>
          </Fade>

          {/* ── Right: timeline ── */}
          <div>
            <Fade delay={0.06}>
              <div className="mb-10">
                <h3
                  className="font-bold text-stone-900 leading-tight"
                  style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.875rem)" }}
                >
                  Journey of Service
                </h3>
                <p className="font-devanagari text-stone-400 text-sm mt-1">सेवेचा प्रवास</p>
                <div className="divider mt-4" />
              </div>
            </Fade>

            {/* Timeline — line + dots + cards */}
            <div className="relative" style={{ paddingLeft: "3.25rem" }}>

              {/* Vertical connector line */}
              <div
                className="absolute top-4 bottom-4"
                style={{
                  left: "1.15rem",
                  width: 2,
                  borderRadius: 2,
                  background: "linear-gradient(to bottom, #E67E22 0%, #fad8a4 75%, transparent 100%)",
                }}
              />

              <div className="flex flex-col" style={{ gap: "2.25rem" }}>
                {MILESTONES.map((item, i) => (
                  <Fade key={item.year} delay={0.06 + i * 0.07}>
                    <div className="relative">

                      {/* Numbered dot */}
                      <div
                        className="absolute flex items-center justify-center rounded-full bg-saffron-500 text-white font-bold shadow-md"
                        style={{
                          width: 36,
                          height: 36,
                          left: "-3.35rem",
                          top: "1.35rem",
                          fontSize: "0.7rem",
                          border: "3px solid #FAFAF8",
                        }}
                      >
                        {i + 1}
                      </div>

                      {/* Card */}
                      <div className="bg-white border border-stone-200 rounded-xl shadow-sm hover:border-saffron-300 hover:shadow-md transition-all duration-250" style={{ padding: "1.75rem" }}>
                        {/* Year + title */}
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span
                            className="flex-shrink-0 inline-flex items-center bg-saffron-50 text-saffron-600 font-bold tracking-widest border border-saffron-200 rounded-sm"
                            style={{ fontSize: "0.68rem", padding: "0.25rem 0.7rem" }}
                          >
                            {item.year}
                          </span>
                          <h4 className="font-semibold text-stone-900 text-base leading-snug">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>

                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
