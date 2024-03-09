/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./resources/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      spacing: {
        144: "36rem",
        120: "30rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
