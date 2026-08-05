import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  darkMode: "class", // tema claro/oscuro se controla agregando/sacando la clase "dark" en <html>
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
