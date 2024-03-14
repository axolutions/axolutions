// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxt/image", "@nuxtjs/tailwindcss", "nuxt-particles"],

  css: ["@/assets/main.css"],

  image: {
    dir: "assets/images",
  },
});
