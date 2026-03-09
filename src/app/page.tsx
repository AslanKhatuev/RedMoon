export const dynamic = "force-dynamic";

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
            color: "rgba(255,255,255,0.6)",
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
            color: "#ffffff",
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
            color: "#ffffff",
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
              backgroundColor: "rgba(255,255,255,0.4)",
            }}
          />
          <span style={{ color: "#ffffff", fontSize: "8px" }}>◆</span>
          <div
            style={{
              width: "40px",
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.4)",
            }}
          />
        </div>

        <p
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "clamp(13px,2vw,16px)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.6)",
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
              backgroundColor: "#ffffff",
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
              color: "#ffffff",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.4)",
            }}
          >
            Se galleri
          </a>
        </div>
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
          <div style={{ padding: "clamp(40px, 6vw, 80px)" }}>
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
              {featured.subtitle}
            </p>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(2rem,5vw,4rem)",
                fontWeight: 300,
                color: "#ffffff",
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
                backgroundColor: "rgba(255,255,255,0.3)",
                marginBottom: "24px",
              }}
            />
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "rgba(255,255,255,0.6)",
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
