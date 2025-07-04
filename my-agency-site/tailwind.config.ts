import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ash: "#B5C2B7",
        cool: "#8C93A8",
        violet: {
          light: "#62466B",
          dark: "#45364B",
        },
        raisin: "#2D2327",
      },
    },
  },
  plugins: [],
  
};

export default config;
