"use client";

import { Fade } from "@/lib/motion";
import { Flag, Users, Home, CheckCircle } from "lucide-react";

const PHASES = [
  {
    Icon: Flag,
    phase: "टप्पा १",
    title: "स्थापना",
    color: "#E67E22",
    items: [
      "संस्था नोंदणी",
      "ब्रँडिंग आणि ओळख",
      "संकेतस्थळ प्रारंभ",
      "सोशल मीडिया उपस्थिती",
    ],
    status: "Completed",
    statusMr: "पूर्ण",
  },
  {
    Icon: Users,
    phase: "टप्पा २",
    title: "सामुदायिक कार्यक्रम",
    color: "#CF6D17",
    items: [
      "किल्ले सफाई मोहिमा",
      "शैक्षणिक सहाय्य अभियान",
      "रक्तदान शिबिरे",
      "स्वयंसेवक जमवाजमव",
    ],
    status: "Ongoing",
    statusMr: "प्रगतीपथावर",
  },
  {
    Icon: Home,
    phase: "टप्पा ३",
    title: "दीर्घकालीन प्रकल्प",
    color: "#3D2B1F",
    items: [
      "गोशाळा स्थापना",
      "वृद्धाश्रम सहाय्य",
      "अनाथाश्रम प्रकल्प",
      "निसर्गोपचार केंद्र",
      "CSR भागीदारी",
    ],
    status: "Upcoming",
    statusMr: "आगामी",
  },
];

const statusStyle: Record<string, string> = {
  Completed: "bg-green-50 text-green-700 border-green-200",
  Ongoing:   "bg-saffron-50 text-saffron-600 border-saffron-200",
  Upcoming:  "bg-stone-100 text-stone-500 border-stone-200",
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-pad bg-white">
      <div className="container-site">

        <Fade className="text-center mb-14">
          <span className="badge-saffron font-devanagari">आमचे ध्येय</span>
          <h2 className="font-devanagari section-heading mt-5">
            संस्थेचा <span className="text-saffron-500">आराखडा</span>
          </h2>
          <div className="divider divider-center mt-4" />
          <p className="font-devanagari text-stone-500 mt-5 max-w-xl mx-auto text-sm leading-relaxed">
            स्थापनेपासून ते दीर्घकालीन सामाजिक प्रभावापर्यंत — तीन टप्प्यांचा स्पष्ट आराखडा
            महाराष्ट्रभर आमच्या कार्याला दिशा देतो.
          </p>
        </Fade>

        {/* Horizontal connector line (desktop) */}
        <div className="relative">
          <div className="hidden lg:block absolute top-[3.25rem] left-[16.5%] right-[16.5%] h-[2px] bg-stone-200" />

          <div className="grid lg:grid-cols-3 gap-6">
            {PHASES.map(({ Icon, phase, title, color, items, status, statusMr }, i) => (
              <Fade key={phase} delay={0.1 * i}>
                <div className="flex flex-col h-full">

                  {/* Phase indicator */}
                  <div className="flex flex-col items-center mb-6">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center shadow-md z-10 relative"
                      style={{ background: color }}
                    >
                      <Icon size={22} className="text-white" strokeWidth={1.5} />
                    </div>
                    <p className="font-devanagari text-xs font-bold uppercase tracking-widest mt-3" style={{ color }}>
                      {phase}
                    </p>
                  </div>

                  {/* Card */}
                  <div className="bg-stone-50 border border-stone-100 rounded-md p-6 flex-1 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-devanagari font-semibold text-stone-900">{title}</h3>
                      <span className={`font-devanagari text-[10px] font-semibold px-2 py-0.5 rounded-full border ${statusStyle[status]}`}>
                        {statusMr}
                      </span>
                    </div>
                    <ul className="space-y-2.5">
                      {items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-stone-500">
                          <CheckCircle size={14} className="text-saffron-500 flex-shrink-0 mt-0.5" />
                          <span className="font-devanagari">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </Fade>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
