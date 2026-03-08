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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-obsidian-950/95 backdrop-blur-md border-b border-gold-500/10 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className="text-2xl text-gold-400 group-hover:text-gold-300 transition-colors duration-300"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                letterSpacing: "0.3em",
              }}
            >
              RedMoon
            </span>
            <span
              className="text-[9px] text-silver-400/50 uppercase"
              style={{
                fontFamily: "Space Mono, monospace",
                letterSpacing: "0.5em",
              }}
            >
              Photo · Video · Art
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-[11px] uppercase transition-colors duration-300 relative group ${
                      isActive
                        ? "text-gold-400"
                        : "text-silver-400/60 hover:text-gold-400"
                    }`}
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      letterSpacing: "0.3em",
                    }}
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-gold-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/kontakt"
            className="hidden md:block text-[10px] uppercase px-6 py-2.5 border border-gold-500/50 text-gold-400 hover:bg-gold-500/10 transition-all duration-300"
            style={{
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: "0.3em",
            }}
          >
            Book nå
          </Link>

          <button
            className="md:hidden text-gold-400 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-obsidian-950/98 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-3xl text-silver-200 hover:text-gold-400 transition-colors duration-300"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/kontakt"
          className="mt-12 text-[11px] uppercase px-8 py-3 border border-gold-500 text-gold-400 hover:bg-gold-500/10 transition-all duration-300"
        >
          Book nå
        </Link>
      </div>
    </>
  );
}
