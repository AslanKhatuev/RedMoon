import { TESTIMONIALS } from "@/lib/data";

export default function OmOssPage() {
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
            Om oss
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
            Vår Historie
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

        {/* Om tekst */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
            marginBottom: "100px",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "2rem",
                fontWeight: 300,
                color: "#e0e0e0",
                fontStyle: "italic",
                lineHeight: 1.4,
                marginBottom: "32px",
              }}
            >
              "Kunsten å fortelle historier gjennom linsen"
            </p>
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "rgba(200,200,200,0.6)",
                lineHeight: 1.9,
                marginBottom: "20px",
              }}
            >
              Vi er et dedikert team av fotografer og videografer med lidenskap
              for å fange livets viktigste øyeblikk. Fra bryllupets første dans
              til lovzarens fulle intensitet – vi er der med kameraet.
            </p>
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "rgba(200,200,200,0.6)",
                lineHeight: 1.9,
              }}
            >
              Vi spesialiserer oss på kulturelle bryllup og arrangementer, og
              forstår dybden og skjønnheten i tradisjonelle seremonier.
            </p>
          </div>

          {/* Verdi-props */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
            }}
          >
            {[
              {
                title: "Kulturell forståelse",
                desc: "Vi kjenner tradisjoner og seremonier",
              },
              {
                title: "Hurtig levering",
                desc: "Redigert materiale innen avtalt tid",
              },
              {
                title: "RAW-filer inkl.",
                desc: "Du eier alltid ditt originalmateriale",
              },
              {
                title: "Diskret tilnærming",
                desc: "Vi smelter inn og fanger det ekte",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  borderLeft: "1px solid rgba(212,168,67,0.2)",
                  paddingLeft: "16px",
                }}
              >
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "13px",
                    color: "#e0e0e0",
                    marginBottom: "6px",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "10px",
                    color: "rgba(200,200,200,0.4)",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Anmeldelser */}
        <div>
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "10px",
              letterSpacing: "0.5em",
              textTransform: "uppercase",
              color: "rgba(212,168,67,0.6)",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            Kundene sier
          </p>
          <h2
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2rem,4vw,3.5rem)",
              fontWeight: 300,
              color: "#e0e0e0",
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            Anmeldelser
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "2px",
            }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                style={{
                  backgroundColor: "#0a0a0a",
                  padding: "40px 32px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "80px",
                    color: "rgba(212,168,67,0.08)",
                    lineHeight: 1,
                    marginBottom: "16px",
                  }}
                >
                  "
                </div>
                <div
                  style={{ display: "flex", gap: "4px", marginBottom: "20px" }}
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span
                      key={i}
                      style={{ color: "#e8c46a", fontSize: "12px" }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "18px",
                    fontWeight: 300,
                    color: "#e0e0e0",
                    fontStyle: "italic",
                    lineHeight: 1.7,
                    marginBottom: "24px",
                  }}
                >
                  "{t.text}"
                </p>
                <div
                  style={{
                    height: "1px",
                    background: "linear-gradient(90deg, #d4a843, transparent)",
                    marginBottom: "16px",
                  }}
                />
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "13px",
                    color: "#c8c8c8",
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "9px",
                    color: "rgba(200,200,200,0.4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    marginTop: "4px",
                  }}
                >
                  {t.service} · {t.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
