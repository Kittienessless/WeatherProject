/** @type {import('tailwindcss').Config} */

module.exports = {
   content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./*.{ts,tsx}", // Include the main.tsx file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

