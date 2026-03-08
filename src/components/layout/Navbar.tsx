"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/data";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.7s",
          padding: scrolled ? "12px 0" : "24px 0",
          backgroundColor: scrolled ? "rgba(5,5,5,0.95)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(212,168,67,0.1)" : "none",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "column",
              lineHeight: 1,
            }}
          >
            <span
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontSize: "24px",
                fontWeight: 300,
                color: "#e8c46a",
                letterSpacing: "0.3em",
              }}
            >
              REDMOON
            </span>
            <span
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "8px",
                color: "rgba(200,200,200,0.4)",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                marginTop: "2px",
              }}
            >
              Photo · Video · Art
            </span>
          </Link>

          {/* Desktop nav */}
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
            className="hidden-mobile"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontSize: "11px",
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      color: isActive ? "#e8c46a" : "rgba(200,200,200,0.6)",
                      transition: "color 0.3s",
                      paddingBottom: "4px",
                      borderBottom: isActive
                        ? "1px solid #d4a843"
                        : "1px solid transparent",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Book nå knapp */}
          <Link
            href="/kontakt"
            className="hidden-mobile"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "#e8c46a",
              border: "1px solid rgba(212,168,67,0.5)",
              padding: "10px 24px",
              transition: "all 0.3s",
            }}
          >
            Book nå
          </Link>

          {/* Hamburger */}
          <button
            className="show-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "#e8c46a",
              cursor: "pointer",
              padding: "8px",
            }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobilmeny */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          backgroundColor: "rgba(5,5,5,0.98)",
          backdropFilter: "blur(12px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.5s",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "32px",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "2.5rem",
                  fontWeight: 300,
                  color: pathname === item.href ? "#e8c46a" : "#e0e0e0",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/kontakt"
          style={{
            marginTop: "48px",
            fontFamily: "Montserrat, sans-serif",
            fontSize: "11px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            textDecoration: "none",
            color: "#e8c46a",
            border: "1px solid #d4a843",
            padding: "12px 32px",
          }}
        >
          Book nå
        </Link>
      </div>
    </>
  );
}
