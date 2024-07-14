// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "nuxt-particles",
    "nuxt-icon",
    "@nuxtjs/sitemap",
  ],

  css: ["@/assets/main.css"],

  image: {
    dir: "assets/images",
  },

  sitemap: {
    hostname: "https://www.axolutions.com.br",
  },

  compatibilityDate: "2024-07-14",
});