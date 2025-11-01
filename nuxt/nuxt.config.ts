export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: [
    "~/assets/scss/global.scss",
    "~/assets/scss/_variables.scss",
    "~/assets/scss/_fonts.scss",
    "~/assets/scss/_form.scss",
  ],
  modules: ["@nuxtjs/color-mode"],
});
