import { getHeroContent, getFeaturedSection } from "@/lib/strapi";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export default async function HomePage() {
  const [hero, featured] = await Promise.all([
    getHeroContent(),
    getFeaturedSection(),
  ]);

  const title = hero?.title || "Fang";
  const subtitle = hero?.subtitle || "Øyeblikket";
  const description =
    hero?.description ||
    "Profesjonell foto- og videografi for bryllup, arrangementer og kunstneriske prosjekter.";
  const bgImage = hero?.backgroundImage?.url
    ? hero.backgroundImage.url.startsWith("http")
      ? hero.backgroundImage.url
      : `${STRAPI_URL}${hero.backgroundImage.url}`
    : null;

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#050505",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Bakgrunnsbilde */}
      {bgImage && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(5,5,5,0.7)",
            }}
          />
        </div>
      )}

      {/* Hero innhold */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
          padding: "120px 24px 80px",
        }}
      >
        <p
          style={{
            fontFamily: "Space Mono, monospace",
            fontSize: "10px",
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            color: "rgba(212,168,67,0.6)",
            marginBottom: "24px",
          }}
        >
          Foto · Video · Kunst
        </p>

        <h1
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(3rem,10vw,8rem)",
            fontWeight: 300,
            color: "#e0e0e0",
            lineHeight: 1,
            marginBottom: "8px",
          }}
        >
          {title}
        </h1>

        <h2
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(3rem,10vw,8rem)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "#d4a843",
            lineHeight: 1,
            marginBottom: "32px",
          }}
        >
          {subtitle}
        </h2>

        {/* Dekorasjon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "1px",
              backgroundColor: "rgba(212,168,67,0.4)",
            }}
          />
          <span style={{ color: "#d4a843", fontSize: "8px" }}>◆</span>
          <div
            style={{
              width: "40px",
              height: "1px",
              backgroundColor: "rgba(212,168,67,0.4)",
            }}
          />
        </div>

        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(13px,2vw,16px)",
            fontWeight: 300,
            color: "rgba(200,200,200,0.6)",
            maxWidth: "500px",
            lineHeight: 1.8,
            marginBottom: "48px",
          }}
        >
          {description}
        </p>

        {/* Knapper */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "center",
          }}
        >
          <a
            href="/kontakt"
            style={{
              padding: "16px 32px",
              backgroundColor: "#d4a843",
              color: "#050505",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Book din sesjon
          </a>
          <a
            href="/galleri"
            style={{
              padding: "16px 32px",
              backgroundColor: "transparent",
              color: "#c8c8c8",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "1px solid rgba(200,200,200,0.2)",
            }}
          >
            Se galleri
          </a>
        </div>
      </div>

      {/* Stats */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          backgroundColor: "rgba(5,5,5,0.8)",
        }}
      >
        {[
          { num: "200+", label: "Bryllup" },
          { num: "5★", label: "Vurdering" },
          { num: "8 år", label: "Erfaring" },
        ].map((stat) => (
          <div
            key={stat.label}
            style={{
              padding: "24px",
              textAlign: "center",
              borderRight: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <p
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(1.5rem,4vw,2.5rem)",
                color: "#e0e0e0",
                fontWeight: 300,
              }}
            >
              {stat.num}
            </p>
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "9px",
                color: "rgba(200,200,200,0.4)",
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                marginTop: "4px",
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
      {/* Featured seksjon */}
      {featured && (
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "0",
            backgroundColor: "#0a0a0a",
          }}
        >
          {/* Bilde */}
          {featured.image?.url && (
            <div
              style={{
                minHeight: "400px",
                backgroundImage: `url(${
                  featured.image.url.startsWith("http")
                    ? featured.image.url
                    : `${STRAPI_URL}${featured.image.url}`
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          )}

          {/* Tekst */}
          <div style={{ padding: "clamp(40px, 6vw, 80px)" }}>
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
              {featured.subtitle}
            </p>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem,5vw,4rem)",
                fontWeight: 300,
                color: "#e0e0e0",
                marginBottom: "24px",
                lineHeight: 1.2,
              }}
            >
              {featured.title}
            </h2>
            <div
              style={{
                height: "1px",
                width: "60px",
                backgroundColor: "rgba(212,168,67,0.4)",
                marginBottom: "24px",
              }}
            />
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "rgba(200,200,200,0.6)",
                lineHeight: 1.9,
              }}
            >
              {featured.description}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
