import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lake: {
          DEFAULT: "#1e6fa8",
          50: "#eff8ff",
          100: "#dbeffe",
          200: "#bfe3fe",
          300: "#93d2fd",
          400: "#60b8fa",
          500: "#3b9af6",
          600: "#1e6fa8",
          700: "#1a5f91",
          800: "#1b5076",
          900: "#1c4362",
        },
        amber: {
          DEFAULT: "#e8892b",
          50: "#fff8ed",
          100: "#fff0d4",
          200: "#ffdca8",
          300: "#ffc271",
          400: "#ff9e38",
          500: "#e8892b",
          600: "#d97017",
          700: "#b45415",
          800: "#904219",
          900: "#743817",
        },
        dark: "#0f172a",
        body: "#1e293b",
        muted: "#64748b",
        surface: "#f8fafc",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
