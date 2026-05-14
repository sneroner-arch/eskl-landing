import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#00003C",
          dark: "#000028",
          deep: "#0D0D55",
          light: "#14A0DC",
          accent: "#14A0DC",
          ink: "#00003C",
          muted: "#EBEBEB",
          softblue: "#E7F4FB",
        },
      },
      fontFamily: {
        sans: ['"Raleway"', "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
        display: ['"Raleway"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 14px 40px -12px rgba(0,0,60,0.22)",
        soft: "0 6px 22px -8px rgba(0,0,60,0.14)",
        glow: "0 18px 60px -18px rgba(20,160,220,0.55)",
      },
      maxWidth: {
        container: "1240px",
      },
      backgroundImage: {
        "hero-grad":
          "radial-gradient(1200px 600px at 80% -10%, rgba(20,160,220,0.45) 0%, rgba(20,160,220,0) 60%), linear-gradient(135deg, #00003C 0%, #050538 55%, #0D0D55 100%)",
        "grid":
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
