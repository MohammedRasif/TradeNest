/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      gowun:["Gowun Batang", "serif"],
      caveat:["Caveat", "system-ui"],
      josefin:["Josefin Sans", "system-ui"]
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

