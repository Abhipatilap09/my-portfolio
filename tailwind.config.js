/** @type {import('tailwindcss').Config} */
export default {
  // The 'content' array lists all the files where you use Tailwind classes.
  // Tailwind scans these files to generate the necessary CSS bundle.
  content: [
    "./index.html",
    // This is the CRITICAL line: it ensures all files in the 'src' directory
    // with JS, TS, JSX, or TSX extensions are scanned (where App.jsx is).
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    // You can customize fonts, colors, and breakpoints here.
    extend: {
      // Adding 'Inter' to the list of available sans-serif fonts
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      // Optionally defining your primary accent color for easy reuse
      colors: {
        accent: '#0ea5a4', // A clean teal color for buttons and highlights
      }
    },
  },
  plugins: [],
}