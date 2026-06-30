"use client";

import { Phone, Mail, MapPin, Camera, Share2 } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home",          href: "#home"       },
  { label: "About Us",      href: "#about"      },
  { label: "Our Founder",   href: "#founder"    },
  { label: "Leadership",    href: "#leadership" },
  { label: "Photo Gallery", href: "#gallery"    },
  { label: "Our Impact",    href: "#impact"     },
];

const PROGRAMS = [
  { label: "YLTP — Youth Leadership",  href: "#yltp"       },
  { label: "Areas of Work",            href: "#activities" },
  { label: "Fort Conservation",        href: "#activities" },
  { label: "Guiding Thoughts",         href: "#quotes"     },
  { label: "Follow Us",                href: "#contact"    },
];

const SOCIALS = [
  { icon: Camera, label: "Instagram", href: "https://www.instagram.com/aniketghule3630" },
  { icon: Share2,  label: "Facebook",  href: "https://www.facebook.com/share/1CrWBv7a2u/?mibextid=wwXIfr" },
];

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#1e1209",
      }}
    >
      {/* Blurred background image */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: "-20px",
          backgroundImage: "url('/maharaj.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          filter: "blur(6px) brightness(0.38) saturate(0.8)",
          transform: "scale(1.08)",
          pointerEvents: "none",
        }}
      />
      {/* Dark overlay to further darken and unify the tone */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(160deg, rgba(20,10,4,0.55) 0%, rgba(43,29,23,0.50) 60%, rgba(61,43,31,0.48) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Saffron gradient top bar */}
      <div style={{ height: 3, background: "linear-gradient(to right, transparent, #E67E22 30%, #CF6D17 70%, transparent)" }} />

      {/* Main content */}
      <div
        className="relative"
        style={{ maxWidth: 1400, marginLeft: "auto", marginRight: "auto", padding: "5rem 2rem 3.5rem" }}
      >
        <style>{`
            .footer-grid { display: grid; gap: 3rem; grid-template-columns: repeat(1,1fr); }
            @media (min-width: 768px)  { .footer-grid { grid-template-columns: repeat(2,1fr); } }
            @media (min-width: 1024px) { .footer-grid { grid-template-columns: 2fr 1fr 1fr 1.4fr; } }
            .footer-link { transition: color 0.2s, padding-left 0.2s; }
            .footer-link:hover { color: #E67E22; padding-left: 6px; }
            .social-btn { transition: background 0.25s, transform 0.25s, box-shadow 0.25s; }
            .social-btn:hover { background: #E67E22 !important; color: #fff !important; transform: translateY(-3px); box-shadow: 0 8px 24px rgba(230,126,34,0.35); }
          `}</style>
        <div>
          <div className="footer-grid">

            {/* ── Col 1: Brand ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

              {/* Logo mark */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                <img
                  src="/logo.png"
                  alt="Shivbhakt Pratishthan"
                  style={{
                    width: 56, height: 56, objectFit: "contain", flexShrink: 0,
                    filter:
                      "drop-shadow(0 0 2px #fff) drop-shadow(0 0 2px #fff) drop-shadow(0 0 2px #fff) drop-shadow(0 3px 8px rgba(0,0,0,0.5))",
                  }}
                />
                <div>
                  <p style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", color: "#fff", fontWeight: 700, fontSize: "1rem", lineHeight: 1.3 }}>शिवभक्त प्रतिष्ठाण</p>
                  <p style={{ color: "#857D72", fontSize: "0.65rem", letterSpacing: "0.16em", textTransform: "uppercase", marginTop: 2 }}>Maharashtra State · Est. 2015</p>
                </div>
              </div>

              {/* Mission statement */}
              <p style={{ color: "#ABA398", fontSize: "0.875rem", lineHeight: 1.8, maxWidth: 300 }}>
                Inspired by the eternal ideals of Chhatrapati Shivaji Maharaj — serving every citizen of Maharashtra with compassion, discipline, and selfless dedication.
              </p>

              {/* Devanagari motto */}
              <p style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", color: "#5C3310", fontSize: "0.85rem", fontStyle: "italic", letterSpacing: "0.04em" }}>
                "सेवा · मूल्ये · नेतृत्व"
              </p>

              {/* Social icons */}
              <div style={{ display: "flex", gap: "0.625rem" }}>
                {SOCIALS.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="social-btn"
                    style={{
                      width: 40, height: 40,
                      borderRadius: 8,
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#ABA398",
                    }}
                  >
                    <Icon size={16} strokeWidth={1.75} />
                  </a>
                ))}
              </div>

            </div>

            {/* ── Col 2: Quick Links ── */}
            <div>
              <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
                Quick Links
              </p>
              <div style={{ width: 28, height: 2, background: "#E67E22", borderRadius: 2, marginBottom: "1.5rem" }} />
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {QUICK_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="footer-link"
                      style={{ color: "#ABA398", fontSize: "0.875rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}
                    >
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#5C3310", flexShrink: 0 }} />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 3: Programmes ── */}
            <div>
              <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
                Programmes
              </p>
              <div style={{ width: 28, height: 2, background: "#E67E22", borderRadius: 2, marginBottom: "1.5rem" }} />
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {PROGRAMS.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="footer-link"
                      style={{ color: "#ABA398", fontSize: "0.875rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}
                    >
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#5C3310", flexShrink: 0 }} />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 4: Contact ── */}
            <div>
              <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
                Contact
              </p>
              <div style={{ width: 28, height: 2, background: "#E67E22", borderRadius: 2, marginBottom: "1.5rem" }} />

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem" }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: 8, flexShrink: 0,
                    background: "rgba(230,126,34,0.12)", border: "1px solid rgba(230,126,34,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <MapPin size={14} color="#E67E22" strokeWidth={1.75} />
                  </div>
                  <p style={{ color: "#ABA398", fontSize: "0.85rem", lineHeight: 1.7, margin: 0 }}>
                    Shivaji Nagar, Pune – 411 005<br />Maharashtra, India
                  </p>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: 8, flexShrink: 0,
                    background: "rgba(230,126,34,0.12)", border: "1px solid rgba(230,126,34,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Phone size={14} color="#E67E22" strokeWidth={1.75} />
                  </div>
                  <a href="tel:+919876543210" style={{ color: "#ABA398", fontSize: "0.85rem", textDecoration: "none" }}>
                    +91 98765 43210
                  </a>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: 8, flexShrink: 0,
                    background: "rgba(230,126,34,0.12)", border: "1px solid rgba(230,126,34,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Mail size={14} color="#E67E22" strokeWidth={1.75} />
                  </div>
                  <a href="mailto:info@shivbhaktpratishthan.org" style={{ color: "#ABA398", fontSize: "0.85rem", textDecoration: "none", wordBreak: "break-all" }}>
                    info@shivbhaktpratishthan.org
                  </a>
                </div>
              </div>

              {/* Follow us label */}
              <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <p style={{ color: "#635E57", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.875rem" }}>
                  Follow Us
                </p>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  {SOCIALS.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn"
                      style={{
                        display: "flex", alignItems: "center", gap: "0.5rem",
                        padding: "0.45rem 0.875rem",
                        borderRadius: 6,
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#ABA398", fontSize: "0.75rem", textDecoration: "none",
                      }}
                    >
                      <Icon size={13} strokeWidth={1.75} />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: 1400, marginLeft: "auto", marginRight: "auto", padding: "0 2rem" }}>
        <div style={{ height: 1, background: "linear-gradient(to right, transparent, rgba(255,255,255,0.07) 20%, rgba(255,255,255,0.07) 80%, transparent)" }} />
      </div>

      {/* Copyright bar */}
      <div style={{ maxWidth: 1400, marginLeft: "auto", marginRight: "auto", padding: "1.5rem 2rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
          <p style={{ color: "#5C5047", fontSize: "0.78rem" }}>
            © {new Date().getFullYear()} Shivbhakt Pratishthan Maharashtra State. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", color: "#4A3830", fontSize: "0.78rem" }}>
            संस्थापक अनिकेत भाऊ घुले · स्थापना २०१५
          </p>
        </div>
      </div>

    </footer>
  );
}
