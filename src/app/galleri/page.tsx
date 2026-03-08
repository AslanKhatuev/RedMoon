"use client";

import { useState } from "react";

const CATEGORIES = [
  "Alle",
  "Bryllup",
  "Video",
  "Portrett",
  "Familie",
  "Street",
  "Arrangement",
];

const GALLERY_ITEMS = [
  {
    id: "1",
    label: "Bryllupsportrett",
    category: "Bryllup",
    type: "image",
    cols: 1,
    rows: 2,
  },
  {
    id: "2",
    label: "Detaljer",
    category: "Bryllup",
    type: "image",
    cols: 1,
    rows: 1,
  },
  {
    id: "3",
    label: "Lovzar highlight",
    category: "Video",
    type: "video",
    cols: 1,
    rows: 1,
  },
  {
    id: "4",
    label: "Pre-wedding",
    category: "Bryllup",
    type: "image",
    cols: 2,
    rows: 1,
  },
  {
    id: "5",
    label: "Portrett sesjon",
    category: "Portrett",
    type: "image",
    cols: 1,
    rows: 1,
  },
  {
    id: "6",
    label: "Bryllupsfilm",
    category: "Video",
    type: "video",
    cols: 1,
    rows: 2,
  },
  {
    id: "7",
    label: "Familie",
    category: "Familie",
    type: "image",
    cols: 1,
    rows: 1,
  },
  {
    id: "8",
    label: "Street",
    category: "Street",
    type: "image",
    cols: 1,
    rows: 1,
  },
  {
    id: "9",
    label: "Feiring",
    category: "Arrangement",
    type: "image",
    cols: 2,
    rows: 1,
  },
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

export default function GalleriPage() {
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    activeCategory === "Alle"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((i) => i.category === activeCategory);

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
            Portfolio
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
            gap: "8px",
            marginBottom: "48px",
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "6px 16px",
                fontFamily: "Space Mono, monospace",
                fontSize: "9px",
                letterSpacing: "0.3em",
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
                transition: "all 0.3s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridAutoRows: "200px",
            gap: "4px",
          }}
        >
          {filtered.map((item, i) => (
            <div
              key={item.id}
              onClick={() => setLightbox(item.label)}
              style={{
                gridColumn: `span ${item.cols}`,
                gridRow: `span ${item.rows}`,
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
              {/* Subtle pattern */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: 0.05,
                  backgroundImage:
                    "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(212,168,67,0.3) 10px, rgba(212,168,67,0.3) 11px)",
                }}
              />

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
                }}
              >
                {item.category}
              </div>

              {/* Video indicator */}
              {item.type === "video" && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    right: "12px",
                    color: "rgba(232,196,106,0.6)",
                    fontSize: "16px",
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
                }}
              >
                <span style={{ fontSize: "24px", color: "#e8c46a" }}>
                  {item.type === "video" ? "▶" : "⊕"}
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
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
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
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "2rem",
                color: "#e0e0e0",
                fontStyle: "italic",
              }}
            >
              {lightbox}
            </p>
            <p
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "9px",
                color: "rgba(200,200,200,0.3)",
                marginTop: "16px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}
            >
              Koble til CMS for å vise innhold
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
