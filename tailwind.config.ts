import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "from-cyan-700": "linear-gradient(to right, var(--tw-gradient-stops))",
        'gradient-to-l': 'linear-gradient(to left, #003A70, #FFFFFF)',
      },
      animation: {
        "pulse-fast" : "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        'rotate-right': 'rotate-right 0.5s forwards',
        'rotate-left': 'rotate-left 0.5s forwards',
      },
      keyframes: {
        'rotate-right': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        'rotate-left': {
          '0%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      colors: { 
        
        primary: {
          "50": "#eff6ff",
          "100": "#dbeafe",
          "200": "#bfdbfe",
          "300": "#93c5fd",
          "400": "#60a5fa",
          "500": "#3b82f6",
          "600": "#2563eb",
          "700": "#1d4ed8",
          "800": "#1e40af",
          "900": "#1e3a8a",
          "950": "#172554",
          "best": "#003A70",
          "team": "#0055a4"
        }
      },
      fontFamily: {
        'nunito': [
          ' "Nunito" '          
        ],
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};

export default config;
