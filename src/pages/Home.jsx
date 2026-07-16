import React, { useEffect, useState } from "react";
import masalaClean from "../assets/images/masala-clean.png";
import farmImg from "../assets/images/farm.jpg";
import pHaldi from "../assets/images/p-haldi.png";
import pJeera from "../assets/images/p-jeera.png";
import pDhaniya from "../assets/images/p-dhaniya.png";
import pChilli from "../assets/images/p-chilli.png";

const products = [
  {
    key: "haldi",
    name: "Haldi Powder",
    hindi: "Turmeric",
    color: "#E3A008",
    img: pHaldi,
    desc: "High-curcumin Sangli turmeric, sun-dried and ground for deep golden colour and earthy aroma.",
    packs: "Bulk: 5kg · 25kg · custom packs",
  },
  {
    key: "jeera",
    name: "Jeera Powder",
    hindi: "Cumin",
    color: "#8A6B45",
    img: pJeera,
    desc: "Whole Unjha cumin, lightly roasted then ground — warm, nutty and intensely aromatic.",
    packs: "Bulk: 5kg · 25kg · custom packs",
  },
  {
    key: "dhaniya",
    name: "Dhaniya Powder",
    hindi: "Coriander",
    color: "#9A8B3C",
    img: pDhaniya,
    desc: "Kota coriander seeds ground fresh for a citrusy, sweet base note in every gravy.",
    packs: "Bulk: 5kg · 25kg · custom packs",
  },
  {
    key: "chilli",
    name: "Red Chilli Powder",
    hindi: "Lal Mirch",
    color: "#C0392B",
    img: pChilli,
    desc: "Guntur chillies with fiery heat and rich red colour — no artificial colour, ever.",
    packs: "Bulk: 5kg · 25kg · custom packs",
  },
];

const wholesale = [
  {
    n: "01",
    title: "Consistent supply, batch after batch",
    desc: "Standardised sourcing and grinding means the masala you get in month six matches your first order — colour, mesh size and aroma.",
  },
  {
    n: "02",
    title: "Private label & custom packing",
    desc: "Your brand, our spice. We pack from 50g retail pouches to 25kg bulk sacks, with your labelling and specifications.",
  },
  {
    n: "03",
    title: "Direct pricing, no middlemen",
    desc: "Because we buy at the farm gate and grind in-house, wholesale buyers get genuine ex-factory pricing with full traceability.",
  },
];

const tickerItems = [
  "Sangli Turmeric",
  "Unjha Cumin",
  "Kota Coriander",
  "Guntur Chilli",
  "Stone-Ground Fresh",
];

const eyebrowOrange = {
  color: "#F58220",
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  fontSize: 13,
  marginBottom: 12,
};

const h2Serif = {
  fontFamily: "'DM Serif Display',serif",
  color: "#1E3A14",
  fontWeight: 400,
  margin: 0,
};

const inputLabel = {
  fontSize: 12.5,
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#5A4E3C",
};

const labelWrap = {
  display: "flex",
  flexDirection: "column",
  gap: 7,
  minWidth: 0,
};

const Home = () => {
  const [sent, setSent] = useState(false);

  // Scroll reveal with progressive enhancement + failsafe.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    els.forEach((el) => el.classList.add("js"));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    const failsafe = setTimeout(
      () => els.forEach((el) => el.classList.add("in")),
      4000
    );
    return () => {
      obs.disconnect();
      clearTimeout(failsafe);
    };
  }, []);

  const submitEnquiry = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div style={{ background: "#FBF6EC" }}>
      {/* ---------- HERO ---------- */}
      <section
        id="top"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(160deg, #FBF6EC 55%, #F6E8CD 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -160,
            top: -160,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(245,130,32,0.14) 0%, transparent 70%)",
          }}
        />
        <div
          className="om-hero-grid"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "88px 32px 72px",
          }}
        >
          <div className="om-float-1" style={{ minWidth: 0 }}>
            <h1
              style={{
                fontFamily: "'DM Serif Display',serif",
                fontSize: "clamp(44px, 5.4vw, 68px)",
                lineHeight: 1.06,
                margin: "0 0 22px",
                color: "#1E3A14",
                fontWeight: 400,
              }}
            >
              Pure masalas,
              <br />
              ground at the{" "}
              <em style={{ color: "#F58220", fontStyle: "italic" }}>origin</em>.
            </h1>
            <p
              style={{
                fontSize: 18.5,
                lineHeight: 1.65,
                color: "#5A4E3C",
                maxWidth: 480,
                margin: "0 0 36px",
              }}
            >
              Single-origin haldi, jeera, dhaniya and red chilli — sourced
              direct from farms, stone-ground in small batches, and supplied in
              bulk to retailers, restaurants and distributors.
            </p>
            <div
              style={{
                display: "flex",
                gap: 16,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="#contact"
                className="om-btn-primary"
                style={{
                  background: "#1E6023",
                  color: "#fff",
                  padding: "16px 38px",
                  borderRadius: 999,
                  fontWeight: 600,
                  fontSize: 16,
                  boxShadow: "0 6px 20px rgba(30,96,35,0.28)",
                }}
              >
                Request Bulk Quote
              </a>
              <a
                href="#products"
                className="om-btn-outline"
                style={{
                  color: "#1E6023",
                  padding: "16px 28px",
                  borderRadius: 999,
                  fontWeight: 600,
                  fontSize: 16,
                  border: "1.5px solid rgba(30,96,35,0.35)",
                }}
              >
                View Masalas
              </a>
            </div>
          </div>
          <div
            className="om-float-2"
            style={{ position: "relative", minWidth: 0 }}
          >
            <div
              style={{
                position: "absolute",
                inset: "24px -12px -12px 24px",
                borderRadius: 28,
                border: "2px solid rgba(245,130,32,0.4)",
                zIndex: 0,
              }}
            />
            <img
              src={masalaClean}
              alt="Whole and ground Indian spices in a wooden bowl"
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                borderRadius: 28,
                boxShadow: "0 24px 60px rgba(43,35,24,0.18)",
                display: "block",
                background: "#FBF6EC",
              }}
            />
          </div>
        </div>

        {/* trust strip */}
        <div
          style={{
            borderTop: "1px solid rgba(43,35,24,0.08)",
            background: "rgba(255,255,255,0.55)",
          }}
        >
          <div
            className="om-trust-grid"
            style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 32px" }}
          >
            {[
              ["FSSAI Licensed", "Certified facility"],
              ["No Additives", "Zero fillers or colours"],
              ["Farm Direct", "Sourced at the origin"],
              ["Batch Tested", "Purity checked per lot"],
            ].map(([title, sub]) => (
              <div key={title} style={{ fontSize: 14.5, color: "#5A4E3C" }}>
                <strong
                  style={{
                    display: "block",
                    color: "#1E3A14",
                    fontSize: 16,
                    marginBottom: 2,
                  }}
                >
                  {title}
                </strong>
                {sub}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SOURCING TICKER ---------- */}
      <div
        style={{
          background: "#F58220",
          color: "#fff",
          overflow: "hidden",
          padding: "13px 0",
          whiteSpace: "nowrap",
        }}
      >
        <div className="om-ticker-track">
          {[0, 1].map((rep) =>
            tickerItems.map((item, i) => (
              <React.Fragment key={`${rep}-${i}`}>
                <span>{item}</span>
                <span>✦</span>
              </React.Fragment>
            ))
          )}
        </div>
      </div>

      {/* ---------- PRODUCTS ---------- */}
      <section
        id="products"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "96px 32px 80px",
        }}
      >
        <div
          data-reveal
          className="om-reveal"
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <div style={eyebrowOrange}>The Core Four</div>
          <h2
            style={{
              ...h2Serif,
              fontSize: "clamp(34px, 4vw, 48px)",
              margin: "0 0 14px",
            }}
          >
            Everyday masalas, done right
          </h2>
          <p
            style={{
              color: "#5A4E3C",
              fontSize: 17,
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Four staples every kitchen runs on. We do fewer spices so each one is
            sourced, ground and packed without compromise.
          </p>
        </div>
        <div className="om-products-grid">
          {products.map((p) => (
            <div
              key={p.key}
              data-reveal
              className="om-reveal om-product-card"
              style={{
                background: "#fff",
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid rgba(43,35,24,0.07)",
                boxShadow: "0 4px 18px rgba(43,35,24,0.06)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ height: 6, background: p.color }} />
              <div style={{ height: 190, position: "relative" }}>
                <img
                  src={p.img}
                  alt={p.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                style={{
                  padding: "22px 22px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  flex: 1,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 11.5,
                      color: p.color,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    {p.hindi}
                  </div>
                  <h3 style={{ ...h2Serif, fontSize: 22 }}>{p.name}</h3>
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14.5,
                    lineHeight: 1.55,
                    color: "#5A4E3C",
                    flex: 1,
                  }}
                >
                  {p.desc}
                </p>
                <div
                  style={{
                    fontSize: 13,
                    color: "#8A7A60",
                    borderTop: "1px dashed rgba(43,35,24,0.15)",
                    paddingTop: 10,
                  }}
                >
                  {p.packs}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: 40,
            fontSize: 15,
            color: "#5A4E3C",
          }}
        >
          Need custom grinds, blends or private-label packing?{" "}
          <a href="#contact" className="om-talk-link">
            Talk to us
          </a>
        </div>
      </section>

      {/* ---------- ORIGIN / STORY ---------- */}
      <section
        id="origin"
        style={{
          background: "#1E3A14",
          color: "#F3EDDC",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: -120,
            bottom: -120,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(245,130,32,0.16) 0%, transparent 70%)",
          }}
        />
        <div
          className="om-origin-grid"
          style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 32px" }}
        >
          <div
            data-reveal
            className="om-reveal"
            style={{ position: "relative", minWidth: 0 }}
          >
            <div
              style={{
                position: "absolute",
                inset: "-14px 14px 14px -14px",
                borderRadius: 24,
                border: "2px solid rgba(245,130,32,0.45)",
              }}
            />
            <div
              className="om-origin-photo"
              style={{
                position: "relative",
                height: 400,
                borderRadius: 24,
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
              }}
            >
              <img
                src={farmImg}
                alt="Spice farm at harvest"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>
          <div data-reveal className="om-reveal" style={{ minWidth: 0 }}>
            <div style={{ ...eyebrowOrange, color: "#F5A623", marginBottom: 14 }}>
              Originates at the Origin
            </div>
            <h2
              style={{
                fontFamily: "'DM Serif Display',serif",
                fontSize: "clamp(32px, 3.8vw, 46px)",
                margin: "0 0 20px",
                fontWeight: 400,
                lineHeight: 1.15,
                color: "#F3EDDC",
              }}
            >
              We go to the farm,
              <br />
              so you don't have to.
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "#D8CFB4",
                margin: "0 0 18px",
              }}
            >
              Every Oriana masala starts where it grows best — turmeric from
              Sangli, cumin from Unjha, coriander from Kota, chillies from
              Guntur. We buy whole spices direct from farmers at harvest, then
              clean, sun-dry and grind them in small batches.
            </p>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "#D8CFB4",
                margin: "0 0 32px",
              }}
            >
              No middlemen, no old stock, no blending down. Just the colour,
              aroma and oil content that only fresh, single-origin spice
              delivers.
            </p>
            <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
              {[
                ["4", "Sourcing regions"],
                ["100%", "Single-origin lots"],
                ["0", "Additives or fillers"],
              ].map(([num, label]) => (
                <div key={label}>
                  <div
                    style={{
                      fontFamily: "'DM Serif Display',serif",
                      fontSize: 34,
                      color: "#F5A623",
                    }}
                  >
                    {num}
                  </div>
                  <div style={{ fontSize: 14, color: "#D8CFB4" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHOLESALE ---------- */}
      <section
        id="wholesale"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 32px" }}
      >
        <div
          data-reveal
          className="om-reveal"
          style={{ textAlign: "center", marginBottom: 52 }}
        >
          <div style={eyebrowOrange}>For Businesses</div>
          <h2 style={{ ...h2Serif, fontSize: "clamp(32px, 3.8vw, 46px)" }}>
            Built for bulk buyers
          </h2>
        </div>
        <div className="om-wholesale-grid">
          {wholesale.map((w) => (
            <div
              key={w.n}
              data-reveal
              className="om-reveal"
              style={{
                background: "#fff",
                borderRadius: 20,
                padding: "32px 28px",
                border: "1px solid rgba(43,35,24,0.07)",
                boxShadow: "0 4px 18px rgba(43,35,24,0.05)",
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 14,
                  background: "rgba(245,130,32,0.12)",
                  color: "#F58220",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  marginBottom: 18,
                  fontFamily: "'DM Serif Display',serif",
                }}
              >
                {w.n}
              </div>
              <h3 style={{ ...h2Serif, fontSize: 21, margin: "0 0 10px" }}>
                {w.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "#5A4E3C",
                }}
              >
                {w.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- CONTACT ---------- */}
      <section
        id="contact"
        style={{
          background: "linear-gradient(180deg, #FBF6EC 0%, #F6E8CD 100%)",
          borderTop: "1px solid rgba(43,35,24,0.07)",
        }}
      >
        <div
          className="om-contact-grid"
          style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 32px" }}
        >
          <div
            data-reveal
            className="om-reveal"
            style={{ minWidth: 0, display: "flex", flexDirection: "column" }}
          >
            <div style={eyebrowOrange}>Get in Touch</div>
            <h2
              style={{
                ...h2Serif,
                fontSize: "clamp(32px, 3.8vw, 44px)",
                margin: "0 0 18px",
              }}
            >
              Let's talk supply.
            </h2>
            <p
              style={{
                color: "#5A4E3C",
                fontSize: 16.5,
                lineHeight: 1.65,
                margin: "0 0 34px",
                maxWidth: 440,
              }}
            >
              Tell us what you need — quantities, pack sizes, delivery schedule —
              and we'll come back with a quote within one working day.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 22,
                fontSize: 15.5,
                marginBottom: 36,
              }}
            >
              {[
                {
                  icon: "✉",
                  label: "Email",
                  content: (
                    <a href="mailto:orianafoods@gmail.com">
                      orianafoods@gmail.com
                    </a>
                  ),
                },
                {
                  icon: "☎",
                  label: "Phone / WhatsApp",
                  content: <a href="tel:+919821043310">+91 98210 43310</a>,
                },
                {
                  icon: "⌂",
                  label: "Office",
                  content: (
                    <span style={{ color: "#5A4E3C" }}>
                      Oriana Foods Pvt. Ltd.
                      <br />
                      212, Shramjivan B-5, Wadala Truck Terminus,
                      <br />
                      Opp. New Cuffe Parade, Wadala East, Mumbai 400037
                    </span>
                  ),
                },
              ].map((row) => (
                <div
                  key={row.label}
                  style={{ display: "flex", gap: 14, alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      background: "rgba(30,96,35,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: "#1E6023",
                      fontSize: 17,
                    }}
                  >
                    {row.icon}
                  </div>
                  <div>
                    <strong style={{ display: "block", color: "#1E3A14" }}>
                      {row.label}
                    </strong>
                    {row.content}
                  </div>
                </div>
              ))}
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.803391675265!2d72.86435561485496!3d19.01814458713454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf21727f6d8d%3A0x9c7f874e12f5a33b!2sWadala%20Truck%20Terminus!5e0!3m2!1sen!2sin!4v1647887291627!5m2!1sen!2sin"
              title="Oriana Foods location"
              loading="lazy"
              style={{
                width: "100%",
                flex: 1,
                minHeight: 220,
                border: 0,
                borderRadius: 18,
                boxShadow: "0 6px 20px rgba(43,35,24,0.1)",
              }}
            />
          </div>

          <form
            data-reveal
            className="om-reveal om-form-card"
            onSubmit={submitEnquiry}
            style={{
              background: "#fff",
              borderRadius: 24,
              padding: "44px 40px",
              boxShadow: "0 16px 44px rgba(43,35,24,0.1)",
              border: "1px solid rgba(43,35,24,0.06)",
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3 style={{ ...h2Serif, fontSize: 26, margin: "0 0 6px" }}>
              Request a bulk quote
            </h3>
            <p style={{ margin: "0 0 30px", fontSize: 14.5, color: "#8A7A60" }}>
              No commitment — we'll reply with pricing and MOQs.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                flex: 1,
              }}
            >
              <div className="om-form-row">
                <label style={labelWrap}>
                  <span style={inputLabel}>Your name</span>
                  <input
                    className="om-input"
                    name="name"
                    placeholder="e.g. Ramesh Patil"
                  />
                </label>
                <label style={labelWrap}>
                  <span style={inputLabel}>Business name</span>
                  <input
                    className="om-input"
                    name="business"
                    placeholder="Shop / company"
                  />
                </label>
              </div>
              <label style={labelWrap}>
                <span style={inputLabel}>Phone or email</span>
                <input
                  className="om-input"
                  name="contact"
                  placeholder="We'll reply within one working day"
                />
              </label>
              <label style={{ ...labelWrap, flex: 1 }}>
                <span style={inputLabel}>Requirement</span>
                <textarea
                  className="om-textarea"
                  name="requirement"
                  rows={4}
                  placeholder="e.g. 50kg haldi + 25kg red chilli, monthly"
                />
              </label>
              <button
                type="submit"
                className="om-submit"
                style={{
                  background: "#F58220",
                  color: "#fff",
                  border: "none",
                  padding: 16,
                  borderRadius: 999,
                  fontFamily: "'Outfit',sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                  cursor: "pointer",
                  boxShadow: "0 6px 18px rgba(245,130,32,0.35)",
                  marginTop: 4,
                }}
              >
                {sent ? "Enquiry noted — we'll be in touch!" : "Send Enquiry"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
