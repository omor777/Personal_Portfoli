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
        bgc: "#FFFFFF",
        textColor: "rgba(0,0,0,0.7)",
      },
      container: {
        center: true,
      },
      letterSpacing: {
        space: "5px",
      },
      boxShadow: {
        shadow:
          "box-shadow: box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
      },
    },
  },
  plugins: [],
};

// font-family: 'Playfair Display', serif;
// font-family: 'Quicksand', sans-serif;
