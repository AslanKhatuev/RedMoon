export const dynamic = "force-dynamic";
import { TESTIMONIALS } from "@/lib/data";
import { getTestimonials, getAboutPage } from "@/lib/strapi";

export default async function OmOssPage() {
  const [testimonials_raw, aboutPage] = await Promise.all([
    getTestimonials(),
    getAboutPage(),
  ]);
  let testimonials = testimonials_raw;
  if (!testimonials || testimonials.length === 0) {
    testimonials = TESTIMONIALS;
  } else {
    testimonials = testimonials.map((t: any) => ({
      id: t.id,
      name: t.name,
      text: t.text,
      rating: t.rating,
      service: t.service,
      date: t.date,
    }));
  }

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
              color: "rgba(255,255,255,0.5)",
              marginBottom: "16px",
            }}
          >
            Om oss
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
            Vår Historie
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

        {/* Om tekst */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "48px",
            alignItems: "start",
            marginBottom: "80px",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(1.4rem,3vw,2rem)",
                fontWeight: 300,
                color: "#ffffff",
                fontStyle: "italic",
                lineHeight: 1.4,
                marginBottom: "24px",
              }}
            >
              {aboutPage?.quto || "Kunsten å fortelle historier gjennom linsen"}
            </p>
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.9,
                marginBottom: "16px",
              }}
            >
              {aboutPage?.paragraph1 ||
                "Vi er et dedikert team av fotografer og videografer med lidenskap for å fange livets viktigste øyeblikk."}
            </p>
            <p
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.9,
              }}
            >
              {aboutPage?.paragraph2 ||
                "Vi spesialiserer oss på kulturelle bryllup og arrangementer, og forstår dybden og skjønnheten i tradisjonelle seremonier."}
            </p>
          </div>

          {/* Verdi-props */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
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
                  borderLeft: "1px solid rgba(255,255,255,0.15)",
                  paddingLeft: "16px",
                }}
              >
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "13px",
                    color: "#ffffff",
                    marginBottom: "6px",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.4)",
                    lineHeight: 1.5,
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
              color: "rgba(255,255,255,0.5)",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            Kundene sier
          </p>
          <h2
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(1.8rem,4vw,3.5rem)",
              fontWeight: 300,
              color: "#ffffff",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Anmeldelser
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
              gap: "2px",
            }}
          >
            {testimonials.map((t: any) => (
              <div
                key={t.id}
                style={{ backgroundColor: "#0a0a0a", padding: "32px 24px" }}
              >
                <div
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "64px",
                    color: "rgba(255,255,255,0.05)",
                    lineHeight: 1,
                    marginBottom: "12px",
                  }}
                >
                  "
                </div>
                <div
                  style={{ display: "flex", gap: "4px", marginBottom: "16px" }}
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span
                      key={i}
                      style={{ color: "#ffffff", fontSize: "12px" }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: "clamp(16px,2.5vw,18px)",
                    fontWeight: 300,
                    color: "#ffffff",
                    fontStyle: "italic",
                    lineHeight: 1.7,
                    marginBottom: "20px",
                  }}
                >
                  "{t.text}"
                </p>
                <div
                  style={{
                    height: "1px",
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0.3), transparent)",
                    marginBottom: "14px",
                  }}
                />
                <p
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "13px",
                    color: "#ffffff",
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontFamily: "Space Mono, monospace",
                    fontSize: "9px",
                    color: "rgba(255,255,255,0.4)",
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
