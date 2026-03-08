import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        obsidian: {
          950: "#050505",
          900: "#0a0a0a",
          800: "#111111",
          700: "#1a1a1a",
        },
        gold: {
          300: "#f5d98b",
          400: "#e8c46a",
          500: "#d4a843",
          600: "#b8902e",
        },
        silver: {
          200: "#f0f0f0",
          300: "#e0e0e0",
          400: "#c8c8c8",
        },
      },
      letterSpacing: {
        widest2: "0.3em",
        widest3: "0.5em",
      },
    },
  },
  plugins: [],
};

export default config;