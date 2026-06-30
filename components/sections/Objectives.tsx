"use client";

import { Fade } from "@/lib/motion";
import {
  Landmark, Flag, Heart, Leaf, Baby, Users,
  Flower2, Zap, BookOpen, Award, Package, Home,
} from "lucide-react";

const OBJECTIVES = [
  { Icon: Landmark,  num: "०१", title: "वारसा संवर्धन",           desc: "महाराष्ट्राच्या ऐतिहासिक किल्ल्यांचे, स्मारकांचे आणि सांस्कृतिक वारसा स्थळांचे भावी पिढ्यांसाठी संरक्षण व जतन करणे."              },
  { Icon: Flag,      num: "०२", title: "किल्ले सफाई मोहिमा",      desc: "आमच्या पूर्वजांच्या ऐतिहासिक ठेव्याची प्रतिष्ठा आणि सौंदर्य टिकवण्यासाठी नियमित स्वयंसेवक किल्ले सफाई मोहिमा आयोजित करणे."   },
  { Icon: Heart,     num: "०३", title: "गोसंरक्षण",               desc: "बचाव, उपचार आणि समर्पित गौसेवा कार्यक्रमांद्वारे गायींचे कल्याण आणि संरक्षण सुनिश्चित करणे."                                    },
  { Icon: Leaf,      num: "०४", title: "गोशाळा व्यवस्थापन",       desc: "सुटलेल्या आणि बेघर गायींना कायमस्वरूपी आश्रय, काळजी आणि पोषण देण्यासाठी गोशाळांची स्थापना व व्यवस्थापन करणे."             },
  { Icon: Baby,      num: "०५", title: "अनाथ सेवा",               desc: "महाराष्ट्रातील अनाथ मुलांना प्रेम, शिक्षण, पोषण आणि सुरक्षित वातावरण प्रदान करणे."                                           },
  { Icon: Users,     num: "०६", title: "ज्येष्ठ नागरिक कल्याण",   desc: "वृद्धाश्रमातील वृद्धांना नियमित भेट, वैद्यकीय सहाय्य आणि भावनिक आधाराद्वारे त्यांचे कल्याण करणे."                            },
  { Icon: Flower2,   num: "०७", title: "निसर्गोपचार केंद्रे",     desc: "समुदायांना नैसर्गिक उपचार, योग आणि प्रतिबंधात्मक आरोग्यसेवा उपलब्ध करणारी निसर्गोपचार व आरोग्य केंद्रे स्थापन करणे."   },
  { Icon: Zap,       num: "०८", title: "युवा नेतृत्व प्रशिक्षण",  desc: "YLTP कार्यक्रमाद्वारे महाराष्ट्रात एक लाख युवा नेते विकसित करणे."                                                            },
  { Icon: BookOpen,  num: "०९", title: "शैक्षणिक सहाय्य",         desc: "वंचित विद्यार्थ्यांना त्यांची स्वप्ने साकारण्यास मदत करण्यासाठी आर्थिक सहाय्य, मार्गदर्शन आणि अभ्यास साहित्य पुरवणे."     },
  { Icon: Award,     num: "१०", title: "शिष्यवृत्ती कार्यक्रम",   desc: "ग्रामीण आणि वंचित पार्श्वभूमीच्या गुणवंत आणि गरजू विद्यार्थ्यांना गुणवत्ता-आधारित आणि गरज-आधारित शिष्यवृत्ती प्रदान करणे."  },
  { Icon: Package,   num: "११", title: "शालेय साहित्य वाटप",       desc: "मूलभूत शैक्षणिक गरजा पूर्ण करू न शकणाऱ्या मुलांना पुस्तके, दप्तरे, लेखन साहित्य आणि गणवेश देणे."                          },
  { Icon: Home,      num: "१२", title: "ग्रामविकास",               desc: "पायाभूत सुविधा समर्थन, कौशल्य प्रशिक्षण आणि सामुदायिक सशक्तीकरणाद्वारे ग्रामीण महाराष्ट्राचा शाश्वत विकास घडवणे."         },
];

export default function Objectives() {
  return (
    <section id="objectives" className="section-pad bg-stone-50">
      <div className="container-site">

        <Fade className="text-center mb-14">
          <span className="badge-saffron font-devanagari">आमचा उद्देश</span>
          <h2 className="font-devanagari section-heading mt-5">
            आमची <span className="text-saffron-500">उद्दिष्टे</span>
          </h2>
          <div className="divider divider-center mt-4" />
          <p className="font-devanagari text-stone-500 mt-5 max-w-2xl mx-auto text-sm leading-relaxed">
            शिवभक्त प्रतिष्ठाणचा प्रत्येक उपक्रम स्पष्ट आणि उद्देशपूर्ण ध्येयांवर आधारित आहे —
            जे आमची मूल्ये दीर्घकालीन सामाजिक बदलात रूपांतरित करतात.
          </p>
        </Fade>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {OBJECTIVES.map(({ Icon, title, desc, num }, i) => (
            <Fade key={title} delay={0.04 * (i % 3)}>
              <div className="bg-white border border-stone-100 rounded-md p-6 hover:shadow-md hover:border-saffron-200 transition-all duration-300 h-full relative overflow-hidden group">
                <span
                  className="absolute top-3 right-4 font-bold text-stone-100 group-hover:text-saffron-50 transition-colors font-devanagari"
                  style={{ fontSize: "3rem", lineHeight: 1, userSelect: "none" }}
                >
                  {num}
                </span>
                <div className="w-11 h-11 rounded-sm bg-saffron-50 border border-saffron-100 flex items-center justify-center mb-4 group-hover:bg-saffron-500 transition-colors duration-300">
                  <Icon size={20} className="text-saffron-500 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-devanagari font-semibold text-stone-900 text-sm mb-2">{title}</h3>
                <p className="font-devanagari text-stone-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </Fade>
          ))}
        </div>

      </div>
    </section>
  );
}
