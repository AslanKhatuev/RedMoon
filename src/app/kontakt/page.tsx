"use client";

import { useState } from "react";

const SERVICES_LIST = [
  "Bryllupsfilm",
  "Bryllupsfotografering",
  "Avskjedsfest video",
  "Avskjedsfest foto",
  "Lovzar filming",
  "Reels & Kortvideoer",
  "Portrettfotografering",
  "Arrangementer & Feiringer",
  "Individuell fotoshoot",
  "Familie & Street",
  "Annet",
];

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = {
    width: "100%",
    backgroundColor: "#111111",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#c8c8c8",
    padding: "12px 16px",
    fontSize: "13px",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 300,
    outline: "none",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#050505",
        paddingTop: "120px",
        paddingBottom: "80px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "10px",
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: "rgba(212,168,67,0.6)",
              marginBottom: "16px",
            }}
          >
            La oss snakke
          </p>
          <h1
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2rem,6vw,5rem)",
              fontWeight: 300,
              color: "#e0e0e0",
              marginBottom: "24px",
            }}
          >
            Kontakt oss
          </h1>
          <div
            style={{
              height: "1px",
              maxWidth: "200px",
              margin: "0 auto",
              background:
                "linear-gradient(90deg, transparent, #d4a843, transparent)",
            }}
          />
        </div>

        {/* Grid – stacker på mobil */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "48px",
          }}
        >
          {/* Venstre – info */}
          <div>
            <p
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(1.4rem,3vw,2rem)",
                fontWeight: 300,
                color: "#e0e0e0",
                fontStyle: "italic",
                lineHeight: 1.4,
                marginBottom: "36px",
              }}
            >
              "Hvert øyeblikk fortjener å bli husket."
            </p>

            {[
              { label: "Telefon", value: "+47 XXX XX XXX" },
              { label: "E-post", value: "post@redmoon.no" },
              { label: "Instagram", value: "@redmoon.studio" },
              { label: "Lokasjon", value: "Norge" },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  gap: "16px",
                  marginBottom: "20px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    flexShrink: 0,
                    border: "1px solid rgba(212,168,67,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{ color: "rgba(212,168,67,0.5)", fontSize: "10px" }}
                  >
                    ◆
                  </span>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "Space Mono, monospace",
                      fontSize: "9px",
                      color: "rgba(200,200,200,0.4)",
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                      marginBottom: "3px",
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "14px",
                      fontWeight: 300,
                      color: "#c8c8c8",
                    }}
                  >
                    {value}
                  </p>
                </div>
              </div>
            ))}

            {/* Prosess */}
            <div style={{ marginTop: "40px" }}>
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "9px",
                  color: "rgba(212,168,67,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.4em",
                  marginBottom: "20px",
                }}
              >
                Prosessen
              </p>
              {[
                { num: "01", text: "Send oss en forespørsel" },
                { num: "02", text: "Gratis konsultasjonsmøte" },
                { num: "03", text: "Vi skaper noe uforglemmelig" },
              ].map((step) => (
                <div
                  key={step.num}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "14px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Space Mono, monospace",
                      fontSize: "11px",
                      color: "rgba(212,168,67,0.4)",
                      flexShrink: 0,
                    }}
                  >
                    {step.num}
                  </span>
                  <div
                    style={{
                      height: "1px",
                      flex: 1,
                      backgroundColor: "rgba(255,255,255,0.05)",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "12px",
                      fontWeight: 300,
                      color: "rgba(200,200,200,0.5)",
                    }}
                  >
                    {step.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Høyre – skjema */}
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "12px",
              }}
            >
              <input
                type="text"
                placeholder="Navn *"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                style={inputStyle}
              />
              <input
                type="tel"
                placeholder="Telefon"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                style={inputStyle}
              />
            </div>

            <input
              type="email"
              placeholder="E-post *"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              style={inputStyle}
            />

            <select
              value={formData.service}
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              style={{ ...inputStyle, cursor: "pointer" }}
            >
              <option value="" disabled>
                Velg tjeneste
              </option>
              {SERVICES_LIST.map((s) => (
                <option
                  key={s}
                  value={s}
                  style={{ backgroundColor: "#111111" }}
                >
                  {s}
                </option>
              ))}
            </select>

            <input
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              style={{ ...inputStyle, colorScheme: "dark" }}
            />

            <textarea
              rows={5}
              placeholder="Fortell oss om arrangementet ditt..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              style={{ ...inputStyle, resize: "none" }}
            />

            <button
              type="submit"
              style={{
                padding: "16px",
                backgroundColor: "#d4a843",
                color: "#050505",
                fontFamily: "Montserrat, sans-serif",
                fontSize: "11px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                border: "none",
                cursor: "pointer",
              }}
            >
              {sent ? "Sendt! Vi kontakter deg snart ✓" : "Send forespørsel"}
            </button>

            <p
              style={{
                textAlign: "center",
                fontFamily: "Space Mono, monospace",
                fontSize: "9px",
                color: "rgba(200,200,200,0.3)",
                letterSpacing: "0.2em",
              }}
            >
              Vi svarer normalt innen 24 timer
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
