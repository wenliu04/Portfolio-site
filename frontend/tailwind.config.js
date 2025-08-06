module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
            mobile: "url('/assets/Background.png')",
            tablet: "url('/assets/Background.png')",
            desktop: "url('/assets/Background.png')",
        }
    },
  },
  plugins: [],
};
