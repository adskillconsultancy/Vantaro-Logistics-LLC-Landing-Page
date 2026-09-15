import Image from "next/image";

/* ── Icon helpers (inline SVG to avoid extra deps) ─────────────── */
function TruckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M1 1h13l2 8h5l1 5H1V1z" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l7 4v5c0 5.25-3.5 9.74-7 11C5.5 20.74 2 16.25 2 11V6l10-4z" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-8 h-8">
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 5.98 5.98l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline strokeLinecap="round" strokeLinejoin="round" points="22,6 12,13 2,6" />
    </svg>
  );
}

/* ── Data ───────────────────────────────────────────────────────── */
const services = [
  {
    icon: <TruckIcon />,
    title: "Full Truckload (FTL)",
    desc: "Dedicated truck capacity for large shipments. Your freight moves directly from origin to destination — faster, safer, and cost-effective.",
  },
  {
    icon: <ShieldIcon />,
    title: "Secure Freight Handling",
    desc: "Every load is handled with care and precision. We prioritize cargo security from pickup through final delivery.",
  },
  {
    icon: <ClockIcon />,
    title: "On-Time Delivery",
    desc: "We operate on strict schedules so your supply chain never skips a beat. Reliability is our top promise.",
  },
  {
    icon: <MapPinIcon />,
    title: "Nationwide Coverage",
    desc: "Our network spans the entire country. Whether cross-country or regional, Vantaro gets your freight there.",
  },
];

const stats = [
  { value: "500+", label: "Loads Delivered" },
  { value: "48", label: "States Covered" },
  { value: "98%", label: "On-Time Rate" },
  { value: "24/7", label: "Support Available" },
];

const whyUs = [
  "No hidden fees — transparent flat-rate pricing",
  "Real-time shipment tracking & updates",
  "Experienced drivers with clean safety records",
  "Flexible scheduling to fit your timeline",
  "Dedicated account manager for every client",
  "Fully insured freight for your peace of mind",
];

/* ── Page ───────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">

      {/* ── NAVBAR ─────────────────────────────────────────────── */}
      <header
        style={{ backgroundColor: "#1B2D5B" }}
        className="sticky top-0 z-50 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white/30">
              <Image src="/Logo.jpg" alt="Vantaro Logistics Logo" width={44} height={44} className="object-cover" />
            </div>
            <div className="leading-tight">
              <p className="text-white font-bold text-base tracking-wide">Vantaro Logistics</p>
              <p style={{ color: "#6B8FAE" }} className="text-xs font-medium tracking-widest uppercase">Direct Freight Solutions</p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {["Services", "About", "Why Us", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            style={{ backgroundColor: "#6B8FAE" }}
            className="hidden md:inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity duration-200"
          >
            Get a Quote
          </a>
        </div>
      </header>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section
        id="hero"
        style={{
          background: "linear-gradient(135deg, #1B2D5B 0%, #243970 55%, #1B2D5B 100%)",
        }}
        className="relative overflow-hidden py-28 px-6"
      >
        {/* Decorative circles */}
        <div
          style={{ backgroundColor: "#6B8FAE", opacity: 0.08 }}
          className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full pointer-events-none"
        />
        <div
          style={{ backgroundColor: "#6B8FAE", opacity: 0.06 }}
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
        />

        <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <span
              style={{ backgroundColor: "rgba(107,143,174,0.18)", color: "#8AAAC8" }}
              className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
            >
              Direct Freight Solutions
            </span>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Moving Freight <br />
              <span style={{ color: "#6B8FAE" }}>Smarter.</span> Faster. <br />
              Safer.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl mb-10">
              Vantaro Logistics LLC delivers reliable nationwide freight solutions built on transparency, precision, and a commitment to on-time delivery every single time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                style={{ backgroundColor: "#6B8FAE" }}
                className="inline-flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-full hover:opacity-90 transition-all duration-200 shadow-lg"
              >
                Get a Free Quote
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-full border border-white/30 hover:bg-white/10 transition-all duration-200"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Logo card */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div
              style={{ backgroundColor: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.15)" }}
              className="border rounded-3xl p-10 backdrop-blur-sm"
            >
              <Image
                src="/Logo.jpg"
                alt="Vantaro Logistics LLC"
                width={240}
                height={240}
                className="rounded-2xl object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#F4F6F9" }} className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p style={{ color: "#1B2D5B" }} className="text-4xl font-extrabold mb-1">{s.value}</p>
              <p style={{ color: "#6B8FAE" }} className="text-sm font-semibold uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────────── */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span
              style={{ backgroundColor: "#E8ECF2", color: "#1B2D5B" }}
              className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            >
              What We Do
            </span>
            <h2 style={{ color: "#1B2D5B" }} className="text-3xl sm:text-4xl font-extrabold mb-4">
              Our Core Services
            </h2>
            <p style={{ color: "#8898AA" }} className="text-base max-w-xl mx-auto leading-relaxed">
              From full truckload shipping to last-mile coordination, Vantaro provides end-to-end freight services you can depend on.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                style={{ borderColor: "#E8ECF2" }}
                className="group border rounded-2xl p-7 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  style={{ backgroundColor: "#E8ECF2", color: "#1B2D5B" }}
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#1B2D5B] group-hover:text-white transition-colors duration-300"
                >
                  {svc.icon}
                </div>
                <h3 style={{ color: "#1B2D5B" }} className="font-bold text-lg mb-3">{svc.title}</h3>
                <p style={{ color: "#8898AA" }} className="text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────────── */}
      <section
        id="about"
        style={{ backgroundColor: "#F4F6F9" }}
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Image side */}
          <div className="flex-shrink-0">
            <div
              style={{ backgroundColor: "#1B2D5B" }}
              className="rounded-3xl p-10 shadow-2xl"
            >
              <Image
                src="/Logo.jpg"
                alt="About Vantaro"
                width={280}
                height={280}
                className="rounded-2xl object-contain"
              />
            </div>
          </div>

          {/* Text side */}
          <div className="flex-1">
            <span
              style={{ backgroundColor: "#E8ECF2", color: "#1B2D5B" }}
              className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5"
            >
              About Us
            </span>
            <h2 style={{ color: "#1B2D5B" }} className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">
              Built on Trust. <br />
              <span style={{ color: "#6B8FAE" }}>Driven by Results.</span>
            </h2>
            <p style={{ color: "#2D3748" }} className="text-base leading-relaxed mb-5">
              Vantaro Logistics LLC is a direct freight carrier dedicated to connecting businesses with dependable, door-to-door shipping solutions. We operate with a customer-first mindset — every shipment is treated with the same urgency and care as our very first.
            </p>
            <p style={{ color: "#8898AA" }} className="text-sm leading-relaxed">
              Founded with a mission to simplify freight logistics, we've grown into a trusted partner for businesses of all sizes. Our team of experienced drivers and logistics professionals ensures your cargo arrives on time, every time.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ──────────────────────────────────────── */}
      <section id="why-us" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span
              style={{ backgroundColor: "#E8ECF2", color: "#1B2D5B" }}
              className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            >
              Why Vantaro
            </span>
            <h2 style={{ color: "#1B2D5B" }} className="text-3xl sm:text-4xl font-extrabold mb-4">
              Why Businesses Choose Us
            </h2>
            <p style={{ color: "#8898AA" }} className="text-base max-w-xl mx-auto">
              We don't just move freight — we build partnerships built on consistency, transparency, and trust.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {whyUs.map((point) => (
              <div
                key={point}
                style={{ backgroundColor: "#F4F6F9", borderColor: "#E8ECF2" }}
                className="flex items-start gap-4 border rounded-xl p-5"
              >
                <span
                  style={{ backgroundColor: "#1B2D5B", color: "white" }}
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5"
                >
                  <CheckIcon />
                </span>
                <p style={{ color: "#2D3748" }} className="text-sm font-medium leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #1B2D5B 0%, #243970 100%)",
        }}
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-3xl sm:text-4xl font-extrabold mb-5">
            Ready to Move Your Freight?
          </h2>
          <p className="text-white/70 text-base mb-10 max-w-xl mx-auto">
            Get in touch today and receive a free, no-obligation freight quote. Our team is available 24/7 to help plan your next shipment.
          </p>
          <a
            href="#contact"
            style={{ backgroundColor: "#6B8FAE" }}
            className="inline-flex items-center gap-2 text-white font-bold px-10 py-4 rounded-full hover:opacity-90 transition-opacity duration-200 shadow-xl text-lg"
          >
            Request a Free Quote
          </a>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────── */}
      <section id="contact" style={{ backgroundColor: "#F4F6F9" }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span
              style={{ backgroundColor: "#E8ECF2", color: "#1B2D5B" }}
              className="inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            >
              Contact
            </span>
            <h2 style={{ color: "#1B2D5B" }} className="text-3xl sm:text-4xl font-extrabold mb-4">
              Get in Touch
            </h2>
            <p style={{ color: "#8898AA" }} className="text-base max-w-lg mx-auto">
              Have a shipment ready? Questions about our services? Reach out and our team will respond promptly.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              <div
                style={{ backgroundColor: "white", borderColor: "#E8ECF2" }}
                className="border rounded-2xl p-6 flex items-center gap-4"
              >
                <span style={{ backgroundColor: "#1B2D5B", color: "white" }} className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0">
                  <PhoneIcon />
                </span>
                <div>
                  <p style={{ color: "#8898AA" }} className="text-xs font-semibold uppercase tracking-widest mb-1">Call Us</p>
                  <p style={{ color: "#1B2D5B" }} className="font-bold text-base">+1 (555) 000-0000</p>
                </div>
              </div>
              <div
                style={{ backgroundColor: "white", borderColor: "#E8ECF2" }}
                className="border rounded-2xl p-6 flex items-center gap-4"
              >
                <span style={{ backgroundColor: "#1B2D5B", color: "white" }} className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MailIcon />
                </span>
                <div>
                  <p style={{ color: "#8898AA" }} className="text-xs font-semibold uppercase tracking-widest mb-1">Email Us</p>
                  <p style={{ color: "#1B2D5B" }} className="font-bold text-base">info@vantarologistics.com</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              style={{ backgroundColor: "white", borderColor: "#E8ECF2" }}
              className="border rounded-2xl p-8 shadow-sm space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label style={{ color: "#1B2D5B" }} className="block text-xs font-bold uppercase tracking-widest mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    style={{ borderColor: "#E8ECF2", color: "#1B2D5B" }}
                    className="w-full border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#6B8FAE] placeholder:text-gray-400 bg-white"
                  />
                </div>
                <div>
                  <label style={{ color: "#1B2D5B" }} className="block text-xs font-bold uppercase tracking-widest mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    style={{ borderColor: "#E8ECF2", color: "#1B2D5B" }}
                    className="w-full border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#6B8FAE] placeholder:text-gray-400 bg-white"
                  />
                </div>
              </div>
              <div>
                <label style={{ color: "#1B2D5B" }} className="block text-xs font-bold uppercase tracking-widest mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your shipment or ask us anything..."
                  style={{ borderColor: "#E8ECF2", color: "#1B2D5B" }}
                  className="w-full border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#6B8FAE] placeholder:text-gray-400 bg-white resize-none"
                />
              </div>
              <button
                type="submit"
                style={{ backgroundColor: "#1B2D5B" }}
                className="w-full text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity duration-200 text-sm tracking-wide"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer style={{ backgroundColor: "#121E3D" }} className="py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-white/20">
              <Image src="/Logo.jpg" alt="Vantaro" width={36} height={36} className="object-cover" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Vantaro Logistics LLC</p>
              <p style={{ color: "#6B8FAE" }} className="text-xs">Direct Freight Solutions</p>
            </div>
          </div>

          <p style={{ color: "#8898AA" }} className="text-xs text-center">
            © {new Date().getFullYear()} Vantaro Logistics LLC. All rights reserved.
          </p>

          <nav className="flex gap-6">
            {["Services", "About", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{ color: "#6B8FAE" }}
                className="text-xs font-medium hover:text-white transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </footer>

    </div>
  );
}
