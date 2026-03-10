export const dynamic = "force-dynamic";

export default function PrislistePage() {
  const services = [
    {
      title: "Polterabend",
      items: [
        "Fotografering av polterabend",
        "Kunstnerisk fargekorrigering",
        "Kort trailer for reels",
        "Video av polterabend opptil 25 min",
      ],
      price: "10 000,-",
    },
    {
      title: "Bryllup",
      items: [
        "Fullstendig bryllupsfotografering",
        "1 trailer for reels",
        "Bryllupsvideo opptil 40 min, med lovestory 1t 30 min",
        "Kunstnerisk fargekorrigering",
      ],
      price: "15 000,-",
    },
    {
      title: "Portrett",
      items: [
        "Studio- eller utendørs fotografering",
        "Profesjonell redigering",
        "Opptil 20 ferdig redigerte bilder",
      ],
      price: "3 500,-",
    },
    {
      title: "Bedrift / Kommersiell",
      items: [
        "Produktfotografering eller teambilder",
        "Videopresentasjon av bedrift",
        "Redigering og fargekorrigering",
        "Levering av digitale filer",
      ],
      price: "8 000,-",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#050505",
        paddingTop: "120px",
        paddingBottom: "80px",
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "80px",
          padding: "0 24px",
        }}
      >
        <img
          src="/redmoon_logo3.png"
          alt="RedMoon Production"
          style={{
            height: "80px",
            width: "auto",
            marginBottom: "16px",
            display: "block",
            margin: "0 auto 16px",
          }}
        />
        <p
          style={{
            fontFamily: "Space Mono, monospace",
            fontSize: "10px",
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            marginBottom: "16px",
          }}
        >
          Foto · Video · Kunst
        </p>
        <h1
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
          }}
        >
          Prisliste
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.2)",
            }}
          />
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "8px" }}>
            ◆
          </span>
          <div
            style={{
              width: "60px",
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.2)",
            }}
          />
        </div>
      </div>

      {/* Priskort */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          flexDirection: "column",
          gap: "2px",
        }}
      >
        {services.map((service, i) => (
          <div
            key={i}
            style={{
              backgroundColor: i % 2 === 0 ? "#0a0a0a" : "#0d0d0d",
              border: "1px solid rgba(255,255,255,0.06)",
              padding: "clamp(32px, 5vw, 48px) clamp(24px, 5vw, 56px)",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "32px",
              alignItems: "start",
            }}
          >
            <div>
              {/* Tittel med rød sirkel */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#cc0000",
                    flexShrink: 0,
                  }}
                />
                <h2
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                    fontWeight: 400,
                    color: "#ffffff",
                    letterSpacing: "0.05em",
                  }}
                >
                  {service.title}
                </h2>
              </div>

              {/* Inkludert */}
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {service.items.map((item, j) => (
                  <li
                    key={j}
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "13px",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.8,
                      paddingLeft: "20px",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "rgba(255,255,255,0.25)",
                      }}
                    >
                      ◦
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pris */}
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <p
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 500,
                  color: "#ffffff",
                  letterSpacing: "0.05em",
                  whiteSpace: "nowrap",
                }}
              >
                {service.price}
              </p>
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  color: "rgba(255,255,255,0.3)",
                  textTransform: "uppercase",
                  marginTop: "4px",
                }}
              >
                kr
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bunntekst */}
      <div
        style={{
          textAlign: "center",
          marginTop: "64px",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          />
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "8px" }}>
            ◆
          </span>
          <div
            style={{
              width: "60px",
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          />
        </div>
        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "12px",
            fontWeight: 300,
            color: "rgba(255,255,255,0.3)",
            marginBottom: "32px",
            letterSpacing: "0.05em",
          }}
        >
          Alle priser er veiledende. Kontakt oss for skreddersydde pakker.
        </p>
        <a
          href="/kontakt"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "10px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            textDecoration: "none",
            color: "#ffffff",
            border: "1px solid rgba(255,255,255,0.4)",
            padding: "14px 40px",
            transition: "all 0.3s",
            display: "inline-block",
          }}
        >
          Kontakt oss
        </a>
      </div>
    </main>
  );
}
