/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],
  theme: {},
  purge: ["./index.html", "./src/**/*.{svelte,js,ts}"], //for unused css
  variants: {
    extend: {},
  },
  darkmode: false, // or 'media' or 'class'
  daisyui: {
    themes: [
      {
        light: {
          primary: "#0c9249",
          "primary-content": "#ffffff",
          secondary: "#035e7b",
          "secondary-content": "#ffffff",
          accent: "#37cdbe",
          "accent-content": "#ffffff",
          neutral: "#1a202c",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f1f1f2",
          "base-300": "#e9e9eb",
          "base-content": "#1a202c",
          info: "#2094f3",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
      {
        dark: {
          primary: "#0c9249",
          "primary-content": "#ffffff",
          secondary: "#035e7b",
          "secondary-content": "#ffffff",
          accent: "#37cdbe",
          "accent-content": "#ffffff",
          neutral: "#f2f2f2",
          "neutral-content": "#1a202c",
          "base-100": "#1a202c",
          "base-200": "#2d3748",
          "base-300": "#3a4558",
          "base-content": "#ffffff",
          info: "#2094f3",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
      "emerald",
    ],
  },
};
