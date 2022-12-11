/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
    colors: {
      'orange': '#ff861a',
      'grey': '#333333',
      'black': '#000000',
      'white': '#ffffff',
      'stone': '#1c1917'
    },
    transform: {
      'origin': '140px'
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
