import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : '#4A78ED',
        secondary : '#828DA9',
        black : '#06090D',
        gray : '#181B20',
        lightgray : '#1A1D22',
      }
    },
  },
  plugins: [],
};
export default config;
