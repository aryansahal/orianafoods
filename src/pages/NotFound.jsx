import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FBF6EC",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          fontFamily: "'DM Serif Display',serif",
          fontSize: "clamp(72px, 14vw, 120px)",
          color: "#F58220",
          lineHeight: 1,
        }}
      >
        404
      </div>
      <h1
        style={{
          fontFamily: "'DM Serif Display',serif",
          fontSize: "clamp(24px, 4vw, 34px)",
          color: "#1E3A14",
          fontWeight: 400,
          margin: "16px 0 10px",
        }}
      >
        This page seems to have lost its flavour.
      </h1>
      <p
        style={{
          color: "#5A4E3C",
          fontSize: 16,
          maxWidth: 420,
          lineHeight: 1.6,
          margin: "0 0 30px",
        }}
      >
        The page you're looking for doesn't exist or has moved. Head back to
        the homepage for our masalas and wholesale details.
      </p>
      <a
        href="/"
        className="om-btn-primary"
        style={{
          background: "#1E6023",
          color: "#fff",
          padding: "15px 36px",
          borderRadius: 999,
          fontWeight: 600,
          fontSize: 15.5,
          boxShadow: "0 6px 20px rgba(30,96,35,0.28)",
        }}
      >
        Back to Home
      </a>
    </div>
  );
};

export default NotFound;
