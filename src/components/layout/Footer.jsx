import React, { useState } from "react";

const legalDocs = {
  privacy: {
    title: "Privacy Policy",
    sections: [
      {
        h: "What we collect",
        p: "When you send an enquiry, we collect your name, business name and contact details (phone or email) so we can respond with pricing and supply information. We do not collect payment information through this website.",
      },
      {
        h: "How we use it",
        p: "Your details are used only to respond to your enquiry, prepare quotations and manage our supply relationship with you. We never sell or rent your information to third parties.",
      },
      {
        h: "WhatsApp & phone contact",
        p: "If you reach us via WhatsApp or phone, our conversation is used solely to service your order or enquiry. You may ask us to delete your contact details at any time.",
      },
      {
        h: "Data retention & security",
        p: "Enquiry details are kept only as long as needed for business correspondence. Reasonable safeguards protect the information we hold.",
      },
      {
        h: "Your rights",
        p: "You can request access to, correction of, or deletion of your personal information by writing to orianafoods@gmail.com.",
      },
    ],
  },
  terms: {
    title: "Terms & Conditions",
    sections: [
      {
        h: "About us",
        p: "This website is operated by Oriana Foods Pvt. Ltd., Wadala East, Mumbai, Maharashtra 400037 — an FSSAI-licensed supplier of ground spices for wholesale buyers.",
      },
      {
        h: "Enquiries & quotations",
        p: "Product listings on this site are for information only and do not constitute an offer. Prices, minimum order quantities and availability are confirmed in written quotations, valid for the period stated on them.",
      },
      {
        h: "Orders & supply",
        p: "Orders are confirmed only on written acceptance. Delivery timelines, packing specifications and payment terms are agreed per order.",
      },
      {
        h: "Quality",
        p: "All masalas are batch-tested and comply with FSSAI standards. Quality concerns must be raised within 7 days of delivery with batch details for investigation.",
      },
      {
        h: "Liability",
        p: "To the extent permitted by law, our liability is limited to replacement of goods or refund of the price paid for the affected batch.",
      },
      {
        h: "Governing law",
        p: "These terms are governed by the laws of India, with courts in Mumbai, Maharashtra having exclusive jurisdiction.",
      },
    ],
  },
};

const eyebrow = {
  fontSize: 12.5,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "#8FA07A",
  marginBottom: 16,
};

const LegalModal = ({ docKey, onClose }) => {
  const doc = legalDocs[docKey];
  if (!doc) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(22,36,15,0.55)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#FBF6EC",
          borderRadius: 24,
          maxWidth: 680,
          width: "100%",
          maxHeight: "80vh",
          overflowY: "auto",
          padding: "44px 44px 36px",
          boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          title="Close"
          className="om-modal-close"
          style={{
            position: "absolute",
            top: 18,
            right: 18,
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "none",
            background: "rgba(43,35,24,0.08)",
            color: "#2B2318",
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          ✕
        </button>
        <h3
          style={{
            fontFamily: "'DM Serif Display',serif",
            fontSize: 28,
            margin: "0 0 8px",
            color: "#1E3A14",
            fontWeight: 400,
          }}
        >
          {doc.title}
        </h3>
        <div style={{ fontSize: 13, color: "#8A7A60", marginBottom: 24 }}>
          Last updated: July 2026 · Oriana Foods Pvt. Ltd.
        </div>
        {doc.sections.map((s) => (
          <div key={s.h} style={{ marginBottom: 20 }}>
            <h4
              style={{
                fontSize: 16,
                margin: "0 0 6px",
                color: "#1E3A14",
                fontWeight: 600,
              }}
            >
              {s.h}
            </h4>
            <p
              style={{
                margin: 0,
                fontSize: 14.5,
                lineHeight: 1.65,
                color: "#5A4E3C",
              }}
            >
              {s.p}
            </p>
          </div>
        ))}
        <div
          style={{
            borderTop: "1px dashed rgba(43,35,24,0.15)",
            paddingTop: 16,
            fontSize: 13.5,
            color: "#8A7A60",
          }}
        >
          Questions? Write to{" "}
          <a href="mailto:orianafoods@gmail.com">orianafoods@gmail.com</a>.
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [legal, setLegal] = useState(null);

  return (
    <footer style={{ background: "#16240F", color: "#B9B096" }}>
      <div
        className="om-footer-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "64px 32px 40px",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              fontFamily: "'DM Serif Display',serif",
              fontSize: 26,
              color: "#F3EDDC",
              marginBottom: 6,
            }}
          >
            Oriana <span style={{ color: "#F5A623" }}>Foods</span>
          </div>
          <div
            style={{
              fontSize: 13,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#8FA07A",
              marginBottom: 18,
            }}
          >
            Originates at the Origin
          </div>
          <p
            style={{
              margin: 0,
              fontSize: 14.5,
              lineHeight: 1.7,
              maxWidth: 320,
            }}
          >
            Single-origin Indian masalas, sourced at the farm and stone-ground
            in small batches for wholesale buyers.
          </p>
        </div>

        <div style={{ minWidth: 0 }}>
          <div style={eyebrow}>Explore</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 11,
              fontSize: 15,
            }}
          >
            <a href="#products" className="om-footer-link">
              Our Masalas
            </a>
            <a href="#origin" className="om-footer-link">
              Origin Story
            </a>
            <a href="#wholesale" className="om-footer-link">
              Wholesale
            </a>
            <a href="#contact" className="om-footer-link">
              Request a Quote
            </a>
          </div>
        </div>

        <div style={{ minWidth: 0 }}>
          <div style={eyebrow}>Contact</div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 11,
              fontSize: 14.5,
              lineHeight: 1.6,
            }}
          >
            <a href="mailto:orianafoods@gmail.com" className="om-footer-link">
              orianafoods@gmail.com
            </a>
            <a href="tel:+919821043310" className="om-footer-link">
              +91 98210 43310
            </a>
            <span>
              212, Shramjivan B-5, Wadala Truck Terminus,
              <br />
              Opp. New Cuffe Parade, Wadala East, Mumbai 400037
            </span>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(243,237,220,0.12)" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "18px 32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
            fontSize: 13,
            color: "#8FA07A",
          }}
        >
          <span>© 2026 Oriana Foods Pvt. Ltd. All rights reserved.</span>
          <div style={{ display: "flex", gap: 22, alignItems: "center" }}>
            <span
              className="om-legal-link"
              onClick={() => setLegal("privacy")}
            >
              Privacy Policy
            </span>
            <span className="om-legal-link" onClick={() => setLegal("terms")}>
              Terms &amp; Conditions
            </span>
            <span>FSSAI Licensed · Made in Maharashtra</span>
          </div>
        </div>
      </div>

      {legal && <LegalModal docKey={legal} onClose={() => setLegal(null)} />}
    </footer>
  );
};

export default Footer;
