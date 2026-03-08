import Link from "next/link";

export default function HomePage() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#050505",
        overflow: "hidden",
      }}
    >
      {/* Content */}
      <div
        style={{
          textAlign: "center",
          padding: "0 24px",
          maxWidth: "900px",
          paddingBottom: "120px",
        }}
      >
        <p
          style={{
            fontFamily: "Space Mono, monospace",
            letterSpacing: "0.5em",
            fontSize: "10px",
            textTransform: "uppercase",
            color: "rgba(212,168,67,0.6)",
            marginBottom: "32px",
          }}
        >
          Foto · Video · Kunst
        </p>

        <h1
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontWeight: 300,
            lineHeight: 1,
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: "clamp(3rem,10vw,9rem)",
              color: "#e0e0e0",
            }}
          >
            Fang
          </span>
          <span
            style={{
              display: "block",
              fontSize: "clamp(3rem,10vw,9rem)",
              color: "#e8c46a",
              fontStyle: "italic",
            }}
          >
            Øyeblikket
          </span>
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            margin: "32px 0",
          }}
        >
          <div
            style={{
              height: "1px",
              width: "64px",
              background:
                "linear-gradient(to right, transparent, rgba(212,168,67,0.4))",
            }}
          />
          <span style={{ color: "rgba(212,168,67,0.5)" }}>◆</span>
          <div
            style={{
              height: "1px",
              width: "64px",
              background:
                "linear-gradient(to left, transparent, rgba(212,168,67,0.4))",
            }}
          />
        </div>

        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 300,
            color: "rgba(200,200,200,0.55)",
            maxWidth: "420px",
            margin: "0 auto 40px",
            lineHeight: 1.8,
            fontSize: "15px",
          }}
        >
          Profesjonell foto- og videografi for bryllup, arrangementer og
          kunstneriske prosjekter.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/kontakt"
            style={{
              padding: "14px 40px",
              backgroundColor: "#d4a843",
              color: "#050505",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Book din sesjon
          </Link>
          <Link
            href="/galleri"
            style={{
              padding: "14px 40px",
              border: "1px solid rgba(200,200,200,0.2)",
              color: "rgba(200,200,200,0.55)",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Se galleri
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: "1px solid rgba(255,255,255,0.05)",
          backgroundColor: "rgba(5,5,5,0.8)",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "20px 24px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          {[
            { num: "200+", label: "Bryllup dokumentert" },
            { num: "5★", label: "Vurdering" },
            { num: "8 år", label: "Erfaring" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "22px",
                  color: "#e8c46a",
                  fontWeight: 300,
                }}
              >
                {s.num}
              </p>
              <p
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "8px",
                  color: "rgba(200,200,200,0.35)",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  marginTop: "4px",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
