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
  css: ["~/src/assets/css/stylesheet.css"],
  modules: ["@nuxtjs/storybook", "@nuxt/icon"],
  storybook: {
    host: "http://localhost",
    port: 6006,
  },
  runtimeConfig: {
    public: {
      spaceId: process.env.NUXT_PUBLIC_API_BASE,
      accessToken: process.env.NUXT_API_SECRET
    }
  }
});
