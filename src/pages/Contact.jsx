import React from "react";
import { Box, Container, Typography, styled } from "@mui/material";

const ContactTitle = styled(Typography)({
  fontFamily: "'Pacifico', cursive",
  color: "#2E7D32",
  textAlign: "center",
  fontSize: "48px",
  marginBottom: "3rem",
});

const ContactSection = styled(Box)({
  padding: "4rem 0",
  backgroundColor: "#FBF7F4",
});

const ContactCard = styled(Box)({
  backgroundColor: "#fff",
  borderRadius: "12px",
  padding: "2rem",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
  display: "flex",
  gap: "2rem",
  "@media (max-width: 768px)": {
    flexDirection: "column",
  },
});

const ContactInfo = styled(Box)({
  flex: 1,
  "& .contact-heading": {
    color: "#2E7D32",
    fontWeight: 600,
    fontSize: "1.25rem",
    marginBottom: "1.5rem",
  },
  "& .address-box": {
    border: "1px solid #2E7D32",
    borderRadius: "8px",
    padding: "1rem",
    marginBottom: "1.5rem",
  },
  "& .contact-detail": {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: "#2E7D32",
    textDecoration: "none",
    marginBottom: "0.5rem",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

const MapContainer = styled(Box)({
  flex: 1,
  height: "300px",
  "& iframe": {
    width: "100%",
    height: "100%",
    border: "none",
    borderRadius: "8px",
  },
});

const Footer = styled(Box)({
  backgroundColor: "#2E7D32",
  color: "#fff",
  padding: "1rem",
  textAlign: "center",
});

const Contact = () => {
  return (
    <>
      <ContactSection>
        <Container maxWidth="lg">
          <ContactTitle variant="h1">Contact Us</ContactTitle>
          <ContactCard>
            <ContactInfo>
              <Typography className="contact-heading">Get In Touch!</Typography>
              <Box className="address-box">
                <Typography variant="body1" style={{ fontWeight: 500 }}>
                  Address:
                </Typography>
                <Typography variant="body1" style={{ marginTop: "0.5rem" }}>
                  ORIANA FOODS PRIVATE LIMITED
                  <br />
                  212, Shramjivan B-3,Wadala Truck Terminus,
                  <br />
                  Opp. New Cuffe Parade, Wadala East,
                  <br />
                  Mumbai, Maharashtra-400037
                </Typography>
              </Box>
              <a href="mailto:orianafoods@gmail.com" className="contact-detail">
                orianafoods@gmail.com
              </a>
              <a href="tel:+919999999999" className="contact-detail">
                +91 98210 43310
              </a>
            </ContactInfo>
            <MapContainer>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.803391675265!2d72.86435561485496!3d19.01814458713454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf21727f6d8d%3A0x9c7f874e12f5a33b!2sWadala%20Truck%20Terminus!5e0!3m2!1sen!2sin!4v1647887291627!5m2!1sen!2sin"
                title="Oriana Foods Location"
                loading="lazy"
              />
            </MapContainer>
          </ContactCard>
        </Container>
      </ContactSection>
      <Footer>
        <Typography variant="body2">
          @Copyright 2023 All Rights Reserved
        </Typography>
      </Footer>
    </>
  );
};

export default Contact;
