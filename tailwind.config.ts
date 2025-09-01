import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          dark: "#4b2e2b",   // deep earthy brown
          medium: "#7b4f44", // softer brown
          light: "#c7a97a",  // tan accent
        },
        green: {
          dark: "#2f4f2f",   // deep forest green
          medium: "#4a6741", // earthy green
          light: "#8fb996",  // soft sage
        },
        cream: {
          DEFAULT: "#fdfcf7", // background cream
        },
      },
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
  },
  plugins: [],
};

export default config;
