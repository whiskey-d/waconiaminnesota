import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a6fba",
        "accent-light": "#e8f2fb",
        navy: "#0f1f35",
        "text-primary": "#1a2433",
        "text-muted": "#64748b",
        border: "#e2e8f0",
        "open-green": "#16a34a",
        surface: "#f8fafc",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
