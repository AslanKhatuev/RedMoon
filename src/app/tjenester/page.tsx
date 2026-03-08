import { getServices } from "@/lib/strapi";
import { SERVICES } from "@/lib/data";

export default async function TjenesterPage() {
  let services = await getServices();

  // Bruk placeholder-data hvis Strapi er tom
  if (!services || services.length === 0) {
    services = SERVICES.map((s) => ({ ...s }));
  } else {
    services = services.map((s: any) => ({
      id: s.id,
      title: s.title,
      description: s.description,
      icon: s.icon,
      category: s.category,
      slug: s.slug,
    }));
  }

  const videoServices = services.filter((s: any) => s.category === "video");
  const photoServices = services.filter((s: any) => s.category === "photo");

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
            Hva vi tilbyr
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

        {/* Video */}
        {videoServices.length > 0 && (
          <div style={{ marginBottom: "48px" }}>
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "10px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "rgba(212,168,67,0.5)",
                marginBottom: "24px",
              }}
            >
              — Video
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
                gap: "2px",
              }}
            >
              {videoServices.map((service: any) => (
                <div
                  key={service.id}
                  style={{ backgroundColor: "#0a0a0a", padding: "28px 24px" }}
                >
                  <div style={{ fontSize: "26px", marginBottom: "12px" }}>
                    {service.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "clamp(18px,3vw,22px)",
                      fontWeight: 300,
                      color: "#e0e0e0",
                      marginBottom: "10px",
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
        )}

        {/* Foto */}
        {photoServices.length > 0 && (
          <div>
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "10px",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "rgba(212,168,67,0.5)",
                marginBottom: "24px",
              }}
            >
              — Foto
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
                gap: "2px",
              }}
            >
              {photoServices.map((service: any) => (
                <div
                  key={service.id}
                  style={{ backgroundColor: "#0a0a0a", padding: "28px 24px" }}
                >
                  <div style={{ fontSize: "26px", marginBottom: "12px" }}>
                    {service.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "clamp(18px,3vw,22px)",
                      fontWeight: 300,
                      color: "#e0e0e0",
                      marginBottom: "10px",
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
        )}
      </div>
    </main>
  );
}
