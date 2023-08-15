import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      container: {
        screens: {
          DEFAULT: "100%",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1200px",
        },
        padding: {
          DEFAULT: "2rem",
        },
      },
    },
  },
  plugins: [],
};
export default config;
