import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|table|ripple|spinner|checkbox|spacer).js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lBlack: '#1b1c1c',
        lLight: '#dfe8e5'
      },
      fontFamily: {
        Poppins: ["Poppins", "system-ui"],
      },
    },
  },
  plugins: [nextui()],
  darkMode: 'class',
};
export default config;
