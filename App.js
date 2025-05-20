import React, { useState } from "react";
function App() {
  const [page, setPage] = useState("home");
  const brandName = "ShwingerHertz";

  const NavLink = ({ label, value }) => (
    <button
      onClick={() => setPage(value)}
      style={{
        background: "none",
        border: "none",
        color: page === value ? "#FFD700" : "#fff",
        margin: "0 1rem",
        fontSize: "1rem",
        cursor: "pointer",
        fontWeight: page === value ? "bold" : "normal",
        textDecoration: page === value ? "underline" : "none"
      }}
    >
      {label}
    </button>
  );

  const Section = ({ children }) => (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "2rem",
        borderRadius: "1rem",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        marginTop: "2rem"
      }}
    >
      {children}
    </div>
  );

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        backgroundColor: "#f4f7fb",
        minHeight: "100vh"
      }}
    >
      <nav
        style={{
          backgroundColor: "#003366",
          padding: "1.5rem 2rem",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "2rem",
              fontWeight: 900
            }}
          >
            {brandName}
          </div>
          <div
            style={{
              fontSize: "0.9rem",
              fontStyle: "italic",
              color: "#ddd"
            }}
          >
            High-Frequency Weld Systems Experts
          </div>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <NavLink label="Home" value="home" />
          <NavLink label="FAQ" value="faq" />
        </div>
      </nav>

      <main style={{ padding: "2rem", maxWidth: "900px", margin: "auto" }}>
        {page === "home" && (
          <Section>
            <h1 style={{ fontSize: "2.5rem", color: "#003366" }}>
              Ultrasonic Welding: Made Simple
            </h1>
            <p style={{ fontSize: "1.2rem", color: "#333" }}>
              We repair, calibrate, and tune ultrasonic welders used in
              automotive, electronics, and medical manufacturing. If it's
              buzzing wrong, let us fix it right.
            </p>
            <p style={{ marginTop: "1rem", color: "#444" }}>
              Our experienced technicians analyze and resolve frequency
              mismatches, power drops, and mechanical wear. We provide
              diagnostics, part replacements, and full system tuning tailored to
              your needs.
            </p>
          </Section>
        )}

        {page === "faq" && (
          <Section>
            <h2 style={{ fontSize: "2rem", color: "#003366" }}>
              Common Questions
            </h2>
            <ul style={{ lineHeight: "1.8", color: "#333" }}>
              <li>
                <strong>What causes a converter to fail?</strong> Overheating,
                age, or physical stress can crack internal ceramics.
              </li>
              <li>
                <strong>How long does a repair take?</strong> Most repairs ship
                back within 3–5 business days.
              </li>
              <li>
                <strong>Can you repair older models?</strong> Yes! We specialize
                in legacy Dukane and Branson units.
              </li>
              <li>
                <strong>Do you offer diagnostics?</strong> Absolutely. We test
                converters, boosters, and horns to identify and isolate problems
                fast.
              </li>
              <li>
                <strong>What frequencies do you support?</strong> Primarily
                20kHz and 40kHz units, with support for specialty devices on
                request.
              </li>
            </ul>
          </Section>
        )}
      </main>
    </div>
  );
}

export default App;

