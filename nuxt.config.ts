export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    "@nuxt/ui"
  ],
  devtools: {
    enabled: true
  },
  css:["~/assets/css/main.css"],
  compatibilityDate: '2025-08-29',
})