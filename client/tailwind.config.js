/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  corePlugins: {
    preflight: false, // Disable Tailwind's base styles
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
