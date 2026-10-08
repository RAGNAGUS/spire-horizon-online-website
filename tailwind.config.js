/** @type {import('tailwindcss').Config} */
// "Aetheria sky": deep dusk blue up top, bright sky and clouds, gold from the creature cards.
export default {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      colors: {
        dusk: { 950: "#060b1c", 900: "#0a1330", 800: "#112150", 700: "#1a3170", 600: "#27469a" },
        sky: { 300: "#9fd4ff", 400: "#6fb6ff", 500: "#3f93f0" },
        cloud: { 50: "#f6faff", 100: "#eaf3ff", 200: "#d5e6fb" },
        gold: { 300: "#ffe2a0", 400: "#f5c76a", 500: "#e3a83f", 600: "#b9802a" },
        violet: { 500: "#7a68c2", 600: "#5f4ea6" },
      },
      fontFamily: {
        display: ['"Marko One"', "Georgia", "serif"],
        sans: ['"Nunito"', "system-ui", "sans-serif"],
      },
      maxWidth: { site: "78rem" },
      boxShadow: {
        gold: "0 0 0 1px rgba(245,199,106,0.55), 0 18px 50px -14px rgba(227,168,63,0.6)",
        lift: "0 30px 60px -30px rgba(6,11,28,0.85)",
      },
      keyframes: {
        drift: { "0%": { transform: "translateX(-6%)" }, "100%": { transform: "translateX(6%)" } },
        bob: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        shine: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
      },
      animation: {
        drift: "drift 40s ease-in-out infinite alternate",
        bob: "bob 5s ease-in-out infinite",
        shine: "shine 4s linear infinite",
      },
    },
  },
  plugins: [],
};
