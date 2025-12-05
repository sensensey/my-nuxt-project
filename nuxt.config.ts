export default defineNuxtConfig({
  css: ["~/assets/tailwind.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})