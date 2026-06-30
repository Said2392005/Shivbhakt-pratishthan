"use client";

import { Fade } from "@/lib/motion";

export default function Quotes() {
  return (
    <section id="quotes" className="section-pad bg-stone-50 overflow-hidden">
      <div className="container-site">

        <Fade className="text-center mb-14">
          <span className="badge-saffron">Guiding Thoughts</span>
          <h2 className="section-heading mt-4">
            Words That <span className="text-saffron-500">Inspire Us</span>
          </h2>
          <div className="divider divider-center mt-4" />
        </Fade>

        {/* Chhatrapati Shivaji Maharaj — full width, prominent */}
        <Fade>
          <div className="bg-white border border-stone-100 rounded-md overflow-hidden shadow-sm">

            <style>{`.shivaji-banner{aspect-ratio:4/3;}@media(min-width:640px){.shivaji-banner{aspect-ratio:21/9;}}`}</style>
            <div className="shivaji-banner relative overflow-hidden">
              <img
                src="/shivaji-full.png"
                alt="Chhatrapati Shivaji Maharaj"
                className="photo-full"
                style={{ objectPosition: "center 15%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/15 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <p className="font-devanagari text-white font-semibold text-base">छत्रपती शिवाजी महाराज</p>
                <p className="font-devanagari text-white/55 text-xs mt-0.5">स्वराज्य संस्थापक · मराठा साम्राज्य</p>
              </div>
            </div>

            <div className="p-8 sm:p-12">
              <div className="quote-left-bar mb-8">
                <blockquote
                  className="font-devanagari text-brown-900 font-bold italic leading-snug"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
                >
                  "जनसेवा हीच ईश्वरसेवा आहे."
                </blockquote>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-stone-100">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-stone-100">
                  <img
                    src="/shivaji-portrait.png"
                    alt="Chhatrapati Shivaji Maharaj"
                    className="photo-full"
                    style={{ objectPosition: "center top" }}
                  />
                </div>
                <div>
                  <p className="font-devanagari font-semibold text-stone-900 text-base">छत्रपती शिवाजी महाराज</p>
                  <p className="font-devanagari text-stone-400 text-sm mt-0.5">स्वराज्य संस्थापक · मराठा साम्राज्य</p>
                </div>
              </div>
            </div>

          </div>
        </Fade>
      </div>
    </section>
  );
}
