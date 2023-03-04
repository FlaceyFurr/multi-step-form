/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
    },
    colors: {
      marineBlue: "hsl(354, 84%, 57%)",
      purplishBlue: "hsl(354, 84%, 57%)",
      pastelBlue: "hsl(228, 100%, 84%)",
      lightBlue: "hsl(206, 94%, 87%)",
      strawberryRed: "hsl(354, 84%, 57%)",
      coolGray: "hsl(231, 11%, 63%)",
      lightGray: "hsl(229, 24%, 87%)",
      magnolia: "hsl(229, 24%, 87%)",
      alabaster: "hsl(231, 100%, 99%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
