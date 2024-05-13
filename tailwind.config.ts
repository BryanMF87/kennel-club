import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ccBlue1: '#EFF3FD',
        ccBlue2: '#3261E9',
        ccBlue3: '#2851E3',
        ccYellow: '#FFBF19',
        ccGray1: '#CCC',
        ccGray2: '#757575',
        ccGray3: '#292929',
      },
      screens: {
        'xs': '450px',
      }
    },
  },
  plugins: [],
};
export default config;
