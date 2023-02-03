/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3C3B5A",
        secondary: "#32324C",
        tPrimary: "#FFFFFF",
        tSecondary: "#DE5646",
        tNav: "rgba(0, 0, 0, .65)",
      },
      backgroundImage: {
        "profileImg": "url('/images/profilePic.jpg')",
      }
      
    },
    fontFamily: {
      sans: ["Quicksand", "sans-serif"],
      heading: ["Playfair Display", "sans-serif"],
    }
  },
  plugins: [],
}
