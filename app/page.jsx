"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{ background: "#F9F6F2", color: "#1A1714", fontFamily: "'Raleway', sans-serif", overflowX: "hidden" }}>


      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(249,246,242,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #DDD8D0" : "none",
        transition: "all 0.35s", padding: "24px 60px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "18px", letterSpacing: "0.04em", fontWeight: 400, fontStyle: "italic" }}>
          Arc Studio
        </div>
        <div style={{ display: "flex", gap: "36px", alignItems: "center" }}>
          <a href="#services" className="nav-link">Services</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#contact" className="nav-link">Contact</a>
          <button className="btn-dark">Book Now</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: "100vh", display: "grid", gridTemplateColumns: "1fr 1fr",
        position: "relative", paddingTop: "80px",
      }}>
        {/* Left — text */}
        <div className="hero-content" style={{ padding: "0 60px 0 100px", display: "flex", flexDirection: "column", justifyContent: "center", background: "#F9F6F2" }}>
          <p className="a1" style={{ fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", opacity: 0.45, marginBottom: "24px" }}>
            Certified Lash & Brow Artists · Toronto
          </p>
          <h1 className="a2" style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 400, lineHeight: 1.05, marginBottom: "28px" }}>
            Open Your<br /><em>Eyes.</em>
          </h1>
          <p className="a2" style={{ fontSize: "15px", opacity: 0.6, lineHeight: 1.85, marginBottom: "48px", fontWeight: 300, maxWidth: "380px" }}>
            Lash extensions, brow lamination, tinting, and lifting — all performed by certified artists who treat your face like a canvas.
          </p>
          <div className="a3" style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <button className="btn-dark">Book Appointment</button>
            <a href="#services" style={{ color: "#1A1714", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.45, textDecoration: "none", display: "flex", alignItems: "center" }}>
              See Services →
            </a>
          </div>
          {/* stat strip */}
          <div style={{ display: "flex", gap: "48px", marginTop: "72px", paddingTop: "40px", borderTop: "1px solid #DDD8D0" }}>
            {[["3K+", "Appointments"], ["5★", "Avg Rating"], ["6yr", "Experience"]].map(([num, lbl]) => (
              <div key={lbl}>
                <div style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "28px", fontWeight: 400, lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.45, marginTop: "6px" }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Right — photo */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=1200&q=85"
            alt="Lash artist at work"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(249,246,242,0.15), transparent)" }} />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section" style={{ padding: "110px 100px", background: "#1A1714" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "16px" }}>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C8B89A", marginBottom: "20px" }}>What We Do</p>
            <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(34px, 4vw, 56px)", fontWeight: 400, color: "#F9F6F2" }}>Services</h2>
          </div>
          <button className="btn-dark" style={{ background: "#C8B89A", color: "#1A1714", marginBottom: "8px" }}>Book Now</button>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginBottom: "8px" }} />
        {[
          { name: "Classic Lash Extensions",   desc: "One extension per natural lash. Natural, everyday look.",             price: "$120",     time: "90 min"  },
          { name: "Hybrid Lash Set",            desc: "Mix of classic and volume fans. Full and fluttery.",                  price: "$145",     time: "2 hr"    },
          { name: "Volume Lash Set",            desc: "Multiple ultra-fine lashes per follicle. Dramatic effect.",           price: "$165",     time: "2.5 hr"  },
          { name: "Lash Lift & Tint",           desc: "Curl and darken your natural lashes. No extensions needed.",         price: "$90",      time: "60 min"  },
          { name: "Brow Lamination",            desc: "Reshape and set brow hairs for a fluffy, defined look.",             price: "$85",      time: "45 min"  },
          { name: "Brow Tint & Shape",          desc: "Tinting and precision waxing for perfectly framed brows.",           price: "$55",      time: "30 min"  },
        ].map(s => (
          <div key={s.name} className="service-card" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "28px", marginBottom: "0" }}>
            <div>
              <div style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "20px", fontWeight: 400, color: "#F9F6F2", marginBottom: "8px" }}>{s.name}</div>
              <div style={{ fontSize: "13px", opacity: 0.5, color: "#F9F6F2", fontWeight: 300 }}>{s.desc} &nbsp;·&nbsp; {s.time}</div>
            </div>
            <div style={{ color: "#C8B89A", fontFamily: "'Libre Baskerville', serif", fontSize: "20px", fontWeight: 400, whiteSpace: "nowrap" }}>{s.price}</div>
          </div>
        ))}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: "8px" }} />
      </section>

      {/* ABOUT */}
      <section id="about" className="about-grid" style={{ padding: "110px 100px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
        <div style={{ position: "relative" }}>
          <img
            src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=900&q=85"
            alt="Artist at work"
            style={{ width: "100%", height: "560px", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", top: "40px", left: "-20px", width: "1px", height: "200px", background: "#1A1714", opacity: 0.15 }} />
        </div>
        <div>
          <p style={{ fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", opacity: 0.45, marginBottom: "24px" }}>Our Approach</p>
          <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 400, marginBottom: "28px", lineHeight: 1.15 }}>
            Precision is<br /><em>our standard.</em>
          </h2>
          <p style={{ opacity: 0.6, lineHeight: 1.9, marginBottom: "20px", fontWeight: 300, fontSize: "15px" }}>
            Every set we apply is custom-designed to complement your eye shape, bone structure, and lifestyle. We don't do cookie-cutter lashes.
          </p>
          <p style={{ opacity: 0.6, lineHeight: 1.9, marginBottom: "44px", fontWeight: 300, fontSize: "15px" }}>
            Our artists are certified and trained on an ongoing basis to stay current with the latest techniques in the industry. Safety, quality, and longevity are non-negotiable here.
          </p>
          <button className="btn-dark" style={{ padding: "15px 40px" }}>Book a Consultation</button>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="section" style={{ padding: "110px 100px", background: "#EFEBE5" }}>
        <p style={{ fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", opacity: 0.45, marginBottom: "16px" }}>Portfolio</p>
        <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(34px, 4vw, 56px)", fontWeight: 400, marginBottom: "56px" }}>Our Work</h2>
        <div className="gallery-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px" }}>
          {[
            { src: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600&q=85", h: "420px" },
            { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=85", h: "200px" },
            { src: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=600&q=85", h: "200px" },
          ].map((img, i) => (
            <div key={i} className="gallery-wrap" style={{ height: img.h }}>
              <img className="gallery-img" src={img.src} alt="" />
            </div>
          ))}
        </div>
        <div className="gallery-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "14px", marginTop: "14px" }}>
          {[
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=85",
            "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=600&q=85",
            "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600&q=85",
          ].map((src, i) => (
            <div key={i} className="gallery-wrap" style={{ height: "200px" }}>
              <img className="gallery-img" src={src} alt="" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "110px 100px", background: "#1A1714" }}>
        <div className="cta-inner" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "40px" }}>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C8B89A", marginBottom: "20px" }}>Ready?</p>
            <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 400, color: "#F9F6F2", lineHeight: 1.1 }}>
              Book your<br /><em>appointment.</em>
            </h2>
          </div>
          <div style={{ display: "flex", gap: "12px", flexShrink: 0 }}>
            <button className="btn-dark" style={{ background: "#C8B89A", color: "#1A1714", padding: "15px 36px" }}>Book Online</button>
            <button className="btn-outline-dark" style={{ borderColor: "rgba(255,255,255,0.3)", color: "#F9F6F2", padding: "15px 36px" }}>Call Us</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" style={{ borderTop: "1px solid #DDD8D0", padding: "64px 100px", background: "#F9F6F2" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "60px", marginBottom: "48px" }}>
          <div>
            <div style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "22px", fontStyle: "italic", marginBottom: "16px" }}>Arc Studio</div>
            <p style={{ opacity: 0.5, fontSize: "14px", lineHeight: 1.8, fontWeight: 300, maxWidth: "240px" }}>
              Toronto's destination for precision lash and brow work. Appointments recommended.
            </p>
          </div>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.4, marginBottom: "20px" }}>Hours</p>
            {[["Mon", "Closed"], ["Tue – Fri", "10AM – 7PM"], ["Sat – Sun", "10AM – 6PM"]].map(([day, hrs]) => (
              <div key={day} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", fontSize: "14px", opacity: 0.55 }}>
                <span>{day}</span><span>{hrs}</span>
              </div>
            ))}
          </div>
          <div>
            <p style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.4, marginBottom: "20px" }}>Find Us</p>
            {["789 Spadina Ave", "Toronto, ON  M5S 2J8", "(647) 555-0311", "hello@arcstudio.ca"].map((line) => (
              <p key={line} style={{ fontSize: "14px", opacity: 0.55, marginBottom: "9px" }}>{line}</p>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid #DDD8D0", paddingTop: "24px", display: "flex", justifyContent: "space-between", opacity: 0.3, fontSize: "12px" }}>
          <span>© 2025 Arc Lash & Brow Studio. All rights reserved.</span>
          <span>Site by [Your Name] · Toronto Web Design</span>
        </div>
      </footer>
    </div>
  );
}