"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Users, MapPin, CalendarDays, Heart } from "lucide-react";
import { Fade } from "@/lib/motion";

const STATS = [
  {
    Icon: Users,
    end: 10000,
    suffix: "+",
    label: "Volunteers",
    desc: "Active volunteers across Maharashtra",
    color: "#E67E22",
    bg: "#fef9f0",
    border: "#fad8a4",
  },
  {
    Icon: MapPin,
    end: 36,
    suffix: "",
    label: "Districts",
    desc: "Every district of Maharashtra reached",
    color: "#CF6D17",
    bg: "#fdf0da",
    border: "#fad8a4",
  },
  {
    Icon: CalendarDays,
    end: 500,
    suffix: "+",
    label: "Events Organised",
    desc: "Camps, drives and community programmes",
    color: "#3D2B1F",
    bg: "#fdf6f3",
    border: "#edcec4",
  },
  {
    Icon: Heart,
    end: 50000,
    suffix: "+",
    label: "Lives Impacted",
    desc: "Lives touched through service and care",
    color: "#E67E22",
    bg: "#fef9f0",
    border: "#fad8a4",
  },
];

export default function ImpactCounter() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section
      id="impact"
      ref={ref}
      className="bg-white"
      style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
    >
      <style>{`
        .impact-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .impact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 56px rgba(0,0,0,0.11);
          border-color: #E67E22 !important;
        }
        .impact-icon-wrap {
          transition: transform 0.3s ease;
        }
        .impact-card:hover .impact-icon-wrap {
          transform: scale(1.12);
        }
      `}</style>

      <div style={{ maxWidth: 1460, marginLeft: "auto", marginRight: "auto", paddingLeft: "2rem", paddingRight: "2rem" }}>

        {/* Header */}
        <Fade className="text-center mb-10">
          <span className="badge-saffron">Our Impact</span>
          <h2 className="section-heading mt-4">
            Making a Difference <span className="text-saffron-500">Across Maharashtra</span>
          </h2>
          <div className="divider divider-center mt-3" />
          <p className="text-stone-500 mt-4" style={{ fontSize: "0.95rem", maxWidth: 680, margin: "1rem auto 0", textAlign: "center", display: "block" }}>
            A decade of relentless service — measured not just in numbers, but in communities transformed.
          </p>
        </Fade>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map(({ Icon, end, suffix, label, desc, color, bg, border }, i) => (
            <Fade key={label} delay={0.07 * i}>
              <div
                className="impact-card rounded-2xl flex flex-col items-center text-center"
                style={{
                  background: "#ffffff",
                  border: `1.5px solid ${border}`,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                  padding: "2rem 1.5rem",
                }}
              >
                {/* Icon badge */}
                <div
                  className="impact-icon-wrap rounded-xl flex items-center justify-center mb-4"
                  style={{
                    width: 54,
                    height: 54,
                    background: bg,
                    border: `1.5px solid ${border}`,
                  }}
                >
                  <Icon size={24} color={color} strokeWidth={1.5} />
                </div>

                {/* Animated number */}
                <p
                  className="font-bold leading-none"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 3rem)", color }}
                >
                  {inView ? (
                    <CountUp end={end} duration={2.6} separator="," suffix={suffix} />
                  ) : (
                    `0${suffix}`
                  )}
                </p>

                {/* Label */}
                <p
                  className="font-bold text-stone-900 mt-2.5"
                  style={{ fontSize: "0.95rem" }}
                >
                  {label}
                </p>

                {/* Description */}
                <p
                  className="text-stone-400 leading-relaxed mt-1.5"
                  style={{ fontSize: "0.8rem" }}
                >
                  {desc}
                </p>
              </div>
            </Fade>
          ))}
        </div>

      </div>
    </section>
  );
}
