/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        title:["Alan Sans","sans-serif"],
        Pop:["Montserrat","sans-serif"],
        Anton:["Anton","sans-serif"],
        Raleway:["Raleway","sans-serif"],
        League:["League Spartan","sans-serif"],
        Momo:["Momo Trust Display","sans-serif"],
      }
    },
  },
  plugins: [],
}