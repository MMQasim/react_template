/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["24px", "28px"],
      xl: ["28px", "32px"],
    },
  },
  plugins: [],
};
