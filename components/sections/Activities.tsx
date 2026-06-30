"use client";

import { Fade } from "@/lib/motion";
import {
  Landmark, Heart, Baby, Users, Flower2, BookOpen,
  Droplets, ShieldCheck, Palmtree, Wheat, Handshake, Truck,
} from "lucide-react";

const ACTIVITIES = [
  { Icon: Landmark,   title: "Fort Conservation & Heritage",     desc: "Preserving Maharashtra's glorious forts and historical sites through cleaning drives, restoration efforts and public awareness campaigns." },
  { Icon: Heart,      title: "Cow Protection & Goshala",         desc: "Supporting goshala development, veterinary services and awareness programmes dedicated to the protection and care of cows."              },
  { Icon: Baby,       title: "Orphanage Support",                desc: "Providing basic necessities, emotional support, educational materials and joy to orphaned children across Maharashtra."                   },
  { Icon: Users,      title: "Senior Citizens Support",          desc: "Delivering essential supplies, companionship and medical assistance to elderly residents in old age homes statewide."                    },
  { Icon: Flower2,    title: "Naturopathy & Holistic Wellness",  desc: "Promoting natural healing through naturopathy camps, yoga sessions and health awareness programmes."                                     },
  { Icon: BookOpen,   title: "Educational Support",              desc: "Providing school supplies, scholarships and educational resources to underprivileged children and rural communities."                    },
  { Icon: Droplets,   title: "Blood Donation",                   desc: "Organising regular blood donation camps across districts — saving countless lives and fostering a culture of voluntary donation."        },
  { Icon: ShieldCheck,title: "Free Medical Camps",               desc: "Conducting free health check-up camps in rural areas to bring quality healthcare to those who need it most."                            },
  { Icon: Palmtree,   title: "Tree Plantation",                  desc: "Planting thousands of trees across Maharashtra to combat deforestation and create a greener, healthier environment."                    },
  { Icon: Wheat,      title: "Food Distribution",                desc: "Supplying nutritious meals and food kits to underprivileged families, disaster-affected communities and daily wage workers."             },
  { Icon: Handshake,  title: "Community Welfare",                desc: "Supporting village development, disaster relief and marginalised communities through targeted outreach and collective action."           },
  { Icon: Truck,      title: "Road Safety & Transport Welfare",  desc: "Promoting road safety awareness, supporting transport drivers and vehicle owners, advocating for transporter welfare, and working towards policies that protect the interests of the transport community while encouraging safe and responsible transportation practices." },
];

export default function Activities() {
  return (
    <section id="activities" className="bg-stone-50" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
      <div style={{ maxWidth: 1460, marginLeft: "auto", marginRight: "auto", paddingLeft: "2rem", paddingRight: "2rem" }}>

        {/* Header */}
        <Fade className="mb-14">
          <span className="badge-saffron">Areas of Work</span>
          <h2 className="section-heading mt-5 max-w-2xl">
            Our Major <span className="text-saffron-500">Initiatives</span>
          </h2>
          <div className="divider mt-4" />
          <p className="text-stone-500 mt-4 max-w-xl leading-relaxed" style={{ fontSize: "1.2rem" }}>
            From heritage conservation to healthcare, our programmes touch every dimension
            of community life across all 36 districts of Maharashtra.
          </p>
        </Fade>

        {/* 4-column grid — 12 items = 3 perfect rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ACTIVITIES.map(({ Icon, title, desc }, i) => (
            <Fade key={title} delay={0.04 * (i % 4)}>
              <div className="group border border-stone-200 rounded-xl bg-white h-full flex flex-col gap-5 hover:border-saffron-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" style={{ padding: "2rem" }}>

                {/* Icon */}
                <div className="w-13 h-13 rounded-lg bg-saffron-50 border border-saffron-100 flex items-center justify-center flex-shrink-0 group-hover:bg-saffron-500 transition-colors duration-300" style={{ width: 52, height: 52 }}>
                  <Icon size={24} className="text-saffron-500 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-stone-900 leading-snug" style={{ fontSize: "1.15rem" }}>{title}</h3>
                  <p className="text-stone-500 leading-relaxed" style={{ fontSize: "1rem" }}>{desc}</p>
                </div>

              </div>
            </Fade>
          ))}
        </div>

      </div>
    </section>
  );
}
