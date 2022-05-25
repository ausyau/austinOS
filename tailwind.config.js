module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      mono: ["JetBrains", "sans-serif"],
    },
    extend: {
      maxWidth: {
        nav: "16em",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
