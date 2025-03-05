import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        newgray: "var(--newgray)",
      },
    },
  },
  plugins: [],
};

export default config;
