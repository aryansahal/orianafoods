import React from "react";
import wordLogo from "../../assets/images/wordLogo-oriana.png";

const Navbar = () => {
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
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "14px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <a href="#top">
          <img
            src={wordLogo}
            alt="Oriana Foods — Originates at the Origin"
            style={{ height: 44, display: "block" }}
          />
        </a>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
            fontSize: 15,
            fontWeight: 500,
          }}
        >
          <a href="#products" className="om-nav-link om-nav-links-text">
            Our Masalas
          </a>
          <a href="#origin" className="om-nav-link om-nav-links-text">
            Origin
          </a>
          <a href="#wholesale" className="om-nav-link om-nav-links-text">
            Wholesale
          </a>
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
      </div>
    </header>
  );
};

export default Navbar;
