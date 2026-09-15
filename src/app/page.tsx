"use client";
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

/* ══════════════════════════════════════════════════════════════════
   SLIDE DATA
══════════════════════════════════════════════════════════════════ */
const SLIDES = [
  {
    image: "/hero-bg.jpg",
    eyebrow: "Wallington, NJ · Direct Freight Carrier",
    headline: ["Reliable Freight.", "Professional Service.", "Delivered With Confidence."],
    accent: "Delivered With Confidence.",
    sub: "Vantaro Logistics LLC provides dependable local and regional freight transportation throughout New Jersey, New York City, Long Island, and the Northeast.",
  },
  {
    image: "/hero-slide2.jpg",
    eyebrow: "Warehouse · Loading · Final-Mile Delivery",
    headline: ["Freight Handled", "With Precision.", "Every Shipment."],
    accent: "Every Shipment.",
    sub: "From warehouse pickup to door delivery — we manage every step with care, communication, and a commitment to on-time performance.",
  },
  {
    image: "/hero-slide3.jpg",
    eyebrow: "24/7 Dedicated Logistics · Overnight & Expedited",
    headline: ["On The Move.", "Day & Night.", "Always On Schedule."],
    accent: "Always On Schedule.",
    sub: "Dedicated expedited freight runs across the tri-state area and regional corridors, keeping your supply chain moving around the clock.",
  },
  {
    image: "/hero-slide4.jpg",
    eyebrow: "NJ · NYC · Long Island · Northeast Region",
    headline: ["Built For Scale.", "Ready To Grow.", "Freight Without Limits."],
    accent: "Freight Without Limits.",
    sub: "From local runs to regional freight corridors — Vantaro Logistics is built to grow with your business across New Jersey, New York, and beyond.",
  },
  {
    image: "/hero-slide5.jpg",
    eyebrow: "Warehouses · Distribution · B2B Freight",
    headline: ["Your Freight.", "Our Responsibility.", "Every Time."],
    accent: "Every Time.",
    sub: "Serving warehouses, distributors, manufacturers, and brokers throughout the Northeast with professional, responsive, and reliable freight service.",
  },
];

const NAV_LINKS = [
  { label: "Home",         href: "#home" },
  { label: "Services",     href: "#services" },
  { label: "Service Area", href: "#service-area" },
  { label: "About",        href: "#about" },
  { label: "Contact",      href: "#contact" },
];

const DURATION = 6000; // ms per slide

/* ══════════════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════════════ */
export default function Home() {
  const [current,  setCurrent]  = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  // textKey forces re-mount of text block → re-triggers CSS entrance animation
  const [textKey,  setTextKey]  = useState(0);

  const timerRef     = useRef<ReturnType<typeof setInterval> | null>(null);
  const progRef      = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  /* ── Scroll → solid navbar ─── */
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  /* ── Synchronized Timer & Progress ─── */
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (progRef.current)  clearInterval(progRef.current);

    setProgress(0);
    startTimeRef.current = Date.now();

    // Progress bar tick
    progRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);
      if (pct >= 100 && progRef.current) clearInterval(progRef.current);
    }, 30);

    // Auto-advance
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % SLIDES.length);
      setTextKey(k => k + 1);
      startTimeRef.current = Date.now();
      setProgress(0);
    }, DURATION);
  }, []);

  /* ── Manual slide navigation (restarts timer cleanly) ─── */
  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    setTextKey(k => k + 1);
    resetTimer();
  }, [resetTimer]);

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % SLIDES.length);
    setTextKey(k => k + 1);
    resetTimer();
  }, [resetTimer]);

  const back = useCallback(() => {
    setCurrent(c => (c - 1 + SLIDES.length) % SLIDES.length);
    setTextKey(k => k + 1);
    resetTimer();
  }, [resetTimer]);

  /* ── Start autoplay on mount ─── */
  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progRef.current)  clearInterval(progRef.current);
    };
  }, [resetTimer]);

  return (
    <div className="min-h-screen flex flex-col font-sans">

      {/* CSS keyframes — injected once */}
      <style>{`
        /* Background crossfade */
        @keyframes slideIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideOut { from { opacity: 1; } to { opacity: 0; } }

        /* Ken Burns — slow, smooth zoom + subtle drift */
        @keyframes kenburns {
          0%   { transform: scale(1.0)  translate(0%, 0%); }
          100% { transform: scale(1.10) translate(-1.5%, -0.8%); }
        }

        /* Text entrance — staggered fade-up */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .slide-enter  { animation: slideIn  1.4s cubic-bezier(0.4,0,0.2,1) forwards; }
        .slide-kb     { animation: kenburns 8s   cubic-bezier(0.25,0.46,0.45,0.94) forwards; }

        .text-anim-0  { animation: fadeUp 0.8s 0.1s cubic-bezier(0.4,0,0.2,1) both; }
        .text-anim-1  { animation: fadeUp 0.8s 0.3s cubic-bezier(0.4,0,0.2,1) both; }
        .text-anim-2  { animation: fadeUp 0.8s 0.5s cubic-bezier(0.4,0,0.2,1) both; }
        .text-anim-3  { animation: fadeUp 0.8s 0.7s cubic-bezier(0.4,0,0.2,1) both; }
      `}</style>

      {/* ══════════════════════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════════════════════ */}
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
              <Image src="/Logo.jpg" alt="Vantaro Logistics LLC" width={44} height={44} className="object-cover" />
            </div>
            <div className="leading-tight">
              <p className="text-white font-extrabold text-lg tracking-widest">VANTARO</p>
              <p className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: "#6B8FAE" }}>Logistics LLC</p>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href}
                className="text-white/85 hover:text-white text-sm font-semibold transition-colors duration-200 relative group">
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "#6B8FAE" }} />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a href="#contact"
            className="hidden lg:inline-flex items-center gap-2 text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
            style={{ backgroundColor: "#6B8FAE" }}>
            Request a Quote
          </a>

          {/* Hamburger */}
          <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden px-6 pb-6 pt-2 flex flex-col gap-4" style={{ backgroundColor: "#1B2D5B" }}>
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                className="text-white/85 hover:text-white text-sm font-semibold py-1 border-b border-white/10">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex justify-center text-white text-sm font-bold px-6 py-3 rounded-full"
              style={{ backgroundColor: "#6B8FAE" }}>
              Request a Quote
            </a>
          </div>
        )}
      </header>

      {/* ══════════════════════════════════════════════════════
          HERO SLIDER
      ══════════════════════════════════════════════════════ */}
      <section id="home" className="relative h-screen min-h-[620px] overflow-hidden">

        {/* Slide layers — all rendered, only active is visible */}
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              zIndex: i === current ? 2 : 1,
              opacity: i === current ? 1 : 0,
              transition: "opacity 1.4s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {/* Ken Burns wrapper — keyed so animation restarts on each activation */}
            <div
              key={`kb-${current}-${i}`}
              className="absolute inset-0"
              style={{ animation: i === current ? "kenburns 8s cubic-bezier(0.25,0.46,0.45,0.94) forwards" : "none" }}
            >
              <Image
                src={slide.image}
                alt={slide.headline.join(" ")}
                fill
                sizes="100vw"
                className="object-cover object-center"
                priority={true}
              />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0" style={{
              background: "linear-gradient(110deg, rgba(10,20,45,0.90) 0%, rgba(10,20,45,0.60) 48%, rgba(10,20,45,0.18) 100%)"
            }} />
          </div>
        ))}

        {/* Slide text — keyed to textKey so it re-animates on every slide change */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6">
          <div className="max-w-7xl mx-auto w-full pt-24 pb-32" key={textKey}>

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5 text-anim-0">
              <div className="w-10 h-[3px] rounded-full" style={{ backgroundColor: "#5BB8F5" }} />
              <span className="text-xs font-bold tracking-[0.22em] uppercase" style={{ color: "#5BB8F5" }}>
                {SLIDES[current].eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-white font-extrabold leading-[1.08] mb-6 text-anim-1"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
            >
              {SLIDES[current].headline.map((line, idx) =>
                line === SLIDES[current].accent
                  ? <span key={idx} style={{ color: "#5BB8F5" }}>{line}<br /></span>
                  : <span key={idx}>{line}<br /></span>
              )}
            </h1>

            {/* Sub */}
            <p className="text-white/75 text-base lg:text-lg leading-relaxed mb-10 max-w-xl text-anim-2">
              {SLIDES[current].sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 text-anim-3">
              <a href="#contact"
                className="inline-flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-transform duration-200 text-sm"
                style={{ backgroundColor: "#6B8FAE" }}>
                🚐 Request a Quote
              </a>
              <a href="#services"
                className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full border-2 hover:bg-white/10 transition-all duration-200 text-sm text-white"
                style={{ borderColor: "rgba(255,255,255,0.4)" }}>
                View Services
              </a>
              <a href="tel:2057239333"
                className="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full border-2 hover:bg-white/10 transition-all duration-200 text-sm"
                style={{ borderColor: "rgba(91,184,245,0.45)", color: "#5BB8F5" }}>
                📞 Call Now
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom bar: progress + dots + counter + arrows ── */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20"
        >
          {/* Progress bar — full width at very bottom */}
          <div className="w-full h-[3px] bg-white/10">
            <div
              className="h-full"
              style={{
                width: `${progress}%`,
                backgroundColor: "#5BB8F5",
                transition: "width 0.03s linear",
              }}
            />
          </div>

          {/* Controls row */}
          <div className="flex items-center justify-between px-8 py-5">

            {/* Dots — left */}
            <div className="flex items-center gap-3">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                  style={{
                    width: i === current ? 30 : 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: i === current ? "#5BB8F5" : "rgba(255,255,255,0.30)",
                    border: "none",
                    cursor: "pointer",
                    transition: "width 0.4s ease, background-color 0.4s ease",
                  }}
                />
              ))}
            </div>

            {/* Counter — center */}
            <span className="text-white/40 text-xs font-semibold tracking-widest hidden sm:block">
              {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
            </span>

            {/* Arrows — right */}
            <div className="flex items-center gap-2">
              <button onClick={back} aria-label="Previous"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:bg-white/15"
                style={{ border: "1px solid rgba(255,255,255,0.30)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button onClick={next} aria-label="Next"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:bg-white/15"
                style={{ border: "1px solid rgba(255,255,255,0.30)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll hint — right side vertical */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-2">
          <span className="text-white/30 text-[9px] font-bold tracking-[0.2em] uppercase"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
            Scroll Down
          </span>
          <div className="w-px h-12 animate-pulse" style={{ backgroundColor: "rgba(91,184,245,0.3)" }} />
        </div>
      </section>

      {/* ── Placeholder sections ─────────────────────────── */}
      <section id="services"     className="py-32 bg-white flex items-center justify-center">
        <p className="text-gray-400 text-sm">Services section — coming next</p>
      </section>
      <section id="service-area" className="py-32 bg-[#F4F6F9] flex items-center justify-center">
        <p className="text-gray-400 text-sm">Service Area section — coming next</p>
      </section>
      <section id="about"        className="py-32 bg-white flex items-center justify-center">
        <p className="text-gray-400 text-sm">About section — coming next</p>
      </section>
      <section id="contact"      className="py-32 bg-[#F4F6F9] flex items-center justify-center">
        <p className="text-gray-400 text-sm">Contact section — coming next</p>
      </section>
    </div>
  );
}
