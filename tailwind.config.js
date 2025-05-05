// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // adjust depending on your file structure
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        flamenco: {
          rose: "#CFA082",
          umber: "#5C3A2E",
          sangria: "#B0413E",
          gold: "#D9B576",
          adobe: "#F2E5DC",
          charcoal: "#2E2B2B",
        },
      },
    },
  },
  plugins: [],
};
