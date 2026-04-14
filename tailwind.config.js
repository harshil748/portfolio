/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050810",
          900: "#0a0e1a",
          800: "#0f1624",
          700: "#141d2e",
          600: "#1a2540",
        },
        emerald: {
          dark: "#0d4a38",
          DEFAULT: "#1a7a5e",
          light: "#22a07a",
          glow: "rgba(26,122,94,0.15)",
        },
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e2c97e",
          muted: "#8a7035",
          glow: "rgba(201,168,76,0.12)",
        },
        copper: {
          DEFAULT: "#b87333",
          light: "#d4924d",
        },
        burgundy: {
          DEFAULT: "#6b1f2a",
          light: "#8b2d3a",
        },
        ivory: {
          DEFAULT: "#e8e4d9",
          muted: "#a09880",
          dark: "#5a5648",
        },
        platinum: "#e8e8e8",
      },
      boxShadow: {
        "gold-glow": "0 0 20px rgba(201,168,76,0.15), 0 4px 24px rgba(0,0,0,0.4)",
        "emerald-glow": "0 0 20px rgba(26,122,94,0.2), 0 4px 24px rgba(0,0,0,0.4)",
        "card-lift": "0 8px 32px rgba(0,0,0,0.5), 0 2px 8px rgba(201,168,76,0.08)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out forwards",
        slideUp: "slideUp 0.5s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
