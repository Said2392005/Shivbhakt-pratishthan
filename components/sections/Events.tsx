"use client";

import { Fade } from "@/lib/motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

const EVENTS = [
  {
    id: 1,
    type: "Blood Donation",
    typeMr: "रक्तदान",
    title: "Grand Blood Donation Camp",
    titleMr: "महा रक्तदान शिबीर",
    date: "15 July 2026",
    day: "15",
    month: "JUL",
    time: "9:00 AM – 4:00 PM",
    location: "Shivaji Nagar, Pune",
    desc: "Join us for our biggest blood donation drive of the year. All blood groups needed. Free health check-up for all donors.",
    color: "bg-red-50 border-red-100",
    badge: "bg-red-100 text-red-700",
  },
  {
    id: 2,
    type: "Tree Plantation",
    typeMr: "वृक्षारोपण",
    title: "Hariali Abhiyan 2026",
    titleMr: "हरियाली अभियान २०२६",
    date: "5 August 2026",
    day: "05",
    month: "AUG",
    time: "7:00 AM – 12:00 PM",
    location: "Sinhagad Road, Pune",
    desc: "Mass tree plantation drive targeting 10,000 saplings in a single morning. Join 500+ volunteers for a greener Maharashtra.",
    color: "bg-green-50 border-green-100",
    badge: "bg-green-100 text-green-700",
  },
  {
    id: 3,
    type: "Medical Camp",
    typeMr: "आरोग्य शिबीर",
    title: "Free Health Check-up Camp",
    titleMr: "मोफत आरोग्य तपासणी",
    date: "20 July 2026",
    day: "20",
    month: "JUL",
    time: "8:00 AM – 2:00 PM",
    location: "Nagpur Community Hall",
    desc: "Free consultation with 20+ specialist doctors. Eye check-up, dental care, diabetes screening, and general health check-up.",
    color: "bg-blue-50 border-blue-100",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    id: 4,
    type: "Youth Camp",
    typeMr: "युवा शिबीर",
    title: "Youth Leadership Workshop",
    titleMr: "युवा नेतृत्व कार्यशाळा",
    date: "10 August 2026",
    day: "10",
    month: "AUG",
    time: "10:00 AM – 6:00 PM",
    location: "Aurangabad Sports Complex",
    desc: "Two-day leadership and personality development camp for youth aged 18–30. Expert trainers, networking, and hands-on activities.",
    color: "bg-amber-50 border-amber-100",
    badge: "bg-amber-100 text-amber-700",
  },
  {
    id: 5,
    type: "Festival",
    typeMr: "उत्सव",
    title: "Shiv Jayanti Mahotsav 2026",
    titleMr: "शिव जयंती महोत्सव २०२६",
    date: "19 February 2027",
    day: "19",
    month: "FEB",
    time: "6:00 AM onwards",
    location: "Raigad Fort, Maharashtra",
    desc: "Annual Shiv Jayanti celebration with grand procession, cultural programs, and tribute to Chhatrapati Shivaji Maharaj.",
    color: "bg-orange-50 border-orange-100",
    badge: "bg-orange-100 text-orange-700",
  },
  {
    id: 6,
    type: "Social Work",
    typeMr: "समाजकार्य",
    title: "Food Distribution Seva",
    titleMr: "अन्नदान सेवा",
    date: "1 August 2026",
    day: "01",
    month: "AUG",
    time: "11:00 AM – 3:00 PM",
    location: "Mumbai Dharavi",
    desc: "Monthly food distribution drive serving 2,000+ meals to homeless and underprivileged families. Volunteers welcome.",
    color: "bg-purple-50 border-purple-100",
    badge: "bg-purple-100 text-purple-700",
  },
];

export default function Events() {
  return (
    <section id="events" className="section-pad bg-stone-50">
      <div className="container-site">
        {/* Header */}
        <Fade className="max-w-2xl mb-12">
          <span className="badge-saffron">Upcoming Events</span>
          <h2 className="section-heading mt-4">Join Our Next Initiative</h2>
          <p className="font-devanagari text-stone-400 text-sm mt-1 mb-3">आगामी कार्यक्रम</p>
          <div className="divider" />
          <p className="text-stone-500 mt-4 leading-relaxed">
            Be part of the change. Register for upcoming drives, camps, and celebrations
            happening across Maharashtra.
          </p>
        </Fade>

        {/* Events grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {EVENTS.map((ev, i) => (
            <Fade key={ev.id} delay={0.05 * (i % 3)}>
              <div className={`card group border ${ev.color} flex flex-col h-full`}>
                <div className="p-5 flex gap-4">
                  {/* Date block */}
                  <div className="flex-shrink-0 text-center">
                    <div className="bg-saffron-500 text-white rounded-md w-14 px-2 py-2 shadow-sm">
                      <p className="text-2xl font-extrabold leading-none font-poppins">{ev.day}</p>
                      <p className="text-[10px] font-bold tracking-widest mt-0.5 text-saffron-100">{ev.month}</p>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-sm ${ev.badge}`}>
                      {ev.type}
                    </span>
                    <h3 className="font-semibold text-stone-900 text-sm mt-2 leading-snug">{ev.title}</h3>
                    <p className="font-devanagari text-stone-400 text-xs mt-0.5">{ev.titleMr}</p>
                  </div>
                </div>

                <div className="px-5 pb-4 flex-1 flex flex-col">
                  <p className="text-stone-500 text-xs leading-relaxed mb-3">{ev.desc}</p>
                  <div className="mt-auto space-y-1.5 pt-3 border-t border-stone-100/80">
                    <div className="flex items-center gap-2 text-stone-400 text-xs">
                      <Clock size={12} className="text-saffron-400 flex-shrink-0" />
                      {ev.time}
                    </div>
                    <div className="flex items-center gap-2 text-stone-400 text-xs">
                      <MapPin size={12} className="text-saffron-400 flex-shrink-0" />
                      {ev.location}
                    </div>
                    <div className="flex items-center gap-2 text-stone-400 text-xs">
                      <Calendar size={12} className="text-saffron-400 flex-shrink-0" />
                      {ev.date}
                    </div>
                  </div>
                  <button className="mt-4 w-full flex items-center justify-center gap-2 text-xs font-semibold text-saffron-500 border border-saffron-200 rounded-sm py-2 hover:bg-saffron-500 hover:text-white hover:border-saffron-500 transition-all duration-200">
                    Register Interest
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
