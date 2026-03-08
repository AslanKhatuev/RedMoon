import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.1)",
        padding: "48px 24px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "24px",
                color: "#ffffff",
                letterSpacing: "0.3em",
              }}
            >
              RedMoon
            </span>
            <span
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "8px",
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "0.5em",
                marginTop: "2px",
              }}
            >
              Photo · Video · Art
            </span>
          </Link>

          {/* Ikoner */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {[
              { href: "mailto:post@redmoon.no", Icon: Mail },
              { href: "tel:+47", Icon: Phone },
              { href: "https://instagram.com", Icon: Instagram },
            ].map(({ href, Icon }) => (
              <a
                key={href}
                href={href}
                style={{
                  width: "36px",
                  height: "36px",
                  border: "1px solid rgba(255,255,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  textDecoration: "none",
                }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "9px",
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "0.3em",
            }}
          >
            © {new Date().getFullYear()} RedMoon Production
          </p>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            margin: "32px 0",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
          }}
        />

        {/* Tjenester */}
        <p
          style={{
            textAlign: "center",
            fontFamily: "Space Mono, monospace",
            fontSize: "9px",
            color: "rgba(255,255,255,0.6)",
            textTransform: "uppercase",
            letterSpacing: "0.3em",
          }}
        >
          Bryllup · Portrett · Video · Lovzar · Avskjedsfest · Arrangementer ·
          Street
        </p>
      </div>
    </footer>
  );
}
