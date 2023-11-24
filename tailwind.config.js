/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1180px",
    },
    extend: {
      fontFamily: {
        playFair: ['"Playfair Display"', "serif"],
        Quicksand: ["Quicksand", "sans-serif"],
      },
      backgroundImage: {
        heroImg: "url('../Assets/hero.webp')",
      },
      colors: {
        nil: "#2C98F0",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};

// font-family: 'Playfair Display', serif;
// font-family: 'Quicksand', sans-serif;
