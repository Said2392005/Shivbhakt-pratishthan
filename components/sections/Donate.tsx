"use client";

import { Fade } from "@/lib/motion";
import { Heart, ShieldCheck, TrendingUp, Users, ArrowRight, CheckCircle } from "lucide-react";

const WHY = [
  { Icon: Heart,       title: "थेट परिणाम",          desc: "प्रत्येक रुपया थेट सामुदायिक कार्यक्रमांसाठी वापरला जातो — शिक्षण, आरोग्यसेवा आणि सहाय्यासाठी." },
  { Icon: ShieldCheck, title: "पूर्ण पारदर्शकता",     desc: "सर्व देणग्यांचा मागोवा घेतला जातो, लेखापरीक्षण केले जाते आणि अहवाल दिला जातो. तुमचे पैसे कुठे जातात हे तुम्हाला नेहमी माहीत असते." },
  { Icon: TrendingUp,  title: "दीर्घकालीन बदल",       desc: "आम्ही महाराष्ट्रभरातील समुदायांसाठी चिरस्थायी मूल्य निर्माण करणाऱ्या शाश्वत प्रकल्पांमध्ये गुंतवणूक करतो." },
  { Icon: Users,       title: "स्वयंसेवकचालित संस्था", desc: "आमचा कमी परिचालन खर्च म्हणजे तुमची देणगी सर्वाधिक गरजूंपर्यंत अधिक प्रमाणात पोहोचते." },
];

const HOW = [
  { pct: "40%", label: "युवा आणि शिक्षण",           color: "#E67E22" },
  { pct: "25%", label: "आरोग्यसेवा आणि वैद्यकीय",   color: "#CF6D17" },
  { pct: "20%", label: "वारसा आणि पर्यावरण",         color: "#3D2B1F" },
  { pct: "10%", label: "आपत्कालीन मदत",              color: "#8a4028" },
  { pct: "5%",  label: "परिचालन",                    color: "#D4CFBF" },
];

export default function Donate() {
  return (
    <section id="donate" className="section-pad bg-white">
      <div className="container-site">

        <Fade className="mb-14">
          <span className="badge-saffron font-devanagari">आमच्या ध्येयाला पाठिंबा द्या</span>
          <h2 className="font-devanagari section-heading mt-5 max-w-2xl">
            <span className="text-saffron-500">देणगी</span> द्या
          </h2>
          <div className="divider mt-4" />
          <p className="font-devanagari text-stone-500 mt-4 max-w-lg text-sm leading-relaxed">
            तुमची उदारता आमच्या प्रत्येक कार्याला शक्ती देते — कुटुंबांना जेवण देण्यापासून ते
            मुलांना शिक्षण देण्यापर्यंत, किल्ले जपण्यापासून ते भावी नेते घडवण्यापर्यंत.
          </p>
        </Fade>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Why Donate */}
          <Fade dir="left">
            <h3 className="font-devanagari font-semibold text-stone-900 mb-6">देणगी का द्यावी?</h3>
            <div className="space-y-4">
              {WHY.map(({ Icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-4 border border-stone-100 rounded-sm bg-stone-50/60 hover:border-saffron-200 transition-colors">
                  <div className="w-10 h-10 rounded-sm bg-saffron-50 border border-saffron-100 flex items-center justify-center flex-shrink-0">
                    <Icon size={17} className="text-saffron-500" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-devanagari font-medium text-stone-900 text-sm">{title}</p>
                    <p className="font-devanagari text-stone-500 text-xs leading-relaxed mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-saffron font-devanagari">
                आता देणगी द्या <ArrowRight size={15} />
              </a>
              <a href="#contact" className="btn font-devanagari" style={{ border: "1.5px solid #3D2B1F", color: "#3D2B1F" }}>
                भागीदार व्हा
              </a>
            </div>
          </Fade>

          {/* How Funds Are Used */}
          <Fade dir="right" delay={0.1}>
            <h3 className="font-devanagari font-semibold text-stone-900 mb-6">निधी कसा वापरला जातो?</h3>

            <div className="space-y-3 mb-8">
              {HOW.map(({ pct, label, color }) => (
                <div key={label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-devanagari text-stone-600">{label}</span>
                    <span className="font-semibold text-stone-900">{pct}</span>
                  </div>
                  <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: pct, background: color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 bg-stone-50 border border-stone-100 rounded-md">
              <div className="flex items-start gap-3">
                <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                <p className="font-devanagari text-stone-600 text-sm leading-relaxed">
                  सर्व आर्थिक नोंदींचे स्वतंत्रपणे लेखापरीक्षण केले जाते आणि वार्षिक प्रकाशित केले जाते.
                  आम्ही आर्थिक पारदर्शकतेच्या सर्वोच्च मानकांशी बांधील आहोत.
                </p>
              </div>
            </div>

            <div className="mt-5 p-5 rounded-md border border-saffron-200 bg-saffron-50">
              <p className="font-devanagari text-saffron-800 text-sm leading-relaxed">
                <strong>आगामी प्रकल्प</strong> — गोशाळा, वृद्धाश्रम, अनाथाश्रम आणि निसर्गोपचार केंद्र
                यांसाठी दीर्घकालीन लोकोपकारी पाठिंब्याची आवश्यकता आहे.
              </p>
            </div>
          </Fade>

        </div>
      </div>
    </section>
  );
}
