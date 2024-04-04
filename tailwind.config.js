/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#01A3E0",
        "neutral-grey": "#252527",
        "text-secondary": "#AFB0B1",
        "text-secondary-light": "#6B6D6F",
        "text-primary": "#3C3D3D",
        "background-primary": "#F5F6F6",
        outline: "#E6E7E7",
        "primary-color-light": "#DEF3FF",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
