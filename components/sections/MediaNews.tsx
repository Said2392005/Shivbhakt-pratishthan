"use client";

import { Fade } from "@/lib/motion";
import { CalendarDays, ArrowRight, Megaphone, MonitorPlay } from "lucide-react";

const NEWS = [
  {
    date: "जून २०२५",
    tag:  "कार्यक्रम",
    title: "वार्षिक स्वयंसेवक शिखर परिषद — महाराष्ट्र",
    desc:  "शिवभक्त प्रतिष्ठाणने वार्षिक स्वयंसेवक परिषदेचे आयोजन केले ज्यात ३६ जिल्ह्यांतील ५०० हून अधिक सक्रिय सदस्य प्रशिक्षण आणि सत्कारासाठी एकत्र आले.",
  },
  {
    date: "मे २०२५",
    tag:  "मोहीम",
    title: "१००० वृक्षारोपण मोहीम — पुणे",
    desc:  "स्थानिक शाळा आणि महानगरपालिकेच्या सहकार्याने जागतिक पर्यावरण दिनी आमच्या स्वयंसेवकांनी पुणे शहरात १,००० झाडे लावली.",
  },
  {
    date: "एप्रिल २०२५",
    tag:  "वैद्यकीय",
    title: "विनामूल्य वैद्यकीय शिबीर — मराठवाडा",
    desc:  "मराठवाड्यातील ३०० हून अधिक ग्रामस्थांना लाभ देणारे विनामूल्य आरोग्य तपासणी शिबीर — विनाशुल्क सल्लामसलत, औषधे आणि पुढील उपचार मार्गदर्शन.",
  },
];

const EVENTS = [
  { date: "१५ जुलै २०२५",    title: "YLTP सत्र — नाशिक",              location: "नाशिक, महाराष्ट्र"      },
  { date: "२२ जुलै २०२५",    title: "रक्तदान शिबीर",                   location: "पुणे, महाराष्ट्र"       },
  { date: "५ ऑगस्ट २०२५",    title: "किल्ले सफाई मोहीम — राजगड",      location: "राजगड किल्ला, पुणे"     },
  { date: "१५ ऑगस्ट २०२५",   title: "स्वातंत्र्यदिन सोहळा",            location: "सर्व जिल्हे"           },
];

export default function MediaNews() {
  return (
    <section id="media" className="section-pad bg-stone-50">
      <div className="container-site">

        <Fade className="mb-14">
          <span className="badge-saffron font-devanagari">माध्यमे आणि अपडेट्स</span>
          <h2 className="font-devanagari section-heading mt-5 max-w-2xl">
            ताज्या <span className="text-saffron-500">बातम्या आणि उपक्रम</span>
          </h2>
          <div className="divider mt-4" />
        </Fade>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* News cards — 2 cols */}
          <div className="lg:col-span-2 space-y-5">
            <p className="font-devanagari text-xs font-bold uppercase tracking-[0.18em] text-stone-400 mb-4 flex items-center gap-2">
              <Megaphone size={13} /> प्रेस विज्ञप्ती आणि उपक्रम
            </p>
            {NEWS.map((item) => (
              <Fade key={item.title}>
                <div className="bg-white border border-stone-100 rounded-md overflow-hidden hover:shadow-md hover:border-saffron-200 transition-all duration-300 flex gap-0">
                  {/* Colour bar */}
                  <div className="w-1 flex-shrink-0 bg-saffron-500" />
                  <div className="p-5 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-devanagari text-[10px] font-bold text-saffron-600 border border-saffron-200 bg-saffron-50 px-2 py-0.5 rounded">
                        {item.tag}
                      </span>
                      <span className="font-devanagari text-stone-400 text-xs flex items-center gap-1">
                        <CalendarDays size={11} /> {item.date}
                      </span>
                    </div>
                    <h3 className="font-devanagari font-semibold text-stone-900 text-sm mb-1.5">{item.title}</h3>
                    <p className="font-devanagari text-stone-500 text-xs leading-relaxed">{item.desc}</p>
                    <button className="font-devanagari text-saffron-500 text-xs font-semibold mt-3 hover:text-saffron-600 flex items-center gap-1 transition-colors">
                      अधिक वाचा <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </Fade>
            ))}

            {/* Video placeholder */}
            <Fade>
              <div className="bg-brown-900 rounded-md overflow-hidden flex items-center justify-center" style={{ minHeight: 180 }}>
                <div className="text-center">
                  <MonitorPlay size={36} className="text-saffron-400 mx-auto mb-3" strokeWidth={1.5} />
                  <p className="font-devanagari text-white/70 text-sm">व्हिडीओ सामग्री लवकरच येत आहे</p>
                  <p className="font-devanagari text-white/40 text-xs mt-1">ताज्या व्हिडीओंसाठी सोशल मीडिया फॉलो करा</p>
                </div>
              </div>
            </Fade>
          </div>

          {/* Upcoming Events */}
          <Fade dir="right" delay={0.1}>
            <p className="font-devanagari text-xs font-bold uppercase tracking-[0.18em] text-stone-400 mb-4 flex items-center gap-2">
              <CalendarDays size={13} /> आगामी कार्यक्रम
            </p>
            <div className="space-y-3">
              {EVENTS.map((ev) => (
                <div
                  key={ev.title}
                  className="bg-white border border-stone-100 rounded-sm p-4 hover:border-saffron-200 hover:shadow-sm transition-all duration-300"
                >
                  <p className="font-devanagari text-saffron-500 text-xs font-bold mb-1">{ev.date}</p>
                  <p className="font-devanagari font-medium text-stone-900 text-sm">{ev.title}</p>
                  <p className="font-devanagari text-stone-400 text-xs mt-0.5">{ev.location}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-saffron-50 border border-saffron-200 rounded-sm">
              <p className="font-devanagari text-saffron-700 text-xs leading-relaxed">
                आगामी कार्यक्रमांची माहिती मिळवायची आहे? सोशल मीडियावर फॉलो करा किंवा
                संपर्क पृष्ठाद्वारे संपर्क साधा.
              </p>
              <a href="#contact" className="font-devanagari text-saffron-500 text-xs font-semibold mt-2 hover:text-saffron-600 flex items-center gap-1 transition-colors">
                सूचना मिळवा <ArrowRight size={11} />
              </a>
            </div>
          </Fade>

        </div>
      </div>
    </section>
  );
}
