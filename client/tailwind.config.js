/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        MyBeige: "#F7F0E8",
        MyLightBlue: "##d1ffff",
        MyBlue: "#9187e9",
      },
    },
    screens: {
      lg: { max: "1023px" },

      sm: { max: "932px" },
    },
  },
  plugins: [],
};
