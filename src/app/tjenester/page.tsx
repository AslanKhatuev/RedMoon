"use client";

import { SERVICES } from "@/lib/data";

export default function TjenesterPage() {
  const videoServices = SERVICES.filter((s) => s.category === "video");
  const photoServices = SERVICES.filter((s) => s.category === "photo");

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#050505",
        paddingTop: "120px",
        paddingBottom: "80px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
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
            Hva vi tilbyr
          </p>
          <h1
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2.5rem,6vw,5rem)",
              fontWeight: 300,
              color: "#e0e0e0",
              marginBottom: "24px",
            }}
          >
            Våre Tjenester
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

        {/* Video seksjonen */}
        <div style={{ marginBottom: "64px" }}>
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "10px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "rgba(212,168,67,0.5)",
              marginBottom: "32px",
            }}
          >
            — Video
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "2px",
            }}
          >
            {videoServices.map((service) => (
              <div
                key={service.id}
                style={{
                  backgroundColor: "#0a0a0a",
                  padding: "32px",
                  borderTop: "1px solid transparent",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#111111")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0a0a0a")
                }
              >
                <div style={{ fontSize: "28px", marginBottom: "16px" }}>
                  {service.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "22px",
                    fontWeight: 300,
                    color: "#e0e0e0",
                    marginBottom: "12px",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "13px",
                    fontWeight: 300,
                    color: "rgba(200,200,200,0.5)",
                    lineHeight: 1.7,
                  }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Foto seksjonen */}
        <div>
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "10px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "rgba(212,168,67,0.5)",
              marginBottom: "32px",
            }}
          >
            — Foto
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "2px",
            }}
          >
            {photoServices.map((service) => (
              <div
                key={service.id}
                style={{
                  backgroundColor: "#0a0a0a",
                  padding: "32px",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#111111")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0a0a0a")
                }
              >
                <div style={{ fontSize: "28px", marginBottom: "16px" }}>
                  {service.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "22px",
                    fontWeight: 300,
                    color: "#e0e0e0",
                    marginBottom: "12px",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "13px",
                    fontWeight: 300,
                    color: "rgba(200,200,200,0.5)",
                    lineHeight: 1.7,
                  }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
