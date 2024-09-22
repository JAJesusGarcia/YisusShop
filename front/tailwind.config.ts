import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F3C304",
        secondary: "#242A31",
        tertiary: "#8C9293",
        quaternary: "#3d3c3c",
        quinary: "#eaebeb",
      },
      height: {
        navbar: "3rem",
        footer: "5rem",
      },
    },
  },
  plugins: [],
};
export default config;
