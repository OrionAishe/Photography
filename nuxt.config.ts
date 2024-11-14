// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  components: [
    {
      path: "~/src/components",
      extensions: [".vue"],
      enabled: true,
    },
  ],
  css: ['~/src/assets/css/stylesheet.css'],
  modules: ["@nuxtjs/storybook"],
  storybook: {
    host: "http://localhost",
    port: 6006,
  },
});
