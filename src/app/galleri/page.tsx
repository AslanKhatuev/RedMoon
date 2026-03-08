"use client";

import { useState, useEffect } from "react";
import { getGalleryItems } from "@/lib/strapi";

const CATEGORIES = [
  "Alle",
  "Bryllup",
  "Video",
  "Portrett",
  "Familie",
  "Street",
  "Arrangement",
];
const COLORS = [
  "#0a0a0a",
  "#111111",
  "#0d0d0d",
  "#131313",
  "#0f0f0f",
  "#141414",
  "#121212",
  "#161616",
  "#0e0e0e",
];

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export default function GalleriPage() {
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [lightbox, setLightbox] = useState<any | null>(null);
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGalleryItems().then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  const filtered =
    activeCategory === "Alle"
      ? items
      : items.filter(
          (i) => i.category?.toLowerCase() === activeCategory.toLowerCase()
        );

  const getMediaUrl = (item: any) => {
    const url = item.media?.url;
    if (!url) return null;
    return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
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
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
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
            Portfolio
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
            Galleri
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

        {/* Filter */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "4px",
            marginBottom: "40px",
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 14px",
                fontFamily: "Space Mono, monospace",
                fontSize: "9px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                backgroundColor: "transparent",
                border: "none",
                borderBottom:
                  activeCategory === cat
                    ? "1px solid #d4a843"
                    : "1px solid transparent",
                color:
                  activeCategory === cat ? "#e8c46a" : "rgba(200,200,200,0.4)",
                cursor: "pointer",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading && (
          <p
            style={{
              textAlign: "center",
              fontFamily: "Space Mono, monospace",
              fontSize: "10px",
              color: "rgba(200,200,200,0.3)",
              letterSpacing: "0.3em",
            }}
          >
            LASTER...
          </p>
        )}

        {/* Tom galleri melding */}
        {!loading && filtered.length === 0 && (
          <p
            style={{
              textAlign: "center",
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "24px",
              color: "rgba(200,200,200,0.2)",
              fontStyle: "italic",
            }}
          >
            Ingen bilder her ennå
          </p>
        )}

        {/* Grid */}
        {!loading && filtered.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(100%, 240px), 1fr))",
              gridAutoRows: "220px",
              gap: "4px",
            }}
          >
            {filtered.map((item, i) => {
              const mediaUrl = getMediaUrl(item);
              const isVideo = item.type === "video";

              return (
                <div
                  key={item.id}
                  onClick={() => setLightbox(item)}
                  style={{
                    backgroundColor: COLORS[i % COLORS.length],
                    position: "relative",
                    cursor: "pointer",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    const overlay = e.currentTarget.querySelector(
                      ".overlay"
                    ) as HTMLElement;
                    if (overlay) overlay.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    const overlay = e.currentTarget.querySelector(
                      ".overlay"
                    ) as HTMLElement;
                    if (overlay) overlay.style.opacity = "0";
                  }}
                >
                  {/* Bilde eller video thumbnail */}
                  {mediaUrl && !isVideo && (
                    <img
                      src={mediaUrl}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        inset: 0,
                      }}
                    />
                  )}
                  {mediaUrl && isVideo && (
                    <video
                      src={mediaUrl}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        position: "absolute",
                        inset: 0,
                      }}
                      muted
                    />
                  )}

                  {/* Pattern hvis ingen media */}
                  {!mediaUrl && (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        opacity: 0.05,
                        backgroundImage:
                          "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(212,168,67,0.3) 10px, rgba(212,168,67,0.3) 11px)",
                      }}
                    />
                  )}

                  {/* Category chip */}
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      backgroundColor: "rgba(5,5,5,0.7)",
                      padding: "3px 8px",
                      fontFamily: "Space Mono, monospace",
                      fontSize: "8px",
                      color: "rgba(212,168,67,0.7)",
                      textTransform: "uppercase",
                      letterSpacing: "0.2em",
                      zIndex: 2,
                    }}
                  >
                    {item.category}
                  </div>

                  {isVideo && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "12px",
                        right: "12px",
                        color: "rgba(232,196,106,0.6)",
                        fontSize: "16px",
                        zIndex: 2,
                      }}
                    >
                      ▶
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div
                    className="overlay"
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "rgba(5,5,5,0.6)",
                      opacity: 0,
                      transition: "opacity 0.4s",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      zIndex: 3,
                    }}
                  >
                    <span style={{ fontSize: "24px", color: "#e8c46a" }}>
                      {isVideo ? "▶" : "⊕"}
                    </span>
                    <p
                      style={{
                        fontFamily: "Space Mono, monospace",
                        fontSize: "9px",
                        color: "#e0e0e0",
                        textTransform: "uppercase",
                        letterSpacing: "0.2em",
                      }}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            backgroundColor: "rgba(5,5,5,0.95)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              background: "none",
              border: "none",
              color: "#c8c8c8",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
          <div
            style={{ textAlign: "center", maxWidth: "90vw", maxHeight: "90vh" }}
          >
            {getMediaUrl(lightbox) && lightbox.type !== "video" && (
              <img
                src={getMediaUrl(lightbox)!}
                alt={lightbox.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                }}
              />
            )}
            {getMediaUrl(lightbox) && lightbox.type === "video" && (
              <video
                src={getMediaUrl(lightbox)!}
                controls
                autoPlay
                style={{ maxWidth: "100%", maxHeight: "80vh" }}
              />
            )}
            <p
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "clamp(1.2rem,4vw,2rem)",
                color: "#e0e0e0",
                fontStyle: "italic",
                marginTop: "16px",
              }}
            >
              {lightbox.title}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
