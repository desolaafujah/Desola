import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    container: {
      center: true, // centers the container by default
      padding: '1.5rem', // default padding, can be overridden
    },
  },
  plugins: [],
};

export default config;
