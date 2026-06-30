"use client";

import { Camera, Share2 } from "lucide-react";
import { Fade } from "@/lib/motion";

const SOCIALS = [
  { icon: Camera, label: "Instagram", handle: "@aniketghule3630", href: "https://www.instagram.com/aniketghule3630" },
  { icon: Share2,  label: "Facebook",  handle: "Shivbhakt Pratishthan", href: "https://www.facebook.com/share/1CrWBv7a2u/?mibextid=wwXIfr" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-stone-50" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
      <div className="container-site">

        <Fade className="text-center mb-10">
          <span className="badge-saffron">Follow Us</span>
          <h2 className="section-heading mt-4">
            Stay Connected <span className="text-saffron-500">With Us</span>
          </h2>
          <div className="divider divider-center mt-4" />
        </Fade>

        <Fade delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            {SOCIALS.map(({ icon: Icon, label, handle, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white border border-stone-200 rounded-xl px-8 py-5 hover:border-saffron-400 hover:shadow-lg transition-all duration-300"
                style={{ minWidth: 260 }}
              >
                <div className="w-12 h-12 rounded-xl bg-saffron-50 border border-saffron-100 flex items-center justify-center flex-shrink-0 group-hover:bg-saffron-500 transition-colors duration-300">
                  <Icon size={22} className="text-saffron-500 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-bold text-stone-900 text-base">{label}</p>
                  <p className="text-stone-400 text-sm mt-0.5">{handle}</p>
                </div>
              </a>
            ))}
          </div>
        </Fade>

      </div>
    </section>
  );
}
