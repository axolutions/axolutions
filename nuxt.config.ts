// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxt/ui", "@nuxt/image"],
  ui: {
    global: true,
  },
  css: ["@/assets/main.css"],
  
  image: {
    dir: 'assets/images',
},
});