"use client";

import { Fade } from "@/lib/motion";
import { ShieldCheck, ScrollText, Building2, CreditCard, Landmark, Award, Scale, Handshake } from "lucide-react";

const LEGAL = [
  {
    Icon: ScrollText,
    title: "दस्तऐवजीकरण",
    desc:  "सर्व संघटनात्मक दस्तऐवज, नियमावली आणि बैठक नोंदी पूर्ण पारदर्शकतेने आणि कायदेशीर अनुपालनासह ठेवल्या जातात.",
    status: "Complete",
    statusMr: "पूर्ण",
  },
  {
    Icon: Scale,
    title: "नियम आणि कायदे",
    desc:  "प्रशासन महाराष्ट्र पब्लिक ट्रस्ट अॅक्ट आणि सोसायटी नोंदणी कायद्यानुसार चालते — लोकशाही आणि नैतिक व्यवस्थापन सुनिश्चित करत.",
    status: "Complete",
    statusMr: "पूर्ण",
  },
  {
    Icon: Building2,
    title: "चॅरिटी कमिशनर नोंदणी",
    desc:  "महाराष्ट्राच्या चॅरिटी कमिशनरकडे सार्वजनिक धर्मादाय ट्रस्ट म्हणून संबंधित कायद्यांतर्गत नोंदणीकृत.",
    status: "Registered",
    statusMr: "नोंदणीकृत",
  },
  {
    Icon: CreditCard,
    title: "PAN कार्ड",
    desc:  "सर्व आर्थिक व्यवहारांसाठी स्थायी खाते क्रमांक जारी करण्यात आला आहे — आर्थिक पारदर्शकता आणि नियामक अनुपालन सुनिश्चित करत.",
    status: "Active",
    statusMr: "सक्रिय",
  },
  {
    Icon: Landmark,
    title: "चालू बँक खाते",
    desc:  "सर्व संस्थात्मक निधी, देणग्या आणि खर्चासाठी समर्पित चालू बँक खाते — वार्षिक पूर्ण लेखापरीक्षण केले जाते.",
    status: "Active",
    statusMr: "सक्रिय",
  },
  {
    Icon: ShieldCheck,
    title: "12A नोंदणी",
    desc:  "कलम 12A अंतर्गत आयकर सूट — संस्थेच्या उत्पन्नाला धर्मादाय ट्रस्ट म्हणून कराच्या बाहेर ठेवण्यास परवानगी देते.",
    status: "In Process",
    statusMr: "प्रक्रियेत",
  },
  {
    Icon: Award,
    title: "80G प्रमाणपत्र",
    desc:  "80G प्रमाणपत्र मिळाल्यावर शिवभक्त प्रतिष्ठाणला केलेल्या देणग्यांवर आयकर वजावट मिळण्यास देणगीदार पात्र ठरतात.",
    status: "In Process",
    statusMr: "प्रक्रियेत",
  },
  {
    Icon: Handshake,
    title: "CSR सज्जता",
    desc:  "CSR मार्गदर्शक तत्त्वांनुसार कॉर्पोरेट सामाजिक जबाबदारी भागीदारीसाठी पूर्णपणे तयार — कंपन्यांना आमचे कार्यक्रम निधी देण्यास सक्षम.",
    status: "Ready",
    statusMr: "तयार",
  },
];

const statusColor: Record<string, string> = {
  Complete:   "bg-green-50 text-green-700 border-green-200",
  Registered: "bg-green-50 text-green-700 border-green-200",
  Active:     "bg-blue-50  text-blue-700  border-blue-200",
  "In Process": "bg-amber-50 text-amber-700 border-amber-200",
  Ready:      "bg-saffron-50 text-saffron-600 border-saffron-200",
};

export default function LegalFramework() {
  return (
    <section id="legal" className="section-pad bg-stone-50">
      <div className="container-site">

        <Fade className="mb-14">
          <span className="badge-saffron font-devanagari">पारदर्शकता आणि विश्वास</span>
          <h2 className="font-devanagari section-heading mt-5 max-w-2xl">
            नोंदणी आणि <span className="text-saffron-500">कायदेशीर चौकट</span>
          </h2>
          <div className="divider mt-4" />
          <p className="font-devanagari text-stone-500 mt-4 max-w-xl text-sm leading-relaxed">
            आमची नोंदणी प्रक्रिया <strong className="text-stone-700 font-medium">महाराष्ट्र पब्लिक ट्रस्ट अॅक्ट</strong> आणि{" "}
            <strong className="text-stone-700 font-medium">सोसायटी नोंदणी कायद्यानुसार</strong> आहे — संपूर्ण कायदेशीर अनुपालन,
            आर्थिक पारदर्शकता आणि प्रशासनाची जबाबदारी सुनिश्चित करत.
          </p>
        </Fade>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {LEGAL.map(({ Icon, title, desc, status, statusMr }, i) => (
            <Fade key={title} delay={0.04 * (i % 4)}>
              <div className="bg-white border border-stone-100 rounded-md p-6 hover:shadow-md hover:border-saffron-200 transition-all duration-300 h-full flex flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 rounded-sm bg-saffron-50 border border-saffron-100 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-saffron-500" strokeWidth={1.5} />
                  </div>
                  <span className={`font-devanagari text-[10px] font-semibold px-2 py-0.5 rounded-full border ${statusColor[status] ?? ""}`}>
                    {statusMr}
                  </span>
                </div>
                <div>
                  <h3 className="font-devanagari font-semibold text-stone-900 text-sm mb-1.5">{title}</h3>
                  <p className="font-devanagari text-stone-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        <Fade className="mt-10">
          <div className="bg-brown-900 rounded-md p-6 sm:p-8 text-center">
            <p className="font-devanagari text-white/80 text-sm leading-relaxed max-w-2xl mx-auto">
              सर्व आर्थिक नोंदी पूर्ण पारदर्शकतेने ठेवल्या जातात. प्रत्येक देणगी आणि अनुदान
              जबाबदारीने वापरणे हे आमचे वचन आहे — ते ज्यांना सर्वाधिक गरज आहे त्यांच्यापर्यंत
              ते पोहोचेल याची खात्री करत.
            </p>
          </div>
        </Fade>

      </div>
    </section>
  );
}
