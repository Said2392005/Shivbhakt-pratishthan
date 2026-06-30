"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fade } from "@/lib/motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    cat: "स्वयंसेवक",
    q: "शिवभक्त प्रतिष्ठाणमध्ये स्वयंसेवक कसे होता येईल?",
    a: "आमच्या संपर्क फॉर्मद्वारे किंवा सोशल मीडियाद्वारे संपर्क साधून तुम्ही स्वयंसेवक म्हणून सहभागी होऊ शकता. सामाजिक सेवा आणि सामुदायिक विकासाची आवड असलेल्या १८ वर्षांवरील सर्वांचे आम्ही स्वागत करतो.",
  },
  {
    cat: "स्वयंसेवक",
    q: "स्वयंसेवक म्हणून किती वेळ द्यावा लागतो?",
    a: "कोणतीही ठराविक किमान वचनबद्धता नाही. तुमच्या उपलब्धतेनुसार तुम्ही प्रसंगी कार्यक्रम, मोहिमा किंवा चालू कार्यक्रमांत सहभागी होऊ शकता. महिन्यातून काही तासही फरक घडवतात.",
  },
  {
    cat: "स्वयंसेवक",
    q: "स्वयंसेवा केल्याबद्दल प्रमाणपत्र मिळेल का?",
    a: "होय. सक्रिय स्वयंसेवकांना आमच्या कार्यक्रमांमधील योगदानाची दखल घेणारी अधिकृत सहभाग प्रमाणपत्रे आणि कौतुकपत्रे दिली जातात.",
  },
  {
    cat: "देणगी",
    q: "शिवभक्त प्रतिष्ठाणला देणगी कशी द्यावी?",
    a: "बँक हस्तांतरण, UPI किंवा धनादेशाद्वारे देणगी देता येते. तपशीलांसाठी थेट संपर्क साधा. सर्व देणग्यांची पावती दिली जाते.",
  },
  {
    cat: "देणगी",
    q: "माझी देणगी करसवलतीसाठी पात्र आहे का?",
    a: "आम्ही 80G प्रमाणपत्र मिळवण्याच्या प्रक्रियेत आहोत. ते मिळाल्यानंतर देणग्या आयकर वजावटीसाठी पात्र ठरतील. सद्यस्थितीसाठी कृपया आमच्याशी संपर्क साधा.",
  },
  {
    cat: "YLTP",
    q: "YLTP कार्यक्रम म्हणजे काय?",
    a: "YLTP (युवा नेतृत्व प्रशिक्षण कार्यक्रम) हा आमचा प्रमुख उपक्रम आहे जो श्वासाचे तंत्र, ध्यान, आत्मजागृती, सामूहिक कार्य आणि निःस्वार्थ सेवेद्वारे युवा नेते घडवतो — आर्ट ऑफ लिव्हिंग चळवळीपासून प्रेरित.",
  },
  {
    cat: "YLTP",
    q: "YLTP साठी कोण पात्र आहे?",
    a: "YLTP हा १८ ते ३५ वयोगटातील तरुणांसाठी आहे ज्यांना आपली नेतृत्व क्षमता विकसित करायची आहे आणि समाजासाठी अर्थपूर्ण योगदान द्यायचे आहे.",
  },
  {
    cat: "सदस्यत्व",
    q: "शिवभक्त प्रतिष्ठाणचा सदस्य होता येईल का?",
    a: "होय, आमची मूल्ये आणि ध्येयाशी जुळणाऱ्या उत्साही व्यक्तींचे आम्ही स्वागत करतो. सदस्यत्वात आमच्या कार्यक्रमांत सक्रिय सहभाग आणि संघटनात्मक मार्गदर्शक तत्त्वांचे पालन समाविष्ट आहे.",
  },
  {
    cat: "कार्यक्रम",
    q: "आगामी कार्यक्रमांची माहिती कशी मिळवावी?",
    a: "कार्यक्रम, मोहिमा आणि स्वयंसेवक अभियानांच्या रिअल-टाईम अपडेट्ससाठी सोशल मीडियावर आम्हाला फॉलो करा. आमच्या सूचना यादीत समाविष्ट होण्यासाठी थेट संपर्कही करू शकता.",
  },
  {
    cat: "कार्यक्रम",
    q: "एखादा कार्यक्रम किंवा उपक्रम सुचवता येईल का?",
    a: "नक्कीच. समाजातील सदस्य आणि स्वयंसेवकांनी नवीन कल्पना सुचवाव्यात असे आम्हाला वाटते. संपर्क फॉर्म किंवा सोशल मीडियाद्वारे आमच्या टीमशी संपर्क साधा आणि आम्ही तुमचा प्रस्ताव विचारात घेऊ.",
  },
  {
    cat: "CSR",
    q: "आमची कंपनी CSR साठी शिवभक्त प्रतिष्ठाणशी कशी सहकार्य करू शकते?",
    a: "आम्ही CSR भागीदारीसाठी पूर्णपणे तयार आहोत. कंपन्या विशिष्ट कार्यक्रमांना निधी देऊ शकतात, कार्यक्रम प्रायोजित करू शकतात किंवा समुदाय दत्तक घेऊ शकतात. सानुकूल CSR सहकार्यावर चर्चेसाठी आमच्या टीमशी संपर्क साधा.",
  },
  {
    cat: "CSR",
    q: "कोणते CSR कार्यक्रम उपलब्ध आहेत?",
    a: "शिक्षण, आरोग्यसेवा, ग्रामविकास, युवा नेतृत्व (YLTP), पर्यावरण संरक्षण आणि वारसा संवर्धन — या सर्व क्षेत्रांत CSR-तयार कार्यक्रम आम्ही देतो — सर्व मोजता येणाऱ्या प्रभाव अहवालासह.",
  },
];

const CATEGORIES = ["सर्व", "स्वयंसेवक", "देणगी", "YLTP", "सदस्यत्व", "कार्यक्रम", "CSR"];

export default function FAQ() {
  const [activeCat, setActiveCat] = useState("सर्व");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const filtered = activeCat === "सर्व" ? FAQS : FAQS.filter((f) => f.cat === activeCat);

  return (
    <section id="faq" className="section-pad bg-white">
      <div className="container-site">

        <Fade className="mb-12">
          <span className="badge-saffron font-devanagari">वारंवार विचारले जाणारे प्रश्न</span>
          <h2 className="font-devanagari section-heading mt-5 max-w-xl">
            सामान्य <span className="text-saffron-500">प्रश्नोत्तरे</span>
          </h2>
          <div className="divider mt-4" />
        </Fade>

        {/* Category tabs */}
        <Fade className="mb-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCat(cat); setOpenIdx(null); }}
                className={`font-devanagari px-4 py-2 text-xs font-semibold rounded-sm border transition-all duration-200 ${
                  activeCat === cat
                    ? "bg-saffron-500 border-saffron-500 text-white"
                    : "bg-white border-stone-200 text-stone-500 hover:border-saffron-300 hover:text-saffron-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Fade>

        {/* Accordion */}
        <div className="max-w-3xl space-y-2">
          {filtered.map((item, i) => (
            <Fade key={`${activeCat}-${i}`} delay={0.04 * i}>
              <div className="border border-stone-100 rounded-sm overflow-hidden bg-white">
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-stone-50 transition-colors duration-200"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-devanagari text-[10px] font-bold text-saffron-500 border border-saffron-200 bg-saffron-50 px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5">
                      {item.cat}
                    </span>
                    <p className="font-devanagari font-medium text-stone-900 text-sm">{item.q}</p>
                  </div>
                  <div className="flex-shrink-0">
                    {openIdx === i
                      ? <Minus size={16} className="text-saffron-500" />
                      : <Plus  size={16} className="text-stone-400"   />
                    }
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {openIdx === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0 border-t border-stone-100">
                        <p className="font-devanagari text-stone-500 text-sm leading-relaxed mt-4">{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Fade>
          ))}
        </div>

      </div>
    </section>
  );
}
