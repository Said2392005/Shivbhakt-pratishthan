"use client";

import { Fade } from "@/lib/motion";

const VALUES = [
  {
    title: "Mission",
    body:  "To reach every citizen of Maharashtra with compassionate, non-political service — guided by the eternal ideals of Chhatrapati Shivaji Maharaj.",
  },
  {
    title: "Vision",
    body:  "An empowered Maharashtra where every young person stands as a responsible leader — educated, healthy, and dedicated to selfless service.",
  },
  {
    title: "Values",
    body:  "Service above self. Discipline in action. Selfless compassion. Lead by example.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-site">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* Photo */}
          <Fade dir="left">
            <div className="relative">
              <div className="rounded-md overflow-hidden shadow-sm" style={{ aspectRatio: "4/5" }}>
                <img
                  src="/new.jpeg"
                  alt="Shivbhakt Pratishthan volunteers in community service"
                  className="photo-full"
                />
              </div>
              {/* Accent block */}
              <div
                className="absolute -bottom-5 -right-5 w-28 h-28 rounded-sm -z-10"
                style={{ background: "#fdf0da" }}
              />
            </div>
          </Fade>

          {/* Text */}
          <div className="space-y-8">
            <Fade>
              <span className="badge-saffron">About Us</span>
              <h2 className="section-heading mt-4 max-w-xl">
                A Movement Born from the <span className="text-saffron-500">Spirit of Service</span>
              </h2>
              <div className="divider mt-4" />
            </Fade>

            <Fade delay={0.08}>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                <strong className="font-medium text-stone-900">Shivbhakt Pratishthan Maharashtra State</strong> is a
                non-political social organisation founded in 2015 by{" "}
                <strong className="font-medium text-brown-800">Aniket Bhau Ghule</strong> — inspired by the timeless
                teachings of Chhatrapati Shivaji Maharaj.
              </p>
            </Fade>

            <Fade delay={0.12}>
              <div className="space-y-3">
                {VALUES.map((v) => (
                  <div key={v.title} className="flex gap-4 p-5 border border-stone-100 rounded-sm bg-stone-50/70 hover:border-saffron-200 transition-colors duration-200">
                    <div className="w-[2px] flex-shrink-0 bg-saffron-500 rounded-full" />
                    <div>
                      <p className="font-semibold text-stone-900 text-sm mb-1">{v.title}</p>
                      <p className="text-stone-500 text-sm leading-relaxed">{v.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>

        </div>
      </div>
    </section>
  );
}
