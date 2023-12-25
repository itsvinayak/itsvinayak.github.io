import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  // darkMode: ["class", "[data-mode="dark"]"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "backAndForward": {
        "0%": { transform: "translateX(0)" },
        "20%": { transform: "translateX(25%)" },
        "40%": { transform: "translateX(-25%)" },
        "60%": { transform: "translateX(25%)" },
        "100%": { transform: "translateX(-25%)" },
        }
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
export default config;
