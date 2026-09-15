"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export const NAV_LINKS = [
  { label: "Home",         href: "#home" },
  { label: "Services",     href: "#services" },
  { label: "Service Area", href: "#service-area" },
  { label: "About",        href: "#about" },
  { label: "Contact",      href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* ── Scroll → solid navbar ─── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: scrolled ? "#1B2D5B" : "transparent",
        boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.3)" : "none",
        transition: "background-color 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 flex-shrink-0">
          <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white/30 shadow-md">
            <Image src="/favicon.jpg" alt="Vantaro Logistics LLC" width={44} height={44} className="object-cover" />
          </div>
          <div className="leading-tight">
            <p className="text-white font-extrabold text-lg tracking-widest">VANTARO</p>
            <p className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: "#6B8FAE" }}>Logistics LLC</p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-white/85 hover:text-white text-sm font-semibold transition-colors duration-200 relative group"
            >
              {l.label}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: "#6B8FAE" }}
              />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
          style={{ backgroundColor: "#6B8FAE" }}
        >
          Request a Quote
        </a>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden px-6 pb-6 pt-2 flex flex-col gap-4" style={{ backgroundColor: "#1B2D5B" }}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/85 hover:text-white text-sm font-semibold py-1 border-b border-white/10"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex justify-center text-white text-sm font-bold px-6 py-3 rounded-full"
            style={{ backgroundColor: "#6B8FAE" }}
          >
            Request a Quote
          </a>
        </div>
      )}
    </header>
  );
}
