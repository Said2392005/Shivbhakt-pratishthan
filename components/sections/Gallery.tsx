"use client";

import { useState, useEffect } from "react";
import { Fade } from "@/lib/motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const p = (name: string) => `/${encodeURIComponent(name)}`;

const ITEMS: { src: string; cat: string; label: string }[] = [
  { src: p("old age home .jpeg"),                                        cat: "Community Service",  label: "Old Age Home Visit" },
  { src: p("blood donation camp.jpeg"),                                  cat: "Community Service",  label: "Blood Donation Camp" },
  { src: p("childs favourite.jpeg"),                                     cat: "Community Service",  label: "Child's Favourite" },
  { src: p("goshala.jpeg"),                                              cat: "Environment",        label: "Goshala — Cow Protection" },
  { src: p("WhatsApp Image 2026-06-30 at 01.13.28.jpeg"),               cat: "Events",             label: "Community Event" },
  { src: p("computer distribution in school.jpeg"),                      cat: "Education",          label: "Computer Distribution in Schools" },
  { src: p("food distribution for children.jpeg"),                       cat: "Community Service",  label: "Food Distribution for Children" },
  { src: p("food distribution.png"),                                     cat: "Community Service",  label: "Food Distribution" },
  { src: p("food distribution to villegers during covid 19 pendamic.jpeg"),  cat: "COVID Relief",  label: "Food Distribution During COVID-19" },
  { src: p("food distribution to villegers during covid 19 pendamic2.jpeg"), cat: "COVID Relief",  label: "Food Distribution to Villagers — COVID-19" },
  { src: p("prani sanvardhan project .png"),                             cat: "Environment",        label: "Prani Sanvardhan Project" },
  { src: p("tree plantation.jpeg"),                                      cat: "Environment",        label: "Tree Plantation Drive" },
  { src: p("cycle distribution.jpeg"),                                   cat: "Cycle Distribution", label: "Cycle Distribution Drive" },
  { src: p("our team with gurudev.jpeg"),                                cat: "Events",             label: "Team with Gurudev Sri Sri Ravi Shankar" },
  { src: p("sweet moments aniket bhau gurudev and bipin bhaiyya .jpeg"), cat: "Events",             label: "Aniket Bhau with Gurudev" },
  { src: p("lal mahal mahaarti .jpeg"),                                  cat: "Media Coverage",     label: "Lal Mahal Mahaarti — Saamna" },
  { src: p("news of yltp.jpeg"),                                         cat: "Media Coverage",     label: "Big YLTP Camp — Media Coverage" },
  { src: p("yltp 500+ involved .jpeg"),                                  cat: "YLTP",               label: "YLTP — 500+ Youth, One Goal" },
  { src: p("WhatsApp Image 2026-06-29 at 22.50.37.jpeg"),               cat: "YLTP",               label: "YLTP Group Photo at Temple" },
  { src: p("WhatsApp Image 2026-06-29 at 22.50.38.jpeg"),               cat: "YLTP",               label: "VIP Mega YLTP — Stage Address" },
  { src: p("WhatsApp Image 2026-06-29 at 22.50.39.jpeg"),               cat: "YLTP",               label: "YLTP Residential Camp — Hall" },
  { src: p("WhatsApp Image 2026-06-29 at 22.50.40.jpeg"),               cat: "YLTP",               label: "YLTP — Participant Speaks" },
  { src: p("WhatsApp Image 2026-06-29 at 22.50.41.jpeg"),               cat: "YLTP",               label: "YLTP Yoga & Meditation" },
  { src: p("WhatsApp Image 2026-06-29 at 22.50.42.jpeg"),               cat: "YLTP",               label: "YLTP Outdoor Session" },
  { src: p("WhatsApp Image 2026-06-29 at 22.50.44.jpeg"),               cat: "YLTP",               label: "YLTP Batch Group Photo" },
  { src: p("WhatsApp Image 2026-06-29 at 22.50.57.jpeg"),               cat: "YLTP",               label: "YLTP Anniversary Event" },
  { src: p("WhatsApp Image 2026-06-29 at 22.50.38 (1).jpeg"),           cat: "YLTP",               label: "YLTP Speaker & Panel" },
  { src: p("WhatsApp Image 2026-06-29 at 22.50.39 (1).jpeg"),           cat: "YLTP",               label: "YLTP Leadership Workshop" },
  { src: p("WhatsApp Image 2026-06-29 at 22.50.39 (3).jpeg"),           cat: "YLTP",               label: "YLTP Group Discussion" },
  { src: p("WhatsApp Image 2026-06-29 at 22.50.54 (1).jpeg"),           cat: "YLTP",               label: "YLTP Youth Leaders" },
  { src: p("WhatsApp Image 2026-06-29 at 22.50.56 (1).jpeg"),           cat: "YLTP",               label: "YLTP District Camp" },
];

interface LightboxItem { src: string; label: string }

export default function Gallery() {
  const [index, setIndex]       = useState(0);
  const [perView, setPerView]   = useState(3);
  const [lightbox, setLightbox] = useState<LightboxItem | null>(null);

  /* responsive perView */
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640)        setPerView(1);
      else if (w < 1024)  setPerView(2);
      else                setPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, ITEMS.length - perView);

  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, ITEMS.length - perView)));
  }, [perView]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox) { if (e.key === "Escape") setLightbox(null); return; }
      if (e.key === "ArrowLeft")  setIndex((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight") setIndex((i) => Math.min(maxIndex, i + 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, maxIndex]);

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const cardPct = 100 / perView;

  return (
    <section id="gallery" className="bg-white" style={{ paddingTop: "5rem", paddingBottom: "5rem", display: "flex", flexDirection: "column", alignItems: "center" }}>

      <style>{`
        .gallery-img-inner {
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .gallery-card:hover .gallery-img-inner {
          transform: scale(1.08);
        }
        .gallery-caption {
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .gallery-card:hover .gallery-caption {
          opacity: 1;
        }
        .gallery-card {
          transition: box-shadow 0.35s ease;
        }
        .gallery-card:hover {
          box-shadow: 0 24px 64px rgba(0,0,0,0.18);
        }
      `}</style>

      {/* Heading */}
      <div style={{ width: "100%", maxWidth: 1180, paddingLeft: "1.5rem", paddingRight: "1.5rem", marginBottom: "3rem", textAlign: "center" }}>
        <Fade>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span className="badge-saffron">Photo Gallery</span>
            <h2 className="section-heading" style={{ marginTop: "1.25rem", textAlign: "center", width: "100%" }}>
              Our Work <span className="text-saffron-500">in Pictures</span>
            </h2>
            <div className="divider" style={{ marginTop: "1rem" }} />
          </div>
        </Fade>
      </div>

      {/* Carousel — centred full-width */}
      <div
        className="w-full"
        style={{ maxWidth: 1760, paddingLeft: "1.25rem", paddingRight: "1.25rem" }}
      >
        <div className="relative" style={{ paddingLeft: 72, paddingRight: 72 }}>

          {/* ← Prev */}
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full bg-white border border-stone-200 shadow-lg text-stone-700 transition-all duration-200 hover:bg-saffron-500 hover:text-white hover:border-saffron-500 hover:shadow-xl disabled:opacity-20 disabled:cursor-not-allowed"
            style={{ width: 56, height: 56 }}
          >
            <ChevronLeft size={28} strokeWidth={2} />
          </button>

          {/* Track */}
          <div className="overflow-hidden" style={{ borderRadius: 20 }}>
            <div
              className="flex"
              style={{
                transform: `translateX(-${index * cardPct}%)`,
                transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              {ITEMS.map((item, i) => (
                <div
                  key={i}
                  className="flex-shrink-0"
                  style={{ width: `${cardPct}%`, padding: "0 8px" }}
                >
                  <div
                    className="gallery-card relative overflow-hidden cursor-pointer bg-stone-100"
                    style={{
                      height: "clamp(320px, 38vw, 580px)",
                      borderRadius: 16,
                      boxShadow: "0 6px 28px rgba(0,0,0,0.10)",
                    }}
                    onClick={() => setLightbox(item)}
                  >
                    <img
                      src={item.src}
                      alt={item.label}
                      className="gallery-img-inner w-full h-full object-cover"
                      loading="lazy"
                    />

                    {/* Gradient caption overlay */}
                    <div
                      className="gallery-caption absolute inset-0 flex flex-col justify-end"
                      style={{
                        background: "linear-gradient(to top, rgba(20,10,3,0.88) 0%, rgba(20,10,3,0.28) 45%, transparent 100%)",
                        padding: "2rem 1.75rem",
                      }}
                    >
                      <span
                        className="text-white/55 uppercase tracking-widest mb-1.5"
                        style={{ fontSize: "0.65rem", fontWeight: 600 }}
                      >
                        {item.cat}
                      </span>
                      <p
                        className="text-white font-semibold leading-snug"
                        style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)" }}
                      >
                        {item.label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* → Next */}
          <button
            onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
            disabled={index >= maxIndex}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full bg-white border border-stone-200 shadow-lg text-stone-700 transition-all duration-200 hover:bg-saffron-500 hover:text-white hover:border-saffron-500 hover:shadow-xl disabled:opacity-20 disabled:cursor-not-allowed"
            style={{ width: 56, height: 56 }}
          >
            <ChevronRight size={28} strokeWidth={2} />
          </button>
        </div>

        {/* Slide counter + dots */}
        <div className="flex items-center justify-center gap-4 mt-8 w-full">
          <span className="text-stone-400 text-xs font-medium tabular-nums">
            {String(index + 1).padStart(2, "0")} / {String(maxIndex + 1).padStart(2, "0")}
          </span>
          <div className="flex items-center gap-1.5">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  height: 5,
                  width: i === index ? 28 : 5,
                  background: i === index ? "#E67E22" : "#D4CFBF",
                }}
              />
            ))}
          </div>
          <span className="text-stone-400 text-xs font-medium tabular-nums">
            {ITEMS.length} photos
          </span>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: "rgba(0,0,0,0.93)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors duration-200"
          >
            <X size={36} strokeWidth={1.5} />
          </button>
          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.label}
              className="w-full h-auto max-h-[88vh] object-contain rounded-xl"
            />
            <p className="text-white/50 text-sm text-center mt-4 tracking-wide">
              {lightbox.label}
            </p>
          </div>
        </div>
      )}

    </section>
  );
}
