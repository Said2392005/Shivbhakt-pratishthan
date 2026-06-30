"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV = [
  { label: "Home", href: "#home" },
  {
    label: "About",
    children: [
      { label: "About Us",    href: "#about"      },
      { label: "Founder",     href: "#founder"    },
      { label: "Leadership",  href: "#leadership" },
    ],
  },
  {
    label: "Programs",
    children: [
      { label: "Areas of Work", href: "#activities" },
      { label: "YLTP",          href: "#yltp"       },
    ],
  },
  {
    label: "Media",
    children: [
      { label: "Photo Gallery",    href: "#gallery" },
      { label: "Guiding Thoughts", href: "#quotes"  },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const openDd  = (label: string) => { if (closeTimer.current) clearTimeout(closeTimer.current); setDropdown(label); };
  const closeDd = () => { closeTimer.current = setTimeout(() => setDropdown(null), 120); };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="container-site h-[68px] flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/logo.png"
              alt="Shivbhakt Pratishthan"
              className="w-10 h-10 object-contain"
              style={{
                filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.2))",
              }}
            />
            <div className="hidden sm:block">
              <p className="font-devanagari font-semibold text-sm text-stone-900 leading-tight">शिवभक्त प्रतिष्ठाण</p>
              <p className="text-[10px] font-medium tracking-widest text-stone-400 uppercase">Maharashtra State</p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => openDd(item.label)}
                  onMouseLeave={closeDd}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-stone-700 hover:text-saffron-500 transition-colors duration-200">
                    {item.label}
                    <ChevronDown size={13} className={`transition-transform duration-200 ${dropdown === item.label ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {dropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 bg-white border border-stone-100 rounded-sm shadow-xl py-1 min-w-[180px] z-50"
                        onMouseEnter={() => openDd(item.label)}
                        onMouseLeave={closeDd}
                      >
                        {item.children.map((child) => (
                          <a
                            key={child.href}
                            href={child.href}
                            onClick={() => setDropdown(null)}
                            className="block px-4 py-2.5 text-sm text-stone-600 hover:text-saffron-500 hover:bg-saffron-50 transition-colors duration-150"
                          >
                            {child.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-stone-700 hover:text-saffron-500 transition-colors duration-200"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 text-stone-700 hover:text-saffron-500"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/50"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col overflow-y-auto"
              style={{ background: "#ffffff", borderLeft: "1px solid #E8E5DC" }}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-stone-100">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/logo.png"
                    alt="Shivbhakt Pratishthan"
                    className="w-8 h-8 object-contain"
                    style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))" }}
                  />
                  <span className="font-devanagari text-sm font-semibold text-stone-900">शिवभक्त प्रतिष्ठाण</span>
                </div>
                <button onClick={() => setOpen(false)} className="text-stone-400 hover:text-stone-700 p-1">
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 py-3 px-3">
                {NAV.map((item, i) =>
                  item.children ? (
                    <div key={item.label}>
                      <button
                        onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between px-4 py-3 rounded text-stone-700 hover:text-saffron-500 hover:bg-saffron-50 font-medium text-sm transition-colors"
                      >
                        {item.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${expanded === item.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {expanded === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22 }}
                            className="overflow-hidden pl-4"
                          >
                            {item.children.map((child) => (
                              <a
                                key={child.href}
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className="block px-4 py-2.5 text-sm text-stone-500 hover:text-saffron-500 hover:bg-saffron-50 rounded transition-colors"
                              >
                                {child.label}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="flex items-center px-4 py-3 rounded text-stone-700 hover:text-saffron-500 hover:bg-saffron-50 font-medium text-sm transition-colors"
                    >
                      {item.label}
                    </motion.a>
                  )
                )}
              </nav>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
