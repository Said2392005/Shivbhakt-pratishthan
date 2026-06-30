"use client";

import { Fade } from "@/lib/motion";

const MEMBERS: {
  name: string;
  role: string;
  desc: string;
  photo?: string;
}[] = [
  { name: "Aniket Anant Ghule", role: "Founder & President",      photo: "/aniket-ghule.png", desc: "The visionary founder and driving force behind Shivbhakt Pratishthan's statewide volunteer movement."   },
  { name: "Atul Dhumal",        role: "Vice President",                                        desc: "Oversees strategic planning and coordination of major community programmes across Maharashtra."           },
  { name: "Sagar Shelar",       role: "Vice President",                                        desc: "Manages volunteer coordination and drives district-level expansion of the organisation."                  },
  { name: "Mangesh Lomte",      role: "Secretary",                                             desc: "Handles day-to-day administration, documentation and operational management of the trust."               },
  { name: "Ranjit Patil",       role: "Joint Secretary",                                       desc: "Assists office operations and actively contributes to programme planning and execution."                 },
  { name: "Vitthal Shelke",     role: "Treasurer",                                             desc: "Responsible for financial management, fund allocation and transparent reporting."                        },
  { name: "Bipin Ghadge",       role: "Chief Organiser & YLTP Teacher",                         desc: "Leads large-scale campaigns, event planning and volunteer mobilisation statewide."                      },
  { name: "Aniket Tapkir",      role: "Co-organiser",                                          desc: "Coordinates field operations and works to enhance community participation and outreach."                 },
  { name: "Yogesh Holkar",      role: "Head of Public Relations",                              desc: "Manages media representation, public communications and brand visibility of the organisation."           },
  { name: "Adv. Sandeep Rane",  role: "Legal Advisor & Trustee",                               desc: "Provides legal counsel, ensures regulatory compliance and represents the trust in legal matters."        },
  { name: "Kiran Malekar",      role: "Trustee",                                               desc: "Guides organisational governance and ensures ethical conduct across all activities."                     },
  { name: "Navnath Chavan",     role: "Trustee",                                               desc: "Contributes to strategic decisions and supports long-term development of the trust."                    },
  { name: "Rahul Ghule",        role: "Trustee",                                               desc: "Assists trust governance and actively participates in programme planning."                               },
];

function initials(name: string) {
  return name
    .replace(/^Adv\.\s*/i, "")
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

const PALETTE = [
  "#E67E22", "#CF6D17", "#3D2B1F", "#8a4028",
  "#E67E22", "#CF6D17", "#3D2B1F", "#8a4028",
  "#E67E22", "#CF6D17", "#3D2B1F", "#8a4028",
  "#3D2B1F",
];

export default function Leadership() {
  return (
    <section id="leadership" className="bg-white" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>

      <style>{`
        .leadership-card {
          flex: 0 0 calc((100% - 4 * 1.5rem) / 5);
          min-width: 0;
        }
        @media (max-width: 1023px) {
          .leadership-card { flex: 0 0 calc((100% - 2 * 1.5rem) / 3); }
        }
        @media (max-width: 639px) {
          .leadership-card { flex: 0 0 100%; }
        }
      `}</style>

      <div style={{ maxWidth: 1600, marginLeft: "auto", marginRight: "auto", paddingLeft: "2rem", paddingRight: "2rem" }}>

        {/* Header */}
        <Fade className="text-center mb-6">
          <span className="badge-saffron">Leadership & Executive Committee</span>
          <h2 className="section-heading mt-5">
            The People Behind <span className="text-saffron-500">Our Mission</span>
          </h2>
          <div className="divider divider-center mt-5" />
        </Fade>

        {/* Subtitle — standalone centred row */}
        <div style={{ width: "100%", textAlign: "center", marginBottom: "3.5rem", marginTop: "1.25rem", paddingLeft: "1rem", paddingRight: "1rem" }}>
          <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.2rem)", color: "#857D72", maxWidth: 700, margin: "0 auto" }}>
            Led by experienced community leaders and trustees, our executive committee steers Shivbhakt Pratishthan towards an empowered Maharashtra.
          </p>
        </div>

        {/* 5-column flex grid — last row auto-centers */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem" }}>
          {MEMBERS.map((m, i) => (
            <Fade key={m.name} delay={0.03 * (i % 5)} className="leadership-card">
              <div
                className="bg-white border border-stone-100 rounded-2xl flex flex-col items-center text-center h-full"
                style={{
                  padding: "2.25rem 1.75rem",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = "0 20px 52px rgba(0,0,0,0.11)";
                  el.style.borderColor = "#fad8a4";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
                  el.style.borderColor = "#f5f5f0";
                }}
              >
                {/* Avatar */}
                {m.photo ? (
                  <div
                    className="rounded-full overflow-hidden bg-stone-900 flex-shrink-0"
                    style={{ width: 96, height: 96, border: "3px solid #E8E5DC" }}
                  >
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center top" }}
                    />
                  </div>
                ) : (
                  <div
                    className="rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold"
                    style={{
                      width: 96,
                      height: 96,
                      fontSize: "1.5rem",
                      background: PALETTE[i % PALETTE.length],
                      boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                    }}
                  >
                    {initials(m.name)}
                  </div>
                )}

                {/* Name */}
                <p
                  className="text-stone-900 leading-snug mt-5"
                  style={{ fontSize: "clamp(1.2rem, 1.5vw, 1.4rem)", fontWeight: 800 }}
                >
                  {m.name}
                </p>

                {/* Role */}
                <p
                  className="text-saffron-600 font-semibold mt-2"
                  style={{ fontSize: "1.05rem" }}
                >
                  {m.role}
                </p>

                {/* Divider */}
                <div
                  className="rounded-full my-4"
                  style={{ width: 28, height: 2, background: "#E8E5DC", flexShrink: 0 }}
                />

                {/* Description */}
                <p
                  className="text-stone-500 leading-relaxed"
                  style={{ fontSize: "0.975rem" }}
                >
                  {m.desc}
                </p>
              </div>
            </Fade>
          ))}
        </div>

      </div>
    </section>
  );
}
