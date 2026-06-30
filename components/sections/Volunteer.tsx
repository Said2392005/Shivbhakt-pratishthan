"use client";

import { Fade } from "@/lib/motion";
import { Award, Users, Handshake, Heart, ArrowRight, CheckCircle } from "lucide-react";

const BENEFITS = [
  { Icon: Award,       title: "नेतृत्व",         desc: "वास्तविक जीवनातील नेतृत्व, संवाद आणि संघ-व्यवस्थापन कौशल्ये विकसित करा." },
  { Icon: CheckCircle, title: "प्रमाणपत्रे",     desc: "आपल्या सेवेसाठी अधिकृत सहभाग प्रमाणपत्रे आणि कौतुकपत्रे मिळवा." },
  { Icon: Users,       title: "नेटवर्किंग",      desc: "महाराष्ट्रभरातील १०,०००+ उत्साही स्वयंसेवक आणि समविचारी तरुणांशी जोडले व्हा." },
  { Icon: Heart,       title: "सामाजिक प्रभाव",  desc: "समुदायांमध्ये खऱ्या अर्थाने बदल घडवा — आणि देण्याचा आनंद अनुभवा." },
];

export default function Volunteer() {
  return (
    <section id="volunteer" className="section-pad" style={{ background: "#3D2B1F" }}>
      <div className="container-site">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left: CTA */}
          <Fade dir="left">
            <span className="badge-saffron font-devanagari">चळवळीत सहभागी व्हा</span>
            <h2 className="font-devanagari section-heading text-white mt-5">
              <span className="text-saffron-400">स्वयंसेवक</span> व्हा
            </h2>
            <div className="divider mt-4" style={{ background: "#E67E22" }} />
            <p className="font-devanagari text-white/65 mt-5 leading-relaxed text-sm max-w-md">
              हजारो उत्साही तरुणांसोबत सामील व्हा जे आपल्या समुदायाची सेवा करत आहेत,
              नेतृत्व शिकत आहेत आणि एक सशक्त महाराष्ट्र उभारत आहेत — एका वेळी एक सेवाकार्य.
            </p>
            <p className="font-devanagari text-white/65 text-sm leading-relaxed mt-4">
              आठवड्यातून एक तास असो वा महिन्यातून एक वीकेंड — आपल्या प्रत्येक क्षणाचा
              खरा परिणाम होतो. शिवभक्त प्रतिष्ठाण तुमचे मनःपूर्वक स्वागत करते.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#contact" className="btn btn-saffron font-devanagari">
                आता सहभागी व्हा <ArrowRight size={15} />
              </a>
              <a href="#about" className="btn btn-outline-white font-devanagari">
                अधिक जाणून घ्या
              </a>
            </div>
          </Fade>

          {/* Right: Benefits */}
          <Fade dir="right" delay={0.1}>
            <div className="grid sm:grid-cols-2 gap-4">
              {BENEFITS.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="p-5 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-sm bg-saffron-500/20 border border-saffron-400/30 flex items-center justify-center mb-3">
                    <Icon size={18} className="text-saffron-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-devanagari font-semibold text-white text-sm mb-1.5">{title}</h3>
                  <p className="font-devanagari text-white/55 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 p-5 rounded-md border border-saffron-500/30 bg-saffron-500/10">
              <p className="font-devanagari text-white/80 text-sm leading-relaxed">
                महाराष्ट्रभरातील <span className="text-saffron-400 font-semibold">१०,०००+ स्वयंसेवक</span> आधीच
                सहभागी झाले आहेत. तुमच्या समुदायात फरक घडवणारे पुढचे तुम्ही व्हा.
              </p>
            </div>
          </Fade>

        </div>
      </div>
    </section>
  );
}
