/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "p,h1,h2,h3,h4,h5,h6,ul,li,code,ol,th,tr,strong": {
              color: "rgb(223, 223, 223)",
            },
            mark: {
              color: "black",
              backgroundColor: "rgb(223, 223, 223)",
            },
          },
        },
      },
      fontFamily: {
        dotGothic16: ["DotGothic16", "sans-serif"],
        "social-reg": ["Social Regular", "sans-serif"],
        "social-light": ["Social Light", "sans-serif"],
        "social-thin": ["Social Thin", "sans-serif"],
        "social-medium": ["Social Medium", "sans-serif"],
        "social-black": ["Social Black", "sans-serif"],
        "social-hairling": ["Social Hairling", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  corePlugins: {
    fontFamily: true,
  },
};
