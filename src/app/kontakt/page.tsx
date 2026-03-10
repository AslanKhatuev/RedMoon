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

function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        backgroundColor: "rgba(5,5,5,0.85)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        animation: "fadeIn 0.4s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#0a0a0a",
          border: "1px solid rgba(255,255,255,0.1)",
          maxWidth: "480px",
          width: "100%",
          padding: "clamp(40px, 6vw, 64px)",
          textAlign: "center",
          position: "relative",
          animation: "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Rød sirkel øverst */}
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            backgroundColor: "rgba(204,0,0,0.1)",
            border: "1px solid rgba(204,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 28px",
          }}
        >
          <span style={{ color: "#cc0000", fontSize: "22px" }}>✓</span>
        </div>

        {/* Dekor */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          />
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "7px" }}>
            ◆
          </span>
          <div
            style={{
              width: "40px",
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          />
        </div>

        <h2
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 300,
            color: "#ffffff",
            marginBottom: "16px",
            letterSpacing: "0.05em",
          }}
        >
          Takk for din henvendelse
        </h2>

        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "13px",
            fontWeight: 300,
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.8,
            marginBottom: "36px",
          }}
        >
          Vi har mottatt meldingen din og tar kontakt innen 24 timer.
        </p>

        <button
          onClick={onClose}
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "10px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#ffffff",
            backgroundColor: "transparent",
            border: "1px solid rgba(255,255,255,0.3)",
            padding: "12px 36px",
            cursor: "pointer",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#ffffff";
            e.currentTarget.style.color = "#050505";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#ffffff";
          }}
        >
          Lukk
        </button>

        {/* Hjørndekor */}
        <div
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            width: "20px",
            height: "20px",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            borderLeft: "1px solid rgba(255,255,255,0.15)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "20px",
            height: "20px",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            borderRight: "1px solid rgba(255,255,255,0.15)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "16px",
            left: "16px",
            width: "20px",
            height: "20px",
            borderBottom: "1px solid rgba(255,255,255,0.15)",
            borderLeft: "1px solid rgba(255,255,255,0.15)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "16px",
            right: "16px",
            width: "20px",
            height: "20px",
            borderBottom: "1px solid rgba(255,255,255,0.15)",
            borderRight: "1px solid rgba(255,255,255,0.15)",
          }}
        />
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}

function SubmitButton({ loading }: { loading: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="submit"
      disabled={loading}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "16px",
        backgroundColor:
          hovered && !loading ? "rgba(255,255,255,0.9)" : "#ffffff",
        color: "#050505",
        fontFamily: "Montserrat, sans-serif",
        fontSize: "11px",
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        border: "none",
        cursor: loading ? "not-allowed" : "pointer",
        opacity: loading ? 0.6 : 1,
        transition: "opacity 0.3s",
      }}
    >
      {loading ? "Sender..." : "Send forespørsel"}
    </button>
  );
}

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contact-submissions`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: formData }),
        }
      );
      if (res.ok) {
        setShowModal(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          date: "",
          message: "",
        });
      } else {
        alert("Noe gikk galt, prøv igjen.");
      }
    } catch {
      alert("Kunne ikke koble til serveren.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    backgroundColor: "#111111",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#ffffff",
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
      {showModal && <SuccessModal onClose={() => setShowModal(false)} />}

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "10px",
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
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
              color: "#ffffff",
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
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
            }}
          />
        </div>

        {/* Grid */}
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
                color: "#ffffff",
                fontStyle: "italic",
                lineHeight: 1.4,
                marginBottom: "36px",
              }}
            >
              "Hvert øyeblikk fortjener å bli husket."
            </p>

            {[
              { label: "Telefon", value: "+47 968 56 978" },
              { label: "E-post", value: "post@redmoon.no" },
              { label: "Instagram", value: "@redmoon_usm" },
              { label: "Lokasjon", value: "Oslo, Norge" },
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
                    border: "1px solid rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{ color: "rgba(255,255,255,0.5)", fontSize: "10px" }}
                  >
                    ◆
                  </span>
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "Space Mono, monospace",
                      fontSize: "9px",
                      color: "rgba(255,255,255,0.4)",
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
                      color: "#ffffff",
                    }}
                  >
                    {value}
                  </p>
                </div>
              </div>
            ))}

            <div style={{ marginTop: "40px" }}>
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "9px",
                  color: "rgba(255,255,255,0.4)",
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
                      color: "rgba(255,255,255,0.4)",
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
                      color: "rgba(255,255,255,0.5)",
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
            <SubmitButton loading={loading} />
            <p
              style={{
                textAlign: "center",
                fontFamily: "Space Mono, monospace",
                fontSize: "9px",
                color: "rgba(255,255,255,0.3)",
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
