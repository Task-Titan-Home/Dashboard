const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "customGrey",
        "default-100": "#1e1e1e", // Example: dark gray

        customGrey: "#090909", // Your custom grey color
        customGrey2: "#0f1011",
        customGrey3: "#1A1A1A",
        transparent: "transparent",
        linearGrey: "linear-gradient( #1C1C1C , #050505)",
        linearGrey2: "linear-gradient( #393737 , #050505)",
        white: "#fff",
        "off-white": "#f7f8f8",
        "transparent-white": "rgba(255, 255, 255, 0.08)",
        background: "#000212",
        grey: "#858699",
        "grey-dark": "#222326",
        "primary-text": "#b1b2b3",
      },
    },

    backgroundImage: {
      linearGrey: "linear-gradient(#1C1C1C, #050505)", // Corrected gradient definition
      linearGrey2: "linear-gradient(#393737, #050505)", // Corrected gradient definition

      "primary-gradient":
        "linear-gradient(92.88deg, rgb(58, 58, 60) 9.16%, rgb(75, 75, 77) 43.89%, rgb(92, 92, 93) 64.72%)",
      "page-gradient":
        "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(105,105,105,0.3), transparent)",
      "hero-gradient":
        "radial-gradient(ellipse 80% 80% at 80% 80%, rgba(77,77,77,0.1), transparent), radial-gradient(ellipse 50% 80% at 80% 50%, rgba(105,105,105,0.15), transparent)",
      "hero-glow":
        "conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(105, 105, 105) 0deg, rgb(128, 128, 128) 67.5deg, rgb(160, 160, 160) 198.75deg, rgb(96, 96, 96) 251.25deg, rgb(64, 64, 64) 301.88deg, rgb(105, 105, 105) 360deg)",
      "glow-lines":
        "linear-gradient(var(--direction),#9d9bf2 0.43%,#7877c6 14.11%,rgba(120,119,198,0) 62.95%)",
      "radial-faded":
        "radial-gradient(circle at bottom center, var(--color), transparent 70%)",
      "glass-gradient":
        "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
    },

    boxShadow: {
      primary: "rgb(80 63 205 / 50%) 0px 1px 40px",
    },
    transitionDelay: {
      0: "0ms",
    },
    keyframes: {
      "fade-in": {
        from: { opacity: 0, transform: "translateY(-10px)" },
        to: { opacity: 1, transform: "none" },
      },
      "image-rotate": {
        "0%": { transform: "rotateX(25deg)" },
        "25%": { transform: "rotateX(25deg) scale(0.9)" },
        "60%": { transform: "none" },
        "100%": { transform: "none" },
      },
      "image-glow": {
        "0%": {
          opacity: 0,
          "animation-timing-function": "cubic-bezier(0.74,0.25,0.76,1)",
        },
        "10%": {
          opacity: 1,
          "animation-timing-function": "cubic-bezier(0.12,0.01,0.08,0.99)",
        },
        "100%": {
          opacity: 0.2,
        },
      },
      "sketch-lines": {
        "0%": { "stroke-dashoffset": 1 },
        "50%": { "stroke-dashoffset": 0 },
        "99%": { "stroke-dashoffset": 0 },
        "100%": { visiblity: "hidden" },
      },
      "glow-line-horizontal": {
        "0%": { opacity: 0, transform: "translateX(0)" },
        "5%": { opacity: 1, transform: "translateX(0)" },
        "90%": { opacity: 1 },
        "100%": { opacity: 0, transform: "translateX(min(60vw, 45rem))" },
      },
      "glow-line-vertical": {
        "0%": { opacity: 0, transform: "translateY(0)" },
        "5%": { opacity: 1, transform: "translateY(0)" },
        "90%": { opacity: 1 },
        "100%": { opacity: 0, transform: "translateY(min(21vw, 45rem))" },
      },
      zap: {
        "0%, 9%, 11%, 100% ": {
          fill: "transparent",
        },
        "10%": {
          fill: "white",
        },
      },
      bounce: {
        "50%": {
          transform: "scale(0.98)",
        },
      },
    },
    animation: {
      "fade-in": "fade-in 1000ms var(--animation-delay, 0ms) ease forwards",
      "image-rotate": "image-rotate 1400ms ease forwards",
      "image-glow": "image-glow 4100ms 600ms ease-out forwards",
      "sketch-lines": "sketch-lines 1200ms ease-out forwards",
      "glow-line-horizontal":
        "glow-line-horizontal var(--animation-duration) ease-in forwards",
      "glow-line-vertical":
        "glow-line-vertical var(--animation-duration) ease-in forwards",
      zap: "zap 2250ms calc(var(--index) * 20ms) linear infinite",
      bounce: "240ms ease 0s 1 running bounce",
    },
  },
  darkMode: "class",
  plugins: [
    nextui(), // Keep your existing plugins
    // Adding custom plugin for gradient text
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        ".gradient-text": {
          background:
            "linear-gradient(to right, #D9B46D 32%, #4A4846 54%, #B6ABA2 70%)",
          "-webkit-background-clip": "text",
          "background-clip": "text",
          color: "transparent",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
