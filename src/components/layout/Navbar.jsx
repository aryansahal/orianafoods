import React, { useState } from "react";
import wordLogo from "../../assets/images/wordLogo-oriana.png";

const links = [
  { href: "#products", label: "Our Masalas" },
  { href: "#origin", label: "Origin" },
  { href: "#wholesale", label: "Wholesale" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(251,246,236,0.92)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(43,35,24,0.08)",
      }}
    >
      <div className="om-nav-inner">
        <a href="#top" onClick={close}>
          <img
            src={wordLogo}
            alt="Oriana Foods — Originates at the Origin"
            className="om-nav-logo"
            style={{ display: "block" }}
          />
        </a>
        <nav
          className="om-nav-desktop"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
            fontSize: 15,
            fontWeight: 500,
          }}
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} className="om-nav-link">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="om-cta-pill"
            style={{
              background: "#F58220",
              color: "#fff",
              padding: "11px 26px",
              borderRadius: 999,
              fontWeight: 600,
              boxShadow: "0 3px 12px rgba(245,130,32,0.35)",
            }}
          >
            Request a Quote
          </a>
        </nav>
        <button
          type="button"
          className="om-nav-burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <nav className="om-nav-mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="om-nav-link" onClick={close}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="om-nav-mobile-cta om-cta-pill" onClick={close}>
            Request a Quote
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
