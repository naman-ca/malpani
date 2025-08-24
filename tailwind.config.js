/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/admin/index.html"],
  theme: {
    extend: {
      colors: {
        brand: "#2563EB"
      }
    }
  },
  plugins: []
};