/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'circular-web': ["circular-web", "sans-serif"],
        'robert-medium' : ["robert-medium", "sans-serif"],
        'robert-regular' : ["robert-regular", "sans-serif"],
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
      },
    },
  },
  plugins: [],
}