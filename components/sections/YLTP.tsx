"use client";

import { Fade } from "@/lib/motion";
import {
  Target, Zap, Shield, Users, Brain,
  Wind, MessageSquare, Heart, Leaf, CheckCircle,
} from "lucide-react";

const PILLARS = [
  { Icon: Target,        title: "Leadership"     },
  { Icon: Zap,           title: "Discipline"     },
  { Icon: Shield,        title: "Confidence"     },
  { Icon: Users,         title: "Teamwork"       },
  { Icon: Brain,         title: "Meditation"     },
  { Icon: Wind,          title: "Breathwork"     },
  { Icon: MessageSquare, title: "Communication"  },
  { Icon: Heart,         title: "Selfless Service"},
  { Icon: Leaf,          title: "Respect"        },
  { Icon: CheckCircle,   title: "Responsibility" },
];

export default function YLTP() {
  return (
    <section id="yltp">

      {/* Hero banner */}
      <div className="w-full">
        <img
          src="/yltp.png"
          alt="Youth Leadership Training Programme"
          className="w-full h-auto block"
        />
      </div>

      {/* What is YLTP + Sankalp */}
      <div className="bg-white" style={{ paddingTop: "5.5rem", paddingBottom: "5.5rem" }}>
        <div style={{ maxWidth: 1500, marginLeft: "auto", marginRight: "auto", paddingLeft: "2rem", paddingRight: "2rem" }}>
          <div
            className="grid items-stretch gap-12 lg:gap-16"
            style={{ gridTemplateColumns: "1fr" }}
          >
            <style>{`
              @media (min-width: 1024px) {
                .yltp-what-grid { grid-template-columns: 13fr 7fr; }
                .yltp-left-pad { padding-right: 2rem; }
              }
            `}</style>
            <div className="yltp-what-grid grid items-stretch gap-12 lg:gap-16">

              {/* Left — What is YLTP */}
              <Fade>
                <div className="flex flex-col justify-center h-full yltp-left-pad">
                  <h3
                    className="font-bold text-stone-900"
                    style={{ fontSize: "clamp(2.25rem, 4vw, 3.75rem)", lineHeight: 1.1, marginBottom: "1.25rem" }}
                  >
                    What is YLTP?
                  </h3>
                  <div className="divider" style={{ marginBottom: "1.75rem" }} />
                  <p
                    className="text-stone-500 leading-relaxed"
                    style={{ fontSize: "clamp(1.05rem, 1.4vw, 1.3rem)", maxWidth: "72ch" }}
                  >
                    The <strong className="text-stone-800 font-semibold">Youth Leadership Training Programme (YLTP)</strong> combines the science of breath, the power of meditation and the joy of selfless service. Designed for youth aged 18–35, each session is a perfect blend of practical leadership skills and ancient wisdom — cultivating a new generation that leads with intelligence and compassion.
                  </p>
                </div>
              </Fade>

              {/* Right — Sankalp card */}
              <Fade dir="right" delay={0.1}>
                <div
                  className="bg-stone-50 border border-stone-100 rounded-2xl overflow-hidden h-full flex flex-col"
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}
                >
                  <div style={{ height: 4, background: "linear-gradient(to right, #E67E22, #CF6D17)" }} />
                  <div className="flex flex-col flex-1" style={{ padding: "2.25rem 2rem" }}>
                    <p
                      className="font-bold uppercase tracking-widest text-saffron-500"
                      style={{ fontSize: "0.72rem", letterSpacing: "0.18em", marginBottom: "1rem" }}
                    >
                      Sankalp — A Public Pledge
                    </p>
                    <h4
                      className="font-bold text-stone-900"
                      style={{ fontSize: "clamp(1.5rem, 2.2vw, 2.25rem)", lineHeight: 1.2, marginBottom: "1.25rem" }}
                    >
                      One Lakh Young Leaders
                    </h4>
                    <p
                      className="text-stone-500 leading-relaxed flex-1"
                      style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.15rem)" }}
                    >
                      Founder <strong className="font-semibold text-brown-800">Aniket Bhau Ghule</strong> has made a historic public pledge — a Sankalp — to develop <strong className="text-saffron-600">1,00,000</strong> young leaders across Maharashtra through YLTP and related youth initiatives.
                    </p>
                    <div
                      className="flex items-center gap-4"
                      style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid #E8E5DC" }}
                    >
                      <div
                        className="rounded-full overflow-hidden flex-shrink-0 bg-stone-100"
                        style={{ width: 60, height: 60, border: "2px solid #E8E5DC" }}
                      >
                        <img
                          src="/aniket-ghule.png"
                          alt="Aniket Bhau Ghule"
                          className="photo-full"
                          style={{ objectPosition: "center top" }}
                        />
                      </div>
                      <div>
                        <p className="font-bold text-stone-900" style={{ fontSize: "1.05rem" }}>Aniket Bhau Ghule</p>
                        <p className="text-stone-400" style={{ fontSize: "0.88rem" }}>Founder, Shivbhakt Pratishthan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>

            </div>
          </div>
        </div>
      </div>

      {/* 10 Pillars — infinite marquee */}
      <div className="bg-stone-50 overflow-hidden" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <style>{`
          @keyframes pillar-scroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          .pillar-track {
            animation: pillar-scroll 28s linear infinite;
            will-change: transform;
          }
          .pillar-strip:hover .pillar-track {
            animation-play-state: paused;
          }
          .pillar-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .pillar-card:hover {
            transform: translateY(-8px) scale(1.03);
            box-shadow: 0 20px 48px rgba(230, 126, 34, 0.18), 0 4px 16px rgba(0,0,0,0.08);
          }
        `}</style>

        {/* Section header — constrained */}
        <Fade className="text-center mb-12 container-site">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400 mb-3">
            What Participants Experience
          </p>
          <h3 className="text-2xl font-semibold text-stone-900">The 10 Pillars of YLTP</h3>
        </Fade>

        {/* Scrolling strip — full viewport width */}
        <div className="pillar-strip w-full" style={{ cursor: "default" }}>
          <div
            className="pillar-track flex"
            style={{ gap: "1.25rem", width: "max-content" }}
          >
            {[...PILLARS, ...PILLARS].map(({ Icon, title }, i) => (
              <div
                key={i}
                className="pillar-card flex flex-col items-center justify-center text-center rounded-2xl flex-shrink-0"
                style={{
                  width: 172,
                  padding: "2rem 1.25rem",
                  background: "linear-gradient(145deg, #ffffff 0%, #fafaf8 100%)",
                  border: "1px solid rgba(230, 126, 34, 0.13)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                }}
              >
                {/* Icon badge */}
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: "linear-gradient(135deg, #E67E22 0%, #A85A12 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.1rem",
                    boxShadow: "0 6px 18px rgba(230,126,34,0.32)",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={26} color="#fff" strokeWidth={1.75} />
                </div>

                <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#222222", lineHeight: 1.3 }}>
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gurudev quote — Inspiration section */}
      <div className="bg-white" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
        <style>{`
          .inspiration-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
            align-items: center;
          }
          @media (min-width: 1024px) {
            .inspiration-grid { grid-template-columns: 9fr 11fr; gap: 5rem; }
          }
        `}</style>
        <div style={{ maxWidth: 1500, marginLeft: "auto", marginRight: "auto", paddingLeft: "2rem", paddingRight: "2rem" }}>
          <Fade>
            <div className="inspiration-grid">

              {/* Left — Gurudev image (45%) */}
              <div className="relative">
                <div
                  className="overflow-hidden bg-stone-100 rounded-2xl"
                  style={{ aspectRatio: "3/4", boxShadow: "0 16px 64px rgba(0,0,0,0.13)" }}
                >
                  <img
                    src="/gurudev.jpeg"
                    alt="Gurudev Sri Sri Ravi Shankar"
                    className="w-full h-full"
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                </div>
                {/* Accent corners */}
                <div className="absolute -bottom-4 -right-4 w-14 h-14 border-r-2 border-b-2 border-saffron-300 rounded-br-md" />
                <div className="absolute -top-4 -left-4 w-14 h-14 border-l-2 border-t-2 border-stone-200 rounded-tl-md" />
              </div>

              {/* Right — Quote + attribution + blurb (55%) */}
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "2rem" }}>

                {/* Label */}
                <p
                  className="font-bold uppercase text-saffron-500"
                  style={{ fontSize: "0.72rem", letterSpacing: "0.18em" }}
                >
                  The Inspiration Behind YLTP
                </p>

                {/* Quote */}
                <div style={{ borderLeft: "4px solid #E67E22", paddingLeft: "2rem" }}>
                  <blockquote
                    className="text-stone-800 font-light italic"
                    style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", lineHeight: 1.45 }}
                  >
                    "The true purpose of life is found only within you. Once you find it, nothing else matters — and the smile on your face never fades."
                  </blockquote>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div style={{ width: 40, height: 2, background: "#E67E22", borderRadius: 2, flexShrink: 0 }} />
                  <div>
                    <p
                      className="font-bold text-stone-900"
                      style={{ fontSize: "clamp(1rem, 1.5vw, 1.35rem)" }}
                    >
                      Gurudev Sri Sri Ravi Shankar
                    </p>
                    <p
                      className="text-stone-400"
                      style={{ fontSize: "clamp(0.85rem, 1.1vw, 1rem)", marginTop: "0.2rem" }}
                    >
                      Founder, The Art of Living Foundation
                    </p>
                  </div>
                </div>

                {/* Supporting paragraph */}
                <div
                  className="rounded-xl"
                  style={{ background: "#FAFAF8", border: "1px solid #E8E5DC", padding: "1.75rem 2rem" }}
                >
                  <p
                    className="text-stone-500 leading-relaxed"
                    style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)" }}
                  >
                    Our YLTP programme is deeply inspired by the philosophy of the Art of Living Foundation. Shivbhakt Pratishthan carries this spirit of breath, service and leadership forward across all 36 districts of Maharashtra.
                  </p>
                </div>

              </div>
            </div>
          </Fade>
        </div>
      </div>

    </section>
  );
}
