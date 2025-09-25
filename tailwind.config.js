/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondary: "#8B5CF6",
        background: "#F3F4F6",
        text: "#505050",
      },
    },
  },
  plugins: [],
};
