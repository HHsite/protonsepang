/** @type {import('tailwindcss').Config} */

// tailwind.config.js
const { heroui  } = require("@heroui/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '100%', 
          md: '768px', 
          lg: '1024px', 
          xl: '1280px', 
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

