import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const AnnouncementBar = () => (
  <div
    style={{
      background: "#1E6023",
      color: "#F6EFC9",
      textAlign: "center",
      padding: "9px 16px",
      fontSize: 13.5,
      letterSpacing: "0.06em",
    }}
  >
    Now supplying wholesale across Maharashtra — FSSAI licensed · Private label
    available
  </div>
);

const WhatsAppFab = () => (
  <a
    href="https://wa.me/919821043310"
    target="_blank"
    rel="noopener noreferrer"
    title="Chat on WhatsApp"
    className="om-fab"
    style={{
      position: "fixed",
      right: 24,
      bottom: 24,
      zIndex: 60,
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "#25D366",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 8px 24px rgba(37,211,102,0.4)",
    }}
  >
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.6.2-.8l.5-.6c.1-.2.1-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z" />
    </svg>
  </a>
);

const App = () => {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppFab />
    </>
  );
};

export default App;
