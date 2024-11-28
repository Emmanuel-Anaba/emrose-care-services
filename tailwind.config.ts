import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-background": "var(--primary-background)",
        "primary-border": "var(--primary-border)",
        "primary-text": "var(--primary-text)",
        "alternate-text": "var(--alternate-text)",
      },
    },
  },
  plugins: [],
} satisfies Config;
