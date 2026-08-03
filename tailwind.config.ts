import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#191F1E",
        parchment: "#FBF8F1",
        teal: { DEFAULT: "#14787A", deep: "#0C4E50", tint: "#E4F0EF" },
        gold: { DEFAULT: "#D9A227", soft: "#F3E3BD" },
        muted: "#5C6663",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: { site: "72rem" },
    },
  },
  plugins: [],
};
export default config;
