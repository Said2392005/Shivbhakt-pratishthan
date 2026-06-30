"use client";

import { Fade } from "@/lib/motion";
import { Target, Users, Handshake, Zap, TrendingUp } from "lucide-react";

const STEPS = [
  {
    Icon: Target,
    step: "०१",
    title: "नियोजन",
    desc:  "प्रत्येक उपक्रमाची सुरुवात सखोल सामुदायिक संशोधन, गरजांचे मूल्यांकन आणि धोरणात्मक नियोजनाने होते — कोणतीही कृती करण्यापूर्वी स्पष्ट उद्दिष्टे आणि मोजता येणारे परिणाम निश्चित केले जातात.",
  },
  {
    Icon: Users,
    step: "०२",
    title: "स्वयंसेवक जमवाजमव",
    desc:  "आम्ही आमच्या राज्यव्यापी समर्पित स्वयंसेवकांचे जाळे सक्रिय करतो — त्यांना प्रशिक्षण देतो, माहिती देतो आणि खरा फरक घडवण्यासाठी आवश्यक ज्ञान व साधनांनी सज्ज करतो.",
  },
  {
    Icon: Handshake,
    step: "०३",
    title: "सामुदायिक सहभाग",
    desc:  "स्थानिक समुदाय प्रत्येक कार्यक्रमाच्या केंद्रस्थानी असतात. आम्ही ज्यांची सेवा करतो त्यांचे ऐकतो, सहकार्य करतो आणि त्यांच्यासोबत उपाय शोधतो — शाश्वतता आणि स्वामित्व सुनिश्चित करत.",
  },
  {
    Icon: Zap,
    step: "०४",
    title: "अंमलबजावणी",
    desc:  "अचूकता आणि उत्साहाने, आमचे स्वयंसेवक आणि कार्यसंघ प्रत्येक कार्यक्रम राबवतात — रक्तदान शिबिरे आणि किल्ले सफाईपासून YLTP सत्रे आणि अन्नदानापर्यंत.",
  },
  {
    Icon: TrendingUp,
    step: "०५",
    title: "प्रभावाचे मूल्यांकन",
    desc:  "प्रत्येक उपक्रमानंतर, आम्ही परिणाम मोजतो, अभिप्राय गोळा करतो आणि प्रभावाची नोंद करतो. हे शिक्षण आमचा दृष्टिकोन सतत सुधारते आणि सामुदायिक संबंध दृढ करते.",
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="section-pad bg-white">
      <div className="container-site">

        <Fade className="mb-14">
          <span className="badge-saffron font-devanagari">आमची कार्यपद्धती</span>
          <h2 className="font-devanagari section-heading mt-5 max-w-2xl">
            आम्ही कसे <span className="text-saffron-500">काम करतो</span>
          </h2>
          <div className="divider mt-4" />
          <p className="font-devanagari text-stone-500 mt-4 max-w-lg text-sm leading-relaxed">
            शिस्तबद्ध, समुदायकेंद्रित प्रक्रिया सुनिश्चित करते की आमचा प्रत्येक कार्यक्रम
            अर्थपूर्ण, मोजता येणारा आणि दीर्घकालीन प्रभाव निर्माण करतो.
          </p>
        </Fade>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-stone-200 -translate-x-1/2" />

          <div className="flex flex-col gap-0">
            {STEPS.map(({ Icon, step, title, desc }, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Fade key={step} delay={0.08 * i}>
                  <div className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-6 py-10 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}>

                    <div className={`lg:w-[46%] ${isLeft ? "lg:text-right" : "lg:text-left"}`}>
                      <div className={`bg-stone-50 border border-stone-100 rounded-md p-6 hover:shadow-md hover:border-saffron-200 transition-all duration-300 ${isLeft ? "lg:ml-auto" : ""}`}>
                        <p className="font-devanagari text-saffron-500 text-xs font-bold tracking-widest mb-2">टप्पा {step}</p>
                        <h3 className="font-devanagari font-semibold text-stone-900 text-lg mb-2">{title}</h3>
                        <p className="font-devanagari text-stone-500 text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>

                    <div className="hidden lg:flex w-[8%] items-center justify-center flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-saffron-500 flex items-center justify-center shadow-lg z-10 relative">
                        <Icon size={22} className="text-white" strokeWidth={1.5} />
                      </div>
                    </div>

                    <div className="hidden lg:block lg:w-[46%]" />

                    <div className="flex lg:hidden items-center gap-4 w-full">
                      <div className="w-10 h-10 rounded-full bg-saffron-500 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-white" strokeWidth={1.5} />
                      </div>
                      <span className="font-devanagari text-saffron-500 text-xs font-bold tracking-widest">टप्पा {step}</span>
                    </div>

                  </div>
                </Fade>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
