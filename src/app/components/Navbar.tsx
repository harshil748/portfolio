"use client";

import { useEffect, useState } from "react";

const sections = ["about", "skills", "projects", "certifications", "contact"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    let ticking = false;
    let sectionOffsets: Array<{ id: string; top: number }> = [];

    const computeOffsets = () => {
      sectionOffsets = sections
        .map((id) => {
          const el = document.getElementById(id);
          return el ? { id, top: el.offsetTop - 120 } : null;
        })
        .filter((v): v is { id: string; top: number } => v !== null);
    };

    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 50);

      let current = sections[0];
      for (const section of sectionOffsets) {
        if (window.scrollY >= section.top) current = section.id;
      }
      setActiveSection(current);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    computeOffsets();
    updateScrollState();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", computeOffsets);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", computeOffsets);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 py-4 bg-navy-900/85 backdrop-blur-md ${
        isScrolled ? "border-b border-gold-muted/30" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a
          href="#"
          className="font-[Space_Grotesk] font-bold text-platinum text-2xl"
        >
          Harshil Patel
        </a>

        <div className="hidden md:flex space-x-7">
          {sections.map((item) => {
            const active = activeSection === item;
            return (
              <a
                key={item}
                href={`#${item}`}
                className={`transition-colors font-medium capitalize ${
                  active ? "text-gold" : "text-ivory-muted hover:text-gold"
                }`}
              >
                {item}
              </a>
            );
          })}
        </div>

        <button
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          className="md:hidden flex items-center p-2 rounded-lg text-ivory-muted hover:text-gold transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96 mt-3" : "max-h-0"
        }`}
      >
        <div className="bg-navy-900/95 backdrop-blur border border-gold/20 rounded-lg py-3 px-3">
          {sections.map((item) => {
            const active = activeSection === item;
            return (
              <a
                key={item}
                href={`#${item}`}
                className={`block py-2 px-3 rounded-md capitalize transition-colors ${
                  active
                    ? "text-gold"
                    : "text-ivory-muted hover:text-gold hover:bg-navy-800"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
