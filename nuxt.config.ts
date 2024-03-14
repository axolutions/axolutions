// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxtjs/tailwindcss", "nuxt-particles", "nuxt-icon"],

  css: ["@/assets/main.css"],

  image: {
    dir: "assets/images",
  },
});
