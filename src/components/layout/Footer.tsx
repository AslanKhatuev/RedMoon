import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link href="/" className="flex flex-col items-center md:items-start">
            <span
              className="text-2xl text-gold-400"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                letterSpacing: "0.3em",
              }}
            >
              RedMoon
            </span>
            <span
              className="text-[8px] text-silver-400/30 uppercase mt-0.5"
              style={{
                fontFamily: "Space Mono, monospace",
                letterSpacing: "0.5em",
              }}
            >
              Photo · Video · Art
            </span>
          </Link>

          <div className="flex items-center gap-4">
            {[
              { href: "mailto:post@redmoon.no", Icon: Mail },
              { href: "tel:+47", Icon: Phone },
              { href: "https://instagram.com", Icon: Instagram },
            ].map(({ href, Icon }) => (
              <a
                key={href}
                href={href}
                className="w-9 h-9 border border-white/8 flex items-center justify-center text-silver-400/40 hover:text-gold-400 hover:border-gold-500/30 transition-all duration-300"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          <p
            className="text-[9px] uppercase text-silver-400/20"
            style={{
              fontFamily: "Space Mono, monospace",
              letterSpacing: "0.3em",
            }}
          >
            © {new Date().getFullYear()} RedMoon Studio
          </p>
        </div>

        <div className="h-px my-8 bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

        <p
          className="text-center text-[9px] text-silver-400/15"
          style={{
            fontFamily: "Space Mono, monospace",
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
